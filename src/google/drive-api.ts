// Pure Drive REST wrapper. No React, no auth state — the caller hands in a
// valid access token and the module returns parsed JSON or throws DriveApiError.
// This is the layer useDriveSync.ts composes against.
//
// All operations target the hidden appDataFolder: files there are private to
// the OAuth client, never appear in the user's Drive UI, and get auto-cleaned
// when the user revokes app access. Perfect for syncing app state.

import type { DriveData } from '../types.ts';
import {
  DRIVE_API_BASE,
  DRIVE_FETCH_TIMEOUT_MS,
  DRIVE_FILE_NAME,
  DRIVE_UPLOAD_BASE,
} from './types.ts';

/**
 * Distinguishes recoverable from non-recoverable Drive failures. useDriveSync
 * uses the discriminator to decide whether to retry, refresh the token, or
 * surface a blocking error to the UI.
 */
export type DriveErrorKind =
  | 'auth' // 401 — token expired/revoked; refresh then retry
  | 'permission' // 403 with insufficientPermissions
  | 'not-found' // 404 — file gone; next push auto-creates
  | 'quota' // 403 storageQuotaExceeded
  | 'rate-limit' // 403 rateLimitExceeded / 429
  | 'temporary' // 5xx / network / timeout
  | 'unknown';

export class DriveApiError extends Error {
  constructor(
    message: string,
    public readonly status: number | null,
    public readonly kind: DriveErrorKind,
    public readonly googleReason: string = '',
    public readonly responseText: string = '',
  ) {
    super(message);
    this.name = 'DriveApiError';
  }
}

// ─── fetch with timeout + auth header ─────────────────────────────────────────

/**
 * All Drive calls go through this. Adds Bearer token, aborts on timeout, and
 * converts non-2xx responses into typed DriveApiError instances. Returning the
 * raw Response on 2xx lets callers branch on `r.ok` / read body bytes.
 */
export async function driveFetch(
  url: string,
  accessToken: string,
  options: RequestInit = {},
  timeoutMs: number = DRIVE_FETCH_TIMEOUT_MS,
): Promise<Response> {
  if (!accessToken) {
    throw new DriveApiError('No access token', null, 'auth');
  }
  // Refuse non-Google URLs — defense in depth.
  if (!url.startsWith('https://www.googleapis.com/')) {
    throw new DriveApiError('Refusing non-Google API URL', null, 'unknown');
  }
  const headers = new Headers(options.headers);
  headers.set('Authorization', `Bearer ${accessToken}`);

  const controller = new AbortController();
  const existingSignal = options.signal;
  let onAbort: (() => void) | null = null;
  if (existingSignal) {
    if (existingSignal.aborted) controller.abort();
    else {
      onAbort = () => controller.abort();
      existingSignal.addEventListener('abort', onAbort);
    }
  }
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, headers, signal: controller.signal });
    return response;
  } catch (e) {
    if (e instanceof Error && e.name === 'AbortError') {
      throw new DriveApiError('Drive request timed out', 408, 'temporary');
    }
    throw new DriveApiError(
      'Drive request failed (network)',
      null,
      'temporary',
      '',
      e instanceof Error ? e.message : '',
    );
  } finally {
    clearTimeout(timer);
    if (existingSignal && onAbort) {
      existingSignal.removeEventListener('abort', onAbort);
    }
  }
}

/**
 * Classify an HTTP status + parsed Google error JSON into a DriveErrorKind.
 * Google uses `error.errors[0].reason` for machine-readable categories; we
 * fall back to status-only heuristics when that's missing.
 */
function classifyDriveError(
  status: number | null,
  body: { code?: number; reason?: string; message?: string } | null,
): DriveErrorKind {
  if (!status) return 'temporary';
  const reason = body?.reason || '';
  if (status === 401) return 'auth';
  if (status === 404) return 'not-found';
  if (status === 403) {
    if (reason === 'storageQuotaExceeded') return 'quota';
    if (
      reason === 'insufficientPermissions' ||
      reason === 'insufficientFilePermissions'
    ) {
      return 'permission';
    }
    if (
      reason === 'rateLimitExceeded' ||
      reason === 'userRateLimitExceeded' ||
      reason === 'dailyLimitExceeded'
    ) {
      return 'rate-limit';
    }
    return 'permission';
  }
  if (status === 429) return 'rate-limit';
  if (status === 408 || status === 409 || (status >= 500 && status <= 504)) {
    return 'temporary';
  }
  return 'unknown';
}

