# Azure Speech Pronunciation Assessment Integration Plan (AUDITED v2)

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Replace mock scoring in SpeakUp with real Azure Speech Pronunciation Assessment — accept WebM audio from the browser, send to Azure, return structured scores to the React UI.

**Architecture:** A standalone ES-module Node.js Express server (`src/server/`) wraps the Azure Speech SDK. The React frontend calls `POST /api/assess`. In development, Vite proxies `/api/*` to `localhost:3001`. For production the frontend calls a separate backend host (Render / Railway). A mock fallback is retained for offline use.

**Tech Stack:** Node.js (ESM), Azure Cognitive Services Speech SDK (`microsoft-cognitiveservices-speech-sdk`), Express, multer, fluent-ffmpeg, `@ffmpeg-installer/ffmpeg`, dotenv, React 19 + TypeScript (existing)

---

## Audit Notes — Why This Plan Differs From v1

- `package.json` declares `"type": "module"` → all new backend files **must** use `import`, not `require`.
- Azure JSON is retrieved via `result.properties.getProperty(PropertyId.SpeechServiceResponse_JsonResult)`, **not** a direct field `SpeechServiceResponse_JsonResult`.
- `ScoreResponse.scoreBand` union has **five** literals (`'green' | 'blue' | 'yellow' | 'orange' | 'red'`). Mapping must cover `yellow`.
- Local dev requires either CORS or a Vite proxy; the plan now adds the proxy.
- Temp-file cleanup must be guaranteed (`try { ... } finally { fs.unlinkSync(...) }`).
- Azure `Canceled` results expose `CancellationDetails` — plan shows how to surface them.
- Added deployment guidance (Render free tier) because GitHub Pages cannot host Express.
- `handleCheckSound` artificial 1.5-second delay is removed when Azure succeeds (latency is already real).

---

## Current State

- `src/utils/scorePronunciation.ts:28-101` — mock random scoring
- `src/components/StudentPractice.tsx:121-148` — `handleCheckSound` calls mock only
- `src/types.ts:51-60` — no Azure result types
- Audio recorded as WebM (line 91)
- `.env.example` has only Gemini keys
- No server directory exists

---

## Target Architecture (Dev vs Prod)

```
Dev:
Browser → Vite (:5173) → proxy /api → Express (:3001) → Azure

Prod:
Browser (GitHub Pages) → Render backend → Azure
```

---

### Task 0: Verify environment before starting

**Objective:** Confirm the repo is clean and Node is ESM-aware.

```bash
cd C:\Users\Michael\Desktop\speakup-azure
node --version          # should be 18+
npm --version
ls src/server           # should fail (directory does not exist yet)
```

---

### Task 1: Install backend dependencies (ESM-compatible)

**Objective:** Add Azure SDK + Express stack under `"type":"module"`.

```bash
npm install express cors multer @ffmpeg-installer/ffmpeg fluent-ffmpeg microsoft-cognitiveservices-speech-sdk dotenv
npm install --save-dev @types/express @types/cors @types/multer @types/node
```

**Add server scripts** to `package.json` (after existing scripts):

```json
"server": "node --loader ts-node/esm src/server/index.js",
"server:dev": "node --watch --loader ts-node/esm src/server/index.js"
```

> Note: We keep pure JS. No TypeScript on the server yet.

**Verification:**
```bash
npm ls microsoft-cognitiveservices-speech-sdk
# Should show the package without "missing" errors
```

---

### Task 2: Update environment files

**Files:** `.env.example`

Append:

```bash
# === Azure Speech Service (Pronunciation Assessment) ===
AZURE_SPEECH_KEY=your_key_here
AZURE_SPEECH_REGION=eastus

# === Backend URL (frontend) ===
# In development, leave blank — Vite proxy handles it.
# In production, set to your Render/Railway URL.
VITE_API_BASE=
```

Create a local `.env` (git-ignored) with real credentials when ready.

**Verification:** `.env.example` now shows both Azure vars and `VITE_API_BASE`.

---

### Task 3: Configure Vite dev proxy

**File:** `vite.config.ts`

Add proxy inside `defineConfig`:

```ts
server: {
  hmr: process.env.DISABLE_HMR !== 'true',
  watch: process.env.DISABLE_HMR === 'true' ? null : {},
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  },
},
```

**Verification:** After `npm run dev`, a fetch to `/api/health` in browser console reaches the Express server.

---

### Task 4: Create the core Azure assessment module (ESM)

**File:** `src/server/assessPronunciation.js`

**Full code** (copy-paste ready):

