import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Tag,
  Users,
  CheckCircle,
} from 'lucide-react';
import type { PromptTemplate, PersonaId } from '../types';
import { CATEGORIES } from '../data/categories';
import { PERSONAS } from '../data/personas';

interface TemplateCardProps {
  template: PromptTemplate;
  currentPersona: PersonaId;
  onSelect: (template: PromptTemplate) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  currentPersona,
  onSelect,
}) => {
  const category = CATEGORIES.find((c) => c.id === template.category);
  const isPersonaMatch = template.targetPersonas.includes(currentPersona);

  return (
    <div
      onClick={() => onSelect(template)}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-5 shadow-sm hover:shadow-xl hover:border-teal-500/60 dark:hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
              category ? category.bgLight : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            {category?.name || template.category}
          </span>

          <div className="flex items-center gap-1.5">
            {template.isPopular && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" /> Populer
              </span>
            )}
            {isPersonaMatch && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <CheckCircle className="w-3 h-3" /> Rekomendasi
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2 mb-2 leading-snug">
          {template.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
          {template.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {template.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400"
            >
              <Tag className="w-2.5 h-2.5 opacity-60" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Info & Action */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-400">
          <Users className="w-3 h-3" />
          <span>
            {template.targetPersonas
              .map((p) => PERSONAS.find((per) => per.id === p)?.name || p)
              .slice(0, 2)
              .join(', ')}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(template);
          }}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm"
        >
          <span>Gunakan</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
