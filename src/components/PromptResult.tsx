import React, { useState } from 'react';
import {
  Copy,
  Check,
  Download,
  Bookmark,
  ExternalLink,
  Edit3,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Info,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import type { PromptTemplate, FormValues, Persona, VariationType } from '../types';
import { copyToClipboard, downloadAsTxt, GEMINI_URL, CHATGPT_URL } from '../utils/export';
import { VARIATIONS } from '../data/options';

interface PromptResultProps {
  promptText: string;
  template?: PromptTemplate;
  formValues: FormValues;
  persona: Persona;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onEditPromptText: (text: string) => void;
  onVariationChange: (v: VariationType) => void;
  onEditParameters: () => void;
  onNewPrompt: () => void;
  showToast: (msg: string, type?: 'success' | 'info' | 'warning') => void;
}

export const PromptResult: React.FC<PromptResultProps> = ({
  promptText,
  template,
  formValues,
  persona,
  isFavorite,
  onToggleFavorite,
  onEditPromptText,
  onVariationChange,
  onEditParameters,
  onNewPrompt,
  showToast,
}) => {
  const [copied, setCopied] = useState(false);

  const wordCount = promptText.trim().split(/\s+/).filter(Boolean).length;
  const charCount = promptText.length;

  const handleCopy = async () => {
    const success = await copyToClipboard(promptText);
    if (success) {
      setCopied(true);
      showToast('Prompt berhasil disalin ke clipboard!', 'success');
      setTimeout(() => setCopied(false), 2500);
    } else {
      showToast('Gagal menyalin. Silakan pilih teks secara manual.', 'warning');
    }
  };

  const handleDownload = () => {
    const baseName = formValues.topic || template?.title || 'EduPrompt';
    downloadAsTxt(promptText, baseName);
    showToast('File prompt berhasil diunduh (.txt)', 'success');
  };

  const handleOpenGemini = async () => {
    await copyToClipboard(promptText);
    window.open(GEMINI_URL, '_blank', 'noopener,noreferrer');
    showToast('Prompt disalin! Silakan tekan Ctrl+V di Gemini.', 'success');
  };

  const handleOpenChatGPT = async () => {
    await copyToClipboard(promptText);
    window.open(CHATGPT_URL, '_blank', 'noopener,noreferrer');
    showToast('Prompt disalin! Silakan tekan Ctrl+V di ChatGPT.', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Result Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" /> Siap Digunakan
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {wordCount} kata • {charCount} karakter
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            {formValues.topic || template?.title || 'Prompt Terstruktur'}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Disesuaikan untuk: <span className="font-semibold text-slate-700 dark:text-slate-300">{persona.name}</span> • Jenjang: <span className="font-semibold text-slate-700 dark:text-slate-300">{formValues.educationLevel}</span>
          </p>
        </div>

        {/* Action Header Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleFavorite}
            className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isFavorite
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/40 shadow-sm'
                : 'bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-amber-400'
            }`}
            title={isFavorite ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">{isFavorite ? 'Tersimpan' : 'Favorit'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            title="Unduh sebagai file teks TXT"
          >
            <Download className="w-4 h-4 text-teal-500" />
            <span className="hidden sm:inline">Unduh TXT</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-600/20'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Tersalin!' : 'Salin Prompt'}</span>
          </button>
        </div>
      </div>

      {/* Variation Switcher */}
      <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-teal-500" />
          <span>Ubah Variasi Prompt Instan:</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {VARIATIONS.map((v) => {
            const isCurrent = formValues.variation === v.type;
            return (
              <button
                key={v.type}
                type="button"
                onClick={() => onVariationChange(v.type)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isCurrent
                    ? 'bg-teal-600 text-white border-teal-500 shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-teal-400'
                }`}
                title={v.description}
              >
                {v.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editable Prompt Editor Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md overflow-hidden">
        {/* Editor Top Bar */}
        <div className="bg-slate-100 dark:bg-slate-800/80 px-4 py-2.5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
            <span className="font-medium">Editor Teks Prompt (Bisa diedit langsung sebelum disalin)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-mono">
              Markdown Ready
            </span>
          </div>
        </div>

        {/* Text Area */}
        <div className="p-4 sm:p-5">
          <textarea
            value={promptText}
            onChange={(e) => onEditPromptText(e.target.value)}
            rows={18}
            className="w-full bg-slate-50/50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y"
            placeholder="Teks prompt akan muncul di sini..."
          />
        </div>

        {/* Editor Bottom Info */}
        <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Info className="w-4 h-4 text-teal-500 shrink-0" />
            <span>Format prompt telah dioptimasi dengan struktur Role-Objective-Context-Constraints-Output.</span>
          </div>
          <button
            type="button"
            onClick={onEditParameters}
            className="inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-semibold hover:underline"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Ulang Parameter di Form</span>
          </button>
        </div>
      </div>

      {/* Direct AI Continuation Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-2xl p-6 sm:p-7 text-white border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-400" />
              Langkah Terakhir: Buka Layanan AI Pilihan Anda
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
              Lanjutkan & Jalankan Prompt di Gemini atau ChatGPT
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Klik salah satu tombol di samping. Teks prompt akan <strong className="text-teal-300">disalin otomatis</strong> ke clipboard Anda, lalu tab resmi AI akan terbuka. Cukup tekan <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-teal-300 border border-slate-600 font-mono text-xs">Ctrl + V</kbd> untuk menempelkan prompt!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            {/* Continue to Gemini */}
            <button
              type="button"
              onClick={handleOpenGemini}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Lanjutkan di Gemini</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </button>

            {/* Continue to ChatGPT */}
            <button
              type="button"
              onClick={handleOpenChatGPT}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Lanjutkan di ChatGPT</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </button>
          </div>
        </div>

        {/* Clear Instructions Badge Box */}
        <div className="mt-5 pt-4 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center text-[11px] shrink-0">
              1
            </span>
            <span>Salin prompt otomatis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center text-[11px] shrink-0">
              2
            </span>
            <span>Tab baru Gemini/ChatGPT dibuka</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center text-[11px] shrink-0">
              3
            </span>
            <span>Tekan Ctrl + V lalu kirim</span>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <button
          type="button"
          onClick={onEditParameters}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Kembali & Sesuaikan Parameter</span>
        </button>

        <button
          type="button"
          onClick={onNewPrompt}
          className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 transition-colors shadow-sm"
        >
          <span>Buat Prompt Lain</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