```js
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const { SpeechConfig, AudioConfig, SpeechRecognizer,
        PronunciationAssessmentConfig, PronunciationAssessmentGradingSystem,
        PronunciationAssessmentGranularity, PropertyId, ResultReason, CancellationReason } = sdk;

export async function assessPronunciation({ audioFilePath, referenceText, locale = 'en-US' }) {
  if (!fs.existsSync(audioFilePath)) {
    throw new Error(`Audio file not found: ${audioFilePath}`);
  }
  if (!referenceText || referenceText.trim() === '') {
    throw new Error('referenceText is required for scripted assessment');
  }

  const speechKey = process.env.AZURE_SPEECH_KEY;
  const speechRegion = process.env.AZURE_SPEECH_REGION;
  if (!speechKey || !speechRegion) {
    throw new Error('AZURE_SPEECH_KEY and AZURE_SPEECH_REGION must be set');
  }

  const speechConfig = SpeechConfig.fromSubscription(speechKey, speechRegion);
  speechConfig.speechRecognitionLanguage = locale;

  const audioConfig = AudioConfig.fromWavFileInput(audioFilePath);

  const pronunciationConfig = new PronunciationAssessmentConfig(
    referenceText,
    PronunciationAssessmentGradingSystem.HundredMark,
    PronunciationAssessmentGranularity.Phoneme,
    false // enableMiscue — false because we do not rely on it in continuous mode
  );

  if (locale === 'en-US') {
    pronunciationConfig.enableProsodyAssessment = true;
  }

  const recognizer = new SpeechRecognizer(speechConfig, audioConfig);
  pronunciationConfig.applyTo(recognizer);

  return new Promise((resolve, reject) => {
    recognizer.recognizeOnceAsync(
      (result) => {
        if (result.reason === ResultReason.RecognizedSpeech) {
          const jsonStr = result.properties.getProperty(PropertyId.SpeechServiceResponse_JsonResult);
          const azureJson = JSON.parse(jsonStr);
          const normalized = normalizeAzureResult(azureJson, referenceText, locale);
          resolve(normalized);
        } else if (result.reason === ResultReason.NoMatch) {
          reject(new Error('No speech recognized. The audio may be silent or too noisy.'));
        } else if (result.reason === ResultReason.Canceled) {
          const cancellation = sdk.CancellationDetails.fromResult(result);
          reject(new Error(`Recognition canceled: ${cancellation.reason} — ${cancellation.errorDetails}`));
        } else {
          reject(new Error(`Unexpected result reason: ${result.reason}`));
        }
        recognizer.close();
      },
      (err) => {
        reject(err);
        recognizer.close();
      }
    );
  });
}

function normalizeAzureResult(azureJson, referenceText, locale) {
  const nbest = azureJson.NBest?.[0] || {};
  const pron = nbest.PronunciationAssessment || {};

  const words = (nbest.Words || []).map(w => ({
    word: w.Word,
    accuracy: w.PronunciationAssessment?.AccuracyScore ?? 0,
    errorType: w.PronunciationAssessment?.ErrorType ?? 'None',
    offset100ns: w.Offset,
    duration100ns: w.Duration,
    syllables: w.Syllables || [],
    phonemes: w.Phonemes || [],
  }));

  return {
    success: true,
    locale,
    referenceText,
    recognizedText: nbest.Display || azureJson.DisplayText || '',
    processingMode: 'single',
    scores: {
      accuracy: pron.AccuracyScore ?? 0,
      fluency: pron.FluencyScore ?? 0,
      completeness: pron.CompletenessScore ?? 0,
      prosody: pron.ProsodyScore ?? 0,
      overall: pron.PronScore ?? 0,
    },
    words,
    rawAzure: azureJson,
  };
}
```

**Verification:**
```bash
node --input-type=module -e "
import { assessPronunciation } from './src/server/assessPronunciation.js';
console.log('Module loaded successfully');
"
```

---

### Task 5: Create the Express server (ESM + temp file safety)

**File:** `src/server/index.js`

```js
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';
import { assessPronunciation } from './assessPronunciation.js';

ffmpeg.setFfmpegPath(ffmpegPath.path);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/assess', upload.single('audio'), async (req, res) => {
  const { referenceText, locale = 'en-US' } = req.body;
  if (!req.file) {
    return res.status(400).json({ success: false, error: 'No audio file uploaded' });
  }
  if (!referenceText) {
    return res.status(400).json({ success: false, error: 'referenceText is required' });
  }

  const originalPath = req.file.path;
  const wavPath = originalPath + '.wav';

  try {
    // Convert WebM → WAV (16 kHz mono)
    await new Promise((resolve, reject) => {
      ffmpeg(originalPath)
        .audioFrequency(16000)
        .audioChannels(1)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save(wavPath)
        .on('end', resolve)
        .on('error', reject);
    });

    const result = await assessPronunciation({
      audioFilePath: wavPath,
      referenceText,
      locale,
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    const status = err.message.includes('AZURE_SPEECH_KEY') ? 401 : 500;
    res.status(status).json({ success: false, error: err.message });
  } finally {
    // Guaranteed cleanup
    try { fs.unlinkSync(originalPath); } catch (_) {}
    try { fs.unlinkSync(wavPath); } catch (_) {}
  }
});

app.listen(PORT, () => {
  console.log(`SpeakUp Azure backend listening on http://localhost:${PORT}`);
});
```

**Verification:**
```bash
npm run server
# In another terminal:
curl http://localhost:3001/api/health
```

---

### Task 6: Add Azure response types to `src/types.ts`

Append after `ScoreResponse`:

```typescript
export interface AzurePhoneme {
  Phoneme?: string;
  phoneme?: string;
  AccuracyScore?: number;
  accuracy?: number;
  Offset?: number;
  offset100ns?: number;
  Duration?: number;
  duration100ns?: number;
}

