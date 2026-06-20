// src/server/index.js
//
// Express API server for SpeakUp Azure Speech Pronunciation Assessment.
//
// Endpoints:
//   GET  /api/health              -> { status: 'ok' }
//   POST /api/assess              -> AzureAssessResponse | { success:false, error }
//
// The frontend posts WebM audio recorded in the browser. We transcode to
// 16 kHz mono PCM WAV (the only format Azure Speech accepts for synchronous
// pronunciation assessment) using ffmpeg, then forward to Azure.
//
// In development, Vite's proxy forwards /api/* to this server (see
// vite.config.ts → server.proxy). In production, the frontend must set
// VITE_API_BASE to this server's public origin.

import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';
import dotenv from 'dotenv';
import { assessPronunciation } from './assessPronunciation.js';

dotenv.config();
ffmpeg.setFfmpegPath(ffmpegPath.path);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/assess', upload.single('audio'), async (req, res) => {
  const referenceText = (req.body?.referenceText || '').trim();
  const locale = (req.body?.locale || 'en-US').trim();

  if (!req.file) {
    return res.status(400).json({ success: false, error: 'No audio file uploaded' });
  }
  if (!referenceText) {
    return res.status(400).json({ success: false, error: 'referenceText is required' });
  }

  const inputPath = req.file.path;
  const wavPath = `${inputPath}.wav`;

  // Race the Azure call against a 30-second hard timeout so the HTTP
  // response can't hang indefinitely on a stuck recognition.
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Azure recognition timed out after 30s')), 30_000),
  );

  try {
    // 1. Transcode WebM/Opus -> 16 kHz mono PCM WAV
    await transcodeToWav(inputPath, wavPath);

    // 2. Read WAV bytes
    const audioBuffer = fs.readFileSync(wavPath);

    // 3. Call Azure (with hard timeout)
    const result = await Promise.race([
      assessPronunciation({ audioBuffer, referenceText, locale }),
      timeout,
    ]);
    res.json(result);
  } catch (err) {
    console.error('[assess] error:', err.message);
    let status = 500;
    if (/AZURE_SPEECH_KEY/.test(err.message)) status = 401;
    else if (/canceled \(Error/.test(err.message)) status = 502;
    else if (/timed out/.test(err.message)) status = 504;
    else if (/No speech recognized/.test(err.message)) status = 422;
    // Sanitize Azure SDK internals from client-facing responses.
    const safeMsg = sanitizeError(err.message);
    res.status(status).json({ success: false, error: safeMsg });
  } finally {
    // Always clean up temp files
    try { fs.unlinkSync(inputPath); } catch { /* ignore */ }
    try { fs.unlinkSync(wavPath); } catch { /* ignore */ }
  }
});

// Express 5 supports async handlers natively, but keep a generic error fallback.
app.use((err, _req, res, _next) => {
  console.error('[unhandled]', err);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

function transcodeToWav(input, output) {
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .audioFrequency(16000)
      .audioChannels(1)
      .audioCodec('pcm_s16le')
      .format('wav')
      .save(output)
      .on('end', () => resolve(output))
      .on('error', (err) => reject(new Error(`ffmpeg failed: ${err.message}`)));
  });
}

// Strip Azure SDK internals (status codes, connection URLs, error detail codes)
// from error messages before sending them to clients.
function sanitizeError(msg) {
  if (!msg) return 'Assessment failed';
  // Keep friendly, kid-safe messages; redact anything mentioning internal IDs.
  return msg
    .replace(/StatusCode:\s*\d+/g, 'StatusCode: [redacted]')
    .replace(/Reason:\s*[^)]+/g, 'Reason: [redacted]')
    .replace(/errorDetails[^,)]*/gi, 'errorDetails: [redacted]')
    .slice(0, 200);
}

app.listen(PORT, () => {
  console.log(`SpeakUp Azure backend listening on http://localhost:${PORT}`);
});