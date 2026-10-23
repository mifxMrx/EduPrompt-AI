import React from 'react';
import {
  Layers,
  FileText,
  CheckSquare,
  BookOpenCheck,
  Brain,
  Microscope,
  Presentation,
  Zap,
  Grid,
  Sparkles,
} from 'lucide-react';
import type { CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';

interface CategoryFilterProps {
  selectedCategory: CategoryId | 'all' | 'popular';
  onSelectCategory: (cat: CategoryId | 'all' | 'popular') => void;
  categoryCounts: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'modul-ajar':
        return <Layers className="w-4 h-4" />;
      case 'lkpd-bahan':
        return <FileText className="w-4 h-4" />;
      case 'bank-soal':
        return <CheckSquare className="w-4 h-4" />;
      case 'rangkuman-materi':
        return <BookOpenCheck className="w-4 h-4" />;
      case 'tutor-ujian':
        return <Brain className="w-4 h-4" />;
      case 'penelitian-akademik':
        return <Microscope className="w-4 h-4" />;
      case 'presentasi-admin':
        return <Presentation className="w-4 h-4" />;
      case 'produktivitas':
        return <Zap className="w-4 h-4" />;
      default:
        return <Grid className="w-4 h-4" />;
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Kategori Template Prompt
        </h3>
        <span className="text-xs text-slate-400">
          Pilih kategori untuk menyaring
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {/* All Templates button */}
        <button
          type="button"
          onClick={() => onSelectCategory('all')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
            selectedCategory === 'all'
              ? 'bg-slate-900 dark:bg-teal-500 text-white dark:text-slate-950 border-slate-900 dark:border-teal-400 shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          <span>Semua</span>
          <span
            className={`text-[10px] px-1.5 py-0.2 rounded-md ${
              selectedCategory === 'all'
                ? 'bg-slate-700 dark:bg-teal-600 text-white dark:text-slate-950'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
            }`}
          >
            {categoryCounts['all'] || 0}
          </span>
        </button>

        {/* Popular button */}
        <button
          type="button"
          onClick={() => onSelectCategory('popular')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
            selectedCategory === 'popular'
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-300'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Populer & Rekomendasi</span>
          <span
            className={`text-[10px] px-1.5 py-0.2 rounded-md ${
              selectedCategory === 'popular'
                ? 'bg-amber-600 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
            }`}
          >
            {categoryCounts['popular'] || 0}
          </span>
        </button>

        {/* 8 Categories */}
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-teal-600 text-white border-teal-500 shadow-md shadow-teal-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-teal-400/50'
              }`}
            >
              <span className={isSelected ? 'text-white' : cat.color}>
                {getCategoryIcon(cat.id)}
              </span>
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isSelected
                    ? 'bg-teal-700 text-teal-100'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
