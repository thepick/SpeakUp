import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Mic, Square, CheckCircle, RefreshCw, ChevronRight, HelpCircle, AlertCircle } from 'lucide-react';
import { AzureAssessResponse, DatasetEntry, ScoreResponse, ScoreStatus } from '../types';
import { assessWithAzure } from '../utils/assessApi';
import { getFriendlyErrorMessage } from '../utils/errorMessages';

// Map Azure response (0-100, phoneme detail) into the app's ScoreResponse.
function mapAzureToScoreResponse(azure: AzureAssessResponse, entry: DatasetEntry): ScoreResponse {
  const overall = azure.scores.overall;
  const t = entry.speechaceIntegration.thresholdProfile;

  let status: ScoreStatus;
  let scoreBand: 'green' | 'blue' | 'yellow' | 'orange' | 'red';
  let mainFeedback: string;
  let nextAction: string;

  if (overall >= t.strongPass) {
    status = 'strong'; scoreBand = 'green';
    mainFeedback = entry.successMessage || 'Perfect! Clear and natural.';
    nextAction = 'advance';
  } else if (overall >= t.overallPass) {
    status = 'pass'; scoreBand = 'blue';
    mainFeedback = `Good work! Score: ${overall.toFixed(0)}`;
    nextAction = 'advance';
  } else if (overall >= t.wordWatch) {
    status = 'targeted_retry'; scoreBand = 'yellow';
    const bad = azure.words.filter(w => w.errorType !== 'None').map(w => w.word);
    mainFeedback = bad.length
      ? `Almost there. Focus on: ${bad.slice(0, 3).join(', ')}`
      : `Almost there! Score: ${overall.toFixed(0)}`;
    nextAction = 'retry_focus_words';
  } else if (overall >= t.retryBelow) {
    status = 'retry'; scoreBand = 'orange';
    mainFeedback = `Keep practicing. Score: ${overall.toFixed(0)}`;
    nextAction = 'retry';
  } else {
    status = 'teacher_review'; scoreBand = 'red';
    mainFeedback = 'This one is tricky. Ask your teacher for help.';
    nextAction = 'retry';
  }

  return {
    attemptId: `att-${Math.random().toString(36).slice(2, 11)}`,
    entryId: entry.id,
    status,
    overallScore: Math.round(overall),
    scoreBand,
    mainFeedback,
    nextAction,
    recommendedEntryIds: entry.remediationLinks || [],
  };
}

interface StudentPracticeProps {
  entries: DatasetEntry[];
  studentName: string;
  onFinish: (history: Array<{ entry: DatasetEntry; score: number; status: string; mainFeedback: string }>) => void;
  /**
   * Called after each successful Azure scoring with the entry id and the
   * final overall score. The parent App wires this to useDriveSync.saveProgress
   * so that every scored entry is persisted to Google Drive.
   *
   * Optional: when omitted (e.g. unit tests), scoring results are kept in
   * local React state only and not synced.
   */
  onEntryScored?: (entryId: number, overallScore: number) => void;
  /** Show extra diagnostic info when the global "strawberry" debug mode is on. */
  debugMode?: boolean;
}

