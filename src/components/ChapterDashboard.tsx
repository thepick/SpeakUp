// Chapter Dashboard — replaces the old inline unit selection screen.
// Shows 7 chapter cards with per-chapter stats drawn from Google Drive
// progress + the dataset. Includes a "continue here" indicator and a
// "weakest sounds" review section.
//
// Cards stay neutral/white until the student has practiced the chapter;
// color + stars appear only after real assessment data exists.

import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  ChevronRight,
  ArrowRight,
  Target,
  Trophy,
  Sparkles,
  ChevronLeft,
} from 'lucide-react';
import type { StudentProgress, DatasetEntry } from '../types.ts';
import { FULL_DATASET } from '../data/fullDataset.ts';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface SoundTheme {
  id: string;
  name: string;
  description: string;
  getEntries: () => DatasetEntry[];
}

interface ChapterStats {
  themeId: string;
  name: string;
  description: string;
  totalEntries: number;
  completedCount: number;
  averageScore: number;
  strongCount: number;   // score >= 85
  passCount: number;      // score >= 75
  weakCount: number;      // score < 75 (but attempted)
  isVisited: boolean;
  isComplete: boolean;
  weakEntryIds: number[];  // IDs with score < 75
  allEntryIds: number[];
}

interface ChapterDashboardProps {
  studentName: string;
  progress: StudentProgress | null;
  soundThemes: SoundTheme[];
  totalWordsMastered: number;
  onStartPractice: (themeId: string) => void;
  onStartReview: (entryIds: number[]) => void;
  onBack: () => void;
}

// ─── Compute per-chapter stats from progress + dataset ──────────────────────

function computeChapterStats(
  theme: SoundTheme,
  progress: StudentProgress | null,
): ChapterStats {
  const entries = theme.getEntries();
  const entryIds = entries.map((e) => e.id);
  const scores = progress?.scores ?? {};
  const completed = progress?.completedEntries ?? [];

  const relevantScores: number[] = [];
  const weakIds: number[] = [];
  let strongCount = 0;
  let passCount = 0;

  for (const id of entryIds) {
    const score = scores[id];
    if (score !== undefined) {
      relevantScores.push(score);
      if (score >= 85) strongCount++;
      if (score >= 75) passCount++;
      if (score < 75) weakIds.push(id);
    }
  }

  const completedCount = entryIds.filter((id) => completed.includes(id)).length;
  const avgScore =
    relevantScores.length > 0
      ? Math.round(
          relevantScores.reduce((a, b) => a + b, 0) / relevantScores.length,
        )
      : 0;

  return {
    themeId: theme.id,
    name: theme.name,
    description: theme.description,
    totalEntries: entryIds.length,
    completedCount,
    averageScore: avgScore,
    strongCount,
    passCount,
    weakCount: weakIds.length,
    isVisited: relevantScores.length > 0,
    isComplete: completedCount === entryIds.length && entryIds.length > 0,
    weakEntryIds: weakIds,
    allEntryIds: entryIds,
  };
}

// ─── Stars rendering ────────────────────────────────────────────────────────

function StarsRow({ score }: { score: number }) {
  // 5-star system based on average chapter score
  const filled = score >= 90 ? 5 : score >= 80 ? 4 : score >= 70 ? 3 : score >= 60 ? 2 : score >= 50 ? 1 : 0;

  return (
    <div className="flex gap-0.5" aria-label={`${filled} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < filled
              ? 'fill-amber-400 text-amber-400'
              : 'text-slate-200'
          }`}
        />
      ))}
    </div>
  );
}

// ─── Card color scheme based on chapter performance ─────────────────────────

