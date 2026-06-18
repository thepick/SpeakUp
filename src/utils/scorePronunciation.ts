import { STARTER_PACK_ENTRIES } from '../data/starterPack';
import { ScoreResponse, ScoreStatus } from '../types';

// Feedback profiles — kid-friendly tips for Grade 5.
// Each tip is ONE short sentence to comply with studentFeedbackStyle:
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

function getEntryById(id: number) {
  return STARTER_PACK_ENTRIES.find((e) => e.id === id) || null;
}

export function scorePronunciation(entryId: number, _audioBase64?: string): ScoreResponse {
  const entry = getEntryById(entryId);
  if (!entry) {
    throw new Error(`Entry ${entryId} not found.`);
  }

  const speechaceMetadata = entry.speechaceIntegration || {
    thresholdProfile: {
      strongPass: 85,
      overallPass: 75,
      wordWatch: 74,
      phonemeWatch: 70,
      retryBelow: 70,
      teacherReviewBelow: 65
    },
    feedbackProfiles: ["general_pronunciation"]
  };

  const feedbackProfileName = speechaceMetadata.feedbackProfiles[0] || "general_pronunciation";
  const kidFriendlyTip = feedbackProfilesMap[feedbackProfileName] || feedbackProfilesMap["general_pronunciation"];

  // Mock scoring — rotates through bands for realistic retry/remediation testing
  const outcomes: ScoreStatus[] = ["strong", "pass", "targeted_retry", "retry"];
  const randomIndex = Math.floor(Math.random() * outcomes.length);
  const status = outcomes[randomIndex];

  let overallScore = 72;
  let scoreBand: "green" | "blue" | "orange" | "red" = "orange";
  let mainFeedback = "";
  let nextAction = "retry";

  if (status === "strong") {
    overallScore = Math.floor(Math.random() * 15) + 85;
    scoreBand = "green";
    mainFeedback = entry.successMessage || "Great job! That sounded clear and natural.";
    nextAction = "advance";
  } else if (status === "pass") {
    overallScore = Math.floor(Math.random() * 9) + 75;
    scoreBand = "blue";
    mainFeedback = `Good work! ${kidFriendlyTip}`;
    nextAction = "advance";
  } else if (status === "targeted_retry") {
    overallScore = Math.floor(Math.random() * 4) + 71;
    scoreBand = "orange";
    mainFeedback = `Almost there! ${kidFriendlyTip}`;
    nextAction = "retry_focus_words";
  } else {
    overallScore = Math.floor(Math.random() * 10) + 55;
    scoreBand = "red";
    mainFeedback = `Keep practicing! ${kidFriendlyTip}`;
    nextAction = "retry";
  }

  const attemptId = `att-${Math.random().toString(36).substr(2, 9)}`;

  // Filter remediationLinks to safe-for-auto-practice entries only
  const safeRemediationIds = (entry.remediationLinks || []).filter(id => {
    const linked = getEntryById(id);
    if (!linked) return false;
    if (linked.studentVisible === false) return false;
    return linked.classroomStatus === undefined ||
           linked.classroomStatus === 'grade5_ready';
  });

  return {
    attemptId,
    entryId: entry.id,
    status,
    overallScore,
    scoreBand,
    mainFeedback,
    nextAction,
    recommendedEntryIds: safeRemediationIds
  };
}
