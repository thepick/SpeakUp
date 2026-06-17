import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, GraduationCap } from 'lucide-react';

interface StudentStartProps {
  onStart: (name: string) => void;
  onEnterTeacherMode: () => void;
}

export default function StudentStart({ onStart, onEnterTeacherMode }: StudentStartProps) {
  const [nickname, setNickname] = useState('');
  const [errorValue, setErrorValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) {
      setErrorValue('Please tell us your name first! 😊');
      return;
    }
    onStart(nickname.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4"
      id="student-start-container"
    >
      <div className="w-full max-w-md bg-white rounded-[32px] p-8 border border-blue-100/50 shadow-[0_10px_25px_rgba(74,144,226,0.05)] text-center">
        {/* Decorative App Icon in soft blue */}
        <div className="mx-auto w-20 h-20 bg-[#EBF4FF] rounded-2xl flex items-center justify-center mb-6 shadow-xs">
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
        <h1 className="font-display text-3xl font-bold text-[#2D3748] tracking-tight leading-short mb-2">
          Speak Up!
        </h1>
        <p className="text-[#718096] text-sm mb-8 font-sans">
          Let's practice your English sounds together! It's fun, quick, and easy. 🌟
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label htmlFor="nickname-input" className="block text-xs font-semibold text-[#718096] uppercase tracking-wider mb-2 font-display">
              My Nickname or Name
            </label>
            <input
              id="nickname-input"
              type="text"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                if (errorValue) setErrorValue('');
              }}
              placeholder="e.g. Mina, Somchai..."
              className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border border-blue-50 focus:border-[#4A90E2] focus:outline-none transition-all text-[#2D3748] font-sans shadow-inner placeholder:text-slate-400"
            />
            {errorValue && (
              <p className="text-rose-500 text-xs mt-2 font-sans flex items-center gap-1">
                <span>⚠️</span> {errorValue}
              </p>
            )}
          </div>

          <button
            id="start-practice-btn"
            type="submit"
            className="w-full py-4 bg-[#4A90E2] hover:bg-[#357ABD] focus:ring-4 focus:ring-blue-100 text-white rounded-2xl font-display font-semibold transition-all duration-200 transform active:scale-95 shadow-[0_4px_14px_rgba(74,144,226,0.3)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-blue-100" />
            Start Practice
          </button>
        </form>

        {/* Hidden/Subtle Teacher Panel Trigger */}
        <div className="mt-8 pt-6 border-t border-slate-50 flex justify-center">
          <button
            id="teacher-panel-trigger"
            onClick={onEnterTeacherMode}
            className="text-xs text-[#718096] hover:text-[#2D3748] tracking-wide font-display py-1 px-3 hover:bg-slate-50 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Teacher Mode
          </button>
        </div>
      </div>
    </motion.div>
  );
}
