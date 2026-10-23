export type PersonaId = 'guru' | 'siswa' | 'mahasiswa' | 'peneliti';

export type CategoryId =
  | 'modul-ajar'
  | 'lkpd-bahan'
  | 'bank-soal'
  | 'rangkuman-materi'
  | 'tutor-ujian'
  | 'penelitian-akademik'
  | 'presentasi-admin'
  | 'produktivitas';

export type EducationLevel =
  | 'SD'
  | 'SMP'
  | 'SMA/SMK'
  | 'Sarjana/S1'
  | 'Pascasarjana/S2-S3'
  | 'Umum';

export type ToneStyle =
  | 'formal'
  | 'santai'
  | 'sederhana'
  | 'kritis'
  | 'naratif'
  | 'sokratik';

export type OutputFormat =
  | 'markdown-table'
  | 'step-by-step'
  | 'full-document'
  | 'bullet-points'
  | 'qa-flashcard'
  | 'essay-narrative'
  | 'rubric-grid';

export type LanguageCode = 'id' | 'en' | 'ar' | 'ja' | 'zh' | 'custom';

export type VariationType =
  | 'standar'
  | 'komprehensif'
  | 'ringkas'
  | 'contoh_nyata'
  | 'hots_kritis';

export interface Persona {
  id: PersonaId;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  exampleTopics: string[];
}

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgLight: string;
}

export interface CustomField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  defaultValue?: string | boolean;
  options?: { value: string; label: string }[];
  helpText?: string;
}

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: CategoryId;
  targetPersonas: PersonaId[];
  isPopular?: boolean;
  tags: string[];
  defaultTopic: string;
  defaultGoal: string;
  defaultContext?: string;
  defaultEducationLevel: EducationLevel;
  defaultTone: ToneStyle;
  defaultOutputFormat: OutputFormat;
  defaultLanguage: LanguageCode;
  customFields?: CustomField[];
  promptRole: string;
  promptObjective: string;
  promptInstructions: string[];
  promptConstraints: string[];
  promptOutputFormatGuidelines: string[];
  promptQualityBenchmarks: string[];
}

export interface FormValues {
  topic: string;
  goal: string;
  context: string;
  educationLevel: EducationLevel;
  tone: ToneStyle;
  outputFormat: OutputFormat;
  language: LanguageCode;
  customLanguage?: string;
  customValues: Record<string, string | boolean>;
  variation: VariationType;
}

export interface HistoryItem {
  id: string;
  templateId?: string;
  templateTitle: string;
  category?: CategoryId;
  persona: PersonaId;
  topic: string;
  generatedPrompt: string;
  timestamp: number;
  isFavorite: boolean;
  language: string;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}
