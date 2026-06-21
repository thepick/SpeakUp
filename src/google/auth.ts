// Non-React Google auth flow. Wraps GIS into a small class that the React
// AuthProvider can hold a single instance of. Pure TypeScript — no JSX, no
// React imports — so it can be unit-tested in isolation.
//
// Lifecycle:
//   1. initialize()  — wait for window.google.accounts.oauth2 to load
//   2. requestSignIn() — opens the consent popup, resolves with GoogleUser
//   3. tokenClient.callback receives the token → handleTokenResponse
//      validates scopes, fetches user info, schedules silent refresh
//   4. Every (expires_in − 5min), a silent refresh fires without a popup
//   5. signOut() revokes the token and clears timers + sessionStorage
//
// Key distinction from FactFlow's monolithic flow: this class only handles
// auth. Drive sync (find/upload/download) lives in drive-api.ts. The hook
// layer (useDriveSync.ts) wires them together.

import type {
  TokenClient,
  TokenClientConfig,
  TokenResponse,
  TokenErrorResponse,
} from './gis';
import {
  DRIVE_FETCH_TIMEOUT_MS,
  GOOGLE_AUTH_INIT_RETRY_MS,
  GOOGLE_AUTH_MAX_INIT_ATTEMPTS,
  GOOGLE_CLIENT_ID,
  GOOGLE_SCOPES,
  GOOGLE_USER_CACHE_KEY,
  LOCAL_DEVICE_ID_KEY,
  SYNC_TOKEN_SESSION_KEY,
  TOKEN_REFRESH_LEEWAY_MS,
  type GoogleUser,
  type ValidTokenResponse,
} from './types.ts';

/**
 * Snapshot of the auth state at any point in time. The React layer subscribes
 * to this via the AuthProvider and re-renders on change.
 */
export interface AuthState {
  isAuthenticated: boolean;
  isInitializing: boolean;
  user: GoogleUser | null;
  accessToken: string | null;
  tokenExpiresAt: number; // ms since epoch, 0 if not signed in
  authError: string | null;
}

/**
 * Subscribers receive every AuthState change. We use a callback list rather
 * than a Redux-style store to keep the auth layer dependency-free.
 */
export type AuthListener = (state: AuthState) => void;

/**
 * Picked from `drillbit` style — a deliberate custom error class so callers
 * can `instanceof DriveApiError` and recover gracefully.
 */
export class AuthError extends Error {
  constructor(
    message: string,
    public readonly status: number | null = null,
    public readonly cause: unknown = null,
  ) {
    super(message);
    this.name = 'AuthError';
  }
}

const initialState: AuthState = {
  isAuthenticated: false,
  isInitializing: true,
  user: null,
  accessToken: null,
  tokenExpiresAt: 0,
  authError: null,
};

// ─── Small helpers (kept inline; they have no React dependencies) ─────────────

function nowMs(): number {
  return Date.now();
}

/** Stable, opaque, device-scoped id used to tag which device wrote last. */
export function getDeviceId(): string {
  if (typeof localStorage === 'undefined') return 'ssr';
  try {
    const existing = localStorage.getItem(LOCAL_DEVICE_ID_KEY);
    if (existing) return existing;
    const id =
      'dev-' +
      Math.random().toString(36).slice(2, 11) +
      Date.now().toString(36);
    localStorage.setItem(LOCAL_DEVICE_ID_KEY, id);
    return id;
  } catch {
    return 'dev-anon';
  }
}

/**
 * Persist the user's last-known profile across page reloads so we can show
 * their name/avatar before the OAuth flow finishes (or when offline).
 */
function cacheGoogleUser(info: GoogleUser | null): void {
  if (typeof localStorage === 'undefined') return;
  try {
    if (info) localStorage.setItem(GOOGLE_USER_CACHE_KEY, JSON.stringify(info));
    else localStorage.removeItem(GOOGLE_USER_CACHE_KEY);
  } catch {
    /* ignore quota errors */
  }
}

function readCachedGoogleUser(): GoogleUser | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(GOOGLE_USER_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GoogleUser;
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch {
    return null;
  }
}

/**
 * Save the access token in sessionStorage so a page reload during the same
 * browser session can restore auth without re-prompting the user. Cleared on
 * tab close (sessionStorage semantics).
 */
