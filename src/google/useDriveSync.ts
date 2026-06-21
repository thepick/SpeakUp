// Heart of the integration. Combines GoogleAuthManager + drive-api + merge
// into a single React hook that owns the canonical DriveData and exposes
// stable callbacks to the rest of the app.
//
// Lifecycle (mirrors the plan):
//
//   1. Mount → wait for auth state
//   2. isAuthenticated && isInitializing === false && !hasHydratedRef
//      → hydrate(): download or create blank DriveData → setProgress
//   3. Practice → saveProgress(updates) → optimistic local update
//      → debounce 3s → pushToDrive()
//   4. Periodic 60s timer → pullAndMerge() → conditional push
//   5. Window focus → pull()
//   6. Online/offline detection → defer/resume pushes
//   7. signOut → flush pending → reset all state

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  createBlankDriveData,
  driveDataToProgress,
  type DriveData,
  type StudentProgress,
} from '../types.ts';
import { getDeviceId } from './auth.ts';
import { useAuth } from './useAuth.ts';
import {
  clearCachedFileId,
  downloadDriveFile,
  DriveApiError,
  findDriveFile,
  uploadDriveFile,
  withDriveRetry,
} from './drive-api.ts';
import { driveDataEquals, emptyDriveData, mergeDriveData } from './merge.ts';
import type { SyncStatus } from './types.ts';
import { SYNC_PULL_INTERVAL_MS, SYNC_SAVE_DEBOUNCE_MS } from './types.ts';

export interface DriveSyncState {
  /** Current progress (local view of truth — UI renders off this). */
  progress: StudentProgress | null;
  /** Total completed sessions across all units. */
  totalSessions: number;
  /** ISO date string of the most recently completed session, or empty. */
  lastSessionDate: string;
  /** High-level sync state — drives the SyncStatusIndicator icon. */
  syncStatus: SyncStatus;
  /** Human-readable status message (e.g. "Saving…", "Could not save — retrying"). */
  syncMessage: string;
  /** True during the initial Drive fetch / first-time create. */
  isHydrating: boolean;
}

export interface DriveSyncValue extends DriveSyncState {
  /** Apply a partial progress update + (optionally) bump the session count. */
  saveProgress: (
    update:
      | Partial<StudentProgress>
      | ((current: StudentProgress) => Partial<StudentProgress>),
    options?: { incrementSession?: boolean },
  ) => Promise<void>;
  /** Force an immediate pull-and-merge (used by the "Sync now" button). */
  forceSync: () => Promise<void>;
  /** Flush any queued push + clear all Drive state (called from sign-out). */
  resetSync: () => Promise<void>;
}

/**
 * Hook for components that need progress + sync status. Wraps the auth
 * context, so the calling component MUST live under <AuthProvider>.
 */
