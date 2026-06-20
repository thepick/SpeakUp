// src/utils/assessApi.ts
//
// Browser client for the Azure Speech Pronunciation Assessment backend.
// Sends a recorded audio blob + reference text and returns AzureAssessResponse.

import { AzureAssessResponse } from '../types';

/**
 * Send a recorded audio blob to the Azure assessment backend.
 *
 * In dev, the Vite proxy (see vite.config.ts → server.proxy) forwards
 * /api/* to http://localhost:3001. In production, VITE_API_BASE must be
 * set to the deployed backend origin (Render/Railway/etc).
 *
 * Throws an Error with a kid-friendly message on any failure so callers
 * can fall back to the mock scorer.
 */
export async function assessWithAzure(
  audioBlob: Blob,
  referenceText: string,
  locale = 'en-US',
): Promise<AzureAssessResponse> {
  const formData = new FormData();
  formData.append('audio', audioBlob, 'recording.webm');
  formData.append('referenceText', referenceText);
  formData.append('locale', locale);

  const base = (import.meta.env.VITE_API_BASE as string | undefined) || '';
  const res = await fetch(`${base}/api/assess`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    // Backend always returns { success:false, error: ... }
    let message = `HTTP ${res.status}`;
    try {
      const body = await res.json();
      if (body?.error) message = body.error;
    } catch {
      // ignore JSON parse errors
    }
    throw new Error(message);
  }

  return res.json() as Promise<AzureAssessResponse>;
}