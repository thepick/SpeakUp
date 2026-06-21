export interface DatasetEntry {
  id: number;
  displayName: string;
  sentence: string;
  audioPromptText: string;
  level: string;
  lessonOrder: number;
  module: string;
  practiceStage: 'word' | 'minimal_pair' | 'phrase' | 'sentence' | 'real_world' | 'challenge' | 'diagnostic' | 'teacher_modeling';
  skillType: string;
  difficultyScore: number;
  instruction: string;
  tags: string[];
  pairGroup?: string;
  targetSounds: string[];
  ipaTargets?: string[];
  targetFeatures?: string[];
  focusWords: string[];
  thaiErrorPattern?: string;
  successMessage?: string;
  teacherNotes?: string;
  studentVisible?: boolean;
  // Dataset classroom gating fields. Optional in the in-app starter pack but
  // ALWAYS populated when loading from the canonical dataset. Used by
  // isSafeForAutoPractice() to exclude teacher_review / teacher_only /
  // optional_challenge / grade5_with_teacher_support entries from automatic
  // student practice. See the dataset RELEASE_NOTES for the gating policy.
  classroomStatus?: 'grade5_ready' | 'grade5_with_teacher_support' | 'teacher_review' | 'teacher_only' | 'optional_challenge' | string;
  appUse?: 'default_lesson' | 'starter_or_remediation' | 'teacher_review_before_default' | string;
  defaultAutoPath?: boolean;
  remediationLinks?: number[];
  contrastWith?: number[];
  relatedPractice?: number[];
  // Optional entry-level scoring detail used by the Teacher Panel.
  scoringTargets?: Array<{
    type: 'phoneme' | 'word' | 'sentence' | 'prosody_or_word' | 'word_or_sentence' | 'teacher_or_prosody' | string;
    target: string;
    words?: string[];
    threshold?: number;
    trigger?: {
      phonemeScoreBelow?: number;
      wordScoreBelow?: number;
      sentenceScoreBelow?: number;
      syllableScoreBelow?: number;
    };
    feedback?: string;
    action?: string;
  }>;
  // Free-form minimal pair identifier (e.g. "back_bag_pair", or empty string).
  minimalPairSet?: string;
  // Optional free-text remediation strategy shown to teachers.
  remediationStrategy?: string;
  // Optional per-entry error rules with phoneme/word-level triggers and feedback.
  errorRules?: Array<{
    ruleId: string;
    scope: 'phoneme' | 'word' | 'sentence' | string;
    targets?: Array<string | number>;
    trigger?: {
      phonemeScoreBelow?: number;
      wordScoreBelow?: number;
      sentenceScoreBelow?: number;
      syllableScoreBelow?: number;
    };
    feedback?: string;
    action?: string;
  }>;
  // Optional reference to old-format pair entries (pre-v0.4 dataset).
  legacyPairWith?: number[];
  // Dataset metadata fields (v1.0+).
  accentModel?: string;
  ageSuitability?: string;
  datasetVersion?: string;
  sourceVersion?: string;
  developerHandoffReady?: boolean;
  releaseCandidate?: boolean;
  releaseStatus?: string;
  reviewNotes?: string;
  reviewStatus?: string;
  reviewStatusFinal?: 'grade5_ready' | 'grade5_with_teacher_support' | 'teacher_review' | 'teacher_only' | 'optional_challenge' | string;
  reviewStatusV0_7?: string;
  teacherAssignable?: boolean;
  templateRole?: string;
  templateVariableNotes?: string;
  speechaceIntegration: {
    activityType: string;
    expectedText: string;
    scoringModes: string[];
    thresholdProfile: {
      overallPass: number;
      strongPass: number;
      wordWatch: number;
      phonemeWatch: number;
      retryBelow: number;
      teacherReviewBelow: number;
    };
    feedbackProfiles: string[];
    // Optional retry policy — present in all 175 canonical dataset entries.
    // Captures maxAttemptsPerSession and post-pass/fail behaviour.
    retryPolicy?: {
      maxAttemptsPerSession: number;
      afterFail: string;
      afterPass: string;
    };
    // Optional backend-audio flags used by teacher review tooling.
    sendAudioToBackendOnly?: boolean;
    storeAudioByDefault?: boolean;
    // Whether the entry needs custom (non-Azure) pronunciation scoring logic.
    customPronunciationNeeded?: boolean;
    // Fallback instructions shown when phoneme or prosody data is unavailable.
    fallbackIfPhonemeMissing?: string;
    fallbackIfProsodyMissing?: string;
  };
}

