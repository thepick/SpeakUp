// Minimal type declarations for the Google Identity Services (GIS) library.
// Loaded at runtime via https://accounts.google.com/gsi/client in index.html.
// There is no official @types package for GIS, so we declare only the surface
// we actually use (initTokenClient, requestAccessToken, hasGrantedAllScopes,
// revoke). Any new method used in src/google/auth.ts should be added here.

declare global {
  interface Window {
    google?: {
      accounts?: {
        oauth2?: {
          initTokenClient(config: TokenClientConfig): TokenClient;
          hasGrantedAllScopes(
            tokenResponse: TokenResponse,
            scope: string,
          ): boolean;
          revoke(accessToken: string, done?: () => void): void;
        };
      };
    };
  }

  // The GIS library reads its global as `google` (no `window.` prefix). The
  // `Window['google']` declaration above covers this implicitly, but a few
  // call-sites reference the bare `google` identifier which TypeScript needs
  // to resolve as a value, not just a window property.
  // eslint-disable-next-line no-var
  var google: Window['google'];
}

export interface TokenClientConfig {
  client_id: string;
  scope: string;
  callback: (response: TokenResponse) => void;
  error_callback?: (error: TokenErrorResponse) => void;
  prompt?: string;
  hint?: string;
  enable_serial_consent?: boolean;
}

export interface TokenClient {
  requestAccessToken: (overrides?: { prompt?: string; hint?: string }) => void;
}

export interface TokenResponse {
  /** OAuth 2.0 access token. Omitted on error responses. */
  access_token: string;
  /** Token lifetime in seconds from issue time. Defaults to 3600 in practice. */
  expires_in: number;
  /** Unix epoch (seconds) the token was issued — older GIS builds only. */
  issued_at?: number;
  /** Space-separated granted scopes (older GIS builds only). */
  scope?: string;
  /** Token type, always "Bearer" in practice. */
  token_type?: string;
  /** Present on error responses instead of access_token. */
  error?: string;
  /** Human-readable error description, when error is set. */
  error_description?: string;
}

export interface TokenErrorResponse {
  type:
    | 'popup_closed'
    | 'popup_failed_to_open'
    | 'unknown'
    | string;
  message?: string;
  reason?: string;
  // GIS occasionally passes a raw Error object — be defensive.
  [key: string]: unknown;
}

export {};
