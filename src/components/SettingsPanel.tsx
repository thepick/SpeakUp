import React, { useState } from 'react';
import { Settings, Eye, EyeOff, CheckCircle, X, RotateCcw } from 'lucide-react';
import { getAzureConfig, setAzureConfig, clearAzureConfig, hasAzureConfig } from '../utils/assessApi';

interface SettingsPanelProps {
  onClose: () => void;
}

export default function SettingsPanel({ onClose }: SettingsPanelProps) {
  const current = getAzureConfig();
  const [key, setKey] = useState(current.key);
  const [region, setRegion] = useState(current.region);
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setAzureConfig(key.trim(), region.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const isValid = key.trim().length > 10 && region.trim().length > 2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-[28px] shadow-2xl border border-blue-100 w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-100/50">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-[#4A90E2]" />
            <h2 className="font-display font-bold text-sm text-[#2D3748]">Azure Speech Settings</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
            <X className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          <p className="text-xs text-[#718096] font-sans">
            Enter your Azure Speech resource credentials. These are stored in your browser only — nothing is sent anywhere except Azure.
          </p>

          {/* Key */}
          <div>
            <label className="block text-caption uppercase tracking-wider font-bold text-[#718096] mb-1.5">
              Speech Key
            </label>
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="w-full px-3 py-2.5 text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/30 focus:border-[#4A90E2] transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Region */}
          <div>
            <label className="block text-caption uppercase tracking-wider font-bold text-[#718096] mb-1.5">
              Region
            </label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="eastus"
              className="w-full px-3 py-2.5 text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/30 focus:border-[#4A90E2] transition-all"
            />
            <p className="text-caption text-slate-400 mt-1">
              e.g. eastus, westus2, southeastasia
            </p>
          </div>

          {/* Status */}
          {hasAzureConfig() && (
            <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 rounded-xl px-3 py-2">
              <CheckCircle className="w-3.5 h-3.5" />
              Azure credentials are configured
            </div>
          )}

          {/* Reset to built-in */}
          <button
            onClick={() => {
              clearAzureConfig();
              const def = getAzureConfig();
              setKey('••••••••••••••••');
              setRegion(def.region);
              setSaved(true);
              setTimeout(() => setSaved(false), 2000);
            }}
            className="flex items-center gap-1.5 text-caption text-slate-400 hover:text-[#4A90E2] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Reset to built-in credentials
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-blue-100/50 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#718096] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer font-display"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!isValid}
            className="px-5 py-2 bg-[#4A90E2] hover:bg-[#357ABD] disabled:opacity-40 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer font-display shadow-sm"
          >
            {saved ? '✓ Saved!' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
