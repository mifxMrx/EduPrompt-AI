import type { EducationLevel, ToneStyle, OutputFormat, LanguageCode, VariationType } from '../types';

export const EDUCATION_LEVELS: { value: EducationLevel; label: string; badge: string }[] = [
  { value: 'SD', label: 'Sekolah Dasar (SD)', badge: 'SD / Usia 7-12' },
  { value: 'SMP', label: 'Sekolah Menengah Pertama (SMP)', badge: 'SMP / Usia 13-15' },
  { value: 'SMA/SMK', label: 'Sekolah Menengah Atas/Kejuruan (SMA/SMK)', badge: 'SMA/SMK / Usia 16-18' },
  { value: 'Sarjana/S1', label: 'Pendidikan Tinggi (Diploma / S1)', badge: 'Sarjana / S1' },
  { value: 'Pascasarjana/S2-S3', label: 'Pascasarjana (Magister S2 / Doktor S3)', badge: 'Pascasarjana' },
  { value: 'Umum', label: 'Umum / Pembelajar Mandiri', badge: 'Umum' },
];

export const TONE_STYLES: { value: ToneStyle; label: string; desc: string }[] = [
  {
    value: 'formal',
    label: 'Formal & Akademik',
    desc: 'Bahasa baku, presisi, berbobot ilmiah, dan sesuai tata bahasa baku.',
  },
  {
    value: 'santai',
    label: 'Interaktif & Menyenangkan',
    desc: 'Nada ramah, memotivasi, penuh antusiasme, cocok untuk menarik perhatian.',
  },
  {
    value: 'sederhana',
    label: 'Sederhana & Ramah Pemula',
    desc: 'Hindari jargon rumit, gunakan perumpamaan mudah dipahami orang awam.',
  },
  {
    value: 'kritis',
    label: 'Kritis & Analitis',
    desc: 'Membedah akar argumen, membandingkan bukti, dan mendorong pemikiran tajam.',
  },
  {
    value: 'naratif',
    label: 'Naratif & Studi Kasus',
    desc: 'Berbentuk penceritaan kronologis, skenario dunia nyata, dan kontekstual.',
  },
  {
    value: 'sokratik',
    label: 'Sokratik & Bimbingan Reflektif',
    desc: 'Tidak langsung memberi jawaban, melainkan mengajukan pertanyaan penuntun.',
  },
];

export const OUTPUT_FORMATS: { value: OutputFormat; label: string; desc: string }[] = [
  {
    value: 'full-document',
    label: 'Dokumen Lengkap Terstruktur',
    desc: 'Format lengkap dengan bagian, bab, rincian aktivitas, dan panduan komprehensif.',
  },
  {
    value: 'markdown-table',
    label: 'Tabel Markdown Rapi',
    desc: 'Disusun dalam bentuk tabel teratur dengan kolom-kolom perbandingan yang jelas.',
  },
  {
    value: 'step-by-step',
    label: 'Panduan Langkah demi Langkah',
    desc: 'Instruksi sekuensial bernomor (Tahap 1, 2, 3) yang mudah dipraktikkan langsung.',
  },
  {
    value: 'bullet-points',
    label: 'Poin-Poin Kunci Terfokus',
    desc: 'Daftar butir intisari yang ringkas, tajam, dan mudah dipindai dengan cepat.',
  },
  {
    value: 'qa-flashcard',
    label: 'Format Tanya Jawab / Flashcard',
    desc: 'Pasangan pertanyaan pemantik dan jawaban kunci untuk latihan mandiri.',
  },
  {
    value: 'essay-narrative',
    label: 'Naskah Esai & Konseptual',
    desc: 'Teks berkesinambungan dengan alur logika antar paragraf yang mengalir kuat.',
  },
  {
    value: 'rubric-grid',
    label: 'Matriks Kisi-kisi & Rubrik',
    desc: 'Tabel kriteria penilaian berskala (Sangat Baik, Baik, Cukup, Perlu Bimbingan).',
  },
];

export const LANGUAGES: { code: LanguageCode; name: string; native: string; flag: string }[] = [
  { code: 'id', name: 'Bahasa Indonesia', native: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'Arab', native: 'العربية', flag: '🇸🇦' },
  { code: 'ja', name: 'Jepang', native: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: 'Mandarin', native: '中文', flag: '🇨🇳' },
  { code: 'custom', name: 'Bahasa Kustom', native: 'Lainnya...', flag: '🌐' },
];

export const VARIATIONS: { type: VariationType; label: string; description: string }[] = [
  {
    type: 'standar',
    label: 'Standar Optimal',
    description: 'Keseimbangan terbaik antara detail pedagogis dan fleksibilitas.',
  },
  {
    type: 'komprehensif',
    label: 'Komprehensif & Detail',
    description: 'Instruksi mendalam, menyertakan contoh konkret dan studi kasus.',
  },
  {
    type: 'ringkas',
    label: 'Ringkas & Efisien',
    description: 'To the point, langsung ke substansi tanpa pengantar berbelit.',
  },
  {
    type: 'contoh_nyata',
    label: 'Kaya Contoh Kontekstual',
    description: 'Menekankan penerapan di kehidupan sehari-hari dan kearifan lokal.',
  },
  {
    type: 'hots_kritis',
    label: 'Fokus HOTS & Penalaran Tinggi',
    description: 'Menekankan analisis C4-C6 Taksonomi Bloom dan pemecahan masalah.',
  },
];