export function useDriveSync(): DriveSyncValue {
  const { state: authState, signOut } = useAuth();

  // ─── Core state ─────────────────────────────────────────────────────────────
  const [progress, setProgress] = useState<StudentProgress | null>(null);
  const [totalSessions, setTotalSessions] = useState(0);
  const [lastSessionDate, setLastSessionDate] = useState('');
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
  const [syncMessage, setSyncMessage] = useState('');
  const [isHydrating, setIsHydrating] = useState(false);

  // Refs — values that need to persist across renders but never trigger them.
  const driveDataRef = useRef<DriveData | null>(null);
  const hasHydratedRef = useRef(false);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPushingRef = useRef(false);
  const lastPushedRef = useRef<DriveData | null>(null);
  // Scoring updates that arrive before Drive hydration finishes are queued and
  // replayed against the hydrated data so nothing is lost.
  const pendingUpdatesRef = useRef<
    Array<(current: StudentProgress) => Partial<StudentProgress>>
  >([]);
  const pendingSessionIncrementRef = useRef(false);
  // Tracks the in-flight auth state so effects don't double-hydrate when the
  // user signs out + back in within a single render.
  const lastAuthUserIdRef = useRef<string | null>(null);
  // Stable accessor for auth state inside async callbacks.
  const authStateRef = useRef(authState);
  authStateRef.current = authState;

  // ─── Helpers ────────────────────────────────────────────────────────────────
  const updateStatus = useCallback((status: SyncStatus, message: string) => {
    setSyncStatus(status);
    setSyncMessage(message);
  }, []);

  /**
   * Apply a DriveData envelope to React state. Single source of truth for
   * what the UI sees. Also replays any buffered pre-hydration updates and the
   * buffered session increment so no work is lost after first download.
   */
  const applyDriveData = useCallback((data: DriveData): DriveData => {
    let mergedProgress = driveDataToProgress(data);
    let mergedTotalSessions = data.totalSessions;
    let mergedLastSessionDate = data.lastSessionDate;

    if (pendingSessionIncrementRef.current) {
      mergedTotalSessions += 1;
      mergedLastSessionDate = new Date().toISOString().slice(0, 10);
      pendingSessionIncrementRef.current = false;
    }
    for (const updater of pendingUpdatesRef.current) {
      const partial = updater(mergedProgress);
      mergedProgress = { ...mergedProgress, ...partial };
    }
    pendingUpdatesRef.current = [];

    const final: DriveData = {
      ...data,
      progress: mergedProgress,
      totalSessions: mergedTotalSessions,
      lastSessionDate: mergedLastSessionDate,
    };
    driveDataRef.current = final;
    setProgress(mergedProgress);
    setTotalSessions(mergedTotalSessions);
    setLastSessionDate(mergedLastSessionDate);
    return final;
  }, []);

  // ─── Pull + merge ───────────────────────────────────────────────────────────
  const pullAndMerge = useCallback(async (): Promise<void> => {
    const token = authStateRef.current.accessToken;
    const user = authStateRef.current.user;
    if (!token || !user) return;
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      updateStatus('offline', 'Offline — will sync later');
      return;
    }
    updateStatus('pulling', 'Checking for updates…');
    try {
      const fileId = await withDriveRetry(() =>
        findDriveFile(token, user.id),
      );
      if (!fileId) {
        // No cloud file — if we have a local copy, push it up.
        if (driveDataRef.current) {
          await pushDriveData(driveDataRef.current);
        }
        updateStatus('synced', 'Synced');
        return;
      }
      const remote = await withDriveRetry(() => downloadDriveFile(token, fileId));
      if (!remote) {
        // 404 — clear and let next push create.
        clearCachedFileId();
        if (driveDataRef.current) await pushDriveData(driveDataRef.current);
        updateStatus('synced', 'Synced');
        return;
      }
      const merged = mergeDriveData(driveDataRef.current, remote);
      const changed = !driveDataEquals(driveDataRef.current, merged);
      applyDriveData(merged);
      // Only push when merge actually changed something AND we have data
      // the remote lacks (e.g. local sessions not yet reflected).
      if (changed) {
        await pushDriveData(merged);
      } else {
        updateStatus('synced', 'Synced');
      }
      lastPushedRef.current = merged;
    } catch (e) {
      handleSyncError(e);
    }
  }, [applyDriveData, updateStatus]);

  // ─── Push ───────────────────────────────────────────────────────────────────
  const pushDriveData = useCallback(
    async (data: DriveData): Promise<void> => {
      const token = authStateRef.current.accessToken;
      const user = authStateRef.current.user;
      if (!token || !user) return;
      if (isPushingRef.current) {
        // A push is already running — wait for it to finish, then push the
        // latest data. This serializes pushes and prevents lost updates.
        return;
      }
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        updateStatus('offline', 'Offline — will sync later');
        return;
      }
      isPushingRef.current = true;
      updateStatus('pushing', 'Saving…');
      try {
        const fileId = await withDriveRetry(() =>
          findDriveFile(token, user.id),
        );
        const stamped: DriveData = {
          ...data,
          schemaVersion: 1,
          lastModified: Date.now(),
          deviceId: data.deviceId || getDeviceId(),
          googleUserId: user.id,
          studentName: data.studentName || user.name || '',
        };
        await withDriveRetry(() => uploadDriveFile(token, fileId, stamped));
        driveDataRef.current = stamped;
        lastPushedRef.current = stamped;
        updateStatus('synced', 'Saved ✓');
      } catch (e) {
        handleSyncError(e);
      } finally {
        isPushingRef.current = false;
      }
    },
    [updateStatus],
  );

  // ─── Hydrate ────────────────────────────────────────────────────────────────
  const hydrate = useCallback(async (): Promise<void> => {
    const token = authStateRef.current.accessToken;
    const user = authStateRef.current.user;
    if (!token || !user) return;
    if (hasHydratedRef.current) return; // guard: only hydrate once per auth
    hasHydratedRef.current = true;
    setIsHydrating(true);
    updateStatus('hydrating', 'Loading your progress…');
    try {
      const fileId = await withDriveRetry(() =>
        findDriveFile(token, user.id),
      );
      if (!fileId) {
        // First run for this account — create blank.
        const blank = createBlankDriveData({
          googleUserId: user.id,
          studentName: user.name || '',
          deviceId: getDeviceId(),
        });
        const final = applyDriveData(blank);
        await pushDriveData(final);
      } else {
        const remote = await withDriveRetry(() =>
          downloadDriveFile(token, fileId),
        );
        if (remote) {
          const merged = mergeDriveData(emptyDriveData(), remote);
          const final = applyDriveData(merged);
          lastPushedRef.current = final;
          updateStatus('synced', 'Synced');
        } else {
          // 404 mid-hydrate — same handling as no file.
          const blank = createBlankDriveData({
            googleUserId: user.id,
            studentName: user.name || '',
            deviceId: getDeviceId(),
          });
          const final = applyDriveData(blank);
          await pushDriveData(final);
        }
      }
    } catch (e) {
      hasHydratedRef.current = false; // allow retry on next auth tick
      handleSyncError(e);
    } finally {
      setIsHydrating(false);
    }
  }, [applyDriveData, pushDriveData, updateStatus]);

  // ─── Save (the public mutation API) ────────────────────────────────────────
  const queuePush = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      debounceTimerRef.current = null;
      if (driveDataRef.current) {
        void pushDriveData(driveDataRef.current);
      }
    }, SYNC_SAVE_DEBOUNCE_MS);
  }, [pushDriveData]);

  const saveProgress = useCallback(
    async (
      update:
        | Partial<StudentProgress>
        | ((current: StudentProgress) => Partial<StudentProgress>),
      options?: { incrementSession?: boolean },
    ): Promise<void> => {
      const updater: (current: StudentProgress) => Partial<StudentProgress> =
        typeof update === 'function' ? update : () => update;

      const currentDriveData = driveDataRef.current;
      if (!currentDriveData) {
        // Hydration hasn't happened yet — queue the updater to be replayed
        // against the hydrated data, and optimistically update local React state
        // so the practice UI stays responsive.
        pendingUpdatesRef.current.push(updater);
        if (options?.incrementSession) {
          pendingSessionIncrementRef.current = true;
        }
        setProgress((prev) => {
          const base = prev || blankStudentProgress();
          const partial = updater(base);
          return { ...base, ...partial };
        });
        if (options?.incrementSession) {
          setTotalSessions((prev) => prev + 1);
          setLastSessionDate(new Date().toISOString().slice(0, 10));
        }
        return;
      }

      const baseProgress = driveDataToProgress(currentDriveData);
      const partial = updater(baseProgress);
      const next: DriveData = {
        ...currentDriveData,
        progress: { ...currentDriveData.progress, ...partial },
        lastModified: Date.now(),
        totalSessions: options?.incrementSession
          ? currentDriveData.totalSessions + 1
          : currentDriveData.totalSessions,
        lastSessionDate: options?.incrementSession
          ? new Date().toISOString().slice(0, 10)
          : currentDriveData.lastSessionDate,
      };
      // Optimistic UI update — local state changes immediately, push fires
      // after the debounce.
      applyDriveData(next);
      queuePush();
    },
    [applyDriveData, queuePush],
  );

  const forceSync = useCallback(async () => {
    await pullAndMerge();
  }, [pullAndMerge]);

  const resetSync = useCallback(async () => {
    // Cancel any pending debounced push.
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    // Flush any pending push synchronously before resetting state.
    if (driveDataRef.current && isPushingRef.current === false) {
      try {
        await pushDriveData(driveDataRef.current);
      } catch {
        /* swallow — user is signing out anyway */
      }
    }
    // Clear all state.
    driveDataRef.current = null;
    lastPushedRef.current = null;
    hasHydratedRef.current = false;
    clearCachedFileId();
    setProgress(null);
    setTotalSessions(0);
    setLastSessionDate('');
    updateStatus('idle', '');
  }, [pushDriveData, updateStatus]);

  // ─── Error classifier → user message ───────────────────────────────────────
  function handleSyncError(e: unknown): void {
    if (e instanceof DriveApiError) {
      if (e.kind === 'auth') {
        updateStatus('error', 'Sign-in expired. Reconnecting…');
      } else if (e.kind === 'permission') {
        updateStatus('error', 'Google Drive permission is blocked. Sign in again.');
      } else if (e.kind === 'quota') {
        updateStatus('error', 'Google Drive storage is full.');
      } else if (e.kind === 'rate-limit') {
        updateStatus('error', 'Drive is busy — retrying soon.');
      } else if (e.kind === 'not-found') {
        updateStatus('synced', 'Synced');
      } else if (e.kind === 'temporary') {
        updateStatus('error', 'Network problem — will retry.');
      } else {
        updateStatus('error', 'Sync problem — saved locally.');
      }
    } else {
      updateStatus('error', 'Sync problem — saved locally.');
    }
    // Log for developer debugging.
    console.warn('[SpeakUp sync] error', e);
  }

  // ─── Effects ────────────────────────────────────────────────────────────────

  // React to auth changes — hydrate on sign-in, reset on sign-out.
  useEffect(() => {
    const userId = authState.user?.id ?? null;
    if (!authState.isAuthenticated || !userId) {
      // Signed out (or initial load with no auth). Reset everything.
      if (lastAuthUserIdRef.current !== null) {
        // Was signed in → reset
        void resetSync();
        // Also revoke tokens on the manager side.
        void signOut();
      }
      lastAuthUserIdRef.current = null;
      return;
    }
    // Signed in (or signed in to a different user). Hydrate if first time.
    if (lastAuthUserIdRef.current !== userId) {
      hasHydratedRef.current = false;
      clearCachedFileId();
      void hydrate();
    }
    lastAuthUserIdRef.current = userId;
  }, [authState.isAuthenticated, authState.user?.id, hydrate, resetSync, signOut]);

  // Periodic pull + merge.
  useEffect(() => {
    if (!authState.isAuthenticated) return undefined;
    pollTimerRef.current = setInterval(() => {
      if (!isPushingRef.current) {
        void pullAndMerge();
      }
    }, SYNC_PULL_INTERVAL_MS);
    return () => {
      if (pollTimerRef.current) clearInterval(pollTimerRef.current);
      pollTimerRef.current = null;
    };
  }, [authState.isAuthenticated, pullAndMerge]);

  // Window focus → pull (catch up on changes from another device).
  useEffect(() => {
    if (!authState.isAuthenticated) return undefined;
    const onFocus = () => {
      // Skip while we're already mid-push to avoid stepping on ourselves.
      if (!isPushingRef.current) void pullAndMerge();
    };
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, [authState.isAuthenticated, pullAndMerge]);

  // Online/offline detection.
  useEffect(() => {
    if (!authState.isAuthenticated) return undefined;
    const onOnline = () => {
      updateStatus('pushing', 'Back online — syncing…');
      if (driveDataRef.current) {
        void pushDriveData(driveDataRef.current);
      }
    };
    const onOffline = () => {
      updateStatus('offline', 'Offline — will sync later');
    };
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, [authState.isAuthenticated, pushDriveData, updateStatus]);

  // Cleanup on unmount.
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      if (pollTimerRef.current) clearInterval(pollTimerRef.current);
    };
  }, []);

  return {
    progress,
    totalSessions,
    lastSessionDate,
    syncStatus,
    syncMessage,
    isHydrating,
    saveProgress,
    forceSync,
    resetSync,
  };
}

// Helper used when saveProgress fires before hydration completes.
function blankStudentProgress(): StudentProgress {
  return {
    studentName: '',
    completedEntries: [],
    scores: {},
    attemptsCount: {},
    currentUnitIndex: 0,
  };
}
