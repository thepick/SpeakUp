// React context wrapper around the non-React GoogleAuthManager. Owns the
// manager instance, subscribes to its state changes, and exposes a stable
// value object so consumers (useAuth, useDriveSync) don't re-render on every
// internal auth tick.

import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { GoogleAuthManager } from './auth.ts';
import type { AuthState } from './auth.ts';

export interface AuthContextValue {
  /** The underlying state — readonly; mutate only via signIn / signOut. */
  state: AuthState;
  /** Open the OAuth popup. Resolves once the user is fully signed in. */
  signIn: () => Promise<void>;
  /** Revoke the token, clear timers, return to unauthenticated state. */
  signOut: () => Promise<void>;
  /** Dismiss the current auth error message (e.g. user clicked "OK"). */
  clearError: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

/**
 * Single provider for the whole app. Mounted once at the root in main.tsx.
 * The manager is created lazily on first render and stored in a ref so it
 * survives re-renders without re-initializing GIS.
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const managerRef = useRef<GoogleAuthManager | null>(null);
  if (managerRef.current === null) {
    managerRef.current = new GoogleAuthManager();
  }
  const manager = managerRef.current;

  // Subscribe to the manager's AuthState. The manager pushes the initial
  // state synchronously so we don't need a separate initial fetch.
  const [authState, setAuthState] = useState<AuthState>(() => manager.getState());

  useEffect(() => {
    const unsubscribe = manager.subscribe(setAuthState);
    // Kick off GIS initialization — fire-and-forget; the manager flips
    // isInitializing to false when done.
    void manager.initialize().catch((e) => {
      // initialize() already sets authError on the manager; just log here.
      console.warn('[SpeakUp auth] initialize failed:', e);
    });
    return unsubscribe;
  }, [manager]);

  const signIn = useCallback(async () => {
    try {
      await manager.requestSignIn();
    } catch (e) {
      // The manager already set authError on failure; we don't rethrow —
      // React UI reads authError from context and shows it.
      console.warn('[SpeakUp auth] sign-in failed:', e);
    }
  }, [manager]);

  const signOut = useCallback(async () => {
    await manager.signOut();
  }, [manager]);

  const clearError = useCallback(() => {
    manager.clearError();
  }, [manager]);

  const value = useMemo<AuthContextValue>(
    () => ({
      state: authState,
      signIn,
      signOut,
      clearError,
    }),
    [authState, signIn, signOut, clearError],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