/** Parse Google's standard error envelope. Falls back to raw text on JSON failure. */
function parseGoogleError(text: string): {
  code: number | undefined;
  reason: string;
  message: string;
} {
  if (!text) return { code: undefined, reason: '', message: '' };
  try {
    const data = JSON.parse(text);
    const err = data?.error;
    if (!err) return { code: undefined, reason: '', message: '' };
    const first = Array.isArray(err.errors) ? err.errors[0] : null;
    return {
      code: err.code ?? undefined,
      reason: first?.reason || '',
      message: err.message || first?.message || '',
    };
  } catch {
    return { code: undefined, reason: '', message: text.slice(0, 240) };
  }
}

/** Convert a non-ok Response into a typed DriveApiError. */
async function asDriveError(response: Response, prefix: string): Promise<DriveApiError> {
  const text = await response.text();
  const parsed = parseGoogleError(text);
  const kind = classifyDriveError(response.status, parsed);
  return new DriveApiError(
    `${prefix}: ${response.status} ${parsed.reason || ''}`.trim(),
    response.status,
    kind,
    parsed.reason,
    text,
  );
}

// ─── File discovery ───────────────────────────────────────────────────────────

/**
 * Find the speakup_progress.json file in appDataFolder. Returns null if it
 * doesn't exist (first-run case). Caches the file id in module scope so
 * subsequent upload/download calls don't need to re-search.
 *
 * The cache is keyed by Google user id — switching accounts MUST call
 * clearCachedFileId() (or clearCachedFileIdForUser) to avoid hitting the
 * wrong account's file (which would 404 and needlessly burn a quota call).
 */
let cachedFileId: string | null = null;
let cachedForUserId: string | null = null;

export function clearCachedFileId(): void {
  cachedFileId = null;
  cachedForUserId = null;
}

export function setCachedFileIdForUser(userId: string, fileId: string | null): void {
  cachedFileId = fileId;
  cachedForUserId = userId;
}

export async function findDriveFile(
  accessToken: string,
  userId: string | null,
): Promise<string | null> {
  // Return cached id only if it was cached for the SAME user. When the
  // signed-in user changes, we must re-query Drive — appDataFolder is
  // per-OAuth-client-per-user, so a stale id 404s for the new account.
  if (cachedFileId && userId && cachedForUserId === userId) return cachedFileId;
  const q = `name='${DRIVE_FILE_NAME.replace(/'/g, "\\'")}' and trashed=false`;
  const url =
    `${DRIVE_API_BASE}/files?spaces=appDataFolder` +
    `&fields=files(id,name,modifiedTime)` +
    `&orderBy=modifiedTime desc&q=${encodeURIComponent(q)}`;
  const response = await driveFetch(url, accessToken, { method: 'GET' });
  if (!response.ok) {
    throw await asDriveError(response, 'Drive file search failed');
  }
  const data = (await response.json()) as { files: Array<{ id: string }> };
  if (!data.files?.length) {
    cachedFileId = null;
    cachedForUserId = userId;
    return null;
  }
  cachedFileId = data.files[0].id;
  cachedForUserId = userId;
  return cachedFileId;
}

// ─── Download ─────────────────────────────────────────────────────────────────

/**
 * Download the speakup_progress.json file. Returns null on 404 (file gone).
 * Throws DriveApiError on every other failure.
 */
