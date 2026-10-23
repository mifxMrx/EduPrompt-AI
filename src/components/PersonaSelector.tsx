import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  FlaskConical,
  CheckCircle2,
} from 'lucide-react';
import type { PersonaId } from '../types';
import { PERSONAS } from '../data/personas';

interface PersonaSelectorProps {
  selectedPersona: PersonaId;
  onSelectPersona: (id: PersonaId) => void;
  onSelectTopic?: (topic: string) => void;
}

export const PersonaSelector: React.FC<PersonaSelectorProps> = ({
  selectedPersona,
  onSelectPersona,
  onSelectTopic,
}) => {
  const getPersonaIcon = (id: PersonaId) => {
    switch (id) {
      case 'guru':
        return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 'siswa':
        return <BookOpen className="w-6 h-6 text-teal-400" />;
      case 'mahasiswa':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'peneliti':
        return <FlaskConical className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-2">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            Langkah 1: Tentukan Profil Anda
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Pilih Peran Edukasi Anda
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Template dan logika formulir otomatis disesuaikan dengan kebutuhan peran yang dipilih.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PERSONAS.map((persona) => {
          const isSelected = selectedPersona === persona.id;
          return (
            <div
              key={persona.id}
              onClick={() => onSelectPersona(persona.id)}
              className={`group relative text-left rounded-2xl p-5 border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900 border-teal-500 shadow-xl shadow-teal-500/10 ring-2 ring-teal-500/20'
                  : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-teal-500/50 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-teal-500/20 border border-teal-500/40 text-teal-300'
                        : 'bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 group-hover:border-teal-400/30'
                    }`}
                  >
                    {getPersonaIcon(persona.id)}
                  </div>
                  {isSelected && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Aktif
                    </span>
                  )}
                </div>

                <h3
                  className={`text-base font-bold transition-colors ${
                    isSelected ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {persona.name}
                </h3>
                <p
                  className={`text-xs mt-1 leading-relaxed ${
                    isSelected ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {persona.tagline}
                </p>
              </div>

              {/* Example Topic preview pill */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 mb-1.5">
                  Contoh Topik:
                </div>
                <div className="flex flex-wrap gap-1">
                  {persona.exampleTopics.slice(0, 2).map((topic, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPersona(persona.id);
                        if (onSelectTopic) onSelectTopic(topic);
                      }}
                      className={`text-[10px] text-left px-2 py-1 rounded-md transition-colors line-clamp-1 truncate max-w-full ${
                        isSelected
                          ? 'bg-slate-800 text-teal-300 hover:bg-slate-700'
                          : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-teal-50 hover:text-teal-700'
                      }`}
                      title={topic}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
