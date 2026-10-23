import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowLeft,
  RotateCcw,
  Languages,
  FileCode,
  GraduationCap,
  MessageSquare,
  Compass,
  Sliders,
  AlertCircle,
} from 'lucide-react';
import type {
  PromptTemplate,
  FormValues,
  Persona,
  EducationLevel,
  ToneStyle,
  OutputFormat,
  LanguageCode,
  VariationType,
} from '../types';
import {
  EDUCATION_LEVELS,
  TONE_STYLES,
  OUTPUT_FORMATS,
  LANGUAGES,
  VARIATIONS,
} from '../data/options';
import { CATEGORIES } from '../data/categories';

interface PromptFormProps {
  template: PromptTemplate;
  persona: Persona;
  initialTopic?: string;
  onGenerate: (formValues: FormValues) => void;
  onBack: () => void;
}

export const PromptForm: React.FC<PromptFormProps> = ({
  template,
  persona,
  initialTopic,
  onGenerate,
  onBack,
}) => {
  // Initialize form values from template defaults
  const [topic, setTopic] = useState<string>(initialTopic || template.defaultTopic);
  const [goal, setGoal] = useState<string>(template.defaultGoal);
  const [context, setContext] = useState<string>(template.defaultContext || '');
  const [educationLevel, setEducationLevel] = useState<EducationLevel>(
    template.defaultEducationLevel
  );
  const [tone, setTone] = useState<ToneStyle>(template.defaultTone);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>(
    template.defaultOutputFormat
  );
  const [language, setLanguage] = useState<LanguageCode>(template.defaultLanguage);
  const [customLanguage, setCustomLanguage] = useState<string>('');
  const [variation, setVariation] = useState<VariationType>('standar');

  // Custom fields state
  const [customValues, setCustomValues] = useState<Record<string, string | boolean>>(() => {
    const initial: Record<string, string | boolean> = {};
    if (template.customFields) {
      template.customFields.forEach((field) => {
        initial[field.id] = field.defaultValue !== undefined ? field.defaultValue : '';
      });
    }
    return initial;
  });

  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Sync if template changes
  useEffect(() => {
    setTopic(initialTopic || template.defaultTopic);
    setGoal(template.defaultGoal);
    setContext(template.defaultContext || '');
    setEducationLevel(template.defaultEducationLevel);
    setTone(template.defaultTone);
    setOutputFormat(template.defaultOutputFormat);
    setLanguage(template.defaultLanguage);
    setVariation('standar');

    const initial: Record<string, string | boolean> = {};
    if (template.customFields) {
      template.customFields.forEach((field) => {
        initial[field.id] = field.defaultValue !== undefined ? field.defaultValue : '';
      });
    }
    setCustomValues(initial);
    setError(null);
  }, [template, initialTopic]);

  const handleCustomChange = (id: string, val: string | boolean) => {
    setCustomValues((prev) => ({ ...prev, [id]: val }));
  };

  const handleReset = () => {
    setTopic(template.defaultTopic);
    setGoal(template.defaultGoal);
    setContext(template.defaultContext || '');
    setEducationLevel(template.defaultEducationLevel);
    setTone(template.defaultTone);
    setOutputFormat(template.defaultOutputFormat);
    setLanguage(template.defaultLanguage);
    setCustomLanguage('');
    setVariation('standar');

    const initial: Record<string, string | boolean> = {};
    if (template.customFields) {
      template.customFields.forEach((field) => {
        initial[field.id] = field.defaultValue !== undefined ? field.defaultValue : '';
      });
    }
    setCustomValues(initial);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Mohon isi topik atau materi pokok terlebih dahulu.');
      return;
    }
    setError(null);
    setIsGenerating(true);

    setTimeout(() => {
      onGenerate({
        topic: topic.trim(),
        goal: goal.trim() || template.defaultGoal,
        context: context.trim(),
        educationLevel,
        tone,
        outputFormat,
        language,
        customLanguage: language === 'custom' ? customLanguage.trim() : undefined,
        customValues,
        variation,
      });
      setIsGenerating(false);
    }, 250);
  };

  const category = CATEGORIES.find((c) => c.id === template.category);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button & Template banner */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Template</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Profil:</span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-900 text-teal-300 border border-slate-700">
            {persona.name}
          </span>
        </div>
      </div>

      {/* Main Template Header Card */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-lg mb-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
            {category?.name || template.category}
          </span>
          {template.isPopular && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Populer
            </span>
          )}
        </div>

        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          {template.title}
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          {template.description}
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm space-y-6"
      >
        {/* Error message */}
        {error && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm font-medium animate-in fade-in">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* 1. TOPIK / MATERI UTAMA */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="topic-input"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-teal-500" />
              1. Topik / Materi Pokok <span className="text-rose-500">*</span>
            </label>
            <span className="text-xs text-slate-400">Wajib diisi</span>
          </div>
          <input
            id="topic-input"
            type="text"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              if (error) setError(null);
            }}
            placeholder="Contoh: Fotosintesis SMP, Persamaan Linier SMA, Uji Regresi Skripsi, dll."
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 ${
              error
                ? 'border-rose-400 bg-rose-50/20 text-slate-900 dark:text-white'
                : 'border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white'
            }`}
          />
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400">Inspirasi topik:</span>
            {persona.exampleTopics.slice(0, 3).map((ex, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setTopic(ex)}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-teal-50 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* 2. TUJUAN SPESIFIK */}
        <div>
          <label
            htmlFor="goal-input"
            className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            2. Tujuan Luaran / Target Hasil
          </label>
          <input
            id="goal-input"
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Contoh: Menyusun modul 2 pertemuan dengan asesmen formatif..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          />
        </div>

        {/* 3. KONTEKS & KARAKTERISTIK AUDIENS */}
        <div>
          <label
            htmlFor="context-input"
            className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
          >
            <MessageSquare className="w-4 h-4 text-blue-500" />
            3. Konteks Khusus / Kondisi Kelas / Karakteristik Siswa
          </label>
          <input
            id="context-input"
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Contoh: Kelas 7 SMP, 32 siswa heterogen, fasilitas proyektor terbatas, banyak siswa aktif..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          />
        </div>

        {/* 4. JENJANG PENDIDIKAN & GAYA BAHASA (GRID 2 KOLOM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Jenjang */}
          <div>
            <label
              htmlFor="edu-level-select"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
            >
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              4. Jenjang Pendidikan
            </label>
            <select
              id="edu-level-select"
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

          {/* Gaya Bahasa */}
          <div>
            <label
              htmlFor="tone-select"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
            >
              <Sliders className="w-4 h-4 text-emerald-500" />
              5. Gaya Bahasa & Nada Bicara
            </label>
            <select
              id="tone-select"
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

        {/* 5. FORMAT KELUARAN & BAHASA (GRID 2 KOLOM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Format Keluaran */}
          <div>
            <label
              htmlFor="format-select"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
            >
              <FileCode className="w-4 h-4 text-purple-500" />
              6. Format Keluaran
            </label>
            <select
              id="format-select"
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

          {/* Bahasa Keluaran */}
          <div>
            <label
              htmlFor="lang-select"
              className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2"
            >
              <Languages className="w-4 h-4 text-teal-500" />
              7. Bahasa Prompt / Keluaran
            </label>
            <select
              id="lang-select"
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
                placeholder="Ketik bahasa yang diinginkan (misal: Bahasa Sunda, Jerman, Prancis...)"
                className="mt-2 w-full px-3.5 py-2 rounded-lg border border-teal-500/50 bg-teal-50/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            )}
          </div>
        </div>

        {/* 6. TEMPLATE-SPECIFIC CUSTOM FIELDS (IF ANY) */}
        {template.customFields && template.customFields.length > 0 && (
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700/80 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Parameter Tambahan Template Ini
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {template.customFields.map((field) => (
                <div key={field.id} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                  <label
                    htmlFor={`custom-${field.id}`}
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5"
                  >
                    {field.label}
                  </label>
                  {field.type === 'select' && field.options ? (
                    <select
                      id={`custom-${field.id}`}
                      value={String(customValues[field.id] ?? '')}
                      onChange={(e) => handleCustomChange(field.id, e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    >
                      {field.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={`custom-${field.id}`}
                      rows={2}
                      value={String(customValues[field.id] ?? '')}
                      onChange={(e) => handleCustomChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  ) : (
                    <input
                      id={`custom-${field.id}`}
                      type="text"
                      value={String(customValues[field.id] ?? '')}
                      onChange={(e) => handleCustomChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. VARIASI & TINGKAT KEDALAMAN */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-700/80">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
            Pilih Variasi Prompt
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {VARIATIONS.map((v) => {
              const isSelected = variation === v.type;
              return (
                <button
                  key={v.type}
                  type="button"
                  onClick={() => setVariation(v.type)}
                  className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                    isSelected
                      ? 'border-teal-500 bg-teal-500/10 text-teal-700 dark:text-teal-300 font-bold ring-1 ring-teal-500/30'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                  title={v.description}
                >
                  <div className="font-semibold">{v.label}</div>
                  <div className="text-[10px] opacity-75 mt-0.5 line-clamp-1">
                    {v.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset ke Pengaturan Awal</span>
          </button>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Menyusun Prompt...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-teal-200" />
                <span>Buat Prompt AI Sekarang</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
