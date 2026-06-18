import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Filter, Play, Check, BookOpen, Settings } from 'lucide-react';
import { STARTER_PACK_ENTRIES } from '../data/starterPack';
import { DatasetEntry } from '../types';

interface TeacherPanelProps {
  onBack: () => void;
}

export default function TeacherPanel({ onBack }: TeacherPanelProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [previewEntry, setPreviewEntry] = useState<DatasetEntry | null>(STARTER_PACK_ENTRIES[0]);
  const [testScoreMode, setTestScoreMode] = useState<"strong" | "pass" | "targeted_retry" | "retry">("strong");
  const [testResultFeedback, setTestResultFeedback] = useState<any | null>(null);

  // List unique modules and stages for filtration dropdowns
  const uniqueModules = Array.from(new Set(STARTER_PACK_ENTRIES.map(e => e.module)));
  const uniqueStages = Array.from(new Set(STARTER_PACK_ENTRIES.map(e => e.practiceStage)));

  // Filter entry matches
  const filteredEntries = STARTER_PACK_ENTRIES.filter(entry => {
    const matchesSearch = entry.sentence.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          entry.displayName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModule = selectedModule === 'all' || entry.module === selectedModule;
    const matchesStage = selectedStage === 'all' || entry.practiceStage === selectedStage;
    return matchesSearch && matchesModule && matchesStage;
  });

  const runMockScorerTest = (entry: DatasetEntry) => {
    // Generate simulated teacher config mock feedback instantly
    const profileName = entry.speechaceIntegration?.feedbackProfiles[0] || "general_pronunciation";
    // Kid-friendly tips kept in sync with server.ts feedbackProfilesMap.
    // Each tip is intentionally ONE short sentence to comply with
    // prototype_runtime_config_v1_0_rc1.json -> studentFeedbackStyle:
    //   maxFeedbackSentences: 2, showOneTipAtATime: true
    const feedbackProfilesMap: Record<string, string> = {
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

    const kidFriendlyTip = feedbackProfilesMap[profileName] || feedbackProfilesMap["general_pronunciation"];
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
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-all font-display font-semibold text-xs cursor-pointer bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-100/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Exit Teacher Mode
        </button>

        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
          <Settings className="w-4 h-4 text-slate-400 animate-spin" />
          Prototype Workspace Configuration Active
        </div>
      </div>

      {/* Main Grid: Entries on left, Details on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column - filters & database entries (cols: 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white border border-slate-150 rounded-2xl p-6">
            <h2 className="font-display text-xl font-bold text-slate-800 tracking-tight mb-4">
              Database Entry Registry ({STARTER_PACK_ENTRIES.length} entries)
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
                  className="w-full pl-9 pr-4 py-2 border border-slate-100 focus:border-[#4A90E2] focus:outline-none rounded-xl text-xs bg-slate-50 focus:bg-white transition-all text-[#2D3748] font-sans"
                />
              </div>

              <div>
                <select
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-100 focus:border-[#4A90E2] focus:outline-none rounded-xl text-xs bg-slate-50 text-slate-700 font-sans cursor-pointer"
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
                  className="w-full px-3 py-2 border border-slate-100 focus:border-[#4A90E2] focus:outline-none rounded-xl text-xs bg-slate-50 text-slate-700 font-sans cursor-pointer"
                >
                  <option value="all">Filter: All Stages</option>
                  {uniqueStages.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* List Table */}
            <div className="overflow-y-auto max-h-[500px] border border-slate-50 rounded-xl">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-display font-semibold">
                    <th className="py-2.5 px-3 text-left">ID</th>
                    <th className="py-2.5 px-3 text-left">Prompt</th>
                    <th className="py-2.5 px-3 text-left">Module</th>
                    <th className="py-2.5 px-3 text-left">Stage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredEntries.map((entry) => (
                    <tr
                      key={entry.id}
                      onClick={() => {
                        setPreviewEntry(entry);
                        setTestResultFeedback(null);
                      }}
                      className={`hover:bg-slate-50/70 transition-all cursor-pointer ${
                        previewEntry?.id === entry.id ? 'bg-[#EBF4FF] hover:bg-[#DCEBFF]' : ''
                      }`}
                    >
                      <td className="py-2.5 px-3 font-mono text-slate-500 font-semibold">{entry.id}</td>
                      <td className="py-2.5 px-3 font-bold text-slate-800">{entry.sentence}</td>
                      <td className="py-2.5 px-3 font-mono text-slate-500">{entry.module}</td>
                      <td className="py-2.5 px-3 font-sans text-slate-500">{entry.practiceStage}</td>
                    </tr>
                  ))}
                  {filteredEntries.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-slate-400 italic">
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
            <div className="bg-white border border-slate-150 rounded-2xl p-6 flex flex-col gap-5">
              
              {/* Header Details Info */}
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-bold text-[#4A90E2] font-display uppercase tracking-wide">
                  Selected Entry Details
                </span>
                <h3 className="font-display text-2xl font-black text-slate-800 leading-tight">
                  {previewEntry.sentence}
                </h3>
                <span className="text-xs text-slate-450 italic">
                   "{previewEntry.displayName}"
                </span>
              </div>

              {/* metadata fields */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold font-display tracking-wide uppercase">
                    Level & Lesson Order
                  </span>
                  <span className="font-bold text-slate-700 font-sans">
                    {previewEntry.level} (Order #{previewEntry.lessonOrder})
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold font-display tracking-wide uppercase">
                    Skill Classification
                  </span>
                  <span className="font-bold text-slate-700 font-sans">
                    {previewEntry.skillType.toUpperCase()}
                  </span>
                </div>
              </div>

              <div>
                <span className="block text-[10px] text-slate-400 font-semibold font-display tracking-wide uppercase mb-1">
                  Target Phonetic / Sounds
                </span>
                <div className="flex gap-1.5 flex-wrap">
                  {previewEntry.targetSounds.map((s, idx) => (
                    <span key={idx} className="bg-slate-100 border border-slate-150 text-slate-600 px-2.5 py-1 rounded-lg font-mono">
                      {s}
                    </span>
                  ))}
                  {previewEntry.ipaTargets.map((ipa, idx) => (
                    <span key={idx} className="bg-[#EBF4FF] border border-blue-100 text-[#4A90E2] px-2.5 py-1 rounded-lg font-mono font-bold">
                      {ipa}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-[10px] text-slate-400 font-semibold font-display tracking-wide uppercase mb-1">
                  Focus Words
                </span>
                <span className="text-slate-700 font-sans text-xs bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100/50 block font-semibold">
                  {previewEntry.focusWords.join(", ")}
                </span>
              </div>

              {/* instructional guides */}
              <div>
                <span className="block text-[10px] text-slate-400 font-semibold font-display tracking-wide uppercase mb-1">
                  Student Safe Tip Instruction
                </span>
                <p className="text-slate-600 font-sans text-xs bg-[#F0F7FF]/50 px-3.5 py-2.5 rounded-xl border border-blue-150/30 block leading-relaxed">
                  {previewEntry.instruction}
                </p>
              </div>

              <div>
                <span className="block text-[10px] text-slate-400 font-semibold font-display tracking-wide uppercase mb-1">
                  Thai Native Error Pattern
                </span>
                <p className="text-slate-600 font-sans text-xs bg-rose-50/20 px-3.5 py-2.5 rounded-xl border border-rose-100/30 block leading-relaxed">
                  {previewEntry.thaiErrorPattern}
                </p>
              </div>

              {/* Remediation & Diagnostics details */}
              <div className="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-slate-100">
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold font-display tracking-wide uppercase">
                    Contrast With Pair
                  </span>
                  <span className="font-mono text-slate-600 text-xs mt-1 block">
                    {previewEntry.contrastWith && previewEntry.contrastWith.length > 0 
                      ? previewEntry.contrastWith.join(", ") 
                      : "None"}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold font-display tracking-wide uppercase">
                    Remediation Path Links
                  </span>
                  <span className="font-mono text-slate-600 text-xs mt-1 block">
                    {previewEntry.remediationLinks && previewEntry.remediationLinks.length > 0
                      ? previewEntry.remediationLinks.join(", ")
                      : "None"}
                  </span>
                </div>
              </div>

              {/* Interactive Mock Feedback Engine Rules Simulator Block */}
              <div className="mt-4 pt-4 border-t border-slate-150">
                <span className="block text-[10px] text-slate-500 font-bold font-display uppercase tracking-wider mb-2.5">
                  Feedback Engine Simulator
                </span>
                <div className="flex gap-1.5 mb-3">
                  {(["strong", "pass", "targeted_retry", "retry"] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setTestScoreMode(mode)}
                      className={`px-2.5 py-1 text-[10px] font-bold font-display uppercase border rounded-lg cursor-pointer ${
                        testScoreMode === mode 
                          ? 'bg-slate-800 text-white border-slate-800 shadow-sm' 
                          : 'bg-white hover:bg-slate-50 text-slate-500 border-slate-150'
                      }`}
                    >
                      {mode.replace('_', ' ')}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => runMockScorerTest(previewEntry)}
                  className="w-full py-2 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-display font-semibold transition-all shadow-sm rounded-xl flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Simulate API Score & Feedback
                </button>

                {testResultFeedback && (
                  <div className="mt-3.5 bg-slate-50 border border-slate-150 rounded-xl p-3.5 text-xs text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
                        Profile: {testResultFeedback.profileUsed}
                      </span>
                      <span className="font-mono font-bold text-slate-800 bg-slate-200/50 px-2 py-0.5 rounded-md">
                        Sim Score: {testResultFeedback.score}%
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-sans mt-1.5">
                      <strong>Returned Feedback:</strong> "{testResultFeedback.feedback}"
                    </p>
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-8 text-center italic text-slate-400 text-xs">
              Select an entry from the database table on the left to review its complete meta-variables and rules patterns.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
