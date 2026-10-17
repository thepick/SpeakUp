'use strict';
// Minimal credential-isolation net for SpeakUp's auth layer. Executes the real
// saveTokenSession/readTokenSession/clearTokenSession from src/google/auth.ts
// (type-stripped by Node) against a mocked session/local storage.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { stripTypeScriptTypes } = require('node:module');

const raw = fs.readFileSync(path.join(__dirname, 'src/google/auth.ts'), 'utf8');

const start = raw.indexOf('function saveTokenSession(');
const end = raw.indexOf('function tokenResponseIncludesScope');
assert.ok(start >= 0 && end > start, 'token-session functions missing from auth.ts');
const js = stripTypeScriptTypes(raw.slice(start, end), { mode: 'strip' });

const session = {}, local = {};
const app = vm.runInNewContext(js + '\n;globalThis', {
  SYNC_TOKEN_SESSION_KEY: 'speakup-google-token-session-gmail-v1',
  sessionStorage: {
    getItem: k => Object.prototype.hasOwnProperty.call(session, k) ? session[k] : null,
    setItem: (k, v) => { session[k] = String(v); },
    removeItem: k => { delete session[k]; },
  },
  localStorage: {
    getItem: k => Object.prototype.hasOwnProperty.call(local, k) ? local[k] : null,
    setItem: (k, v) => { local[k] = String(v); },
    removeItem: k => { delete local[k]; },
  },
  nowMs: () => 0,
  console,
});

// Token session round-trip: token lives in sessionStorage, never localStorage.
app.saveTokenSession({ access_token: 'SECRET', expires_in: 3600 });
assert.equal(JSON.stringify(session).includes('SECRET'), true, 'token persisted to sessionStorage');
assert.equal(JSON.stringify(local).includes('SECRET'), false, 'token must not reach localStorage');
assert.equal(app.readTokenSession().accessToken, 'SECRET', 'readTokenSession restores the token');

// Expired token is rejected and cleared.
app.nowMs = () => 4000 * 1000;
assert.equal(app.readTokenSession(), null, 'expired token is rejected');
assert.equal(session['speakup-google-token-session-gmail-v1'], undefined, 'expired token is cleared');

// Explicit clear removes the session.
app.nowMs = () => 0;
app.saveTokenSession({ access_token: 'X', expires_in: 3600 });
app.clearTokenSession();
assert.equal(app.readTokenSession(), null, 'clearTokenSession removes the token');

console.log('token-session: sessionStorage-only persistence, expiry rejection + clear passed.');
