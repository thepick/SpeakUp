import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Mic, Square, CheckCircle, RefreshCw, ChevronRight, HelpCircle, AlertCircle } from 'lucide-react';
import { DatasetEntry, ScoreResponse } from '../types';
import { scorePronunciation } from '../utils/scorePronunciation';

interface StudentPracticeProps {
  entries: DatasetEntry[];
  studentName: string;
  onFinish: (history: Array<{ entry: DatasetEntry; score: number; status: string; mainFeedback: string }>) => void;
}

export default function StudentPractice({ entries, studentName, onFinish }: StudentPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [scoreResult, setScoreResult] = useState<ScoreResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [practiceHistory, setPracticeHistory] = useState<Array<{ entry: DatasetEntry; score: number; status: string; mainFeedback: string }>>([]);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const promptAudioRef = useRef<HTMLAudioElement | null>(null);

  const currentEntry = entries[currentIndex];

  // Auto-play the audio prompt when the entry changes using SpeechSynthesis
  useEffect(() => {
    if (currentEntry) {
      handlePlayPrompt();
      // Clear previous scoring result and recording
      setScoreResult(null);
      setAudioUrl(null);
      setAudioChunks([]);
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
    // Play pre-recorded voice audio
    const audioPath = `/audio/${currentEntry.id}.mp3`;
    const audio = new Audio(audioPath);
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

  const startRecording = async () => {
    try {
      setScoreResult(null);
      setAudioUrl(null);
      setAudioChunks([]);

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
      // Simulate short analysis delay for immersion
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Client-side mock scoring (was previously a server API call)
      const resData = scorePronunciation(currentEntry.id);
      setScoreResult(resData);

      // Save key statistics to our history
      setPracticeHistory(prev => [
        ...prev,
        {
          entry: currentEntry,
          score: resData.overallScore,
          status: resData.status,
          mainFeedback: resData.mainFeedback
        }
      ]);

    } catch (err) {
      console.error(err);
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
              <button
                onClick={startRecording}
                disabled={loading}
                className="w-20 h-20 rounded-full bg-[#FFF5F5] hover:bg-[#FFEAEB] text-[#F56565] border-4 border-[#FED7D7] disabled:bg-slate-100 disabled:border-slate-250 flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer"
                id="record-mic-btn"
                title="Start recording"
              >
                <div className="relative">
                  <Mic className="w-8 h-8" />
                </div>
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="w-20 h-20 rounded-full bg-[#FFF5F5] text-[#F56565] border-4 border-[#FED7D7] flex items-center justify-center shadow-lg active:scale-95 animate-pulse transition-all cursor-pointer"
                id="stop-mic-btn"
                title="Stop recording"
              >
                <Square className="w-7 h-7 text-[#F56565] fill-[#F56565]" />
              </button>
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
                  }}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#718096] text-xs font-semibold font-display rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Try Again
                </button>
              )}

              <button
                onClick={handleNext}
                className="px-6 py-3 bg-[#48BB78] hover:bg-[#38A169] text-white text-xs font-semibold font-display rounded-xl flex items-center gap-1.5 shadow-[0_4px_14px_rgba(72,187,120,0.3)] transition-all cursor-pointer"
                id="next-action-btn"
              >
                {currentIndex < entries.length - 1 ? (
                  <>
                    Next Word
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
    </div>
  );
}
