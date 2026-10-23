export interface PromptTip {
  id: string;
  title: string;
  category: string;
  summary: string;
  points: string[];
  example: string;
}

export const PROMPT_TIPS: PromptTip[] = [
  {
    id: 'kerangka-create',
    title: 'Formula CREATE: Standar Emas Prompt Pendidikan',
    category: 'Pedagogi',
    summary:
      'Struktur prompt yang paling andal untuk guru, siswa, dan peneliti agar hasil AI tidak abstrak dan langsung tepat sasaran.',
    points: [
      'Character (Peran): Tentukan siapa AI tersebut (misal Guru Biologi SMA, Dosen Metodologi, Mentor Sokratik).',
      'Request (Tujuan): Jelaskan apa yang ingin dicapai secara spesifik (buat modul ajar 2 pertemuan, dsb).',
      'Examples (Contoh): Berikan contoh gaya atau standar yang Anda harapkan.',
      'Adjustments (Batasan): Jelaskan apa yang TIDAK boleh dilakukan (jangan pakai jargon rumit, batas waktu realistis).',
      'Type of Output (Format): Tentukan bentuk hasil (tabel, poin, naskah utuh, rubrik).',
      'Extras (Konteks): Tambahkan karakteristik murid, jenjang kelas, dan fasilitas yang tersedia.',
    ],
    example:
      'Bertindaklah sebagai Guru IPA SMP (Character). Buat 3 soal HOTS pilihan ganda (Request) dengan stimulus tabel data (Format) untuk materi Fotosintesis kelas 7 (Extras). Hindari opsi "semua benar" (Adjustments).',
  },
  {
    id: 'anti-halusinasi',
    title: 'Strategi Anti-Halusinasi & Verifikasi Fakta AI',
    category: 'Akurasi Akademik',
    summary:
      'Teknik khusus mencegah AI mengarang kutipan fiktif, jurnal palsu, atau rumus matematika yang salah.',
    points: [
      'Minta AI menyatakan batasan: Tambahkan instruksi "Jika informasi tidak dapat dipastikan secara ilmiah, katakan dengan jujur dan jangan mengarang."',
      'Batasi sumber rujukan: Perintahkan AI merujuk teori atau buku yang spesifik (misal Taksonomi Bloom revisi Anderson).',
      'Minta langkah pembuktian (Chain of Thought): Selalu minta AI menunjukkan langkah penalaran sebelum memberikan kesimpulan akhir.',
      'Uji silang dengan buku teks: Jadikan keluaran AI sebagai draf awal, selalu lakukan verifikasi manual.',
    ],
    example:
      'Jelaskan hukum termodinamika 1 dan 2 beserta contoh numerik. Tunjukkan langkah penurunan rumus secara sekuensial. Jika ada asumsi yang digunakan, sebutkan secara eksplisit.',
  },
  {
    id: 'taksonomi-bloom',
    title: 'Mengarahkan AI ke Level Kognitif Tinggi (HOTS)',
    category: 'Evaluasi Pembelajaran',
    summary:
      'Cara meminta AI menghasilkan materi yang melatih daya nalar siswa, bukan sekadar hafalan ingatan tingkat rendah (LOTS).',
    points: [
      'Hindari kata kerja LOTS: Jangan gunakan "Sebutkan...", "Tuliskan nama...", "Apa yang dimaksud..." jika ingin soal mendalam.',
      'Gunakan kata kerja HOTS: Gunakan "Bandingkan...", "Evaluasi kelemahan...", "Rancang alternatif solusi...", "Prediksi dampak jika X diubah...".',
      'Wajibkan Stimulus: Minta AI selalu menyertakan kasus, grafik, atau dialog dilematis sebelum pertanyaan diajukan.',
      'Rancang pengecoh berkualitas: Minta distractor pilihan ganda yang mencerminkan miskonsepsi umum siswa.',
    ],
    example:
      'Buatkan 2 studi kasus kontekstual pencemaran air sungai di pemukiman padat. Mintalah siswa mengevaluasi 3 alternatif teknologi penyaringan air dari segi efisiensi biaya dan daya serap polutan (C5 - Evaluasi).',
  },
  {
    id: 'integrasi-gemini-chatgpt',
    title: 'Panduan Praktis Melanjutkan di Gemini & ChatGPT',
    category: 'Alur Kerja',
    summary:
      'EduPrompt AI bekerja 100% lokal di browser Anda. Ikuti 3 langkah mudah ini untuk mendapatkan hasil terbaik.',
    points: [
      'Langkah 1: Klik tombol "Salin Prompt" atau tombol "Lanjutkan di Gemini / ChatGPT" di editor hasil.',
      'Langkah 2: Tab resmi Gemini (gemini.google.com) atau ChatGPT (chatgpt.com) akan terbuka.',
      'Langkah 3: Tekan Ctrl + V (atau Paste) di kolom percakapan AI, lalu tekan Enter.',
      'Tips Tambahan: Jika jawaban pertama AI masih kurang sesuai, minta AI melakukan revisi dengan perintah pendek seperti "Perluas bagian ke-3 dengan contoh nyata" atau "Buat lebih ringkas dalam tabel".',
    ],
    example:
      'EduPrompt AI telah menyusun struktur prompt berstandar industri dengan format teruji. Anda tinggal menempelkannya ke AI pilihan Anda!',
  },
];
