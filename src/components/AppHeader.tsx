// Slim header strip that shows up under the existing brand header once the
// student is signed in. Surfaces their identity (avatar + name), the live
// sync status, and a sign-out button.
//
// This is additive to the existing <header> in App.tsx — it does not
// replace the brand mark. The intent is to keep the SpeakUp! branding
// consistent and put the Google-specific stuff on its own row below.

import { LogOut } from 'lucide-react';
import { useAuth } from '../google/useAuth.ts';
import { useDriveSync } from '../google/useDriveSync.ts';
import SyncStatusIndicator from './SyncStatusIndicator.tsx';
import UserAvatar from './UserAvatar.tsx';

export default function AppHeader() {
  const { state, signOut } = useAuth();
  const { syncStatus, syncMessage, forceSync } = useDriveSync();

  if (!state.isAuthenticated || !state.user) return null;

  const handleSignOut = async () => {
    if (
      typeof window !== 'undefined' &&
      !window.confirm('Sign out? Your progress is saved in Google Drive and will be here when you sign back in.')
    ) {
      return;
    }
    await signOut();
  };

  return (
    <div
      className="bg-white/70 backdrop-blur-sm border-b border-blue-100/40 px-4 py-2 flex items-center justify-between gap-3 text-xs"
      id="app-google-header"
    >
      <div className="flex items-center gap-3 min-w-0">
        <UserAvatar user={state.user} size="sm" />
        <div className="hidden sm:block w-px h-5 bg-blue-100/60" />
        <SyncStatusIndicator
          status={syncStatus}
          message={syncMessage}
          variant="pill"
          onClick={forceSync}
        />
      </div>
      <button
        type="button"
        onClick={handleSignOut}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold font-display text-[#718096] hover:text-[#2D3748] hover:bg-slate-100 transition-all cursor-pointer"
        title="Sign out of Google"
        id="app-google-signout-btn"
      >
        <LogOut className="w-3.5 h-3.5" />
        <span>Sign out</span>
      </button>
    </div>
  );
}
