// Tiny context consumer hook. Kept separate from AuthProvider.tsx so the
// provider can be loaded lazily (in code-splitting scenarios) without forcing
// every consumer to import the provider module.
//
// The hook throws if called outside an <AuthProvider>. We rely on the
// convention that all consumers live under <App /> which is wrapped at the
// root in main.tsx — so a misuse means a programmer error, not a runtime
// surprise we need to silently swallow.

import { useContext } from 'react';
import type { AuthContextValue } from './AuthProvider.tsx';
import { AuthContext } from './AuthProvider.tsx';

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error(
      'useAuth must be used inside <AuthProvider>. ' +
        'Wrap your <App /> in main.tsx with <AuthProvider>.',
    );
  }
  return ctx;
}
