// Welcome screen for students. Replaces the old nickname form with a Google
// sign-in button — once authenticated and hydrated, the student lands on the
// unit selection screen.
//
// Four render states (from the plan):
//   1. isAuthInitializing → loading spinner ("Loading Google sign-in…")
//   2. !isAuthenticated    → GoogleSignInButton + error display
//   3. isAuthenticated && isHydrating → avatar + "Loading progress…"
//   4. isAuthenticated && ready      → welcome + progress summary + Start
//
// Teacher Mode still works exactly as before — it doesn't require Drive sync.

import { useEffect, type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  AlertTriangle,
  Loader2,
  Check,
  RefreshCw,
} from 'lucide-react';
import type { StudentProgress } from '../types.ts';
import { useAuth } from '../google/useAuth.ts';
import GoogleSignInButton from './GoogleSignInButton.tsx';
import SyncStatusIndicator from './SyncStatusIndicator.tsx';
import UserAvatar from './UserAvatar.tsx';

interface StudentStartProps {
  isHydrating: boolean;
  isAuthenticated: boolean;
  authError: string | null;
  isAuthInitializing: boolean;
  studentName: string;
  progress: StudentProgress | null;
  onSignedIn: () => void;
  onEnterTeacherMode: () => void;
  onSignOut: () => void | Promise<void>;
}

export default function StudentStart({
  isHydrating,
  isAuthenticated,
  authError,
  isAuthInitializing,
  studentName,
  progress,
  onSignedIn,
  onEnterTeacherMode,
  onSignOut,
}: StudentStartProps) {
  const { signIn, clearError, state } = useAuth();

  // Auto-advance once we're authenticated AND the drive sync has hydrated.
  // The "ready" state requires both — otherwise the student lands on the unit
  // picker before their completedEntries/scores have loaded.
  useEffect(() => {
    if (isAuthenticated && !isHydrating && progress !== null) {
      onSignedIn();
    }
  }, [isAuthenticated, isHydrating, progress, onSignedIn]);

  const handleSignIn = async () => {
    await signIn();
    // The auth flow resolves through context; the effect above fires
    // once isHydrating flips false.
  };

  // ─── Render branches ────────────────────────────────────────────────────

  // 1. Initializing GIS — show a soft loading state.
  if (isAuthInitializing && !authError) {
    return (
      <Centered>
        <Card>
          <div className="flex flex-col items-center gap-4 py-12">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
            <p className="text-text-muted text-sm font-sans">
              Setting up Google sign-in…
            </p>
          </div>
        </Card>
      </Centered>
    );
  }

  // 2. Authenticated but still hydrating Drive progress — show avatar + spinner.
  // Use isHydrating as the single gate; if the Google profile is still loading,
  // UserAvatar will render a generic "Student" fallback without a flicker.
  if (isAuthenticated && isHydrating) {
    return (
      <Centered>
        <Card>
          <div className="flex flex-col items-center gap-5 py-10">
            {state.user ? <UserAvatar user={state.user} size="md" /> : null}
            <div className="flex items-center gap-2 text-primary">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm font-semibold font-display">
                Loading your progress from Google Drive…
              </span>
            </div>
            <SyncStatusIndicator status="hydrating" />
          </div>
        </Card>
      </Centered>
    );
  }

  // 3. Not authenticated — show the sign-in button.
  if (!isAuthenticated) {
    return (
      <Centered>
        <Card>
          {/* Decorative App Icon in soft blue */}
          <div className="mx-auto w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center mb-6 shadow-xs">
            <svg
              className="w-12 h-12 text-[#4A90E2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl font-bold text-text tracking-tight leading-short mb-2">
            Speak Up!
          </h1>
          <p className="text-text-muted text-sm mb-6 font-sans">
            Sign in with Google to save your progress and practice on any device. 🌟
          </p>

          {/* Sign-in button */}
          <GoogleSignInButton onClick={handleSignIn} />

          {authError && (
            <div className="mt-5 bg-danger-light border border-danger/30 rounded-2xl p-3 flex items-start gap-2 text-left">
              <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-rose-700 font-sans">{authError}</p>
                <button
                  type="button"
                  onClick={clearError}
                  className="text-caption text-rose-500 hover:text-rose-700 font-semibold mt-1 underline"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}

          {/* Teacher mode trigger — kept identical to original UX. */}
          <div className="mt-8 pt-6 border-t border-border flex justify-center">
            <button
              id="teacher-panel-trigger"
              onClick={onEnterTeacherMode}
              className="text-xs text-text-muted hover:text-text tracking-wide font-display py-1 px-3 hover:bg-bg rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Teacher Mode
            </button>
          </div>
        </Card>
      </Centered>
    );
  }

  // 4. Authenticated, hydrated — show welcome + summary. The parent
  // (App.tsx) auto-advances to the unit picker via the effect above, so this
  // state is brief. Render it as a smooth transition.
  return (
    <Centered>
      <Card>
        <div className="flex flex-col items-center gap-4 py-8">
          {state.user && <UserAvatar user={state.user} size="md" />}
          <h2 className="font-display text-xl font-bold text-text">
            Welcome back, {studentName}!
          </h2>
          <SyncStatusIndicator status="synced" />
          <div className="text-xs text-text-muted font-sans flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-success" />
            <span>
              {progress?.completedEntries?.length ?? 0} words practiced
            </span>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span className="text-xs font-display">Loading sound themes…</span>
          </div>
          <button
            onClick={onSignOut}
            className="text-caption text-text-muted hover:text-rose-500 underline mt-2"
            type="button"
          >
            Sign out
          </button>
        </div>
      </Card>
    </Centered>
  );
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function Centered({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4"
      id="student-start-container"
    >
      <div className="w-full max-w-md bg-surface rounded-card p-8 border border-border text-center">
        {children}
      </div>
    </motion.div>
  );
}

function Card({ children }: { children: ReactNode }) {
  // Already wrapped by Centered's outer card — this is a thin wrapper so the
  // branch functions read as a single composition.
  return <>{children}</>;
}
