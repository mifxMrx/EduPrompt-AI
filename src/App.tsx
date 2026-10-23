import { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonaSelector } from './components/PersonaSelector';
import { CategoryFilter } from './components/CategoryFilter';
import { TemplateCard } from './components/TemplateCard';
import { PromptForm } from './components/PromptForm';
import { PromptResult } from './components/PromptResult';
import { CustomBuilder } from './components/CustomBuilder';
import { HistoryModal } from './components/HistoryModal';
import { PromptGuideModal } from './components/PromptGuideModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

import type {
  PersonaId,
  CategoryId,
  PromptTemplate,
  FormValues,
  HistoryItem,
  ToastMessage,
  VariationType,
} from './types';
import { PERSONAS } from './data/personas';
import { CATEGORIES } from './data/categories';
import { PROMPT_TEMPLATES } from './data/templates';
import { generatePrompt, generateCustomPrompt } from './utils/generator';
import {
  getHistory,
  saveHistoryItem,
  toggleFavorite,
  deleteHistoryItem,
  clearHistory,
} from './utils/storage';
import { Search } from 'lucide-react';

export function App() {
  // Navigation tab: 'templates' | 'form' | 'result' | 'custom'
  const [activeTab, setActiveTab] = useState<'templates' | 'form' | 'result' | 'custom'>(
    'templates'
  );

  // Filter states
  const [selectedPersona, setSelectedPersona] = useState<PersonaId>('guru');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all' | 'popular'>(
    'all'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active generation states
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [pendingTopic, setPendingTopic] = useState<string>('');
  const [currentFormValues, setCurrentFormValues] = useState<FormValues | null>(null);
  const [generatedPromptText, setGeneratedPromptText] = useState<string>('');
  const [currentHistoryId, setCurrentHistoryId] = useState<string | null>(null);

  // Storage states
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Modals & Toasts
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = 'toast_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const activePersonaObj = useMemo(
    () => PERSONAS.find((p) => p.id === selectedPersona) || PERSONAS[0],
    [selectedPersona]
  );

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PROMPT_TEMPLATES.length,
      popular: PROMPT_TEMPLATES.filter((t) => t.isPopular).length,
    };
    CATEGORIES.forEach((cat) => {
      counts[cat.id] = PROMPT_TEMPLATES.filter((t) => t.category === cat.id).length;
    });
    return counts;
  }, []);

  // Filtered templates
  const filteredTemplates = useMemo(() => {
    return PROMPT_TEMPLATES.filter((template) => {
      // Category filter
      if (selectedCategory === 'popular' && !template.isPopular) return false;
      if (selectedCategory !== 'all' && selectedCategory !== 'popular' && template.category !== selectedCategory) {
        return false;
      }

      // Persona match priority or filter
      // If persona selected, check if query matches
      const query = searchQuery.trim().toLowerCase();
      if (!query) return true;

      const titleMatch = template.title.toLowerCase().includes(query);
      const descMatch = template.description.toLowerCase().includes(query);
      const tagMatch = template.tags.some((t) => t.toLowerCase().includes(query));
      const topicMatch = template.defaultTopic.toLowerCase().includes(query);

      return titleMatch || descMatch || tagMatch || topicMatch;
    });
  }, [selectedCategory, searchQuery]);

  // Handler: Selecting a template to customize
  const handleSelectTemplate = (template: PromptTemplate) => {
    setSelectedTemplate(template);
    setPendingTopic('');
    setActiveTab('form');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  // Handler: Quick generate from Hero input
  const handleQuickGenerate = (topic: string) => {
    setPendingTopic(topic);
    // Find best matching template for active persona
    const matching =
      PROMPT_TEMPLATES.find(
        (t) => t.targetPersonas.includes(selectedPersona) && t.isPopular
      ) || PROMPT_TEMPLATES[0];

    setSelectedTemplate(matching);
    setActiveTab('form');
    showToast(`Template '${matching.title}' siap dikustomisasi untuk: "${topic}"`, 'info');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Handler: Form submitted, generate final prompt
  const handleGenerateFromForm = (formValues: FormValues) => {
    if (!selectedTemplate) return;
    setCurrentFormValues(formValues);

    const compiled = generatePrompt(selectedTemplate, formValues, activePersonaObj);
    setGeneratedPromptText(compiled);

    // Save to history in localStorage
    const saved = saveHistoryItem({
      templateId: selectedTemplate.id,
      templateTitle: selectedTemplate.title,
      category: selectedTemplate.category,
      persona: selectedPersona,
      topic: formValues.topic,
      generatedPrompt: compiled,
      language: formValues.language,
    });

    setCurrentHistoryId(saved.id);
    setHistory(getHistory());
    setActiveTab('result');
    showToast('Prompt berhasil disusun dan disimpan ke riwayat lokal!', 'success');
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Handler: Custom Studio generator
  const handleGenerateCustom = (values: FormValues, personaObj: typeof activePersonaObj) => {
    setCurrentFormValues(values);
    setSelectedTemplate(null);

    const compiled = generateCustomPrompt(values, personaObj);
    setGeneratedPromptText(compiled);

    const saved = saveHistoryItem({
      templateTitle: 'Studio Kustom Bebas',
      persona: personaObj.id,
      topic: values.topic,
      generatedPrompt: compiled,
      language: values.language,
    });

    setCurrentHistoryId(saved.id);
    setHistory(getHistory());
    setActiveTab('result');
    showToast('Prompt kustom berhasil dibuat!', 'success');
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Handler: Switch variation from Result editor
  const handleVariationChange = (variation: VariationType) => {
    if (!currentFormValues) return;
    const updatedValues: FormValues = {
      ...currentFormValues,
      variation,
    };
    setCurrentFormValues(updatedValues);

    let updatedText = '';
    if (selectedTemplate) {
      updatedText = generatePrompt(selectedTemplate, updatedValues, activePersonaObj);
    } else {
      updatedText = generateCustomPrompt(updatedValues, activePersonaObj);
    }
    setGeneratedPromptText(updatedText);

    // Update in history
    if (currentHistoryId) {
      const saved = saveHistoryItem({
        templateId: selectedTemplate?.id,
        templateTitle: selectedTemplate?.title || 'Studio Kustom',
        category: selectedTemplate?.category,
        persona: selectedPersona,
        topic: updatedValues.topic,
        generatedPrompt: updatedText,
        language: updatedValues.language,
      });
      setCurrentHistoryId(saved.id);
      setHistory(getHistory());
    }

    showToast(`Variasi prompt diubah ke: ${variation.toUpperCase()}`, 'info');
  };

  // Toggle favorite for current item
  const handleToggleCurrentFavorite = () => {
    if (!currentHistoryId) return;
    const isNowFav = toggleFavorite(currentHistoryId);
    setHistory(getHistory());
    showToast(
      isNowFav ? 'Ditambahkan ke Favorit!' : 'Dihapus dari Favorit',
      isNowFav ? 'success' : 'info'
    );
  };

  // Load item from history back into editor
  const handleLoadHistoryItem = (item: HistoryItem) => {
    setGeneratedPromptText(item.generatedPrompt);
    setSelectedPersona(item.persona);
    setCurrentHistoryId(item.id);

    const tmpl = PROMPT_TEMPLATES.find((t) => t.id === item.templateId);
    setSelectedTemplate(tmpl || null);

    setCurrentFormValues({
      topic: item.topic,
      goal: tmpl?.defaultGoal || 'Tujuan disesuaikan',
      context: tmpl?.defaultContext || '',
      educationLevel: tmpl?.defaultEducationLevel || 'SMA/SMK',
      tone: tmpl?.defaultTone || 'formal',
      outputFormat: tmpl?.defaultOutputFormat || 'full-document',
      language: (item.language as any) || 'id',
      customValues: {},
      variation: 'standar',
    });

    setActiveTab('result');
    showToast(`Memuat prompt "${item.topic}" ke editor`, 'info');
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const isCurrentFavorite = useMemo(() => {
    if (!currentHistoryId) return false;
    const found = history.find((i) => i.id === currentHistoryId);
    return Boolean(found?.isFavorite);
  }, [currentHistoryId, history]);

  const favoritesCount = useMemo(() => {
    return history.filter((i) => i.isFavorite).length;
  }, [history]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-white">
      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab === 'custom' ? 'custom' : activeTab === 'result' ? 'result' : 'templates'}
        setActiveTab={(tab) => {
          if (tab === 'custom') {
            setActiveTab('custom');
          } else {
            setActiveTab('templates');
          }
        }}
        selectedPersona={selectedPersona}
        setSelectedPersona={(p) => {
          setSelectedPersona(p);
          showToast(`Profil aktif beralih ke: ${PERSONAS.find((item) => item.id === p)?.name}`, 'info');
        }}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        favoritesCount={favoritesCount}
        historyCount={history.length}
      />

      {/* HERO SECTION (Shown in templates and custom tabs) */}
      {(activeTab === 'templates' || activeTab === 'custom') && (
        <Hero
          onSearchChange={setSearchQuery}
          selectedPersona={selectedPersona}
          onQuickGenerate={handleQuickGenerate}
        />
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* TAB 1: TEMPLATE EXPLORER */}
        {activeTab === 'templates' && (
          <div>
            {/* Step 1: Persona Selector */}
            <PersonaSelector
              selectedPersona={selectedPersona}
              onSelectPersona={(p) => {
                setSelectedPersona(p);
                showToast(`Profil dipilih: ${PERSONAS.find((item) => item.id === p)?.name}`, 'info');
              }}
              onSelectTopic={(topic) => handleQuickGenerate(topic)}
            />

            {/* Step 2: Category Filter */}
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />

            {/* Results count & Search query indicator */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Ditemukan {filteredTemplates.length} Template
                </span>
                {searchQuery && (
                  <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded-md border border-teal-500/20">
                    Kata kunci: "{searchQuery}"
                  </span>
                )}
              </div>

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
                >
                  Hapus Pencarian
                </button>
              )}
            </div>

            {/* Template Grid */}
            {filteredTemplates.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                <Search className="w-12 h-12 mx-auto mb-3 text-slate-400 opacity-50" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  Tidak ada template yang cocok
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-5">
                  Coba gunakan kata kunci lain atau beralih ke kategori "Semua Kategori".
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white hover:bg-teal-500 transition-colors"
                  >
                    Reset Filter
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('custom')}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                  >
                    Gunakan Studio Kustom
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredTemplates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    currentPersona={selectedPersona}
                    onSelect={handleSelectTemplate}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PROMPT FORM (DYNAMIC GENERATOR) */}
        {activeTab === 'form' && selectedTemplate && (
          <PromptForm
            template={selectedTemplate}
            persona={activePersonaObj}
            initialTopic={pendingTopic}
            onGenerate={handleGenerateFromForm}
            onBack={() => setActiveTab('templates')}
          />
        )}

        {/* TAB 3: PROMPT RESULT EDITOR */}
        {activeTab === 'result' && (
          <PromptResult
            promptText={generatedPromptText}
            template={selectedTemplate || undefined}
            formValues={
              currentFormValues || {
                topic: 'Topik Pilihan',
                goal: 'Tujuan luaran',
                context: '',
                educationLevel: 'SMA/SMK',
                tone: 'formal',
                outputFormat: 'full-document',
                language: 'id',
                customValues: {},
                variation: 'standar',
              }
            }
            persona={activePersonaObj}
            isFavorite={isCurrentFavorite}
            onToggleFavorite={handleToggleCurrentFavorite}
            onEditPromptText={setGeneratedPromptText}
            onVariationChange={handleVariationChange}
            onEditParameters={() => {
              if (selectedTemplate) {
                setActiveTab('form');
              } else {
                setActiveTab('custom');
              }
            }}
            onNewPrompt={() => {
              setActiveTab('templates');
              window.scrollTo({ top: 350, behavior: 'smooth' });
            }}
            showToast={showToast}
          />
        )}

        {/* TAB 4: CUSTOM STUDIO BUILDER */}
        {activeTab === 'custom' && (
          <CustomBuilder
            currentPersona={activePersonaObj}
            onGenerateCustom={handleGenerateCustom}
          />
        )}
      </main>

      {/* History & Favorites Modal */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onToggleFavorite={(id) => {
          const newState = toggleFavorite(id);
          setHistory(getHistory());
          showToast(
            newState ? 'Ditambahkan ke Favorit!' : 'Dihapus dari Favorit',
            newState ? 'success' : 'info'
          );
        }}
        onDeleteItem={(id) => {
          deleteHistoryItem(id);
          setHistory(getHistory());
          showToast('Item riwayat dihapus', 'info');
        }}
        onClearAll={() => {
          clearHistory();
          setHistory([]);
        }}
        onLoadItem={handleLoadHistoryItem}
        showToast={showToast}
      />

      {/* Educational Guide Modal */}
      <PromptGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Footer */}
      <Footer
        onSelectPersona={(p) => {
          setSelectedPersona(p);
          setActiveTab('templates');
        }}
        onOpenGuide={() => setIsGuideOpen(true)}
      />
    </div>
  );
}

export default App;