export default function StudentPractice({ entries, studentName, onFinish, onEntryScored, debugMode }: StudentPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [scoreResult, setScoreResult] = useState<ScoreResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [practiceHistory, setPracticeHistory] = useState<Array<{ entry: DatasetEntry; score: number; status: string; mainFeedback: string }>>([]);
  const [assessError, setAssessError] = useState<string | null>(null);

  // Debug state — holds the last raw Azure response for the debug panel
  const [debugData, setDebugData] = useState<AzureAssessResponse | null>(null);
  const [debugCollapsed, setDebugCollapsed] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const promptAudioRef = useRef<HTMLAudioElement | null>(null);
  // Preload the audio for the next entry while the student is practicing the current one
  const preloadedAudioRef = useRef<HTMLAudioElement | null>(null);
  const preloadedEntryIdRef = useRef<number | null>(null);

  const currentEntry = entries[currentIndex];

  // Clean up object URLs whenever they change or on unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  // Auto-play the audio prompt when the entry changes using SpeechSynthesis
  useEffect(() => {
    if (currentEntry) {
      handlePlayPrompt();
      // Clear previous scoring result and recording
      setScoreResult(null);
      setAudioUrl(null);
      setAudioChunks([]);
      setAssessError(null);
      // Clear debug data for new entry
      setDebugData(null);
    }
  }, [currentEntry]);

  const handlePlayPrompt = () => {
    if (!currentEntry) return;
    // Cancel any current speech synthesis
    window.speechSynthesis.cancel();
    // Stop any currently playing prompt audio
    if (promptAudioRef.current) {
      promptAudioRef.current.pause();
      promptAudioRef.current = null;
    }

    let audio: HTMLAudioElement;

    // Use preloaded audio if it matches the current entry (instant playback)
    if (preloadedAudioRef.current && preloadedEntryIdRef.current === currentEntry.id) {
      audio = preloadedAudioRef.current;
      preloadedAudioRef.current = null;
      preloadedEntryIdRef.current = null;
    } else {
      const audioPath = `/audio/${currentEntry.id}.mp3`;
      audio = new Audio(audioPath);
    }

    promptAudioRef.current = audio;
    audio.play().catch(() => {
      // Fallback to browser SpeechSynthesis if audio file missing
      const utterance = new SpeechSynthesisUtterance(currentEntry.sentence);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    });
    audio.onended = () => {
      promptAudioRef.current = null;
    };
  };

  const handlePlayRecording = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  // Preload the next entry's audio in the background so it plays instantly
  // when the student advances. Called after scoring finishes.
  const preloadNextAudio = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= entries.length) return;
    const nextEntry = entries[nextIndex];
    // Don't re-preload if we already have that entry cached
    if (preloadedEntryIdRef.current === nextEntry.id) return;
    // Clean up any stale preload
    if (preloadedAudioRef.current) {
      preloadedAudioRef.current.pause();
      preloadedAudioRef.current = null;
    }
    const audioPath = `/audio/${nextEntry.id}.mp3`;
    const audio = new Audio(audioPath);
    audio.preload = 'auto';
    preloadedAudioRef.current = audio;
    preloadedEntryIdRef.current = nextEntry.id;
  };

  const startRecording = async () => {
    try {
      setScoreResult(null);
      setAudioUrl(null);
      setAudioChunks([]);
      setAssessError(null);
      setDebugData(null);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setAudioChunks(chunks);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      // Fallback for mock environments if microphone is denied/not present
      setIsRecording(true);
      // Simulate recorded chunk
      setTimeout(() => {
        const mockBlob = new Blob([], { type: 'audio/webm' });
        setAudioUrl(URL.createObjectURL(mockBlob));
      }, 100);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach(track => track.stop());
      }
    }
    setIsRecording(false);
  };

  const handleCheckSound = async () => {
      if (!currentEntry) return;
      setLoading(true);

      try {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        const referenceText =
          currentEntry.speechaceIntegration?.expectedText || currentEntry.sentence;

        let resData: ScoreResponse;

        const azureResult = await assessWithAzure(audioBlob, referenceText, 'en-US');
        if (!azureResult.success) {
          throw new Error(azureResult.error || 'Azure returned success:false');
        }
        // Capture raw Azure data for debug panel (only when debugMode is on)
        if (debugMode) {
          setDebugData(azureResult);
        }
        resData = mapAzureToScoreResponse(azureResult, currentEntry);

        // Persist result
        setScoreResult(resData);
        setPracticeHistory(prev => [
          ...prev,
          {
            entry: currentEntry,
            score: resData.overallScore,
            status: resData.status,
            mainFeedback: resData.mainFeedback,
          },
        ]);
        // Push the score to the parent's saveProgress hook so it can be
        // persisted to Google Drive. Fire-and-forget — the parent decides
        // whether to await.
        try {
          onEntryScored?.(currentEntry.id, resData.overallScore);
        } catch (persistErr) {
          // Don't let a sync failure block the practice flow.
          console.warn('[SpeakUp] saveProgress threw:', persistErr);
        }

        // Preload the next entry's audio in the background so the next word
        // plays instantly when the student advances.
        preloadNextAudio();
      } catch (err) {
        const message = getFriendlyErrorMessage(err);
        console.error(err);
        setAssessError(message);
      } finally {
        setLoading(false);
      }
    };

  const handleNext = () => {
    if (currentIndex < entries.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finish lesson maps and show summary
      onFinish(practiceHistory);
    }
  };

  const humanizedModuleName = (module: string) => {
    return module
      .split('_')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  };

  // ─── Keyboard shortcuts ───────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when the user is typing in an input or textarea
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      // Space: toggle recording (start/stop)
      if (e.code === 'Space') {
        e.preventDefault();
        if (isRecording) {
          stopRecording();
        } else {
          startRecording();
        }
        return;
      }

      // R: retry — only when scoreResult shows retry/targeted_retry
      if (e.key === 'r' || e.key === 'R') {
        if (
          scoreResult &&
          (scoreResult.status === 'retry' || scoreResult.status === 'targeted_retry')
        ) {
          e.preventDefault();
          setScoreResult(null);
          setAudioUrl(null);
          setAudioChunks([]);
          setAssessError(null);
          setDebugData(null);
        }
        return;
      }

      // Enter: advance to next word — only when scoreResult is showing
      if (e.key === 'Enter') {
        if (scoreResult) {
          e.preventDefault();
          handleNext();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isRecording, scoreResult, currentIndex]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6" id="student-practice-root">
      {/* Module Header and Progress */}
      <div className="flex items-center justify-between mb-8 bg-white rounded-3xl px-6 py-4.5 border border-blue-100/50 shadow-[0_4px_15px_rgba(74,144,226,0.02)]">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#4A90E2] font-display">
            Current Lesson
          </span>
          <span className="text-sm font-bold text-[#2D3748] font-sans">
            {currentEntry ? humanizedModuleName(currentEntry.module) : "Practice Session"}
          </span>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#718096] font-display">
            Overall Progress
          </span>
          <div className="text-sm font-black text-[#2D3748] font-mono">
            {currentIndex + 1} / {entries.length}
          </div>
        </div>
      </div>

      {/* Main Pronunciation Card */}
      <div className="bg-white rounded-[32px] p-8 md:p-10 border border-blue-100/60 shadow-[0_10px_25px_rgba(74,144,226,0.05)] relative overflow-hidden mb-6">
        {/* Decorative subtle border line on active */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4A90E2] to-blue-400" />

        {/* Listen Prompt Section */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs bg-[#EBF4FF] text-[#4A90E2] font-semibold px-3.5 py-1 rounded-full font-sans border border-blue-100/20">
            {currentEntry?.practiceStage.toUpperCase()}
          </span>
          <button
            onClick={handlePlayPrompt}
            className="flex items-center gap-1.5 text-xs text-[#4A90E2] hover:text-[#357ABD] bg-[#EBF4FF] hover:bg-[#DCEBFF] transition-all px-4 py-2 rounded-xl cursor-pointer font-display font-semibold shadow-xs"
            title="Listen to correct model"
            id="speaker-listen-btn"
          >
            <Volume2 className="w-4 h-4" />
            Listen
          </button>
        </div>

        {/* Word/Sentence text to say */}
        <div className="text-center my-8">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#2D3748] tracking-tight leading-short px-4 select-all">
            {currentEntry?.sentence}
          </h2>
          <p className="text-[#718096] text-xs mt-3 select-none font-sans italic">
            "{currentEntry?.displayName}"
          </p>
        </div>

        {/* Friendly instruction tip */}
        <div className="bg-[#F0F7FF]/60 border border-blue-100/35 rounded-2xl p-5 flex gap-3 text-left mb-8 items-start">
          <HelpCircle className="w-5 h-5 text-[#4A90E2] shrink-0 mt-0.5" />
          <p className="text-xs text-[#718096] leading-relaxed font-sans">
            <strong className="text-[#2D3748]">Coach's Tip:</strong> {currentEntry?.instruction}
          </p>
        </div>

        {/* Interaction Controls */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            {/* Record Trigger Button */}
            {!isRecording ? (
              <div className="flex flex-col items-center gap-1.5">
                <button
                  onClick={startRecording}
                  disabled={loading}
                  className="w-20 h-20 rounded-full bg-[#FFF5F5] hover:bg-[#FFEAEB] text-[#F56565] border-4 border-[#FED7D7] disabled:bg-slate-100 disabled:border-slate-200 flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer"
                  id="record-mic-btn"
                  title="Start recording (Space)"
                >
                  <div className="relative">
                    <Mic className="w-8 h-8" />
                  </div>
                </button>
                <span className="text-[9px] text-slate-400 font-mono">Space</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5">
                <button
                  onClick={stopRecording}
                  className="w-20 h-20 rounded-full bg-[#FFF5F5] text-[#F56565] border-4 border-[#FED7D7] flex items-center justify-center shadow-lg active:scale-95 animate-pulse transition-all cursor-pointer"
                  id="stop-mic-btn"
                  title="Stop recording (Space)"
                >
                  <Square className="w-7 h-7 text-[#F56565] fill-[#F56565]" />
                </button>
                <span className="text-[9px] text-slate-400 font-mono">Space</span>
              </div>
            )}

            {/* Play my audio control */}
            {audioUrl && !isRecording && (
              <button
                onClick={handlePlayRecording}
                className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all cursor-pointer border border-slate-200/50"
                title="Play back my recording"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            )}
          </div>

          <p className="text-xs font-semibold font-display tracking-wide uppercase text-[#718096]" id="mic-status-text">
            {isRecording ? "Recording your voice..." : audioUrl ? "Voice Recorded!" : "Click the microphone to start speaking"}
          </p>

          {assessError && (
            <div className="mt-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-left flex items-start gap-2 max-w-md">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-red-700">Assessment failed</p>
                <p className="text-[11px] text-red-600 leading-relaxed">{assessError}</p>
              </div>
            </div>
          )}

          {/* Action to scores checks */}
          {audioUrl && !isRecording && !scoreResult && (
            <button
              onClick={handleCheckSound}
              disabled={loading}
              className="mt-4 px-6 py-3.5 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-display font-semibold rounded-2xl flex items-center gap-2 shadow-[0_4px_14px_rgba(74,144,226,0.35)] transition-all active:scale-98 disabled:opacity-50 cursor-pointer text-sm"
              id="check-button"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  Analyzing...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-100" />
                  Check Sound
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Results and Feedback Panel */}
      <AnimatePresence mode="wait">
        {scoreResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white border border-blue-100/50 rounded-[32px] p-6 text-left shadow-[0_10px_25px_rgba(74,144,226,0.03)] relative overflow-hidden mb-6"
            id="feedback-panel"
          >
            {/* Scoring Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs tracking-wider uppercase font-bold text-[#718096] font-display">
                  Sound Quality
                </span>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold font-sans uppercase tracking-wider ${
                  scoreResult.status === 'strong' ? 'bg-[#E6FFFA] text-[#1D4044]' :
                  scoreResult.status === 'pass' ? 'bg-[#EBF4FF] text-[#2B6CB0]' :
                  scoreResult.status === 'targeted_retry' ? 'bg-[#FFFBEB] text-[#92400E] border border-amber-200' :
                  'bg-[#FFF5F5] text-[#9B2C2C]'
                }`}>
                  {scoreResult.status.replace('_', ' ')}
                </span>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black font-mono tracking-tight text-[#2D3748]">
                  {scoreResult.overallScore}
                </span>
                <span className="text-xs font-semibold font-sans text-[#718096] ml-1">
                  / 100
                </span>
              </div>
            </div>

            {/* Interactive Progress Indicator Bar */}
            <div className="w-full h-3 bg-slate-200/60 rounded-full mb-5 overflow-hidden flex">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${scoreResult.overallScore}%` }}
                className={`h-full rounded-full ${
                  scoreResult.scoreBand === 'green' ? 'bg-gradient-to-r from-[#48BB78] to-[#38A169]' :
                  scoreResult.scoreBand === 'blue' ? 'bg-gradient-to-r from-[#4A90E2] to-[#357ABD]' :
                  scoreResult.scoreBand === 'orange' ? 'bg-gradient-to-r from-[#F6AD55] to-amber-500' :
                  'bg-gradient-to-r from-rose-450 to-rose-500'
                }`}
              />
            </div>

            {/* Coach Feedback Text Box aligned with design system pattern */}
            <div className={`flex gap-4 p-5 rounded-2xl mb-6 items-start text-left border-l-[6px] ${
              scoreResult.scoreBand === 'green' ? 'bg-[#F0FDF4] border-[#48BB78] text-[#1E3A1E] shadow-sm' :
              scoreResult.scoreBand === 'blue' ? 'bg-[#F0F7FF] border-[#4A90E2] text-[#1D3248] shadow-sm' :
              scoreResult.scoreBand === 'orange' ? 'bg-[#FFFBEB] border-[#F6AD55] text-[#92400E] shadow-sm' :
              'bg-[#FFF5F5] border-[#F56565] text-[#6D1B1B] shadow-sm'
            }`}>
              <div className="text-xl shrink-0">
                {scoreResult.scoreBand === 'green' ? '⭐' :
                 scoreResult.scoreBand === 'blue' ? '⭐' :
                 scoreResult.scoreBand === 'orange' ? '⭐' : '💡'}
              </div>
              <div>
                <h4 className="text-sm font-bold mb-0.5 font-display">
                  {scoreResult.scoreBand === 'green' ? 'Perfect Sound!' :
                   scoreResult.scoreBand === 'blue' ? 'Well Done!' :
                   scoreResult.scoreBand === 'orange' ? 'Almost there!' : 'Keep Practicing!'}
                </h4>
                <p className="text-xs leading-relaxed font-sans opacity-95">
                  {scoreResult.mainFeedback}
                </p>
              </div>
            </div>

            {/* Flow actions */}
            <div className="flex gap-3 justify-end pt-4 border-t border-blue-100/35">
              {/* Retry / Next Actions */}
              {(scoreResult.status === 'retry' || scoreResult.status === 'targeted_retry') && (
                <button
                  onClick={() => {
                    setScoreResult(null);
                    setAudioUrl(null);
                    setAudioChunks([]);
                    setAssessError(null);
                    setDebugData(null);
                  }}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#718096] text-xs font-semibold font-display rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Try Again (R)"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <div className="flex flex-col items-start leading-tight">
                    <span>Try Again</span>
                    <span className="text-[9px] text-slate-400 font-mono">R</span>
                  </div>
                </button>
              )}

              <button
                onClick={handleNext}
                className="px-6 py-3 bg-[#48BB78] hover:bg-[#38A169] text-white text-xs font-semibold font-display rounded-xl flex items-center gap-1.5 shadow-[0_4px_14px_rgba(72,187,120,0.3)] transition-all cursor-pointer"
                id="next-action-btn"
                title="Next Word (Enter)"
              >
                {currentIndex < entries.length - 1 ? (
                  <>
                    <div className="flex flex-col items-start leading-tight">
                      <span>Next Word</span>
                      <span className="text-[9px] text-emerald-200 font-mono">Enter ↵</span>
                    </div>
                    <ChevronRight className="w-4 h-4 ml-0.5" />
                  </>
                ) : (
                  <>
                    Finish Lesson
                    <CheckCircle className="w-4 h-4 ml-1 text-white" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Debug Panel (strawberry mode) ─────────────────────────────────── */}
      {debugMode && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-[#1a1a2e] border border-purple-500/30 rounded-[24px] text-left shadow-[0_10px_30px_rgba(139,92,246,0.15)] overflow-hidden mb-6 font-mono text-xs"
          id="debug-panel"
        >
          {/* Header */}
          <div
            role="button"
            tabIndex={0}
            aria-expanded={!debugCollapsed}
            aria-label={debugCollapsed ? 'Expand debug panel' : 'Collapse debug panel'}
            className="flex items-center justify-between px-5 py-3 bg-[#0f0f1a] border-b border-purple-500/20 cursor-pointer select-none"
            onClick={() => setDebugCollapsed(d => !d)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setDebugCollapsed(d => !d);
              }
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-purple-400">🐞</span>
              <span className="text-purple-300 font-bold tracking-wide uppercase text-[10px]">
                Azure Debug Panel
              </span>
              {debugData && (
                <span className="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase bg-green-900/60 text-green-400">
                  AZURE
                </span>
              )}
            </div>
            <span className="text-purple-400/60 text-[10px]">
              {debugCollapsed ? '▶' : '▼'}
            </span>
          </div>

          {!debugCollapsed && (
            <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
              {!debugData ? (
                <p className="text-gray-500 italic">No assessment run yet. Record and check a sound to see Azure data.</p>
              ) : (
                <>
                  {/* ── Scoring Path ── */}
                  <section>
                    <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-wider text-[10px] border-b border-purple-500/20 pb-1">
                      Scoring Path
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      <span className="text-gray-500">Engine:</span>
                      <span className="text-green-400">Azure Pronunciation Assessment</span>
                      <span className="text-gray-500">Locale:</span>
                      <span className="text-gray-300">{debugData.locale}</span>
                      <span className="text-gray-500">Reference:</span>
                      <span className="text-gray-300">"{debugData.referenceText}"</span>
                      <span className="text-gray-500">Recognized:</span>
                      <span className="text-gray-300">"{debugData.recognizedText}"</span>
                    </div>
                  </section>

                  {/* ── Azure Scores ── */}
                  <section>
                      <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-wider text-[10px] border-b border-purple-500/20 pb-1">
                        Azure Score Breakdown
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {(
                          [
                            ['Accuracy', debugData.scores.accuracy, 'text-sky-400'],
                            ['Fluency', debugData.scores.fluency, 'text-emerald-400'],
                            ['Completeness', debugData.scores.completeness, 'text-amber-400'],
                            ['Prosody', debugData.scores.prosody, 'text-pink-400'],
                            ['OVERALL', debugData.scores.overall, 'text-white font-bold'],
                          ] as [string, number, string][]
                        ).map(([label, score, cls]) => (
                          <div key={label} className="bg-[#0f0f1a] rounded-lg p-2 text-center border border-purple-500/10">
                            <div className="text-[9px] text-gray-500 uppercase">{label}</div>
                            <div className={`text-sm ${cls}`}>{score}</div>
                          </div>
                        ))}
                      </div>
                    </section>

                  {/* ── Threshold Mapping ── */}
                  <section>
                    <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-wider text-[10px] border-b border-purple-500/20 pb-1">
                      Threshold Mapping (Entry #{currentEntry?.id})
                    </h3>
                    {(() => {
                      const t = currentEntry?.speechaceIntegration?.thresholdProfile;
                      if (!t) return <p className="text-gray-500 italic">No threshold profile</p>;
                      const score = debugData.scores.overall || 0;
                      const tiers = [
                        { label: 'Strong Pass', min: t.strongPass, color: 'text-green-400' },
                        { label: 'Overall Pass', min: t.overallPass, color: 'text-blue-400' },
                        { label: 'Word Watch', min: t.wordWatch, color: 'text-yellow-400' },
                        { label: 'Retry Below', min: t.retryBelow, color: 'text-orange-400' },
                        { label: 'Teacher Review', min: t.teacherReviewBelow, color: 'text-red-400' },
                      ] as const;
                      const highestPassedIndex = tiers.findIndex(({ min }, idx) => score >= min && (idx === 0 || score < tiers[idx - 1].min));
                      return (
                        <div className="space-y-1">
                          {tiers.map(({ label, min, color }, idx) => {
                            const active = idx === highestPassedIndex;
                            return (
                              <div key={label} className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full shrink-0 ${active ? 'bg-green-500' : 'bg-gray-700'}`} />
                                <span className="text-gray-400 w-28">{label}:</span>
                                <span className={color}>≥ {min}</span>
                                <span className="text-gray-600 ml-auto">{active ? '✅' : ''}</span>
                              </div>
                            );
                          })}
                          <div className="mt-2 pt-1 border-t border-purple-500/10 text-gray-500">
                            Score <span className="text-white font-bold">{score}</span> → falls in{' '}
                            <span className="text-purple-300 font-bold">
                              {score >= t.strongPass ? 'STRONG PASS' :
                               score >= t.overallPass ? 'OVERALL PASS' :
                               score >= t.wordWatch ? 'WORD WATCH (targeted retry)' :
                               score >= t.retryBelow ? 'RETRY' : 'TEACHER REVIEW'}
                            </span>
                          </div>
                        </div>
                      );
                    })()}
                  </section>

                  {/* ── Word Detail ── */}
                  {debugData.words && debugData.words.length > 0 && (
                    <section>
                      <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-wider text-[10px] border-b border-purple-500/20 pb-1">
                        Word-Level Detail
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-[10px] border-collapse">
                          <thead>
                            <tr className="text-gray-500 border-b border-purple-500/20">
                              <th className="text-left py-1 pr-2">Word</th>
                              <th className="text-right py-1 px-2">Acc.</th>
                              <th className="text-center py-1 px-2">Error</th>
                              <th className="text-left py-1 pl-2">Phonemes (score)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {debugData.words.map((w, i) => (
                              <tr key={i} className="border-b border-purple-500/5 hover:bg-purple-500/5">
                                <td className="py-1 pr-2 text-gray-200 font-bold">{w.word}</td>
                                <td className={`py-1 px-2 text-right font-mono ${w.accuracy >= 80 ? 'text-green-400' : w.accuracy >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                                  {w.accuracy}
                                </td>
                                <td className="py-1 px-2 text-center">
                                  <span className={`${w.errorType === 'None' ? 'text-green-500' : 'text-red-400'} text-[9px]`}>
                                    {w.errorType}
                                  </span>
                                </td>
                                <td className="py-1 pl-2 text-gray-400 text-[9px]">
                                  {w.phonemes?.map((p, j) => (
                                    <span key={j} className={`inline-block mr-1.5 ${p.accuracy >= 80 ? 'text-green-400' : p.accuracy >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                                      {p.phoneme}({p.accuracy})
                                    </span>
                                  ))}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  )}

                  {/* ── Raw Azure JSON ── */}
                  {debugData.rawAzure && (
                    <section>
                      <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-wider text-[10px] border-b border-purple-500/20 pb-1">
                        Raw Azure Response JSON
                      </h3>
                      <pre className="bg-[#0f0f1a] p-3 rounded-lg text-[10px] text-gray-300 overflow-x-auto leading-relaxed border border-purple-500/10 max-h-[300px] overflow-y-auto">
                        {JSON.stringify(debugData.rawAzure, null, 2)}
                      </pre>
                    </section>
                  )}

                  {/* ── Entry Config ── */}
                  <section>
                    <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-wider text-[10px] border-b border-purple-500/20 pb-1">
                      Entry Configuration (speechaceIntegration)
                    </h3>
                    <pre className="bg-[#0f0f1a] p-3 rounded-lg text-[10px] text-gray-300 overflow-x-auto leading-relaxed border border-purple-500/10">
                      {currentEntry?.speechaceIntegration
                        ? JSON.stringify(currentEntry.speechaceIntegration, null, 2)
                        : 'No speechaceIntegration config for this entry.'}
                    </pre>
                  </section>
                </>
              )}
            </div>
          )}
        </motion.div>
      )}

    </div>
  );
}