export type ScoreStatus = 'strong' | 'pass' | 'targeted_retry' | 'retry' | 'teacher_review';

export interface ScoreResponse {
  attemptId: string;
  entryId: number;
  status: ScoreStatus;
  overallScore: number;
  scoreBand: 'green' | 'blue' | 'yellow' | 'orange' | 'red';
  mainFeedback: string;
  nextAction: string;
  recommendedEntryIds: number[];
}

export interface StudentProgress {
  studentName: string;
  completedEntries: number[];
  scores: Record<number, number>; // entryId -> best score
  attemptsCount: Record<number, number>; // entryId -> attempt count
  currentUnitIndex: number;
}

// =========================================================================
// Google Drive sync envelope
// =========================================================================

/**
 * Shape stored as `speakup_progress.json` in Drive's hidden appDataFolder.
 * Versioned so future schema migrations can detect old data. The shape
 * intentionally embeds the full StudentProgress under `.progress` so the
 * cloud file is self-contained — no extra reads required to recover state.
 */
export interface DriveData {
  schemaVersion: 1;
  lastModified: number;
  deviceId: string;
  googleUserId: string;
  studentName: string;
  progress: StudentProgress;
  totalSessions: number;
  lastSessionDate: string;
}

/**
 * Build a fresh DriveData for a freshly-signed-in student who has no
 * cloud progress yet.
 */
export function createBlankDriveData(params: {
  googleUserId: string;
  studentName: string;
  deviceId: string;
}): DriveData {
  return {
    schemaVersion: 1,
    lastModified: Date.now(),
    deviceId: params.deviceId,
    googleUserId: params.googleUserId,
    studentName: params.studentName,
    progress: {
      studentName: params.studentName,
      completedEntries: [],
      scores: {},
      attemptsCount: {},
      currentUnitIndex: 0,
    },
    totalSessions: 0,
    lastSessionDate: '',
  };
}

/**
 * Pull the StudentProgress portion out of an envelope (or coerce raw shapes
 * from older schema versions into the current one).
 */
export function driveDataToProgress(data: DriveData | null | undefined): StudentProgress {
  if (!data) {
    return {
      studentName: '',
      completedEntries: [],
      scores: {},
      attemptsCount: {},
      currentUnitIndex: 0,
    };
  }
  // v1 — direct envelope. Future versions can branch here.
  const p = data.progress;
  return {
    studentName: p?.studentName ?? data.studentName ?? '',
    completedEntries: Array.isArray(p?.completedEntries) ? p!.completedEntries : [],
    scores: p?.scores ?? {},
    attemptsCount: p?.attemptsCount ?? {},
    currentUnitIndex: p?.currentUnitIndex ?? 0,
  };
}

// =========================================================================
// Azure Speech Pronunciation Assessment types
// =========================================================================

export interface AzurePhoneme {
  phoneme: string;
  accuracy: number;
  offset100ns: number;
  duration100ns: number;
}

export interface AzureSyllable {
  syllable: string;
  accuracy: number;
  offset100ns: number;
  duration100ns: number;
  phonemes: AzurePhoneme[];
}

export interface AzureWord {
  word: string;
  accuracy: number;
  errorType: string;
  offset100ns: number;
  duration100ns: number;
  syllables: AzureSyllable[];
  phonemes: AzurePhoneme[];
}

export interface AzureScores {
  accuracy: number;
  fluency: number;
  completeness: number;
  prosody: number;
  overall: number;
}

export interface AzureAssessResponse {
  success: boolean;
  locale: string;
  referenceText: string;
  recognizedText: string;
  processingMode: 'single' | 'continuous';
  scores: AzureScores;
  words: AzureWord[];
  rawAzure?: Record<string, unknown>;
  error?: string;
}