// src/server/assessPronunciation.js
//
// Core Azure Speech Pronunciation Assessment module.
//
// Usage:
//   import { assessPronunciation } from './assessPronunciation.js';
//   const result = await assessPronunciation({
//     audioBuffer,         // Buffer containing 16kHz mono PCM WAV data
//     referenceText,       // string: the phrase the learner tried to say
//     locale = 'en-US',    // string: Azure locale
//   });

import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

const {
  SpeechConfig,
  AudioConfig,
  SpeechRecognizer,
  PronunciationAssessmentConfig,
  PronunciationAssessmentGradingSystem,
  PronunciationAssessmentGranularity,
  PropertyId,
  ResultReason,
  CancellationReason,
  CancellationDetails,
} = sdk;

/**
 * Run pronunciation assessment against Azure Speech.
 *
 * @param {Object} params
 * @param {Buffer} params.audioBuffer  - WAV file bytes (16kHz, mono, PCM)
 * @param {string} params.referenceText - Expected phrase
 * @param {string} [params.locale='en-US']
 * @returns {Promise<Object>} normalized result
 */
export async function assessPronunciation({ audioBuffer, referenceText, locale = 'en-US' }) {
  if (!audioBuffer || !Buffer.isBuffer(audioBuffer)) {
    throw new Error('audioBuffer must be a Node Buffer');
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

  // Pass the Buffer directly. SDK expects WAV/PCM only.
  const audioConfig = AudioConfig.fromWavFileInput(audioBuffer);

  const pronunciationConfig = new PronunciationAssessmentConfig(
    referenceText,
    PronunciationAssessmentGradingSystem.HundredMark,
    PronunciationAssessmentGranularity.Phoneme,
    false, // enableMiscue
  );

  // Prosody is only documented for en-US.
  if (locale === 'en-US') {
    pronunciationConfig.enableProsodyAssessment = true;
  }

  const recognizer = new SpeechRecognizer(speechConfig, audioConfig);
  pronunciationConfig.applyTo(recognizer);

  return new Promise((resolve, reject) => {
    recognizer.recognizeOnceAsync(
      (result) => {
        try {
          if (result.reason === ResultReason.RecognizedSpeech) {
            const jsonStr = result.properties.getProperty(
              PropertyId.SpeechServiceResponse_JsonResult,
            );
            if (!jsonStr) {
              reject(new Error('Azure returned no JSON result'));
              return;
            }
            const azureJson = JSON.parse(jsonStr);
            const normalized = normalizeAzureResult(azureJson, referenceText, locale);
            resolve(normalized);
          } else if (result.reason === ResultReason.NoMatch) {
            reject(new Error('No speech recognized. The audio may be silent or too noisy.'));
          } else if (result.reason === ResultReason.Canceled) {
            const cancellation = CancellationDetails.fromResult(result);
            const msg =
              `Recognition canceled (${cancellation.reason}` +
              (cancellation.reason === CancellationReason.Error
                ? `: ${cancellation.errorDetails}`
                : '') +
              ')';
            reject(new Error(msg));
          } else {
            reject(new Error(`Unexpected recognition result reason: ${result.reason}`));
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

/**
 * Map the Azure NBest response into the app-friendly schema.
 */
function normalizeAzureResult(azureJson, referenceText, locale) {
  const nbest = azureJson.NBest?.[0] || {};
  const pron = nbest.PronunciationAssessment || {};

  const words = (nbest.Words || []).map((w) => {
    const wa = w.PronunciationAssessment || {};
    return {
      word: w.Word,
      accuracy: wa.AccuracyScore ?? 0,
      errorType: wa.ErrorType ?? 'None',
      offset100ns: w.Offset,
      duration100ns: w.Duration,
      syllables: (w.Syllables || []).map((s) => ({
        syllable: s.Syllable,
        accuracy: s.PronunciationAssessment?.AccuracyScore ?? 0,
        offset100ns: s.Offset,
        duration100ns: s.Duration,
        phonemes: (s.Phonemes || []).map(mapPhoneme),
      })),
      phonemes: (w.Phonemes || []).map(mapPhoneme),
    };
  });

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

function mapPhoneme(p) {
  const pa = p.PronunciationAssessment || {};
  return {
    phoneme: p.Phoneme,
    accuracy: pa.AccuracyScore ?? 0,
    offset100ns: p.Offset,
    duration100ns: p.Duration,
  };
}