// Shared Google Drive sync types + constants.
// Plain TypeScript with no React imports — usable from pure modules (auth.ts,
// drive-api.ts, merge.ts) and from React layers alike.

import type { TokenResponse, TokenErrorResponse, TokenClient } from './gis';

/**
 * Google profile shape returned by https://www.googleapis.com/oauth2/v2/userinfo.
 * We request the userinfo.profile + userinfo.email scopes plus the
 * drive.appdata scope, so all fields here are populated.
 */
export interface GoogleUser {
  id: string;
  email: string;
  verified_email?: boolean;
  name: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  locale?: string;
}

/**
 * High-level lifecycle of the sync subsystem. Mirrors the state machine in the
 * plan: IDLE → SYNCING → SYNCED, with branches to ERROR, OFFLINE.
 *
 * - idle       : signed out or auth manager still initializing
 * - hydrating  : pulling initial Drive file (or creating blank) after sign-in
 * - pushing    : uploading a local change
 * - pulling    : pulling/merging a remote change (periodic sync, focus)
 * - synced     : local == remote, no pending changes
 * - error      : last sync attempt failed; UI shows the error message
 * - offline    : navigator.onLine === false; changes queued in memory
 */
export type SyncStatus =
  | 'idle'
  | 'hydrating'
  | 'pushing'
  | 'pulling'
  | 'synced'
  | 'error'
  | 'offline';

// ─── Configuration ────────────────────────────────────────────────────────────
// Google OAuth 2.0 Web Client ID for SpeakUp. Load it from the environment
// so the repository never contains a real client id.
//
// In production set VITE_GOOGLE_CLIENT_ID in your build environment and the
// deployment host must be listed in Google Cloud Console → APIs & Services →
// Credentials → OAuth 2.0 Client IDs → "SpeakUp" → Authorized JavaScript origins.
const rawClientId: string | undefined = import.meta.env?.VITE_GOOGLE_CLIENT_ID;
if (!rawClientId) {
  console.warn('[SpeakUp auth] VITE_GOOGLE_CLIENT_ID is missing.');
}
export const GOOGLE_CLIENT_ID: string =
  rawClientId ?? 'MISSING_VITE_GOOGLE_CLIENT_ID';

// drive.appdata gives access to the hidden appDataFolder. userinfo.profile +
// userinfo.email give us the student's name and avatar.
export const GOOGLE_DRIVE_APPDATA_SCOPE =
  'https://www.googleapis.com/auth/drive.appdata';
export const GOOGLE_USERINFO_PROFILE_SCOPE =
  'https://www.googleapis.com/auth/userinfo.profile';
export const GOOGLE_USERINFO_EMAIL_SCOPE =
  'https://www.googleapis.com/auth/userinfo.email';

export const GOOGLE_SCOPES = [
  GOOGLE_DRIVE_APPDATA_SCOPE,
  GOOGLE_USERINFO_PROFILE_SCOPE,
  GOOGLE_USERINFO_EMAIL_SCOPE,
].join(' ');

// File in appDataFolder where SpeakUp progress is stored.
export const DRIVE_FILE_NAME = 'speakup_progress.json';

// Drive REST endpoints.
export const DRIVE_API_BASE = 'https://www.googleapis.com/drive/v3';
export const DRIVE_UPLOAD_BASE = 'https://www.googleapis.com/upload/drive/v3';

// ─── Sync timing ──────────────────────────────────────────────────────────────
// How long to wait between debounced push attempts after a local change.
export const SYNC_SAVE_DEBOUNCE_MS = 3_000;
// Periodic pull-and-merge interval.
export const SYNC_PULL_INTERVAL_MS = 60_000;
// How many polling cycles to wait after a failure before retrying.
export const SYNC_RETRY_BACKOFF_MS = 15_000;

// GIS polling: 20 retries × 500ms = 10s window for the script to load.
export const GOOGLE_AUTH_MAX_INIT_ATTEMPTS = 20;
export const GOOGLE_AUTH_INIT_RETRY_MS = 500;

// Refresh the access token this far before it actually expires.
export const TOKEN_REFRESH_LEEWAY_MS = 5 * 60 * 1_000;

// Drive API request timeout — AbortController aborts fetch after this long.
export const DRIVE_FETCH_TIMEOUT_MS = 20_000;

// ─── Local-storage keys ───────────────────────────────────────────────────────
// Persisted across page reloads.
export const LOCAL_DEVICE_ID_KEY = 'speakup-device-id';
export const SYNC_INTENT_KEY = 'speakup-sync-intent';
export const GOOGLE_USER_CACHE_KEY = 'speakup-google-user-cache';
// Session-scoped — cleared when the tab closes.
export const SYNC_TOKEN_SESSION_KEY = 'speakup-google-token-session';

// ─── React-friendly helpers ───────────────────────────────────────────────────
/**
 * Narrow type alias for the token response shape we actually consume. GIS hands
 * back a TokenResponse, but we never want to pass errors around without the
 * hasRequiredScopes gate in auth.ts having run first.
 */
export type ValidTokenResponse = TokenResponse & {
  access_token: string;
  expires_in: number;
};

/** Same shape for the error callback. */
export type { TokenErrorResponse, TokenClient };
