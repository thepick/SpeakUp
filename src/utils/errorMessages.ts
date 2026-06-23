// src/utils/errorMessages.ts
//
// Maps technical Azure Speech / network errors to kid-friendly messages
// suitable for Thai Grade 5 students (age 9-10).
//
// Used by StudentPractice.tsx in the catch block of handleCheckSound
// so that students never see raw technical error strings.

export function getFriendlyErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error ?? '');
  const lower = message.toLowerCase();

  // ── No speech recognized ─────────────────────────────────────────────
  if (
    lower.includes('no speech recognized') ||
    lower.includes('no match') ||
    lower.includes('nospeech')
  ) {
    return "I couldn't hear you! Try speaking a bit louder. 🎤";
  }

  // ── Connection / network errors ──────────────────────────────────────
  if (
    lower.includes('connection') ||
    lower.includes('connectionfailure') ||
    lower.includes('network') ||
    lower.includes('timeout') ||
    lower.includes('fetch') ||
    lower.includes('econnrefused') ||
    lower.includes('enotfound') ||
    lower.includes('abort') ||
    lower.includes('offline')
  ) {
    return "The internet connection was lost. Let's try again! 🌐";
  }

  // ── Recognition canceled ─────────────────────────────────────────────
  if (
    lower.includes('canceled') ||
    lower.includes('cancelled') ||
    lower.includes('cancellation')
  ) {
    return "Something went wrong. Don't worry, just try again! 😊";
  }

  // ── Auth / 403 / credentials ─────────────────────────────────────────
  if (
    lower.includes('unauthorized') ||
    lower.includes('403') ||
    lower.includes('forbidden') ||
    lower.includes('auth') ||
    lower.includes('authentication') ||
    lower.includes('credentials') ||
    lower.includes('azure credentials not configured') ||
    lower.includes('not configured')
  ) {
    return "The coach needs a quick check. Ask your teacher for help! 👩‍🏫";
  }

  // ── Default fallback ─────────────────────────────────────────────────
  return "Oops! Something hiccuped. Give it another try! 💪";
}