export async function downloadDriveFile(
  accessToken: string,
  fileId: string,
): Promise<DriveData | null> {
  if (!fileId) return null;
  const url = `${DRIVE_API_BASE}/files/${encodeURIComponent(fileId)}?alt=media`;
  const response = await driveFetch(url, accessToken, { method: 'GET' });
  if (response.status === 404) {
    // The file was deleted externally; clear our cache so next push creates.
    cachedFileId = null;
    return null;
  }
  if (!response.ok) {
    throw await asDriveError(response, 'Drive download failed');
  }
  try {
    const data = (await response.json()) as DriveData;
    return data;
  } catch {
    throw new DriveApiError('Drive download returned invalid JSON', 422, 'unknown');
  }
}

// ─── Upload ───────────────────────────────────────────────────────────────────

/**
 * Build a multipart/related body containing metadata + JSON content. Drive's
 * `uploadType=multipart` endpoint accepts both in one request.
 */
function makeMultipartBody(
  metadata: Record<string, unknown>,
  jsonData: unknown,
  boundary: string,
): Blob {
  const head =
    `--${boundary}\r\n` +
    `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
    `${JSON.stringify(metadata)}\r\n` +
    `--${boundary}\r\n` +
    `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
    `${JSON.stringify(jsonData)}\r\n` +
    `--${boundary}--`;
  return new Blob([head], { type: `multipart/related; boundary=${boundary}` });
}

/**
 * Upload the speakup progress file. If we already have a file id cached, this
 * becomes a PATCH; otherwise it creates a new file in appDataFolder. On 404
 * (file deleted between find and upload) we recurse once as a fresh create.
 */
export async function uploadDriveFile(
  accessToken: string,
  fileId: string | null,
  data: DriveData,
): Promise<{ id: string; modifiedTime: string | null }> {
  const boundary = `speakup_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  let url: string;
  let method: 'POST' | 'PATCH';
  let metadata: Record<string, unknown>;

  if (fileId) {
    method = 'PATCH';
    metadata = { name: DRIVE_FILE_NAME };
    url = `${DRIVE_UPLOAD_BASE}/files/${encodeURIComponent(fileId)}?uploadType=multipart&fields=id,modifiedTime`;
  } else {
    method = 'POST';
    metadata = {
      name: DRIVE_FILE_NAME,
      parents: ['appDataFolder'],
      mimeType: 'application/json',
    };
    url = `${DRIVE_UPLOAD_BASE}/files?uploadType=multipart&fields=id,modifiedTime`;
  }

  const response = await driveFetch(url, accessToken, {
    method,
    headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
    body: makeMultipartBody(metadata, data, boundary),
  });

  // 404 on a PATCH = file was deleted between find and upload. Clear cache
  // and recurse once as a fresh create.
  if (response.status === 404 && method === 'PATCH') {
    cachedFileId = null;
    return uploadDriveFile(accessToken, null, data);
  }
  if (!response.ok) {
    throw await asDriveError(response, 'Drive upload failed');
  }
  const result = (await response.json()) as { id?: string; modifiedTime?: string };
  if (!result.id) {
    throw new DriveApiError('Drive upload returned no file id', null, 'unknown');
  }
  cachedFileId = result.id;
  return { id: result.id, modifiedTime: result.modifiedTime ?? null };
}

// ─── Retry helper ─────────────────────────────────────────────────────────────

/**
 * Wrap an async Drive operation with exponential backoff on transient errors.
 * Auth errors are NOT retried — they need a token refresh. 404s are NOT
 * retried — they're handled by callers (clear cache, recreate on push).
 */
export async function withDriveRetry<T>(
  fn: () => Promise<T>,
  options: { maxAttempts?: number; baseDelayMs?: number } = {},
): Promise<T> {
  const maxAttempts = options.maxAttempts ?? 3;
  const baseDelayMs = options.baseDelayMs ?? 500;
  let lastError: unknown = null;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      if (
        e instanceof DriveApiError &&
        (e.kind === 'auth' || e.kind === 'permission' || e.kind === 'not-found' || e.kind === 'quota')
      ) {
        throw e;
      }
      if (attempt === maxAttempts - 1) break;
      const delay = baseDelayMs * Math.pow(2, attempt);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastError instanceof Error ? lastError : new Error('Drive retry exhausted');
}
