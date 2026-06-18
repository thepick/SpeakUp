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
  // student practice. See prototype_runtime_config_v1_0_rc1.json + the
  // dataset RELEASE_NOTES for the gating policy.
  classroomStatus?: 'grade5_ready' | 'grade5_with_teacher_support' | 'teacher_review' | 'teacher_only' | 'optional_challenge' | string;
  appUse?: 'default_lesson' | 'starter_or_remediation' | 'teacher_review_before_default' | string;
  defaultAutoPath?: boolean;
  remediationLinks?: number[];
  contrastWith?: number[];
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
