import React from 'react';
import { GraduationCap, ShieldCheck, ExternalLink } from 'lucide-react';
import { PERSONAS } from '../data/personas';
import type { PersonaId } from '../types';

interface FooterProps {
  onSelectPersona: (p: PersonaId) => void;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPersona, onOpenGuide }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-bold">
                <GraduationCap className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-bold text-lg text-white">
                EduPrompt <span className="text-teal-400">AI</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Aplikasi web cerdas untuk membantu guru, siswa, mahasiswa, dan peneliti menyusun prompt AI profesional, kontekstual, dan berstandar pedagogis tinggi tanpa biaya dan tanpa API key.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-teal-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Client-Side • Data aman dan tersimpan hanya di browser Anda</span>
            </div>
          </div>

          {/* Col 2: Profil Pendidikan */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-slate-200 mb-3 text-xs">
              Profil Pengguna
            </h4>
            <ul className="space-y-2">
              {PERSONAS.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPersona(p.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="hover:text-teal-400 transition-colors text-left"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Rujukan Eksternal & Edukasi */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-slate-200 mb-3 text-xs">
              Layanan AI Tujuan
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://gemini.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-teal-400 transition-colors"
                >
                  <span>Google Gemini</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-teal-400 transition-colors"
                >
                  <span>OpenAI ChatGPT</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenGuide}
                  className="text-left hover:text-teal-400 transition-colors"
                >
                  Panduan Prompting Edukatif
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} EduPrompt AI. Dibuat untuk memajukan kualitas pendidikan di Indonesia.
          </p>
          <p className="text-center sm:text-right max-w-lg">
            Disclaimer: EduPrompt AI adalah generator prompt independen dan tidak terafiliasi dengan Google atau OpenAI.
          </p>
        </div>
      </div>
    </footer>
  );
};
