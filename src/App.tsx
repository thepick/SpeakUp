import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import StudentStart from './components/StudentStart';
import StudentPractice from './components/StudentPractice';
import PracticeSummary from './components/PracticeSummary';
import TeacherPanel from './components/TeacherPanel';
import ChapterDashboard from './components/ChapterDashboard';
import AppHeader from './components/AppHeader';
import { FULL_DATASET } from './data/fullDataset';
import { DatasetEntry } from './types';
import { useAuth } from './google/useAuth.ts';
import { useDriveSync } from './google/useDriveSync.ts';

type ScreenState = 'start' | 'unit_selection' | 'practice' | 'summary' | 'teacher';

// Debug mode: activated by typing "strawberry" anywhere on the page.
function useDebugMode() {
  const [debug, setDebug] = useState(false);
  const [buffer, setBuffer] = useState('');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ignore when typing in inputs/textareas.
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      setBuffer((prev) => {
        const next = (prev + e.key).slice(-10);
        if (next.endsWith('strawberry')) {
          setDebug((d) => !d);
          return '';
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return debug;
}

// Defense-in-depth: only entries with grade5_ready classroomStatus (or no
// classroomStatus set) are safe for automatic student practice. This matches
// the dataset RELEASE_NOTES policy: items marked teacher_review, teacher_only,
// optional_challenge, or grade5_with_teacher_support should not be auto-assigned.
// The fullDataset.ts contains all 175 entries; this filter protects against
// future drift when new entries are added.
function isSafeForAutoPractice(e: DatasetEntry): boolean {
  if (e.studentVisible === false) return false;
  if (e.defaultAutoPath === false) return false; // teacher-only items have false
  if (e.classroomStatus === undefined) return true; // safe-by-default for legacy entries
  return e.classroomStatus === 'grade5_ready';
}

export default function App() {
  const debugMode = useDebugMode();
  const { state: authState } = useAuth();
  const {
    progress,
    syncStatus,
    syncMessage,
    isHydrating,
    saveProgress,
    resetSync,
  } = useDriveSync();

  const [screen, setScreen] = React.useState<ScreenState>('start');
  const [selectedEntries, setSelectedEntries] = React.useState<DatasetEntry[]>(
    [],
  );
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [sessionHistory, setSessionHistory] = React.useState<
    Array<{
      entry: DatasetEntry;
      score: number;
      status: string;
      mainFeedback: string;
    }>
  >([]);
  const [isReviewMode, setIsReviewMode] = useState(false);

  // Track online/offline status for the PWA offline banner
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Total words mastered (score ≥ 75) across all chapters — computed from Drive progress
  const totalWordsMastered = useMemo(() => {
    const scores = progress?.scores ?? {};
    let count = 0;
    for (const entry of FULL_DATASET) {
      if ((scores[entry.id] ?? 0) >= 75) count++;
    }
    return count;
  }, [progress]);

  // ─── Subdivided lists for student selectable Sound Themes ────────────────
  // 7 focused units + 1 review game covering all 17 modules in the canonical dataset
  const soundThemes = [
    {
      id: 'th_sounds',
      name: '👅 Unit 1: The TH Sounds',
      description: 'Practice think, then, thank you, and classroom phrases using TH.',
      getEntries: () =>
        FULL_DATASET.filter(
          (e) => isSafeForAutoPractice(e) && e.module === 'th_sounds',
        ),
    },
    {
      id: 'v_w_f',
      name: '👄 Unit 2: V vs. W vs. F',
      description: 'Learn lip shape differences for wine, vine, west, and vest.',
      getEntries: () =>
        FULL_DATASET.filter(
          (e) => isSafeForAutoPractice(e) && e.module === 'v_w_f',
        ),
    },
    {
      id: 'final_consonants',
      name: '🏁 Unit 3: Final Consonants & Stops',
      description:
        'Finish words clearly! Say bus/buzz, cap/cab, back/bag, and voice final sounds.',
      getEntries: () =>
        FULL_DATASET.filter(
          (e) =>
            isSafeForAutoPractice(e) &&
            (e.module === 'final_consonants' || e.module === 'stop_voicing'),
        ),
    },
    {
      id: 'clusters',
      name: '🤝 Unit 4: Consonant Clusters & R/L',
      description:
        'Keep sounds together — school, spot, stop — and master R vs. L.',
      getEntries: () =>
        FULL_DATASET.filter(
          (e) =>
            isSafeForAutoPractice(e) &&
            (e.module === 'clusters' || e.module === 'r_l'),
        ),
    },
    {
      id: 'vowels',
      name: '🎼 Unit 5: Vowels & Weak Forms',
      description:
        'Compare vowel shapes for sheep/ship, full/fool, bed/bad, and weak schwa.',
      getEntries: () =>
        FULL_DATASET.filter(
          (e) =>
            isSafeForAutoPractice(e) &&
            (e.module === 'vowels' || e.module === 'schwa_and_reduction'),
        ),
    },
    {
      id: 'sibilants',
      name: '🗣️ Unit 6: S, Z, SH, CH, J & Nasals',
      description:
        'Master hissing and buzzing sounds, plus M, N, NG contrasts.',
      getEntries: () =>
        FULL_DATASET.filter(
          (e) =>
            isSafeForAutoPractice(e) &&
            (e.module === 's_z_sh_ch_j' ||
              e.module === 'nasals' ||
              e.module === 'zh_sound'),
        ),
    },
    {
      id: 'classroom',
      name: '🏫 Unit 7: Real World & Connected Speech',
      description:
        'Speak polite sentences, use natural rhythm, and connect words smoothly.',
      getEntries: () =>
        FULL_DATASET.filter(
          (e) =>
            isSafeForAutoPractice(e) &&
            (e.module === 'real_world_phrases' ||
              e.module === 'connected_speech' ||
              e.module === 'intonation' ||
              e.module === 'stress_and_rhythm'),
        ),
    },
    {
      id: 'quick_mix',
      name: '🌪️ Quick Mixed Game',
      description:
        'A review challenge containing 5 random speech practices from all units!',
      getEntries: () => {
        const safeEntries = FULL_DATASET.filter(isSafeForAutoPractice);
        const shuffled = [...safeEntries].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
      },
    },
  ];

  // ─── Handlers ────────────────────────────────────────────────────────────

  // StudentStart no longer asks for a nickname — it now triggers sign-in.
  // We accept the optional name arg for legacy callers but ignore it; the
  // authoritative name comes from the Google profile after sign-in.
  const handleStart = useCallback(() => {
    setScreen('unit_selection');
  }, []);

  const handleChooseTheme = (themeId: string) => {
    const theme = soundThemes.find((t) => t.id === themeId);
    if (theme) {
      const targetList = theme.getEntries();
      if (targetList.length > 0) {
        setIsReviewMode(false);
        setSelectedEntries(targetList);
        setSessionHistory([]);
        setScreen('practice');
      } else {
        alert(
          'This module is currently setting up! Pick another Sound Theme. 😊',
        );
      }
    }
  };

  const handleStartReview = (entryIds: number[]) => {
    const entries = FULL_DATASET.filter(
      (e) => entryIds.includes(e.id) && isSafeForAutoPractice(e),
    );
    if (entries.length > 0) {
      setIsReviewMode(true);
      setSelectedEntries(entries);
      setSessionHistory([]);
      setScreen('practice');
    }
  };

  const handleFinishPractice = (
    history: typeof sessionHistory,
  ) => {
    setSessionHistory(history);
    setScreen('summary');
  };

  const handleRestart = () => {
    setScreen('unit_selection');
  };

  // Called by StudentPractice after each Azure scoring — persists progress
  // through the Drive sync layer instead of state-only. We pass an updater
  // function so the merge always reads the canonical current data, not a stale
  // React state snapshot.
  const handleEntryScored = React.useCallback(
    async (entryId: number, score: number) => {
      await saveProgress(
        (current) => {
          const nextBest = Math.max(current.scores[entryId] ?? 0, score);
          const nextAttempts = (current.attemptsCount[entryId] ?? 0) + 1;
          const nextCompleted = Array.from(
            new Set([...(current.completedEntries ?? []), entryId]),
          );
          return {
            scores: { ...(current.scores ?? {}), [entryId]: nextBest },
            attemptsCount: {
              ...(current.attemptsCount ?? {}),
              [entryId]: nextAttempts,
            },
            completedEntries: nextCompleted,
          };
        },
        { incrementSession: false },
      );
    },
    [saveProgress],
  );

  // Called by PracticeSummary on view — increments totalSessions so the
  // session counter on the welcome screen reflects actual practice runs.
  useEffect(() => {
    if (screen === 'summary' && sessionHistory.length > 0) {
      // Fire and forget — best-effort session count update.
      void saveProgress({}, { incrementSession: true });
    }
    // We only want this to fire on the summary enter transition, not on every
    // history change. sessionHistory is set once when the user finishes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  const handleSignOut = async () => {
    await resetSync();
    setScreen('start');
    setSelectedEntries([]);
    setSessionHistory([]);
  };

  // ─── Render ──────────────────────────────────────────────────────────────

  const studentName = authState.user?.name || authState.user?.email || 'Student';

  return (
    <div
      className="min-h-screen bg-bg text-text flex flex-col font-sans transition-colors duration-300 antialiased selection:bg-primary/20"
      id="pronunciation-coach-app"
    >
      {/* Universal Top Branding Header */}
      <header className="bg-surface border-b border-border py-3 px-6 shrink-0 flex justify-between items-center">
        <div
          className="flex items-center gap-3 cursor-pointer select-none hover:opacity-80 transition-opacity"
          onClick={() => setScreen('start')}
          role="button"
          tabIndex={0}
          title="Return to main menu"
        >
          {/* Logo Badge */}
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-display font-bold text-base shadow-md">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-primary tracking-tight text-base leading-none">
              Speak Up!
            </span>
            <span className="text-caption text-text-muted font-sans mt-0.5 font-medium">
              Thai-English Pronunciation Coach
            </span>
          </div>
        </div>

        {screen !== 'start' && screen !== 'teacher' && (
          <span className="bg-primary-light text-primary font-sans text-xs px-3 py-1 rounded-full border border-primary/15 font-semibold">
            👤 {studentName}
          </span>
        )}
      </header>

      {/* Google sign-in row — only renders when authenticated. */}
      <AppHeader />

      {/* Offline banner — shown when the network is disconnected */}
      {!isOnline && (
        <div className="bg-warning-light border-b border-warning/20 text-amber-800 text-xs font-sans text-center py-2">
          📡 You're offline — saved words will sync when you're back online!
        </div>
      )}

      {/* Main Container Views with Motion Animation */}
      <main className="flex-1 overflow-y-auto py-8">
        <AnimatePresence mode="wait">
          {screen === 'start' && (
            <div key="start" className="contents">
              <StudentStart
                isHydrating={isHydrating}
                isAuthenticated={authState.isAuthenticated}
                authError={authState.authError}
                isAuthInitializing={authState.isInitializing}
                studentName={studentName}
                progress={progress}
                onSignedIn={handleStart}
                onEnterTeacherMode={() => setScreen('teacher')}
                onSignOut={handleSignOut}
              />
            </div>
          )}

          {screen === 'unit_selection' && (
            <div key="unit_selection" className="contents">
              <ChapterDashboard
                studentName={studentName}
                progress={progress}
                soundThemes={soundThemes}
                totalWordsMastered={totalWordsMastered}
                onStartPractice={handleChooseTheme}
                onStartReview={handleStartReview}
                onBack={() => setScreen('start')}
              />
            </div>
          )}

          {screen === 'practice' && (
            <div key="practice" className="contents" data-debug={debugMode ? 'on' : 'off'}>
              <StudentPractice
                entries={selectedEntries}
                studentName={studentName}
                onEntryScored={handleEntryScored}
                onFinish={handleFinishPractice}
                debugMode={debugMode}
              />
            </div>
          )}

          {screen === 'summary' && (
            <div key="summary" className="contents">
              <PracticeSummary
                studentName={studentName}
                history={sessionHistory}
                syncStatus={syncStatus}
                syncMessage={syncMessage}
                progress={progress}
                onRestart={handleRestart}
                onReviewWeak={() => setScreen('unit_selection')}
              />
            </div>
          )}

          {screen === 'teacher' && (
            <div key="teacher" className="contents">
              <TeacherPanel onBack={() => setScreen('start')} />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Debug mode indicator */}
      {debugMode && (
        <div className="fixed bottom-14 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-white text-caption font-mono font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
          DEBUG MODE ON — type "strawberry" again to hide
        </div>
      )}

      {/* Universal footer */}
      <footer className="py-3 text-center text-xs text-text-muted font-sans shrink-0 border-t border-border">
        Speak Up! — Thai-English Pronunciation Coach
      </footer>
    </div>
  );
}
