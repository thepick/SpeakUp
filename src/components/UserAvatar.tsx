// Compact avatar + name pill, sized for the app header bar. Uses GoogleUser.picture
// (Google's hosted avatar URL) when available; falls back to an initials
// circle if no picture, or the network is unavailable.
//
// referrerPolicy="no-referrer" is critical — without it, the user's IP gets
// leaked to Google every time we render the avatar, which is a known tracking
// surface.

import { useState } from 'react';
import type { GoogleUser } from '../google/types';

interface UserAvatarProps {
  user: GoogleUser;
  size?: 'sm' | 'md';
}

function initialsFromName(name: string): string {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
  return (
    parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)
  ).toUpperCase();
}

export default function UserAvatar({ user, size = 'md' }: UserAvatarProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const dim = size === 'sm' ? 'w-7 h-7 text-[10px]' : 'w-9 h-9 text-xs';
  const showPicture = !!user.picture && !imageFailed;

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${dim} rounded-full bg-[#EBF4FF] border border-blue-100/60 flex items-center justify-center font-display font-bold text-[#4A90E2] overflow-hidden shrink-0`}
        title={user.name || user.email}
      >
        {showPicture ? (
          <img
            src={user.picture}
            alt={user.name || 'Google profile'}
            className="w-full h-full object-cover"
            // Critical: without no-referrer, the user's IP is leaked to Google
            // on every render of this avatar (a known tracking surface).
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="select-none">
            {initialsFromName(user.name || user.email)}
          </span>
        )}
      </div>
      <div className="flex flex-col leading-tight min-w-0">
        <span className="text-xs font-semibold text-[#2D3748] font-sans truncate max-w-[140px]">
          {user.name || user.email || 'Student'}
        </span>
      </div>
    </div>
  );
}
