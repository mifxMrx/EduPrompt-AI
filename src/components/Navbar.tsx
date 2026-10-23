import React, { useState } from 'react';
import {
  Bookmark,
  BookOpen,
  Menu,
  X,
  Compass,
  Sliders,
  CheckCircle,
  GraduationCap,
} from 'lucide-react';
import type { PersonaId } from '../types';
import { PERSONAS } from '../data/personas';

interface NavbarProps {
  activeTab: 'templates' | 'custom' | 'result';
  setActiveTab: (tab: 'templates' | 'custom' | 'result') => void;
  selectedPersona: PersonaId;
  setSelectedPersona: (p: PersonaId) => void;
  onOpenHistory: () => void;
  onOpenGuide: () => void;
  favoritesCount: number;
  historyCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedPersona,
  setSelectedPersona,
  onOpenHistory,
  onOpenGuide,
  favoritesCount,
  historyCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('templates')}
              className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-teal-500 via-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-6 h-6 text-slate-950 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-teal-300 transition-colors">
                    EduPrompt <span className="text-teal-400">AI</span>
                  </span>
                  <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30">
                    <CheckCircle className="w-3 h-3 text-teal-400" /> Bebas API Key
                  </span>
                </div>
                <p className="text-xs text-slate-400 hidden sm:block">
                  Generator Prompt AI Edukasi & Penelitian
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-800/60 p-1.5 rounded-xl border border-slate-700/60">
            <button
              type="button"
              onClick={() => setActiveTab('templates')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'templates'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Compass className="w-4 h-4" />
              Jelajahi Template
              <span className="text-xs bg-slate-900/40 px-1.5 py-0.5 rounded-md font-mono">
                46
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('custom')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'custom'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Studio Kustom
            </button>
            <button
              type="button"
              onClick={onOpenGuide}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Panduan Edukasi
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Persona Quick Selector */}
            <div className="relative">
              <label htmlFor="persona-quick-select" className="sr-only">
                Pilih Profil Pengguna
              </label>
              <select
                id="persona-quick-select"
                value={selectedPersona}
                onChange={(e) => setSelectedPersona(e.target.value as PersonaId)}
                className="text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-200 rounded-lg py-2 pl-3 pr-8 focus:ring-2 focus:ring-teal-500 focus:outline-none cursor-pointer hover:border-slate-600 transition-colors"
              >
                {PERSONAS.map((p) => (
                  <option key={p.id} value={p.id}>
                    Profil: {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* History & Favorites Button */}
            <button
              type="button"
              onClick={onOpenHistory}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
              title="Lihat Riwayat & Favorit"
            >
              <Bookmark className="w-4 h-4 text-teal-400" />
              <span>Tersimpan</span>
              {(favoritesCount > 0 || historyCount > 0) && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-teal-500 text-slate-950">
                  {favoritesCount > 0 ? favoritesCount : historyCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onOpenHistory}
              className="relative p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Lihat Riwayat"
            >
              <Bookmark className="w-5 h-5 text-teal-400" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal-500 text-slate-950 text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={() => {
                setActiveTab('templates');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                activeTab === 'templates'
                  ? 'bg-teal-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4" />
                Jelajahi Template
              </div>
              <span className="text-xs bg-slate-950/40 px-2 py-0.5 rounded-full font-mono">
                46
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('custom');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                activeTab === 'custom'
                  ? 'bg-teal-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Studio Kustom
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenGuide();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Panduan Edukasi
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Profil Aktif
            </div>
            <div className="grid grid-cols-2 gap-2">
              {PERSONAS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setSelectedPersona(p.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left p-2 rounded-lg text-xs font-medium border transition-colors ${
                    selectedPersona === p.id
                      ? 'border-teal-500 bg-teal-500/10 text-teal-300'
                      : 'border-slate-800 bg-slate-800/40 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
