// AUTO-GENERATED from pronunciation_dataset_v1_0.json
// Do not edit by hand — re-run: npm run generate-dataset
// Source: C:/Users/Ajarn Michael/speakup-dataset/data/pronunciation_dataset_v1_0.json
// Generated: 2026-06-18T07:33:29.172580+00:00
// Entry count: 175

import { DatasetEntry } from '../types';

export const FULL_DATASET: DatasetEntry[] = [
  {
    "id": 1,
    "displayName": "Voiceless TH starter 1",
    "sentence": "Thank you for the thick thumb theory.",
    "audioPromptText": "Listen carefully, then repeat: Thank you for the thick thumb theory.",
    "level": "A2",
    "lessonOrder": 1,
    "module": "th_sounds",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Say the sentence slowly. Put the tip of your tongue lightly between your teeth for the TH sound in think.",
    "tags": [
      "th_voiceless",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "th_voiceless_drill",
    "targetSounds": [
      "th_voiceless"
    ],
    "ipaTargets": [
      "/theta/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "thank",
      "thick",
      "thumb",
      "theory"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "thank",
          "thick",
          "thumb",
          "theory"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If TH sounds like T or S, ask the learner to place the tongue slightly between the teeth and push air out gently without a hard stop.",
    "errorRules": [
      {
        "ruleId": "th_voiceless_low",
        "scope": "phoneme",
        "targets": [
          "/theta/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Your TH needs more airflow. Try placing your tongue lightly between your teeth.",
        "action": "retry_focus_words"
      },
      {
        "ruleId": "th_focus_words_low",
        "scope": "word",
        "targets": [
          "thick",
          "thumb"
        ],
        "trigger": {
          "wordScoreBelow": 75
        },
        "feedback": "Focus on thick and thumb. Start each word with a soft TH.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good job. Your TH sounds were clear and easy to understand.",
    "teacherNotes": "Thai learners often replace TH with T. Use mirror work and slow repetition before increasing speed.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      2
    ],
    "contrastWith": [],
    "relatedPractice": [
      2
    ],
    "remediationLinks": [
      103,
      105,
      109,
      110,
      104
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Audit: over-flagged as teacher_review; approved for Grade 5 default autopilot after review.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Thank you for the thick thumb theory.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 2,
    "displayName": "Voiceless TH challenge",
    "sentence": "Three thin thieves threw thirteen thick threads.",
    "audioPromptText": "Listen carefully, then repeat: Three thin thieves threw thirteen thick threads.",
    "level": "B1",
    "lessonOrder": 2,
    "module": "th_sounds",
    "practiceStage": "challenge",
    "skillType": "segmental",
    "difficultyScore": 5,
    "instruction": "This is a challenge sentence. Keep the TH soft and continuous, especially in three and threads.",
    "tags": [
      "th_voiceless",
      "clusters",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "th_voiceless_drill",
    "targetSounds": [
      "th_voiceless",
      "r"
    ],
    "ipaTargets": [
      "/theta/",
      "/r/"
    ],
    "targetFeatures": [
      "clusters",
      "initial_cluster_thr",
      "initial_clusters"
    ],
    "focusWords": [
      "three",
      "thin",
      "thieves",
      "thirteen",
      "thick",
      "threads",
      "threw"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "three",
          "thin",
          "thieves",
          "thirteen",
          "thick",
          "threads",
          "threw"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "r",
        "words": [
          "three",
          "threw",
          "threads"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "three",
          "threw",
          "threads"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_thr",
        "words": [
          "three",
          "threw",
          "threads"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "three",
          "threw",
          "threads"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the learner says T instead of TH, isolate three and thin first, then rebuild the full sentence with slower pacing.",
    "errorRules": [
      {
        "ruleId": "th_cluster_low",
        "scope": "word",
        "targets": [
          "three",
          "threads"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Keep the TH soft at the start of three and threads. Do not replace it with T.",
        "action": "practice_words_only"
      },
      {
        "ruleId": "th_phoneme_low",
        "scope": "phoneme",
        "targets": [
          "/theta/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Your TH needs more airflow. Let the air pass between your teeth and tongue.",
        "action": "retry_focus_words"
      }
    ],
    "successMessage": "Good work. Your TH words were more accurate and connected.",
    "teacherNotes": "Move this after easier TH word and phrase practice. It is too hard as a starter item.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      1
    ],
    "contrastWith": [],
    "relatedPractice": [
      1
    ],
    "remediationLinks": [
      101,
      81,
      85,
      34,
      49
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Three thin thieves threw thirteen thick threads.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "r_l_contrast",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 3,
    "displayName": "Mixed TH contrast 1",
    "sentence": "They think that this weather is better in the north.",
    "audioPromptText": "Listen carefully, then repeat: They think that this weather is better in the north.",
    "level": "A2",
    "lessonOrder": 3,
    "module": "th_sounds",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Use soft voiceless TH in think and north. Use buzzing voiced TH in they, that, this, and weather.",
    "tags": [
      "th_mixed",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "th_mixed_drill",
    "targetSounds": [
      "th_voiceless",
      "th_voiced"
    ],
    "ipaTargets": [
      "/theta/",
      "/eth/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "they",
      "think",
      "that",
      "this",
      "weather",
      "north"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "think",
          "north"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "they",
          "that",
          "this",
          "weather"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If voiced TH becomes D, have the learner touch the teeth lightly with the tongue and keep the throat vibrating.",
    "errorRules": [
      {
        "ruleId": "voiced_th_low",
        "scope": "phoneme",
        "targets": [
          "/eth/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Your voiced TH needs vibration. Try they and this with your throat buzzing.",
        "action": "show_articulation_tip"
      },
      {
        "ruleId": "voiceless_th_low",
        "scope": "phoneme",
        "targets": [
          "/theta/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Your voiceless TH needs more soft airflow. Try think and north again.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice contrast. You used both TH sounds more clearly.",
    "teacherNotes": "Useful for contrasting voiced and voiceless TH in one sentence.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      4
    ],
    "contrastWith": [
      4
    ],
    "relatedPractice": [],
    "remediationLinks": [
      101,
      81,
      1,
      103,
      105
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "They think that this weather is better in the north.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 4,
    "displayName": "Mixed TH contrast 2",
    "sentence": "Those three athletes thought about their health.",
    "audioPromptText": "Listen carefully, then repeat: Those three athletes thought about their health.",
    "level": "B1",
    "lessonOrder": 4,
    "module": "th_sounds",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Use soft voiceless TH in three, thought, and health. Use buzzing voiced TH in those and their.",
    "tags": [
      "th_mixed",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "th_mixed_drill",
    "targetSounds": [
      "th_voiceless",
      "th_voiced"
    ],
    "ipaTargets": [
      "/theta/",
      "/eth/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "those",
      "three",
      "thought",
      "their",
      "health"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "three",
          "thought",
          "health"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "those",
          "their"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If TH collapses into T or D, practice each focus word individually before returning to the sentence.",
    "errorRules": [
      {
        "ruleId": "mixed_th_words_low",
        "scope": "word",
        "targets": [
          "three",
          "their",
          "health"
        ],
        "trigger": {
          "wordScoreBelow": 73
        },
        "feedback": "Focus on three, their, and health one by one before trying the full sentence again.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Well done. Your TH words were easier to distinguish.",
    "teacherNotes": "Use this after learners are familiar with both TH categories.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      3
    ],
    "contrastWith": [
      3
    ],
    "relatedPractice": [],
    "remediationLinks": [
      102,
      83,
      101,
      103,
      105
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Those three athletes thought about their health.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 5,
    "displayName": "V sound drill 1",
    "sentence": "Very few visitors voted for the village festival.",
    "audioPromptText": "Listen carefully, then repeat: Very few visitors voted for the village festival.",
    "level": "A2",
    "lessonOrder": 5,
    "module": "v_w_f",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Touch your top teeth to your bottom lip for V. Do not use a W shape with the lips.",
    "tags": [
      "v_vs_f",
      "v_vs_w",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "v_sound_drill",
    "targetSounds": [
      "v",
      "f"
    ],
    "ipaTargets": [
      "/v/",
      "/f/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "very",
      "visitors",
      "voted",
      "village",
      "festival"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "very",
          "visitors",
          "voted",
          "village",
          "festival"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "f",
        "words": [
          "very",
          "visitors",
          "voted",
          "village",
          "festival"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If V sounds like W or F, cue top teeth on bottom lip and ask for a voiced buzzing sound.",
    "errorRules": [
      {
        "ruleId": "v_low",
        "scope": "phoneme",
        "targets": [
          "/v/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "For V, touch your top teeth to your bottom lip and use your voice.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good job. Your V sound was stronger and more consistent.",
    "teacherNotes": "Thai learners may replace V with W or F. Mouth-shape cues are effective.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      6,
      7,
      8
    ],
    "contrastWith": [],
    "relatedPractice": [
      6,
      7,
      8
    ],
    "remediationLinks": [
      28,
      43,
      41,
      6,
      8
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Audit: over-flagged as teacher_review; approved for Grade 5 default autopilot after review.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Very few visitors voted for the village festival.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 6,
    "displayName": "V sound drill 2",
    "sentence": "My favorite movie is a very viral video.",
    "audioPromptText": "Listen carefully, then repeat: My favorite movie is a very viral video.",
    "level": "A2",
    "lessonOrder": 6,
    "module": "v_w_f",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Keep every V sound voiced. Feel vibration in favorite, very, viral, and video.",
    "tags": [
      "v_initial",
      "v_medial",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "v_sound_drill",
    "targetSounds": [
      "v"
    ],
    "ipaTargets": [
      "/v/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "favorite",
      "very",
      "viral",
      "video",
      "movie"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "favorite",
          "very",
          "viral",
          "video",
          "movie"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the learner weakens V, switch to a single-word drill with video and very, then return to the sentence.",
    "errorRules": [
      {
        "ruleId": "v_words_low",
        "scope": "word",
        "targets": [
          "very",
          "viral",
          "video"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Focus on very, viral, and video. Keep the V voiced in each word.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Nice work. Your V words sounded clearer.",
    "teacherNotes": "This sentence is useful for repeated V reinforcement without too much complexity.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      5,
      7,
      8
    ],
    "contrastWith": [],
    "relatedPractice": [
      5,
      7,
      8
    ],
    "remediationLinks": [
      43,
      41,
      28,
      5,
      8
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Audit: over-flagged as teacher_review; approved for Grade 5 default autopilot after review.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "My favorite movie is a very viral video.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 7,
    "displayName": "V and final voicing drill",
    "sentence": "Five brave drivers saved seven lives.",
    "audioPromptText": "Listen carefully, then repeat: Five brave drivers saved seven lives.",
    "level": "A2",
    "lessonOrder": 7,
    "module": "v_w_f",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Say the final sounds clearly in saved and lives. Keep V voiced in five and brave.",
    "tags": [
      "v_final",
      "v_medial",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "v_sound_drill",
    "targetSounds": [
      "v",
      "z"
    ],
    "ipaTargets": [
      "/v/",
      "/z/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "five",
      "brave",
      "drivers",
      "saved",
      "seven",
      "lives"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "five",
          "brave",
          "drivers",
          "saved",
          "seven",
          "lives"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "z",
        "words": [
          "five",
          "brave",
          "drivers",
          "saved",
          "seven",
          "lives"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If final voiced consonants disappear, train the word in parts, for example save then saved, live then lives.",
    "errorRules": [
      {
        "ruleId": "final_voicing_low",
        "scope": "word",
        "targets": [
          "saved",
          "lives"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Keep the final voiced sound in saved and lives. Do not cut the word off early.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. Your final voiced endings were more audible.",
    "teacherNotes": "Useful for combining V practice with final voiced consonant control.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      5,
      6,
      8
    ],
    "contrastWith": [],
    "relatedPractice": [
      5,
      6,
      8
    ],
    "remediationLinks": [
      91,
      43,
      41,
      28,
      114
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Five brave drivers saved seven lives.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f",
        "z_voicing"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 8,
    "displayName": "V and W contrast drill",
    "sentence": "We went to view the volcano from a safe village.",
    "audioPromptText": "Listen carefully, then repeat: We went to view the volcano from a safe village.",
    "level": "A2",
    "lessonOrder": 8,
    "module": "v_w_f",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Round the lips for W in we. Use teeth and lip contact for V in view, volcano, and village.",
    "tags": [
      "v_vs_w",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "v_sound_drill",
    "targetSounds": [
      "v",
      "w"
    ],
    "ipaTargets": [
      "/v/",
      "/w/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "we",
      "view",
      "volcano",
      "village"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "we",
          "view",
          "volcano",
          "village"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "w",
        "words": [
          "we",
          "view",
          "volcano",
          "village"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Alternate the words we and view to make the lip shape contrast obvious before retrying the sentence.",
    "errorRules": [
      {
        "ruleId": "v_sound_low",
        "scope": "phoneme",
        "targets": [
          "/v/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "For V, touch your top teeth to your bottom lip and use your voice.",
        "action": "show_articulation_tip"
      },
      {
        "ruleId": "w_sound_low",
        "scope": "phoneme",
        "targets": [
          "/w/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "For W, round your lips. Do not bite your lower lip.",
        "action": "show_articulation_tip"
      },
      {
        "ruleId": "vw_focus_words_low",
        "scope": "word",
        "targets": [
          "we",
          "view"
        ],
        "trigger": {
          "wordScoreBelow": 75
        },
        "feedback": "Practice we and view as a contrast pair before saying the full sentence again.",
        "action": "launch_minimal_pair"
      }
    ],
    "successMessage": "Nice work. Your V and W contrast was clear.",
    "teacherNotes": "Thai learners may merge V, W, and sometimes F. Teach the mouth shape contrast explicitly.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      5,
      6,
      7
    ],
    "contrastWith": [],
    "relatedPractice": [
      5,
      6,
      7
    ],
    "remediationLinks": [
      43,
      42,
      41,
      40,
      84
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "We went to view the volcano from a safe village.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 9,
    "displayName": "S clarity drill",
    "sentence": "Sue sells six salty sausages on Sunday.",
    "audioPromptText": "Listen carefully, then repeat: Sue sells six salty sausages on Sunday.",
    "level": "A2",
    "lessonOrder": 9,
    "module": "s_z_sh_ch_j",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Keep the airflow steady for S. Smile slightly and let the air pass between the tongue and teeth.",
    "tags": [
      "s_initial",
      "s_repetition",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "s_vs_z_drill",
    "targetSounds": [
      "s"
    ],
    "ipaTargets": [
      "/s/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "Sue",
      "sells",
      "six",
      "salty",
      "sausages",
      "Sunday"
    ],
    "thaiErrorPattern": "Thai learners may need focused modeling and repetition for this English pronunciation pattern.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "Sue",
          "sells",
          "six",
          "salty",
          "sausages",
          "Sunday"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If S becomes too weak or too stop-like, stretch the sound in isolation first, then shorten it in connected speech.",
    "errorRules": [
      {
        "ruleId": "s_low",
        "scope": "phoneme",
        "targets": [
          "/s/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Keep the S sound smooth and continuous. Let the air flow out gently.",
        "action": "retry_focus_words"
      }
    ],
    "successMessage": "Good. Your S sound was clear and steady.",
    "teacherNotes": "A simple S repetition sentence. Good warm-up before Z contrast work.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      10,
      12
    ],
    "contrastWith": [
      10,
      12
    ],
    "relatedPractice": [],
    "remediationLinks": [
      90,
      46,
      106,
      113,
      119
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Audit: tongue-twister style S drill should not be in the default autopilot path.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Sue sells six salty sausages on Sunday.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 10,
    "displayName": "Z voicing drill",
    "sentence": "Zoe buys zero noisy zebras at the zoo.",
    "audioPromptText": "Listen carefully, then repeat: Zoe buys zero noisy zebras at the zoo.",
    "level": "A2",
    "lessonOrder": 10,
    "module": "s_z_sh_ch_j",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Make Z buzz. Put your fingers on your throat and feel vibration.",
    "tags": [
      "z_voiced",
      "s_vs_z",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "s_vs_z_drill",
    "targetSounds": [
      "z"
    ],
    "ipaTargets": [
      "/z/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "Zoe",
      "zero",
      "zebras",
      "zoo"
    ],
    "thaiErrorPattern": "Thai learners may devoice Z to S, especially in final position.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "z",
        "words": [
          "Zoe",
          "zero",
          "zebras",
          "zoo"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If Z sounds like S, practice buzzing on zzz first, then say zero and zoo with throat vibration.",
    "errorRules": [
      {
        "ruleId": "z_low",
        "scope": "phoneme",
        "targets": [
          "/z/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Your Z needs voicing. Try a buzzing zzz sound first, then say the word again.",
        "action": "retry_focus_words"
      }
    ],
    "successMessage": "Well done. Your Z sound had stronger voicing.",
    "teacherNotes": "Thai learners often devoice Z to S. Throat vibration is a useful cue.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      9,
      12
    ],
    "contrastWith": [
      9,
      12
    ],
    "relatedPractice": [],
    "remediationLinks": [
      91,
      114,
      120,
      92,
      93
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Audit: over-flagged as teacher_review; approved for Grade 5 default autopilot after review.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Zoe buys zero noisy zebras at the zoo.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "z_voicing"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 11,
    "displayName": "SH drill",
    "sentence": "She should wash the short white shirt.",
    "audioPromptText": "Listen carefully, then repeat: She should wash the short white shirt.",
    "level": "A2",
    "lessonOrder": 11,
    "module": "s_z_sh_ch_j",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Push the tongue slightly back for SH. Make the sound soft, not sharp like CH.",
    "tags": [
      "sh_sound",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "sh_vs_ch_drill",
    "targetSounds": [
      "sh"
    ],
    "ipaTargets": [
      "/sh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "she",
      "should",
      "wash",
      "short",
      "shirt"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "sh",
        "words": [
          "she",
          "should",
          "wash",
          "short",
          "shirt"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If SH sounds like S or CH, contrast she with see and cheap with sheep before returning to the sentence.",
    "errorRules": [
      {
        "ruleId": "sh_low",
        "scope": "phoneme",
        "targets": [
          "/sh/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Move the tongue slightly back and soften the air for SH.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice work. Your SH sound was softer and clearer.",
    "teacherNotes": "Good for separating SH from S and CH.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      13,
      15
    ],
    "contrastWith": [
      13,
      15
    ],
    "relatedPractice": [],
    "remediationLinks": [
      93,
      39,
      92,
      25,
      48
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "She should wash the short white shirt.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 12,
    "displayName": "Z in connected speech",
    "sentence": "The busy bees buzz in the business zone.",
    "audioPromptText": "Listen carefully, then repeat: The busy bees buzz in the business zone.",
    "level": "B1",
    "lessonOrder": 12,
    "module": "s_z_sh_ch_j",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep the Z voiced in busy, bees, buzz, business, and zone.",
    "tags": [
      "z_voiced",
      "s_vs_z",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "s_vs_z_drill",
    "targetSounds": [
      "z"
    ],
    "ipaTargets": [
      "/z/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "busy",
      "bees",
      "buzz",
      "business",
      "zone"
    ],
    "thaiErrorPattern": "Thai learners may devoice Z to S, especially in final position.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "z",
        "words": [
          "busy",
          "bees",
          "buzz",
          "business",
          "zone"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If voiced sounds devoice at the end or middle of words, slow the sentence and lengthen each Z slightly.",
    "errorRules": [
      {
        "ruleId": "z_voicing_low",
        "scope": "phoneme",
        "targets": [
          "/z/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Your Z needs voicing. Try a buzzing zzz sound first, then say the word again.",
        "action": "retry_focus_words"
      },
      {
        "ruleId": "z_word_low",
        "scope": "word",
        "targets": [
          "buzz",
          "zone"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Focus on buzz and zone. Keep your throat vibrating through the Z sound.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Well done. Your Z sounds were strong and voiced.",
    "teacherNotes": "Useful for repeated voiced fricative practice in connected speech.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      9,
      10
    ],
    "contrastWith": [
      9,
      10
    ],
    "relatedPractice": [],
    "remediationLinks": [
      91,
      114,
      120,
      7,
      92
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The busy bees buzz in the business zone.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "z_voicing"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 13,
    "displayName": "CH drill 1",
    "sentence": "Jenny and Jack choose cheap cheese and chicken.",
    "audioPromptText": "Listen carefully, then repeat: Jenny and Jack choose cheap cheese and chicken.",
    "level": "A2",
    "lessonOrder": 13,
    "module": "s_z_sh_ch_j",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Start CH with a quick stop and release. It is sharper than SH.",
    "tags": [
      "ch_affricate",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "sh_vs_ch_drill",
    "targetSounds": [
      "ch_affricate",
      "j_affricate"
    ],
    "ipaTargets": [
      "/ch/",
      "/dzh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "Jenny",
      "Jack",
      "choose",
      "cheap",
      "cheese",
      "chicken"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "ch_affricate",
        "words": [
          "Jenny",
          "Jack",
          "choose",
          "cheap",
          "cheese",
          "chicken"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "j_affricate",
        "words": [
          "Jenny",
          "Jack",
          "choose",
          "cheap",
          "cheese",
          "chicken"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If CH becomes SH, teach it as T plus SH and exaggerate the quick release.",
    "errorRules": [
      {
        "ruleId": "ch_low",
        "scope": "phoneme",
        "targets": [
          "/ch/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Make CH sharper with a quick stop and release, not a long SH.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your CH sound was more crisp and distinct.",
    "teacherNotes": "Helpful for separating CH from SH.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      11,
      15
    ],
    "contrastWith": [
      11,
      15
    ],
    "relatedPractice": [],
    "remediationLinks": [
      92,
      16,
      93,
      14,
      25
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Jenny and Jack choose cheap cheese and chicken.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 14,
    "displayName": "J drill",
    "sentence": "The judge joined a charity journey in June.",
    "audioPromptText": "Listen carefully, then repeat: The judge joined a charity journey in June.",
    "level": "B1",
    "lessonOrder": 14,
    "module": "s_z_sh_ch_j",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep J voiced in judge, joined, journey, and June.",
    "tags": [
      "j_affricate",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "j_sound_drill",
    "targetSounds": [
      "j_affricate"
    ],
    "ipaTargets": [
      "/dzh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "judge",
      "joined",
      "journey",
      "June"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "j_affricate",
        "words": [
          "judge",
          "joined",
          "journey",
          "June"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If J becomes CH, begin with a long voiced buzzing sound before the release, then shorten it naturally.",
    "errorRules": [
      {
        "ruleId": "j_low",
        "scope": "phoneme",
        "targets": [
          "/j/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Keep J voiced. Start with vibration before the release.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice work. Your J sound stayed voiced and clear.",
    "teacherNotes": "Useful for J voicing and repeated practice across several words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      16
    ],
    "contrastWith": [],
    "relatedPractice": [
      16
    ],
    "remediationLinks": [
      16,
      13,
      92,
      93,
      99
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "teacher_review",
    "appUse": "teacher_review_before_default",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Usable item, but flagged for teacher review of naturalness, audience fit, or difficulty.",
    "reviewStatusV0_7": "teacher_review",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The judge joined a charity journey in June.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "teacher_review"
  },
  {
    "id": 15,
    "displayName": "CH drill 2",
    "sentence": "Children cheer when the chocolate chips arrive.",
    "audioPromptText": "Listen carefully, then repeat: Children cheer when the chocolate chips arrive.",
    "level": "A2",
    "lessonOrder": 15,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Make every CH crisp and short. Do not let it become SH.",
    "tags": [
      "ch_affricate",
      "clusters",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "sh_vs_ch_drill",
    "targetSounds": [
      "ch_affricate"
    ],
    "ipaTargets": [
      "/ch/"
    ],
    "targetFeatures": [
      "affricates"
    ],
    "focusWords": [
      "children",
      "cheer",
      "chocolate",
      "chips"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "ch_affricate",
        "words": [
          "children",
          "cheer",
          "chocolate",
          "chips"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "affricates",
        "words": [
          "children",
          "cheer",
          "chocolate",
          "chips"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the learner loses the CH release, practice children, cheer, and chips one by one.",
    "errorRules": [
      {
        "ruleId": "ch_words_low",
        "scope": "word",
        "targets": [
          "children",
          "cheer",
          "chips"
        ],
        "trigger": {
          "wordScoreBelow": 73
        },
        "feedback": "Keep the CH sharp in children, cheer, and chips.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. Your CH words sounded cleaner and more distinct.",
    "teacherNotes": "A good follow-up after simpler CH practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      11,
      13
    ],
    "contrastWith": [
      11,
      13
    ],
    "relatedPractice": [],
    "remediationLinks": [
      92,
      101,
      81,
      124,
      126
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Children cheer when the chocolate chips arrive.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 16,
    "displayName": "J drill 2",
    "sentence": "James changed his job in January.",
    "audioPromptText": "Listen carefully, then repeat: James changed his job in January.",
    "level": "A2",
    "lessonOrder": 16,
    "module": "s_z_sh_ch_j",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Voice the J sound clearly in James, job, and January.",
    "tags": [
      "j_affricate",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "j_sound_drill",
    "targetSounds": [
      "j_affricate"
    ],
    "ipaTargets": [
      "/dzh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "James",
      "changed",
      "job",
      "January"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "j_affricate",
        "words": [
          "James",
          "changed",
          "job",
          "January"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If J sounds too soft or devoiced, rehearse job and January separately with strong voicing.",
    "errorRules": [
      {
        "ruleId": "j_words_low",
        "scope": "word",
        "targets": [
          "James",
          "job",
          "January"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Focus on James, job, and January. Keep the J voiced.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Well done. Your J words were more natural and voiced.",
    "teacherNotes": "Shorter and more accessible than the previous J drill.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      14
    ],
    "contrastWith": [],
    "relatedPractice": [
      14
    ],
    "remediationLinks": [
      13,
      92,
      93,
      14,
      99
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "James changed his job in January.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 17,
    "displayName": "S cluster drill 1",
    "sentence": "The students start school at six sharp.",
    "audioPromptText": "Listen carefully, then repeat: The students start school at six sharp.",
    "level": "A2",
    "lessonOrder": 17,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Do not add a vowel before start or school. Begin directly with the S cluster.",
    "tags": [
      "s_clusters",
      "st_cluster",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "s_cluster_drill",
    "targetSounds": [
      "s"
    ],
    "ipaTargets": [
      "/s/"
    ],
    "targetFeatures": [
      "initial_cluster_st",
      "initial_clusters",
      "clusters",
      "initial_cluster_sk"
    ],
    "focusWords": [
      "students",
      "start",
      "school",
      "six",
      "sharp"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "students",
          "start",
          "school",
          "six",
          "sharp"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "students",
          "start",
          "school",
          "six",
          "sharp"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "students",
          "start",
          "school",
          "six",
          "sharp"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "students",
          "start",
          "school",
          "six",
          "sharp"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_sk",
        "words": [
          "students",
          "start",
          "school",
          "six",
          "sharp"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the learner says sa-tart or sa-cool, drill start and school in slow motion without an extra vowel.",
    "errorRules": [
      {
        "ruleId": "cluster_words_low",
        "scope": "word",
        "targets": [
          "start",
          "school"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Do not add a vowel before start or school. Begin directly with the S cluster.",
        "action": "show_cluster_tip"
      }
    ],
    "successMessage": "Good job. Your S clusters stayed together more clearly.",
    "teacherNotes": "A good first cluster sentence for Thai learners.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      18,
      19,
      20
    ],
    "contrastWith": [],
    "relatedPractice": [
      18,
      19,
      20
    ],
    "remediationLinks": [
      101,
      81,
      90,
      46,
      126
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The students start school at six sharp.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 18,
    "displayName": "S cluster drill 2",
    "sentence": "Please stop speaking so fast in the street.",
    "audioPromptText": "Listen carefully, then repeat: Please stop speaking so fast in the street.",
    "level": "A2",
    "lessonOrder": 18,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 4,
    "instruction": "Keep stop, speaking, and street as tight clusters. Do not separate the consonants.",
    "tags": [
      "s_clusters",
      "sp_cluster",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "s_cluster_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_sp",
      "initial_clusters",
      "clusters",
      "initial_cluster_st",
      "initial_cluster_str",
      "triple_clusters",
      "initial_cluster_pl"
    ],
    "focusWords": [
      "please",
      "stop",
      "speaking",
      "street"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_pl",
        "words": [
          "please"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "stop"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_sp",
        "words": [
          "speaking"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_str",
        "words": [
          "street"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "street"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "please",
          "stop",
          "speaking",
          "street"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "please",
          "stop",
          "speaking",
          "street"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If an extra vowel appears, use beat practice: stop, stop, stop, then say the whole sentence.",
    "errorRules": [
      {
        "ruleId": "s_cluster_low",
        "scope": "word",
        "targets": [
          "stop",
          "street"
        ],
        "trigger": {
          "wordScoreBelow": 70
        },
        "feedback": "Try not to add a vowel before the S cluster. Say stop, not sa-top.",
        "action": "show_cluster_tip"
      },
      {
        "ruleId": "overall_cluster_attempt_low",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 72
        },
        "feedback": "Slow down and keep the first consonants together in stop, speaking, and street.",
        "action": "chunk_and_retry"
      }
    ],
    "successMessage": "Good. Your consonant clusters stayed together clearly.",
    "teacherNotes": "Thai learners often insert a schwa-like vowel before initial S clusters. Use rhythm drills.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      17,
      19,
      20
    ],
    "contrastWith": [],
    "relatedPractice": [
      17,
      19,
      20
    ],
    "remediationLinks": [
      84,
      17,
      101,
      81,
      19
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Please stop speaking so fast in the street.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 19,
    "displayName": "S cluster drill 3",
    "sentence": "The small spider spins a strong, sticky web.",
    "audioPromptText": "Listen carefully, then repeat: The small spider spins a strong, sticky web.",
    "level": "B1",
    "lessonOrder": 19,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 5,
    "instruction": "Keep small, spider, spins, strong, and sticky smooth and connected.",
    "tags": [
      "s_clusters",
      "sp_cluster",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "s_cluster_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_sm",
      "initial_clusters",
      "clusters",
      "initial_cluster_sp",
      "initial_cluster_st",
      "initial_cluster_str",
      "triple_clusters"
    ],
    "focusWords": [
      "small",
      "spider",
      "spins",
      "strong",
      "sticky"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_sm",
        "words": [
          "small",
          "spider",
          "spins",
          "strong",
          "sticky"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "small",
          "spider",
          "spins",
          "strong",
          "sticky"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "small",
          "spider",
          "spins",
          "strong",
          "sticky"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_sp",
        "words": [
          "small",
          "spider",
          "spins",
          "strong",
          "sticky"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "small",
          "spider",
          "spins",
          "strong",
          "sticky"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_str",
        "words": [
          "small",
          "spider",
          "spins",
          "strong",
          "sticky"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "small",
          "spider",
          "spins",
          "strong",
          "sticky"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If clusters break apart, reduce the sentence to strong and sticky first, then expand.",
    "errorRules": [
      {
        "ruleId": "complex_clusters_low",
        "scope": "word",
        "targets": [
          "spider",
          "strong",
          "sticky"
        ],
        "trigger": {
          "wordScoreBelow": 70
        },
        "feedback": "Keep the cluster together. Do not add an extra vowel before the word.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Nice work. Your more difficult S clusters were more accurate.",
    "teacherNotes": "This one is intentionally dense. Good for advanced cluster practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      17,
      18,
      20
    ],
    "contrastWith": [],
    "relatedPractice": [
      17,
      18,
      20
    ],
    "remediationLinks": [
      18,
      84,
      17,
      85,
      137
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The small spider spins a strong, sticky web.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 20,
    "displayName": "S cluster drill 4",
    "sentence": "Scott speaks Spanish and skateboards in the stadium.",
    "audioPromptText": "Listen carefully, then repeat: Scott speaks Spanish and skateboards in the stadium.",
    "level": "B1",
    "lessonOrder": 20,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 5,
    "instruction": "Start Scott, speaks, Spanish, skateboards, and stadium without adding a vowel.",
    "tags": [
      "s_clusters",
      "sk_cluster",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "s_cluster_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_sk",
      "initial_clusters",
      "clusters",
      "initial_cluster_sp",
      "initial_cluster_st"
    ],
    "focusWords": [
      "Scott",
      "speaks",
      "Spanish",
      "skateboards",
      "stadium"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_sk",
        "words": [
          "Scott",
          "speaks",
          "Spanish",
          "skateboards",
          "stadium"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "Scott",
          "speaks",
          "Spanish",
          "skateboards",
          "stadium"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "Scott",
          "speaks",
          "Spanish",
          "skateboards",
          "stadium"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_sp",
        "words": [
          "Scott",
          "speaks",
          "Spanish",
          "skateboards",
          "stadium"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "Scott",
          "speaks",
          "Spanish",
          "skateboards",
          "stadium"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the first consonant cluster is split, isolate skateboards and stadium and train a clean S start.",
    "errorRules": [
      {
        "ruleId": "sk_sp_st_low",
        "scope": "word",
        "targets": [
          "Scott",
          "speaks",
          "Spanish",
          "stadium"
        ],
        "trigger": {
          "wordScoreBelow": 70
        },
        "feedback": "Start the word directly with the cluster. Do not insert a vowel before it.",
        "action": "show_cluster_tip"
      }
    ],
    "successMessage": "Well done. Your cluster starts were tighter and clearer.",
    "teacherNotes": "Another strong diagnostic for initial cluster handling.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      17,
      18,
      19
    ],
    "contrastWith": [],
    "relatedPractice": [
      17,
      18,
      19
    ],
    "remediationLinks": [
      17,
      18,
      84,
      85,
      124
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Scott speaks Spanish and skateboards in the stadium.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 21,
    "displayName": "Final consonant drill 1",
    "sentence": "I sit and eat hot soup at night.",
    "audioPromptText": "Listen carefully, then repeat: I sit and eat hot soup at night.",
    "level": "A1",
    "lessonOrder": 21,
    "module": "stop_voicing",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Finish each word clearly. Do not drop the final T in sit, eat, hot, and night.",
    "tags": [
      "final_consonants",
      "short_vowels",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "final_consonant_drill",
    "targetSounds": [
      "t",
      "p"
    ],
    "ipaTargets": [
      "/t/",
      "/p/"
    ],
    "targetFeatures": [
      "final_consonants"
    ],
    "focusWords": [
      "sit",
      "eat",
      "hot",
      "soup",
      "night"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "t",
        "words": [
          "sit",
          "eat",
          "hot",
          "soup",
          "night"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "p",
        "words": [
          "sit",
          "eat",
          "hot",
          "soup",
          "night"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "sit",
          "eat",
          "hot",
          "soup",
          "night"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If final stops disappear, use one-word practice and ask the learner to close the word cleanly before moving on.",
    "errorRules": [
      {
        "ruleId": "final_t_low",
        "scope": "phoneme",
        "targets": [
          "/t/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Close the word clearly with T. Do not leave the ending open.",
        "action": "show_final_consonant_tip"
      }
    ],
    "successMessage": "Good. Your final consonants were easier to hear.",
    "teacherNotes": "A simple sentence for early final consonant work.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      22,
      23,
      24,
      43,
      44
    ],
    "contrastWith": [],
    "relatedPractice": [
      22,
      23,
      24,
      43,
      44
    ],
    "remediationLinks": [
      94,
      62,
      91,
      90,
      115
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I sit and eat hot soup at night.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 22,
    "displayName": "Final cluster drill 2",
    "sentence": "She needs to lift the last gift to the left.",
    "audioPromptText": "Listen carefully, then repeat: She needs to lift the last gift to the left.",
    "level": "B1",
    "lessonOrder": 22,
    "module": "stop_voicing",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 5,
    "instruction": "Keep the final clusters in lift, last, gift, and left. Do not remove the last sound.",
    "tags": [
      "final_consonant_clusters",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "final_consonant_drill",
    "targetSounds": [
      "t"
    ],
    "ipaTargets": [
      "/t/"
    ],
    "targetFeatures": [
      "final_cluster_ft",
      "final_cluster_st",
      "final_clusters",
      "clusters"
    ],
    "focusWords": [
      "lift",
      "last",
      "gift",
      "left"
    ],
    "thaiErrorPattern": "Thai learners may delete or weaken final English consonant clusters, especially endings like -ft and -st.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "t",
        "words": [
          "lift",
          "last",
          "gift",
          "left"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_cluster_ft",
        "words": [
          "lift",
          "gift",
          "left"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_cluster_st",
        "words": [
          "last"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_clusters",
        "words": [
          "lift",
          "last",
          "gift",
          "left"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "lift",
          "last",
          "gift",
          "left"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the cluster reduces, split the word into lift then add the final T release gently.",
    "errorRules": [
      {
        "ruleId": "final_cluster_low",
        "scope": "word",
        "targets": [
          "lift",
          "last",
          "gift",
          "left"
        ],
        "trigger": {
          "wordScoreBelow": 70
        },
        "feedback": "Do not drop the final consonant cluster. Try the ending slowly: -ft, -st, -ft.",
        "action": "practice_word_endings"
      },
      {
        "ruleId": "final_t_low",
        "scope": "phoneme",
        "targets": [
          "/t/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Close the word clearly with T. Do not leave the ending open.",
        "action": "show_final_consonant_tip"
      }
    ],
    "successMessage": "Nice control. Your final consonant clusters were clear.",
    "teacherNotes": "Final consonant reduction is a major intelligibility issue for many Thai learners. Train endings explicitly.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      21,
      23,
      24,
      43,
      44
    ],
    "contrastWith": [],
    "relatedPractice": [
      21,
      23,
      24,
      43,
      44
    ],
    "remediationLinks": [
      23,
      101,
      17,
      85,
      126
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "She needs to lift the last gift to the left.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 23,
    "displayName": "Final cluster drill 3",
    "sentence": "Mark likes cold milk with breakfast.",
    "audioPromptText": "Listen carefully, then repeat: Mark likes cold milk with breakfast.",
    "level": "A2",
    "lessonOrder": 23,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 4,
    "instruction": "Hold the end of cold, milk, and breakfast clearly. Do not skip the final consonants.",
    "tags": [
      "final_consonant_clusters",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "final_consonant_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "final_cluster_ld",
      "final_clusters",
      "clusters",
      "final_cluster_lk",
      "initial_cluster_st",
      "initial_clusters"
    ],
    "focusWords": [
      "Mark",
      "likes",
      "cold",
      "milk",
      "breakfast"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and clusters.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "final_cluster_ld",
        "words": [
          "Mark",
          "likes",
          "cold",
          "milk",
          "breakfast"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_clusters",
        "words": [
          "Mark",
          "likes",
          "cold",
          "milk",
          "breakfast"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "Mark",
          "likes",
          "cold",
          "milk",
          "breakfast"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_cluster_lk",
        "words": [
          "Mark",
          "likes",
          "cold",
          "milk",
          "breakfast"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "Mark",
          "likes",
          "cold",
          "milk",
          "breakfast"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "Mark",
          "likes",
          "cold",
          "milk",
          "breakfast"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If milk becomes miu or cold loses the final sound, practice the target words in isolation with visual mouth closure cues.",
    "errorRules": [
      {
        "ruleId": "cold_milk_low",
        "scope": "word",
        "targets": [
          "cold",
          "milk",
          "breakfast"
        ],
        "trigger": {
          "wordScoreBelow": 71
        },
        "feedback": "Keep the final sounds in cold, milk, and breakfast. Do not let the word fade out early.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good work. Your word endings were more complete and accurate.",
    "teacherNotes": "Useful for several common Thai learner problem endings in one sentence.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      21,
      22,
      24,
      43,
      44
    ],
    "contrastWith": [],
    "relatedPractice": [
      21,
      22,
      24,
      43,
      44
    ],
    "remediationLinks": [
      101,
      17,
      81,
      84,
      135
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Mark likes cold milk with breakfast.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 24,
    "displayName": "Final fricative and cluster drill",
    "sentence": "He kept the soft scarf and the short shirt.",
    "audioPromptText": "Listen carefully, then repeat: He kept the soft scarf and the short shirt.",
    "level": "B1",
    "lessonOrder": 24,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 5,
    "instruction": "Close kept, soft, scarf, short, and shirt clearly. Keep the end sounds audible but not exaggerated.",
    "tags": [
      "final_consonants",
      "fricatives",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "final_consonant_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "final_cluster_pt",
      "final_clusters",
      "clusters",
      "final_cluster_ft",
      "final_cluster_rf",
      "final_cluster_rt",
      "final_consonants"
    ],
    "focusWords": [
      "kept",
      "soft",
      "scarf",
      "short",
      "shirt"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and clusters.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "final_cluster_pt",
        "words": [
          "kept",
          "soft",
          "scarf",
          "short",
          "shirt"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_clusters",
        "words": [
          "kept",
          "soft",
          "scarf",
          "short",
          "shirt"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "kept",
          "soft",
          "scarf",
          "short",
          "shirt"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_cluster_ft",
        "words": [
          "kept",
          "soft",
          "scarf",
          "short",
          "shirt"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_cluster_rf",
        "words": [
          "kept",
          "soft",
          "scarf",
          "short",
          "shirt"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_cluster_rt",
        "words": [
          "kept",
          "soft",
          "scarf",
          "short",
          "shirt"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "kept",
          "soft",
          "scarf",
          "short",
          "shirt"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If endings are dropped, train one focus word at a time, then combine two, then return to the full sentence.",
    "errorRules": [
      {
        "ruleId": "complex_endings_low",
        "scope": "word",
        "targets": [
          "kept",
          "soft",
          "scarf",
          "short"
        ],
        "trigger": {
          "wordScoreBelow": 70
        },
        "feedback": "Keep the word ending complete. Try each focus word separately first.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Nice. Your more complex word endings sounded clearer.",
    "teacherNotes": "Advanced final consonant and fricative ending practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      21,
      22,
      23,
      43,
      44
    ],
    "contrastWith": [],
    "relatedPractice": [
      21,
      22,
      23,
      43,
      44
    ],
    "remediationLinks": [
      101,
      45,
      23,
      94,
      135
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "He kept the soft scarf and the short shirt.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 25,
    "displayName": "Vowel length drill 1",
    "sentence": "I ship cheap sheep to the beach each week.",
    "audioPromptText": "Listen carefully, then repeat: I ship cheap sheep to the beach each week.",
    "level": "B1",
    "lessonOrder": 25,
    "module": "vowels",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Make ship short and sheep long. Keep the vowel contrast clear.",
    "tags": [
      "long_short_vowels",
      "ship_sheep",
      "minimal_pair_style",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "vowel_length_drill",
    "targetSounds": [
      "vowel_kit",
      "vowel_fleece",
      "ch_affricate",
      "sh"
    ],
    "ipaTargets": [
      "/ih/",
      "/iy/",
      "/ch/",
      "/sh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "ship",
      "cheap",
      "sheep",
      "beach",
      "each",
      "week"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_kit",
        "words": [
          "ship",
          "cheap",
          "sheep",
          "beach",
          "each",
          "week"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "vowel_fleece",
        "words": [
          "ship",
          "cheap",
          "sheep",
          "beach",
          "each",
          "week"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "ch_affricate",
        "words": [
          "ship",
          "cheap",
          "sheep",
          "beach",
          "each",
          "week"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "sh",
        "words": [
          "ship",
          "cheap",
          "sheep",
          "beach",
          "each",
          "week"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the vowels merge, contrast ship and sheep repeatedly before retrying the whole sentence.",
    "errorRules": [
      {
        "ruleId": "short_long_vowel_confusion",
        "scope": "word",
        "targets": [
          "ship",
          "sheep"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Make ship shorter and sheep longer. Try just those two words first.",
        "action": "launch_minimal_pair"
      },
      {
        "ruleId": "iy_low",
        "scope": "phoneme",
        "targets": [
          "/iy/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Stretch the long vowel more in sheep, beach, each, and week.",
        "action": "retry_focus_words"
      }
    ],
    "successMessage": "Great. Your short and long vowel contrast was clear.",
    "teacherNotes": "Use gesture support, short hand for /ih/ and long hand for /iy/, to reinforce the contrast.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      26,
      27,
      28,
      39
    ],
    "contrastWith": [],
    "relatedPractice": [
      26,
      27,
      28,
      39
    ],
    "remediationLinks": [
      39,
      27,
      93,
      92,
      156
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "teacher_review",
    "appUse": "teacher_review_before_default",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Usable item, but flagged for teacher review of naturalness, audience fit, or difficulty.",
    "reviewStatusV0_7": "teacher_review",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I ship cheap sheep to the beach each week.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "teacher_review"
  },
  {
    "id": 26,
    "displayName": "Vowel length drill 2",
    "sentence": "He sat in the seat to eat meat and beans.",
    "audioPromptText": "Listen carefully, then repeat: He sat in the seat to eat meat and beans.",
    "level": "A2",
    "lessonOrder": 26,
    "module": "vowels",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Keep sat short and seat long. Also stretch eat and meat clearly.",
    "tags": [
      "long_short_vowels",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "vowel_length_drill",
    "targetSounds": [
      "vowel_trap",
      "vowel_fleece"
    ],
    "ipaTargets": [
      "/ae/",
      "/iy/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "sat",
      "seat",
      "eat",
      "meat",
      "beans"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_trap",
        "words": [
          "sat",
          "seat",
          "eat",
          "meat",
          "beans"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "vowel_fleece",
        "words": [
          "sat",
          "seat",
          "eat",
          "meat",
          "beans"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the learner uses one vowel for all words, isolate sat and seat and exaggerate the contrast.",
    "errorRules": [
      {
        "ruleId": "vowel_length_low",
        "scope": "word",
        "targets": [
          "sat",
          "seat"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Make sat short and seat long. Keep the difference clear.",
        "action": "launch_minimal_pair"
      }
    ],
    "successMessage": "Good. Your vowel length contrast was easier to hear.",
    "teacherNotes": "A simpler vowel-length contrast than the ship/sheep sentence.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      25,
      27,
      28,
      39
    ],
    "contrastWith": [],
    "relatedPractice": [
      25,
      27,
      28,
      39
    ],
    "remediationLinks": [
      39,
      28,
      157,
      161,
      156
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "He sat in the seat to eat meat and beans.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 27,
    "displayName": "Vowel and V drill",
    "sentence": "I live in a big village near a beach villa.",
    "audioPromptText": "Listen carefully, then repeat: I live in a big village near a beach villa.",
    "level": "A2",
    "lessonOrder": 27,
    "module": "vowels",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Keep live and big short. Keep beach long. Use a clear V in village and villa.",
    "tags": [
      "long_short_vowels",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "vowel_length_drill",
    "targetSounds": [
      "vowel_kit",
      "vowel_fleece",
      "v"
    ],
    "ipaTargets": [
      "/ih/",
      "/iy/",
      "/v/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "live",
      "big",
      "village",
      "beach",
      "villa"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_kit",
        "words": [
          "live",
          "big",
          "village",
          "beach",
          "villa"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "vowel_fleece",
        "words": [
          "live",
          "big",
          "village",
          "beach",
          "villa"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "live",
          "big",
          "village",
          "beach",
          "villa"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the learner loses either the vowel contrast or the V sound, train those separately before combining them.",
    "errorRules": [
      {
        "ruleId": "vowel_or_v_low",
        "scope": "word",
        "targets": [
          "village",
          "beach",
          "villa"
        ],
        "trigger": {
          "wordScoreBelow": 73
        },
        "feedback": "Keep the long vowel in beach and a strong V in village and villa.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Nice work. You kept both the vowels and the V sound clearer.",
    "teacherNotes": "Good for combining segmental work across categories.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      25,
      26,
      28,
      39
    ],
    "contrastWith": [],
    "relatedPractice": [
      25,
      26,
      28,
      39
    ],
    "remediationLinks": [
      39,
      43,
      41,
      28,
      156
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I live in a big village near a beach villa.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 28,
    "displayName": "V and F contrast sentence",
    "sentence": "The man in the van met his fan in the park.",
    "audioPromptText": "Listen carefully, then repeat: The man in the van met his fan in the park.",
    "level": "A2",
    "lessonOrder": 28,
    "module": "v_w_f",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Contrast van and fan clearly. Use teeth and lip contact for V, and only air for F.",
    "tags": [
      "long_short_vowels",
      "v_vs_f",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "vowel_length_drill",
    "targetSounds": [
      "vowel_trap",
      "v",
      "f"
    ],
    "ipaTargets": [
      "/ae/",
      "/v/",
      "/f/"
    ],
    "targetFeatures": [
      "v_vs_f"
    ],
    "focusWords": [
      "man",
      "van",
      "fan"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_trap",
        "words": [
          "man",
          "van",
          "fan"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "man",
          "van",
          "fan"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "f",
        "words": [
          "man",
          "van",
          "fan"
        ],
        "threshold": 70
      },
      {
        "type": "word_or_sentence",
        "target": "v_vs_f",
        "words": [
          "man",
          "van",
          "fan"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If V and F are confused, contrast fan and van three times before saying the sentence.",
    "errorRules": [
      {
        "ruleId": "vf_confusion_low",
        "scope": "word",
        "targets": [
          "van",
          "fan"
        ],
        "trigger": {
          "wordScoreBelow": 75
        },
        "feedback": "Contrast van and fan clearly. Use your voice for V, but not for F.",
        "action": "launch_minimal_pair"
      }
    ],
    "successMessage": "Good. Your V and F contrast was clearer.",
    "teacherNotes": "Primary purpose is V/F contrast, not vowel length. Keep vowel targets as secondary sound data.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      25,
      26,
      27,
      39
    ],
    "contrastWith": [],
    "relatedPractice": [
      25,
      26,
      27,
      39
    ],
    "remediationLinks": [
      43,
      41,
      161,
      5,
      40
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The man in the van met his fan in the park.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 29,
    "displayName": "Stress and rhythm 1",
    "sentence": "Today I have a lot of work to do.",
    "audioPromptText": "Listen carefully, then repeat: Today I have a lot of work to do.",
    "level": "A1",
    "lessonOrder": 29,
    "module": "stress_and_rhythm",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 2,
    "instruction": "Stress today, lot, work, and do. Say the other words more lightly.",
    "tags": [
      "stress_rhythm",
      "connected_speech",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "stress_rhythm_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "stress_timing",
      "weak_forms",
      "connected_speech"
    ],
    "focusWords": [
      "today",
      "have",
      "lot",
      "work",
      "do"
    ],
    "thaiErrorPattern": "Thai learners may give syllables equal weight instead of using English stress timing and vowel reduction.",
    "scoringTargets": [
      {
        "type": "prosody_or_word",
        "target": "stress_timing",
        "words": [
          "today",
          "have",
          "lot",
          "work",
          "do"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "today",
          "have",
          "lot",
          "work",
          "do"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "today",
          "have",
          "lot",
          "work",
          "do"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If every word gets equal stress, model the rhythm with claps on the strong words only.",
    "errorRules": [
      {
        "ruleId": "stress_pattern_low",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Try stronger stress on today, lot, work, and do, and lighter stress on the other words.",
        "action": "shadow_with_rhythm"
      }
    ],
    "successMessage": "Nice rhythm. Your stress pattern sounded more natural.",
    "teacherNotes": "A gentle introduction to English stress timing.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      30,
      31,
      32
    ],
    "contrastWith": [],
    "relatedPractice": [
      30,
      31,
      32
    ],
    "remediationLinks": [
      151,
      152,
      155,
      148,
      149
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "Today I have a lot of work to do.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction",
        "connected_speech",
        "stress_and_rhythm"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 30,
    "displayName": "Stress and weak forms 2",
    "sentence": "I would like a cup of coffee with a little milk.",
    "audioPromptText": "Listen carefully, then repeat: I would like a cup of coffee with a little milk.",
    "level": "A2",
    "lessonOrder": 30,
    "module": "stress_and_rhythm",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Stress like, cup, coffee, little, and milk. Keep of and a weak and short.",
    "tags": [
      "stress_rhythm",
      "weak_forms",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "stress_rhythm_drill",
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "stress_timing",
      "weak_forms"
    ],
    "focusWords": [
      "would",
      "like",
      "cup",
      "coffee",
      "little",
      "milk"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "would",
          "like",
          "cup",
          "coffee",
          "little",
          "milk"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "stress_timing",
        "words": [
          "would",
          "like",
          "cup",
          "coffee",
          "little",
          "milk"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "would",
          "like",
          "cup",
          "coffee",
          "little",
          "milk"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If function words are too strong, teach reduced forms and have the learner shadow the sentence with natural rhythm.",
    "errorRules": [
      {
        "ruleId": "stress_pattern_low",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Try stronger stress on like, cup, coffee, little, and milk, and lighter stress on of and a.",
        "action": "shadow_with_rhythm"
      },
      {
        "ruleId": "weak_forms_low",
        "scope": "syllable",
        "targets": [
          "of",
          "a"
        ],
        "trigger": {
          "syllableScoreBelow": 70
        },
        "feedback": "Reduce of and a so the sentence sounds more natural.",
        "action": "show_rhythm_tip"
      }
    ],
    "successMessage": "Nice rhythm. Your stress pattern sounded more natural.",
    "teacherNotes": "Thai learners often give similar weight to every syllable. Use chunking and clap the stressed beats only.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      29,
      31,
      32
    ],
    "contrastWith": [],
    "relatedPractice": [
      29,
      31,
      32
    ],
    "remediationLinks": [
      29,
      32,
      144,
      145,
      146
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "I would like a cup of coffee with a little milk.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction",
        "stress_and_rhythm"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 31,
    "displayName": "Stress and phrase timing 3",
    "sentence": "Can you call me back after six o'clock?",
    "audioPromptText": "Listen carefully, then repeat: Can you call me back after six o'clock?",
    "level": "A2",
    "lessonOrder": 31,
    "module": "intonation",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 3,
    "instruction": "Stress call, back, six, and o'clock. Keep can you and me lighter.",
    "tags": [
      "stress_rhythm",
      "phrase_stress",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "stress_rhythm_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "stress_timing",
      "question_intonation"
    ],
    "focusWords": [
      "call",
      "back",
      "after",
      "six",
      "o'clock"
    ],
    "thaiErrorPattern": "Thai learners may give syllables equal weight instead of using English stress timing and vowel reduction.",
    "scoringTargets": [
      {
        "type": "prosody_or_word",
        "target": "stress_timing",
        "words": [
          "call",
          "back",
          "after",
          "six",
          "o'clock"
        ],
        "threshold": 75
      },
      {
        "type": "teacher_or_prosody",
        "target": "question_intonation",
        "words": [
          "call",
          "back",
          "after",
          "six",
          "o'clock"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the sentence sounds flat, exaggerate the stress pattern first, then smooth it into natural speech.",
    "errorRules": [
      {
        "ruleId": "intonation_low",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 74
        },
        "feedback": "Try a clearer stress pattern with stronger call, back, six, and o'clock.",
        "action": "shadow_with_rhythm"
      }
    ],
    "successMessage": "Good. Your sentence rhythm sounded more natural.",
    "teacherNotes": "A useful phrase-level rhythm and timing exercise.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      29,
      30,
      32
    ],
    "contrastWith": [],
    "relatedPractice": [
      29,
      30,
      32
    ],
    "remediationLinks": [
      29,
      30,
      32,
      73,
      74
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Audit: over-flagged as teacher_review; approved for Grade 5 default autopilot after review.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "Can you call me back after six o'clock?",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "stress_and_rhythm",
        "intonation_teacher_review"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 32,
    "displayName": "Stress and weak forms 4",
    "sentence": "He did not come because he was very tired.",
    "audioPromptText": "Listen carefully, then repeat: He did not come because he was very tired.",
    "level": "A2",
    "lessonOrder": 32,
    "module": "stress_and_rhythm",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Stress come, very, and tired. Keep because and he was lighter.",
    "tags": [
      "stress_rhythm",
      "weak_forms",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "stress_rhythm_drill",
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "stress_timing",
      "weak_forms"
    ],
    "focusWords": [
      "did",
      "not",
      "come",
      "because",
      "very",
      "tired"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "did",
          "not",
          "come",
          "because",
          "very",
          "tired"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "stress_timing",
        "words": [
          "did",
          "not",
          "come",
          "because",
          "very",
          "tired"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "did",
          "not",
          "come",
          "because",
          "very",
          "tired"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the learner over-stresses every word, contrast the content words with spoken reductions in the grammar words.",
    "errorRules": [
      {
        "ruleId": "flat_stress_low",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 74
        },
        "feedback": "Stress come, very, and tired more clearly, and make because lighter.",
        "action": "show_rhythm_tip"
      }
    ],
    "successMessage": "Nice. The sentence sounded more balanced and natural.",
    "teacherNotes": "Good for practicing content-word stress against lighter grammar words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      29,
      30,
      31
    ],
    "contrastWith": [],
    "relatedPractice": [
      29,
      30,
      31
    ],
    "remediationLinks": [
      29,
      30,
      144,
      145,
      146
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "He did not come because he was very tired.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction",
        "stress_and_rhythm"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 33,
    "displayName": "R and L drill 1",
    "sentence": "Larry and Lily really like red rice.",
    "audioPromptText": "Listen carefully, then repeat: Larry and Lily really like red rice.",
    "level": "A2",
    "lessonOrder": 33,
    "module": "r_l",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Keep L light with the tongue touching the ridge. Pull the tongue back slightly for R without touching.",
    "tags": [
      "r_vs_l",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "r_vs_l_drill",
    "targetSounds": [
      "r",
      "l"
    ],
    "ipaTargets": [
      "/r/",
      "/l/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "Larry",
      "Lily",
      "really",
      "like",
      "red",
      "rice"
    ],
    "thaiErrorPattern": "Thai learners may have difficulty keeping English R and L distinct, especially in clusters and final positions.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "r",
        "words": [
          "Larry",
          "Lily",
          "really",
          "like",
          "red",
          "rice"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "l",
        "words": [
          "Larry",
          "Lily",
          "really",
          "like",
          "red",
          "rice"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If R and L sound the same, alternate light and right, then return to the sentence.",
    "errorRules": [
      {
        "ruleId": "r_low",
        "scope": "phoneme",
        "targets": [
          "/r/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "For R, pull the tongue back slightly and do not touch the ridge.",
        "action": "show_articulation_tip"
      },
      {
        "ruleId": "l_low",
        "scope": "phoneme",
        "targets": [
          "/l/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "For L, let the tongue touch just behind the top teeth.",
        "action": "show_articulation_tip"
      },
      {
        "ruleId": "rl_focus_words_low",
        "scope": "word",
        "targets": [
          "Larry",
          "Lily",
          "red",
          "rice"
        ],
        "trigger": {
          "wordScoreBelow": 75
        },
        "feedback": "Practice the R and L words separately before trying the full sentence again.",
        "action": "launch_minimal_pair"
      }
    ],
    "successMessage": "Well done. Your R and L contrast was clearer.",
    "teacherNotes": "Use minimal pairs like right and light, red and led, rice and lice if needed.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      34,
      35,
      36,
      37,
      38
    ],
    "contrastWith": [
      34,
      35,
      36
    ],
    "relatedPractice": [
      37,
      38
    ],
    "remediationLinks": [
      46,
      47,
      102,
      49,
      87
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Larry and Lily really like red rice.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "r_l_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 34,
    "displayName": "R and L drill 2",
    "sentence": "The green grass grows near the glass river.",
    "audioPromptText": "Listen carefully, then repeat: The green grass grows near the glass river.",
    "level": "B1",
    "lessonOrder": 34,
    "module": "r_l",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep GR and GL separate. Do not let grass and glass sound the same.",
    "tags": [
      "r_vs_l",
      "clusters",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "r_vs_l_drill",
    "targetSounds": [
      "r",
      "l"
    ],
    "ipaTargets": [
      "/r/",
      "/l/"
    ],
    "targetFeatures": [
      "initial_cluster_gr",
      "initial_clusters",
      "clusters",
      "initial_cluster_gl"
    ],
    "focusWords": [
      "green",
      "grass",
      "grows",
      "glass",
      "river"
    ],
    "thaiErrorPattern": "Thai learners may have difficulty keeping English R and L distinct, especially in clusters and final positions.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "r",
        "words": [
          "green",
          "grass",
          "grows",
          "glass",
          "river"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "l",
        "words": [
          "green",
          "grass",
          "grows",
          "glass",
          "river"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_gr",
        "words": [
          "green",
          "grass",
          "grows",
          "glass",
          "river"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "green",
          "grass",
          "grows",
          "glass",
          "river"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "green",
          "grass",
          "grows",
          "glass",
          "river"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_gl",
        "words": [
          "green",
          "grass",
          "grows",
          "glass",
          "river"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If cluster contrast is weak, drill grass versus glass as a minimal pair before the full sentence.",
    "errorRules": [
      {
        "ruleId": "grass_glass_low",
        "scope": "word",
        "targets": [
          "grass",
          "glass"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep grass and glass different. Focus on the cluster and liquid sound.",
        "action": "launch_minimal_pair"
      }
    ],
    "successMessage": "Nice work. Your GR and GL contrast was stronger.",
    "teacherNotes": "A useful step up from simple R-L contrasts.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      33,
      35,
      36,
      37,
      38
    ],
    "contrastWith": [
      33,
      35,
      36
    ],
    "relatedPractice": [
      37,
      38
    ],
    "remediationLinks": [
      101,
      81,
      102,
      84,
      130
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The green grass grows near the glass river.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "r_l_contrast",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 35,
    "displayName": "R and L cluster drill",
    "sentence": "Please play the blue drum after the bright song.",
    "audioPromptText": "Listen carefully, then repeat: Please play the blue drum after the bright song.",
    "level": "A2",
    "lessonOrder": 35,
    "module": "r_l",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 4,
    "instruction": "Keep the L clear in please, play, and blue. Keep the R clear in bright.",
    "tags": [
      "r_vs_l",
      "clusters",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "r_vs_l_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_pl",
      "initial_clusters",
      "clusters",
      "initial_cluster_bl",
      "initial_cluster_dr",
      "initial_cluster_br"
    ],
    "focusWords": [
      "please",
      "play",
      "blue",
      "bright"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_pl",
        "words": [
          "please",
          "play",
          "blue",
          "bright"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "please",
          "play",
          "blue",
          "bright"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "please",
          "play",
          "blue",
          "bright"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_bl",
        "words": [
          "please",
          "play",
          "blue",
          "bright"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_dr",
        "words": [
          "please",
          "play",
          "blue",
          "bright"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_br",
        "words": [
          "please",
          "play",
          "blue",
          "bright"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If clusters break apart, start with play, blue, drum, and bright separately, then combine.",
    "errorRules": [
      {
        "ruleId": "liquid_clusters_low",
        "scope": "word",
        "targets": [
          "play",
          "blue",
          "drum",
          "bright"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Keep the cluster together and avoid adding an extra vowel.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good job. Your liquid clusters were tighter and clearer.",
    "teacherNotes": "Rewritten from a less natural drum sentence while keeping R/L cluster practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      33,
      34,
      36,
      37,
      38
    ],
    "contrastWith": [
      33,
      34,
      36
    ],
    "relatedPractice": [
      37,
      38
    ],
    "remediationLinks": [
      101,
      81,
      84,
      17,
      131
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Please play the blue drum after the bright song.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 36,
    "displayName": "R and L drill 3",
    "sentence": "I read a long ladder story about a little rabbit.",
    "audioPromptText": "Listen carefully, then repeat: I read a long ladder story about a little rabbit.",
    "level": "A2",
    "lessonOrder": 36,
    "module": "r_l",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Contrast long, ladder, little, and rabbit carefully. Keep R and L separate.",
    "tags": [
      "r_vs_l",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "r_vs_l_drill",
    "targetSounds": [
      "r",
      "l"
    ],
    "ipaTargets": [
      "/r/",
      "/l/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "read",
      "long",
      "ladder",
      "little",
      "rabbit"
    ],
    "thaiErrorPattern": "Thai learners may have difficulty keeping English R and L distinct, especially in clusters and final positions.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "r",
        "words": [
          "read",
          "long",
          "ladder",
          "little",
          "rabbit"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "l",
        "words": [
          "read",
          "long",
          "ladder",
          "little",
          "rabbit"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the learner uses one liquid sound for both, use mirror work and alternate tongue placement cues.",
    "errorRules": [
      {
        "ruleId": "r_l_words_low",
        "scope": "word",
        "targets": [
          "ladder",
          "little",
          "rabbit"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Focus on the difference between L in ladder and little, and R in rabbit.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Nice. Your R and L contrast was easier to hear.",
    "teacherNotes": "A moderate sentence for R-L practice without too many clusters.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      33,
      34,
      35,
      37,
      38
    ],
    "contrastWith": [
      33,
      34,
      35
    ],
    "relatedPractice": [
      37,
      38
    ],
    "remediationLinks": [
      46,
      47,
      102,
      49,
      87
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I read a long ladder story about a little rabbit.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "r_l_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 37,
    "displayName": "R and L minimal pair left",
    "sentence": "Turn left at the light.",
    "audioPromptText": "Listen carefully, then repeat: Turn left at the light.",
    "level": "A1",
    "lessonOrder": 37,
    "module": "r_l",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Touch the tongue to make L in left and light.",
    "tags": [
      "r_vs_l",
      "minimal_pair_style",
      "directional",
      "thai_learners"
    ],
    "pairGroup": "r_vs_l_minimal_pair",
    "targetSounds": [
      "l"
    ],
    "ipaTargets": [
      "/l/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "left",
      "light"
    ],
    "thaiErrorPattern": "Thai learners may have difficulty keeping English R and L distinct, especially in clusters and final positions.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "l",
        "words": [
          "left",
          "light"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If L is unclear, hold the tongue at the ridge for a moment before releasing the vowel.",
    "errorRules": [
      {
        "ruleId": "left_light_low",
        "scope": "word",
        "targets": [
          "left",
          "light"
        ],
        "trigger": {
          "wordScoreBelow": 76
        },
        "feedback": "Touch the tongue behind the top teeth for L in left and light.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your L sound was clear.",
    "teacherNotes": "Simple directional phrase. Useful before contrasting with right.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      38
    ],
    "contrastWith": [
      38
    ],
    "relatedPractice": [],
    "remediationLinks": [
      33,
      36,
      102,
      34,
      49
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "Turn left at the light.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "r_l_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 38,
    "displayName": "R and L minimal pair right",
    "sentence": "Turn right at the light.",
    "audioPromptText": "Listen carefully, then repeat: Turn right at the light.",
    "level": "A1",
    "lessonOrder": 38,
    "module": "r_l",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Pull the tongue back slightly for R in right. Do not touch the ridge.",
    "tags": [
      "r_vs_l",
      "minimal_pair_style",
      "directional",
      "thai_learners"
    ],
    "pairGroup": "r_vs_l_minimal_pair",
    "targetSounds": [
      "r"
    ],
    "ipaTargets": [
      "/r/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "right",
      "light"
    ],
    "thaiErrorPattern": "Thai learners may have difficulty keeping English R and L distinct, especially in clusters and final positions.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "r",
        "words": [
          "right",
          "light"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If R becomes L, contrast right and light several times with visible mouth-shape coaching.",
    "errorRules": [
      {
        "ruleId": "right_low",
        "scope": "word",
        "targets": [
          "right"
        ],
        "trigger": {
          "wordScoreBelow": 76
        },
        "feedback": "Pull the tongue back for R in right and do not touch the ridge.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice work. Your R sound was clearer.",
    "teacherNotes": "Pairs well with the previous L sentence for contrast.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      37
    ],
    "contrastWith": [
      37
    ],
    "relatedPractice": [],
    "remediationLinks": [
      46,
      47,
      33,
      36,
      102
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "Turn right at the light.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "r_l_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 39,
    "displayName": "Ship and sheep contrast",
    "sentence": "I ship the sheep each week.",
    "audioPromptText": "Listen carefully, then repeat: I ship the sheep each week.",
    "level": "A2",
    "lessonOrder": 39,
    "module": "vowels",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Keep ship short and sheep long. Make the difference obvious.",
    "tags": [
      "ship_sheep",
      "minimal_pair_style",
      "vowel_length",
      "thai_learners"
    ],
    "pairGroup": "ship_sheep_minimal_pair",
    "targetSounds": [
      "vowel_kit",
      "vowel_fleece",
      "sh"
    ],
    "ipaTargets": [
      "/ih/",
      "/iy/",
      "/sh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "ship",
      "sheep",
      "each",
      "week"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_kit",
        "words": [
          "ship",
          "sheep",
          "each",
          "week"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "vowel_fleece",
        "words": [
          "ship",
          "sheep",
          "each",
          "week"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "sh",
        "words": [
          "ship",
          "sheep",
          "each",
          "week"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If both words sound the same, rehearse only ship and sheep with hand gestures for short versus long.",
    "errorRules": [
      {
        "ruleId": "ship_sheep_low",
        "scope": "word",
        "targets": [
          "ship",
          "sheep"
        ],
        "trigger": {
          "wordScoreBelow": 75
        },
        "feedback": "Make ship shorter and sheep longer. Keep the contrast easy to hear.",
        "action": "launch_minimal_pair"
      }
    ],
    "successMessage": "Great. Your ship and sheep contrast was clear.",
    "teacherNotes": "A compact minimal-pair sentence for high-frequency review.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      25
    ],
    "contrastWith": [],
    "relatedPractice": [
      25
    ],
    "remediationLinks": [
      93,
      156,
      157,
      27,
      158
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I ship the sheep each week.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 40,
    "displayName": "V and W minimal pair wine",
    "sentence": "I like wine.",
    "audioPromptText": "Listen carefully, then repeat: I like wine.",
    "level": "A1",
    "lessonOrder": 40,
    "module": "v_w_f",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Round the lips for W in wine. Do not touch the teeth to the lip.",
    "tags": [
      "v_vs_w",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "v_vs_w_minimal_pair",
    "targetSounds": [
      "w"
    ],
    "ipaTargets": [
      "/w/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "wine"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "w",
        "words": [
          "wine"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If wine sounds like vine, exaggerate the lip rounding before the vowel.",
    "errorRules": [
      {
        "ruleId": "wine_low",
        "scope": "word",
        "targets": [
          "wine"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Round your lips for W in wine. Do not bite your lower lip.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your W sound in wine was clearer.",
    "teacherNotes": "A simple minimal pair entry for very early V-W work.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      41
    ],
    "contrastWith": [
      41
    ],
    "relatedPractice": [],
    "remediationLinks": [
      42,
      43,
      8,
      84,
      88
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "I like wine.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 41,
    "displayName": "V and W minimal pair vine",
    "sentence": "I see a vine.",
    "audioPromptText": "Listen carefully, then repeat: I see a vine.",
    "level": "A1",
    "lessonOrder": 41,
    "module": "v_w_f",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Use top teeth on bottom lip for V in vine. Do not round your lips like W.",
    "tags": [
      "v_vs_w",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "v_vs_w_minimal_pair",
    "targetSounds": [
      "v"
    ],
    "ipaTargets": [
      "/v/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "vine"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "vine"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If vine sounds like wine, practice the lip and teeth contact silently first, then add voice.",
    "errorRules": [
      {
        "ruleId": "vine_low",
        "scope": "word",
        "targets": [
          "vine"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Touch your top teeth to your bottom lip for V in vine.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice work. Your V sound in vine was clearer.",
    "teacherNotes": "Best used directly after wine. Rewritten because 'I like vine' was unnatural.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      40
    ],
    "contrastWith": [
      40
    ],
    "relatedPractice": [],
    "remediationLinks": [
      43,
      42,
      28,
      5,
      6
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "I see a vine.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 42,
    "displayName": "V and W minimal pair west",
    "sentence": "He went west.",
    "audioPromptText": "Listen carefully, then repeat: He went west.",
    "level": "A1",
    "lessonOrder": 42,
    "module": "v_w_f",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Round the lips for W in went and west.",
    "tags": [
      "v_vs_w",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "vest_west_minimal_pair",
    "targetSounds": [
      "w"
    ],
    "ipaTargets": [
      "/w/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "went",
      "west"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "w",
        "words": [
          "went",
          "west"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If W is replaced by V, emphasize the rounded lips and no tooth-lip contact.",
    "errorRules": [
      {
        "ruleId": "west_low",
        "scope": "word",
        "targets": [
          "went",
          "west"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Use rounded lips for W in went and west.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your W words were clearer.",
    "teacherNotes": "Pairs naturally with vest for contrast practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      43
    ],
    "contrastWith": [
      43
    ],
    "relatedPractice": [],
    "remediationLinks": [
      40,
      41,
      8,
      84,
      88
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "He went west.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 43,
    "displayName": "V and W minimal pair vest",
    "sentence": "He wears a vest.",
    "audioPromptText": "Listen carefully, then repeat: He wears a vest.",
    "level": "A1",
    "lessonOrder": 43,
    "module": "v_w_f",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Keep a strong V in vest and wears.",
    "tags": [
      "v_vs_w",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "vest_west_minimal_pair",
    "targetSounds": [
      "v"
    ],
    "ipaTargets": [
      "/v/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "wears",
      "vest"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "wears",
          "vest"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If V becomes W, train the sentence with the learner touching the lip and teeth before speaking.",
    "errorRules": [
      {
        "ruleId": "vest_low",
        "scope": "word",
        "targets": [
          "vest"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Use your top teeth and bottom lip for V in vest.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice. Your V word sounded stronger.",
    "teacherNotes": "Best taught as a direct contrast against west.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      42
    ],
    "contrastWith": [
      42
    ],
    "relatedPractice": [],
    "remediationLinks": [
      41,
      40,
      28,
      5,
      6
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "He wears a vest.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 44,
    "displayName": "Final consonant minimal pair sick",
    "sentence": "He is sick.",
    "audioPromptText": "Listen carefully, then repeat: He is sick.",
    "level": "A1",
    "lessonOrder": 44,
    "module": "stop_voicing",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Finish sick with a clear K sound.",
    "tags": [
      "final_consonants",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "sick_six_minimal_pair",
    "targetSounds": [
      "k"
    ],
    "ipaTargets": [
      "/k/"
    ],
    "targetFeatures": [
      "final_consonants"
    ],
    "focusWords": [
      "sick"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "k",
        "words": [
          "sick"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "sick"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the final K disappears, stop after sick and release the K more clearly before speaking the full sentence.",
    "errorRules": [
      {
        "ruleId": "sick_low",
        "scope": "word",
        "targets": [
          "sick"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Keep the final K in sick. Do not leave the ending open.",
        "action": "show_final_consonant_tip"
      }
    ],
    "successMessage": "Good. The final K in sick was clearer.",
    "teacherNotes": "Use this before introducing the harder KS cluster in six.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      45
    ],
    "contrastWith": [
      45
    ],
    "relatedPractice": [],
    "remediationLinks": [
      94,
      91,
      90,
      46,
      117
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "He is sick.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 45,
    "displayName": "Final KS minimal pair six",
    "sentence": "He is six.",
    "audioPromptText": "Listen carefully, then repeat: He is six.",
    "level": "A1",
    "lessonOrder": 45,
    "module": "final_consonants",
    "practiceStage": "minimal_pair",
    "skillType": "mixed",
    "difficultyScore": 2,
    "instruction": "Keep the final KS ending in six. Do not reduce it to si.",
    "tags": [
      "final_consonants",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "sick_six_minimal_pair",
    "targetSounds": [
      "s",
      "k"
    ],
    "ipaTargets": [
      "/s/",
      "/k/"
    ],
    "targetFeatures": [
      "final_cluster_ks",
      "final_clusters",
      "final_consonants"
    ],
    "focusWords": [
      "six"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and clusters.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "six"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "k",
        "words": [
          "six"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_cluster_ks",
        "words": [
          "six"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_clusters",
        "words": [
          "six"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "six"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the final cluster is reduced, build the word step by step: si, sik, six.",
    "errorRules": [
      {
        "ruleId": "six_low",
        "scope": "word",
        "targets": [
          "six"
        ],
        "trigger": {
          "wordScoreBelow": 76
        },
        "feedback": "Keep the full KS ending in six. Do not stop too early.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Nice. Your final KS cluster was clearer.",
    "teacherNotes": "This is a final /ks/ ending item. It can support final-cluster practice, but should be housed with final consonants.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      44
    ],
    "contrastWith": [
      44
    ],
    "relatedPractice": [],
    "remediationLinks": [
      94,
      91,
      90,
      46,
      123
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "He is six.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 46,
    "displayName": "Rice and rides minimal pair 1",
    "sentence": "I like rice.",
    "audioPromptText": "Listen carefully, then repeat: I like rice.",
    "level": "A1",
    "lessonOrder": 46,
    "module": "final_consonants",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Say rice with a clear final S.",
    "tags": [
      "final_consonants",
      "minimal_pair_style",
      "r_vs_l",
      "thai_learners"
    ],
    "pairGroup": "rice_rides_minimal_pair",
    "targetSounds": [
      "s"
    ],
    "ipaTargets": [
      "/s/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_s_z"
    ],
    "focusWords": [
      "rice"
    ],
    "thaiErrorPattern": "Thai learners may devoice final English sounds or collapse voiced and voiceless endings, so pairs like rice/rise and bus/buzz need focused practice.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "rice"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "rice"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_s_z",
        "words": [
          "rice"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the final S is weak, lengthen the airflow briefly at the end of the word.",
    "errorRules": [
      {
        "ruleId": "rice_low",
        "scope": "word",
        "targets": [
          "rice"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Keep the final S clear in rice.",
        "action": "show_final_consonant_tip"
      }
    ],
    "successMessage": "Good. The final S in rice was clear.",
    "teacherNotes": "Use as the voiceless member of the rice/rides final-voicing contrast.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      47
    ],
    "contrastWith": [
      47
    ],
    "relatedPractice": [],
    "remediationLinks": [
      90,
      94,
      91,
      113,
      119
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "I like rice.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 47,
    "displayName": "Rice and rides final voicing minimal pair 2",
    "sentence": "I like rides.",
    "audioPromptText": "Listen carefully, then repeat: I like rides.",
    "level": "A1",
    "lessonOrder": 47,
    "module": "final_consonants",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Keep the final voiced ending in rides. Do not say rice.",
    "tags": [
      "final_consonants",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "rice_rides_minimal_pair",
    "targetSounds": [
      "z"
    ],
    "ipaTargets": [
      "/z/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_voiced_ending",
      "plural_s_z",
      "final_s_z",
      "final_voicing"
    ],
    "focusWords": [
      "rides"
    ],
    "thaiErrorPattern": "Thai learners may devoice final English sounds or collapse voiced and voiceless endings, so pairs like rice/rise and bus/buzz need focused practice.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "z",
        "words": [
          "rides"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "rides"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_voiced_ending",
        "words": [
          "rides"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "plural_s_z",
        "words": [
          "rides"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "final_voicing",
        "words": [
          "rides"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If rides loses the voiced ending, contrast rice and rides slowly and listen for the buzzing finish.",
    "errorRules": [
      {
        "ruleId": "rides_low",
        "scope": "word",
        "targets": [
          "rides"
        ],
        "trigger": {
          "wordScoreBelow": 76
        },
        "feedback": "Keep the final voiced ending in rides. Make the ending buzz slightly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Nice work. Your voiced ending in rides was clearer.",
    "teacherNotes": "This is best treated as final voicing and plural -s/-z practice, not just a final cluster item.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      46
    ],
    "contrastWith": [
      46
    ],
    "relatedPractice": [],
    "remediationLinks": [
      94,
      91,
      90,
      113,
      114
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "I like rides.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "z_voicing",
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 48,
    "displayName": "Signature Thai learner drill 1",
    "sentence": "Three very busy visitors think this fresh shrimp is delicious.",
    "audioPromptText": "Listen carefully, then repeat: Three very busy visitors think this fresh shrimp is delicious.",
    "level": "B1",
    "lessonOrder": 48,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 5,
    "instruction": "Focus on TH, V, Z, SH, and the SHR cluster. Keep the sentence controlled and clear.",
    "tags": [
      "signature_drill",
      "th_mixed",
      "v_sound",
      "z_sound",
      "sh_sound",
      "clusters",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "signature_drill",
    "targetSounds": [
      "th_voiceless",
      "th_voiced",
      "v",
      "z",
      "sh"
    ],
    "ipaTargets": [
      "/theta/",
      "/eth/",
      "/v/",
      "/z/",
      "/sh/"
    ],
    "targetFeatures": [
      "initial_cluster_shr",
      "initial_clusters",
      "clusters"
    ],
    "focusWords": [
      "three",
      "very",
      "busy",
      "visitors",
      "think",
      "this",
      "fresh",
      "shrimp",
      "delicious"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "three",
          "very",
          "busy",
          "visitors",
          "think",
          "this",
          "fresh",
          "shrimp",
          "delicious"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "three",
          "very",
          "busy",
          "visitors",
          "think",
          "this",
          "fresh",
          "shrimp",
          "delicious"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "three",
          "very",
          "busy",
          "visitors",
          "think",
          "this",
          "fresh",
          "shrimp",
          "delicious"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "z",
        "words": [
          "three",
          "very",
          "busy",
          "visitors",
          "think",
          "this",
          "fresh",
          "shrimp",
          "delicious"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "sh",
        "words": [
          "three",
          "very",
          "busy",
          "visitors",
          "think",
          "this",
          "fresh",
          "shrimp",
          "delicious"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_shr",
        "words": [
          "three",
          "very",
          "busy",
          "visitors",
          "think",
          "this",
          "fresh",
          "shrimp",
          "delicious"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "three",
          "very",
          "busy",
          "visitors",
          "think",
          "this",
          "fresh",
          "shrimp",
          "delicious"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "three",
          "very",
          "busy",
          "visitors",
          "think",
          "this",
          "fresh",
          "shrimp",
          "delicious"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If multiple sounds fail, score the focus words separately and target the weakest phoneme family first.",
    "errorRules": [
      {
        "ruleId": "signature_multiple_low",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 70
        },
        "feedback": "This sentence combines several difficult sounds. Slow down and focus on one problem word at a time.",
        "action": "split_into_chunks"
      },
      {
        "ruleId": "signature_th_low",
        "scope": "phoneme",
        "targets": [
          "/theta/",
          "/eth/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Your TH sounds need more tongue-between-teeth placement.",
        "action": "retry_focus_words"
      },
      {
        "ruleId": "signature_vz_low",
        "scope": "phoneme",
        "targets": [
          "/v/",
          "/z/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Keep V and Z voiced. You should feel vibration in your throat.",
        "action": "retry_focus_words"
      }
    ],
    "successMessage": "Excellent. You handled several difficult sounds clearly in one sentence.",
    "teacherNotes": "Use this as a mixed diagnostic sentence after learners have already practiced the component sound groups.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      49
    ],
    "contrastWith": [],
    "relatedPractice": [
      49
    ],
    "remediationLinks": [
      85,
      101,
      81,
      102,
      99
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Three very busy visitors think this fresh shrimp is delicious.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "lip_shape_v_w_f",
        "z_voicing",
        "sibilant_affricate_contrast",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 49,
    "displayName": "Signature Thai learner drill 2",
    "sentence": "Students start speaking English clearly in class every Thursday.",
    "audioPromptText": "Listen carefully, then repeat: Students start speaking English clearly in class every Thursday.",
    "level": "B1",
    "lessonOrder": 49,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 5,
    "instruction": "Keep the S clusters tight, the L and R clear, and the TH in Thursday soft and accurate.",
    "tags": [
      "signature_drill",
      "s_clusters",
      "th_voiceless",
      "r_vs_l",
      "final_consonants",
      "stress_rhythm",
      "thai_learners"
    ],
    "pairGroup": "signature_drill",
    "targetSounds": [
      "th_voiceless",
      "r",
      "l"
    ],
    "ipaTargets": [
      "/theta/",
      "/r/",
      "/l/"
    ],
    "targetFeatures": [
      "initial_cluster_st",
      "initial_clusters",
      "clusters",
      "initial_cluster_sp",
      "initial_cluster_kl",
      "final_consonants"
    ],
    "focusWords": [
      "students",
      "start",
      "speaking",
      "clearly",
      "class",
      "every",
      "Thursday"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "students",
          "start",
          "speaking",
          "clearly",
          "class",
          "every",
          "Thursday"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "r",
        "words": [
          "students",
          "start",
          "speaking",
          "clearly",
          "class",
          "every",
          "Thursday"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "l",
        "words": [
          "students",
          "start",
          "speaking",
          "clearly",
          "class",
          "every",
          "Thursday"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "students",
          "start",
          "speaking",
          "clearly",
          "class",
          "every",
          "Thursday"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "students",
          "start",
          "speaking",
          "clearly",
          "class",
          "every",
          "Thursday"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "students",
          "start",
          "speaking",
          "clearly",
          "class",
          "every",
          "Thursday"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_sp",
        "words": [
          "students",
          "start",
          "speaking",
          "clearly",
          "class",
          "every",
          "Thursday"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_kl",
        "words": [
          "students",
          "start",
          "speaking",
          "clearly",
          "class",
          "every",
          "Thursday"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "students",
          "start",
          "speaking",
          "clearly",
          "class",
          "every",
          "Thursday"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the sentence breaks down, divide it into two chunks and restore cluster accuracy before increasing speed.",
    "errorRules": [
      {
        "ruleId": "signature_clusters_low",
        "scope": "word",
        "targets": [
          "students",
          "start",
          "speaking",
          "class"
        ],
        "trigger": {
          "wordScoreBelow": 70
        },
        "feedback": "Keep the consonant clusters together and do not add extra vowels.",
        "action": "split_into_chunks"
      },
      {
        "ruleId": "signature_thursday_low",
        "scope": "word",
        "targets": [
          "Thursday"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Focus on the TH in Thursday. Let the air move softly between your tongue and teeth.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Excellent. You managed clusters, liquids, and TH very clearly.",
    "teacherNotes": "A strong final mixed sentence for review and diagnostics.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      48
    ],
    "contrastWith": [],
    "relatedPractice": [
      48
    ],
    "remediationLinks": [
      85,
      34,
      18,
      101,
      135
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Students start speaking English clearly in class every Thursday.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "r_l_contrast",
        "final_sound_control",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 50,
    "displayName": "NG sound drill 1",
    "sentence": "Sing a long song with the young singer.",
    "audioPromptText": "Listen carefully, then repeat: Sing a long song with the young singer.",
    "level": "A2",
    "lessonOrder": 50,
    "module": "nasals",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Push the back of your tongue up for the NG sound in sing, long, song, young, and singer.",
    "tags": [
      "ng_sound",
      "final_nasal",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "ng_sound_drill",
    "targetSounds": [
      "ng"
    ],
    "ipaTargets": [
      "/ng/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "sing",
      "long",
      "song",
      "young",
      "singer"
    ],
    "thaiErrorPattern": "Thai learners may need focused practice keeping M, N, and NG positions distinct in English words.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "ng",
        "words": [
          "sing",
          "long",
          "song",
          "young",
          "singer"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If NG sounds like N, have the learner close the back of the tongue against the soft palate instead of touching the ridge behind the teeth.",
    "errorRules": [
      {
        "ruleId": "ng_low",
        "scope": "phoneme",
        "targets": [
          "/ŋ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Push the back of your tongue up to make NG. Do not let it become a regular N.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your NG sound was reached with the back of the tongue.",
    "teacherNotes": "Thai has /ŋ/ but only word-finally or in certain positions. English word-final /ŋ/ without a following /g/ release is tricky.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      51
    ],
    "contrastWith": [],
    "relatedPractice": [
      51
    ],
    "remediationLinks": [
      51,
      85,
      98
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Sing a long song with the young singer.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "nasal_place_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 51,
    "displayName": "NG vs N contrast drill",
    "sentence": "Nothing is happening in the morning meeting.",
    "audioPromptText": "Listen carefully, then repeat: Nothing is happening in the morning meeting.",
    "level": "B1",
    "lessonOrder": 51,
    "module": "nasals",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Contrast the N in nothing with the NG in happening, morning, and meeting.",
    "tags": [
      "ng_sound",
      "n_vs_ng",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "ng_sound_drill",
    "targetSounds": [
      "ng",
      "n"
    ],
    "ipaTargets": [
      "/ng/",
      "/n/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "nothing",
      "happening",
      "morning",
      "meeting"
    ],
    "thaiErrorPattern": "Thai learners may need focused practice keeping M, N, and NG positions distinct in English words.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "ng",
        "words": [
          "nothing",
          "happening",
          "morning",
          "meeting"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "n",
        "words": [
          "nothing",
          "happening",
          "morning",
          "meeting"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If N and NG sound the same, alternate nothing and morning and feel the tongue position change.",
    "errorRules": [
      {
        "ruleId": "ng_vs_n_low",
        "scope": "word",
        "targets": [
          "happening",
          "morning"
        ],
        "trigger": {
          "wordScoreBelow": 73
        },
        "feedback": "Keep the NG different from N. The back of the tongue should lift, not the tip.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice. You kept N and NG clearly different.",
    "teacherNotes": "Thai learners may release a /g/ after NG or replace NG with N. Focus on the soft-palate closure.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      50
    ],
    "contrastWith": [],
    "relatedPractice": [
      50
    ],
    "remediationLinks": [
      82,
      98,
      85
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Nothing is happening in the morning meeting.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "nasal_place_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 52,
    "displayName": "ZH sound drill 1",
    "sentence": "I usually watch television after dinner.",
    "audioPromptText": "Listen carefully, then repeat: I usually watch television after dinner.",
    "level": "B1",
    "lessonOrder": 52,
    "module": "zh_sound",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Make ZH buzz like SH but with your voice on in usually and television.",
    "tags": [
      "zh_sound",
      "voiced_fricative",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "zh_sound_drill",
    "targetSounds": [
      "zh"
    ],
    "ipaTargets": [
      "/zh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "usually",
      "television"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "zh",
        "words": [
          "usually",
          "television"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If ZH sounds like SH, start with a long SH sound and switch your voice on midway.",
    "errorRules": [
      {
        "ruleId": "zh_low",
        "scope": "phoneme",
        "targets": [
          "zh"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Turn your voice on for ZH. Start with SH, then add a buzz.",
        "action": "show_articulation_tip"
      },
      {
        "ruleId": "zh_focus_words_low",
        "scope": "word",
        "targets": [
          "usually",
          "television"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Focus on usually and television. Keep the middle sound voiced.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. Your ZH sound had a nice buzz.",
    "teacherNotes": "Rewritten to sound more natural while still targeting /zh/ in common words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      53
    ],
    "contrastWith": [],
    "relatedPractice": [
      53
    ],
    "remediationLinks": [
      53,
      100
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_sound_module",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early. ZH is useful but should be optional or later for Grade 5.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I usually watch television after dinner.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 53,
    "displayName": "ZH sound drill 2",
    "sentence": "The decision caused confusion at the television station.",
    "audioPromptText": "Listen carefully, then repeat: The decision caused confusion at the television station.",
    "level": "B2",
    "lessonOrder": 53,
    "module": "zh_sound",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 5,
    "instruction": "Keep ZH voiced in decision, confusion, and television.",
    "tags": [
      "zh_sound",
      "voiced_fricative",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "zh_sound_drill",
    "targetSounds": [
      "zh",
      "sh"
    ],
    "ipaTargets": [
      "/zh/",
      "/sh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "decision",
      "confusion",
      "television"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "zh",
        "words": [
          "decision",
          "confusion",
          "television"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "sh",
        "words": [
          "decision",
          "confusion",
          "television"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If ZH is devoiced, isolate each target word and buzz the ZH before continuing the word.",
    "errorRules": [
      {
        "ruleId": "zh_words_low",
        "scope": "word",
        "targets": [
          "decision",
          "confusion",
          "television"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Keep the ZH buzzing in the middle of decision, confusion, and television.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Well done. Your ZH sounds were voiced and clear.",
    "teacherNotes": "These words appear often in academic and media contexts. Useful vocabulary for older learners.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      52
    ],
    "contrastWith": [],
    "relatedPractice": [
      52
    ],
    "remediationLinks": [
      93,
      39,
      11,
      52,
      100
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_sound_module",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path. ZH is useful but should be optional or later for Grade 5.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The decision caused confusion at the television station.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 54,
    "displayName": "Diphthong /eɪ/ (day) drill",
    "sentence": "They came late and paid for the train today.",
    "audioPromptText": "Listen carefully, then repeat: They came late and paid for the train today.",
    "level": "A2",
    "lessonOrder": 54,
    "module": "vowels",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Slide from E to EE in came, late, paid, train, and today. Make it one smooth movement.",
    "tags": [
      "diphthong",
      "ey_sound",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "diphthong_drill",
    "targetSounds": [
      "diphthong_face"
    ],
    "ipaTargets": [
      "/ey/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "came",
      "late",
      "paid",
      "train",
      "today"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "diphthong_face",
        "words": [
          "came",
          "late",
          "paid",
          "train",
          "today"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the glide is too short, stretch the vowel in came and move your jaw upward during the sound.",
    "errorRules": [
      {
        "ruleId": "ey_shortened",
        "scope": "phoneme",
        "targets": [
          "/eɪ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Let the vowel glide upward. Do not stop it short like a single sound.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice. Your long A glide sounded smooth.",
    "teacherNotes": "Thai /eː/ is a long monophthong. English /eɪ/ is a diphthong. Learners may shorten it.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      55,
      56,
      57,
      58
    ],
    "contrastWith": [],
    "relatedPractice": [
      55,
      56,
      57,
      58
    ],
    "remediationLinks": [
      162,
      156,
      157,
      158,
      159
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "They came late and paid for the train today.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 55,
    "displayName": "Diphthong /aɪ/ (my) drill",
    "sentence": "I like to ride my bike at night by the bright light.",
    "audioPromptText": "Listen carefully, then repeat: I like to ride my bike at night by the bright light.",
    "level": "A2",
    "lessonOrder": 55,
    "module": "vowels",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Slide from AH to EE in I, like, ride, my, bike, night, bright, and light.",
    "tags": [
      "diphthong",
      "ay_sound",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "diphthong_drill",
    "targetSounds": [
      "diphthong_price"
    ],
    "ipaTargets": [
      "/ay/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "like",
      "ride",
      "my",
      "bike",
      "night",
      "bright",
      "light"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "diphthong_price",
        "words": [
          "like",
          "ride",
          "my",
          "bike",
          "night",
          "bright",
          "light"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the glide is missing, exaggerate the ah-ee movement in my before returning to the sentence.",
    "errorRules": [
      {
        "ruleId": "ay_monophthong",
        "scope": "phoneme",
        "targets": [
          "/aɪ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Slide all the way from AH to EE. Do not stop partway through.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Great. Your long I glide was full and smooth.",
    "teacherNotes": "Thai /aj/ is similar but often shorter. Encourage a full glide from open to close position.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      54,
      56,
      57,
      58
    ],
    "contrastWith": [],
    "relatedPractice": [
      54,
      56,
      57,
      58
    ],
    "remediationLinks": [
      163,
      156,
      157,
      158,
      159
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I like to ride my bike at night by the bright light.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 56,
    "displayName": "Diphthong /oʊ/ (go) drill",
    "sentence": "Don't go home alone on the old road.",
    "audioPromptText": "Listen carefully, then repeat: Don't go home alone on the old road.",
    "level": "A2",
    "lessonOrder": 56,
    "module": "vowels",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Round your lips and slide from O to OO in don't, go, home, alone, old, and road.",
    "tags": [
      "diphthong",
      "ow_sound",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "diphthong_drill",
    "targetSounds": [
      "diphthong_goat"
    ],
    "ipaTargets": [
      "/ow/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "don't",
      "go",
      "home",
      "alone",
      "old",
      "road"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "diphthong_goat",
        "words": [
          "don't",
          "go",
          "home",
          "alone",
          "old",
          "road"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the vowel sounds flat, over-round the lips at the start and glide toward a tighter OO.",
    "errorRules": [
      {
        "ruleId": "ow_flat",
        "scope": "phoneme",
        "targets": [
          "/oʊ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Round your lips more at the start and let the sound glide upward.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your long O glide was round and smooth.",
    "teacherNotes": "Thai /oː/ is monophthongal. English /oʊ/ requires a noticeable lip-rounding glide.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      54,
      55,
      57,
      58
    ],
    "contrastWith": [],
    "relatedPractice": [
      54,
      55,
      57,
      58
    ],
    "remediationLinks": [
      164,
      156,
      157,
      158,
      159
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Don't go home alone on the old road.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 57,
    "displayName": "Diphthong /aʊ/ (now) drill",
    "sentence": "How about going out of town right now?",
    "audioPromptText": "Listen carefully, then repeat: How about going out of town right now?",
    "level": "A2",
    "lessonOrder": 57,
    "module": "vowels",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Slide from AH to OO in how, about, out, town, and now. Open your jaw wide at the start.",
    "tags": [
      "diphthong",
      "aw_sound",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "diphthong_drill",
    "targetSounds": [
      "diphthong_mouth"
    ],
    "ipaTargets": [
      "/aw/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "how",
      "about",
      "out",
      "town",
      "now"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "diphthong_mouth",
        "words": [
          "how",
          "about",
          "out",
          "town",
          "now"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the diphthong is too short, open the mouth wide for the AH start before gliding to OO.",
    "errorRules": [
      {
        "ruleId": "aw_shortened",
        "scope": "phoneme",
        "targets": [
          "/aʊ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Open your mouth wider at the start. Slide from a big AH to a rounded OO.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your OW glide opened wide and closed smoothly.",
    "teacherNotes": "Thai /aw/ is similar but starts with a less open jaw. Encourage a clear two-part glide.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      54,
      55,
      56,
      58
    ],
    "contrastWith": [],
    "relatedPractice": [
      54,
      55,
      56,
      58
    ],
    "remediationLinks": [
      156,
      157,
      158,
      159,
      160
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "How about going out of town right now?",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 58,
    "displayName": "Diphthong /ɔɪ/ (boy) drill",
    "sentence": "The boy enjoyed the noisy toy and the boiling oil.",
    "audioPromptText": "Listen carefully, then repeat: The boy enjoyed the noisy toy and the boiling oil.",
    "level": "B1",
    "lessonOrder": 58,
    "module": "vowels",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Slide from AW to EE in boy, enjoyed, noisy, toy, boiling, and oil.",
    "tags": [
      "diphthong",
      "oy_sound",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "diphthong_drill",
    "targetSounds": [
      "diphthong_choice"
    ],
    "ipaTargets": [
      "/oy/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "boy",
      "enjoyed",
      "noisy",
      "toy",
      "boiling",
      "oil"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "diphthong_choice",
        "words": [
          "boy",
          "enjoyed",
          "noisy",
          "toy",
          "boiling",
          "oil"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If OY sounds like a single vowel, practice the AW-to-EE glide in isolation before the sentence.",
    "errorRules": [
      {
        "ruleId": "oy_monophthong",
        "scope": "phoneme",
        "targets": [
          "/ɔɪ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Slide from AW to EE clearly. Boy should sound like two sounds moving together.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice. Your OY diphthong was clear and two-part.",
    "teacherNotes": "This diphthong does not exist in Thai. Learners may substitute a long /ɔː/.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      54,
      55,
      56,
      57
    ],
    "contrastWith": [],
    "relatedPractice": [
      54,
      55,
      56,
      57
    ],
    "remediationLinks": [
      165,
      156,
      157,
      158,
      159
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "teacher_review",
    "appUse": "teacher_review_before_default",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Usable item, but flagged for teacher review of naturalness, audience fit, or difficulty.",
    "reviewStatusV0_7": "teacher_review",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The boy enjoyed the noisy toy and the boiling oil.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "teacher_review"
  },
  {
    "id": 59,
    "displayName": "P vs B contrast drill",
    "sentence": "Please bring a big plate of bread and butter.",
    "audioPromptText": "Listen carefully, then repeat: Please bring a big plate of bread and butter.",
    "level": "A2",
    "lessonOrder": 59,
    "module": "stop_voicing",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Use a strong puff of air for P. Use your voice from the start for B.",
    "tags": [
      "p_vs_b",
      "stop_voicing",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "stop_voicing_drill",
    "targetSounds": [
      "p",
      "b"
    ],
    "ipaTargets": [
      "/p/",
      "/b/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "please",
      "bring",
      "big",
      "plate",
      "bread",
      "butter"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "p",
        "words": [
          "please",
          "bring",
          "big",
          "plate",
          "bread",
          "butter"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "b",
        "words": [
          "please",
          "bring",
          "big",
          "plate",
          "bread",
          "butter"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Hold a tissue in front of your mouth for P. If it moves, you have aspiration. For B, pre-voice before release.",
    "errorRules": [
      {
        "ruleId": "p_b_confusion",
        "scope": "phoneme",
        "targets": [
          "/p/",
          "/b/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "For P, let out a strong puff of air. For B, start your voice at the same time as your lips open.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your P had good aspiration and your B was voiced.",
    "teacherNotes": "Thai /p/ is unaspirated or lightly aspirated. English /p/ is often strongly aspirated. The tissue test is effective.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      60,
      61,
      62,
      63,
      64
    ],
    "contrastWith": [
      60,
      61,
      62
    ],
    "relatedPractice": [
      63,
      64
    ],
    "remediationLinks": [
      94,
      115,
      116,
      125,
      124
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Please bring a big plate of bread and butter.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 60,
    "displayName": "T vs D contrast drill",
    "sentence": "Tell Dan to take two tickets at the desk.",
    "audioPromptText": "Listen carefully, then repeat: Tell Dan to take two tickets at the desk.",
    "level": "A2",
    "lessonOrder": 60,
    "module": "stop_voicing",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Make T crisp with a puff of air. Start voicing earlier for D.",
    "tags": [
      "t_vs_d",
      "stop_voicing",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "stop_voicing_drill",
    "targetSounds": [
      "t",
      "d"
    ],
    "ipaTargets": [
      "/t/",
      "/d/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "tell",
      "Dan",
      "take",
      "two",
      "tickets",
      "desk"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "t",
        "words": [
          "tell",
          "Dan",
          "take",
          "two",
          "tickets",
          "desk"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "d",
        "words": [
          "tell",
          "Dan",
          "take",
          "two",
          "tickets",
          "desk"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If T and D sound the same, practice ta-ta-ta vs da-da-da in alternation.",
    "errorRules": [
      {
        "ruleId": "t_d_confusion",
        "scope": "phoneme",
        "targets": [
          "/t/",
          "/d/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Put more air behind T. Start vibrating your throat earlier for D.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good contrast. Your T and D sounded clearly different.",
    "teacherNotes": "Thai does not use voicing as a distinctive feature for stops in the same way. Aspiration is the key cue for learners.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      59,
      61,
      62,
      63,
      64
    ],
    "contrastWith": [
      59,
      61,
      62
    ],
    "relatedPractice": [
      63,
      64
    ],
    "remediationLinks": [
      82,
      21,
      104,
      108,
      127
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Tell Dan to take two tickets at the desk.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 61,
    "displayName": "K vs G contrast drill",
    "sentence": "Kate goes to the good garden with a great cake.",
    "audioPromptText": "Listen carefully, then repeat: Kate goes to the good garden with a great cake.",
    "level": "A2",
    "lessonOrder": 61,
    "module": "stop_voicing",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Push air for K in Kate, cake. Voice the G in goes, good, garden, and great.",
    "tags": [
      "k_vs_g",
      "stop_voicing",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "stop_voicing_drill",
    "targetSounds": [
      "k",
      "g"
    ],
    "ipaTargets": [
      "/k/",
      "/g/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "Kate",
      "goes",
      "good",
      "garden",
      "great",
      "cake"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "k",
        "words": [
          "Kate",
          "goes",
          "good",
          "garden",
          "great",
          "cake"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "g",
        "words": [
          "Kate",
          "goes",
          "good",
          "garden",
          "great",
          "cake"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If K and G collapse, produce K with a strong cough-like burst and G with throat vibration from the start.",
    "errorRules": [
      {
        "ruleId": "k_g_confusion",
        "scope": "phoneme",
        "targets": [
          "/k/",
          "/g/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "Cough the K sound out. Let G buzz in your throat.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice. Your K and G contrast was sharp.",
    "teacherNotes": "The cough analogy helps Thai learners feel the aspiration difference.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      59,
      60,
      62,
      63,
      64
    ],
    "contrastWith": [
      59,
      60,
      62
    ],
    "relatedPractice": [
      63,
      64
    ],
    "remediationLinks": [
      44,
      117,
      118,
      129,
      128
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Kate goes to the good garden with a great cake.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 62,
    "displayName": "P B T D minimal pair drill",
    "sentence": "Pat had a bad time at the party.",
    "audioPromptText": "Listen carefully, then repeat: Pat had a bad time at the party.",
    "level": "A2",
    "lessonOrder": 62,
    "module": "stop_voicing",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Keep Pat aspirated, bad voiced, time aspirated, and party aspirated.",
    "tags": [
      "p_vs_b",
      "t_vs_d",
      "stop_voicing",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "stop_voicing_drill",
    "targetSounds": [
      "p",
      "b",
      "t",
      "d"
    ],
    "ipaTargets": [
      "/p/",
      "/b/",
      "/t/",
      "/d/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "Pat",
      "had",
      "bad",
      "time",
      "party"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "p",
        "words": [
          "Pat",
          "had",
          "bad",
          "time",
          "party"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "b",
        "words": [
          "Pat",
          "had",
          "bad",
          "time",
          "party"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "t",
        "words": [
          "Pat",
          "had",
          "bad",
          "time",
          "party"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "d",
        "words": [
          "Pat",
          "had",
          "bad",
          "time",
          "party"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If voiced stops become voiceless, pre-voice each one: b-b-bad, d-d-d (for had).",
    "errorRules": [
      {
        "ruleId": "mixed_stops_low",
        "scope": "word",
        "targets": [
          "bad",
          "time",
          "party"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Keep bad voiced and time and party aspirated. They should feel different.",
        "action": "launch_minimal_pair"
      }
    ],
    "successMessage": "Good. Your voiced and voiceless stops were clearly different.",
    "teacherNotes": "Combines P/B and T/D contrasts in one manageable sentence.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      59,
      60,
      61,
      63,
      64
    ],
    "contrastWith": [
      59,
      60,
      61
    ],
    "relatedPractice": [
      63,
      64
    ],
    "remediationLinks": [
      21,
      94,
      121,
      104,
      108
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "Pat had a bad time at the party.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 63,
    "displayName": "P vs B minimal pair 1",
    "sentence": "I have a pear.",
    "audioPromptText": "Listen carefully, then repeat: I have a pear.",
    "level": "A1",
    "lessonOrder": 63,
    "module": "stop_voicing",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Put a strong puff of air on the P in pear.",
    "tags": [
      "p_vs_b",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "pear_bear_minimal_pair",
    "targetSounds": [
      "p"
    ],
    "ipaTargets": [
      "/p/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "pear"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "p",
        "words": [
          "pear"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If pear sounds like bear, add a stronger puff of air and hold a tissue to see it move.",
    "errorRules": [
      {
        "ruleId": "pear_low",
        "scope": "word",
        "targets": [
          "pear"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Let a strong puff of air out when you say pear.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your P had a nice sharp puff of air.",
    "teacherNotes": "Simple minimal pair. Pair with bear for direct contrast.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      64
    ],
    "contrastWith": [
      64
    ],
    "relatedPractice": [],
    "remediationLinks": [
      94,
      62,
      115,
      125,
      124
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "I have a pear.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 64,
    "displayName": "P vs B minimal pair 2",
    "sentence": "I see a bear.",
    "audioPromptText": "Listen carefully, then repeat: I see a bear.",
    "level": "A1",
    "lessonOrder": 64,
    "module": "stop_voicing",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Start your voice right away for the B in bear.",
    "tags": [
      "p_vs_b",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "pear_bear_minimal_pair",
    "targetSounds": [
      "b"
    ],
    "ipaTargets": [
      "/b/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "bear"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "b",
        "words": [
          "bear"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If bear sounds like pear, start vibrating your throat before you open your lips.",
    "errorRules": [
      {
        "ruleId": "bear_low",
        "scope": "word",
        "targets": [
          "bear"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Let your voice start right when your lips open for bear.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your B was clearly voiced from the start.",
    "teacherNotes": "Pairs directly with pear above.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      63
    ],
    "contrastWith": [
      63
    ],
    "relatedPractice": [],
    "remediationLinks": [
      95,
      62,
      116,
      44,
      59
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "I see a bear.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 65,
    "displayName": "Triple S cluster drill 1",
    "sentence": "She splashed through the stream with a strong stride.",
    "audioPromptText": "Listen carefully, then repeat: She splashed through the stream with a strong stride.",
    "level": "B2",
    "lessonOrder": 65,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 5,
    "instruction": "Keep SPL, STR, and STR together. Do not add vowels between the consonants.",
    "tags": [
      "s_clusters",
      "triple_cluster",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "triple_cluster_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_spl",
      "initial_clusters",
      "clusters",
      "triple_clusters",
      "initial_cluster_str",
      "initial_cluster_thr"
    ],
    "focusWords": [
      "splashed",
      "through",
      "stream",
      "strong",
      "stride"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_spl",
        "words": [
          "splashed",
          "through",
          "stream",
          "strong",
          "stride"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "splashed",
          "through",
          "stream",
          "strong",
          "stride"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "splashed",
          "through",
          "stream",
          "strong",
          "stride"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "splashed",
          "through",
          "stream",
          "strong",
          "stride"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_str",
        "words": [
          "splashed",
          "through",
          "stream",
          "strong",
          "stride"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_thr",
        "words": [
          "splashed",
          "through",
          "stream",
          "strong",
          "stride"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If triple clusters break, practice them as slow-motion sequences: s-p-l, s-t-r.",
    "errorRules": [
      {
        "ruleId": "triple_cluster_low",
        "scope": "word",
        "targets": [
          "splashed",
          "stream",
          "stride"
        ],
        "trigger": {
          "wordScoreBelow": 68
        },
        "feedback": "Keep all three consonants together. Do not add a vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Excellent. You held those three-consonant clusters together.",
    "teacherNotes": "These are the hardest cluster type for Thai learners. Slow-motion build-up helps.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      66,
      67,
      68
    ],
    "contrastWith": [],
    "relatedPractice": [
      66,
      67,
      68
    ],
    "remediationLinks": [
      66,
      18,
      101,
      81,
      137
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "She splashed through the stream with a strong stride.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 66,
    "displayName": "Triple cluster drill 2",
    "sentence": "The screen displayed a splendid spring scene.",
    "audioPromptText": "Listen carefully, then repeat: The screen displayed a splendid spring scene.",
    "level": "B1",
    "lessonOrder": 66,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 4,
    "instruction": "Keep SCR together in screen. Keep SPL together in splendid and SPR in spring.",
    "tags": [
      "s_clusters",
      "triple_cluster",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "triple_cluster_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_skr",
      "initial_clusters",
      "clusters",
      "triple_clusters",
      "initial_cluster_spl",
      "initial_cluster_spr"
    ],
    "focusWords": [
      "screen",
      "splendid",
      "spring",
      "scene"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_skr",
        "words": [
          "screen",
          "splendid",
          "spring",
          "scene"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "screen",
          "splendid",
          "spring",
          "scene"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "screen",
          "splendid",
          "spring",
          "scene"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "screen",
          "splendid",
          "spring",
          "scene"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_spl",
        "words": [
          "screen",
          "splendid",
          "spring",
          "scene"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_spr",
        "words": [
          "screen",
          "splendid",
          "spring",
          "scene"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the cluster splits, train each word in isolation: s-c-r-ee-n, s-p-l-en-did.",
    "errorRules": [
      {
        "ruleId": "scr_spl_spr_low",
        "scope": "word",
        "targets": [
          "screen",
          "splendid",
          "spring"
        ],
        "trigger": {
          "wordScoreBelow": 70
        },
        "feedback": "Start each word directly with the three-consonant cluster. No extra vowels.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Nice. Your SCR, SPL, and SPR clusters were tight.",
    "teacherNotes": "Useful for practicing multiple triple-cluster patterns in one sentence.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      65,
      67,
      68
    ],
    "contrastWith": [],
    "relatedPractice": [
      65,
      67,
      68
    ],
    "remediationLinks": [
      101,
      81,
      84,
      17,
      136
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The screen displayed a splendid spring scene.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 67,
    "displayName": "Triple cluster drill 3",
    "sentence": "He screamed when the squirrel scratched the screen.",
    "audioPromptText": "Listen carefully, then repeat: He screamed when the squirrel scratched the screen.",
    "level": "B2",
    "lessonOrder": 67,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 5,
    "instruction": "Keep SCR in screamed and screen. Keep SKW in squirrel.",
    "tags": [
      "s_clusters",
      "triple_cluster",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "triple_cluster_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_skr",
      "initial_clusters",
      "clusters",
      "triple_clusters",
      "initial_cluster_skw"
    ],
    "focusWords": [
      "screamed",
      "squirrel",
      "scratched",
      "screen"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_skr",
        "words": [
          "screamed",
          "squirrel",
          "scratched",
          "screen"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "screamed",
          "squirrel",
          "scratched",
          "screen"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "screamed",
          "squirrel",
          "scratched",
          "screen"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "screamed",
          "squirrel",
          "scratched",
          "screen"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_skw",
        "words": [
          "screamed",
          "squirrel",
          "scratched",
          "screen"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If SKW becomes two syllables, practice squirrel as one beat: skw-ir-rel.",
    "errorRules": [
      {
        "ruleId": "skw_low",
        "scope": "word",
        "targets": [
          "squirrel"
        ],
        "trigger": {
          "wordScoreBelow": 68
        },
        "feedback": "Start squirrel with the SKW cluster. It should be one smooth start, not two syllables.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. Your SCR and SKW clusters stayed together.",
    "teacherNotes": "SKW is especially hard because Thai has no similar cluster. Use beat-counting.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      65,
      66,
      68
    ],
    "contrastWith": [],
    "relatedPractice": [
      65,
      66,
      68
    ],
    "remediationLinks": [
      66,
      18,
      101,
      81,
      139
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "He screamed when the squirrel scratched the screen.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 68,
    "displayName": "Triple cluster drill 4",
    "sentence": "A strange split second of screaming split the silence.",
    "audioPromptText": "Listen carefully, then repeat: A strange split second of screaming split the silence.",
    "level": "C1",
    "lessonOrder": 68,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "mixed",
    "difficultyScore": 6,
    "instruction": "Keep STR in strange. Keep SPL in split. Keep SCR in screaming. This is advanced.",
    "tags": [
      "s_clusters",
      "triple_cluster",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "triple_cluster_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_str",
      "initial_clusters",
      "clusters",
      "triple_clusters",
      "initial_cluster_spl",
      "initial_cluster_skr"
    ],
    "focusWords": [
      "strange",
      "split",
      "second",
      "screaming",
      "silence"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_str",
        "words": [
          "strange",
          "split",
          "second",
          "screaming",
          "silence"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "strange",
          "split",
          "second",
          "screaming",
          "silence"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "strange",
          "split",
          "second",
          "screaming",
          "silence"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "strange",
          "split",
          "second",
          "screaming",
          "silence"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_spl",
        "words": [
          "strange",
          "split",
          "second",
          "screaming",
          "silence"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_skr",
        "words": [
          "strange",
          "split",
          "second",
          "screaming",
          "silence"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the sentence is too dense, split it at the pause: A strange split second | of screaming split the silence.",
    "errorRules": [
      {
        "ruleId": "dense_clusters_low",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 68
        },
        "feedback": "This sentence is very dense. Slow down and separate into two breathing groups.",
        "action": "split_into_chunks"
      }
    ],
    "successMessage": "Outstanding. You handled multiple difficult clusters in one dense sentence.",
    "teacherNotes": "A capstone cluster sentence. Only use after learners are comfortable with individual cluster types.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      65,
      66,
      67
    ],
    "contrastWith": [],
    "relatedPractice": [
      65,
      66,
      67
    ],
    "remediationLinks": [
      66,
      65,
      18,
      67,
      137
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "A strange split second of screaming split the silence.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 69,
    "displayName": "Linking drill 1",
    "sentence": "Put it on the table and eat an apple.",
    "audioPromptText": "Listen carefully, then repeat: Put it on the table and eat an apple.",
    "level": "A2",
    "lessonOrder": 69,
    "module": "connected_speech",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Link the words together: pu-ti-ton, table-and-eat, ea-ta-napple. Do not pause between them.",
    "tags": [
      "connected_speech",
      "linking",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "linking",
      "connected_speech"
    ],
    "focusWords": [
      "put it on",
      "eat an",
      "table and"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural English linking and reductions difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "linking",
        "words": [
          "put it on",
          "eat an",
          "table and"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "put it on",
          "eat an",
          "table and"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If words are too separate, practice each linked group slowly as one continuous string.",
    "errorRules": [
      {
        "ruleId": "no_linking",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 72
        },
        "feedback": "Connect the words. Do not put a break between put and it, or eat and an.",
        "action": "shadow_with_rhythm"
      }
    ],
    "successMessage": "Nice. Your words flowed together naturally.",
    "teacherNotes": "Thai is syllable-timed with little linking. English linking across word boundaries is a major rhythm difference.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      70,
      71,
      72
    ],
    "contrastWith": [],
    "relatedPractice": [
      70,
      71,
      72
    ],
    "remediationLinks": [
      82,
      29,
      148,
      149,
      150
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "Put it on the table and eat an apple.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 70,
    "displayName": "Linking and reduction drill",
    "sentence": "What are you going to do about it?",
    "audioPromptText": "Listen carefully, then repeat: What are you going to do about it?",
    "level": "A2",
    "lessonOrder": 70,
    "module": "connected_speech",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Reduce 'going to' to 'gonna' and link 'what are' to 'whaddya'. Make it sound like one smooth question.",
    "tags": [
      "connected_speech",
      "reduction",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "linking",
      "reduction",
      "connected_speech"
    ],
    "focusWords": [
      "what are you",
      "going to",
      "about it"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural English linking and reductions difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "linking",
        "words": [
          "what are you",
          "going to",
          "about it"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "reduction",
        "words": [
          "what are you",
          "going to",
          "about it"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "what are you",
          "going to",
          "about it"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If every word is pronounced fully, teach the reduced forms explicitly: gonna, wanna, whaddya.",
    "errorRules": [
      {
        "ruleId": "over_articulated",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 70
        },
        "feedback": "Try the natural reduced forms: whaddya, gonna. Smooth it out.",
        "action": "show_rhythm_tip"
      }
    ],
    "successMessage": "Good. You used natural English reductions.",
    "teacherNotes": "Thai learners often pronounce every word fully. Teaching common reductions improves naturalness dramatically.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      69,
      71,
      72
    ],
    "contrastWith": [],
    "relatedPractice": [
      69,
      71,
      72
    ],
    "remediationLinks": [
      82,
      29,
      148,
      149,
      150
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "What are you going to do about it?",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 71,
    "displayName": "Assimilation drill",
    "sentence": "Can you pass me that sandwich?",
    "audioPromptText": "Listen carefully, then repeat: Can you pass me that sandwich?",
    "level": "B1",
    "lessonOrder": 71,
    "module": "connected_speech",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 4,
    "instruction": "Let 'can you' blend naturally. Let 'that sandwich' connect smoothly without a gap.",
    "tags": [
      "connected_speech",
      "assimilation",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "assimilation",
      "connected_speech"
    ],
    "focusWords": [
      "can you",
      "pass me",
      "that sandwich"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural English linking and reductions difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "assimilation",
        "words": [
          "can you",
          "pass me",
          "that sandwich"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "can you",
          "pass me",
          "that sandwich"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If word boundaries are too sharp, practice the middle pairs: can-you, that-sandwich as one word.",
    "errorRules": [
      {
        "ruleId": "sharp_boundaries",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 72
        },
        "feedback": "Let the words blend into each other. Can-you should sound almost like one word.",
        "action": "shadow_with_rhythm"
      }
    ],
    "successMessage": "Nice flow. Your words blended together smoothly.",
    "teacherNotes": "Assimilation across word boundaries (can you -> can-chu) is a natural feature of fast English.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      69,
      70,
      72
    ],
    "contrastWith": [],
    "relatedPractice": [
      69,
      70,
      72
    ],
    "remediationLinks": [
      29,
      70,
      69,
      151,
      148
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "Can you pass me that sandwich?",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 72,
    "displayName": "Elision drill",
    "sentence": "I don't know what he wants to see next week.",
    "audioPromptText": "Listen carefully, then repeat: I don't know what he wants to see next week.",
    "level": "B1",
    "lessonOrder": 72,
    "module": "connected_speech",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 4,
    "instruction": "Drop the T in don't before know. Let wants to blend naturally. Let next week connect.",
    "tags": [
      "connected_speech",
      "elision",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "elision",
      "connected_speech",
      "clusters"
    ],
    "focusWords": [
      "don't know",
      "wants to",
      "next week"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "elision",
        "words": [
          "don't know",
          "wants to",
          "next week"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "don't know",
          "wants to",
          "next week"
        ],
        "threshold": 75
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "don't know",
          "wants to",
          "next week"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If every consonant is pronounced, show that native speakers often drop the T in don't know and blend the T in next week.",
    "errorRules": [
      {
        "ruleId": "over_pronounced",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 70
        },
        "feedback": "Try softening or dropping some consonant releases. Don't know can sound like don-know.",
        "action": "show_rhythm_tip"
      }
    ],
    "successMessage": "Great. Your connected speech sounded more like natural English.",
    "teacherNotes": "Elision of /t/ in clusters like next week and don't know is very common. Teach it explicitly.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      69,
      70,
      71
    ],
    "contrastWith": [],
    "relatedPractice": [
      69,
      70,
      71
    ],
    "remediationLinks": [
      101,
      81,
      29,
      84,
      153
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "I don't know what he wants to see next week.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control",
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 73,
    "displayName": "Falling intonation drill",
    "sentence": "I finished my homework yesterday.",
    "audioPromptText": "Listen carefully, then repeat: I finished my homework yesterday.",
    "level": "A1",
    "lessonOrder": 73,
    "module": "intonation",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 2,
    "instruction": "Let your voice fall at the end. Statements go down in English.",
    "tags": [
      "intonation",
      "falling",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "intonation_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "falling_intonation",
      "falling_statement_intonation",
      "intonation"
    ],
    "focusWords": [
      "finished",
      "yesterday"
    ],
    "thaiErrorPattern": "Thai learners may transfer Thai tone habits into English intonation patterns.",
    "scoringTargets": [
      {
        "type": "teacher_or_prosody",
        "target": "falling_intonation",
        "words": [
          "finished",
          "yesterday"
        ],
        "threshold": 75
      },
      {
        "type": "teacher_or_prosody",
        "target": "falling_statement_intonation",
        "words": [
          "finished",
          "yesterday"
        ],
        "threshold": 75
      },
      {
        "type": "teacher_or_prosody",
        "target": "intonation",
        "words": [
          "finished",
          "yesterday"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the voice stays flat or rises, draw a downward arrow in the air and match your voice to it.",
    "errorRules": [
      {
        "ruleId": "flat_statement",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 74
        },
        "feedback": "Let your voice drop at the end of the statement. English statements go down.",
        "action": "shadow_with_rhythm"
      }
    ],
    "successMessage": "Good. Your voice fell naturally at the end of the statement.",
    "teacherNotes": "Thai uses tone lexically but English uses intonation for meaning. Statement falling intonation is a good starting point.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      74,
      75,
      76
    ],
    "contrastWith": [],
    "relatedPractice": [
      74,
      75,
      76
    ],
    "remediationLinks": [
      75,
      74,
      76
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "I finished my homework yesterday.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "intonation_teacher_review"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 74,
    "displayName": "Rising intonation drill",
    "sentence": "Did you finish your homework yesterday?",
    "audioPromptText": "Listen carefully, then repeat: Did you finish your homework yesterday?",
    "level": "A1",
    "lessonOrder": 74,
    "module": "intonation",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 2,
    "instruction": "Let your voice rise at the end. Yes/no questions go up in English.",
    "tags": [
      "intonation",
      "rising",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "intonation_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "rising_intonation",
      "yes_no_question_intonation",
      "intonation"
    ],
    "focusWords": [
      "yesterday"
    ],
    "thaiErrorPattern": "Thai learners may transfer Thai tone habits into English intonation patterns.",
    "scoringTargets": [
      {
        "type": "teacher_or_prosody",
        "target": "rising_intonation",
        "words": [
          "yesterday"
        ],
        "threshold": 75
      },
      {
        "type": "teacher_or_prosody",
        "target": "yes_no_question_intonation",
        "words": [
          "yesterday"
        ],
        "threshold": 75
      },
      {
        "type": "teacher_or_prosody",
        "target": "intonation",
        "words": [
          "yesterday"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the voice falls instead of rises, draw an upward arrow and match your pitch to it.",
    "errorRules": [
      {
        "ruleId": "flat_question",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 74
        },
        "feedback": "Let your voice go up at the end for this yes/no question.",
        "action": "shadow_with_rhythm"
      }
    ],
    "successMessage": "Good. Your voice rose at the end of the question.",
    "teacherNotes": "Pair with entry 73 to show statement vs question contrast on the same words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      73,
      75,
      76
    ],
    "contrastWith": [],
    "relatedPractice": [
      73,
      75,
      76
    ],
    "remediationLinks": [
      73,
      75,
      76
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "Did you finish your homework yesterday?",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "intonation_teacher_review"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 75,
    "displayName": "WH-question intonation drill",
    "sentence": "What time does the class start tomorrow?",
    "audioPromptText": "Listen carefully, then repeat: What time does the class start tomorrow?",
    "level": "A2",
    "lessonOrder": 75,
    "module": "intonation",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 3,
    "instruction": "WH-questions go down at the end, like statements. Stress what, time, class, and start.",
    "tags": [
      "intonation",
      "wh_question",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "intonation_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "falling_intonation",
      "wh_question_intonation",
      "word_stress",
      "intonation"
    ],
    "focusWords": [
      "what",
      "time",
      "class",
      "start",
      "tomorrow"
    ],
    "thaiErrorPattern": "Thai learners may give syllables equal weight instead of using English stress timing and vowel reduction.",
    "scoringTargets": [
      {
        "type": "teacher_or_prosody",
        "target": "falling_intonation",
        "words": [
          "what",
          "time",
          "class",
          "start",
          "tomorrow"
        ],
        "threshold": 75
      },
      {
        "type": "teacher_or_prosody",
        "target": "wh_question_intonation",
        "words": [
          "what",
          "time",
          "class",
          "start",
          "tomorrow"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "word_stress",
        "words": [
          "what",
          "time",
          "class",
          "start",
          "tomorrow"
        ],
        "threshold": 75
      },
      {
        "type": "teacher_or_prosody",
        "target": "intonation",
        "words": [
          "what",
          "time",
          "class",
          "start",
          "tomorrow"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the voice rises incorrectly, contrast with a yes/no question to highlight the difference.",
    "errorRules": [
      {
        "ruleId": "wh_rise_error",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 72
        },
        "feedback": "WH-questions go down at the end, not up. Think of it like a statement.",
        "action": "shadow_with_rhythm"
      }
    ],
    "successMessage": "Correct. Your WH-question had falling intonation like a statement.",
    "teacherNotes": "Thai learners often give all questions rising intonation. WH-questions with falling intonation need explicit practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      73,
      74,
      76
    ],
    "contrastWith": [],
    "relatedPractice": [
      73,
      74,
      76
    ],
    "remediationLinks": [
      73,
      74,
      76,
      96,
      77
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "What time does the class start tomorrow?",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "stress_and_rhythm",
        "intonation_teacher_review"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 76,
    "displayName": "List and choice intonation drill",
    "sentence": "I need apples, bananas, oranges, and grapes.",
    "audioPromptText": "Listen carefully, then repeat: I need apples, bananas, oranges, and grapes.",
    "level": "A2",
    "lessonOrder": 76,
    "module": "intonation",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 3,
    "instruction": "Let your voice rise on each item, then fall on the last one. Rise on apples, bananas, oranges, and fall on grapes.",
    "tags": [
      "intonation",
      "listing",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "intonation_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "list_intonation",
      "rise_fall_intonation",
      "intonation"
    ],
    "focusWords": [
      "apples",
      "bananas",
      "oranges",
      "grapes"
    ],
    "thaiErrorPattern": "Thai learners may transfer Thai tone habits into English intonation patterns.",
    "scoringTargets": [
      {
        "type": "teacher_or_prosody",
        "target": "list_intonation",
        "words": [
          "apples",
          "bananas",
          "oranges",
          "grapes"
        ],
        "threshold": 75
      },
      {
        "type": "teacher_or_prosody",
        "target": "rise_fall_intonation",
        "words": [
          "apples",
          "bananas",
          "oranges",
          "grapes"
        ],
        "threshold": 75
      },
      {
        "type": "teacher_or_prosody",
        "target": "intonation",
        "words": [
          "apples",
          "bananas",
          "oranges",
          "grapes"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If all items sound flat, use hand gestures: hand up for each item, hand down for the last.",
    "errorRules": [
      {
        "ruleId": "flat_list",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 72
        },
        "feedback": "Your voice should rise on each item except the last, which falls. Try the hand gesture method.",
        "action": "shadow_with_rhythm"
      }
    ],
    "successMessage": "Nice. Your list intonation rose and fell correctly.",
    "teacherNotes": "List intonation is a clear, teachable pattern that generalizes to many situations.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      73,
      74,
      75
    ],
    "contrastWith": [],
    "relatedPractice": [
      73,
      74,
      75
    ],
    "remediationLinks": [
      74,
      73,
      75,
      31
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "I need apples, bananas, oranges, and grapes.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "intonation_teacher_review"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 77,
    "displayName": "Two-syllable word stress drill",
    "sentence": "The record is on the table. Please record the lesson.",
    "audioPromptText": "Listen carefully, then repeat: The record is on the table. Please record the lesson.",
    "level": "B1",
    "lessonOrder": 77,
    "module": "stress_and_rhythm",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 4,
    "instruction": "Stress the first syllable in REcord (noun). Stress the second syllable in reCORD (verb).",
    "tags": [
      "word_stress",
      "noun_verb",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "word_stress_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "word_stress",
      "noun_verb_stress_shift"
    ],
    "focusWords": [
      "record",
      "record"
    ],
    "thaiErrorPattern": "Thai learners may give syllables equal weight instead of using English stress timing and vowel reduction.",
    "scoringTargets": [
      {
        "type": "prosody_or_word",
        "target": "word_stress",
        "words": [
          "record",
          "record"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "noun_verb_stress_shift",
        "words": [
          "record",
          "record"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If both sound the same, clap the stressed syllable: RE-cord (clap on RE), re-CORD (clap on CORD).",
    "errorRules": [
      {
        "ruleId": "stress_placement",
        "scope": "word",
        "targets": [
          "record"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Noun: REcord. Verb: reCORD. Change the stress to change the meaning.",
        "action": "show_rhythm_tip"
      }
    ],
    "successMessage": "Good. Your noun and verb stress patterns were different.",
    "teacherNotes": "Thai is not a stress-timed language, so stress placement for meaning is a new concept.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      78,
      79,
      80
    ],
    "contrastWith": [],
    "relatedPractice": [
      78,
      79,
      80
    ],
    "remediationLinks": [
      96,
      75,
      78,
      80,
      79
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Audit: over-flagged as teacher_review; approved for Grade 5 default autopilot after review.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "The record is on the table. Please record the lesson.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "stress_and_rhythm"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 78,
    "displayName": "Stress shift drill",
    "sentence": "Please present the present to the class.",
    "audioPromptText": "Listen carefully, then repeat: Please present the present to the class.",
    "level": "B1",
    "lessonOrder": 78,
    "module": "stress_and_rhythm",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 4,
    "instruction": "preSENT (verb, stress on second syllable). PRESent (noun, stress on first syllable).",
    "tags": [
      "word_stress",
      "noun_verb",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "word_stress_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "word_stress",
      "noun_verb_stress_shift"
    ],
    "focusWords": [
      "present",
      "present"
    ],
    "thaiErrorPattern": "Thai learners may give syllables equal weight instead of using English stress timing and vowel reduction.",
    "scoringTargets": [
      {
        "type": "prosody_or_word",
        "target": "word_stress",
        "words": [
          "present",
          "present"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "noun_verb_stress_shift",
        "words": [
          "present",
          "present"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the stress is the same, practice the pair in isolation: PRE-sent, pre-SENT.",
    "errorRules": [
      {
        "ruleId": "present_stress",
        "scope": "word",
        "targets": [
          "present"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Verb: preSENT. Noun: PRESent. Notice where the strong beat falls.",
        "action": "show_rhythm_tip"
      }
    ],
    "successMessage": "Correct. Your stress shift changed the meaning clearly.",
    "teacherNotes": "Many English noun/verb pairs shift stress. Explicit practice builds awareness.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      77,
      79,
      80
    ],
    "contrastWith": [],
    "relatedPractice": [
      77,
      79,
      80
    ],
    "remediationLinks": [
      96,
      75,
      77,
      80,
      79
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "Please present the present to the class.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "stress_and_rhythm"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 79,
    "displayName": "Three-syllable stress drill",
    "sentence": "The photographer took a photograph of the photographic equipment.",
    "audioPromptText": "Listen carefully, then repeat: The photographer took a photograph of the photographic equipment.",
    "level": "B2",
    "lessonOrder": 79,
    "module": "stress_and_rhythm",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 5,
    "instruction": "phoTOgrapher (stress on TO). PHOtograph (stress on PHO). photoGRAPHic (stress on GRAPH).",
    "tags": [
      "word_stress",
      "suffix_stress",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "word_stress_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "word_stress",
      "suffix_stress_shift"
    ],
    "focusWords": [
      "photographer",
      "photograph",
      "photographic"
    ],
    "thaiErrorPattern": "Thai learners may give syllables equal weight instead of using English stress timing and vowel reduction.",
    "scoringTargets": [
      {
        "type": "prosody_or_word",
        "target": "word_stress",
        "words": [
          "photographer",
          "photograph",
          "photographic"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "suffix_stress_shift",
        "words": [
          "photographer",
          "photograph",
          "photographic"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If all three sound the same, isolate each one and clap the strong syllable.",
    "errorRules": [
      {
        "ruleId": "photo_stress",
        "scope": "word",
        "targets": [
          "photographer",
          "photograph",
          "photographic"
        ],
        "trigger": {
          "wordScoreBelow": 68
        },
        "feedback": "Each form shifts stress. phoTOgrapher, PHOtograph, photoGRAPHic.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Excellent. You navigated three different stress patterns in one word family.",
    "teacherNotes": "Stress shifts with suffixes are unpredictable in English. Teach common patterns: -graphy, -ic, -ical pull stress.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      77,
      78,
      80
    ],
    "contrastWith": [],
    "relatedPractice": [
      77,
      78,
      80
    ],
    "remediationLinks": [
      96,
      75,
      80,
      78,
      77
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "The photographer took a photograph of the photographic equipment.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "stress_and_rhythm"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 80,
    "displayName": "Compound word stress drill",
    "sentence": "The greenhouse is a green house near the blackboard.",
    "audioPromptText": "Listen carefully, then repeat: The greenhouse is a green house near the blackboard.",
    "level": "B1",
    "lessonOrder": 80,
    "module": "stress_and_rhythm",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 4,
    "instruction": "GREENhouse (compound: stress first word). green HOUSE (phrase: stress second word). BLACKboard (compound).",
    "tags": [
      "word_stress",
      "compound",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "word_stress_drill",
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "word_stress",
      "compound_stress"
    ],
    "focusWords": [
      "greenhouse",
      "green house",
      "blackboard"
    ],
    "thaiErrorPattern": "Thai learners may give syllables equal weight instead of using English stress timing and vowel reduction.",
    "scoringTargets": [
      {
        "type": "prosody_or_word",
        "target": "word_stress",
        "words": [
          "greenhouse",
          "green house",
          "blackboard"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "compound_stress",
        "words": [
          "greenhouse",
          "green house",
          "blackboard"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the compound and phrase sound the same, contrast them: a GREENhouse vs a green HOUSE.",
    "errorRules": [
      {
        "ruleId": "compound_stress",
        "scope": "word",
        "targets": [
          "greenhouse",
          "blackboard"
        ],
        "trigger": {
          "wordScoreBelow": 72
        },
        "feedback": "Compounds stress the first word. Phrases stress the second. GREENhouse vs green HOUSE.",
        "action": "show_rhythm_tip"
      }
    ],
    "successMessage": "Nice. You correctly stressed the compound nouns on the first word.",
    "teacherNotes": "Compound stress is a reliable pattern. Teach WHITEboard, BLACKboard, NOTEbook as a set.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      77,
      78,
      79
    ],
    "contrastWith": [],
    "relatedPractice": [
      77,
      78,
      79
    ],
    "remediationLinks": [
      96,
      75,
      77,
      78,
      79
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "The greenhouse is a green house near the blackboard.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "stress_and_rhythm"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 81,
    "displayName": "Classroom phrase drill",
    "sentence": "May I please go to the bathroom?",
    "audioPromptText": "Listen carefully, then repeat: May I please go to the bathroom?",
    "level": "A1",
    "lessonOrder": 81,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 2,
    "instruction": "Use polite rising intonation. Stress please and bathroom. Keep the TH in bathroom soft.",
    "tags": [
      "classroom",
      "daily_phrase",
      "polite",
      "thai_learners"
    ],
    "pairGroup": "daily_phrases_drill",
    "targetSounds": [
      "th_voiceless",
      "th_voiced"
    ],
    "ipaTargets": [
      "/theta/",
      "/eth/"
    ],
    "targetFeatures": [
      "initial_cluster_pl",
      "initial_clusters",
      "clusters",
      "polite_intonation",
      "real_world"
    ],
    "focusWords": [
      "please",
      "the",
      "bathroom"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "bathroom"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "the"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_pl",
        "words": [
          "please"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "please"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "please"
        ],
        "threshold": 74
      },
      {
        "type": "teacher_or_prosody",
        "target": "polite_intonation",
        "words": [
          "please"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "please",
          "the",
          "bathroom"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If bathroom loses the TH, isolate bath and practice the tongue-between-teeth before adding room.",
    "errorRules": [
      {
        "ruleId": "bathroom_th",
        "scope": "word",
        "targets": [
          "bathroom"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the TH soft in bathroom. Tongue between the teeth for bath.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. A polite, clear classroom request.",
    "teacherNotes": "High-frequency classroom phrase. Students need this to be clear and intelligible.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      82,
      83,
      84,
      85
    ],
    "contrastWith": [],
    "relatedPractice": [
      82,
      83,
      84,
      85
    ],
    "remediationLinks": [
      101,
      85,
      124,
      126,
      128
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "May I please go to the bathroom?",
      "scoringModes": [
        "sentence_score",
        "teacher_prosody_review"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "cluster_control",
        "intonation_teacher_review",
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 82,
    "displayName": "Introduction phrase drill",
    "sentence": "Hello, my name is Mina. Nice to meet you.",
    "audioPromptText": "Listen carefully, then repeat: Hello, my name is Mina. Nice to meet you.",
    "level": "A1",
    "lessonOrder": 82,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 2,
    "instruction": "Stress name and nice. Link nice to meet. Keep the final T in meet light but present.",
    "tags": [
      "daily_phrase",
      "introduction",
      "thai_learners"
    ],
    "pairGroup": "daily_phrases_drill",
    "targetSounds": [
      "m",
      "n",
      "t"
    ],
    "ipaTargets": [
      "/m/",
      "/n/",
      "/t/"
    ],
    "targetFeatures": [
      "linking",
      "real_world"
    ],
    "focusWords": [
      "hello",
      "name",
      "nice",
      "meet"
    ],
    "thaiErrorPattern": "Thai learners may need focused practice keeping M, N, and NG positions distinct in English words.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "m",
        "words": [
          "hello",
          "name",
          "nice",
          "meet"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "n",
        "words": [
          "hello",
          "name",
          "nice",
          "meet"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "t",
        "words": [
          "hello",
          "name",
          "nice",
          "meet"
        ],
        "threshold": 70
      },
      {
        "type": "word_or_sentence",
        "target": "linking",
        "words": [
          "hello",
          "name",
          "nice",
          "meet"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If meet loses the T, hold the tongue at the ridge briefly before releasing.",
    "errorRules": [
      {
        "ruleId": "meet_final_t",
        "scope": "word",
        "targets": [
          "meet"
        ],
        "trigger": {
          "wordScoreBelow": 76
        },
        "feedback": "Finish meet with a light T. Do not let it disappear.",
        "action": "show_final_consonant_tip"
      }
    ],
    "successMessage": "Nice. Your introduction sounded clear and friendly.",
    "teacherNotes": "A core survival phrase. The app may later replace Mina with the learner's name if custom pronunciation scoring is supported.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "templateRole": "example_name_phrase",
    "templateVariableNotes": "Mina is a safe example name. For student personalization, replace with the learner name only when the scoring API supports the expected custom text.",
    "legacyPairWith": [
      81,
      83,
      84,
      85
    ],
    "contrastWith": [],
    "relatedPractice": [
      81,
      83,
      84,
      85
    ],
    "remediationLinks": [
      62,
      104,
      127,
      126,
      148
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Hello, my name is Mina. Nice to meet you.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "nasal_place_contrast",
        "connected_speech",
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": true,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 83,
    "displayName": "Shopping phrase drill",
    "sentence": "How much does this cost? I would like to buy three of these.",
    "audioPromptText": "Listen carefully, then repeat: How much does this cost? I would like to buy three of these.",
    "level": "A2",
    "lessonOrder": 83,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 3,
    "instruction": "Keep TH in this and these soft. Use the voiced TH in these. Link would like naturally.",
    "tags": [
      "daily_phrase",
      "shopping",
      "th_mixed",
      "thai_learners"
    ],
    "pairGroup": "daily_phrases_drill",
    "targetSounds": [
      "th_voiceless",
      "th_voiced",
      "v"
    ],
    "ipaTargets": [
      "/theta/",
      "/eth/",
      "/v/"
    ],
    "targetFeatures": [
      "linking",
      "real_world"
    ],
    "focusWords": [
      "this",
      "three",
      "these"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "this",
          "three",
          "these"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "this",
          "three",
          "these"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "this",
          "three",
          "these"
        ],
        "threshold": 70
      },
      {
        "type": "word_or_sentence",
        "target": "linking",
        "words": [
          "this",
          "three",
          "these"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If this and these sound the same, contrast the short I in this with the long EE in these.",
    "errorRules": [
      {
        "ruleId": "this_these",
        "scope": "word",
        "targets": [
          "this",
          "these"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "This has a short I. These has a long EE. Make them different.",
        "action": "launch_minimal_pair"
      }
    ],
    "successMessage": "Good. Your shopping phrases were clear and natural.",
    "teacherNotes": "Combines TH practice with a real-world scenario. Useful for older learners and travelers.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      81,
      82,
      84,
      85
    ],
    "contrastWith": [],
    "relatedPractice": [
      81,
      82,
      84,
      85
    ],
    "remediationLinks": [
      82,
      81,
      43,
      41,
      85
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful classroom communication phrase. Long sentence. Use after shorter practice.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "How much does this cost? I would like to buy three of these.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "lip_shape_v_w_f",
        "connected_speech",
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 84,
    "displayName": "Phone call drill",
    "sentence": "Could you please speak more slowly? I cannot hear you very well.",
    "audioPromptText": "Listen carefully, then repeat: Could you please speak more slowly? I cannot hear you very well.",
    "level": "A2",
    "lessonOrder": 84,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 3,
    "instruction": "Keep SP in speak tight. Use V in very well. Link cannot hear smoothly.",
    "tags": [
      "daily_phrase",
      "phone",
      "clusters",
      "thai_learners"
    ],
    "pairGroup": "daily_phrases_drill",
    "targetSounds": [
      "v",
      "w"
    ],
    "ipaTargets": [
      "/v/",
      "/w/"
    ],
    "targetFeatures": [
      "initial_cluster_sp",
      "initial_clusters",
      "clusters",
      "linking",
      "real_world"
    ],
    "focusWords": [
      "speak",
      "very",
      "well"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "very"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "w",
        "words": [
          "well"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_sp",
        "words": [
          "speak"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "speak"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "speak"
        ],
        "threshold": 74
      },
      {
        "type": "word_or_sentence",
        "target": "linking",
        "words": [
          "speak",
          "very",
          "well"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "speak",
          "very",
          "well"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If very well becomes wery well, isolate very and practice the teeth-to-lip V.",
    "errorRules": [
      {
        "ruleId": "very_well",
        "scope": "word",
        "targets": [
          "very",
          "well"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep V and W different. Very uses teeth on lip. Well uses rounded lips.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. This phone phrase was clear and polite.",
    "teacherNotes": "A practical survival phrase. Phone conversations remove visual cues, so clear pronunciation matters more.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      81,
      82,
      83,
      85
    ],
    "contrastWith": [],
    "relatedPractice": [
      81,
      82,
      83,
      85
    ],
    "remediationLinks": [
      81,
      101,
      82,
      43,
      124
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Could you please speak more slowly? I cannot hear you very well.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f",
        "cluster_control",
        "connected_speech",
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 85,
    "displayName": "Opinion phrase drill",
    "sentence": "I think that this is a very interesting question.",
    "audioPromptText": "Listen carefully, then repeat: I think that this is a very interesting question.",
    "level": "B1",
    "lessonOrder": 85,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 4,
    "instruction": "Combine TH (think, this), V (very), and intonation. Let the sentence flow as one thought.",
    "tags": [
      "daily_phrase",
      "opinion",
      "mixed",
      "thai_learners"
    ],
    "pairGroup": "daily_phrases_drill",
    "targetSounds": [
      "th_voiceless",
      "th_voiced",
      "v",
      "ng"
    ],
    "ipaTargets": [
      "/theta/",
      "/eth/",
      "/v/",
      "/ng/"
    ],
    "targetFeatures": [
      "real_world"
    ],
    "focusWords": [
      "think",
      "this",
      "very",
      "interesting"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "think"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "this"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "very"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "ng",
        "words": [
          "interesting"
        ],
        "threshold": 70
      },
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "think",
          "this",
          "very",
          "interesting"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If multiple sounds fail, target the weakest one from the focus words list first.",
    "errorRules": [
      {
        "ruleId": "mixed_daily",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 70
        },
        "feedback": "This sentence combines several tricky sounds. Slow down and focus on each target word.",
        "action": "split_into_chunks"
      }
    ],
    "successMessage": "Well done. You combined multiple difficult sounds in a natural opinion phrase.",
    "teacherNotes": "A useful classroom phrase that practices several problem sounds at once.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      81,
      82,
      83,
      84
    ],
    "contrastWith": [],
    "relatedPractice": [
      81,
      82,
      83,
      84
    ],
    "remediationLinks": [
      81,
      84,
      83,
      101,
      48
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I think that this is a very interesting question.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "lip_shape_v_w_f",
        "nasal_place_contrast",
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 86,
    "displayName": "TH tongue twister",
    "sentence": "Thirty-three thirsty thieves thought they thanked the thoughtful theatre teacher.",
    "audioPromptText": "Listen carefully, then repeat: Thirty-three thirsty thieves thought they thanked the thoughtful theatre teacher.",
    "level": "C1",
    "lessonOrder": 86,
    "module": "th_sounds",
    "practiceStage": "challenge",
    "skillType": "segmental",
    "difficultyScore": 6,
    "instruction": "Every major word starts or contains TH. Keep the tongue between the teeth throughout.",
    "tags": [
      "tongue_twister",
      "th_sound",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "tongue_twisters_drill",
    "targetSounds": [
      "th_voiceless",
      "th_voiced"
    ],
    "ipaTargets": [
      "/theta/",
      "/eth/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "thirty",
      "three",
      "thirsty",
      "thieves",
      "thought",
      "thanked",
      "thoughtful",
      "theatre",
      "teacher",
      "they",
      "the"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "thirty",
          "three",
          "thirsty",
          "thieves",
          "thought",
          "thanked",
          "thoughtful",
          "theatre"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "they",
          "the"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Start very slowly. Say each TH word in isolation, then pair two, then three, then the full sentence.",
    "errorRules": [
      {
        "ruleId": "twister_th",
        "scope": "phoneme",
        "targets": [
          "/θ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 65
        },
        "feedback": "Slow way down. Focus on one TH word at a time.",
        "action": "retry_focus_words"
      }
    ],
    "successMessage": "Impressive. You navigated a very TH-dense tongue twister.",
    "teacherNotes": "Tongue twisters build muscle memory. Use for warm-ups, not assessment.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      87,
      88,
      89
    ],
    "contrastWith": [],
    "relatedPractice": [
      87,
      88,
      89
    ],
    "remediationLinks": [
      101,
      81,
      1,
      102,
      103
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path. Tongue-twister style item. Keep optional.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Thirty-three thirsty thieves thought they thanked the thoughtful theatre teacher.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 87,
    "displayName": "R vs L tongue twister",
    "sentence": "Red lorry, yellow lorry, red lorry, yellow lorry.",
    "audioPromptText": "Listen carefully, then repeat: Red lorry, yellow lorry, red lorry, yellow lorry.",
    "level": "B1",
    "lessonOrder": 87,
    "module": "r_l",
    "practiceStage": "challenge",
    "skillType": "segmental",
    "difficultyScore": 5,
    "instruction": "Alternate R and L rapidly. Red starts with R. Lorry and yellow start with L. Keep them distinct.",
    "tags": [
      "tongue_twister",
      "r_vs_l",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "tongue_twisters_drill",
    "targetSounds": [
      "r",
      "l"
    ],
    "ipaTargets": [
      "/r/",
      "/l/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "red",
      "lorry",
      "yellow"
    ],
    "thaiErrorPattern": "Thai learners may have difficulty keeping English R and L distinct, especially in clusters and final positions.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "r",
        "words": [
          "red",
          "lorry",
          "yellow"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "l",
        "words": [
          "red",
          "lorry",
          "yellow"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If R and L merge, slow to half speed and say red (tongue back) then lorry (tongue forward).",
    "errorRules": [
      {
        "ruleId": "twister_rl",
        "scope": "phoneme",
        "targets": [
          "/r/",
          "/l/"
        ],
        "trigger": {
          "phonemeScoreBelow": 65
        },
        "feedback": "Separate R and L clearly. Red = tongue back. Lorry = tongue touches ridge.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Well done. You kept R and L distinct at speed.",
    "teacherNotes": "A classic tongue twister that is directly relevant for Thai learners.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      86,
      88,
      89
    ],
    "contrastWith": [],
    "relatedPractice": [
      86,
      88,
      89
    ],
    "remediationLinks": [
      102,
      36,
      33,
      34,
      49
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path. Tongue-twister style item. Keep optional.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Red lorry, yellow lorry, red lorry, yellow lorry.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "r_l_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 88,
    "displayName": "V vs W tongue twister",
    "sentence": "Very well, we will visit the lovely village when we have five free weekends.",
    "audioPromptText": "Listen carefully, then repeat: Very well, we will visit the lovely village when we have five free weekends.",
    "level": "B2",
    "lessonOrder": 88,
    "module": "v_w_f",
    "practiceStage": "challenge",
    "skillType": "segmental",
    "difficultyScore": 5,
    "instruction": "Keep V (teeth on lip) and W (rounded lips) completely separate throughout.",
    "tags": [
      "tongue_twister",
      "v_vs_w",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "tongue_twisters_drill",
    "targetSounds": [
      "v",
      "w"
    ],
    "ipaTargets": [
      "/v/",
      "/w/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "very",
      "well",
      "we",
      "will",
      "visit",
      "lovely",
      "village",
      "when",
      "have",
      "five",
      "free",
      "weekends"
    ],
    "thaiErrorPattern": "Thai learners may merge V, W, and F because Thai uses different lip and voicing contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "very",
          "well",
          "we",
          "will",
          "visit",
          "lovely",
          "village",
          "when",
          "have",
          "five",
          "free",
          "weekends"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "w",
        "words": [
          "very",
          "well",
          "we",
          "will",
          "visit",
          "lovely",
          "village",
          "when",
          "have",
          "five",
          "free",
          "weekends"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If V becomes W or W becomes V, pause and alternate the two sounds: v-v-v, w-w-w, v-v-v before the sentence.",
    "errorRules": [
      {
        "ruleId": "twister_vw",
        "scope": "phoneme",
        "targets": [
          "/v/",
          "/w/"
        ],
        "trigger": {
          "phonemeScoreBelow": 65
        },
        "feedback": "Keep the teeth-lip contact for V and the lip-rounding for W completely separate.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Excellent. Your V and W stayed distinct through many switches.",
    "teacherNotes": "The rapid V-W alternation builds the muscle memory Thai learners need.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      86,
      87,
      89
    ],
    "contrastWith": [],
    "relatedPractice": [
      86,
      87,
      89
    ],
    "remediationLinks": [
      84,
      8,
      43,
      42,
      40
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path. Tongue-twister style item. Keep optional.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Very well, we will visit the lovely village when we have five free weekends.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "lip_shape_v_w_f"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 89,
    "displayName": "S vs SH tongue twister",
    "sentence": "She sells sea shells by the sea shore. The shells she sells are surely seashells.",
    "audioPromptText": "Listen carefully, then repeat: She sells sea shells by the sea shore. The shells she sells are surely seashells.",
    "level": "B2",
    "lessonOrder": 89,
    "module": "s_z_sh_ch_j",
    "practiceStage": "challenge",
    "skillType": "segmental",
    "difficultyScore": 5,
    "instruction": "Keep S (tongue forward, smile) and SH (tongue back, lips rounded) clearly different.",
    "tags": [
      "tongue_twister",
      "s_vs_sh",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "tongue_twisters_drill",
    "targetSounds": [
      "s",
      "sh"
    ],
    "ipaTargets": [
      "/s/",
      "/sh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "she",
      "sells",
      "sea",
      "shells",
      "shore",
      "surely",
      "seashells"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "she",
          "sells",
          "sea",
          "shells",
          "shore",
          "surely",
          "seashells"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "sh",
        "words": [
          "she",
          "sells",
          "sea",
          "shells",
          "shore",
          "surely",
          "seashells"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If S and SH merge, practice the contrast: see vs she, sell vs shell before returning to the twister.",
    "errorRules": [
      {
        "ruleId": "twister_ssh",
        "scope": "phoneme",
        "targets": [
          "/s/",
          "/ʃ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 65
        },
        "feedback": "Move your tongue forward for S and back for SH. Keep them from blending together.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Great. You kept S and SH clearly separate through the classic tongue twister.",
    "teacherNotes": "The most famous English tongue twister. Fun and effective for S-SH contrast.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      86,
      87,
      88
    ],
    "contrastWith": [],
    "relatedPractice": [
      86,
      87,
      88
    ],
    "remediationLinks": [
      93,
      90,
      46,
      39,
      106
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "optional_challenge",
    "appUse": "optional_challenge",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Useful challenge item, but too dense or advanced for the default Grade 5 path. Tongue-twister style item. Keep optional.",
    "reviewStatusV0_7": "optional_challenge",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "She sells sea shells by the sea shore. The shells she sells are surely seashells.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "optional_challenge"
  },
  {
    "id": 90,
    "displayName": "Final -s vs -z minimal pair 1",
    "sentence": "I saw a bus.",
    "audioPromptText": "Listen carefully, then repeat: I saw a bus.",
    "level": "A1",
    "lessonOrder": 90,
    "module": "final_consonants",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Keep the final S in bus voiceless. No vibration.",
    "tags": [
      "final_consonants",
      "s_vs_z",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "bus_buzz_minimal_pair",
    "targetSounds": [
      "s"
    ],
    "ipaTargets": [
      "/s/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_s_z"
    ],
    "focusWords": [
      "bus"
    ],
    "thaiErrorPattern": "Thai learners may devoice final English sounds or collapse voiced and voiceless endings, so pairs like rice/rise and bus/buzz need focused practice.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "bus"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "bus"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_s_z",
        "words": [
          "bus"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If bus gains voicing, make it a sharp, whispered S at the end.",
    "errorRules": [
      {
        "ruleId": "bus_s",
        "scope": "word",
        "targets": [
          "bus"
        ],
        "trigger": {
          "wordScoreBelow": 80
        },
        "feedback": "Keep the final S in bus quiet and voiceless. No throat vibration.",
        "action": "show_final_consonant_tip"
      }
    ],
    "successMessage": "Good. The S in bus was crisp and voiceless.",
    "teacherNotes": "Pairs with buzz for voiced contrast.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      91
    ],
    "contrastWith": [
      91
    ],
    "relatedPractice": [],
    "remediationLinks": [
      46,
      94,
      44,
      113,
      119
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "I saw a bus.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 91,
    "displayName": "Final -s vs -z minimal pair 2",
    "sentence": "I heard a buzz.",
    "audioPromptText": "Listen carefully, then repeat: I heard a buzz.",
    "level": "A1",
    "lessonOrder": 91,
    "module": "final_consonants",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Voice the final ZZ in buzz. Feel your throat vibrate.",
    "tags": [
      "final_consonants",
      "s_vs_z",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "bus_buzz_minimal_pair",
    "targetSounds": [
      "z"
    ],
    "ipaTargets": [
      "/z/"
    ],
    "targetFeatures": [
      "final_consonants"
    ],
    "focusWords": [
      "buzz"
    ],
    "thaiErrorPattern": "Thai learners may devoice Z to S, especially in final position.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "z",
        "words": [
          "buzz"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "buzz"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If buzz becomes bus, hold the Z sound longer: buzzzzz. Place a hand on your throat to feel the vibration.",
    "errorRules": [
      {
        "ruleId": "buzz_z",
        "scope": "word",
        "targets": [
          "buzz"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Let your throat buzz for the final Z. It should feel different from bus.",
        "action": "show_final_consonant_tip"
      }
    ],
    "successMessage": "Good. The Z in buzz had a clear voiced buzz.",
    "teacherNotes": "The throat-touch technique is effective for teaching voicing contrasts.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      90
    ],
    "contrastWith": [
      90
    ],
    "relatedPractice": [],
    "remediationLinks": [
      94,
      46,
      44,
      114,
      120
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "I heard a buzz.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "z_voicing",
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 92,
    "displayName": "CH vs SH minimal pair 1",
    "sentence": "Do you want a chair?",
    "audioPromptText": "Listen carefully, then repeat: Do you want a chair?",
    "level": "A1",
    "lessonOrder": 92,
    "module": "s_z_sh_ch_j",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Make CH sharp with a quick stop and release. chair = t + share.",
    "tags": [
      "ch_affricate",
      "sh_vs_ch",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "chair_share_minimal_pair",
    "targetSounds": [
      "ch_affricate"
    ],
    "ipaTargets": [
      "/ch/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "chair"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "ch_affricate",
        "words": [
          "chair"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If chair sounds like share, add a clear T-stop at the start of the word.",
    "errorRules": [
      {
        "ruleId": "chair_ch",
        "scope": "word",
        "targets": [
          "chair"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Start chair with a quick T-like stop, then release into the SH sound.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your CH in chair was sharp and distinct.",
    "teacherNotes": "The T+SH breakdown helps learners feel the affricate structure.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      93
    ],
    "contrastWith": [
      93
    ],
    "relatedPractice": [],
    "remediationLinks": [
      13,
      15,
      25
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "Do you want a chair?",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 93,
    "displayName": "CH vs SH minimal pair 2",
    "sentence": "Do you want a share?",
    "audioPromptText": "Listen carefully, then repeat: Do you want a share?",
    "level": "A1",
    "lessonOrder": 93,
    "module": "s_z_sh_ch_j",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Make SH soft and continuous. share should have no hard stop at the start.",
    "tags": [
      "sh_sound",
      "sh_vs_ch",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "chair_share_minimal_pair",
    "targetSounds": [
      "sh"
    ],
    "ipaTargets": [
      "/sh/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "share"
    ],
    "thaiErrorPattern": "Thai learners may substitute nearby S, CH, SH, or J sounds because some English fricatives and affricates are not native contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "sh",
        "words": [
          "share"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If share has a hard start, begin with a long ssshhh sound and then add the rest of the word.",
    "errorRules": [
      {
        "ruleId": "share_sh",
        "scope": "word",
        "targets": [
          "share"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Share starts soft, like shhh. No hard stop like CH.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your SH in share was soft and smooth.",
    "teacherNotes": "The soft-start cue helps learners contrast with the hard CH.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      92
    ],
    "contrastWith": [
      92
    ],
    "relatedPractice": [],
    "remediationLinks": [
      39,
      11,
      25,
      48,
      53
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "Do you want a share?",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "sibilant_affricate_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 94,
    "displayName": "Final stop voicing minimal pair cup",
    "sentence": "Please hand me the cup.",
    "audioPromptText": "Listen carefully, then repeat: Please hand me the cup.",
    "level": "A1",
    "lessonOrder": 94,
    "module": "final_consonants",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Close the final P in cup cleanly. Do not let it fade away.",
    "tags": [
      "final_consonants",
      "stop_release",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "cup_cub_final_voicing_pair",
    "targetSounds": [
      "p"
    ],
    "ipaTargets": [
      "/p/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_stop_voicing"
    ],
    "focusWords": [
      "cup"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "p",
        "words": [
          "cup"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "cup"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_stop_voicing",
        "words": [
          "cup"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the final P disappears, hold the P closure for a moment before releasing.",
    "errorRules": [
      {
        "ruleId": "cup_final_p",
        "scope": "word",
        "targets": [
          "cup"
        ],
        "trigger": {
          "wordScoreBelow": 80
        },
        "feedback": "Finish cup with a clear P. Close your lips and release.",
        "action": "show_final_consonant_tip"
      }
    ],
    "successMessage": "Good. The final P in cup was clear.",
    "teacherNotes": "This is final stop voicing practice, not a final consonant cluster.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      95
    ],
    "contrastWith": [
      95
    ],
    "relatedPractice": [],
    "remediationLinks": [
      91,
      90,
      63,
      115,
      116
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "Please hand me the cup.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 95,
    "displayName": "Final stop voicing minimal pair cub",
    "sentence": "Please hand me the cub.",
    "audioPromptText": "Listen carefully, then repeat: Please hand me the cub.",
    "level": "A1",
    "lessonOrder": 95,
    "module": "final_consonants",
    "practiceStage": "minimal_pair",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Voice the final B in cub. Keep your throat vibrating through the closure.",
    "tags": [
      "final_consonants",
      "voiced_stop",
      "minimal_pair_style",
      "thai_learners"
    ],
    "pairGroup": "cup_cub_final_voicing_pair",
    "targetSounds": [
      "b"
    ],
    "ipaTargets": [
      "/b/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_stop_voicing",
      "final_voicing"
    ],
    "focusWords": [
      "cub"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless stops can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "b",
        "words": [
          "cub"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "cub"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_stop_voicing",
        "words": [
          "cub"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "final_voicing",
        "words": [
          "cub"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If cub sounds like cup, pre-voice: say cubbb with a long voiced B before shortening it.",
    "errorRules": [
      {
        "ruleId": "cub_final_b",
        "scope": "word",
        "targets": [
          "cub"
        ],
        "trigger": {
          "wordScoreBelow": 78
        },
        "feedback": "Let your voice continue through the B in cub. Do not cut it off like cup.",
        "action": "show_final_consonant_tip"
      }
    ],
    "successMessage": "Good. The final B in cub was clearly voiced.",
    "teacherNotes": "This is final stop voicing practice, not a final consonant cluster.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      94
    ],
    "contrastWith": [
      94
    ],
    "relatedPractice": [],
    "remediationLinks": [
      91,
      90,
      64,
      116,
      118
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "Please hand me the cub.",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 96,
    "displayName": "Schwa sound drill",
    "sentence": "The teacher gave a lesson about an animal.",
    "audioPromptText": "Listen carefully, then repeat: The teacher gave a lesson about an animal.",
    "level": "A2",
    "lessonOrder": 96,
    "module": "schwa_and_reduction",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Use a weak, relaxed vowel in unstressed syllables. Do not make every vowel full and strong.",
    "tags": [
      "schwa",
      "weak_forms",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "schwa_drill",
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "word_stress",
      "weak_forms"
    ],
    "focusWords": [
      "teacher",
      "lesson",
      "about",
      "animal"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "teacher",
          "lesson",
          "about",
          "animal"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "word_stress",
        "words": [
          "teacher",
          "lesson",
          "about",
          "animal"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "teacher",
          "lesson",
          "about",
          "animal"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If all vowels sound full, relax the jaw and shorten the unstressed syllables to a quick uh sound.",
    "errorRules": [
      {
        "ruleId": "full_vowels",
        "scope": "syllable",
        "targets": [
          "teacher",
          "about",
          "problem"
        ],
        "trigger": {
          "syllableScoreBelow": 70
        },
        "feedback": "Unstressed syllables should be short and relaxed. Say them as a quick uh.",
        "action": "show_rhythm_tip"
      }
    ],
    "successMessage": "Nice. Your unstressed syllables were short and relaxed.",
    "teacherNotes": "Rewritten from a less natural schwa sentence. Useful for weak vowels in teacher, lesson, about, and animal.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      97,
      98
    ],
    "contrastWith": [],
    "relatedPractice": [
      97,
      98
    ],
    "remediationLinks": [
      29,
      144,
      145,
      146,
      147
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "The teacher gave a lesson about an animal.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction",
        "stress_and_rhythm"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 97,
    "displayName": "Schwa in function words drill",
    "sentence": "I can see a man and a woman at the station.",
    "audioPromptText": "Listen carefully, then repeat: I can see a man and a woman at the station.",
    "level": "A2",
    "lessonOrder": 97,
    "module": "schwa_and_reduction",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Reduce can, a, and, at, and the to short weak sounds: c'n, uh, 'n, uht, thuh.",
    "tags": [
      "schwa",
      "function_words",
      "suprasegmental",
      "thai_learners"
    ],
    "pairGroup": "schwa_drill",
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "function_word_reduction"
    ],
    "focusWords": [
      "can",
      "a",
      "and",
      "at",
      "the"
    ],
    "thaiErrorPattern": "Thai learners may shorten English vowel glides or give full vowels to weak syllables.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "can",
          "a",
          "and",
          "at",
          "the"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "function_word_reduction",
        "words": [
          "can",
          "a",
          "and",
          "at",
          "the"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If function words are too strong, whisper them and only give full voice to see, man, woman, station.",
    "errorRules": [
      {
        "ruleId": "strong_function",
        "scope": "word",
        "targets": [
          "can",
          "a",
          "and",
          "at",
          "the"
        ],
        "trigger": {
          "wordScoreBelow": 68
        },
        "feedback": "Make the small words short and weak. Only stress see, man, woman, station.",
        "action": "show_rhythm_tip"
      }
    ],
    "successMessage": "Good. Your function words were reduced and the content words stood out.",
    "teacherNotes": "Function word reduction is one of the biggest differences between Thai-accented and native English rhythm.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "patched_v0.4_needs_teacher_review",
    "legacyPairWith": [
      96,
      98
    ],
    "contrastWith": [],
    "relatedPractice": [
      96,
      98
    ],
    "remediationLinks": [
      145,
      146,
      147,
      140,
      141
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "I can see a man and a woman at the station.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 98,
    "displayName": "M vs N vs NG nasal contrast drill",
    "sentence": "My name is Ming. I am coming in the morning.",
    "audioPromptText": "Listen carefully, then repeat: My name is Ming. I am coming in the morning.",
    "level": "B1",
    "lessonOrder": 98,
    "module": "nasals",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "M uses both lips. N uses tongue tip on ridge. NG uses back of tongue on soft palate.",
    "tags": [
      "nasal",
      "m_n_ng",
      "segmental",
      "thai_learners"
    ],
    "pairGroup": "schwa_drill",
    "targetSounds": [
      "m",
      "n",
      "ng"
    ],
    "ipaTargets": [
      "/m/",
      "/n/",
      "/ng/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "my",
      "name",
      "Ming",
      "am",
      "coming",
      "in",
      "morning"
    ],
    "thaiErrorPattern": "Thai learners may need focused practice keeping M, N, and NG positions distinct in English words.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "m",
        "words": [
          "my",
          "name",
          "Ming",
          "am",
          "coming",
          "in",
          "morning"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "n",
        "words": [
          "my",
          "name",
          "Ming",
          "am",
          "coming",
          "in",
          "morning"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "ng",
        "words": [
          "my",
          "name",
          "Ming",
          "am",
          "coming",
          "in",
          "morning"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If the nasals sound alike, touch your lips for M, tongue tip for N, and feel the back of the tongue lift for NG.",
    "errorRules": [
      {
        "ruleId": "nasal_confusion",
        "scope": "phoneme",
        "targets": [
          "/m/",
          "/n/",
          "/ŋ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 68
        },
        "feedback": "M = lips closed. N = tongue tip on ridge. NG = back of tongue up. Feel the difference.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Well done. Your three nasal sounds were clearly different.",
    "teacherNotes": "Thai has all three nasal phonemes but their distribution differs. Word-final NG without /g/ release is the main focus.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      96,
      97
    ],
    "contrastWith": [],
    "relatedPractice": [
      96,
      97
    ],
    "remediationLinks": [
      82,
      50,
      51,
      85
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "My name is Ming. I am coming in the morning.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "nasal_place_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 99,
    "displayName": "Full-spectrum advanced diagnostic 1",
    "sentence": "Throughout their journey, the three adventurous visitors discovered breathtaking views of the shimmering ocean.",
    "audioPromptText": "Listen carefully, then repeat: Throughout their journey, the three adventurous visitors discovered breathtaking views of the shimmering ocean.",
    "level": "C1",
    "lessonOrder": 99,
    "module": "diagnostics",
    "practiceStage": "diagnostic",
    "skillType": "diagnostic",
    "difficultyScore": 7,
    "instruction": "This is a capstone sentence. It tests TH (/θ/, /ð/), V, Z, SH, J, clusters, stress, and rhythm all at once.",
    "tags": [
      "advanced_diagnostic",
      "full_spectrum",
      "mixed",
      "thai_learners"
    ],
    "pairGroup": "advanced_diagnostics",
    "targetSounds": [
      "th_voiceless",
      "th_voiced",
      "v",
      "z",
      "sh",
      "j_affricate"
    ],
    "ipaTargets": [
      "/theta/",
      "/eth/",
      "/v/",
      "/z/",
      "/sh/",
      "/dzh/"
    ],
    "targetFeatures": [
      "initial_cluster_str",
      "initial_clusters",
      "clusters",
      "triple_clusters",
      "initial_cluster_thr",
      "initial_cluster_kl",
      "diagnostic"
    ],
    "focusWords": [
      "throughout",
      "their",
      "journey",
      "three",
      "adventurous",
      "visitors",
      "discovered",
      "breathtaking",
      "views",
      "shimmering",
      "ocean"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "z",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "sh",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "j_affricate",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_str",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_thr",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_kl",
        "words": [
          "throughout",
          "their",
          "journey",
          "three",
          "adventurous",
          "visitors",
          "discovered",
          "breathtaking",
          "views",
          "shimmering",
          "ocean"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Score the sentence first. Identify the lowest-scoring focus word, practice it in isolation, then rebuild.",
    "errorRules": [
      {
        "ruleId": "full_diag_threshold",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 65
        },
        "feedback": "This is very challenging. Practice in two halves: first half through visitors, second half from discovered.",
        "action": "split_into_chunks"
      },
      {
        "ruleId": "full_diag_th",
        "scope": "phoneme",
        "targets": [
          "/θ/",
          "/ð/"
        ],
        "trigger": {
          "phonemeScoreBelow": 65
        },
        "feedback": "Your TH sounds need work. Go back to the TH practice sentences first.",
        "action": "retry_focus_words"
      },
      {
        "ruleId": "full_diag_vz",
        "scope": "phoneme",
        "targets": [
          "/v/",
          "/z/"
        ],
        "trigger": {
          "phonemeScoreBelow": 65
        },
        "feedback": "Your voiced fricatives need more vibration. Practice V and Z in isolation.",
        "action": "retry_focus_words"
      }
    ],
    "successMessage": "Outstanding. You demonstrated strong control across the full range of Thai-learner problem sounds.",
    "teacherNotes": "Use this as a periodic diagnostic to measure progress across all problem areas.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      100
    ],
    "contrastWith": [],
    "relatedPractice": [
      100
    ],
    "remediationLinks": [
      48,
      85,
      65,
      18,
      100
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "teacher_only",
    "appUse": "diagnostic_or_teacher_tool",
    "studentVisible": false,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Teacher-facing, diagnostic, or placement item. Do not show in the normal student lesson path.",
    "reviewStatusV0_7": "teacher_only",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Throughout their journey, the three adventurous visitors discovered breathtaking views of the shimmering ocean.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "lip_shape_v_w_f",
        "z_voicing",
        "sibilant_affricate_contrast",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 1,
        "afterFail": "teacher_review",
        "afterPass": "record_only"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "teacher_only"
  },
  {
    "id": 100,
    "displayName": "Full-spectrum advanced diagnostic 2",
    "sentence": "The thoughtful student shared her valuable research with the international judging committee last Thursday.",
    "audioPromptText": "Listen carefully, then repeat: The thoughtful student shared her valuable research with the international judging committee last Thursday.",
    "level": "C1",
    "lessonOrder": 100,
    "module": "diagnostics",
    "practiceStage": "diagnostic",
    "skillType": "diagnostic",
    "difficultyScore": 7,
    "instruction": "Tests TH, ST, SH, V, ZH, J, final clusters, and stress. A comprehensive academic-style sentence.",
    "tags": [
      "advanced_diagnostic",
      "full_spectrum",
      "academic",
      "thai_learners"
    ],
    "pairGroup": "advanced_diagnostics",
    "targetSounds": [
      "th_voiceless",
      "sh",
      "v",
      "ch_affricate",
      "j_affricate"
    ],
    "ipaTargets": [
      "/theta/",
      "/sh/",
      "/v/",
      "/ch/",
      "/dzh/"
    ],
    "targetFeatures": [
      "initial_cluster_st",
      "initial_clusters",
      "clusters",
      "initial_cluster_kl",
      "initial_cluster_str",
      "triple_clusters",
      "diagnostic"
    ],
    "focusWords": [
      "thoughtful",
      "student",
      "shared",
      "valuable",
      "research",
      "international",
      "judging",
      "committee",
      "Thursday"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "thoughtful",
          "Thursday"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "sh",
        "words": [
          "shared"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "valuable"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "ch_affricate",
        "words": [
          "research"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "j_affricate",
        "words": [
          "judging"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "student"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "student"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "student",
          "committee"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "diagnostic",
        "words": [
          "thoughtful",
          "student",
          "shared",
          "valuable",
          "research",
          "judging",
          "committee",
          "Thursday"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Identify the two lowest-scoring words, pull them out for isolated practice, then reinsert.",
    "errorRules": [
      {
        "ruleId": "diag2_overall",
        "scope": "sentence",
        "targets": [
          "sentence"
        ],
        "trigger": {
          "sentenceScoreBelow": 65
        },
        "feedback": "Very challenging. Try half the sentence first, then the second half.",
        "action": "split_into_chunks"
      },
      {
        "ruleId": "diag2_sh_zh_j",
        "scope": "phoneme",
        "targets": [
          "/ʃ/",
          "/ʒ/",
          "/dʒ/"
        ],
        "trigger": {
          "phonemeScoreBelow": 65
        },
        "feedback": "Your SH, ZH, and J sounds need more distinction. Practice the SH-CH-J continuum.",
        "action": "retry_focus_words"
      }
    ],
    "successMessage": "Excellent work. Your academic English pronunciation showed real control.",
    "teacherNotes": "Academic-style vocabulary makes this suitable for university students and professionals.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      99
    ],
    "contrastWith": [],
    "relatedPractice": [
      99
    ],
    "remediationLinks": [
      85,
      18,
      49,
      48,
      99
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "teacher_only",
    "appUse": "diagnostic_or_teacher_tool",
    "studentVisible": false,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Teacher-facing, diagnostic, or placement item. Do not show in the normal student lesson path.",
    "reviewStatusV0_7": "teacher_only",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The thoughtful student shared her valuable research with the international judging committee last Thursday.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "lip_shape_v_w_f",
        "sibilant_affricate_contrast",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 1,
        "afterFail": "teacher_review",
        "afterPass": "record_only"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "teacher_only"
  },
  {
    "id": 101,
    "displayName": "Teacher classroom instruction drill 1",
    "sentence": "Please open your books to page thirty-three.",
    "audioPromptText": "Listen carefully, then repeat: Please open your books to page thirty-three.",
    "level": "A1",
    "lessonOrder": 101,
    "module": "teacher_modeling",
    "practiceStage": "teacher_modeling",
    "skillType": "teacher_modeling",
    "difficultyScore": 2,
    "instruction": "This is a common classroom phrase. Stress open, books, page, and thirty-three. Keep TH soft.",
    "tags": [
      "classroom",
      "teacher_phrase",
      "th_sound",
      "thai_learners"
    ],
    "pairGroup": "classroom_instructions_drill",
    "targetSounds": [
      "th_voiceless"
    ],
    "ipaTargets": [
      "/theta/"
    ],
    "targetFeatures": [
      "initial_cluster_pl",
      "initial_clusters",
      "clusters",
      "final_cluster_ks",
      "final_clusters",
      "teacher_modeling"
    ],
    "focusWords": [
      "please",
      "open",
      "books",
      "page",
      "thirty"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "please",
          "open",
          "books",
          "page",
          "thirty"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_pl",
        "words": [
          "please",
          "open",
          "books",
          "page",
          "thirty"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "please",
          "open",
          "books",
          "page",
          "thirty"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "please",
          "open",
          "books",
          "page",
          "thirty"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_cluster_ks",
        "words": [
          "please",
          "open",
          "books",
          "page",
          "thirty"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_clusters",
        "words": [
          "please",
          "open",
          "books",
          "page",
          "thirty"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If thirty becomes tirty, practice the TH in thirty with the tongue between the teeth.",
    "errorRules": [
      {
        "ruleId": "thirty_th",
        "scope": "word",
        "targets": [
          "thirty"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the TH in thirty soft. Tongue between the teeth.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. A clear classroom instruction your students will understand.",
    "teacherNotes": "Teachers modeling clear pronunciation is as important as student practice. This helps both.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      102
    ],
    "contrastWith": [],
    "relatedPractice": [
      102
    ],
    "remediationLinks": [
      45,
      81,
      124,
      126,
      128
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "teacher_only",
    "appUse": "diagnostic_or_teacher_tool",
    "studentVisible": false,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Teacher-facing, diagnostic, or placement item. Do not show in the normal student lesson path.",
    "reviewStatusV0_7": "teacher_only",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Please open your books to page thirty-three.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "final_sound_control",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 1,
        "afterFail": "teacher_review",
        "afterPass": "record_only"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "teacher_only"
  },
  {
    "id": 102,
    "displayName": "Teacher classroom instruction drill 2",
    "sentence": "Listen carefully and repeat after me: the weather is very nice today.",
    "audioPromptText": "Listen carefully, then repeat: Listen carefully and repeat after me: the weather is very nice today.",
    "level": "A2",
    "lessonOrder": 102,
    "module": "teacher_modeling",
    "practiceStage": "teacher_modeling",
    "skillType": "teacher_modeling",
    "difficultyScore": 3,
    "instruction": "Stress listen, carefully, repeat, weather, very, and today. Link repeat after smoothly.",
    "tags": [
      "classroom",
      "teacher_phrase",
      "mixed",
      "thai_learners"
    ],
    "pairGroup": "classroom_instructions_drill",
    "targetSounds": [
      "l",
      "r",
      "th_voiced",
      "v"
    ],
    "ipaTargets": [
      "/l/",
      "/r/",
      "/eth/",
      "/v/"
    ],
    "targetFeatures": [
      "teacher_modeling"
    ],
    "focusWords": [
      "listen",
      "carefully",
      "repeat",
      "the",
      "weather",
      "very"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "l",
        "words": [
          "listen",
          "carefully"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "r",
        "words": [
          "carefully",
          "repeat"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "the",
          "weather"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "v",
        "words": [
          "very"
        ],
        "threshold": 70
      },
      {
        "type": "sentence",
        "target": "teacher_modeling",
        "words": [
          "listen",
          "carefully",
          "repeat",
          "the",
          "weather",
          "very"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "If weather loses the voiced TH, practice the buzzing TH in isolation before the word.",
    "errorRules": [
      {
        "ruleId": "weather_th",
        "scope": "word",
        "targets": [
          "weather"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Weather has a voiced buzzing TH. Let your throat vibrate.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Nice. Your modeling phrase was clear and accurate for students.",
    "teacherNotes": "Teachers are pronunciation models. Accurate teacher speech is a powerful intervention.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.2",
    "reviewStatus": "v0.4_normalized_needs_teacher_review",
    "legacyPairWith": [
      101
    ],
    "contrastWith": [],
    "relatedPractice": [
      101
    ],
    "remediationLinks": [
      101,
      46,
      43,
      41,
      83
    ],
    "datasetVersion": "v1.0",
    "classroomStatus": "teacher_only",
    "appUse": "diagnostic_or_teacher_tool",
    "studentVisible": false,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Teacher-facing, diagnostic, or placement item. Do not show in the normal student lesson path.",
    "reviewStatusV0_7": "teacher_only",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Listen carefully and repeat after me: the weather is very nice today.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation",
        "lip_shape_v_w_f",
        "r_l_contrast"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 1,
        "afterFail": "teacher_review",
        "afterPass": "record_only"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "teacher_only"
  },
  {
    "id": 103,
    "displayName": "TH word minimal pair thin",
    "sentence": "thin",
    "audioPromptText": "Listen carefully, then repeat: thin",
    "level": "A1",
    "lessonOrder": 103,
    "module": "th_sounds",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Put your tongue lightly between your teeth for TH. Let air pass softly.",
    "tags": [
      "th_voiceless",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "thin_tin_pair",
    "legacyPairWith": [],
    "contrastWith": [
      104
    ],
    "relatedPractice": [],
    "remediationLinks": [
      105,
      106,
      107,
      108,
      113
    ],
    "targetSounds": [
      "th_voiceless"
    ],
    "ipaTargets": [
      "/theta/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "thin"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "thin"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "thin"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "thin_tin_pair",
    "remediationStrategy": "Practice thin slowly, then contrast it with tin.",
    "errorRules": [
      {
        "ruleId": "th_voiceless_low",
        "scope": "phoneme",
        "targets": [
          "th_voiceless"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Put the tip of your tongue lightly between your teeth and let air pass for TH.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. The TH in thin was clear.",
    "teacherNotes": "Starter word before full TH sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "thin",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 104,
    "displayName": "T word minimal pair tin",
    "sentence": "tin",
    "audioPromptText": "Listen carefully, then repeat: tin",
    "level": "A1",
    "lessonOrder": 104,
    "module": "th_sounds",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Use a clear T stop. Do not use the tongue-between-teeth TH shape.",
    "tags": [
      "t_sound",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "thin_tin_pair",
    "legacyPairWith": [],
    "contrastWith": [
      103
    ],
    "relatedPractice": [],
    "remediationLinks": [
      127,
      126,
      105,
      106,
      107
    ],
    "targetSounds": [
      "t"
    ],
    "ipaTargets": [
      "/t/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "tin"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "t",
        "words": [
          "tin"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "tin"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "thin_tin_pair",
    "remediationStrategy": "Practice tin slowly, then contrast it with thin.",
    "errorRules": [],
    "successMessage": "Good. The T in tin was clear.",
    "teacherNotes": "Contrast item for thin.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "tin",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 105,
    "displayName": "TH word minimal pair think",
    "sentence": "think",
    "audioPromptText": "Listen carefully, then repeat: think",
    "level": "A1",
    "lessonOrder": 105,
    "module": "th_sounds",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Start with soft TH. Do not say sink or tink.",
    "tags": [
      "th_voiceless",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "think_sink_pair",
    "legacyPairWith": [],
    "contrastWith": [
      106
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      107,
      108,
      113
    ],
    "targetSounds": [
      "th_voiceless"
    ],
    "ipaTargets": [
      "/theta/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "think"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "think"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "think"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "think_sink_pair",
    "remediationStrategy": "Practice think by stretching the first sound: thhh-ink.",
    "errorRules": [
      {
        "ruleId": "th_voiceless_low",
        "scope": "phoneme",
        "targets": [
          "th_voiceless"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Put the tip of your tongue lightly between your teeth and let air pass for TH.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Think started with clear TH.",
    "teacherNotes": "Starter word for common classroom phrase I think.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "think",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 106,
    "displayName": "S word minimal pair sink",
    "sentence": "sink",
    "audioPromptText": "Listen carefully, then repeat: sink",
    "level": "A1",
    "lessonOrder": 106,
    "module": "th_sounds",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Use S airflow behind the teeth. Do not put the tongue between the teeth.",
    "tags": [
      "s_sound",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "think_sink_pair",
    "legacyPairWith": [],
    "contrastWith": [
      105
    ],
    "relatedPractice": [],
    "remediationLinks": [
      113,
      119,
      103,
      104,
      107
    ],
    "targetSounds": [
      "s"
    ],
    "ipaTargets": [
      "/s/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "sink"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "sink"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "sink"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "think_sink_pair",
    "remediationStrategy": "Practice sink, then contrast it with think.",
    "errorRules": [],
    "successMessage": "Good. Sink started with clear S.",
    "teacherNotes": "Contrast item for think.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "sink",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 107,
    "displayName": "Voiced TH word then",
    "sentence": "then",
    "audioPromptText": "Listen carefully, then repeat: then",
    "level": "A1",
    "lessonOrder": 107,
    "module": "th_sounds",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Use voiced TH. Your tongue touches lightly and your throat vibrates.",
    "tags": [
      "th_voiced",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "then_den_pair",
    "legacyPairWith": [],
    "contrastWith": [
      108
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      113
    ],
    "targetSounds": [
      "th_voiced"
    ],
    "ipaTargets": [
      "/eth/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "then"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "then"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "then"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "then_den_pair",
    "remediationStrategy": "Practice then with a light buzzing TH.",
    "errorRules": [
      {
        "ruleId": "th_voiced_low",
        "scope": "phoneme",
        "targets": [
          "th_voiced"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Use the same TH mouth shape, but turn your voice on so it buzzes.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Then used voiced TH.",
    "teacherNotes": "Starter word for voiced TH.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "then",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 108,
    "displayName": "D word minimal pair den",
    "sentence": "den",
    "audioPromptText": "Listen carefully, then repeat: den",
    "level": "A1",
    "lessonOrder": 108,
    "module": "th_sounds",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Use a clear D stop. Do not use the tongue-between-teeth TH shape.",
    "tags": [
      "d_sound",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "then_den_pair",
    "legacyPairWith": [],
    "contrastWith": [
      107
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      113
    ],
    "targetSounds": [
      "d"
    ],
    "ipaTargets": [
      "/d/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "den"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "d",
        "words": [
          "den"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "den"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "then_den_pair",
    "remediationStrategy": "Practice den, then contrast it with then.",
    "errorRules": [],
    "successMessage": "Good. Den started with clear D.",
    "teacherNotes": "Contrast item for then.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "den",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 109,
    "displayName": "TH phrase thank you",
    "sentence": "Thank you.",
    "audioPromptText": "Listen carefully, then repeat: Thank you.",
    "level": "A1",
    "lessonOrder": 109,
    "module": "th_sounds",
    "practiceStage": "phrase",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Start thank with soft TH. Do not say tank you.",
    "tags": [
      "th_sounds",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "th_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      105,
      110,
      104,
      106
    ],
    "targetSounds": [
      "th_voiceless"
    ],
    "ipaTargets": [
      "/theta/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "thank"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "thank"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word first, then say the full phrase.",
    "errorRules": [
      {
        "ruleId": "th_voiceless_low",
        "scope": "phoneme",
        "targets": [
          "th_voiceless"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Put the tip of your tongue lightly between your teeth and let air pass for TH.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your TH sound was clear in the phrase.",
    "teacherNotes": "Starter phrase to bridge word practice and longer TH sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Thank you.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 110,
    "displayName": "TH phrase I think",
    "sentence": "I think so.",
    "audioPromptText": "Listen carefully, then repeat: I think so.",
    "level": "A1",
    "lessonOrder": 110,
    "module": "th_sounds",
    "practiceStage": "phrase",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Start think with soft TH.",
    "tags": [
      "th_sounds",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "th_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      105,
      109,
      104,
      106
    ],
    "targetSounds": [
      "th_voiceless"
    ],
    "ipaTargets": [
      "/theta/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "think"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiceless",
        "words": [
          "think"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word first, then say the full phrase.",
    "errorRules": [
      {
        "ruleId": "th_voiceless_low",
        "scope": "phoneme",
        "targets": [
          "th_voiceless"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Put the tip of your tongue lightly between your teeth and let air pass for TH.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your TH sound was clear in the phrase.",
    "teacherNotes": "Starter phrase to bridge word practice and longer TH sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I think so.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 111,
    "displayName": "Voiced TH phrase this is",
    "sentence": "This is mine.",
    "audioPromptText": "Listen carefully, then repeat: This is mine.",
    "level": "A1",
    "lessonOrder": 111,
    "module": "th_sounds",
    "practiceStage": "phrase",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Use buzzing TH in this.",
    "tags": [
      "th_sounds",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "th_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      107,
      112,
      103,
      104,
      105
    ],
    "targetSounds": [
      "th_voiced"
    ],
    "ipaTargets": [
      "/eth/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "this"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "this"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word first, then say the full phrase.",
    "errorRules": [
      {
        "ruleId": "th_voiced_low",
        "scope": "phoneme",
        "targets": [
          "th_voiced"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Use the same TH mouth shape, but turn your voice on so it buzzes.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your TH sound was clear in the phrase.",
    "teacherNotes": "Starter phrase to bridge word practice and longer TH sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "This is mine.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 112,
    "displayName": "Voiced TH phrase they are",
    "sentence": "They are there.",
    "audioPromptText": "Listen carefully, then repeat: They are there.",
    "level": "A2",
    "lessonOrder": 112,
    "module": "th_sounds",
    "practiceStage": "phrase",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Use buzzing TH in they and there.",
    "tags": [
      "th_sounds",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "th_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      107,
      111,
      103,
      104,
      105
    ],
    "targetSounds": [
      "th_voiced"
    ],
    "ipaTargets": [
      "/eth/"
    ],
    "targetFeatures": [],
    "focusWords": [
      "they",
      "there"
    ],
    "thaiErrorPattern": "Thai learners often replace English TH with T, D, or S because dental fricatives are not native Thai sounds.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "th_voiced",
        "words": [
          "they",
          "there"
        ],
        "threshold": 70
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word first, then say the full phrase.",
    "errorRules": [
      {
        "ruleId": "th_voiced_low",
        "scope": "phoneme",
        "targets": [
          "th_voiced"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Use the same TH mouth shape, but turn your voice on so it buzzes.",
        "action": "show_articulation_tip"
      }
    ],
    "successMessage": "Good. Your TH sound was clear in the phrase.",
    "teacherNotes": "Starter phrase to bridge word practice and longer TH sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "They are there.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "th_articulation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 113,
    "displayName": "Final S word bus",
    "sentence": "bus",
    "audioPromptText": "Listen carefully, then repeat: bus",
    "level": "A1",
    "lessonOrder": 113,
    "module": "final_consonants",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Finish the final sound clearly. Do not add an extra vowel.",
    "tags": [
      "final_consonants",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "bus_buzz_pair",
    "legacyPairWith": [],
    "contrastWith": [
      114
    ],
    "relatedPractice": [],
    "remediationLinks": [
      119,
      120,
      106,
      115,
      116
    ],
    "targetSounds": [
      "s"
    ],
    "ipaTargets": [
      "/s/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_s_z",
      "minimal_pair"
    ],
    "focusWords": [
      "bus"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and final clusters.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "bus"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "bus"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_s_z",
        "words": [
          "bus"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "bus"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "bus_buzz_pair",
    "remediationStrategy": "Practice the final sound alone, then say the whole word.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "bus"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. The word ending was clear.",
    "teacherNotes": "Starter minimal-pair word for final consonant control.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "bus",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 114,
    "displayName": "Final Z word buzz",
    "sentence": "buzz",
    "audioPromptText": "Listen carefully, then repeat: buzz",
    "level": "A1",
    "lessonOrder": 114,
    "module": "final_consonants",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Finish the final voiced sound clearly. Keep your voice on.",
    "tags": [
      "final_consonants",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "bus_buzz_pair",
    "legacyPairWith": [],
    "contrastWith": [
      113
    ],
    "relatedPractice": [],
    "remediationLinks": [
      120,
      116,
      118,
      119,
      115
    ],
    "targetSounds": [
      "z"
    ],
    "ipaTargets": [
      "/z/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_s_z",
      "final_voicing",
      "minimal_pair"
    ],
    "focusWords": [
      "buzz"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless endings can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "z",
        "words": [
          "buzz"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "buzz"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_s_z",
        "words": [
          "buzz"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "final_voicing",
        "words": [
          "buzz"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "buzz"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "bus_buzz_pair",
    "remediationStrategy": "Practice the final sound alone, then say the whole word.",
    "errorRules": [
      {
        "ruleId": "z_voicing_low",
        "scope": "phoneme",
        "targets": [
          "z"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Turn your voice on for Z. It should buzz, not sound like S.",
        "action": "retry_focus_words"
      },
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "buzz"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. The final voiced ending was clear.",
    "teacherNotes": "Starter minimal-pair word for final consonant voicing.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "buzz",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "z_voicing",
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 115,
    "displayName": "Final P word cap",
    "sentence": "cap",
    "audioPromptText": "Listen carefully, then repeat: cap",
    "level": "A1",
    "lessonOrder": 115,
    "module": "final_consonants",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Finish the final sound clearly. Do not add an extra vowel.",
    "tags": [
      "final_consonants",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "cap_cab_pair",
    "legacyPairWith": [],
    "contrastWith": [
      116
    ],
    "relatedPractice": [],
    "remediationLinks": [
      117,
      118,
      94,
      113,
      114
    ],
    "targetSounds": [
      "p"
    ],
    "ipaTargets": [
      "/p/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_stop_voicing",
      "minimal_pair"
    ],
    "focusWords": [
      "cap"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and final clusters.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "p",
        "words": [
          "cap"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "cap"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_stop_voicing",
        "words": [
          "cap"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "cap"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "cap_cab_pair",
    "remediationStrategy": "Practice the final sound alone, then say the whole word.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "cap"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. The word ending was clear.",
    "teacherNotes": "Starter minimal-pair word for final consonant control.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "cap",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 116,
    "displayName": "Final B word cab",
    "sentence": "cab",
    "audioPromptText": "Listen carefully, then repeat: cab",
    "level": "A1",
    "lessonOrder": 116,
    "module": "final_consonants",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Finish the final voiced sound clearly. Keep your voice on.",
    "tags": [
      "final_consonants",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "cap_cab_pair",
    "legacyPairWith": [],
    "contrastWith": [
      115
    ],
    "relatedPractice": [],
    "remediationLinks": [
      118,
      114,
      117,
      120,
      95
    ],
    "targetSounds": [
      "b"
    ],
    "ipaTargets": [
      "/b/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_stop_voicing",
      "final_voicing",
      "minimal_pair"
    ],
    "focusWords": [
      "cab"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless endings can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "b",
        "words": [
          "cab"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "cab"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_stop_voicing",
        "words": [
          "cab"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "final_voicing",
        "words": [
          "cab"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "cab"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "cap_cab_pair",
    "remediationStrategy": "Practice the final sound alone, then say the whole word.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "cab"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. The final voiced ending was clear.",
    "teacherNotes": "Starter minimal-pair word for final consonant voicing.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "cab",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 117,
    "displayName": "Final K word back",
    "sentence": "back",
    "audioPromptText": "Listen carefully, then repeat: back",
    "level": "A1",
    "lessonOrder": 117,
    "module": "final_consonants",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Finish the final sound clearly. Do not add an extra vowel.",
    "tags": [
      "final_consonants",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "back_bag_pair",
    "legacyPairWith": [],
    "contrastWith": [
      118
    ],
    "relatedPractice": [],
    "remediationLinks": [
      115,
      116,
      113,
      114,
      119
    ],
    "targetSounds": [
      "k"
    ],
    "ipaTargets": [
      "/k/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_stop_voicing",
      "minimal_pair"
    ],
    "focusWords": [
      "back"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and final clusters.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "k",
        "words": [
          "back"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "back"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_stop_voicing",
        "words": [
          "back"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "back"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "back_bag_pair",
    "remediationStrategy": "Practice the final sound alone, then say the whole word.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "back"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. The word ending was clear.",
    "teacherNotes": "Starter minimal-pair word for final consonant control.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "back",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 118,
    "displayName": "Final G word bag",
    "sentence": "bag",
    "audioPromptText": "Listen carefully, then repeat: bag",
    "level": "A1",
    "lessonOrder": 118,
    "module": "final_consonants",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Finish the final voiced sound clearly. Keep your voice on.",
    "tags": [
      "final_consonants",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "back_bag_pair",
    "legacyPairWith": [],
    "contrastWith": [
      117
    ],
    "relatedPractice": [],
    "remediationLinks": [
      116,
      114,
      115,
      120,
      113
    ],
    "targetSounds": [
      "g"
    ],
    "ipaTargets": [
      "/g/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_stop_voicing",
      "final_voicing",
      "minimal_pair"
    ],
    "focusWords": [
      "bag"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless endings can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "g",
        "words": [
          "bag"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "bag"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_stop_voicing",
        "words": [
          "bag"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "final_voicing",
        "words": [
          "bag"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "bag"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "back_bag_pair",
    "remediationStrategy": "Practice the final sound alone, then say the whole word.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "bag"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. The final voiced ending was clear.",
    "teacherNotes": "Starter minimal-pair word for final consonant voicing.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "bag",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 119,
    "displayName": "Final S word rice",
    "sentence": "rice",
    "audioPromptText": "Listen carefully, then repeat: rice",
    "level": "A1",
    "lessonOrder": 119,
    "module": "final_consonants",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Finish the final sound clearly. Do not add an extra vowel.",
    "tags": [
      "final_consonants",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "rice_rise_pair",
    "legacyPairWith": [],
    "contrastWith": [
      120
    ],
    "relatedPractice": [],
    "remediationLinks": [
      113,
      114,
      106,
      115,
      116
    ],
    "targetSounds": [
      "s"
    ],
    "ipaTargets": [
      "/s/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_s_z",
      "minimal_pair"
    ],
    "focusWords": [
      "rice"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and final clusters.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "rice"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "rice"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_s_z",
        "words": [
          "rice"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "rice"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "rice_rise_pair",
    "remediationStrategy": "Practice the final sound alone, then say the whole word.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "rice"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. The word ending was clear.",
    "teacherNotes": "Starter minimal-pair word for final consonant control.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "rice",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 120,
    "displayName": "Final Z word rise",
    "sentence": "rise",
    "audioPromptText": "Listen carefully, then repeat: rise",
    "level": "A1",
    "lessonOrder": 120,
    "module": "final_consonants",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Finish the final voiced sound clearly. Keep your voice on.",
    "tags": [
      "final_consonants",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "rice_rise_pair",
    "legacyPairWith": [],
    "contrastWith": [
      119
    ],
    "relatedPractice": [],
    "remediationLinks": [
      114,
      113,
      116,
      118,
      115
    ],
    "targetSounds": [
      "z"
    ],
    "ipaTargets": [
      "/z/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_s_z",
      "final_voicing",
      "minimal_pair"
    ],
    "focusWords": [
      "rise"
    ],
    "thaiErrorPattern": "Thai learners may rely more on aspiration than voicing, so English voiced and voiceless endings can be hard to contrast.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "z",
        "words": [
          "rise"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "rise"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_s_z",
        "words": [
          "rise"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "final_voicing",
        "words": [
          "rise"
        ],
        "threshold": 76
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "rise"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "rice_rise_pair",
    "remediationStrategy": "Practice the final sound alone, then say the whole word.",
    "errorRules": [
      {
        "ruleId": "z_voicing_low",
        "scope": "phoneme",
        "targets": [
          "z"
        ],
        "trigger": {
          "phonemeScoreBelow": 70
        },
        "feedback": "Turn your voice on for Z. It should buzz, not sound like S.",
        "action": "retry_focus_words"
      },
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "rise"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. The final voiced ending was clear.",
    "teacherNotes": "Starter minimal-pair word for final consonant voicing.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "rise",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "z_voicing",
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 121,
    "displayName": "Final consonant phrase need help",
    "sentence": "I need help.",
    "audioPromptText": "Listen carefully, then repeat: I need help.",
    "level": "A2",
    "lessonOrder": 121,
    "module": "final_consonants",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Finish the D in need and the P in help.",
    "tags": [
      "final_consonants",
      "sentence_level",
      "thai_learners"
    ],
    "pairGroup": "final_consonant_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      115,
      94,
      62,
      122,
      108
    ],
    "targetSounds": [
      "d",
      "p"
    ],
    "ipaTargets": [
      "/d/",
      "/p/"
    ],
    "targetFeatures": [
      "final_consonants"
    ],
    "focusWords": [
      "need",
      "help"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and final clusters.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "d",
        "words": [
          "need",
          "help"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "p",
        "words": [
          "need",
          "help"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "need",
          "help"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Say the focus words first, then the full sentence.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "need",
          "help"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. Your final sounds were clearer.",
    "teacherNotes": "Sentence-level bridge after final consonant word practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I need help.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 122,
    "displayName": "Final consonant phrase red bag",
    "sentence": "I found a red bag.",
    "audioPromptText": "Listen carefully, then repeat: I found a red bag.",
    "level": "A2",
    "lessonOrder": 122,
    "module": "final_consonants",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Finish the final voiced sounds in found, red, and bag.",
    "tags": [
      "final_consonants",
      "sentence_level",
      "thai_learners"
    ],
    "pairGroup": "final_consonant_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      118,
      114,
      116,
      120,
      95
    ],
    "targetSounds": [
      "d",
      "g"
    ],
    "ipaTargets": [
      "/d/",
      "/g/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_voicing"
    ],
    "focusWords": [
      "found",
      "red",
      "bag"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and final clusters.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "d",
        "words": [
          "found",
          "red",
          "bag"
        ],
        "threshold": 70
      },
      {
        "type": "phoneme",
        "target": "g",
        "words": [
          "found",
          "red",
          "bag"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "found",
          "red",
          "bag"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_voicing",
        "words": [
          "found",
          "red",
          "bag"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Say the focus words first, then the full sentence.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "found",
          "red",
          "bag"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. Your final sounds were clearer.",
    "teacherNotes": "Sentence-level bridge after final consonant word practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I found a red bag.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 123,
    "displayName": "Final cluster phrase class starts",
    "sentence": "The class starts at six.",
    "audioPromptText": "Listen carefully, then repeat: The class starts at six.",
    "level": "A2",
    "lessonOrder": 123,
    "module": "final_consonants",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Keep the final sounds in class, starts, and six.",
    "tags": [
      "final_consonants",
      "sentence_level",
      "thai_learners"
    ],
    "pairGroup": "final_consonant_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      45,
      113,
      119,
      46,
      90
    ],
    "targetSounds": [
      "s"
    ],
    "ipaTargets": [
      "/s/"
    ],
    "targetFeatures": [
      "final_consonants",
      "final_clusters",
      "final_cluster_st",
      "final_cluster_ks"
    ],
    "focusWords": [
      "class",
      "starts",
      "six"
    ],
    "thaiErrorPattern": "Thai learners may delete, weaken, or simplify final English consonants and final clusters.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "s",
        "words": [
          "class",
          "starts",
          "six"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "class",
          "starts",
          "six"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_clusters",
        "words": [
          "class",
          "starts",
          "six"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_cluster_st",
        "words": [
          "class",
          "starts",
          "six"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_cluster_ks",
        "words": [
          "class",
          "starts",
          "six"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Say the focus words first, then the full sentence.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "class",
          "starts",
          "six"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      }
    ],
    "successMessage": "Good. Your final sounds were clearer.",
    "teacherNotes": "Sentence-level bridge after final consonant word practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The class starts at six.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 124,
    "displayName": "Initial SP word spot",
    "sentence": "spot",
    "audioPromptText": "Listen carefully, then repeat: spot",
    "level": "A1",
    "lessonOrder": 124,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Keep the consonants together. Do not add a vowel before or inside the cluster.",
    "tags": [
      "initial_clusters",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "spot_pot_pair",
    "legacyPairWith": [],
    "contrastWith": [
      125
    ],
    "relatedPractice": [],
    "remediationLinks": [
      126,
      128,
      115,
      130,
      131
    ],
    "targetSounds": [
      "p"
    ],
    "ipaTargets": [
      "/p/"
    ],
    "targetFeatures": [
      "initial_cluster_sp",
      "initial_clusters",
      "clusters",
      "minimal_pair"
    ],
    "focusWords": [
      "spot"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "p",
        "words": [
          "spot"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_sp",
        "words": [
          "spot"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "spot"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "spot"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "spot"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "spot_pot_pair",
    "remediationStrategy": "Practice the cluster slowly, then speed up.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "spot"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The cluster stayed together.",
    "teacherNotes": "Starter word for S-cluster control.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "spot",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 125,
    "displayName": "P word contrast pot",
    "sentence": "pot",
    "audioPromptText": "Listen carefully, then repeat: pot",
    "level": "A1",
    "lessonOrder": 125,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Say the word without the S-cluster so the contrast is clear.",
    "tags": [
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "spot_pot_pair",
    "legacyPairWith": [],
    "contrastWith": [
      124
    ],
    "relatedPractice": [],
    "remediationLinks": [
      115,
      103,
      104,
      105,
      106
    ],
    "targetSounds": [
      "p"
    ],
    "ipaTargets": [
      "/p/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "pot"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "p",
        "words": [
          "pot"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "pot"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "spot_pot_pair",
    "remediationStrategy": "Practice the contrast word, then return to the cluster word.",
    "errorRules": [],
    "successMessage": "Good. The contrast word was clear.",
    "teacherNotes": "Contrast item for S-cluster practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "pot",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 126,
    "displayName": "Initial ST word stop",
    "sentence": "stop",
    "audioPromptText": "Listen carefully, then repeat: stop",
    "level": "A1",
    "lessonOrder": 126,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Keep the consonants together. Do not add a vowel before or inside the cluster.",
    "tags": [
      "initial_clusters",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "stop_top_pair",
    "legacyPairWith": [],
    "contrastWith": [
      127
    ],
    "relatedPractice": [],
    "remediationLinks": [
      124,
      128,
      22,
      104,
      130
    ],
    "targetSounds": [
      "t"
    ],
    "ipaTargets": [
      "/t/"
    ],
    "targetFeatures": [
      "initial_cluster_st",
      "initial_clusters",
      "clusters",
      "minimal_pair"
    ],
    "focusWords": [
      "stop"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "t",
        "words": [
          "stop"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "stop"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "stop"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "stop"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "stop"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "stop_top_pair",
    "remediationStrategy": "Practice the cluster slowly, then speed up.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "stop"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The cluster stayed together.",
    "teacherNotes": "Starter word for S-cluster control.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "stop",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 127,
    "displayName": "T word contrast top",
    "sentence": "top",
    "audioPromptText": "Listen carefully, then repeat: top",
    "level": "A1",
    "lessonOrder": 127,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Say the word without the S-cluster so the contrast is clear.",
    "tags": [
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "stop_top_pair",
    "legacyPairWith": [],
    "contrastWith": [
      126
    ],
    "relatedPractice": [],
    "remediationLinks": [
      104,
      103,
      105,
      106,
      107
    ],
    "targetSounds": [
      "t"
    ],
    "ipaTargets": [
      "/t/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "top"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "t",
        "words": [
          "top"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "top"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "stop_top_pair",
    "remediationStrategy": "Practice the contrast word, then return to the cluster word.",
    "errorRules": [],
    "successMessage": "Good. The contrast word was clear.",
    "teacherNotes": "Contrast item for S-cluster practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "top",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 128,
    "displayName": "Initial SK word school",
    "sentence": "school",
    "audioPromptText": "Listen carefully, then repeat: school",
    "level": "A1",
    "lessonOrder": 128,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Keep the consonants together. Do not add a vowel before or inside the cluster.",
    "tags": [
      "initial_clusters",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "school_cool_pair",
    "legacyPairWith": [],
    "contrastWith": [
      129
    ],
    "relatedPractice": [],
    "remediationLinks": [
      124,
      126,
      117,
      130,
      131
    ],
    "targetSounds": [
      "k"
    ],
    "ipaTargets": [
      "/k/"
    ],
    "targetFeatures": [
      "initial_cluster_sk",
      "initial_clusters",
      "clusters",
      "minimal_pair"
    ],
    "focusWords": [
      "school"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "k",
        "words": [
          "school"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "initial_cluster_sk",
        "words": [
          "school"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "school"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "school"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "school"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "school_cool_pair",
    "remediationStrategy": "Practice the cluster slowly, then speed up.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "school"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The cluster stayed together.",
    "teacherNotes": "Starter word for S-cluster control.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "school",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 129,
    "displayName": "K word contrast cool",
    "sentence": "cool",
    "audioPromptText": "Listen carefully, then repeat: cool",
    "level": "A1",
    "lessonOrder": 129,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 1,
    "instruction": "Say the word without the S-cluster so the contrast is clear.",
    "tags": [
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "school_cool_pair",
    "legacyPairWith": [],
    "contrastWith": [
      128
    ],
    "relatedPractice": [],
    "remediationLinks": [
      117,
      103,
      104,
      105,
      106
    ],
    "targetSounds": [
      "k"
    ],
    "ipaTargets": [
      "/k/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "cool"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "k",
        "words": [
          "cool"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "cool"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "school_cool_pair",
    "remediationStrategy": "Practice the contrast word, then return to the cluster word.",
    "errorRules": [],
    "successMessage": "Good. The contrast word was clear.",
    "teacherNotes": "Contrast item for S-cluster practice.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "cool",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 130,
    "displayName": "Cluster phrase green grass",
    "sentence": "green grass",
    "audioPromptText": "Listen carefully, then repeat: green grass",
    "level": "A2",
    "lessonOrder": 130,
    "module": "clusters",
    "practiceStage": "phrase",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      124,
      126,
      128,
      131,
      136
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_gr",
      "initial_clusters",
      "clusters"
    ],
    "focusWords": [
      "green",
      "grass"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_gr",
        "words": [
          "green",
          "grass"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "green",
          "grass"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "green",
          "grass"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "green",
          "grass"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "green grass",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 131,
    "displayName": "Cluster phrase blue glass",
    "sentence": "blue glass",
    "audioPromptText": "Listen carefully, then repeat: blue glass",
    "level": "A2",
    "lessonOrder": 131,
    "module": "clusters",
    "practiceStage": "phrase",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      124,
      126,
      128,
      130,
      136
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_bl",
      "initial_cluster_gl",
      "initial_clusters",
      "clusters"
    ],
    "focusWords": [
      "blue",
      "glass"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_bl",
        "words": [
          "blue",
          "glass"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_gl",
        "words": [
          "blue",
          "glass"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "blue",
          "glass"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "blue",
          "glass"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "blue",
          "glass"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "blue glass",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 132,
    "displayName": "Cluster sentence stand still",
    "sentence": "Please stand still.",
    "audioPromptText": "Listen carefully, then repeat: Please stand still.",
    "level": "A2",
    "lessonOrder": 132,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 3,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      126,
      124,
      128,
      130,
      131
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_st",
      "initial_clusters",
      "clusters"
    ],
    "focusWords": [
      "stand",
      "still"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "stand",
          "still"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "stand",
          "still"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "stand",
          "still"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "stand",
          "still"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Please stand still.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 133,
    "displayName": "Cluster sentence small snake",
    "sentence": "The small snake sleeps.",
    "audioPromptText": "Listen carefully, then repeat: The small snake sleeps.",
    "level": "B1",
    "lessonOrder": 133,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      124,
      126,
      128,
      130,
      131
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_sm",
      "initial_cluster_sn",
      "initial_cluster_sl",
      "initial_clusters",
      "clusters"
    ],
    "focusWords": [
      "small",
      "snake",
      "sleeps"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_sm",
        "words": [
          "small",
          "snake",
          "sleeps"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_sn",
        "words": [
          "small",
          "snake",
          "sleeps"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_sl",
        "words": [
          "small",
          "snake",
          "sleeps"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "small",
          "snake",
          "sleeps"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "small",
          "snake",
          "sleeps"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "small",
          "snake",
          "sleeps"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The small snake sleeps.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 134,
    "displayName": "Cluster sentence bring books",
    "sentence": "Bring three books.",
    "audioPromptText": "Listen carefully, then repeat: Bring three books.",
    "level": "B1",
    "lessonOrder": 134,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      135,
      124,
      126,
      128,
      130
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_br",
      "initial_cluster_thr",
      "initial_clusters",
      "clusters",
      "final_consonants"
    ],
    "focusWords": [
      "bring",
      "three",
      "books"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_br",
        "words": [
          "bring",
          "three",
          "books"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_thr",
        "words": [
          "bring",
          "three",
          "books"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "bring",
          "three",
          "books"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "bring",
          "three",
          "books"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "bring",
          "three",
          "books"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "bring",
          "three",
          "books"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      },
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "bring",
          "three",
          "books"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Bring three books.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 135,
    "displayName": "Cluster sentence class starts",
    "sentence": "The class starts soon.",
    "audioPromptText": "Listen carefully, then repeat: The class starts soon.",
    "level": "B1",
    "lessonOrder": 135,
    "module": "clusters",
    "practiceStage": "sentence",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      126,
      23,
      123,
      132,
      134
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "final_cluster_st",
      "final_clusters",
      "final_consonants",
      "initial_cluster_st",
      "initial_clusters",
      "clusters"
    ],
    "focusWords": [
      "class",
      "starts",
      "soon"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "final_cluster_st",
        "words": [
          "class",
          "starts",
          "soon"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_clusters",
        "words": [
          "class",
          "starts",
          "soon"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "final_consonants",
        "words": [
          "class",
          "starts",
          "soon"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_cluster_st",
        "words": [
          "class",
          "starts",
          "soon"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "class",
          "starts",
          "soon"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "class",
          "starts",
          "soon"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "final_sound_low",
        "scope": "word",
        "targets": [
          "class",
          "starts",
          "soon"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Do not cut off the word ending. Finish the final sound clearly.",
        "action": "practice_word_endings"
      },
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "class",
          "starts",
          "soon"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The class starts soon.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "final_sound_control",
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 136,
    "displayName": "Triple cluster word spring",
    "sentence": "spring",
    "audioPromptText": "Listen carefully, then repeat: spring",
    "level": "B1",
    "lessonOrder": 136,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      137,
      138,
      139,
      66,
      124
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_spr",
      "initial_clusters",
      "triple_clusters",
      "clusters"
    ],
    "focusWords": [
      "spring"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_spr",
        "words": [
          "spring"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "spring"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "spring"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "spring"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "spring"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "spring",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 137,
    "displayName": "Triple cluster word string",
    "sentence": "string",
    "audioPromptText": "Listen carefully, then repeat: string",
    "level": "B1",
    "lessonOrder": 137,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      136,
      138,
      139,
      18,
      19
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_str",
      "initial_clusters",
      "triple_clusters",
      "clusters"
    ],
    "focusWords": [
      "string"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_str",
        "words": [
          "string"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "string"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "string"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "string"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "string"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "string",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 138,
    "displayName": "Triple cluster word splash",
    "sentence": "splash",
    "audioPromptText": "Listen carefully, then repeat: splash",
    "level": "B1",
    "lessonOrder": 138,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      136,
      137,
      139,
      66,
      65
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_spl",
      "initial_clusters",
      "triple_clusters",
      "clusters"
    ],
    "focusWords": [
      "splash"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_spl",
        "words": [
          "splash"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "splash"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "splash"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "splash"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "splash"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "splash",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 139,
    "displayName": "Triple cluster word scratch",
    "sentence": "scratch",
    "audioPromptText": "Listen carefully, then repeat: scratch",
    "level": "B1",
    "lessonOrder": 139,
    "module": "clusters",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 4,
    "instruction": "Keep the consonants together. Do not add a small vowel inside the cluster.",
    "tags": [
      "clusters",
      "starter_or_bridge",
      "thai_learners"
    ],
    "pairGroup": "cluster_starter_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      136,
      137,
      138,
      66,
      67
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "initial_cluster_skr",
      "initial_clusters",
      "triple_clusters",
      "clusters"
    ],
    "focusWords": [
      "scratch"
    ],
    "thaiErrorPattern": "Thai learners may insert a small vowel inside English consonant clusters or simplify the cluster.",
    "scoringTargets": [
      {
        "type": "word",
        "target": "initial_cluster_skr",
        "words": [
          "scratch"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "initial_clusters",
        "words": [
          "scratch"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "triple_clusters",
        "words": [
          "scratch"
        ],
        "threshold": 74
      },
      {
        "type": "word",
        "target": "clusters",
        "words": [
          "scratch"
        ],
        "threshold": 74
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the focus word slowly, then say the full prompt.",
    "errorRules": [
      {
        "ruleId": "cluster_low",
        "scope": "word",
        "targets": [
          "scratch"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Keep the consonants together. Do not add a small vowel between them.",
        "action": "practice_words_only"
      }
    ],
    "successMessage": "Good. The consonant cluster was clearer.",
    "teacherNotes": "Adds starter and bridge practice before difficult cluster sentences.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "scratch",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "cluster_control"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 140,
    "displayName": "Schwa word about",
    "sentence": "about",
    "audioPromptText": "Listen carefully, then repeat: about",
    "level": "A1",
    "lessonOrder": 140,
    "module": "schwa_and_reduction",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Make the first syllable weak: about.",
    "tags": [
      "schwa",
      "weak_forms",
      "thai_learners"
    ],
    "pairGroup": "schwa_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      141,
      142,
      143,
      150,
      144
    ],
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "schwa"
    ],
    "focusWords": [
      "about"
    ],
    "thaiErrorPattern": "Thai learners may give full vowels to weak syllables instead of using a relaxed schwa or reduced vowel.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "about"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "schwa",
        "words": [
          "about"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the weak syllable by itself, then say the whole prompt.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "about"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      }
    ],
    "successMessage": "Good. The weak vowel sounded more natural.",
    "teacherNotes": "Starter item for schwa, reduction, and weak function words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "about",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 141,
    "displayName": "Schwa word again",
    "sentence": "again",
    "audioPromptText": "Listen carefully, then repeat: again",
    "level": "A1",
    "lessonOrder": 141,
    "module": "schwa_and_reduction",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Make the first syllable weak: again.",
    "tags": [
      "schwa",
      "weak_forms",
      "thai_learners"
    ],
    "pairGroup": "schwa_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      140,
      142,
      143,
      150,
      144
    ],
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "schwa"
    ],
    "focusWords": [
      "again"
    ],
    "thaiErrorPattern": "Thai learners may give full vowels to weak syllables instead of using a relaxed schwa or reduced vowel.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "again"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "schwa",
        "words": [
          "again"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the weak syllable by itself, then say the whole prompt.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "again"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      }
    ],
    "successMessage": "Good. The weak vowel sounded more natural.",
    "teacherNotes": "Starter item for schwa, reduction, and weak function words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "again",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 142,
    "displayName": "Schwa word banana",
    "sentence": "banana",
    "audioPromptText": "Listen carefully, then repeat: banana",
    "level": "A1",
    "lessonOrder": 142,
    "module": "schwa_and_reduction",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Keep the weak syllables relaxed in banana.",
    "tags": [
      "schwa",
      "weak_forms",
      "thai_learners"
    ],
    "pairGroup": "schwa_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      140,
      141,
      143,
      150,
      144
    ],
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "schwa"
    ],
    "focusWords": [
      "banana"
    ],
    "thaiErrorPattern": "Thai learners may give full vowels to weak syllables instead of using a relaxed schwa or reduced vowel.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "banana"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "schwa",
        "words": [
          "banana"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the weak syllable by itself, then say the whole prompt.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "banana"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      }
    ],
    "successMessage": "Good. The weak vowel sounded more natural.",
    "teacherNotes": "Starter item for schwa, reduction, and weak function words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "banana",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 143,
    "displayName": "Weak vowel word today",
    "sentence": "today",
    "audioPromptText": "Listen carefully, then repeat: today",
    "level": "A1",
    "lessonOrder": 143,
    "module": "schwa_and_reduction",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Make the first syllable weak in today.",
    "tags": [
      "schwa",
      "weak_forms",
      "thai_learners"
    ],
    "pairGroup": "schwa_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      140,
      141,
      142,
      150,
      144
    ],
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "schwa"
    ],
    "focusWords": [
      "today"
    ],
    "thaiErrorPattern": "Thai learners may give full vowels to weak syllables instead of using a relaxed schwa or reduced vowel.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "today"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "schwa",
        "words": [
          "today"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the weak syllable by itself, then say the whole prompt.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "today"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      }
    ],
    "successMessage": "Good. The weak vowel sounded more natural.",
    "teacherNotes": "Starter item for schwa, reduction, and weak function words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "today",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 144,
    "displayName": "Schwa sentence banana",
    "sentence": "I want a banana.",
    "audioPromptText": "Listen carefully, then repeat: I want a banana.",
    "level": "A2",
    "lessonOrder": 144,
    "module": "schwa_and_reduction",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 3,
    "instruction": "Do not stress every syllable. Keep a weak vowel in banana.",
    "tags": [
      "schwa",
      "weak_forms",
      "thai_learners"
    ],
    "pairGroup": "schwa_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      145,
      146,
      147,
      140,
      141
    ],
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "schwa",
      "weak_forms"
    ],
    "focusWords": [
      "want",
      "a",
      "banana"
    ],
    "thaiErrorPattern": "Thai learners may give full vowels to weak syllables instead of using a relaxed schwa or reduced vowel.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "a",
          "banana"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "schwa",
        "words": [
          "a",
          "banana"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "a",
          "banana"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the weak syllable by itself, then say the whole prompt.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "want",
          "banana"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      }
    ],
    "successMessage": "Good. The weak vowel sounded more natural.",
    "teacherNotes": "Starter item for schwa, reduction, and weak function words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "I want a banana.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 145,
    "displayName": "Weak form phrase pencil",
    "sentence": "Can I have a pencil?",
    "audioPromptText": "Listen carefully, then repeat: Can I have a pencil?",
    "level": "A2",
    "lessonOrder": 145,
    "module": "schwa_and_reduction",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 3,
    "instruction": "Say the function words lightly, then stress pencil.",
    "tags": [
      "schwa",
      "weak_forms",
      "thai_learners"
    ],
    "pairGroup": "schwa_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      146,
      147,
      144,
      140,
      141
    ],
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "weak_forms",
      "function_word_reduction"
    ],
    "focusWords": [
      "can",
      "have",
      "pencil"
    ],
    "thaiErrorPattern": "Thai learners may give full vowels to weak syllables instead of using a relaxed schwa or reduced vowel.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "can",
          "have",
          "pencil"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "can",
          "have",
          "pencil"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "function_word_reduction",
        "words": [
          "can",
          "have",
          "pencil"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the weak syllable by itself, then say the whole prompt.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "can",
          "have",
          "pencil"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      }
    ],
    "successMessage": "Good. The weak vowel sounded more natural.",
    "teacherNotes": "Starter item for schwa, reduction, and weak function words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "Can I have a pencil?",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 146,
    "displayName": "Weak form phrase for you",
    "sentence": "This is for you.",
    "audioPromptText": "Listen carefully, then repeat: This is for you.",
    "level": "A2",
    "lessonOrder": 146,
    "module": "schwa_and_reduction",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 3,
    "instruction": "Keep for weak and smooth in the phrase.",
    "tags": [
      "schwa",
      "weak_forms",
      "thai_learners"
    ],
    "pairGroup": "schwa_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      145,
      147,
      144,
      140,
      141
    ],
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "weak_forms",
      "function_word_reduction"
    ],
    "focusWords": [
      "this",
      "for",
      "you"
    ],
    "thaiErrorPattern": "Thai learners may give full vowels to weak syllables instead of using a relaxed schwa or reduced vowel.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "this",
          "for",
          "you"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "this",
          "for",
          "you"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "function_word_reduction",
        "words": [
          "this",
          "for",
          "you"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the weak syllable by itself, then say the whole prompt.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "this",
          "for",
          "you"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      }
    ],
    "successMessage": "Good. The weak vowel sounded more natural.",
    "teacherNotes": "Starter item for schwa, reduction, and weak function words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "This is for you.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 147,
    "displayName": "Weak form phrase need to",
    "sentence": "I need to go.",
    "audioPromptText": "Listen carefully, then repeat: I need to go.",
    "level": "A2",
    "lessonOrder": 147,
    "module": "schwa_and_reduction",
    "practiceStage": "sentence",
    "skillType": "suprasegmental",
    "difficultyScore": 3,
    "instruction": "Say need to smoothly, without making to too strong.",
    "tags": [
      "schwa",
      "weak_forms",
      "thai_learners"
    ],
    "pairGroup": "schwa_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      145,
      146,
      144,
      140,
      141
    ],
    "targetSounds": [
      "schwa"
    ],
    "ipaTargets": [
      "/schwa/"
    ],
    "targetFeatures": [
      "weak_forms",
      "function_word_reduction"
    ],
    "focusWords": [
      "need",
      "to",
      "go"
    ],
    "thaiErrorPattern": "Thai learners may give full vowels to weak syllables instead of using a relaxed schwa or reduced vowel.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "schwa",
        "words": [
          "need",
          "to",
          "go"
        ],
        "threshold": 70
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "need",
          "to",
          "go"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "function_word_reduction",
        "words": [
          "need",
          "to",
          "go"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice the weak syllable by itself, then say the whole prompt.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "need",
          "to",
          "go"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      }
    ],
    "successMessage": "Good. The weak vowel sounded more natural.",
    "teacherNotes": "Starter item for schwa, reduction, and weak function words.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_stress_review",
      "expectedText": "I need to go.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "stress_score_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 148,
    "displayName": "Linking phrase turn it on",
    "sentence": "Turn it on.",
    "audioPromptText": "Listen carefully, then repeat: Turn it on.",
    "level": "A2",
    "lessonOrder": 148,
    "module": "connected_speech",
    "practiceStage": "phrase",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Link turn it on smoothly.",
    "tags": [
      "connected_speech",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      149,
      150,
      153,
      154,
      69
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "linking",
      "connected_speech"
    ],
    "focusWords": [
      "turn",
      "it",
      "on"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural linking and reduction difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "linking",
        "words": [
          "turn",
          "it",
          "on"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "turn",
          "it",
          "on"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Shadow the full phrase after a model. Then try again at natural speed.",
    "errorRules": [
      {
        "ruleId": "connected_speech_low",
        "scope": "sentence",
        "targets": [
          "turn",
          "it",
          "on"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Connect the words smoothly. Do not pause after every word.",
        "action": "shadow_sentence"
      }
    ],
    "successMessage": "Good. The words were connected more smoothly.",
    "teacherNotes": "Starter connected-speech item. These may need sentence-level or teacher-model feedback more than phoneme scoring.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "Turn it on.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 149,
    "displayName": "Linking phrase pick it up",
    "sentence": "Pick it up.",
    "audioPromptText": "Listen carefully, then repeat: Pick it up.",
    "level": "A2",
    "lessonOrder": 149,
    "module": "connected_speech",
    "practiceStage": "phrase",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Link pick it up smoothly.",
    "tags": [
      "connected_speech",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      148,
      150,
      153,
      154,
      69
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "linking",
      "connected_speech"
    ],
    "focusWords": [
      "pick",
      "it",
      "up"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural linking and reduction difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "linking",
        "words": [
          "pick",
          "it",
          "up"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "pick",
          "it",
          "up"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Shadow the full phrase after a model. Then try again at natural speed.",
    "errorRules": [
      {
        "ruleId": "connected_speech_low",
        "scope": "sentence",
        "targets": [
          "pick",
          "it",
          "up"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Connect the words smoothly. Do not pause after every word.",
        "action": "shadow_sentence"
      }
    ],
    "successMessage": "Good. The words were connected more smoothly.",
    "teacherNotes": "Starter connected-speech item. These may need sentence-level or teacher-model feedback more than phoneme scoring.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "Pick it up.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 150,
    "displayName": "Linking sentence read it again",
    "sentence": "Read it again.",
    "audioPromptText": "Listen carefully, then repeat: Read it again.",
    "level": "A2",
    "lessonOrder": 150,
    "module": "connected_speech",
    "practiceStage": "phrase",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Link read it and keep again weak at the start.",
    "tags": [
      "connected_speech",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      148,
      149,
      140,
      141,
      142
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "linking",
      "connected_speech",
      "schwa"
    ],
    "focusWords": [
      "read",
      "it",
      "again"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural linking and reduction difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "linking",
        "words": [
          "read",
          "it",
          "again"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "read",
          "it",
          "again"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "schwa",
        "words": [
          "read",
          "it",
          "again"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Shadow the full phrase after a model. Then try again at natural speed.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "read",
          "it",
          "again"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      },
      {
        "ruleId": "connected_speech_low",
        "scope": "sentence",
        "targets": [
          "read",
          "it",
          "again"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Connect the words smoothly. Do not pause after every word.",
        "action": "shadow_sentence"
      }
    ],
    "successMessage": "Good. The words were connected more smoothly.",
    "teacherNotes": "Starter connected-speech item. These may need sentence-level or teacher-model feedback more than phoneme scoring.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "Read it again.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction",
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 151,
    "displayName": "Assimilation phrase can you",
    "sentence": "Can you help me?",
    "audioPromptText": "Listen carefully, then repeat: Can you help me?",
    "level": "A2",
    "lessonOrder": 151,
    "module": "connected_speech",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Say can you smoothly. Do not pause between can and you.",
    "tags": [
      "connected_speech",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      152,
      155,
      148,
      149,
      150
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "assimilation",
      "connected_speech",
      "weak_forms"
    ],
    "focusWords": [
      "can",
      "you",
      "help"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural linking and reduction difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "assimilation",
        "words": [
          "can",
          "you",
          "help"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "can",
          "you",
          "help"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "can",
          "you",
          "help"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Shadow the full phrase after a model. Then try again at natural speed.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "can",
          "you",
          "help"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      },
      {
        "ruleId": "connected_speech_low",
        "scope": "sentence",
        "targets": [
          "can",
          "you",
          "help"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Connect the words smoothly. Do not pause after every word.",
        "action": "shadow_sentence"
      }
    ],
    "successMessage": "Good. The words were connected more smoothly.",
    "teacherNotes": "Starter connected-speech item. These may need sentence-level or teacher-model feedback more than phoneme scoring.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "Can you help me?",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction",
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 152,
    "displayName": "Reduction phrase want to",
    "sentence": "Do you want to try?",
    "audioPromptText": "Listen carefully, then repeat: Do you want to try?",
    "level": "B1",
    "lessonOrder": 152,
    "module": "connected_speech",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Say want to smoothly, like natural connected speech.",
    "tags": [
      "connected_speech",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      155,
      154,
      151,
      148,
      149
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "reduction",
      "connected_speech",
      "weak_forms"
    ],
    "focusWords": [
      "do",
      "you",
      "want",
      "to",
      "try"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural linking and reduction difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "reduction",
        "words": [
          "do",
          "you",
          "want",
          "to",
          "try"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "do",
          "you",
          "want",
          "to",
          "try"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "do",
          "you",
          "want",
          "to",
          "try"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Shadow the full phrase after a model. Then try again at natural speed.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "do",
          "you",
          "want",
          "to",
          "try"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      },
      {
        "ruleId": "connected_speech_low",
        "scope": "sentence",
        "targets": [
          "do",
          "you",
          "want",
          "to",
          "try"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Connect the words smoothly. Do not pause after every word.",
        "action": "shadow_sentence"
      }
    ],
    "successMessage": "Good. The words were connected more smoothly.",
    "teacherNotes": "Starter connected-speech item. These may need sentence-level or teacher-model feedback more than phoneme scoring.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_with_teacher_support",
    "appUse": "teacher_assignable",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": false,
    "reviewNotes": "Can be used with Grade 5 students after modeling, but should not appear too early.",
    "reviewStatusV0_7": "grade5_with_teacher_support",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "Do you want to try?",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 72,
        "strongPass": 82,
        "wordWatch": 70,
        "phonemeWatch": 68,
        "retryBelow": 68,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction",
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 2,
        "afterFail": "suggest_easier_remediation",
        "afterPass": "unlock_challenge_badge"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_with_teacher_support"
  },
  {
    "id": 153,
    "displayName": "Elision phrase do not know",
    "sentence": "I don't know.",
    "audioPromptText": "Listen carefully, then repeat: I don't know.",
    "level": "A2",
    "lessonOrder": 153,
    "module": "connected_speech",
    "practiceStage": "phrase",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Do not over-pronounce every written letter. Keep the phrase smooth.",
    "tags": [
      "connected_speech",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      148,
      149,
      150,
      154,
      151
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "elision",
      "connected_speech"
    ],
    "focusWords": [
      "don't",
      "know"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural linking and reduction difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "elision",
        "words": [
          "don't",
          "know"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "don't",
          "know"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Shadow the full phrase after a model. Then try again at natural speed.",
    "errorRules": [
      {
        "ruleId": "connected_speech_low",
        "scope": "sentence",
        "targets": [
          "don't",
          "know"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Connect the words smoothly. Do not pause after every word.",
        "action": "shadow_sentence"
      }
    ],
    "successMessage": "Good. The words were connected more smoothly.",
    "teacherNotes": "Starter connected-speech item. These may need sentence-level or teacher-model feedback more than phoneme scoring.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "I don't know.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 154,
    "displayName": "Reduction phrase going to",
    "sentence": "going to",
    "audioPromptText": "Listen carefully, then repeat: going to",
    "level": "A2",
    "lessonOrder": 154,
    "module": "connected_speech",
    "practiceStage": "phrase",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Practice the reduced rhythm of going to.",
    "tags": [
      "connected_speech",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      152,
      155,
      148,
      149,
      150
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "reduction",
      "connected_speech"
    ],
    "focusWords": [
      "going",
      "to"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural linking and reduction difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "reduction",
        "words": [
          "going",
          "to"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "going",
          "to"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Shadow the full phrase after a model. Then try again at natural speed.",
    "errorRules": [
      {
        "ruleId": "connected_speech_low",
        "scope": "sentence",
        "targets": [
          "going",
          "to"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Connect the words smoothly. Do not pause after every word.",
        "action": "shadow_sentence"
      }
    ],
    "successMessage": "Good. The words were connected more smoothly.",
    "teacherNotes": "Starter connected-speech item. These may need sentence-level or teacher-model feedback more than phoneme scoring.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "going to",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 155,
    "displayName": "Connected sentence going to read",
    "sentence": "I am going to read.",
    "audioPromptText": "Listen carefully, then repeat: I am going to read.",
    "level": "A2",
    "lessonOrder": 155,
    "module": "connected_speech",
    "practiceStage": "sentence",
    "skillType": "connected_speech",
    "difficultyScore": 3,
    "instruction": "Make going to smooth and light before read.",
    "tags": [
      "connected_speech",
      "starter_phrase",
      "thai_learners"
    ],
    "pairGroup": "connected_speech_starter_set",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      152,
      154,
      151,
      148,
      149
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "reduction",
      "connected_speech",
      "weak_forms"
    ],
    "focusWords": [
      "going",
      "to",
      "read"
    ],
    "thaiErrorPattern": "Thai learners may pronounce each written word separately, making natural linking and reduction difficult.",
    "scoringTargets": [
      {
        "type": "word_or_sentence",
        "target": "reduction",
        "words": [
          "going",
          "to",
          "read"
        ],
        "threshold": 75
      },
      {
        "type": "word_or_sentence",
        "target": "connected_speech",
        "words": [
          "going",
          "to",
          "read"
        ],
        "threshold": 75
      },
      {
        "type": "prosody_or_word",
        "target": "weak_forms",
        "words": [
          "going",
          "to",
          "read"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Shadow the full phrase after a model. Then try again at natural speed.",
    "errorRules": [
      {
        "ruleId": "weak_vowel_low",
        "scope": "word",
        "targets": [
          "going",
          "to",
          "read"
        ],
        "trigger": {
          "wordScoreBelow": 74
        },
        "feedback": "Relax the weak vowel. Do not make every syllable strong.",
        "action": "slow_model_then_retry"
      },
      {
        "ruleId": "connected_speech_low",
        "scope": "sentence",
        "targets": [
          "going",
          "to",
          "read"
        ],
        "trigger": {
          "sentenceScoreBelow": 75
        },
        "feedback": "Connect the words smoothly. Do not pause after every word.",
        "action": "shadow_sentence"
      }
    ],
    "successMessage": "Good. The words were connected more smoothly.",
    "teacherNotes": "Starter connected-speech item. These may need sentence-level or teacher-model feedback more than phoneme scoring.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "default_lesson",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Suitable for Grade 5 with normal modeling and retry support.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence_with_word_fallback",
      "expectedText": "I am going to read.",
      "scoringModes": [
        "sentence_score",
        "word_score",
        "fluency_or_timing_if_available",
        "teacher_review_if_needed"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 85,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "weak_vowel_reduction",
        "connected_speech"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "suggest_remediation_links",
        "afterPass": "advance"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 156,
    "displayName": "Short I word ship",
    "sentence": "ship",
    "audioPromptText": "Listen carefully, then repeat: ship",
    "level": "A1",
    "lessonOrder": 156,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "ship_sheep_pair",
    "legacyPairWith": [],
    "contrastWith": [
      157
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "vowel_kit"
    ],
    "ipaTargets": [
      "/ih/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "ship"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_kit",
        "words": [
          "ship"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "ship"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "ship_sheep_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "ship",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 157,
    "displayName": "Long EE word sheep",
    "sentence": "sheep",
    "audioPromptText": "Listen carefully, then repeat: sheep",
    "level": "A1",
    "lessonOrder": 157,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "ship_sheep_pair",
    "legacyPairWith": [],
    "contrastWith": [
      156
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "vowel_fleece"
    ],
    "ipaTargets": [
      "/iy/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "sheep"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_fleece",
        "words": [
          "sheep"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "sheep"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "ship_sheep_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "sheep",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 158,
    "displayName": "Short U word full",
    "sentence": "full",
    "audioPromptText": "Listen carefully, then repeat: full",
    "level": "A1",
    "lessonOrder": 158,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "full_fool_pair",
    "legacyPairWith": [],
    "contrastWith": [
      159
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "vowel_foot"
    ],
    "ipaTargets": [
      "/ʊ/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "full"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_foot",
        "words": [
          "full"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "full"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "full_fool_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "full",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 159,
    "displayName": "Long OO word fool",
    "sentence": "fool",
    "audioPromptText": "Listen carefully, then repeat: fool",
    "level": "A1",
    "lessonOrder": 159,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "full_fool_pair",
    "legacyPairWith": [],
    "contrastWith": [
      158
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "vowel_goose"
    ],
    "ipaTargets": [
      "/uw/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "fool"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_goose",
        "words": [
          "fool"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "fool"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "full_fool_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "fool",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 160,
    "displayName": "E word bed",
    "sentence": "bed",
    "audioPromptText": "Listen carefully, then repeat: bed",
    "level": "A1",
    "lessonOrder": 160,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "bed_bad_pair",
    "legacyPairWith": [],
    "contrastWith": [
      161
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "vowel_dress"
    ],
    "ipaTargets": [
      "/eh/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "bed"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_dress",
        "words": [
          "bed"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "bed"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "bed_bad_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "bed",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 161,
    "displayName": "A word bad",
    "sentence": "bad",
    "audioPromptText": "Listen carefully, then repeat: bad",
    "level": "A1",
    "lessonOrder": 161,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "bed_bad_pair",
    "legacyPairWith": [],
    "contrastWith": [
      160
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "vowel_trap"
    ],
    "ipaTargets": [
      "/ae/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "bad"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "vowel_trap",
        "words": [
          "bad"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "bad"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "bed_bad_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "bad",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 162,
    "displayName": "Diphthong word late",
    "sentence": "late",
    "audioPromptText": "Listen carefully, then repeat: late",
    "level": "A1",
    "lessonOrder": 162,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "late_light_pair",
    "legacyPairWith": [],
    "contrastWith": [
      163
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "diphthong_face"
    ],
    "ipaTargets": [
      "/ey/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "late"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "diphthong_face",
        "words": [
          "late"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "late"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "late_light_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "late",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 163,
    "displayName": "Diphthong word light",
    "sentence": "light",
    "audioPromptText": "Listen carefully, then repeat: light",
    "level": "A1",
    "lessonOrder": 163,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "late_light_pair",
    "legacyPairWith": [],
    "contrastWith": [
      162
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "diphthong_price"
    ],
    "ipaTargets": [
      "/ay/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "light"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "diphthong_price",
        "words": [
          "light"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "light"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "late_light_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "light",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 164,
    "displayName": "Diphthong word boat",
    "sentence": "boat",
    "audioPromptText": "Listen carefully, then repeat: boat",
    "level": "A1",
    "lessonOrder": 164,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "boat_boy_pair",
    "legacyPairWith": [],
    "contrastWith": [
      165
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "diphthong_goat"
    ],
    "ipaTargets": [
      "/ow/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "boat"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "diphthong_goat",
        "words": [
          "boat"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "boat"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "boat_boy_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "boat",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 165,
    "displayName": "Diphthong word boy",
    "sentence": "boy",
    "audioPromptText": "Listen carefully, then repeat: boy",
    "level": "A1",
    "lessonOrder": 165,
    "module": "vowels",
    "practiceStage": "word",
    "skillType": "segmental",
    "difficultyScore": 2,
    "instruction": "Listen carefully to the vowel. Keep it distinct from the contrast word.",
    "tags": [
      "vowels",
      "minimal_pair",
      "word_level",
      "thai_learners"
    ],
    "pairGroup": "boat_boy_pair",
    "legacyPairWith": [],
    "contrastWith": [
      164
    ],
    "relatedPractice": [],
    "remediationLinks": [
      103,
      104,
      105,
      106,
      107
    ],
    "targetSounds": [
      "diphthong_choice"
    ],
    "ipaTargets": [
      "/oy/"
    ],
    "targetFeatures": [
      "minimal_pair"
    ],
    "focusWords": [
      "boy"
    ],
    "thaiErrorPattern": "Thai learners may need help hearing and producing English vowel length and diphthong contrasts.",
    "scoringTargets": [
      {
        "type": "phoneme",
        "target": "diphthong_choice",
        "words": [
          "boy"
        ],
        "threshold": 70
      },
      {
        "type": "word",
        "target": "minimal_pair",
        "words": [
          "boy"
        ],
        "threshold": 76
      }
    ],
    "minimalPairSet": "boat_boy_pair",
    "remediationStrategy": "Practice the vowel slowly, then contrast it with the paired word.",
    "errorRules": [],
    "successMessage": "Good. The vowel was clearer.",
    "teacherNotes": "Starter minimal pair for vowel perception and production.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "starter_or_remediation",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Good starter or remediation item for upper-elementary Thai learners.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_word",
      "expectedText": "boy",
      "scoringModes": [
        "word_score",
        "phoneme_score"
      ],
      "thresholdProfile": {
        "overallPass": 78,
        "strongPass": 85,
        "wordWatch": 76,
        "phonemeWatch": 70,
        "retryBelow": 72,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "general_pronunciation"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 4,
        "afterFail": "show_tip_then_retry_word",
        "afterPass": "advance_or_contrast_pair"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 166,
    "displayName": "Classroom phrase repeat",
    "sentence": "Can you repeat that, please?",
    "audioPromptText": "Listen carefully, then repeat: Can you repeat that, please?",
    "level": "A1",
    "lessonOrder": 166,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 2,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      167,
      172,
      168,
      169,
      170
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "repeat",
      "please"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "repeat",
          "please"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "repeat",
          "please"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful when students need another model.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Can you repeat that, please?",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 167,
    "displayName": "Classroom phrase do not understand",
    "sentence": "I do not understand yet.",
    "audioPromptText": "Listen carefully, then repeat: I do not understand yet.",
    "level": "A1",
    "lessonOrder": 167,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 2,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      166,
      172,
      168,
      169,
      170
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "understand",
      "yet"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "understand",
          "yet"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "understand",
          "yet"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful for students who need help but are hesitant.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I do not understand yet.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 168,
    "displayName": "Classroom phrase partner",
    "sentence": "May I work with my partner?",
    "audioPromptText": "Listen carefully, then repeat: May I work with my partner?",
    "level": "A2",
    "lessonOrder": 168,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 3,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      166,
      167,
      172,
      169,
      170
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "work",
      "partner"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "work",
          "partner"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "work",
          "partner"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful for group work.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "May I work with my partner?",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 169,
    "displayName": "Classroom phrase answer",
    "sentence": "I think the answer is correct.",
    "audioPromptText": "Listen carefully, then repeat: I think the answer is correct.",
    "level": "A2",
    "lessonOrder": 169,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 3,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      166,
      167,
      172,
      168,
      170
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "think",
      "answer",
      "correct"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "think",
          "answer",
          "correct"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "think",
          "answer",
          "correct"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful for explaining answers.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I think the answer is correct.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 170,
    "displayName": "Science phrase experiment",
    "sentence": "The experiment shows a change.",
    "audioPromptText": "Listen carefully, then repeat: The experiment shows a change.",
    "level": "A2",
    "lessonOrder": 170,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 3,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      166,
      167,
      172,
      168,
      169
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "experiment",
      "shows",
      "change"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "experiment",
          "shows",
          "change"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "experiment",
          "shows",
          "change"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful science classroom phrase.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "The experiment shows a change.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 171,
    "displayName": "Science phrase evidence",
    "sentence": "My evidence is the data.",
    "audioPromptText": "Listen carefully, then repeat: My evidence is the data.",
    "level": "A2",
    "lessonOrder": 171,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 3,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      166,
      167,
      172,
      168,
      169
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "evidence",
      "data"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "evidence",
          "data"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "evidence",
          "data"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful CER/science phrase.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "My evidence is the data.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 172,
    "displayName": "Classroom phrase more time",
    "sentence": "I need more time, please.",
    "audioPromptText": "Listen carefully, then repeat: I need more time, please.",
    "level": "A1",
    "lessonOrder": 172,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 2,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      166,
      167,
      168,
      169,
      170
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "need",
      "more",
      "time",
      "please"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "need",
          "more",
          "time",
          "please"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "need",
          "more",
          "time",
          "please"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful for test or task situations.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I need more time, please.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 173,
    "displayName": "Classroom phrase check work",
    "sentence": "Could you check my work?",
    "audioPromptText": "Listen carefully, then repeat: Could you check my work?",
    "level": "A2",
    "lessonOrder": 173,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 3,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      166,
      167,
      172,
      168,
      169
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "could",
      "check",
      "work"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "could",
          "check",
          "work"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "could",
          "check",
          "work"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful when asking for teacher feedback.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "Could you check my work?",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 174,
    "displayName": "Classroom phrase explain idea",
    "sentence": "I can explain my idea.",
    "audioPromptText": "Listen carefully, then repeat: I can explain my idea.",
    "level": "A2",
    "lessonOrder": 174,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 3,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      166,
      167,
      172,
      168,
      169
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "explain",
      "idea"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "explain",
          "idea"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "explain",
          "idea"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful for speaking and presentation work.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I can explain my idea.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  },
  {
    "id": 175,
    "displayName": "Classroom phrase agree",
    "sentence": "I agree because the evidence is clear.",
    "audioPromptText": "Listen carefully, then repeat: I agree because the evidence is clear.",
    "level": "B1",
    "lessonOrder": 175,
    "module": "real_world_phrases",
    "practiceStage": "real_world",
    "skillType": "real_world",
    "difficultyScore": 3,
    "instruction": "Say this as a useful classroom phrase. Make the important words clear.",
    "tags": [
      "real_world",
      "classroom_phrase",
      "thai_learners"
    ],
    "pairGroup": "classroom_survival_phrases",
    "legacyPairWith": [],
    "contrastWith": [],
    "relatedPractice": [],
    "remediationLinks": [
      166,
      167,
      172,
      168,
      169
    ],
    "targetSounds": [],
    "ipaTargets": [],
    "targetFeatures": [
      "real_world",
      "classroom_phrase"
    ],
    "focusWords": [
      "agree",
      "because",
      "evidence",
      "clear"
    ],
    "thaiErrorPattern": "Thai learners benefit from clear, repeatable classroom phrases they can use in real communication.",
    "scoringTargets": [
      {
        "type": "sentence",
        "target": "real_world",
        "words": [
          "agree",
          "because",
          "evidence",
          "clear"
        ],
        "threshold": 75
      },
      {
        "type": "sentence",
        "target": "classroom_phrase",
        "words": [
          "agree",
          "because",
          "evidence",
          "clear"
        ],
        "threshold": 75
      }
    ],
    "minimalPairSet": "",
    "remediationStrategy": "Practice slowly, then say it with natural classroom rhythm.",
    "errorRules": [],
    "successMessage": "Good. This classroom phrase was clear and useful.",
    "teacherNotes": "Useful discussion/CER phrase.",
    "ageSuitability": "upper_elementary",
    "accentModel": "general_north_american",
    "sourceVersion": "v0.5_new",
    "reviewStatus": "drafted_v0.5_needs_teacher_review",
    "datasetVersion": "v1.0",
    "classroomStatus": "grade5_ready",
    "appUse": "real_world_practice",
    "studentVisible": true,
    "teacherAssignable": true,
    "defaultAutoPath": true,
    "reviewNotes": "Useful classroom communication phrase.",
    "reviewStatusV0_7": "grade5_ready",
    "speechaceIntegration": {
      "activityType": "score_text_pronunciation_sentence",
      "expectedText": "I agree because the evidence is clear.",
      "scoringModes": [
        "sentence_score",
        "word_score"
      ],
      "thresholdProfile": {
        "overallPass": 75,
        "strongPass": 84,
        "wordWatch": 74,
        "phonemeWatch": 70,
        "retryBelow": 70,
        "teacherReviewBelow": 65
      },
      "feedbackProfiles": [
        "real_world_clarity"
      ],
      "retryPolicy": {
        "maxAttemptsPerSession": 3,
        "afterFail": "show_tip_then_shadow_sentence",
        "afterPass": "mark_phrase_ready"
      },
      "sendAudioToBackendOnly": true,
      "storeAudioByDefault": false,
      "customPronunciationNeeded": false,
      "fallbackIfPhonemeMissing": "Use word_score and focusWords if phoneme-level data is unavailable.",
      "fallbackIfProsodyMissing": "Use sentence_score, word_score, and teacher review for stress, rhythm, connected speech, or intonation items."
    },
    "developerHandoffReady": true,
    "releaseCandidate": false,
    "releaseStatus": "final",
    "reviewStatusFinal": "grade5_ready"
  }
];
