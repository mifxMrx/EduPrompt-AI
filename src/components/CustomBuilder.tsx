import React, { useState } from 'react';
import {
  Sliders,
  Sparkles,
  Compass,
  GraduationCap,
  FileCode,
  Languages,
  MessageSquare,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import type { FormValues, Persona, EducationLevel, ToneStyle, OutputFormat, LanguageCode, VariationType } from '../types';
import { EDUCATION_LEVELS, TONE_STYLES, OUTPUT_FORMATS, LANGUAGES, VARIATIONS } from '../data/options';
import { PERSONAS } from '../data/personas';

interface CustomBuilderProps {
  currentPersona: Persona;
  onGenerateCustom: (values: FormValues, persona: Persona) => void;
}

export const CustomBuilder: React.FC<CustomBuilderProps> = ({
  currentPersona,
  onGenerateCustom,
}) => {
  const [selectedPersonaId, setSelectedPersonaId] = useState(currentPersona.id);
  const [topic, setTopic] = useState('');
  const [goal, setGoal] = useState('');
  const [context, setContext] = useState('');
  const [educationLevel, setEducationLevel] = useState<EducationLevel>('SMA/SMK');
  const [tone, setTone] = useState<ToneStyle>('formal');
  const [outputFormat, setOutputFormat] = useState<OutputFormat>('full-document');
  const [language, setLanguage] = useState<LanguageCode>('id');
  const [customLanguage, setCustomLanguage] = useState('');
  const [variation, setVariation] = useState<VariationType>('standar');
  const [error, setError] = useState<string | null>(null);

  const activePersona = PERSONAS.find((p) => p.id === selectedPersonaId) || currentPersona;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Mohon isi topik atau masalah pokok terlebih dahulu.');
      return;
    }
    setError(null);

    onGenerateCustom(
      {
        topic: topic.trim(),
        goal: goal.trim() || 'Menyajikan analisis, panduan, atau materi yang komprehensif dan operasional',
        context: context.trim(),
        educationLevel,
        tone,
        outputFormat,
        language,
        customLanguage: language === 'custom' ? customLanguage.trim() : undefined,
        customValues: {},
        variation,
      },
      activePersona
    );
  };

  const handleReset = () => {
    setTopic('');
    setGoal('');
    setContext('');
    setEducationLevel('SMA/SMK');
    setTone('formal');
    setOutputFormat('full-document');
    setLanguage('id');
    setCustomLanguage('');
    setVariation('standar');
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Studio Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-lg mb-8 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-teal-400" /> Studio Bebas
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          Studio Pembuat Prompt Kustom (Bebas)
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          Rancang prompt dari nol dengan kontrol penuh atas persona, tujuan, konteks, jenjang, gaya bahasa, format, dan bahasa tanpa terikat template tertentu.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm space-y-6"
      >
        {error && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm font-medium">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* 1. Pilih Persona */}
        <div>
          <label className="text-sm font-bold text-slate-900 dark:text-white block mb-2">
            1. Peran / Profil Sasaran
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {PERSONAS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPersonaId(p.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPersonaId === p.id
                    ? 'border-teal-500 bg-teal-500/10 text-teal-700 dark:text-teal-300 font-bold ring-1 ring-teal-500/30'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <div className="text-xs font-semibold">{p.name}</div>
                <div className="text-[10px] opacity-75 truncate">{p.tagline}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Topik Pokok */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="custom-topic"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-teal-500" />
              2. Topik, Materi, atau Masalah Pokok <span className="text-rose-500">*</span>
            </label>
            <span className="text-xs text-slate-400">Wajib diisi</span>
          </div>
          <input
            id="custom-topic"
            type="text"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              if (error) setError(null);
            }}
            placeholder="Contoh: Analisis Kinerja Keuangan Bank Syariah, Desain Soal AKM Literasi, dll."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* 3. Tujuan Khusus */}
        <div>
          <label
            htmlFor="custom-goal"
            className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            3. Tujuan Spesifik Luaran
          </label>
          <input
            id="custom-goal"
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Contoh: Menghasilkan analisis komparatif dengan studi kasus nyata dan rubrik penilaian..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* 4. Konteks Khusus */}
        <div>
          <label
            htmlFor="custom-context"
            className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
          >
            <MessageSquare className="w-4 h-4 text-blue-500" />
            4. Konteks, Kendala, atau Sasaran Khusus
          </label>
          <textarea
            id="custom-context"
            rows={2}
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Contoh: Audiens adalah mahasiswa tahun pertama, tidak memiliki pemahaman teknis dasar, waktu presentasi 20 menit..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* 5. Jenjang & Gaya Bahasa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="custom-edu"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
            >
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              5. Jenjang Pendidikan
            </label>
            <select
              id="custom-edu"
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value as EducationLevel)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              {EDUCATION_LEVELS.map((lvl) => (
                <option key={lvl.value} value={lvl.value}>
                  {lvl.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="custom-tone"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
            >
              <Sliders className="w-4 h-4 text-emerald-500" />
              6. Gaya Bahasa
            </label>
            <select
              id="custom-tone"
              value={tone}
              onChange={(e) => setTone(e.target.value as ToneStyle)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              {TONE_STYLES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 6. Format & Bahasa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="custom-format"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
            >
              <FileCode className="w-4 h-4 text-purple-500" />
              7. Format Keluaran
            </label>
            <select
              id="custom-format"
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value as OutputFormat)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              {OUTPUT_FORMATS.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="custom-lang"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
            >
              <Languages className="w-4 h-4 text-teal-500" />
              8. Bahasa Prompt / Keluaran
            </label>
            <select
              id="custom-lang"
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.name} ({l.native})
                </option>
              ))}
            </select>
            {language === 'custom' && (
              <input
                type="text"
                value={customLanguage}
                onChange={(e) => setCustomLanguage(e.target.value)}
                placeholder="Ketik bahasa yang diinginkan..."
                className="mt-2 w-full px-3.5 py-2 rounded-lg border border-teal-500/50 bg-teal-50/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            )}
          </div>
        </div>

        {/* 7. Variasi */}
        <div className="pt-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
            9. Variasi & Kedalaman
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {VARIATIONS.map((v) => (
              <button
                key={v.type}
                type="button"
                onClick={() => setVariation(v.type)}
                className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                  variation === v.type
                    ? 'border-teal-500 bg-teal-500/10 text-teal-700 dark:text-teal-300 font-bold ring-1 ring-teal-500/30'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="font-semibold">{v.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Kosongkan Formulir</span>
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-teal-200" />
            <span>Susun Prompt Kustom</span>
          </button>
        </div>
      </form>
    </div>
  );
};
