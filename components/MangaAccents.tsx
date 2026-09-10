import React from 'react';

export const MangaSticker: React.FC<{ text: string; sub?: string; className?: string }> = ({ text, sub, className = '' }) => (
  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-900/90 border border-neutral-700 text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md ${className}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-pulse"></span>
    <span className="text-[#F5F5F5]">{text}</span>
    {sub && <span className="text-[#FF2E93] text-[10px] font-mono">[{sub}]</span>}
  </div>
);

export const JapaneseKanaBadge: React.FC<{ kana: string; label: string; className?: string }> = ({ kana, label, className = '' }) => (
  <div className={`flex items-center gap-1.5 px-2 py-0.5 border border-[#D32F2F]/40 bg-[#D32F2F]/10 rounded text-[11px] font-medium text-[#F5F5F5] ${className}`}>
    <span className="text-[#D32F2F] font-bold text-xs">{kana}</span>
    <span>{label}</span>
  </div>
);

export const MangaCrossGrid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none flex items-center gap-3 text-neutral-600/40 text-[10px] font-mono tracking-widest ${className}`}>
    <span>+</span>
    <span>GRANADA · EST. 2024</span>
    <span>+</span>
  </div>
);

export const JapaneseWatermark: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <div className={`pointer-events-none select-none font-bold text-white/[0.03] tracking-tighter leading-none whitespace-nowrap uppercase ${className}`}>
    {text}
  </div>
);