export interface AzureSyllable {
  Syllable?: string;
  syllable?: string;
  AccuracyScore?: number;
  accuracy?: number;
  Offset?: number;
  offset100ns?: number;
  Duration?: number;
  duration100ns?: number;
  Phonemes?: AzurePhoneme[];
  phonemes?: AzurePhoneme[];
}

export interface AzureWord {
  Word: string;
  word: string;
  AccuracyScore?: number;
  accuracy?: number;
  ErrorType?: string;
  errorType?: string;
  Offset: number;
  offset100ns?: number;
  Duration: number;
  duration100ns?: number;
  Syllables?: AzureSyllable[];
  syllables?: AzureSyllable[];
  Phonemes?: AzurePhoneme[];
  phonemes?: AzurePhoneme[];
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
```

---

### Task 7: Frontend API client (`src/utils/assessApi.ts`)

```ts
import { AzureAssessResponse } from '../types';

export async function assessWithAzure(
  audioBlob: Blob,
  referenceText: string,
  locale = 'en-US'
): Promise<AzureAssessResponse> {
  const formData = new FormData();
  formData.append('audio', audioBlob, 'recording.webm');
  formData.append('referenceText', referenceText);
  formData.append('locale', locale);

  // In dev the Vite proxy rewrites /api → localhost:3001
  // In prod VITE_API_BASE must be set to the real backend origin
  const base = import.meta.env.VITE_API_BASE || '';
  const res = await fetch(`${base}/api/assess`, { method: 'POST', body: formData });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `HTTP ${res.status}`);
  }
  return res.json();
}
```

---

### Task 8: Wire real scoring into StudentPractice (with fallback)

**Modify `src/components/StudentPractice.tsx`**

Add imports:
```tsx
import { assessWithAzure } from '../utils/assessApi';
import { AzureAssessResponse, DatasetEntry, ScoreResponse, ScoreStatus } from '../types';
```

Replace `handleCheckSound` body (lines 121-148) with:

```tsx
const handleCheckSound = async () => {
  if (!currentEntry) return;
  setLoading(true);

  try {
    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
    const referenceText = currentEntry.speechaceIntegration?.expectedText || currentEntry.sentence;

    let resData: ScoreResponse;

    try {
      const azureResult = await assessWithAzure(audioBlob, referenceText, 'en-US');
      resData = mapAzureToScoreResponse(azureResult, currentEntry);
    } catch (azureErr) {
      console.warn('Azure backend unavailable – falling back to mock scoring', azureErr);
      resData = scorePronunciation(currentEntry.id);
    }

    setScoreResult(resData);
    setPracticeHistory(prev => [...prev, {
      entry: currentEntry,
      score: resData.overallScore,
      status: resData.status,
      mainFeedback: resData.mainFeedback,
    }]);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
```

Add the mapping helper **above** `handleCheckSound`:

```tsx
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
    const bad = azure.words.filter(w => (w.ErrorType || w.errorType) !== 'None').map(w => w.Word || w.word);
    mainFeedback = `Almost there. Focus on: ${bad.slice(0,3).join(', ')}`;
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
```

**Verification:** `npm run lint` (tsc --noEmit) exits 0.

---

### Task 9: End-to-end manual test

1. `npm run server` (terminal 1)
2. `npm run dev` (terminal 2)
3. Browser → pick Unit 1 → record “Thank you...” → Check Sound
4. Expect real Azure scores (different each attempt). If Azure key missing → graceful fallback to mock.

---

### Task 10: Error UI surface (bonus polish)

Inside `StudentPractice.tsx`, add a small error banner state:

```tsx
const [errorMsg, setErrorMsg] = useState<string | null>(null);

// In catch inside handleCheckSound:
setErrorMsg(err.message || 'Assessment failed');
setTimeout(() => setErrorMsg(null), 4000);
```

Render it above the feedback panel when non-null.

---

## Deployment Notes

- GitHub Pages hosts only the static SPA.
- Deploy the Express server to **Render** (free tier) or Railway.
- Set `VITE_API_BASE=https://speakup-api.onrender.com` in the deployed frontend environment.
- Add a `render.yaml` or use the Render dashboard “Web Service” with `npm install && npm run server`.

---

## Final File List

| File | Action |
|---|---|
| `package.json` | add scripts + deps |
| `vite.config.ts` | add `/api` proxy |
| `.env.example` | add Azure + VITE_API_BASE |
| `src/server/assessPronunciation.js` | **create** (full module) |
| `src/server/index.js` | **create** (Express + ffmpeg) |
| `src/types.ts` | append Azure types |
| `src/utils/assessApi.ts` | **create** |
| `src/components/StudentPractice.tsx` | replace handleCheckSound + add mapper |

---

**Plan complete and ready for execution.** All code is copy-pasteable, every verification step is executable, and the ESM / Azure JSON / score-band issues identified in the audit are resolved.