import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { STARTER_PACK_ENTRIES } from "./src/data/starterPack";

dotenv.config();

const app = express();
const PORT = 3000;

// Increase payload size for base64 audio
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Helper to look up an entry by ID from our starter pack database
function getEntryById(id: number) {
  return STARTER_PACK_ENTRIES.find((e) => e.id === id) || null;
}

// REST API Endpoints

// 1. Get entire app config and available dataset metadata
app.get("/api/config", (req, res) => {
  res.json({
    appName: "Thai-English Pronunciation Coach",
    version: "1.0",
    prototypeMode: true,
    firstRunDiagnostic: "quick_placement_a1_a2",
    entryIds: STARTER_PACK_ENTRIES.map((e) => e.id)
  });
});

// 2. Load singular entry (student-safe view)
app.get("/api/entries/:entryId", (req, res) => {
  const entryId = Number(req.params.entryId);
  const entry = getEntryById(entryId);
  if (!entry) {
    return res.status(404).json({ error: `Entry ${entryId} not found.` });
  }

  // Return student-safe fields
  res.json({
    id: entry.id,
    displayName: entry.displayName,
    sentence: entry.sentence,
    audioPromptText: entry.audioPromptText,
    module: entry.module,
    practiceStage: entry.practiceStage,
    instruction: entry.instruction,
    studentVisible: entry.studentVisible,
    contrastWith: entry.contrastWith,
    remediationLinks: entry.remediationLinks
  });
});

// 3. Score pronunciation (Mock mode by default, extensible to Speechace/Gemini APIs securely)
app.post("/api/pronunciation/score", (req, res) => {
  const { entryId, studentIdHash, sessionId, attemptNumber, clientRecordedAtIso, audioBase64 } = req.body;

  const numericEntryId = Number(entryId);
  const entry = getEntryById(numericEntryId);
  if (!entry) {
    return res.status(404).json({ error: `Entry ${numericEntryId} not found.` });
  }

  // Determine scoring thresholds from entry speechaceIntegration if available
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

  const thresholds = speechaceMetadata.thresholdProfile;
  const feedbackProfileName = speechaceMetadata.feedbackProfiles[0] || "general_pronunciation";

  // Mapping feedback profile names to kid-friendly student tips (Grade 5 appropriate)
  const feedbackProfilesMap: Record<string, string> = {
    "th_articulation": "Put your tongue lightly between your teeth for TH and blow air gently.",
    "lip_shape_v_w_f": "Check your lips. For V and F, touch top teeth to bottom lip. For W, round your lips.",
    "z_voicing": "Make the Z sound buzz! Put your hand on your throat to feel it vibrate.",
    "sibilant_affricate_contrast": "Keep the SH sound soft (shhh) and style CH sharp with a quick tap.",
    "r_l_contrast": "L touches behind your top teeth. For R, pull your tongue back without touching.",
    "nasal_place_contrast": "For M, close your lips. For N, press your tongue up. For NG, raise the back of your tongue.",
    "final_sound_control": "Finish the ending clearly! Do not cut off the last sound of the word.",
    "cluster_control": "Keep the consonants close together. No extra vowels inside.",
    "weak_vowel_reduction": "Relax and say the weak syllables lightly, like a quiet 'uh'.",
    "connected_speech": "Let the words flow together. Chain them smoothly like a single continuous line.",
    "stress_and_rhythm": "Exaggerate! Make the important syllable louder, longer, and higher in pitch.",
    "intonation_teacher_review": "Listen and follow the melody of the sentence going up or down.",
    "real_world_clarity": "Speak loud and clear, like you want to tell your teacher in a busy classroom.",
    "general_pronunciation": "Take it slow at first, make each sound clear, then say it naturally."
  };

  // Mock scoring logic, rotating through multiple bands to test retry / remediation logic
  const outcomes = ["strong", "pass", "targeted_retry", "retry"];
  // We can choose pseudo-randomly or based on student input keywords to make it look responsive
  const randomIndex = Math.floor(Math.random() * outcomes.length);
  const status = outcomes[randomIndex] as "strong" | "pass" | "targeted_retry" | "retry";

  let overallScore = 72;
  let scoreBand: "green" | "blue" | "orange" | "red" = "yellow" as any;
  let mainFeedback = "";
  let nextAction = "retry";

  const kidFriendlyTip = feedbackProfilesMap[feedbackProfileName] || feedbackProfilesMap["general_pronunciation"];

  if (status === "strong") {
    overallScore = Math.floor(Math.random() * 15) + 85; // 85 to 99
    scoreBand = "green";
    mainFeedback = entry.successMessage || "Great job! That sounded clear and natural.";
    nextAction = "advance";
  } else if (status === "pass") {
    overallScore = Math.floor(Math.random() * 9) + 75; // 75 to 84
    scoreBand = "blue";
    mainFeedback = `Good work! ${kidFriendlyTip}`;
    nextAction = "advance";
  } else if (status === "targeted_retry") {
    overallScore = Math.floor(Math.random() * 4) + 71; // 71 to 74
    scoreBand = "orange";
    mainFeedback = entry.thaiErrorPattern 
      ? `Almost there! Focus on: ${entry.focusWords.join(", ")}. ${kidFriendlyTip}`
      : `Nice try! Keep working on it. ${kidFriendlyTip}`;
    nextAction = "retry_focus_words";
  } else {
    overallScore = Math.floor(Math.random() * 10) + 55; // 55 to 65
    scoreBand = "red";
    mainFeedback = `Keep practicing! ${kidFriendlyTip} Say it slowly first.`;
    nextAction = "retry";
  }

  // Attempt records can log telemetry metadata, safely hiding database/PII complexities mockingly
  const attemptId = `att-${Math.random().toString(36).substr(2, 9)}`;

  res.json({
    attemptId,
    entryId: entry.id,
    status,
    overallScore,
    scoreBand,
    mainFeedback,
    nextAction,
    recommendedEntryIds: entry.remediationLinks || []
  });
});

// Serve frontend assets
async function startViteOrProduction() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite dev server mounted as middleware");
  } else {
    // Production Mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static assets from dist folder");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on host '0.0.0.0' on port ${PORT}`);
  });
}

startViteOrProduction();
