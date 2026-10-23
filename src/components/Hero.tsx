import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Zap,
  Globe,
} from 'lucide-react';
import type { PersonaId } from '../types';

interface HeroProps {
  onSearchChange: (q: string) => void;
  selectedPersona: PersonaId;
  onQuickGenerate: (topic: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearchChange,
  onQuickGenerate,
}) => {
  const [quickTopic, setQuickTopic] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickTopic.trim()) {
      onQuickGenerate(quickTopic.trim());
    }
  };

  const quickPills = [
    'Modul Ajar Kurikulum Merdeka',
    'Soal Pilihan Ganda HOTS',
    'Literature Review Skripsi',
    'Penjelasan Feynman Sederhana',
    'LKPD Eksploratif IPA',
  ];

  return (
    <div className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-b border-slate-800">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-teal-500/10 via-cyan-500/10 to-indigo-500/10 blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-5 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Platform Prompt Engineering Edukasi No. 1</span>
            <span className="w-1 h-1 rounded-full bg-teal-400"></span>
            <span className="text-white font-normal">Tanpa API Key</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none mb-5">
            Susun Prompt AI Profesional untuk{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300">
              Pendidikan & Riset
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Bantu Guru, Siswa, Mahasiswa, dan Peneliti menyusun prompt berstruktur pedagogis tinggi secara instan. Salin dan lanjutkan langsung di <strong className="text-white">Gemini</strong> atau <strong className="text-white">ChatGPT</strong>.
          </p>

          {/* Quick Idea / Search Input Box */}
          <form
            onSubmit={handleQuickSubmit}
            className="max-w-2xl mx-auto bg-slate-800/90 p-2 sm:p-2.5 rounded-2xl border border-slate-700/80 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4"
          >
            <div className="relative flex-1 flex items-center">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={quickTopic}
                onChange={(e) => {
                  setQuickTopic(e.target.value);
                  onSearchChange(e.target.value);
                }}
                placeholder="Tulis ide atau topik Anda... (misal: Fotosintesis SMP, Regresi Skripsi)"
                className="w-full bg-transparent pl-3 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 shadow-md shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Buat Prompt</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Suggestion Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-400 mb-8">
            <span className="text-slate-500">Paling dicari:</span>
            {quickPills.map((pill, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setQuickTopic(pill);
                  onSearchChange(pill);
                }}
                className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-teal-300 border border-slate-700/70 transition-colors"
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
              <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
              <span>46+ Template Khusus</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Offline & Lokal</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Diferensiasi & HOTS</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
              <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>6 Bahasa Keluaran</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
