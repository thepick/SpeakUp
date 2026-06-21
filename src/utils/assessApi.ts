// src/utils/assessApi.ts
//
// Browser-side Azure Speech Pronunciation Assessment — no backend needed.
// Uses the Azure Speech SDK directly in the browser.
// Requires AZURE_SPEECH_KEY and AZURE_SPEECH_REGION stored in localStorage.

import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import { AzureAssessResponse } from '../types';

// ---- localStorage helpers ----
const KEY_KEY = 'speakup_azure_key';
const REGION_KEY = 'speakup_azure_region';

export function getAzureConfig(): { key: string; region: string } {
  return {
    key: localStorage.getItem(KEY_KEY) || '',
    region: localStorage.getItem(REGION_KEY) || '',
  };
}

export function setAzureConfig(key: string, region: string) {
  localStorage.setItem(KEY_KEY, key);
  localStorage.setItem(REGION_KEY, region);
}

export function hasAzureConfig(): boolean {
  const { key, region } = getAzureConfig();
  return key.length > 0 && region.length > 0;
}

// ---- WebM → WAV conversion (pure browser, no ffmpeg) ----
async function webmToWav(webmBlob: Blob): Promise<ArrayBuffer> {
  const audioCtx = new AudioContext({ sampleRate: 16000 });
  const arrayBuffer = await webmBlob.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

  // Resample to 16kHz mono PCM16
  const numSamples = audioBuffer.length;
  const sampleRate = audioBuffer.sampleRate;
  const channelData = audioBuffer.getChannelData(0); // mono

  // If already 16kHz, use directly; otherwise resample
  let pcm16: Int16Array;
  if (sampleRate === 16000) {
    pcm16 = new Int16Array(numSamples);
    for (let i = 0; i < numSamples; i++) {
      const s = Math.max(-1, Math.min(1, channelData[i]));
      pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
  } else {
    // Simple linear resampling to 16kHz
    const ratio = 16000 / sampleRate;
    const newLen = Math.round(numSamples * ratio);
    pcm16 = new Int16Array(newLen);
    for (let i = 0; i < newLen; i++) {
      const srcIdx = i / ratio;
      const lo = Math.floor(srcIdx);
      const hi = Math.min(lo + 1, numSamples - 1);
      const frac = srcIdx - lo;
      const sample = channelData[lo] * (1 - frac) + channelData[hi] * frac;
      const s = Math.max(-1, Math.min(1, sample));
      pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
  }

  // Build WAV file (44-byte header + PCM data)
  const wavBuffer = new ArrayBuffer(44 + pcm16.byteLength);
  const view = new DataView(wavBuffer);

  // RIFF header
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + pcm16.byteLength, true);
  writeString(view, 8, 'WAVE');

  // fmt subchunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);           // subchunk size
  view.setUint16(20, 1, true);            // PCM format
  view.setUint16(22, 1, true);            // mono
  view.setUint32(24, 16000, true);        // sample rate
  view.setUint32(28, 16000 * 2, true);    // byte rate
  view.setUint16(32, 2, true);            // block align
  view.setUint16(34, 16, true);           // bits per sample

  // data subchunk
  writeString(view, 36, 'data');
  view.setUint32(40, pcm16.byteLength, true);
  new Int16Array(wavBuffer, 44).set(pcm16);

  await audioCtx.close();
  return wavBuffer;
}

function writeString(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i));
  }
}

