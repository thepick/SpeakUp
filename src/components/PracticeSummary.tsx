import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, ChevronRight, RotateCcw, AlertTriangle } from 'lucide-react';
import { DatasetEntry } from '../types';

interface PracticeSummaryProps {
  studentName: string;
  history: Array<{ entry: DatasetEntry; score: number; status: string; mainFeedback: string }>;
  onRestart: () => void;
}

export default function PracticeSummary({ studentName, history, onRestart }: PracticeSummaryProps) {
  // Compute some encouraging metrics
  const totalExercises = history.length;
  const averageScore = totalExercises > 0 
    ? Math.round(history.reduce((acc, curr) => acc + curr.score, 0) / totalExercises) 
    : 0;

  // Let's count stars based on the scores
  const getStarsForScore = (score: number) => {
    if (score >= 85) return 3;
    if (score >= 75) return 2;
    if (score >= 70) return 1;
    return 0;
  };

  const totalStars = history.reduce((acc, curr) => acc + getStarsForScore(curr.score), 0);

  // Recommendations built based on weaker areas (scores < 75)
  const struggles = history.filter(item => item.score < 75);
  const uniqueRecommendations = struggles.length > 0 
    ? Array.from(new Set(struggles.flatMap(item => item.entry.remediationLinks || [])))
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-2xl mx-auto px-4 py-8"
      id="practice-summary-root"
    >
      {/* Celebration Header Card */}
      <div className="bg-gradient-to-br from-[#4A90E2] to-blue-600 rounded-[32px] p-8 text-white relative overflow-hidden mb-8 text-center shadow-[0_8px_30px_rgba(74,144,226,0.15)]">
        {/* Decorative circle shapes in background */}
        <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-[-30%] left-[-20%] w-56 h-56 bg-white/5 rounded-full blur-2xl" />

        <div className="mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
          <Award className="w-10 h-10 text-white" />
        </div>

        <h1 className="font-display text-3xl font-bold tracking-tight mb-1">
          Incredible Job, {studentName}!
        </h1>
        <p className="text-blue-100 text-xs font-sans max-w-sm mx-auto">
          You finished practicing your pronunciation games! Look at your amazing results below. 🏆
        </p>

        {/* Dynamic score summary blocks */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <span className="block text-[10px] uppercase font-bold text-blue-200 tracking-wider font-display mb-1">
              Played
            </span>
            <span className="text-xl font-bold font-mono text-white leading-none">
              {totalExercises}
            </span>
            <span className="text-[10px] text-blue-100 font-sans ml-1">games</span>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <span className="block text-[10px] uppercase font-bold text-blue-200 tracking-wider font-display mb-1">
              Total Stars
            </span>
            <span className="text-xl font-bold font-mono text-white leading-none flex items-center justify-center gap-1">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300 shrink-0" />
              {totalStars}
            </span>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <span className="block text-[10px] uppercase font-bold text-blue-200 tracking-wider font-display mb-1">
              Avg Score
            </span>
            <span className="text-xl font-bold font-mono text-white leading-none">
              {averageScore}
            </span>
            <span className="text-[10px] text-blue-100 font-sans ml-0.5">%</span>
          </div>
        </div>
      </div>

      {/* History of exercises */}
      <h3 className="font-display font-bold text-[#2D3748] text-xs tracking-wider uppercase mb-4 text-left">
        Exercise Summary Breakdown
      </h3>

      <div className="space-y-3 mb-8" id="exercise-summary-list">
        {history.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center border border-blue-100/50 font-sans text-[#718096] text-xs">
            No words have been checked inside this session yet. Continue practicing to see feedback details.
          </div>
        ) : (
          history.map((record, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100/50 p-5 rounded-3xl flex items-center justify-between shadow-[0_4px_15px_rgba(74,144,226,0.02)] hover:shadow-[0_8px_25px_rgba(74,144,226,0.05)] transition-all text-left"
            >
              <div className="flex flex-col gap-1 pr-4">
                <span className="text-xs text-[#718096] font-sans uppercase font-bold tracking-wide">
                  {record.entry.displayName}
                </span>
                <span className="text-base font-extrabold text-[#2D3748] font-display">
                  {record.entry.sentence}
                </span>
                <p className="text-[11px] text-[#718096] font-sans leading-relaxed">
                  {record.mainFeedback}
                </p>
              </div>

              <div className="flex flex-col items-end shrink-0 gap-1">
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase ${
                  record.score >= 85 ? 'bg-[#E6FFFA] text-[#1D4044]' :
                  record.score >= 75 ? 'bg-[#EBF4FF] text-[#2B6CB0]' :
                  record.score >= 70 ? 'bg-[#FFFBEB] text-[#92400E]' :
                  'bg-[#FFF5F5] text-[#9B2C2C]'
                }`}>
                  {record.score}%
                </span>
                {/* Visual stars indicators */}
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < getStarsForScore(record.score)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-100'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Recommended Practice list if available */}
      {struggles.length > 0 && (
        <div className="bg-[#FFFBEB] border border-amber-200/60 rounded-3xl p-6 text-left mb-8">
          <div className="flex items-center gap-2 text-amber-800 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h4 className="font-display font-semibold text-sm">
              Sounds to Practice More:
            </h4>
          </div>
          <p className="text-xs text-[#718096] leading-relaxed font-sans mb-3">
            Excellent progress! The coach suggests trying these target focus sets next to master your tongue placements:
          </p>
          <div className="flex flex-wrap gap-2">
            {struggles.map((item, idX) => (
              <span
                key={idX}
                className="bg-white border border-amber-200/75 rounded-xl px-3 py-1.5 text-xs font-semibold text-amber-800 font-display shadow-xs"
              >
                Focus: {item.entry.sentence}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Summary Nav Footer Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-display font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(74,144,226,0.3)] transition-all active:scale-95 cursor-pointer text-sm"
          id="play-again-btn"
        >
          <RotateCcw className="w-4 h-4 text-blue-100" />
          Play New Game
        </button>
      </div>
    </motion.div>
  );
}