function cardColors(stats: ChapterStats) {
  if (!stats.isVisited) return { bg: '', border: 'border-border', badge: '', text: 'text-text-muted' };
  if (stats.averageScore >= 85) return { bg: 'bg-success-light', border: 'border-success/30', badge: 'bg-success/20 text-success', text: 'text-success' };
  if (stats.averageScore >= 75) return { bg: 'bg-primary-light', border: 'border-primary/30', badge: 'bg-primary/20 text-primary', text: 'text-primary' };
  return { bg: 'bg-warning-light', border: 'border-warning/30', badge: 'bg-warning/20 text-warning', text: 'text-warning' };
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function ChapterDashboard({
  studentName,
  progress,
  soundThemes,
  totalWordsMastered,
  onStartPractice,
  onStartReview,
  onBack,
}: ChapterDashboardProps) {
  // Compute stats for all 7 main units (exclude quick_mix from stats)
  const mainThemes = soundThemes.filter((t) => t.id !== 'quick_mix');
  const quickMix = soundThemes.find((t) => t.id === 'quick_mix');

  const chapterStats = useMemo(
    () => mainThemes.map((t) => computeChapterStats(t, progress)),
    [progress, mainThemes],
  );

  const totalEntries = chapterStats.reduce((a, c) => a + c.totalEntries, 0);

  // “Continue here” → first visited chapter with uncompleted entries,
  // or the first unvisited chapter if all visited chapters are done.
  const continueChapter = useMemo(() => {
    const firstIncomplete = chapterStats.find(
      (c) => c.isVisited && !c.isComplete,
    );
    if (firstIncomplete) return firstIncomplete;
    const firstUnvisited = chapterStats.find((c) => !c.isVisited);
    return firstUnvisited ?? null;
  }, [chapterStats]);

  // Weak entries across ALL chapters (score < 75)
  const allWeakIds = useMemo(() => {
    const ids = new Set<number>();
    for (const c of chapterStats) {
      for (const id of c.weakEntryIds) ids.add(id);
    }
    return Array.from(ids);
  }, [chapterStats]);

  // Total mastered (score >= 75) — from progress, not per-chapter calc
  const masteredCount = useMemo(() => {
    const scores = progress?.scores ?? {};
    let count = 0;
    for (const id of chapterStats.flatMap((c) => c.allEntryIds)) {
      if ((scores[id] ?? 0) >= 75) count++;
    }
    return count;
  }, [progress, chapterStats]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-2xl mx-auto px-4 pb-12"
      id="chapter-dashboard-root"
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/40">
        <div>
          <h2 className="font-display text-2xl font-bold text-text">
            Welcome back, {studentName}!
          </h2>
          <p className="text-text-muted text-xs font-sans mt-0.5">
            Choose a chapter to practice or pick up where you left off.
          </p>
        </div>
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-[11px] font-bold text-text-muted hover:text-text bg-surface border border-border px-3 py-1.5 rounded-btn font-display cursor-pointer transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back
        </button>
      </div>

      {/* ── Overall Progress Bar ────────────────────────────────────────── */}
      <div className="bg-surface rounded-card border-border p-5 mb-5">
        {/* Segmented progress dots + text */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-caption uppercase tracking-wider font-extrabold text-text-muted font-display">
            Your Progress
          </span>
          <span className="text-[11px] font-bold text-primary font-mono">
            {masteredCount} / {totalEntries} words mastered
          </span>
        </div>

        {/* 7-segment dots */}
        <div className="flex items-center gap-1.5 justify-center">
          {chapterStats.map((c, i) => (
            <React.Fragment key={c.themeId}>
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-caption font-bold transition-all ${
                    c.isComplete
                      ? 'bg-success text-white'
                      : c.isVisited
                        ? 'bg-primary text-white'
                        : 'bg-slate-200 text-slate-400'
                  }`}
                  title={c.name}
                >
                  {c.isComplete ? '✓' : i + 1}
                </div>
                <span className="text-caption text-[#A0AEC0] font-display leading-none text-center max-w-[40px] truncate">
                  {c.name.split(':')[0].replace(/^[^\s]+\s/, '').slice(0, 6)}
                </span>
              </div>
              {i < chapterStats.length - 1 && (
                <div
                  className={`h-0.5 w-5 rounded-full -mt-3 ${
                    chapterStats[i].isVisited
                      ? 'bg-primary/40'
                      : 'bg-slate-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Chapter Cards Grid ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {chapterStats.map((stats) => {
          const colors = cardColors(stats);
          return (
            <motion.button
              key={stats.themeId}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onStartPractice(stats.themeId)}
              className={`group relative bg-surface rounded-card p-4 border ${colors.border} hover:border-primary/40 hover:shadow-md transition-all text-left flex flex-col gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-light ${colors.bg}`}
              id={`chapter-card-${stats.themeId}`}
            >
              {/* Continue badge */}
              {continueChapter?.themeId === stats.themeId && (
                <div className="absolute -top-2 -right-2 bg-primary text-white text-caption font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1 animate-pulse">
                  <Sparkles className="w-2.5 h-2.5" />
                  Continue
                </div>
              )}

              {/* Unit name */}
              <div className="flex items-start justify-between">
                <span className="font-display font-semibold text-sm text-text leading-snug pr-2">
                  {stats.name}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    stats.isComplete
                      ? 'bg-success'
                      : stats.isVisited
                        ? 'bg-primary'
                        : 'bg-transparent'
                  }`}
                  style={{
                    width: stats.isVisited
                      ? `${Math.round((stats.completedCount / stats.totalEntries) * 100)}%`
                      : '0%',
                  }}
                />
              </div>

              {/* Stats row */}
              <div className="flex items-center justify-between">
                {stats.isVisited ? (
                  <>
                    <div className="flex items-center gap-2">
                      <StarsRow score={stats.averageScore} />
                      <span className="text-caption font-mono font-bold text-text-muted">
                        {stats.averageScore}%
                      </span>
                    </div>
                    <span className="text-caption text-[#A0AEC0] font-sans">
                      {stats.completedCount}/{stats.totalEntries} words
                    </span>
                  </>
                ) : (
                  <span className="text-caption text-[#A0AEC0] font-sans italic">
                    {stats.totalEntries} words — not started
                  </span>
                )}
              </div>

              {/* Weak count warning */}
              {stats.isVisited && stats.weakCount > 0 && (
                <div className="flex items-center gap-1 text-caption text-amber-600 font-sans">
                  <Target className="w-3 h-3" />
                  {stats.weakCount} word{stats.weakCount !== 1 ? 's' : ''} need{stats.weakCount === 1 ? 's' : ''} more practice
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* ── Quick Mix Game Card ─────────────────────────────────────────── */}
      {quickMix && (
        <div className="mb-6">
          <button
            onClick={() => onStartPractice(quickMix.id)}
            className="w-full bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-2xl p-4 text-white text-left hover:shadow-[0_6px_20px_rgba(102,126,234,0.3)] transition-all cursor-pointer group"
            id="quick-mix-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-display font-bold text-sm">
                  🌪️ Quick Mixed Game
                </span>
                <p className="text-caption text-purple-100 mt-0.5">
                  Random challenge — 5 words from all chapters!
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-purple-200 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      )}

      {/* ── Practice Weakest Sounds ──────────────────────────────────────── */}
      {allWeakIds.length > 0 && (
        <div className="bg-warning-light border border-warning/30 rounded-card p-5 mb-4">
          <div className="flex items-center gap-2 text-amber-800 mb-3">
            <Target className="w-4 h-4 text-amber-500" />
            <h3 className="font-display font-semibold text-sm">
              Words to Practice Again
            </h3>
          </div>
          <p className="text-[11px] text-text-muted leading-relaxed font-sans mb-3">
            You have {allWeakIds.length} word{allWeakIds.length !== 1 ? 's' : ''} across your
            chapters that could use more practice. Review them now to improve your
            scores!
          </p>
          <button
            onClick={() => onStartReview(allWeakIds)}
            className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-display font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(245,158,11,0.25)] transition-all active:scale-[0.98] cursor-pointer"
            id="review-weak-words-btn"
          >
            <Target className="w-4 h-4" />
            Practice {allWeakIds.length} Weak Word{allWeakIds.length !== 1 ? 's' : ''}
          </button>
        </div>
      )}

      {/* ── All Complete Badge ──────────────────────────────────────────── */}
      {chapterStats.every((c) => c.isComplete) && chapterStats.length > 0 && (
        <div className="bg-gradient-to-r from-success/10 to-emerald-100/50 border border-success/30 rounded-card p-5 text-center mb-4">
          <Trophy className="w-8 h-8 text-success mx-auto mb-2" />
          <h3 className="font-display font-bold text-[#1D4044] text-sm">
            All Chapters Complete!
          </h3>
          <p className="text-[11px] text-text-muted mt-1">
            Amazing work, {studentName}! You've practiced every chapter. Keep
            reviewing to earn even higher scores.
          </p>
        </div>
      )}
    </motion.div>
  );
}