// ---- Main assessment function ----
export async function assessWithAzure(
  audioBlob: Blob,
  referenceText: string,
  locale = 'en-US',
): Promise<AzureAssessResponse> {
  const { key, region } = getAzureConfig();
  if (!key || !region) {
    throw new Error('Azure credentials not configured. Open Settings to enter your Azure Speech key and region.');
  }

  // Convert WebM → WAV (16kHz mono PCM)
  const wavBuffer = await webmToWav(audioBlob);

  // Create Speech SDK objects
  const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
  speechConfig.speechRecognitionLanguage = locale;

  const audioBytes = new Uint8Array(wavBuffer);
  const audioFile = new File([audioBytes], 'recording.wav', { type: 'audio/wav' });
  const audioConfig = sdk.AudioConfig.fromWavFileInput(audioFile);

  const pronunciationConfig = new sdk.PronunciationAssessmentConfig(
    referenceText,
    sdk.PronunciationAssessmentGradingSystem.HundredMark,
    sdk.PronunciationAssessmentGranularity.Phoneme,
    false, // enableMiscue
  );

  // Prosody assessment (documented for en-US)
  if (locale === 'en-US') {
    pronunciationConfig.enableProsodyAssessment = true;
  }

  const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
  pronunciationConfig.applyTo(recognizer);

  return new Promise((resolve, reject) => {
    recognizer.recognizeOnceAsync(
      (result) => {
        try {
          if (result.reason === sdk.ResultReason.RecognizedSpeech) {
            const jsonStr = result.properties.getProperty(
              sdk.PropertyId.SpeechServiceResponse_JsonResult,
            );
            if (!jsonStr) {
              reject(new Error('Azure returned no JSON result'));
              return;
            }
            const azureJson = JSON.parse(jsonStr);
            resolve(normalizeAzureResult(azureJson, referenceText, locale));
          } else if (result.reason === sdk.ResultReason.NoMatch) {
            reject(new Error('No speech recognized. Try speaking a bit louder.'));
          } else if (result.reason === sdk.ResultReason.Canceled) {
            const cancellation = sdk.CancellationDetails.fromResult(result);
            const msg =
              `Recognition canceled (${cancellation.reason}` +
              (cancellation.reason === sdk.CancellationReason.Error
                ? `: ${cancellation.errorDetails}`
                : '') +
              ')';
            reject(new Error(msg));
          } else {
            reject(new Error(`Unexpected recognition result: ${result.reason}`));
          }
        } finally {
          recognizer.close();
        }
      },
      (err) => {
        recognizer.close();
        reject(err);
      },
    );
  });
}

// ---- Normalize Azure response to our schema ----
function normalizeAzureResult(
  azureJson: Record<string, unknown>,
  referenceText: string,
  locale: string,
): AzureAssessResponse {
  const nbest = (azureJson.NBest as Record<string, unknown>[])?.[0] || {};
  const pron = (nbest.PronunciationAssessment as Record<string, unknown>) || {};

  const words = ((nbest.Words as Record<string, unknown>[]) || []).map((w) => {
    const wa = (w.PronunciationAssessment as Record<string, unknown>) || {};
    return {
      word: w.Word as string,
      accuracy: (wa.AccuracyScore as number) ?? 0,
      errorType: (wa.ErrorType as string) ?? 'None',
      offset100ns: w.Offset as number,
      duration100ns: w.Duration as number,
      syllables: ((w.Syllables as Record<string, unknown>[]) || []).map((s) => ({
        syllable: s.Syllable as string,
        accuracy: ((s.PronunciationAssessment as Record<string, unknown>)?.AccuracyScore as number) ?? 0,
        offset100ns: s.Offset as number,
        duration100ns: s.Duration as number,
        phonemes: ((s.Phonemes as Record<string, unknown>[]) || []).map(mapPhoneme),
      })),
      phonemes: ((w.Phonemes as Record<string, unknown>[]) || []).map(mapPhoneme),
    };
  });

  return {
    success: true,
    locale,
    referenceText,
    recognizedText: (nbest.Display as string) || (azureJson.DisplayText as string) || '',
    processingMode: 'single',
    scores: {
      accuracy: (pron.AccuracyScore as number) ?? 0,
      fluency: (pron.FluencyScore as number) ?? 0,
      completeness: (pron.CompletenessScore as number) ?? 0,
      prosody: (pron.ProsodyScore as number) ?? 0,
      overall: (pron.PronScore as number) ?? 0,
    },
    words,
    rawAzure: azureJson,
  };
}

function mapPhoneme(p: Record<string, unknown>) {
  const pa = (p.PronunciationAssessment as Record<string, unknown>) || {};
  return {
    phoneme: p.Phoneme as string,
    accuracy: (pa.AccuracyScore as number) ?? 0,
    offset100ns: p.Offset as number,
    duration100ns: p.Duration as number,
  };
}
