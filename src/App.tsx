import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BookOpen, GraduationCap, ChevronLeft } from 'lucide-react';
import StudentStart from './components/StudentStart';
import StudentPractice from './components/StudentPractice';
import PracticeSummary from './components/PracticeSummary';
import TeacherPanel from './components/TeacherPanel';
import { STARTER_PACK_ENTRIES } from './data/starterPack';
import { DatasetEntry } from './types';

type ScreenState = 'start' | 'unit_selection' | 'practice' | 'summary' | 'teacher';

// Defense-in-depth: only entries with grade5_ready classroomStatus (or no
// classroomStatus set) are safe for automatic student practice. This matches
// the dataset RELEASE_NOTES policy: items marked teacher_review, teacher_only,
// optional_challenge, or grade5_with_teacher_support should not be auto-assigned.
// The starterPack.ts array currently includes only grade5_ready entries, but
// this filter protects against future drift or when loading from JSON.
function isSafeForAutoPractice(e: DatasetEntry): boolean {
  if (e.studentVisible === false) return false;
  if (e.classroomStatus === undefined) return true; // safe-by-default for legacy entries
  return e.classroomStatus === 'grade5_ready';
}

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('start');
  const [studentName, setStudentName] = useState('');
  const [selectedEntries, setSelectedEntries] = useState<DatasetEntry[]>([]);
  const [sessionHistory, setSessionHistory] = useState<Array<{ entry: DatasetEntry; score: number; status: string; mainFeedback: string }>>([]);

  // Subdivided lists for student selectable Sound Themes (Units 1-6)
  const soundThemes = [
    {
      id: 'quick_mix',
      name: '🌪️ Quick Mixed Game',
      description: 'A fun challenge containing 5 random speech practices from all units!',
      getEntries: () => {
        // Sample 5 random items from the safe-for-auto-practice subset
        const safeEntries = STARTER_PACK_ENTRIES.filter(isSafeForAutoPractice);
        const shuffled = [...safeEntries].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
      }
    },
    {
      id: 'th_sounds',
      name: '👅 Unit 1: The TH Sounds',
      description: 'Practice thin, think, then, and classroom phrases using TH.',
      getEntries: () => STARTER_PACK_ENTRIES.filter(e => isSafeForAutoPractice(e) && e.module === 'th_sounds')
    },
    {
      id: 'v_w_f',
      name: '👄 Unit 2: V vs. W vs. F',
      description: 'Learn lip shape differences for wine, vine, west, and vest.',
      getEntries: () => STARTER_PACK_ENTRIES.filter(e => isSafeForAutoPractice(e) && e.module === 'v_w_f')
    },
    {
      id: 'final_consonants',
      name: '🏁 Unit 3: Final Consonants',
      description: 'Finish words clearly! Say bus/buzz, cap/cab, back/bag, and rise/rice.',
      getEntries: () => STARTER_PACK_ENTRIES.filter(e => isSafeForAutoPractice(e) && e.module === 'final_consonants')
    },
    {
      id: 'clusters',
      name: '🤝 Unit 4: Consonant Clusters',
      description: 'Keep sounds together, and say school, spot, stop, green, and blue.',
      getEntries: () => STARTER_PACK_ENTRIES.filter(e => isSafeForAutoPractice(e) && e.module === 'clusters')
    },
    {
      id: 'vowels',
      name: '🎼 Unit 5: Short & Long Vowels',
      description: 'Compare vowel shapes for sheep/ship, full/fool, and bed/bad.',
      getEntries: () => STARTER_PACK_ENTRIES.filter(e => isSafeForAutoPractice(e) && e.module === 'vowels')
    },
    {
      id: 'classroom',
      name: '🏫 Unit 6: Real World & Classroom English',
      description: 'Speak polite sentences like "May I go to the bathroom?" or "Can you repeat that, please?"',
      getEntries: () => STARTER_PACK_ENTRIES.filter(e => isSafeForAutoPractice(e) && e.module === 'real_world_phrases')
    }
  ];

  const handleStart = (name: string) => {
    setStudentName(name);
    setScreen('unit_selection');
  };

  const handleChooseTheme = (themeId: string) => {
    const theme = soundThemes.find(t => t.id === themeId);
    if (theme) {
      const targetList = theme.getEntries();
      // Ensure we have entries to practice
      if (targetList.length > 0) {
        setSelectedEntries(targetList);
        setSessionHistory([]);
        setScreen('practice');
      } else {
        alert("This module is currently setting up! Pick another Sound Theme. 😊");
      }
    }
  };

  const handleFinishPractice = (history: typeof sessionHistory) => {
    setSessionHistory(history);
    setScreen('summary');
  };

  const handleRestart = () => {
    setScreen('unit_selection');
  };

  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#2D3748] flex flex-col font-sans transition-colors duration-300 antialiased selection:bg-[#4A90E2]/20" id="pronunciation-coach-app">
      
      {/* Universal Top Branding Header */}
      <header className="bg-white border-b border-blue-100/65 py-5 px-6 shrink-0 shadow-[0_2px_12px_rgba(74,144,226,0.04)] flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo Badge in Clean Minimalism Theme */}
          <div className="w-10 h-10 rounded-xl bg-[#4A90E2] flex items-center justify-center text-white font-display font-bold text-lg shadow-[0_4px_10px_rgba(74,144,226,0.25)]">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-[#4A90E2] tracking-tight text-base leading-none">
              Speak Up!
            </span>
            <span className="text-[10px] text-[#718096] font-sans mt-0.5 tracking-wide uppercase font-medium">
              Thai-English Pronunciation Coach
            </span>
          </div>
        </div>

        {screen !== 'start' && screen !== 'teacher' && (
          <div className="flex items-center gap-2 text-xs font-semibold text-[#718096] font-display">
            <span>Student:</span>
            <span className="bg-[#EBF4FF] text-[#4A90E2] font-sans px-3 py-1 rounded-full border border-blue-150/40 font-bold">
              👤 {studentName || "Guest"}
            </span>
          </div>
        )}
      </header>

      {/* Main Container Views with Motion Animation */}
      <main className="flex-1 overflow-y-auto py-8">
        <AnimatePresence mode="wait">
          
          {screen === 'start' && (
            <div key="start" className="contents">
              <StudentStart
                onStart={handleStart}
                onEnterTeacherMode={() => setScreen('teacher')}
              />
            </div>
          )}

          {screen === 'unit_selection' && (
            <motion.div
              key="unit_selection"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto px-4 text-center"
              id="unit-selection-container"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-blue-100/40 text-left">
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#2D3748]">
                    Welcome, {studentName}!
                  </h2>
                  <p className="text-[#718096] text-xs font-sans mt-0.5">
                    Pick a sound unit below to start practice speaking.
                  </p>
                </div>

                <button
                  onClick={() => setScreen('start')}
                  className="flex items-center gap-1 text-[11px] font-bold text-[#718096] hover:text-[#2D3748] bg-white border border-blue-100/50 px-3 py-1.5 rounded-lg font-display cursor-pointer transition-colors shadow-xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Back
                </button>
              </div>

              {/* Grid of Sound Themes */}
              <div className="grid grid-cols-1 gap-4 text-left" id="themes-grid-selection">
                {soundThemes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleChooseTheme(theme.id)}
                    className="group bg-white p-5 rounded-3xl border border-blue-100 hover:border-[#4A90E2]/40 hover:shadow-[0_8px_30px_rgba(74,144,226,0.06)] transition-all text-left flex items-start justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EBF4FF]"
                  >
                    <div className="flex flex-col gap-1 pr-6">
                      <span className="font-display font-medium text-base text-[#2D3748] group-hover:text-[#4A90E2] transition-colors">
                        {theme.name}
                      </span>
                      <p className="text-[#718096] text-xs font-sans leading-relaxed">
                        {theme.description}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#EBF4FF] text-slate-400 group-hover:text-[#4A90E2] flex items-center justify-center shrink-0 transition-all">
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {screen === 'practice' && (
            <div key="practice" className="contents">
              <StudentPractice
                entries={selectedEntries}
                studentName={studentName}
                onFinish={handleFinishPractice}
              />
            </div>
          )}

          {screen === 'summary' && (
            <div key="summary" className="contents">
              <PracticeSummary
                studentName={studentName}
                history={sessionHistory}
                onRestart={handleRestart}
              />
            </div>
          )}

          {screen === 'teacher' && (
            <div key="teacher" className="contents">
              <TeacherPanel
                onBack={() => setScreen('start')}
              />
            </div>
          )}

        </AnimatePresence>
      </main>

      {/* Universal footer */}
      <footer className="py-4 text-center text-[10px] text-[#718096] font-mono tracking-wider shrink-0 border-t border-blue-100/50 bg-white/40">
        THAILAND ELL GRADE 5 • OFF-LINE PROTOTYPE ACTIVE
      </footer>

    </div>
  );
}
