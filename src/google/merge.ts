// Progress merge strategy. FactFlow uses a complex event-level merge for
// factStats and sessionHistory. SpeakUp has a simpler data shape — a Set of
// completed entry ids, a max-score-per-entry map, an attempt-count map, and a
// current-unit pointer — so "union + max" works correctly without event-level
// reconciliation.
//
// Rules (all per-entry where applicable):
//   completedEntries   → set union (never lose a completion)
//   scores             → max of (local, remote) for each entry
//   attemptsCount      → max of (local, remote) for each entry (monotonic)
//   currentUnitIndex   → max (furthest advancement wins)
//   totalSessions      → max
//   lastSessionDate    → later ISO date wins (lexicographic compare works)
//   studentName        → prefer the value from the device that wrote most recently

import type { DriveData } from '../types.ts';

/**
 * Coerce an arbitrary value into a Record<number, number>. Drops NaN and
 * negative values silently — Drive data is supposed to be sanitized, but
 * defense in depth keeps a corrupt cloud file from poisoning the UI.
 */
function coerceScoreMap(input: unknown): Record<number, number> {
  if (!input || typeof input !== 'object') return {};
  const out: Record<number, number> = {};
  for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
    const n = Number(k);
    const score = Number(v);
    if (!Number.isInteger(n) || !Number.isFinite(score) || score < 0) continue;
    out[n] = score;
  }
  return out;
}

function coerceCompletedEntries(input: unknown): number[] {
  if (!Array.isArray(input)) return [];
  const out: number[] = [];
  for (const v of input) {
    const n = Number(v);
    if (Number.isInteger(n) && n >= 0) out.push(n);
  }
  // De-dupe + sort for stable display.
  return Array.from(new Set(out)).sort((a, b) => a - b);
}

/**
 * Merge two DriveData envelopes into a single one. Either side may be null
 * (first run on a new device, or first run on a new account).
 *
 * The "newest write wins" rule applies only to metadata fields (deviceId,
 * googleUserId, studentName, lastModified). Learning data always uses the
 * union + max rules above — losing a best score to a clock skew on another
 * device would be user-visible damage.
 */
export function mergeDriveData(
  local: DriveData | null,
  remote: DriveData | null,
): DriveData {
  const safeLocal = local ?? emptyDriveData();
  const safeRemote = remote ?? emptyDriveData();
  const localWins = safeLocal.lastModified >= safeRemote.lastModified;

  // ─── completedEntries: union of both ────────────────────────────────────────
  const completedSet = new Set<number>([
    ...safeLocal.progress.completedEntries,
    ...safeRemote.progress.completedEntries,
  ]);
  const completedEntries = Array.from(completedSet).sort((a, b) => a - b);

  // ─── scores: max per entry ──────────────────────────────────────────────────
  const localScores = coerceScoreMap(safeLocal.progress.scores);
  const remoteScores = coerceScoreMap(safeRemote.progress.scores);
  const mergedScores: Record<number, number> = { ...localScores };
  for (const [kStr, v] of Object.entries(remoteScores)) {
    const k = Number(kStr);
    mergedScores[k] = Math.max(mergedScores[k] ?? 0, v);
  }

  // ─── attemptsCount: max per entry (monotonic) ───────────────────────────────
  const localAttempts = coerceScoreMap(safeLocal.progress.attemptsCount);
  const remoteAttempts = coerceScoreMap(safeRemote.progress.attemptsCount);
  const mergedAttempts: Record<number, number> = { ...localAttempts };
  for (const [kStr, v] of Object.entries(remoteAttempts)) {
    const k = Number(kStr);
    mergedAttempts[k] = Math.max(mergedAttempts[k] ?? 0, v);
  }

  // ─── currentUnitIndex: max ──────────────────────────────────────────────────
  const currentUnitIndex = Math.max(
    safeLocal.progress.currentUnitIndex | 0,
    safeRemote.progress.currentUnitIndex | 0,
  );

  const totalSessions = Math.max(
    safeLocal.totalSessions | 0,
    safeRemote.totalSessions | 0,
  );

  // ISO date strings compare lexicographically by calendar order, so a simple
  // string max is correct here.
  const lastSessionDate =
    (safeLocal.lastSessionDate || '') >= (safeRemote.lastSessionDate || '')
      ? safeLocal.lastSessionDate
      : safeRemote.lastSessionDate;

  // Metadata: prefer the side that wrote most recently so the cloud record
  // reflects who's currently editing.
  const meta = localWins ? safeLocal : safeRemote;

  return {
    schemaVersion: 1,
    lastModified: Math.max(safeLocal.lastModified, safeRemote.lastModified),
    deviceId: meta.deviceId,
    googleUserId: meta.googleUserId,
    studentName: meta.studentName || meta.progress.studentName || '',
    progress: {
      studentName: meta.progress.studentName || meta.studentName || '',
      completedEntries,
      scores: mergedScores,
      attemptsCount: mergedAttempts,
      currentUnitIndex,
    },
    totalSessions,
    lastSessionDate,
  };
}

/**
 * Cheap structural comparison — used by useDriveSync to decide whether the
 * local state has actually changed since the last push. Cheap meaning: don't
 * compare every nested field; spot-check the high-cardinality maps.
 *
 * MUST include `attemptsCount` because a local change that only bumps the
 * attempt counter (e.g. a student retries the same entry) would otherwise
 * be treated as unchanged and silently skip the push — losing that change.
 */
export function driveDataEquals(a: DriveData | null, b: DriveData | null): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.lastModified !== b.lastModified) return false;
  if (a.progress.currentUnitIndex !== b.progress.currentUnitIndex) return false;
  if (a.totalSessions !== b.totalSessions) return false;
  if (a.lastSessionDate !== b.lastSessionDate) return false;
  // completedEntries
  const ac = a.progress.completedEntries;
  const bc = b.progress.completedEntries;
  if (ac.length !== bc.length) return false;
  for (let i = 0; i < ac.length; i += 1) {
    if (ac[i] !== bc[i]) return false;
  }
  // scores
  const aScoreKeys = Object.keys(a.progress.scores);
  const bScoreKeys = Object.keys(b.progress.scores);
  if (aScoreKeys.length !== bScoreKeys.length) return false;
  for (const k of aScoreKeys) {
    if (a.progress.scores[Number(k)] !== b.progress.scores[Number(k)]) return false;
  }
  // attemptsCount — critical for retry-only changes to trigger a push.
  const aAttKeys = Object.keys(a.progress.attemptsCount);
  const bAttKeys = Object.keys(b.progress.attemptsCount);
  if (aAttKeys.length !== bAttKeys.length) return false;
  for (const k of aAttKeys) {
    if (a.progress.attemptsCount[Number(k)] !== b.progress.attemptsCount[Number(k)]) return false;
  }
  return true;
}

/**
 * Return a DriveData with all defaults. Used when neither side has data yet.
 */
export function emptyDriveData(): DriveData {
  return {
    schemaVersion: 1,
    lastModified: 0,
    deviceId: '',
    googleUserId: '',
    studentName: '',
    progress: {
      studentName: '',
      completedEntries: [],
      scores: {},
      attemptsCount: {},
      currentUnitIndex: 0,
    },
    totalSessions: 0,
    lastSessionDate: '',
  };
}
