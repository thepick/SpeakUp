export interface DatasetEntry {
  id: number;
  displayName: string;
  sentence: string;
  audioPromptText: string;
  level: string;
  lessonOrder: number;
  module: string;
  practiceStage: 'word' | 'minimal_pair' | 'phrase' | 'sentence' | 'real_world';
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