function saveTokenSession(token: ValidTokenResponse): void {
  if (typeof sessionStorage === 'undefined') return;
  try {
    sessionStorage.setItem(
      SYNC_TOKEN_SESSION_KEY,
      JSON.stringify({
        accessToken: token.access_token,
        tokenExpiresAt: nowMs() + (token.expires_in || 3600) * 1000,
      }),
    );
  } catch {
    /* sessionStorage may be disabled */
  }
}

function readTokenSession(): { accessToken: string; tokenExpiresAt: number } | null {
  if (typeof sessionStorage === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(SYNC_TOKEN_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as {
      accessToken: string;
      tokenExpiresAt: number;
    };
    if (!parsed?.accessToken || !parsed?.tokenExpiresAt) return null;
    if (nowMs() >= parsed.tokenExpiresAt) {
      sessionStorage.removeItem(SYNC_TOKEN_SESSION_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function clearTokenSession(): void {
  if (typeof sessionStorage === 'undefined') return;
  try {
    sessionStorage.removeItem(SYNC_TOKEN_SESSION_KEY);
  } catch {
    /* ignore */
  }
}

/** Check whether the granted scopes contain every scope we asked for. */
function tokenResponseIncludesScope(
  tokenResponse: TokenResponse,
  scope: string,
): boolean {
  if (!tokenResponse || !scope) return false;
  // The GIS helper is the authoritative answer when available.
  if (
    typeof window !== 'undefined' &&
    window.google?.accounts?.oauth2 &&
    typeof window.google.accounts.oauth2.hasGrantedAllScopes === 'function'
  ) {
    return window.google.accounts.oauth2.hasGrantedAllScopes(tokenResponse, scope);
  }
  // Fallback for older GIS builds that return `scope` as a space-separated
  // string.
  if (typeof tokenResponse.scope === 'string') {
    return tokenResponse.scope.split(/\s+/).includes(scope);
  }
  // When neither is available, be permissive — the first Drive API call will
  // surface a 403 with reason "insufficientPermissions" if scope is missing.
  return true;
}

/**
 * Wraps a fetch call with an AbortController timeout. Returns the raw Response
 * so callers can branch on `r.ok`. Throws on timeout or network failure.
 */
async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeoutMs: number = DRIVE_FETCH_TIMEOUT_MS,
): Promise<Response> {
  if (typeof AbortController === 'undefined') {
    return fetch(url, options);
  }
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
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(timer);
    if (existingSignal && onAbort) {
      existingSignal.removeEventListener('abort', onAbort);
    }
  }
}

// ─── GoogleAuthManager ────────────────────────────────────────────────────────

/**
 * The single instance of GoogleAuthManager lives in AuthProvider.tsx and is
 * used by both useAuth and useDriveSync. Methods return promises that resolve
 * on success and reject with an AuthError on failure — UI layers can render
 * `authError` instead of throwing.
 */
export class GoogleAuthManager {
  private state: AuthState = { ...initialState };
  private listeners: Set<AuthListener> = new Set();
  private tokenClient: TokenClient | null = null;
  /** True while a silent refresh is in flight — prevents concurrent refreshes. */
  private isRefreshing = false;
  /** Pending refresh resolver. Set by refreshToken, cleared by token response/error. */
  private refreshResolver: {
    resolve: (ok: boolean) => void;
    reject: (err: AuthError) => void;
    timeoutId: ReturnType<typeof setTimeout> | null;
  } | null = null;
  /** Pending initial sign-in resolver. Cleared on response. */
  private signInResolver: {
    resolve: (user: GoogleUser) => void;
    reject: (err: AuthError) => void;
  } | null = null;
  /** Refresh timer handle. */
  private refreshTimer: ReturnType<typeof setTimeout> | null = null;

  /** Read-only view of the current state (useful for hook initialization). */
  public getState(): AuthState {
    return this.state;
  }

  public subscribe(listener: AuthListener): () => void {
    this.listeners.add(listener);
    // Push current state immediately so subscribers don't render stale.
    listener(this.state);
    return () => this.listeners.delete(listener);
  }

  private setState(partial: Partial<AuthState>): void {
    this.state = { ...this.state, ...partial };
    for (const listener of this.listeners) {
      try {
        listener(this.state);
      } catch (e) {
        // Never let a listener failure block the auth state machine.
        console.warn('[SpeakUp auth] listener threw:', e);
      }
    }
  }

  /**
   * Initialize the GIS client. Safe to call multiple times — subsequent calls
   * are no-ops once the token client is ready.
   *
   * Polls for window.google.accounts.oauth2 with a 10s budget. After that
   * window expires, the manager is stuck in the uninitialized state and
   * `requestSignIn` will fail with a clear error rather than hang.
   *
   * A single shared `initPromise` guards against React StrictMode's
   * double-mount and against any caller that fires initialize() in parallel.
   */
  private initPromise: Promise<void> | null = null;

  public initialize(): Promise<void> {
    if (this.tokenClient) return Promise.resolve();
    if (!this.state.isInitializing) return Promise.resolve();
    if (this.initPromise) return this.initPromise;

    this.initPromise = this.doInitialize();
    return this.initPromise;
  }

  private async doInitialize(): Promise<void> {

    // First, try to restore from sessionStorage — same-tab reload survival.
    const restored = readTokenSession();
    if (restored) {
      this.setState({
        accessToken: restored.accessToken,
        tokenExpiresAt: restored.tokenExpiresAt,
        isAuthenticated: true,
        isInitializing: false,
        user: readCachedGoogleUser(),
        authError: null,
      });
      this.scheduleTokenRefresh();
      // Re-fetch user info in the background — non-blocking.
      void this.refreshUserInfo();
    }

    // Wait for the GIS script to load.
    for (let attempt = 0; attempt < GOOGLE_AUTH_MAX_INIT_ATTEMPTS; attempt += 1) {
      const oauth2 = window.google?.accounts?.oauth2;
      if (oauth2?.initTokenClient) {
        try {
          this.tokenClient = oauth2.initTokenClient({
            client_id: GOOGLE_CLIENT_ID,
            scope: GOOGLE_SCOPES,
            callback: (response) => this.handleTokenResponse(response),
            error_callback: (err) => this.handleTokenError(err),
          } satisfies TokenClientConfig);
          // If we had a session-restored token, leave isInitializing: false;
          // otherwise mark initialisation complete (still not authenticated).
          if (!restored) {
            this.setState({ isInitializing: false });
          }
          this.initPromise = null; // success — future calls re-enter
          return;
        } catch (e) {
          this.setState({
            isInitializing: false,
            authError: 'Failed to initialize Google sign-in.',
          });
          this.initPromise = null; // failure — allow retry next time
          throw new AuthError('Failed to init token client', null, e);
        }
      }
      await new Promise((r) => setTimeout(r, GOOGLE_AUTH_INIT_RETRY_MS));
    }
    // GIS never loaded. We can still operate without Drive sync — the rest
    // of the app keeps working. Mark as initialized with an error so the UI
    // can show a helpful message.
    this.setState({
      isInitializing: false,
      authError: 'Google sign-in is unavailable. Progress will save locally.',
    });
    this.initPromise = null; // done — either way the poll loop is over
  }

  /**
   * Trigger the OAuth popup. Resolves with the GoogleUser once consent is
   * granted and Drive access is verified.
   */
  public async requestSignIn(): Promise<GoogleUser> {
    if (!this.tokenClient) {
      await this.initialize();
    }
    if (!this.tokenClient) {
      throw new AuthError('Google sign-in is not ready. Please refresh the page.');
    }
    return new Promise<GoogleUser>((resolve, reject) => {
      this.signInResolver = { resolve, reject };
      try {
        this.setState({ authError: null });
        this.tokenClient!.requestAccessToken({ prompt: 'select_account' });
      } catch (e) {
        this.signInResolver = null;
        reject(new AuthError('Could not open sign-in popup', null, e));
      }
    });
  }

  /**
   * Silent token refresh. Used by the proactive timer AND by the sync layer
   * when it detects an expired token before a Drive call. Resolves true on
   * successful refresh, false if refresh could not happen (offline, popup
   * blocked, etc.).
   *
   * Does NOT monkey-patch the token client. The completion callback we
   * registered in initialize() routes through `handleTokenResponse`, which
   * sees `isRefreshing` and resolves/rejects `refreshResolver` instead of
   * trying to hydrate.
   */
  public async refreshToken(
    prompt: '' | 'none' | 'consent' | 'select_account' = '',
  ): Promise<boolean> {
    if (!this.tokenClient) return false;
    if (this.isRefreshing || this.refreshResolver) return false;

    this.isRefreshing = true;
    return new Promise<boolean>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        // 15s — generous because OAuth popup can take a while on slow networks.
        if (this.refreshResolver) {
          const r = this.refreshResolver;
          this.refreshResolver = null;
          this.isRefreshing = false;
          r.reject(new AuthError('Token refresh timed out'));
        }
      }, 15_000);
      this.refreshResolver = {
        resolve: (ok) => {
          clearTimeout(timeoutId);
          this.refreshResolver = null;
          this.isRefreshing = false;
          resolve(ok);
        },
        reject: (err) => {
          clearTimeout(timeoutId);
          this.refreshResolver = null;
          this.isRefreshing = false;
          reject(err);
        },
        timeoutId,
      };
      try {
        this.tokenClient!.requestAccessToken({ prompt });
      } catch (e) {
        if (this.refreshResolver) {
          const r = this.refreshResolver;
          this.refreshResolver = null;
          this.isRefreshing = false;
          clearTimeout(timeoutId);
          r.reject(new AuthError('Token refresh threw on request', null, e));
        }
      }
    })
      .then((ok) => {
        // We already set authError in handleTokenResponse on validation
        // failure; the caller just needs the boolean.
        return ok;
      })
      .catch((e: unknown) => {
        const err =
          e instanceof AuthError ? e : new AuthError('Token refresh failed', null, e);
        // Don't surface a hard authError here — handleTokenResponse already
        // did it. Just return false so the caller can fall back.
        if (!this.state.authError) {
          this.setState({ authError: err.message });
        }
        return false;
      });
  }

  /**
   * Sign out. Revokes the token (best-effort), clears all timers, and
   * returns to the unauthenticated state. Safe to call when not signed in.
   */
  public async signOut(): Promise<void> {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    const token = this.state.accessToken;
    if (token && window.google?.accounts?.oauth2?.revoke) {
      try {
        window.google.accounts.oauth2.revoke(token, () => {
          /* no-op */
        });
      } catch {
        /* revocation is best-effort */
      }
    }
    clearTokenSession();
    cacheGoogleUser(null);
    this.setState({
      isAuthenticated: false,
      isInitializing: false,
      user: null,
      accessToken: null,
      tokenExpiresAt: 0,
      authError: null,
    });
  }

  // ─── Internal: token + user flow ───────────────────────────────────────────

  private handleTokenResponse = (response: TokenResponse): void => {
    if (!response || response.error) {
      const message = response?.error
        ? `Google sign-in failed: ${response.error}`
        : 'Google sign-in failed.';
      this.setState({ authError: message });
      const err = new AuthError(message);
      // Route to whichever resolver is pending (refresh wins over sign-in).
      if (this.isRefreshing && this.refreshResolver) {
        this.refreshResolver.reject(err);
        return;
      }
      this.signInResolver?.reject(err);
      this.signInResolver = null;
      return;
    }
    if (!response.access_token || !response.expires_in) {
      const message = 'Google sign-in returned an empty token.';
      this.setState({ authError: message });
      const err = new AuthError(message);
      if (this.isRefreshing && this.refreshResolver) {
        this.refreshResolver.reject(err);
        return;
      }
      this.signInResolver?.reject(err);
      this.signInResolver = null;
      return;
    }
    // Validate scopes — GIS can return a token without drive.appdata if the
    // user unchecked the box on the consent screen.
    if (
      !tokenResponseIncludesScope(
        response,
        'https://www.googleapis.com/auth/drive.appdata',
      )
    ) {
      const message =
        'Google Drive permission is required. Please allow Drive access when signing in.';
      this.setState({ authError: message });
      const err = new AuthError(message, 403);
      if (this.isRefreshing && this.refreshResolver) {
        this.refreshResolver.reject(err);
        return;
      }
      this.signInResolver?.reject(err);
      this.signInResolver = null;
      return;
    }
    const valid = response as ValidTokenResponse;
    const expiresAt = nowMs() + valid.expires_in * 1000;
    saveTokenSession(valid);
    this.setState({
      isAuthenticated: true,
      isInitializing: false,
      accessToken: valid.access_token,
      tokenExpiresAt: expiresAt,
      authError: null,
    });
    this.scheduleTokenRefresh();

    // Silent refresh path: we already have a user; just resolve the promise.
    if (this.isRefreshing && this.refreshResolver) {
      this.refreshResolver.resolve(true);
      return;
    }
    // Initial sign-in path: fetch profile then resolve.
    void this.refreshUserInfo().then((user) => {
      if (user && this.signInResolver) {
        this.setState({ user });
        this.signInResolver.resolve(user);
        this.signInResolver = null;
      } else if (!user && this.signInResolver) {
        // Fall back to cached profile so the UI still has a name.
        const cached = readCachedGoogleUser();
        if (cached) {
          this.setState({ user: cached });
          this.signInResolver.resolve(cached);
          this.signInResolver = null;
        } else {
          // No cached user AND userinfo failed — resolve with a minimal
          // synthetic profile so the UI can render the welcome screen and
          // prompt the user to retry later. Better than hanging forever.
          const synthetic: GoogleUser = {
            id: 'unknown',
            email: '',
            name: 'Student',
          };
          this.setState({ user: synthetic });
          this.signInResolver.resolve(synthetic);
          this.signInResolver = null;
        }
      }
    });
  };

  private handleTokenError = (err: TokenErrorResponse): void => {
    let message = 'Google sign-in failed.';
    if (err?.type === 'popup_closed') {
      message = 'Sign-in popup was closed before completing.';
    } else if (err?.type === 'popup_failed_to_open') {
      message = 'Popup blocked. Please allow popups and try again.';
    } else if (err?.message) {
      message = err.message;
    }
    this.setState({ authError: message });
    const wrapped = new AuthError(message);
    // Route to whichever resolver is pending (refresh wins over sign-in).
    if (this.isRefreshing && this.refreshResolver) {
      this.refreshResolver.reject(wrapped);
      return;
    }
    this.signInResolver?.reject(wrapped);
    this.signInResolver = null;
  };

  /**
   * Pull the user's Google profile from userinfo. Caches it and updates
   * `state.user`. Returns null on failure (caller decides whether to fall
   * back to a cached profile).
   */
  public async refreshUserInfo(): Promise<GoogleUser | null> {
    if (!this.state.accessToken) return null;
    try {
      const response = await fetchWithTimeout(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${this.state.accessToken}` },
        },
      );
      if (!response.ok) {
        return null;
      }
      const info = (await response.json()) as GoogleUser;
      if (!info?.id) return null;
      cacheGoogleUser(info);
      this.setState({ user: info });
      return info;
    } catch {
      return null;
    }
  }

  private scheduleTokenRefresh(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    if (!this.state.tokenExpiresAt) return;
    const msUntilRefresh =
      this.state.tokenExpiresAt - nowMs() - TOKEN_REFRESH_LEEWAY_MS;
    if (msUntilRefresh <= 0) {
      // Already inside the leeway window — refresh now (but not in the current
      // stack, to keep this method predictable for callers).
      setTimeout(() => {
        if (!this.state.isAuthenticated) return;
        if (typeof navigator !== 'undefined' && !navigator.onLine) return;
        if (
          typeof document !== 'undefined' &&
          document.visibilityState !== 'visible'
        )
          return;
        void this.refreshToken('none').catch(() => {
          /* silent retry later */
        });
      }, 0);
      return;
    }
    this.refreshTimer = setTimeout(() => {
      this.refreshTimer = null;
      // Don't refresh if we've signed out or are offline.
      if (!this.state.isAuthenticated) return;
      if (typeof navigator !== 'undefined' && !navigator.onLine) return;
      if (typeof document !== 'undefined' && document.visibilityState !== 'visible') return;
      void this.refreshToken('none').catch(() => {
        // Silent — the periodic pull will try again, and useDriveSync
        // surfaces any persistent failure via syncStatus='error'.
      });
    }, msUntilRefresh);
  }

  /** Public hook for the React error UI. */
  public clearError(): void {
    this.setState({ authError: null });
  }
}
