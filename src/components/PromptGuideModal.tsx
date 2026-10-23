import React from 'react';
import {
  X,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { PROMPT_TIPS } from '../data/tips';

interface PromptGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptGuideModal: React.FC<PromptGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[88vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Panduan Prompt Engineering untuk Pendidikan
              </h2>
              <p className="text-xs text-slate-500">
                Prinsip menyusun instruksi AI yang akurat, pedagogis, dan anti-halusinasi.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Intro Banner */}
          <div className="bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-transparent p-4 rounded-xl border border-teal-500/20 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white block mb-0.5 font-semibold">
                Mengapa Prompt Terstruktur Sangat Berbeda?
              </strong>
              AI generatif seperti Gemini dan ChatGPT merespon sangat sensitif terhadap konteks, batasan, dan peran. Prompt 1 kalimat singkat hanya akan menghasilkan jawaban umum di permukaan. EduPrompt AI menyusun prompt dengan 9 komponen standar industri agar Anda mendapatkan hasil setara konsultan ahli.
            </div>
          </div>

          {/* Tips List */}
          <div className="space-y-5">
            {PROMPT_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30">
                    {tip.category}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {tip.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tip.summary}
                </p>

                <div className="space-y-1.5 pt-1">
                  {tip.points.map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Example block */}
                <div className="pt-2">
                  <div className="text-[11px] font-semibold text-slate-500 mb-1">
                    Contoh Penerapan Nyata:
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 leading-relaxed">
                    {tip.example}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy & Offline Guarantee Card */}
          <div className="bg-slate-900 text-slate-300 rounded-xl p-4 border border-slate-800 flex items-start gap-3 text-xs leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-0.5">
                Jaminan Privasi & Operasional 100% Client-Side
              </strong>
              EduPrompt AI tidak menggunakan API key, tidak memerlukan akun login, dan tidak menyimpan atau mengirimkan ide/materi Anda ke server mana pun. Seluruh logika berjalan murni di dalam browser Anda.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white hover:bg-teal-500 transition-colors shadow-sm"
          >
            Tutup & Mulai Buat Prompt
          </button>
        </div>
      </div>
    </div>
  );
};
