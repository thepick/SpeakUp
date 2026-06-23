import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Filter, Play, Check, BookOpen, Settings } from 'lucide-react';
import { FULL_DATASET } from '../data/fullDataset';
import { DatasetEntry } from '../types';

// ─── Mock feedback profiles (kept in sync with server.ts) ──────────────────
const FEEDBACK_PROFILES: Record<string, string> = {
  "th_articulation": "Put your tongue lightly between your teeth for TH and blow air gently.",
  "lip_shape_v_w_f": "Touch top teeth to bottom lip for V and F; round your lips for W.",
  "z_voicing": "Let the Z sound buzz; put your hand on your throat to feel it.",
  "sibilant_affricate_contrast": "Keep SH soft and CH sharp with a quick tap.",
  "r_l_contrast": "For L, touch behind top teeth; for R, pull your tongue back without touching.",
  "nasal_place_contrast": "M closes lips, N presses tongue up, NG raises the back of the tongue.",
  "final_sound_control": "Finish the ending clearly, do not cut off the last sound.",
  "cluster_control": "Keep the consonants close together, no extra vowels inside.",
  "weak_vowel_reduction": "Relax and say the weak syllables lightly, like a quiet 'uh'.",
  "connected_speech": "Let the words flow together smoothly in one continuous line.",
  "stress_and_rhythm": "Make the important syllable louder, longer, and higher in pitch.",
  "intonation_teacher_review": "Listen and follow the melody of the sentence going up or down.",
  "real_world_clarity": "Speak loud and clear, like telling your teacher in a busy classroom.",
  "general_pronunciation": "Take it slow first, then say each sound clearly and naturally."
};

interface TeacherPanelProps {
  onBack: () => void;
}

