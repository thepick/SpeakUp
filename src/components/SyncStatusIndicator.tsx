// Small status badge that lives in the app header and the practice summary.
// Picks an icon + color from the SyncStatus enum. The brief status string
// comes from useDriveSync.syncMessage.
//
// Icon set is lucide-react (already in package.json) — no new dependencies.

import { type ComponentType } from 'react';
import {
  AlertCircle,
  Check,
  Cloud,
  CloudOff,
  Loader2,
  RefreshCw,
} from 'lucide-react';
import type { SyncStatus } from '../google/types.ts';

interface SyncStatusIndicatorProps {
  status: SyncStatus;
  message?: string;
  /** Compact pill for the header; full row for the summary page. */
  variant?: 'pill' | 'inline';
  /** Optional click handler — used by the "Sync now" affordance. */
  onClick?: () => void;
}

interface StyleSpec {
  icon: ComponentType<{ className?: string }>;
  color: string;
  spin?: boolean;
  label: string;
}

function pickStyle(status: SyncStatus): StyleSpec {
  switch (status) {
    case 'hydrating':
      return { icon: Loader2, color: 'text-[#4A90E2]', spin: true, label: 'Loading…' };
    case 'pushing':
      return { icon: Loader2, color: 'text-[#4A90E2]', spin: true, label: 'Saving…' };
    case 'pulling':
      return { icon: RefreshCw, color: 'text-[#4A90E2]', spin: true, label: 'Syncing…' };
    case 'synced':
      return { icon: Check, color: 'text-[#48BB78]', label: 'Saved ✓' };
    case 'error':
      return { icon: AlertCircle, color: 'text-rose-500', label: 'Sync error' };
    case 'offline':
      return { icon: CloudOff, color: 'text-slate-400', label: 'Offline' };
    case 'idle':
    default:
      return { icon: Cloud, color: 'text-slate-400', label: 'Not synced' };
  }
}

export default function SyncStatusIndicator({
  status,
  message,
  variant = 'pill',
  onClick,
}: SyncStatusIndicatorProps) {
  const style = pickStyle(status);
  const Icon = style.icon;
  const display = message || style.label;
  const iconClass = `w-3.5 h-3.5 ${style.spin ? 'animate-spin' : ''}`;
  const clickableClasses = onClick
    ? 'cursor-pointer hover:opacity-80 active:scale-[0.98]'
    : 'cursor-default';

  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={!onClick}
        className={`inline-flex items-center gap-1.5 text-xs font-semibold font-display ${style.color} ${clickableClasses}`}
        aria-label={display}
        title={display}
      >
        <Icon className={iconClass} />
        <span>{display}</span>
      </button>
    );
  }

  const pill = (
    <>
      <Icon className={iconClass} />
      <span>{display}</span>
    </>
  );

  const pillClasses = `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold font-display bg-white border border-blue-100/60 shadow-xs ${style.color} ${clickableClasses}`;

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={pillClasses}
        title={display}
        aria-label={display}
      >
        {pill}
      </button>
    );
  }

  return (
    <div className={pillClasses} title={display} role="status" aria-live="polite">
      {pill}
    </div>
  );
}
