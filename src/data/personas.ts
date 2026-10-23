import type { Persona } from '../types';

export const PERSONAS: Persona[] = [
  {
    id: 'guru',
    name: 'Guru & Pendidik',
    tagline: 'Perencanaan modul ajar, LKPD, soal ujian, & diferensiasi kelas',
    description:
      'Dirancang khusus untuk guru SD, SMP, SMA, dan SMK dalam menyusun administrasi pembelajaran Kurikulum Merdeka, bahan ajar kreatif, dan asesmen autentik.',
    icon: 'GraduationCap',
    color: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    badgeBorder: 'border-blue-500',
    exampleTopics: [
      'Fotosintesis dan Ekosistem Tropis (SMP)',
      'Persamaan Kuadrat Berbantuan Konteks Nyata (SMA)',
      'Modul PjBL Pengolahan Sampah Organik (SD)',
      'Asesmen Diagnostik Awal Literasi Numerasi',
    ],
  },
  {
    id: 'siswa',
    name: 'Siswa Sekolah',
    tagline: 'Tutor belajar interaktif, rangkuman mudah, & persiapan ujian',
    description:
      'Membantu siswa SD, SMP, dan SMA/SMK memahami materi sulit lewat analogi sederhana, latihan soal bertahap, dan pembuatan rangkuman efektif.',
    icon: 'BookOpen',
    color: 'from-teal-600 to-emerald-700',
    badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
    badgeBorder: 'border-teal-500',
    exampleTopics: [
      'Hukum Newton 1, 2, dan 3 dengan Contoh Sehari-hari',
      'Cara Menghitung Pecahan Campuran dengan Cepat',
      'Rangkuman Sejarah Perang Diponegoro',
      'Latihan Soal Tryout Bahasa Inggris SMA',
    ],
  },
  {
    id: 'mahasiswa',
    name: 'Mahasiswa',
    tagline: 'Analisis tugas kuliah, review jurnal, skripsi, & presentasi ilmiah',
    description:
      'Solusi bagi mahasiswa sarjana dan diploma untuk membedah konsep perkuliahan yang kompleks, menyusun kerangka makalah, dan mematangkan ide skripsi.',
    icon: 'Sparkles',
    color: 'from-violet-600 to-purple-700',
    badgeBg: 'bg-violet-50 text-violet-700 border-violet-200',
    badgeBorder: 'border-violet-500',
    exampleTopics: [
      'Literature Review Pengaruh UI/UX terhadap Retensi Pengguna',
      'Uji Asumsi Klasik Regresi Linier Berganda SPSS',
      'Desain Slide Presentasi Seminar Proposal',
      'Kritik Jurnal Internasional Manajemen Bisnis',
    ],
  },
  {
    id: 'peneliti',
    name: 'Peneliti & Dosen',
    tagline: 'Metodologi riset, perumusan masalah, parafrase, & artikel jurnal',
    description:
      'Membantu dosen, peneliti independen, dan mahasiswa pascasarjana menyusun argumen riset berkualitas tinggi, sistematika IMRaD, serta telaah kritis.',
    icon: 'FlaskConical',
    color: 'from-emerald-600 to-teal-800',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    badgeBorder: 'border-emerald-500',
    exampleTopics: [
      'State-of-the-Art dan Novelty Riset Machine Learning',
      'Desain Kuesioner Skala Likert Validitas & Reliabilitas',
      'Struktur Abstrak IMRaD Standar Scopus Q1/Q2',
      'Sistematika Systematic Literature Review (PRISMA)',
    ],
  },
];