export default function TeacherPanel({ onBack }: TeacherPanelProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [previewEntry, setPreviewEntry] = useState<DatasetEntry | null>(FULL_DATASET[0]);
  const [testScoreMode, setTestScoreMode] = useState<"strong" | "pass" | "targeted_retry" | "retry">("strong");
  const [testResultFeedback, setTestResultFeedback] = useState<any | null>(null);

  // List unique modules and stages for filtration dropdowns
  const uniqueModules = Array.from(new Set(FULL_DATASET.map(e => e.module)));
  const uniqueStages = Array.from(new Set(FULL_DATASET.map(e => e.practiceStage)));

  // Filter entry matches
  const filteredEntries = FULL_DATASET.filter(entry => {
    const matchesSearch = entry.sentence.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          entry.displayName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModule = selectedModule === 'all' || entry.module === selectedModule;
    const matchesStage = selectedStage === 'all' || entry.practiceStage === selectedStage;
    return matchesSearch && matchesModule && matchesStage;
  });

  const runMockScorerTest = (entry: DatasetEntry) => {
    // Generate simulated teacher config mock feedback instantly
    const profileName = entry.speechaceIntegration?.feedbackProfiles[0] || "general_pronunciation";

    const kidFriendlyTip = FEEDBACK_PROFILES[profileName] || FEEDBACK_PROFILES["general_pronunciation"];
    let mainFeedback = "";
    let score = 92;

    if (testScoreMode === "strong") {
      score = 93;
      mainFeedback = entry.successMessage || "Great job! That sounded clear and natural.";
    } else if (testScoreMode === "pass") {
      score = 81;
      mainFeedback = `Good work! ${kidFriendlyTip}`;
    } else if (testScoreMode === "targeted_retry") {
      score = 72;
      // Single sentence + tip = 2 sentences total (matches maxFeedbackSentences).
      mainFeedback = `Almost there! ${kidFriendlyTip}`;
    } else {
      score = 58;
      mainFeedback = `Keep practicing! ${kidFriendlyTip}`;
    }

    setTestResultFeedback({
      score,
      status: testScoreMode,
      feedback: mainFeedback,
      profileUsed: profileName
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-left" id="teacher-panel-root">
      {/* Header back menu row */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-text-muted hover:text-text transition-all font-display font-semibold text-xs cursor-pointer bg-bg hover:bg-bg px-3 py-1.5 rounded-btn border border-border"
        >
          <ArrowLeft className="w-4 h-4" />
          Exit Teacher Mode
        </button>

        <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
          <Settings className="w-4 h-4 text-text-muted" />
          Teacher Tools
        </div>
      </div>

      {/* Main Grid: Entries on left, Details on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column - filters & database entries (cols: 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-surface border border-border rounded-card p-6">
            <h2 className="font-display text-xl font-bold text-text tracking-tight mb-4">
              Database Entry Registry ({FULL_DATASET.length} entries)
            </h2>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Query sentence..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-border focus:border-primary focus:outline-none rounded-btn text-xs bg-bg focus:bg-surface transition-all text-text font-sans"
                />
              </div>

              <div>
                <select
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  className="w-full px-3 py-2 border border-border focus:border-primary focus:outline-none rounded-btn text-xs bg-bg text-text font-sans cursor-pointer"
                >
                  <option value="all">Filter: All Modules</option>
                  {uniqueModules.map((m, i) => (
                    <option key={i} value={m}>{m.replace(/_/g, ' ')}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="w-full px-3 py-2 border border-border focus:border-primary focus:outline-none rounded-btn text-xs bg-bg text-text font-sans cursor-pointer"
                >
                  <option value="all">Filter: All Stages</option>
                  {uniqueStages.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* List Table */}
            <div className="overflow-y-auto max-h-[500px] border border-border rounded-xl">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-bg border-b border-border text-text-muted font-display font-semibold">
                    <th className="py-2.5 px-3 text-left">ID</th>
                    <th className="py-2.5 px-3 text-left">Prompt</th>
                    <th className="py-2.5 px-3 text-left">Module</th>
                    <th className="py-2.5 px-3 text-left">Stage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {filteredEntries.map((entry) => (
                    <tr
                      key={entry.id}
                      onClick={() => {
                        setPreviewEntry(entry);
                        setTestResultFeedback(null);
                      }}
                      className={`hover:bg-bg transition-all cursor-pointer ${
                        previewEntry?.id === entry.id ? 'bg-primary-light hover:bg-primary-light' : ''
                      }`}>
                      <td className="py-2.5 px-3 font-mono text-text-muted font-semibold">{entry.id}</td>
                      <td className="py-2.5 px-3 font-bold text-text">{entry.sentence}</td>
                      <td className="py-2.5 px-3 font-mono text-text-muted">{entry.module}</td>
                      <td className="py-2.5 px-3 font-sans text-text-muted">{entry.practiceStage}</td>
                    </tr>
                  ))}
                  {filteredEntries.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-text-muted italic">
                        No database entries match your filter rules.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right column - item details & debugger (cols: 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {previewEntry ? (
            <div className="bg-surface border border-border rounded-card p-6 flex flex-col gap-5">
              
              {/* Header Details Info */}
              <div className="border-b border-border pb-3">
                <span className="text-caption font-bold text-primary font-display uppercase tracking-wide">
                  Selected Entry Details
                </span>
                <h3 className="font-display text-2xl font-black text-text leading-tight">
                  {previewEntry.sentence}
                </h3>
                <span className="text-xs text-slate-450 italic">
                   "{previewEntry.displayName}"
                </span>
              </div>

              {/* metadata fields */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="block text-caption text-text-muted font-semibold font-display tracking-wide uppercase">
                    Level & Lesson Order
                  </span>
                  <span className="font-bold text-text font-sans">
                    {previewEntry.level} (Order #{previewEntry.lessonOrder})
                  </span>
                </div>
                <div>
                  <span className="block text-caption text-text-muted font-semibold font-display tracking-wide uppercase">
                    Skill Classification
                  </span>
                  <span className="font-bold text-text font-sans">
                    {previewEntry.skillType.toUpperCase()}
                  </span>
                </div>
              </div>

              <div>
                <span className="block text-caption text-text-muted font-semibold font-display tracking-wide uppercase mb-1">
                  Target Phonetic / Sounds
                </span>
                <div className="flex gap-1.5 flex-wrap">
                  {previewEntry.targetSounds.map((s, idx) => (
                    <span key={idx} className="bg-bg border border-border text-text px-2.5 py-1 rounded-lg font-mono">
                      {s}
                    </span>
                  ))}
                  {previewEntry.ipaTargets?.map((ipa, idx) => (
                    <span key={idx} className="bg-primary-light border border-primary/30 text-primary px-2.5 py-1 rounded-lg font-mono font-bold">
                      {ipa}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-caption text-text-muted font-semibold font-display tracking-wide uppercase mb-1">
                  Focus Words
                </span>
                <span className="text-text font-sans text-xs bg-bg px-2.5 py-1.5 rounded-xl border border-border block font-semibold">
                  {previewEntry.focusWords.join(", ")}
                </span>
              </div>

              {/* instructional guides */}
              <div>
                <span className="block text-caption text-text-muted font-semibold font-display tracking-wide uppercase mb-1">
                  Student Safe Tip Instruction
                </span>
                <p className="text-text-muted font-sans text-xs bg-primary-light/50 px-3.5 py-2.5 rounded-xl border border-primary/20 block leading-relaxed">
                  {previewEntry.instruction}
                </p>
              </div>

              <div>
                <span className="block text-caption text-text-muted font-semibold font-display tracking-wide uppercase mb-1">
                  Thai Native Error Pattern
                </span>
                <p className="text-text-muted font-sans text-xs bg-danger-light/20 px-3.5 py-2.5 rounded-xl border border-danger/20 block leading-relaxed">
                  {previewEntry.thaiErrorPattern}
                </p>
              </div>

              {/* Remediation & Diagnostics details */}
              <div className="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-border">
                <div>
                  <span className="block text-caption text-text-muted font-semibold font-display tracking-wide uppercase">
                    Contrast With Pair
                  </span>
                  <span className="font-mono text-text-muted text-xs mt-1 block">
                    {previewEntry.contrastWith && previewEntry.contrastWith.length > 0 
                      ? previewEntry.contrastWith.join(", ") 
                      : "None"}
                  </span>
                </div>
                <div>
                  <span className="block text-caption text-text-muted font-semibold font-display tracking-wide uppercase">
                    Remediation Path Links
                  </span>
                  <span className="font-mono text-text-muted text-xs mt-1 block">
                    {previewEntry.remediationLinks && previewEntry.remediationLinks.length > 0
                      ? previewEntry.remediationLinks.join(", ")
                      : "None"}
                  </span>
                </div>
              </div>

              {/* Interactive Mock Feedback Engine Rules Simulator Block */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="block text-caption text-text-muted font-bold font-display uppercase tracking-wider mb-2.5">
                  Feedback Engine Simulator
                </span>
                <div className="flex gap-1.5 mb-3">
                  {(["strong", "pass", "targeted_retry", "retry"] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setTestScoreMode(mode)}
                      className={`px-2.5 py-1 text-caption font-bold font-display uppercase border rounded-btn cursor-pointer ${
                        testScoreMode === mode 
                          ? 'bg-slate-800 text-white border-slate-800 shadow-sm' 
                          : 'bg-surface hover:bg-bg text-text-muted border-border'
                      }`}
                    >
                      {mode.replace('_', ' ')}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => runMockScorerTest(previewEntry)}
                  className="w-full py-2 bg-primary hover:bg-primary/90 text-white font-display font-semibold transition-all shadow-sm rounded-btn flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Simulate API Score & Feedback
                </button>

                {testResultFeedback && (
                  <div className="mt-3.5 bg-bg border border-border rounded-xl p-3.5 text-xs text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-caption uppercase font-bold text-text-muted">
                        Profile: {testResultFeedback.profileUsed}
                      </span>
                      <span className="font-mono font-bold text-text bg-slate-200/50 px-2 py-0.5 rounded-md">
                        Sim Score: {testResultFeedback.score}%
                      </span>
                    </div>
                    <p className="text-text-muted leading-relaxed font-sans mt-1.5">
                      <strong>Returned Feedback:</strong> "{testResultFeedback.feedback}"
                    </p>
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="bg-bg border border-dashed border-border rounded-card p-8 text-center italic text-text-muted text-xs">
              Select an entry from the database table on the left to review its complete meta-variables and rules patterns.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
