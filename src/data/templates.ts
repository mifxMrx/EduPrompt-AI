import type { PromptTemplate } from '../types';

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  // =========================================================================
  // 1. MODUL AJAR DAN PERENCANAAN PEMBELAJARAN (6 Templates)
  // =========================================================================
  {
    id: 'modul-ajar-merdeka',
    title: 'Modul Ajar Kurikulum Merdeka (Berdiferensiasi)',
    description:
      'Susun modul ajar lengkap dengan identitas, asesmen awal, kegiatan diferensiasi konten/proses, dan refleksi bermakna.',
    category: 'modul-ajar',
    targetPersonas: ['guru'],
    isPopular: true,
    tags: ['Kurikulum Merdeka', 'Diferensiasi', 'Modul Ajar', 'Profil Pelajar Pancasila'],
    defaultTopic: 'Ekosistem dan Interaksi Antarmakhluk Hidup di Lingkungan Sekitar',
    defaultGoal: 'Menyusun modul ajar 2 pertemuan dengan diferensiasi proses dan asesmen autentik',
    defaultContext: 'Kelas 7 SMP, 32 siswa heterogen dengan sebagian siswa visual dan kinestetik',
    defaultEducationLevel: 'SMP',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    customFields: [
      {
        id: 'alokasiWaktu',
        label: 'Alokasi Waktu',
        type: 'text',
        placeholder: 'Contoh: 2 Pertemuan (4 x 40 menit)',
        defaultValue: '2 Pertemuan (4 x 40 menit)',
      },
      {
        id: 'modelPembelajaran',
        label: 'Model Pembelajaran',
        type: 'select',
        options: [
          { value: 'Problem-Based Learning (PBL)', label: 'Problem-Based Learning (PBL)' },
          { value: 'Project-Based Learning (PjBL)', label: 'Project-Based Learning (PjBL)' },
          { value: 'Discovery / Inquiry Learning', label: 'Discovery / Inquiry Learning' },
          { value: 'Station Rotation / Blended', label: 'Station Rotation (Diferensiasi)' },
        ],
        defaultValue: 'Problem-Based Learning (PBL)',
      },
      {
        id: 'profilPancasila',
        label: 'Dimensi Profil Pelajar Pancasila',
        type: 'text',
        placeholder: 'Contoh: Bernalar Kritis, Gotong Royong, Kreatif',
        defaultValue: 'Bernalar Kritis, Gotong Royong, Kreatif',
      },
    ],
    promptRole:
      'Ahli Kurikulum Pembelajaran Modern & Pengembang Modul Ajar Kurikulum Merdeka yang berpengalaman menyusun administrasi pendidikan berdiferensiasi dan berpusat pada siswa.',
    promptObjective:
      'Merancang modul ajar Kurikulum Merdeka yang operasional, kontekstual, dan siap diterapkan langsung di kelas tanpa perlu perombakan besar.',
    promptInstructions: [
      'Cantumkan Komponen Informasi Umum: Identitas sekolah, Alokasi Waktu, Profil Pelajar Pancasila, Sarana & Prasarana, serta Target Peserta Didik.',
      'Rancang Asesmen Diagnostik / Awal (3 pertanyaan pemantik non-kognitif & kognitif ringan).',
      'Tuliskan Tujuan Pembelajaran (TP) dan Pemahaman Bermakna yang relevan dengan kehidupan nyata peserta didik.',
      'Sajikan Skenario Pembelajaran Langkah demi Langkah (Kegiatan Pendahuluan, Kegiatan Inti dengan sintaks model pembelajaran terpilih, dan Kegiatan Penutup/Refleksi).',
      'Sertakan petunjuk diferensiasi konkret: opsi untuk kelompok cepat (pengayaan) dan kelompok yang membutuhkan perancah (scaffolding/remedial).',
      'Lampirkan instrumen asesmen formatif sederhana beserta kriteria ketercapaian tujuan pembelajaran (KKTP).',
    ],
    promptConstraints: [
      'Gunakan bahasa pedagogis yang operasional dan terstruktur sesuai standar Kementerian Pendidikan.',
      'Hindari instruksi abstrak; setiap tahap harus memiliki estimasi menit dan tindakan guru serta aktivitas siswa yang gamblang.',
      'Pastikan aktivitas ramah lingkungan sekolah dengan fasilitas minimalis (tidak bergantung pada perangkat mewah).',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan format tabel dan heading markdown tingkat 2 dan 3 untuk keterbacaan tinggi.',
      'Sediakan matriks kegiatan pembelajaran (Waktu, Langkah Sintaks, Aktivitas Guru & Siswa, Diferensiasi).',
    ],
    promptQualityBenchmarks: [
      'Harus memenuhi standar Kurikulum Merdeka dan prinsip Understanding by Design (UbD).',
      'Diferensiasi harus realistis dijalankan oleh satu orang guru di dalam satu ruangan kelas.',
    ],
  },
  {
    id: 'rpp-satu-lembar',
    title: 'RPP Ringkas 1 Halaman / Sederhana & Praktis',
    description:
      'Rencana pelaksanaan pembelajaran efektif 3 komponen inti (Tujuan, Langkah Pembelajaran, & Asesmen) yang padat dan langsung ke sasaran.',
    category: 'modul-ajar',
    targetPersonas: ['guru'],
    isPopular: false,
    tags: ['RPP 1 Lembar', 'Praktis', 'Efisiensi Administrasi'],
    defaultTopic: 'Penyelesaian Persamaan Linier Satu Variabel dalam Soal Cerita',
    defaultGoal: 'Menyusun RPP ringkas 1 halaman yang fokus pada kemampuan pemecahan masalah nyata',
    defaultContext: 'Kelas 8 SMP, waktu 2 x 40 menit',
    defaultEducationLevel: 'SMP',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    customFields: [
      {
        id: 'mediaBelajar',
        label: 'Media / Alat Belajar',
        type: 'text',
        placeholder: 'Contoh: Kartu angka, LKPD mini, papan tulis interaktif',
        defaultValue: 'Kartu soal cerita, papan tulis, LKPD mini',
      },
    ],
    promptRole: 'Praktisi Supervisi Akademik & Konsultan Efisiensi Administrasi Guru.',
    promptObjective:
      'Menyusun RPP ringkas berbobot 3 komponen utama (Tujuan Pembelajaran, Langkah-Langkah Pembelajaran, dan Asesmen) tanpa basa-basi administratif yang berlebihan.',
    promptInstructions: [
      'Rumuskan 2-3 Tujuan Pembelajaran yang spesifik, terukur, dan berorientasi pada peserta didik.',
      'Uraikan Langkah Pembelajaran secara padat dalam 3 fase: Awal (10 menit), Inti (60 menit), dan Penutup (10 menit).',
      'Sertakan 1 teknik asesmen formatif cepat (misal exit ticket atau kuis 2 soal).',
      'Pastikan seluruh materi muat dalam format representasi setara 1 lembar kertas A4.',
    ],
    promptConstraints: [
      'Hindari narasi teoritis panjang; gunakan bullet points yang padat aksi.',
      'Fokuskan pada interaksi guru-murid dan murid-murid.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan format 3 bagian utama yang tegas: [A] Identitas & Tujuan, [B] Langkah Kegiatan, [C] Asesmen.',
    ],
    promptQualityBenchmarks: [
      'Dapat dibaca dan dipahami guru dalam waktu kurang dari 2 menit sebelum masuk kelas.',
    ],
  },
  {
    id: 'desain-pjbl',
    title: 'Desain Project-Based Learning (PjBL) Bermakna',
    description:
      'Rancang proyek kolaboratif kontekstual lengkap dengan pertanyaan pemantik, jadwal bertahap, dan pameran karya akhir.',
    category: 'modul-ajar',
    targetPersonas: ['guru', 'mahasiswa'],
    isPopular: true,
    tags: ['PjBL', 'Proyek', 'Karya Siswa', 'Kolaborasi'],
    defaultTopic: 'Kampanye Bijak Sampah Plastik & Pengomposan Berbasis Sekolah',
    defaultGoal: 'Menghasilkan proyek nyata yang memecahkan masalah lingkungan sekolah selama 3 pekan',
    defaultContext: 'Siswa SMA Fase E (Kelas 10), bekerja dalam tim 4-5 orang',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    customFields: [
      {
        id: 'durasiProyek',
        label: 'Durasi Proyek',
        type: 'text',
        placeholder: 'Contoh: 3 pekan (6 sesi pertemuan)',
        defaultValue: '3 pekan (6 sesi pertemuan)',
      },
      {
        id: 'produkAkhir',
        label: 'Target Produk Akhir',
        type: 'text',
        placeholder: 'Contoh: Prototipe komposter mini + Video edukasi TikTok / IG',
        defaultValue: 'Prototipe komposter mini + Infografis edukasi warga sekolah',
      },
    ],
    promptRole: 'Pakar Desain Instruksional Project-Based Learning (PjBL) dan Pembelajaran Kontekstual.',
    promptObjective:
      'Menyusun skenario proyek pembelajaran autentik yang memacu kreativitas, kepemimpinan, dan nalar kritis siswa.',
    promptInstructions: [
      'Buat Pertanyaan Pemantik / Driving Question yang menantang dan memancing rasa ingin tahu.',
      'Definisikan Produk Akhir Autentik dan audiens publik yang akan melihat karya siswa.',
      'Susun Alur Tahapan PjBL: Penentuan Pertanyaan Mendasar, Desain Perencanaan Proyek, Penyusunan Jadwal, Monitoring & Progres, Pengujian Hasil, dan Evaluasi Pengalaman.',
      'Rancang form monitoring mingguan untuk guru memantau keaktifan setiap anggota kelompok.',
      'Sertakan panduan Gelar Karya / Presentasi Publik mini di akhir proyek.',
    ],
    promptConstraints: [
      'Pastikan proyek realistis dari segi biaya dan keselamatan peserta didik.',
      'Tegaskan peran masing-masing anggota agar tidak ada siswa yang hanya menumpang nama.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan timeline mingguan dalam format tabel markdown.',
      'Sediakan rubrik penilaian produk dan proses.',
    ],
    promptQualityBenchmarks: [
      'Proyek harus menghasilkan dampak nyata terhadap lingkungan belajar siswa.',
    ],
  },
  {
    id: 'alur-tujuan-pembelajaran',
    title: 'Rancangan Alur Tujuan Pembelajaran (ATP)',
    description:
      'Petakan Capaian Pembelajaran (CP) menjadi Tujuan Pembelajaran (TP) dan Alur Tujuan Pembelajaran (ATP) yang berkesinambungan.',
    category: 'modul-ajar',
    targetPersonas: ['guru'],
    isPopular: false,
    tags: ['ATP', 'Capaian Pembelajaran', 'Alur Belajar', 'Kurikulum Merdeka'],
    defaultTopic: 'Literasi Keuangan dan Pengelolaan Anggaran Sederhana',
    defaultGoal: 'Menurunkan Capaian Pembelajaran Fase D menjadi alur TP yang terurut logis',
    defaultContext: 'Mata pelajaran IPS / Terintegrasi Matematika Kelas 7-9 SMP',
    defaultEducationLevel: 'SMP',
    defaultTone: 'formal',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Spesialis Pengembang Kurikulum Pendidikan Nasional & Analis Taksonomi Belajar.',
    promptObjective:
      'Mendekonstruksi Capaian Pembelajaran menjadi urutan kompetensi dari tingkat dasar hingga penerapan kompleks.',
    promptInstructions: [
      'Identifikasi kata kerja operasional (KKO) dan materi inti dari topik yang diberikan.',
      'Pecah kompetensi menjadi 4-6 Tujuan Pembelajaran bertingkat sesuai perkembangan kognitif siswa.',
      'Susun alur sekuensial logis (apakah dari konkret ke abstrak, mudah ke sulit, atau prosedural).',
      'Petakan perkiraan alokasi jam pelajaran (JP) untuk setiap TP beserta indikator ketercapaiannya.',
    ],
    promptConstraints: [
      'Rujuk kata kerja Taksonomi Bloom / Marzano yang dapat diobservasi dan diukur.',
      'Hindari melompati prasyarat pengetahuan esensial.',
    ],
    promptOutputFormatGuidelines: [
      'Sajikan dalam tabel: [No TP, Deskripsi TP, Materi Esensial, Alokasi JP, Indikator Ketercapaian].',
    ],
    promptQualityBenchmarks: [
      'Alur harus kohesif dan dapat dipakai sebagai pedoman mengajar 1 semester penuh.',
    ],
  },
  {
    id: 'skenario-diferensiasi',
    title: 'Skenario Pembelajaran Berdiferensiasi (Konten, Proses, Produk)',
    description:
      'Solusi praktis mengatasi keberagaman kemampuan siswa dalam satu kelas dengan strategi diferensiasi 3 pilar.',
    category: 'modul-ajar',
    targetPersonas: ['guru'],
    isPopular: true,
    tags: ['Diferensiasi', 'Inklusif', 'Manajemen Kelas'],
    defaultTopic: 'Sistem Peredaran Darah Manusia dan Gangguan Kesehatannya',
    defaultGoal: 'Menyusun strategi diferensiasi konten, proses, dan produk untuk kelas heterogen',
    defaultContext: 'Kelas 8 SMP, terdapat siswa berkemampuan dasar, menengah, dan mahir',
    defaultEducationLevel: 'SMP',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Konsultan Pembelajaran Terdiferensiasi & Pendidikan Inklusif.',
    promptObjective:
      'Menyusun strategi diferensiasi yang dapat dieksekusi secara efisien tanpa membuat guru kelelahan menyiapkan puluhan lembar berbeda.',
    promptInstructions: [
      'Rancang Diferensiasi Konten: Bahan bacaan/media berbeda tingkat kompleksitas untuk topik yang sama.',
      'Rancang Diferensiasi Proses: Tingkat scaffolding (bimbingan guru bertahap, kerja mandiri bertingkat).',
      'Rancang Diferensiasi Produk: Pilihan unjuk pemahaman (misal komik sains, rekaman podcast, model 3D, atau laporan teks).',
      'Berikan panduan pengelolaan kelas agar guru dapat memfasilitasi kelompok yang butuh bantuan ekstra tanpa mengabaikan kelompok cepat.',
    ],
    promptConstraints: [
      'Rubrik penilaian harus menilai tujuan pemahaman yang sama terlepas dari bentuk produk yang dipilih siswa.',
      'Jangan memberikan beban kerja yang timpang antar level.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan matriks perbandingan 3 Tingkat Kesiapan (Perlu Bimbingan, Cakap, Mahir).',
    ],
    promptQualityBenchmarks: [
      'Siswa di setiap jenjang kemampuan merasa tertantang secara adil (Zone of Proximal Development).',
    ],
  },
  {
    id: 'gamifikasi-edukasi',
    title: 'Desain Pembelajaran Berbasis Game / Gamifikasi Kelas',
    description:
      'Ubah materi yang dianggap membosankan menjadi petualangan belajar interaktif lengkap dengan quest, badges, dan tantangan.',
    category: 'modul-ajar',
    targetPersonas: ['guru'],
    isPopular: false,
    tags: ['Gamifikasi', 'Motivasi Belajar', 'Game-Based Learning'],
    defaultTopic: 'Tata Surya, Karakteristik Planet, dan Gravitasi Alam Semesta',
    defaultGoal: 'Membuat alur gamifikasi petualangan antariksa dalam 2 pertemuan kelas',
    defaultContext: 'Siswa Kelas 6 SD yang aktif dan menyukai elemen kompetisi sehat',
    defaultEducationLevel: 'SD',
    defaultTone: 'santai',
    defaultOutputFormat: 'step-by-step',
    defaultLanguage: 'id',
    promptRole: 'Desainer Edukasi Gamifikasi & Pengembang Game-Based Learning Anak.',
    promptObjective:
      'Mengintegrasikan mekanika permainan (poin, tantangan bertingkat, misi tim) ke dalam rencana pembelajaran aktif.',
    promptInstructions: [
      'Tentukan Narasi Utama / Tema Petualangan (Storyline yang memikat anak).',
      'Bagi materi menjadi 3 Tingkatan Misi (Level 1: Rookie/Pemula, Level 2: Explorer/Penjelajah, Level 3: Master/Kapten).',
      'Buat aturan main sederhana dan mekanisme reward/lencana non-materiil (misal privilege kelas atau gelar kehormatan).',
      'Sertakan tantangan "Boss Fight" berupa kuis kolaborasi pemecahan masalah bersama.',
      'Rancang debriefing reflektif di akhir agar esensi materi tetap tercapai.',
    ],
    promptConstraints: [
      'Fokus tetap pada penguasaan materi inti, game hanyalah media keterlibatan.',
      'Hindari kompetisi berlebihan yang memicu kecemasan siswa yang kurang percaya diri.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan kartu misi dan tabel aturan permainan yang visual.',
    ],
    promptQualityBenchmarks: [
      'Meningkatkan partisipasi aktif minimal 90% siswa di kelas.',
    ],
  },

  // =========================================================================
  // 2. LKPD DAN BAHAN AJAR (6 Templates)
  // =========================================================================
  {
    id: 'lkpd-eksploratif',
    title: 'Lembar Kerja Peserta Didik (LKPD) Eksploratif',
    description:
      'Buat LKPD siap cetak yang menuntun siswa menemukan konsep secara mandiri lewat investigasi bertahap.',
    category: 'lkpd-bahan',
    targetPersonas: ['guru'],
    isPopular: true,
    tags: ['LKPD', 'Inquiry', 'Lembar Kerja', 'Bahan Ajar'],
    defaultTopic: 'Pewarisan Sifat dan Hukum Mendel pada Tanaman',
    defaultGoal: 'Membuat LKPD 2 halaman berorientasi penyelidikan untuk kerja kelompok kecil',
    defaultContext: 'Siswa Kelas 9 SMP, 4 orang per kelompok',
    defaultEducationLevel: 'SMP',
    defaultTone: 'santai',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    customFields: [
      {
        id: 'tipeAktivitas',
        label: 'Bentuk Aktivitas',
        type: 'select',
        options: [
          { value: 'Eksperimen / Simulasi Sederhana', label: 'Eksperimen / Simulasi Sederhana' },
          { value: 'Analisis Data & Grafik', label: 'Analisis Data & Grafik' },
          { value: 'Studi Kasus & Diskusi Kritis', label: 'Studi Kasus & Diskusi Kritis' },
          { value: 'Observasi Objek Nyata Sekitar', label: 'Observasi Objek Nyata Sekitar' },
        ],
        defaultValue: 'Eksperimen / Simulasi Sederhana',
      },
    ],
    promptRole: 'Pengembang Media Bahan Ajar & Lembar Kerja Siswa Berbasis Inkuiri.',
    promptObjective:
      'Menyusun teks LKPD lengkap dengan instruksi yang ramah anak, diagram konseptual, dan pertanyaan reflektif bertahap.',
    promptInstructions: [
      'Tuliskan Header LKPD (Nama Kelompok, Anggota, Kelas, Tanggal, dan Tujuan Penyelidikan).',
      'Tuliskan Stimulus Pembuka (Cerita pendek / fenomena membingungkan / cuplikan kasus sehari-hari).',
      'Uraikan Alat & Bahan yang mudah ditemukan di rumah atau sekolah.',
      'Sajikan Langkah Kerja bernomor dengan instruksi ringkas dan kata kerja jelas (Amati, Catat, Bandingkan).',
      'Sediakan Tabel Pengamatan Data kosong dengan kolom yang rapi.',
      'Tuliskan 4 Pertanyaan Analisis penuntun bertingkat (dari amatan langsung ke generalisasi hukum/teori).',
      'Sediakan kotak Kesimpulan & Refleksi Belajar.',
    ],
    promptConstraints: [
      'Instruksi harus dapat dibaca dan dieksekusi siswa secara mandiri tanpa guru harus menjelaskan berulang kali.',
      'Gunakan tata bahasa Indonesia yang komunikatif dan bersahabat.',
    ],
    promptOutputFormatGuidelines: [
      'Format siap salin ke dokumen Word/Google Docs dengan garis isian kosong `[ ......................................... ]`.',
    ],
    promptQualityBenchmarks: [
      'LKPD mengarahkan siswa membangun konsep sendiri, bukan sekadar menyalin dari buku teks.',
    ],
  },
  {
    id: 'cerita-analogi-konseptual',
    title: 'Bahan Ajar Berbasis Cerita & Analogi Konseptual',
    description:
      'Jelaskan konsep abstrak atau sulit dipahami melalui metafora cerita naratif yang menghibur dan melekat di ingatan.',
    category: 'lkpd-bahan',
    targetPersonas: ['guru', 'siswa'],
    isPopular: false,
    tags: ['Analogi', 'Storytelling', 'Pemahaman Konsep'],
    defaultTopic: 'Cara Kerja Komponen Komputer (CPU, RAM, Hard Disk, Motherboard)',
    defaultGoal: 'Menjelaskan fungsi hardware komputer dengan analogi dapur restoran yang sibuk',
    defaultContext: 'Siswa pemula yang belum pernah belajar perakitan komputer',
    defaultEducationLevel: 'SMP',
    defaultTone: 'naratif',
    defaultOutputFormat: 'essay-narrative',
    defaultLanguage: 'id',
    promptRole: 'Penulis Sains Populer & Edukator Storytelling Konseptual.',
    promptObjective:
      'Menciptakan analogi cerita yang akurat secara ilmiah namun sangat mudah dibayangkan oleh anak-anak maupun orang awam.',
    promptInstructions: [
      'Perkenalkan metafora dunia nyata yang akrab (misal dapur koki, kota metropolitan, kantor pos, pabrik mainan).',
      'Petakan setiap komponen abstrak ke dalam peran tokoh atau elemen dalam cerita.',
      'Ceritakan alur proses kerja langkah demi langkah menggunakan analogi tersebut.',
      'Jelaskan batasan analogi: apa perbedaan metafora ini dengan fakta ilmiah sebenarnya agar tidak timbul miskonsepsi.',
      'Berikan 2 pertanyaan cek pemahaman berbasis cerita tersebut.',
    ],
    promptConstraints: [
      'Pastikan metafora tidak melenceng dari prinsip ilmiah inti.',
      'Hindari istilah teknis tanpa penjelasan konteksnya di dalam cerita.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan format narasi mengalir dengan tabel konversi analogi di akhir teks.',
    ],
    promptQualityBenchmarks: [
      'Setelah membaca, pembaca dapat menceritakan kembali konsep tersebut kepada orang lain dengan lancar.',
    ],
  },
  {
    id: 'buku-saku-infografis',
    title: 'Buku Saku Ringkas & Blueprint Infografis Materi',
    description:
      'Rancang draf konten teks untuk booklet saku atau layout infografis visual yang padat ilmu dan estetis.',
    category: 'lkpd-bahan',
    targetPersonas: ['guru', 'mahasiswa'],
    isPopular: false,
    tags: ['Buku Saku', 'Infografis', 'Visual Summary'],
    defaultTopic: 'Pertolongan Pertama pada Kecelakaan (P3K) di Sekolah',
    defaultGoal: 'Menyusun draf konten teks untuk booklet lipat 3 (trifold flyer) darurat P3K',
    defaultContext: 'Guru UKS dan siswa PMR sekolah',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'sederhana',
    defaultOutputFormat: 'bullet-points',
    defaultLanguage: 'id',
    promptRole: 'Desainer Komunikasi Visual Edukasi & Pengembang Media Pembelajaran Ringkas.',
    promptObjective:
      'Menyusun naskah informasi visual ringkas yang siap ditempel ke Canva atau software desain poster.',
    promptInstructions: [
      'Tentukan Judul Utama Catchy dan 3 Subjudul Pokok.',
      'Tuliskan poin-poin "Do and Don’t" (Boleh & Dilarang) dengan kalimat aktif dan pendek.',
      'Berikan deskripsi saran ikon/ilustrasi visual di samping setiap teks penting.',
      'Tuliskan fakta penting / statistik mencengangkan untuk menarik minat pembaca.',
      'Sertakan nomor kontak darurat atau call-to-action yang jelas.',
    ],
    promptConstraints: [
      'Maksimal 15-20 kata per poin agar tidak membebani tampilan visual grafis.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan struktur panel/halaman (Halaman Depan, Panel 1, Panel 2, Panel 3, Halaman Belakang).',
    ],
    promptQualityBenchmarks: [
      'Informasi dapat diserap pembaca dalam waktu 30 detik pertama.',
    ],
  },
  {
    id: 'lembar-aktivitas-debat',
    title: 'Lembar Aktivitas Diskusi & Debat Kritis Siswa',
    description:
      'Fasilitasi debat kelas yang terstruktur dengan mosi kontroversial, fakta pendukung, dan kartu peran kelompok.',
    category: 'lkpd-bahan',
    targetPersonas: ['guru', 'siswa'],
    isPopular: false,
    tags: ['Debat', 'Public Speaking', 'Berpikir Kritis'],
    defaultTopic: 'Pemanfaatan AI Generatif dalam Pengerjaan Tugas Sekolah: Ancaman atau Peluang?',
    defaultGoal: 'Menyusun panduan debat terstruktur 45 menit untuk melatih argumen berbasis data',
    defaultContext: 'Siswa SMA Kelas 11, mata pelajaran Bahasa Indonesia / PPKn',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'kritis',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Pelatih Debat Parlementer & Fasilitator Berpikir Kritis Pendidikan.',
    promptObjective:
      'Menyusun paket instruksi debat kelas yang berimbang, santun, dan menuntut pembuktian logis.',
    promptInstructions: [
      'Rumuskan Mosi Debat resmi yang jelas dan berimbang.',
      'Buat Lembar Kerja Tim Proposisi/Afirmatif (Klaim utama, 3 bukti potensial, dan antisipasi sanggahan).',
      'Buat Lembar Kerja Tim Oposisi (Klaim utama, 3 bukti potensial, dan strategi sanggahan).',
      'Sediakan Format Giliran Berbicara (Waktu pembicara 1, 2, 3, dan pidato kesimpulan).',
      'Berikan panduan etika debat (larangan argumen ad hominem, logical fallacy yang harus dihindari).',
      'Sediakan lembar evaluasi juri/rekan sebaya (peer review).',
    ],
    promptConstraints: [
      'Berikan sudut pandang berimbang tanpa memihak salah satu kubu.',
    ],
    promptOutputFormatGuidelines: [
      'Format modul panduan debat lengkap dengan instruksi moderator dan rubrik penilaian.',
    ],
    promptQualityBenchmarks: [
      'Melatih siswa berargumentasi berdasarkan fakta dan logika, bukan emosi.',
    ],
  },
  {
    id: 'panduan-praktikum-lab',
    title: 'Panduan Praktikum Mandiri / Laboratorium Sederhana',
    description:
      'Petunjuk praktikum ilmiah dengan standar keselamatan, variabel penelitian, dan analisis galat eksperimen.',
    category: 'lkpd-bahan',
    targetPersonas: ['guru', 'mahasiswa'],
    isPopular: false,
    tags: ['Praktikum', 'Laboratorium', 'Sains', 'Eksperimen'],
    defaultTopic: 'Faktor-Faktor yang Memengaruhi Laju Reaksi Kimia (Suhu, Konsentrasi, Luas Permukaan)',
    defaultGoal: 'Menyusun modul praktikum aman dengan bahan kimia ramah dapur rumah tangga',
    defaultContext: 'Siswa SMA Kelas 11, dapat dilakukan di lab sekolah dengan peralatan dasar',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Kepala Laboratorium Sains & Pengembang Modul Praktikum Keamanan Tinggi.',
    promptObjective:
      'Menyusun panduan eksperimen ilmiah yang sistematis, memperhatikan keselamatan kerja (K3), dan menghasilkan data terukur.',
    promptInstructions: [
      'Cantumkan Landasan Teori Singkat dan Rumusan Hipotesis eksperimen.',
      'Definisikan Variabel: Variabel Bebas, Variabel Terikat, dan Variabel Kontrol.',
      'Sertakan Peringatan Keselamatan Kerja Laboratorium (K3) dan cara penanganan limbah sisa.',
      'Tuliskan Prosedur Kerja rinci dan langkah mitigasi jika eksperimen gagal menghasilkan data.',
      'Sediakan Format Tabel Pencatatan Data Mentah dan panduan perhitungan matematis/grafik.',
      'Tuliskan 3 Pertanyaan Pembahasan & Diskusi Kesalahan Percobaan (Error Analysis).',
    ],
    promptConstraints: [
      'Utamakan keselamatan; jika memakai bahan reaktif, wajib menyertakan peringatan risiko bahaya.',
    ],
    promptOutputFormatGuidelines: [
      'Format baku panduan laboratorium akademis dengan nomor prosedur yang jelas.',
    ],
    promptQualityBenchmarks: [
      'Data hasil praktikum dapat diulang (reproducible) dengan deviasi wajar.',
    ],
  },
  {
    id: 'studi-kasus-kontekstual',
    title: 'Studi Kasus Kontekstual Dunia Nyata (Problem Scenario)',
    description:
      'Sajikan skenario naratif dunia nyata yang dilematis untuk dibedah secara kritis menggunakan konsep materi pelajaran.',
    category: 'lkpd-bahan',
    targetPersonas: ['guru', 'mahasiswa'],
    isPopular: true,
    tags: ['Studi Kasus', 'Analisis Masalah', 'Pendidikan Tinggi', 'Kontekstual'],
    defaultTopic: 'Etika Bisnis, Privasi Data Konsumen, dan Keamanan Siber Startup Fintech',
    defaultGoal: 'Menyusun studi kasus dilema manajemen 2 halaman beserta panduan diskusi kelompok',
    defaultContext: 'Mahasiswa S1 Manajemen / Ilmu Komputer Semester 4',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'kritis',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Penulis Kasus Bisnis & Dosen Studi Kasus Berbasis Harvard Case Method.',
    promptObjective:
      'Menulis skenario dilema dunia nyata tanpa jawaban hitam-putih yang memicu perdebatan analitis mendalam.',
    promptInstructions: [
      'Tuliskan Latar Belakang Perusahaan Fiktif / Situasi Nyata yang mengalami krisis atau keputusan genting.',
      'Perkenalkan Tokoh Kunci (Decision Maker) dan konflik kepentingan yang dihadapinya.',
      'Sertakan Data Pendukung (Kutipan pernyataan, angka metrik finansial/teknis, reaksi media).',
      'Rumuskan Pertanyaan Kunci Pemecahan Masalah (Problem Statement).',
      'Sediakan Panduan Dosen/Fasilitator (Teaching Note) berisi alternatif opsi solusi beserta trade-off risikonya.',
    ],
    promptConstraints: [
      'Jangan langsung membeberkan solusi yang benar; biarkan pembaca membedah alternatif keputusan.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan format naskah studi kasus resmi [Pengantar, Profil Organisasi, Kronologi Insiden, Dilema Keputusan, Lampiran Data].',
    ],
    promptQualityBenchmarks: [
      'Mendorong multi-perspektif (finansial, hukum, etika, dan reputasi).',
    ],
  },

  // =========================================================================
  // 3. BANK SOAL DAN RUBRIK PENILAIAN (6 Templates)
  // =========================================================================
  {
    id: 'soal-hots-pilihan-ganda',
    title: 'Paket Soal Pilihan Ganda HOTS (High-Order Thinking Skills)',
    description:
      'Kembangkan paket soal berbasis stimulus (tabel/grafik/kasus) yang menguji penalaran C4 (Analisis), C5 (Evaluasi), dan C6 (Kreasi).',
    category: 'bank-soal',
    targetPersonas: ['guru'],
    isPopular: true,
    tags: ['HOTS', 'Pilihan Ganda', 'Ujian', 'Asesmen'],
    defaultTopic: 'Pemanasan Global, Efek Rumah Kaca, dan Kebijakan Energi Terbarukan',
    defaultGoal: 'Membuat 5 butir soal pilihan ganda HOTS lengkap dengan stimulus, kunci, dan pembahasan',
    defaultContext: 'Siswa Kelas 10 SMA, persiapan Asesmen Sumatif Akhir Semester',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    customFields: [
      {
        id: 'jumlahSoal',
        label: 'Jumlah Soal',
        type: 'select',
        options: [
          { value: '3 Soal Mendalam', label: '3 Butir Soal Mendalam' },
          { value: '5 Butir Soal Standar', label: '5 Butir Soal Standar' },
          { value: '10 Butir Soal Lengkap', label: '10 Butir Soal Lengkap' },
        ],
        defaultValue: '5 Butir Soal Standar',
      },
      {
        id: 'tingkatKognitif',
        label: 'Fokus Level Kognitif',
        type: 'text',
        placeholder: 'Contoh: Dominan C4 (Analisis) dan C5 (Evaluasi)',
        defaultValue: 'C4 (Analisis) dan C5 (Evaluasi)',
      },
    ],
    promptRole: 'Spesialis Pembuat Soal Asesmen Standar Nasional (Pusmendik / PISA).',
    promptObjective:
      'Menyusun butir soal pilihan ganda HOTS yang terhindar dari sekadar hafalan fakta atau tebak-tebakan kata.',
    promptInstructions: [
      'Setiap soal WAJIB diawali Stimulus yang autentik (misal paragraf berita, tabel data perbandingan, grafik tren, atau studi kasus mini).',
      'Buat Pokok Soal (Stem) yang jelas, tegas, dan menanyakan hubungan kausalitas, evaluasi argumen, atau prediksi data.',
      'Sediakan 5 opsi pilihan (A, B, C, D, E) yang homogen panjang kalimatnya dan memiliki daya pengecoh (distractor) yang logis dan bermutu.',
      'Sertakan Kunci Jawaban Resmi.',
      'Sertakan Pembahasan Ilmiah Rinci mengapa opsi benar tepat dan mengapa opsi pengecoh salah/kurang tepat.',
      'Cantumkan Level Kognitif Bloom (C4/C5/C6) dan Indikator Soal di setiap butir.',
    ],
    promptConstraints: [
      'Dilarang menggunakan opsi negatif ganda ("Bukan merupakan yang tidak...") atau opsi konyol seperti "Semua jawaban benar/salah".',
      'Hindari petunjuk gramatikal yang membocorkan kunci jawaban.',
    ],
    promptOutputFormatGuidelines: [
      'Format terpisah antara Lembar Soal Siswa dan Lembar Kunci & Pembahasan Guru.',
    ],
    promptQualityBenchmarks: [
      'Memenuhi standar instrumen penilaian asesmen kompetensi minimum (AKM) dan PISA.',
    ],
  },
  {
    id: 'soal-uraian-penalaran',
    title: 'Soal Uraian Berpikir Kritis & Penalaran Terbuka',
    description:
      'Rancang soal esai yang menuntut elaborasi mendalam, bukti pendukung, dan evaluasi solusi majemuk.',
    category: 'bank-soal',
    targetPersonas: ['guru', 'mahasiswa'],
    isPopular: false,
    tags: ['Esai', 'Uraian', 'Penalaran', 'Rubrik'],
    defaultTopic: 'Dampak AI terhadap Pekerjaan Masa Depan dan Transformasi Pendidikan',
    defaultGoal: 'Membuat 3 soal esai reflektif analitis lengkap dengan pedoman penskoran',
    defaultContext: 'Mahasiswa S1 / Siswa Kelas 12 SMA',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'kritis',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Penilai Asesmen Kognitif Tingkat Tinggi & Penguji Kompetensi Akademik.',
    promptObjective:
      'Menyusun butir soal uraian yang menantang kedalaman berpikir dan penalaran siswa.',
    promptInstructions: [
      'Tuliskan stimulus permasalahan multi-dimensi.',
      'Susun pertanyaan esai dengan kata kerja operasional (Bandingkan, Nilailah, Berikan solusi alternatif berdasar data).',
      'Buat Kriteria Jawaban Ideal (Poin-poin konsep kunci yang wajib muncul dalam jawaban siswa).',
      'Sediakan Pedoman Penskoran Analitik (Skor 0-4 untuk setiap kriteria pemahaman, argumen, dan bukti).',
    ],
    promptConstraints: [
      'Pertanyaan tidak boleh dijawab hanya dengan "Ya" atau "Tidak".',
    ],
    promptOutputFormatGuidelines: [
      'Format soal bernomor dengan rubrik penilaian di bawahnya.',
    ],
    promptQualityBenchmarks: [
      'Membedakan dengan jelas siswa yang paham konsep secara mendalam dengan yang sekadar menghafal.',
    ],
  },
  {
    id: 'rubrik-penilaian-autentik',
    title: 'Rubrik Penilaian Proyek & Presentasi Autentik',
    description:
      'Susun matriks rubrik analitik 4 skala (Sangat Baik, Baik, Cukup, Kurang) dengan deskriptor capaian yang gamblang.',
    category: 'bank-soal',
    targetPersonas: ['guru', 'mahasiswa', 'peneliti'],
    isPopular: true,
    tags: ['Rubrik', 'Penilaian Autentik', 'Presentasi', 'Proyek'],
    defaultTopic: 'Presentasi Hasil Riset Mini dan Poster Ilmiah Mahasiswa',
    defaultGoal: 'Membuat rubrik penilaian presentasi lisan dan poster ilmiah dengan kriteria objektif',
    defaultContext: 'Mata Kuliah Metodologi Penelitian, penilaian kelompok dan individu',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'formal',
    defaultOutputFormat: 'rubric-grid',
    defaultLanguage: 'id',
    promptRole: 'Spesialis Asesmen Autentik & Evaluasi Pendidikan Tinggi.',
    promptObjective:
      'Menyusun tabel rubrik penilaian dengan deskriptor kinerja yang objektif sehingga meminimalkan bias subjektivitas penilai.',
    promptInstructions: [
      'Tentukan 4-5 Kriteria Utama (misal Penguasaan Materi, Struktur Argumen, Desain Visual Slide, Kemampuan Menjawab Pertanyaan, Kerjasama Tim).',
      'Beri Bobot Persentase (%) untuk masing-masing kriteria.',
      'Tuliskan Deskriptor Perilaku Konkret untuk 4 tingkat pencapaian: [Sangat Baik (Skor 4), Baik (Skor 3), Cukup (Skor 2), Perlu Bimbingan (Skor 1)].',
      'Sertakan panduan konversi total skor ke nilai akhir (0-100).',
    ],
    promptConstraints: [
      'Deskriptor harus memuat perilaku teramati, bukan kata sifat subjektif yang ambigu (hindari hanya menulis "cukup bagus" vs "sangat bagus").',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan format tabel markdown yang rapi dengan kolom: [Kriteria & Bobot, Level 4, Level 3, Level 2, Level 1].',
    ],
    promptQualityBenchmarks: [
      'Dua penilai berbeda akan menghasilkan skor yang nyaris identik (tingkat reliabilitas antar-penilai tinggi).',
    ],
  },
  {
    id: 'kuis-ice-breaking',
    title: 'Kuis Interaktif Cepat (Ice Breaking & Check Pemahaman)',
    description:
      '10 pertanyaan seru dan cerdas untuk apersepsi awal kelas atau kuis Kahoot/Quizizz yang membangkitkan semangat belajar.',
    category: 'bank-soal',
    targetPersonas: ['guru'],
    isPopular: false,
    tags: ['Kuis Interaktif', 'Ice Breaking', 'Quizizz', 'Apersepsi'],
    defaultTopic: 'Fakta Mengejutkan tentang Luar Angkasa dan Fenomena Gravitasi',
    defaultGoal: 'Membuat 10 pertanyaan kuis cepat untuk mencairkan suasana di awal pertemuan',
    defaultContext: 'Siswa SMP di jam pelajaran siang',
    defaultEducationLevel: 'SMP',
    defaultTone: 'santai',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Fasilitator Kelas Dinamis & Game Master Kuis Edukatif.',
    promptObjective:
      'Merancang kuis pemantik minat yang lucu, penuh fakta ' + 'mind-blowing' + ', namun tetap memiliki bobot edukasi.',
    promptInstructions: [
      'Buat 10 pertanyaan pendek dengan pilihan Benar/Salah atau Pilihan Ganda 4 opsi.',
      'Sisipkan fakta menarik yang jarang diketahui siswa.',
      'Tuliskan penjelasan 1 kalimat santai setelah kunci jawaban diungkap.',
      'Sediakan opsi pertanyaan kejutan (Tebak Gambar / Tebak Suara / Logika Cepat).',
    ],
    promptConstraints: [
      'Hindari pertanyaan hafalan angka rumit; utamakan konsep yang mengejutkan nalar.',
    ],
    promptOutputFormatGuidelines: [
      'Sajikan dalam tabel yang siap diimpor ke Quizizz atau Kahoot Spreadsheet.',
    ],
    promptQualityBenchmarks: [
      'Membuat seluruh siswa tersenyum dan penasaran ingin mempelajari materi lebih lanjut.',
    ],
  },
  {
    id: 'asesmen-diagnostik-awal',
    title: 'Asesmen Diagnostik Kognitif & Non-Kognitif Awal Bab',
    description:
      'Petakan kesiapan belajar, gaya belajar, dan pemahaman prasyarat siswa sebelum memulai bab baru.',
    category: 'bank-soal',
    targetPersonas: ['guru'],
    isPopular: false,
    tags: ['Asesmen Diagnostik', 'Kesiapan Belajar', 'Diferensiasi Awal'],
    defaultTopic: 'Aljabar Dasar dan Operasi Hitung Campuran Pecahan',
    defaultGoal: 'Membuat paket asesmen diagnostik 15 menit untuk memetakan kesiapan sebelum masuk bab persamaan linier',
    defaultContext: 'Awal semester kelas 7 SMP',
    defaultEducationLevel: 'SMP',
    defaultTone: 'sederhana',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Pakar Diagnostik Belajar & Pemetaan Kognitif Siswa.',
    promptObjective:
      'Menyusun instrumen cepat untuk mendeteksi siswa yang belum menguasai konsep prasyarat.',
    promptInstructions: [
      'Rancang 3 Pertanyaan Non-Kognitif (Kondisi emosi, minat terhadap topik, cara belajar yang disukai).',
      'Rancang 5 Soal Prasyarat Kognitif bertahap (dari operasi paling dasar ke menengah).',
      'Buat Panduan Tindak Lanjut Guru berdasarkan hasil skor: Kelompok Butuh Matrikulasi, Kelompok Siap, dan Kelompok Mahir.',
    ],
    promptConstraints: [
      'Soal tidak boleh membuat siswa merasa dihakimi atau cemas akan nilai rapor.',
    ],
    promptOutputFormatGuidelines: [
      'Format lembar isian siswa dan lembar interpretasi matriks guru.',
    ],
    promptQualityBenchmarks: [
      'Dapat dikoreksi guru dalam waktu kurang dari 5 menit per anak.',
    ],
  },
  {
    id: 'rubrik-profil-pancasila',
    title: 'Rubrik Penilaian Karakter Profil Pelajar Pancasila',
    description:
      'Instrumen observasi sikap dan karakter (Bernalar Kritis, Gotong Royong, Mandiri, Kreatif) berbasis indikator perilaku nyata.',
    category: 'bank-soal',
    targetPersonas: ['guru'],
    isPopular: false,
    tags: ['Profil Pelajar Pancasila', 'Karakter', 'Afektif', 'Observasi'],
    defaultTopic: 'Kolaborasi Proyek Sosial Lingkungan Hidup Sekolah',
    defaultGoal: 'Menyusun lembar observasi dimensi Gotong Royong dan Bernalar Kritis',
    defaultContext: 'Kegiatan Kokurikuler P5 SMA Fase E',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'formal',
    defaultOutputFormat: 'rubric-grid',
    defaultLanguage: 'id',
    promptRole: 'Koordinator Projek Penguatan Profil Pelajar Pancasila (P5) & Asesor Karakter.',
    promptObjective:
      'Menyusun rubrik observasi perilaku afektif yang autentik dan terhindar dari formalitas centang tanpa makna.',
    promptInstructions: [
      'Pilih Elemen dan Subelemen spesifik dari dimensi yang ditentukan.',
      'Tuliskan Indikator Perilaku Positif yang dapat dilihat langsung oleh guru saat siswa beraktivitas.',
      'Petakan skala capaian: [Mulai Berkembang (MB), Sedang Berkembang (SB), Berkembang Sesuai Harapan (BSH), Sangat Berkembang (SAB)].',
      'Sertakan ruang catatan anekdotal untuk mencatat kejadian spesifik.',
    ],
    promptConstraints: [
      'Deskriptor harus memuat aksi konkret (misal "mengajukan pertanyaan klarifikasi saat berdiskusi"), bukan sifat batiniah.',
    ],
    promptOutputFormatGuidelines: [
      'Tabel rubrik observasi dengan format siap cetak.',
    ],
    promptQualityBenchmarks: [
      'Memudahkan guru memberikan umpan balik karakter yang membangun kepada orang tua.',
    ],
  },

  // =========================================================================
  // 4. RANGKUMAN DAN PENJELASAN MATERI (6 Templates)
  // =========================================================================
  {
    id: 'feynman-teknik-sederhana',
    title: 'Penjelasan Teknik Feynman (Jelaskan untuk Anak 10 Tahun)',
    description:
      'Runtuhkan konsep tersulit menjadi penjelasan super sederhana tanpa jargon berbelit menggunakan metode pemenang Nobel Richard Feynman.',
    category: 'rangkuman-materi',
    targetPersonas: ['siswa', 'mahasiswa', 'guru'],
    isPopular: true,
    tags: ['Feynman Technique', 'Sederhana', 'Analogi', 'Belajar Mandiri'],
    defaultTopic: 'Mekanisme Blockchain, Enkripsi Kriptografi, dan Smart Contract',
    defaultGoal: 'Menjelaskan cara kerja blockchain kepada orang awam menggunakan analogi buku kas desa bersama',
    defaultContext: 'Pemula tanpa latar belakang ilmu komputer',
    defaultEducationLevel: 'Umum',
    defaultTone: 'sederhana',
    defaultOutputFormat: 'essay-narrative',
    defaultLanguage: 'id',
    promptRole: 'Pendidik Berbakat Berpendekatan Feynman & Penjelas Konsep Kompleks Kelas Dunia.',
    promptObjective:
      'Menjelaskan inti konsep yang rumit dengan kejernihan maksimal sehingga anak usia 10 tahun pun dapat memahaminya seketika.',
    promptInstructions: [
      'Mulai dengan Pernyataan Inti 1 Kalimat yang langsung menjawab "apa itu sebenarnya?".',
      'Gunakan Cerita / Analogi Sehari-Hari yang sangat akrab di kehidupan rumah tangga.',
      'Ganti semua jargon teknis dengan kata-kata sederhana (jika terpaksa menyebut istilah asing, beri perumpamaan langsung).',
      'Jelaskan mengapa konsep ini penting dan apa dampaknya jika konsep ini tidak ada.',
      'Tutup dengan 1 pertanyaan tebakan ringan untuk menguji apakah pembaca benar-benar paham logikanya.',
    ],
    promptConstraints: [
      'Haram menggunakan definisi kamus yang kaku atau formula matematis tanpa konteks makna fisiknya.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan paragraf santai yang mengalir, dilengkapi kutipan perumpamaan penting yang ditebalkan.',
    ],
    promptQualityBenchmarks: [
      'Tidak ada istilah asing yang dibiarkan menggantung tanpa penjelasan analogis.',
    ],
  },
  {
    id: 'rangkuman-mindmap-hirarki',
    title: 'Rangkuman Komprehensif Berstruktur Mind Map / Hirarki',
    description:
      'Strukturkan seluruh materi bab menjadi ringkasan pohon konsep berhirarki dari payung besar ke ranting detail.',
    category: 'rangkuman-materi',
    targetPersonas: ['siswa', 'mahasiswa'],
    isPopular: false,
    tags: ['Mind Map', 'Rangkuman', 'Peta Konsep', 'Struktur Materi'],
    defaultTopic: 'Klasifikasi Makhluk Hidup 5 Kingdom (Monera, Protista, Fungi, Plantae, Animalia)',
    defaultGoal: 'Menyusun rangkuman berhirarki lengkap dengan ciri pembeda utama setiap kingdom',
    defaultContext: 'Siswa SMA Kelas 10, bahan belajar sebelum ujian biologi',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'formal',
    defaultOutputFormat: 'bullet-points',
    defaultLanguage: 'id',
    promptRole: 'Ahli Sintesis Pengetahuan & Pembuat Peta Konsep Kognitif.',
    promptObjective:
      'Merangkum materi yang luas menjadi struktur hirarkis yang mudah dihafalkan dan dipahami keterhubungannya.',
    promptInstructions: [
      'Buat Ringkasan Eksekutif 3 baris mengenai konsep payung utama.',
      'Sajikan Struktur Pohon Konsep (Pohon -> Cabang Utama -> Sub-cabang -> Contoh).',
      'Sertakan Tabel Matriks Komparasi untuk membandingkan perbedaan kunci antar cabang.',
      'Tuliskan "Mnemonik Jembatan Keledai" yang kreatif untuk mempermudah mengingat urutan/klasifikasi.',
      'Tuliskan 3 Miskonsepsi Umum yang sering mengecoh saat ujian.',
    ],
    promptConstraints: [
      'Jangan ada informasi berulang; buat sepadat dan seringkas mungkin.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan nesting indentasi markdown bertingkat dan kode visual ASCII/tabel jika relevan.',
    ],
    promptQualityBenchmarks: [
      'Dapat dijadikan contekan belajar cepat (cheat-sheet) sebelum lembar soal dibagikan.',
    ],
  },
  {
    id: 'glosarium-konseptual',
    title: 'Glosarium Istilah Kunci + Contoh Kontekstual',
    description:
      'Daftar istilah penting dalam materi beserta etimologi, definisi presisi, dan contoh pemakaian dalam kalimat nyata.',
    category: 'rangkuman-materi',
    targetPersonas: ['siswa', 'mahasiswa', 'peneliti'],
    isPopular: false,
    tags: ['Glosarium', 'Kosakata', 'Kamus Istilah'],
    defaultTopic: 'Kecerdasan Buatan: Neural Network, Backpropagation, Tokenization, LLM, Fine-Tuning',
    defaultGoal: 'Menyusun kamus istilah teknis AI yang mudah dicerna mahasiswa baru',
    defaultContext: 'Mahasiswa semester awal informatika / sistem informasi',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'sederhana',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Leksikografer Sains & Penyusun Glosarium Akademik.',
    promptObjective:
      'Menyusun glosarium istilah yang tidak hanya mendefinisikan kata secara harfiah, namun juga memberikan makna praktisnya.',
    promptInstructions: [
      'Daftar 10-15 istilah paling fundamental pada topik.',
      'Tuliskan Definisi Presisi 1-2 kalimat baku.',
      'Tuliskan Arti dalam Bahasa Sehari-hari (Bermakna apa bagi orang biasa?).',
      'Berikan Contoh Penggunaan dalam Kalimat Nyata.',
      'Sebutkan istilah lawan kata (antitesis) atau konsep yang sering tertukar dengannya.',
    ],
    promptConstraints: [
      'Urutkan berdasarkan abjad atau urutan logis dari konsep dasar ke lanjut.',
    ],
    promptOutputFormatGuidelines: [
      'Format tabel markdown kolom: [Istilah, Definisi Formal, Bahasa Sederhana, Contoh Kontekstual].',
    ],
    promptQualityBenchmarks: [
      'Menjadi rujukan cepat saat membaca artikel ilmiah atau buku teks tebal.',
    ],
  },
  {
    id: 'komparasi-dua-teori',
    title: 'Perbandingan & Analisis Kontras Dua Konsep / Teori',
    description:
      'Bedah persamaan, perbedaan esensial, kelebihan, kekurangan, dan kapan harus menggunakan salah satunya.',
    category: 'rangkuman-materi',
    targetPersonas: ['mahasiswa', 'peneliti', 'guru'],
    isPopular: true,
    tags: ['Komparasi', 'Analisis Teori', 'Kelebihan & Kekurangan'],
    defaultTopic: 'Metode Pembelajaran Kuantitatif vs Kualitatif dalam Penelitian Sosial',
    defaultGoal: 'Membandingkan paradigma kuantitatif dan kualitatif secara mendalam',
    defaultContext: 'Persiapan tugas makalah metodologi penelitian skripsi',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'kritis',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Filsuf Ilmu & Komparator Teori Akademik Lintas Paradigma.',
    promptObjective:
      'Menganalisis dua konsep atau teori secara adil, mendalam, dan tanpa bias sepihak.',
    promptInstructions: [
      'Jelaskan Landasan Filosofis & Asumsi Dasar dari kedua konsep.',
      'Sajikan Matriks Perbandingan 8 Aspek (Tujuan, Pendekatan, Kelebihan, Kelemahan, Kasus Ideal, Batasan, Alat Bantu, Contoh Nyata).',
      'Bahas Titik Temu / Konvergensi (Bagaimana keduanya bisa digabungkan, misal Mixed Methods).',
      'Berikan Panduan Pengambilan Keputusan (Kapan peneliti harus memilih A, kapan harus memilih B).',
    ],
    promptConstraints: [
      'Hindari menyatakan salah satu teori secara mutlak "lebih baik" dari yang lain; setiap paradigma memiliki kegunaan masing-masing.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan format tabel perbandingan komprehensif diikuti analisis sintesis naratif.',
    ],
    promptQualityBenchmarks: [
      'Membantu mahasiswa menjawab pertanyaan penguji skripsi dengan percaya diri.',
    ],
  },
  {
    id: 'cheat-sheet-ujian',
    title: 'Cheat Sheet / Lembar Rangkuman Kilat Ujian',
    description:
      'Intisari padat 1 halaman yang berisi rumus kunci, alur logika, aturan emas, dan jebakan soal yang wajib diingat.',
    category: 'rangkuman-materi',
    targetPersonas: ['siswa', 'mahasiswa'],
    isPopular: true,
    tags: ['Cheat Sheet', 'Persiapan Ujian', 'Ringkasan Cepat'],
    defaultTopic: 'Kalkulus Diferensial: Aturan Turunan, Rantai, dan Titik Stasioner',
    defaultGoal: 'Menyusun lembar contekan resmi belajar cepat rumus turunan dan trik pengerjaannya',
    defaultContext: 'H-3 Ujian Tengah Semester Matematika Teknik',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'formal',
    defaultOutputFormat: 'bullet-points',
    defaultLanguage: 'id',
    promptRole: 'Master Tutor Ujian Nasional & Olimpiade Sains.',
    promptObjective:
      'Mengemas seluruh formula vital dan trik cepat ke dalam format ultra-ringkas berdaya ingat tinggi.',
    promptInstructions: [
      'Tuliskan Formula Inti / Rumus Emas beserta arti simbol variabelnya.',
      'Sertakan Langkah Prosedural Baku (Algoritma 3 langkah untuk menyelesaikan soal tipe umum).',
      'Tuliskan "Trik Cepat / Shortcut" yang menghemat waktu pengerjaan.',
      'Cantumkan Daftar Kesalahan Bodoh / Fatal (Jebakan tanda minus, satuan, atau kondisi batas).',
      'Berikan 1 contoh soal representatif dan penyelesaian kilatnya.',
    ],
    promptConstraints: [
      'Ketik formula dengan format teks markdown matematika yang rapi.',
      'Fokus 100% pada apa yang paling sering keluar di lembar soal ujian.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan kotak-kotak ringkasan singkat berpoin tebal.',
    ],
    promptQualityBenchmarks: [
      'Dapat ditinjau ulang dalam waktu 10 menit tepat sebelum memasuki ruang ujian.',
    ],
  },
  {
    id: 'dekonstruksi-rumus-persamaan',
    title: 'Dekonstruksi Rumus & Logika di Balik Persamaan Matematika/Fisika',
    description:
      'Pahami mengapa rumus itu ada, dari mana asalnya, dan apa arti fisik dari setiap variabel alih-alih sekadar menghafal buta.',
    category: 'rangkuman-materi',
    targetPersonas: ['siswa', 'mahasiswa', 'guru'],
    isPopular: false,
    tags: ['Bedah Rumus', 'Fisika', 'Matematika', 'Pemahaman Mendalam'],
    defaultTopic: 'Rumus Energi Kinetik: Ek = 1/2 m v^2',
    defaultGoal: 'Mendekonstruksi mengapa ada angka 1/2 dan mengapa kecepatan dikuadratkan',
    defaultContext: 'Siswa SMA yang kesulitan membayangkan konsep fisis energi',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'sederhana',
    defaultOutputFormat: 'step-by-step',
    defaultLanguage: 'id',
    promptRole: 'Guru Fisika Inspiratif & Eksplanator Asal-Usul Matematika.',
    promptObjective:
      'Membongkar rahasia di balik suatu persamaan sehingga murid paham filosofi dan intuisi fisisnya.',
    promptInstructions: [
      'Tuliskan persamaan lengkap dan nama setiap variabelnya.',
      'Jawab Pertanyaan "Mengapa Bentuknya Begitu?": Buktikan logika di balik konstanta dan pangkat.',
      'Uji Perubahan Ekstrem (Gedankenexperiment): Apa yang terjadi jika nilai variabel dilipatgandakan atau dibuat nol?',
      'Gambarkan Visualisasi Grafik atau Hubungan Fisikanya di alam semesta.',
      'Hubungkan dengan Contoh Kecelakaan atau Peristiwa Nyata (Mengapa mobil berkecepatan 2x lipat membutuhkan jarak rem 4x lipat?).',
    ],
    promptConstraints: [
      'Hindari penurunan kalkulus rumit kecuali jika diminta; utamakan intuisi logika akal sehat.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan urutan tanya jawab yang memantik rasa penasaran pembaca.',
    ],
    promptQualityBenchmarks: [
      'Siswa tidak akan pernah lupa rumus ini lagi seumur hidup karena memahami intuisinya.',
    ],
  },

  // =========================================================================
  // 5. TUTOR BELAJAR DAN PERSIAPAN UJIAN (6 Templates)
  // =========================================================================
  {
    id: 'tutor-sokratik-interaktif',
    title: 'Tutor Sokratik Pribadi (Bimbingan Tanya-Jawab Terpandu)',
    description:
      'AI bertindak sebagai mentor bijak yang tidak langsung memberi kunci jawaban, melainkan mengajukan pertanyaan penuntun.',
    category: 'tutor-ujian',
    targetPersonas: ['siswa', 'mahasiswa'],
    isPopular: true,
    tags: ['Metode Sokratik', 'Tutor Mandiri', 'Latihan Mandiri', 'Belajar Terarah'],
    defaultTopic: 'Memahami Siklus Krebs dan Transfer Elektron dalam Respirasi Sel',
    defaultGoal: 'Membimbing saya memahami tahap demi tahap respirasi aerob lewat dialog pertanyaan terarah',
    defaultContext: 'Siswa SMA kelas 12 sedang belajar mandiri di rumah',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'sokratik',
    defaultOutputFormat: 'qa-flashcard',
    defaultLanguage: 'id',
    promptRole:
      'Tutor Sokratik yang sangat sabar, ramah, dan berdedikasi tinggi membimbing murid berpikir mandiri tanpa memanjakan dengan jawaban instan.',
    promptObjective:
      'Membimbing saya menuntaskan pemahaman topik ini dengan mengajukan pertanyaan pemantik satu per satu.',
    promptInstructions: [
      'Mulailah dengan menyapa ramah dan menanyakan apa yang sudah saya ketahui tentang topik ini.',
      'Ajukan HANYA SATU pertanyaan terarah pada satu waktu. Jangan memborbardir dengan banyak pertanyaan sekaligus.',
      'Tunggu jawaban saya sebelum melangkah ke pertanyaan berikutnya.',
      'Jika jawaban saya benar, beri apresiasi tulus dan ajukan pertanyaan lanjutan yang sedikit lebih mendalam.',
      'Jika jawaban saya salah atau bingung, jangan langsung memberi tahu kunci jawaban; berikan petunjuk ringan (hint) atau analogi sederhana agar saya mencoba kembali.',
      'Setelah seluruh alur selesai, buat rangkuman kesimpulan bersama berdasarkan hal yang telah saya temukan sendiri.',
    ],
    promptConstraints: [
      'PENTING: JANGAN PERNAH memberikan jawaban lengkap sekaligus di awal interaksi.',
      'Gunakan nada suara hangat, suportif, dan menyemangati.',
    ],
    promptOutputFormatGuidelines: [
      'Respon pendek, interaktif, dan diakhiri dengan satu pertanyaan pemantik reflektif yang jelas.',
    ],
    promptQualityBenchmarks: [
      'Menumbuhkan rasa pencapaian (aha-moment) karena siswa berhasil memecahkan masalah sendiri.',
    ],
  },
  {
    id: 'simulasi-ujian-mandiri',
    title: 'Simulasi Latihan Ujian Mandiri & Evaluasi Instan',
    description:
      'Uji diri Anda dengan tes simulasi bertenggat waktu, lalu dapatkan koreksi komprehensif dan diagnosis kelemahan materi.',
    category: 'tutor-ujian',
    targetPersonas: ['siswa', 'mahasiswa'],
    isPopular: true,
    tags: ['Tryout', 'Simulasi Ujian', 'Evaluasi Diri', 'Diagnosis Nilai'],
    defaultTopic: 'Struktur Teks dan Kaidah Kebahasaan Teks Argumentasi & Editorial',
    defaultGoal: 'Menjalankan simulasi tryout 5 soal variatif beserta panduan evaluasi mandiri',
    defaultContext: 'Persiapan Ujian Sekolah / UTBK SNBT Literasi Bahasa Indonesia',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Penguji Resmi Lembaga Tes Masuk Perguruan Tinggi & Evaluator Kompetensi Siswa.',
    promptObjective:
      'Menyajikan paket simulasi ujian yang realistis lengkap dengan panduan scoring dan perbaikan terarah.',
    promptInstructions: [
      'Sajikan 5 butir soal dengan variasi tingkat kesulitan (1 Mudah, 2 Sedang, 2 Sulit/HOTS).',
      'Sertakan panduan waktu pengerjaan ideal (misal 10 menit).',
      'Di bagian terpisah (setelah soal), sertakan Kunci Jawaban Resmi dan Matriks Rubrik Penilaian Diri.',
      'Sajikan Format Rencana Aksi Remedial: Apa yang harus dipelajari jika salah di nomor tertentu.',
    ],
    promptConstraints: [
      'Soal harus mencerminkan gaya bahasa dan tingkat kerumitan soal ujian seleksi resmi terbaru.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan separator jelas antara Lembar Ujian Siswa dan Kunci Solusi Evaluasi.',
    ],
    promptQualityBenchmarks: [
      'Membantu siswa mengukur kesiapan mental dan akademis secara akurat.',
    ],
  },
  {
    id: 'jadwal-belajar-pomodoro',
    title: 'Rencana Jadwal Belajar Efektif (Pomodoro & Spaced Repetition)',
    description:
      'Jadwal belajar harian/mingguan yang dipersonalisasi dengan teknik jeda Pomodoro dan kurva pengulangan ingatan Ebbinghaus.',
    category: 'tutor-ujian',
    targetPersonas: ['siswa', 'mahasiswa'],
    isPopular: false,
    tags: ['Manajemen Waktu', 'Pomodoro', 'Spaced Repetition', 'Produktivitas Belajar'],
    defaultTopic: 'Persiapan Ujian Akhir Semester 4 Mata Kuliah dalam Waktu 2 Minggu',
    defaultGoal: 'Menyusun jadwal belajar 14 hari dengan alokasi 3 jam per hari menggunakan teknik Pomodoro',
    defaultContext: 'Mahasiswa yang mudah terdistraksi smartphone dan rawan sistem kebut semalam (SKS)',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'santai',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Pelatih Kebiasaan Belajar & Pakar Neuroedukasi Produktivitas.',
    promptObjective:
      'Merancang jadwal belajar realistis yang mencegah kelelahan otak (burnout) dan mengoptimalkan retensi memori jangka panjang.',
    promptInstructions: [
      'Pecah materi besar menjadi blok-blok belajar kecil berdurasi 25-50 menit (Fokus Pomodoro).',
      'Petakan Interval Pengulangan (Spaced Repetition: Hari ke-1, Hari ke-3, Hari ke-7, Hari ke-14).',
      'Sertakan panduan istirahat aktif (apa yang harus dilakukan saat jeda 5-10 menit, hindari scrolling medsos).',
      'Sediakan Sistem Ceklis Kemajuan Harian untuk memicu dopamin motivasi.',
      'Tuliskan protokol darurat jika jadwal sempat bolong 1 hari.',
    ],
    promptConstraints: [
      'Jadwal harus manusiawi dan menyisakan waktu cukup untuk tidur 7-8 jam.',
    ],
    promptOutputFormatGuidelines: [
      'Sajikan dalam tabel matriks harian lengkap dengan jam, materi fokus, dan teknik belajar (aktif recall/latihan soal).',
    ],
    promptQualityBenchmarks: [
      'Dapat langsung dieksekusi hari ini tanpa rasa kewalahan.',
    ],
  },
  {
    id: 'flashcard-tanya-jawab',
    title: 'Paket Flashcard & Q&A Aktif (Anki / Quizlet Ready)',
    description:
      'Kumpulan kartu belajar depan-belakang (pertanyaan kunci & jawaban padat) yang siap diimpor ke aplikasi flashcard.',
    category: 'tutor-ujian',
    targetPersonas: ['siswa', 'mahasiswa'],
    isPopular: false,
    tags: ['Flashcard', 'Anki', 'Active Recall', 'Hafalan Kuat'],
    defaultTopic: 'Kosa Kata Ilmiah Biologi Sel: Mitokondria, Ribosom, Lisosom, Sentriol, Aparatus Golgi',
    defaultGoal: 'Membuat 10 kartu tanya jawab aktif recall untuk menghafal fungsi organel sel',
    defaultContext: 'Persiapan olimpiade sains / ujian masuk kedokteran',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'sederhana',
    defaultOutputFormat: 'qa-flashcard',
    defaultLanguage: 'id',
    promptRole: 'Spesialis Active Recall & Pengembang Kartu Memori Edukatif.',
    promptObjective:
      'Menyusun pasangan pertanyaan-jawaban yang presisi dan menguji pemahaman fungsional, bukan sekadar hafalan kata.',
    promptInstructions: [
      'Buat 10-15 Kartu Belajar (Sisi Depan = Pertanyaan Tajam / Kasus Mini; Sisi Belakang = Jawaban Inti 1-2 baris).',
      'Hindari pertanyaan ambigu yang jawabannya terlalu panjang.',
      'Sertakan kata kunci penting yang dicetak tebal di sisi belakang.',
      'Sediakan format teks tab-separated (TSV) agar bisa langsung di-copy-paste ke Anki atau Quizlet.',
    ],
    promptConstraints: [
      'Prinsip satu kartu satu konsep (Minimum Information Principle).',
    ],
    promptOutputFormatGuidelines: [
      'Tampilkan format visual kartu dan format kode TSV.',
    ],
    promptQualityBenchmarks: [
      'Meningkatkan kecepatan review materi hingga 3x lipat dibanding membaca buku teks.',
    ],
  },
  {
    id: 'penghancur-miskonsepsi',
    title: 'Analisis & Pembasmi Miskonsepsi Konsep (Misconception Buster)',
    description:
      'Identifikasi kesalahan kaprah yang paling sering dipercayai siswa dan buktikan kekeliruannya secara ilmiah.',
    category: 'tutor-ujian',
    targetPersonas: ['guru', 'siswa', 'mahasiswa'],
    isPopular: false,
    tags: ['Miskonsepsi', 'Koreksi Konsep', 'Fisika & Sains', 'Debunking'],
    defaultTopic: 'Miskonsepsi Seputar Gravitasi di Luar Angkasa dan Penyebab Terjadinya Musim di Bumi',
    defaultGoal: 'Membongkar 4 anggapan salah yang sering dialami siswa tentang gravitasi dan musim',
    defaultContext: 'Pelajaran sains umum untuk meluruskan pemahaman dasar',
    defaultEducationLevel: 'SMP',
    defaultTone: 'kritis',
    defaultOutputFormat: 'step-by-step',
    defaultLanguage: 'id',
    promptRole: 'Pemberantas Miskonsepsi Sains & Pakar Perubahan Konseptual (Conceptual Change).',
    promptObjective:
      'Membongkar mitos ilmiah umum dan menggantinya dengan pemahaman konsep yang benar secara bertahap.',
    promptInstructions: [
      'Tuliskan "Mitos / Kesalahan Kaprah yang Populer" (Apa yang biasanya salah dipikirkan orang?).',
      'Jelaskan "Mengapa Orang Cenderung Salah Memahaminya?" (Akar penyebab intuisi keliru).',
      'Sajikan "Fakta Ilmiah yang Sebenarnya" dengan bukti logis dan eksperimen pemikiran sederhana.',
      'Berikan "Analogi Pembenar" yang meluruskan pemahaman dalam ingatan pembaca.',
      'Buat 1 soal jebakan untuk membuktikan apakah pembaca sudah bebas dari miskonsepsi tersebut.',
    ],
    promptConstraints: [
      'Jangan mempermalukan orang yang memiliki miskonsepsi; gunakan pendekatan edukatif yang ramah.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan format pembanding [Mitos vs Fakta Ilmiah] yang tegas.',
    ],
    promptQualityBenchmarks: [
      'Menghilangkan kebiasaan salah konsep secara permanen.',
    ],
  },
  {
    id: 'mentor-bahasa-percakapan',
    title: 'Mentor Belajar Bahasa Asing Percakapan Nyata',
    description:
      'Latih kemampuan percakapan bahasa asing (Inggris/Arab/Jepang/Mandarin) dengan koreksi tata bahasa dan frasa natural penutur asli.',
    category: 'tutor-ujian',
    targetPersonas: ['siswa', 'mahasiswa'],
    isPopular: false,
    tags: ['Bahasa Asing', 'English Conversation', 'Speaking Practice', 'Percakapan'],
    defaultTopic: 'Simulasi Wawancara Beasiswa Kuliah Luar Negeri / Percakapan Sehari-hari',
    defaultGoal: 'Berlatih menjawab pertanyaan wawancara beasiswa dalam Bahasa Inggris dengan feedback instan',
    defaultContext: 'Persiapan wawancara beasiswa LPDP / AAS / Fulbright',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'santai',
    defaultOutputFormat: 'qa-flashcard',
    defaultLanguage: 'en',
    promptRole: 'Native Language Coach & Pewawancara Beasiswa Internasional Berpengalaman.',
    promptObjective:
      'Mengajak saya berdialog dalam bahasa target, mengoreksi kesalahan gramatikal saya secara halus, dan menyarankan frasa yang lebih alami (idiomatic).',
    promptInstructions: [
      'Lakukan dialog interaktif berbasis skenario peran.',
      'Setelah setiap kalimat saya, berikan respon percakapan alami.',
      'Jika ada kesalahan tata bahasa atau kosakata kaku, tambahkan kotak [Feedback Cepat: Koreksi Gramatika & Pilihan Kata yang Lebih Native].',
      'Ajukan 1 pertanyaan lanjutan yang menantang kelancaran berbicara saya.',
    ],
    promptConstraints: [
      'Jangan terlalu kaku seperti buku teks tata bahasa jadul; ajarkan bahasa yang benar-benar digunakan manusia penutur asli hari ini.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan format dialog dua arah dengan kotak feedback tips kosakata di bawahnya.',
    ],
    promptQualityBenchmarks: [
      'Meningkatkan rasa percaya diri berbicara bahasa asing tanpa takut salah.',
    ],
  },

  // =========================================================================
  // 6. PENELITIAN DAN TULISAN AKADEMIK (6 Templates)
  // =========================================================================
  {
    id: 'latar-belakang-rumusan-masalah',
    title: 'Perumusan Latar Belakang & Masalah Skripsi/Tesis',
    description:
      'Susun kerangka latar belakang piramida terbalik: dari fenomena umum, kesenjangan riset (research gap), hingga urgensi solusi.',
    category: 'penelitian-akademik',
    targetPersonas: ['mahasiswa', 'peneliti'],
    isPopular: true,
    tags: ['Skripsi', 'Latar Belakang', 'Research Gap', 'Rumusan Masalah'],
    defaultTopic: 'Pengaruh Penggunaan Media Pembelajaran Interaktif Berbasis AI terhadap Keterlibatan Siswa SMP',
    defaultGoal: 'Menyusun kerangka 4 paragraf piramida terbalik dan 3 rumusan masalah yang tajam',
    defaultContext: 'Proposal skripsi program studi Pendidikan Teknologi Informasi',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    customFields: [
      {
        id: 'pendekatanRiset',
        label: 'Pendekatan Riset',
        type: 'select',
        options: [
          { value: 'Kuantitatif Eksperimen', label: 'Kuantitatif Eksperimen' },
          { value: 'Kualitatif Deskriptif / Studi Kasus', label: 'Kualitatif Deskriptif / Studi Kasus' },
          { value: 'Research and Development (R&D)', label: 'Research and Development (R&D)' },
          { value: 'Mixed Methods Konvergen', label: 'Mixed Methods Konvergen' },
        ],
        defaultValue: 'Kuantitatif Eksperimen',
      },
    ],
    promptRole: 'Guru Besar Metodologi Penelitian & Reviewer Jurnal Ilmiah Bereputasi Internasional.',
    promptObjective:
      'Menyusun kerangka latar belakang penelitian yang kokoh, logis, dan secara gamblang memperlihatkan celah penelitian (research gap).',
    promptInstructions: [
      'Paragraf 1 (Idealita & Konteks Makro): Fenomena global/nasional dan landasan pentingnya topik.',
      'Paragraf 2 (Realita & Gejala Masalah): Fakta empiris di lapangan bahwa ada kesenjangan antara harapan dan kenyataan.',
      'Paragraf 3 (Research Gap & State of the Art): Apa yang telah diteliti oleh peneliti terdahulu dan apa yang belum terjawab.',
      'Paragraf 4 (Urgensi Solusi / Novelty): Mengapa penelitian yang Anda usulkan ini mendesak dan apa kebaruan yang ditawarkan.',
      'Rumuskan 3 Pertanyaan Penelitian / Rumusan Masalah yang spesifik, operasional, dan dapat diuji.',
      'Tuliskan Batasan Penelitian agar ruang lingkup tetap realistis.',
    ],
    promptConstraints: [
      'Gunakan alur logika piramida terbalik tanpa melompat antar gagasan.',
      'Hindari opini pribadi tanpa dasar ilmiah; tunjukkan di mana data statistik atau sitasi referensi harus dimasukkan.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan sub-heading teratur dengan panduan kalimat pembuka dan penutup tiap paragraf.',
    ],
    promptQualityBenchmarks: [
      'Dosen pembimbing skripsi langsung melihat kebaruan (novelty) dan urgensi penelitian dalam sekali baca.',
    ],
  },
  {
    id: 'literature-review-sintesis',
    title: 'Tinjauan Pustaka & Matriks Sintesis Jurnal',
    description:
      'Sintesiskan puluhan jurnal menjadi narasi tinjauan pustaka tematik (bukan sekadar daftar rangkuman per artikel).',
    category: 'penelitian-akademik',
    targetPersonas: ['mahasiswa', 'peneliti'],
    isPopular: true,
    tags: ['Literature Review', 'Tinjauan Pustaka', 'Matriks Sintesis', 'Jurnal'],
    defaultTopic: 'Faktor-Faktor yang Memengaruhi Keputusan Konsumen Menggunakan Dompet Digital (E-Wallet)',
    defaultGoal: 'Menyusun kerangka sintesis tematik dari model Technology Acceptance Model (TAM) dan UTAUT',
    defaultContext: 'Bab 2 Tinjauan Pustaka Skripsi Manajemen Pemasaran',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'kritis',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Spesialis Systematic Literature Review (SLR) & Analis Literatur Akademik.',
    promptObjective:
      'Menyusun matriks sintesis komparatif antar jurnal dan merajutnya menjadi narasi tinjauan pustaka tematik yang kohesif.',
    promptInstructions: [
      'Buat Tabel Matriks Sintesis Literatur (Kolom: Peneliti & Tahun, Variabel yang Diteliti, Metodologi, Temuan Utama, Keterbatasan).',
      'Identifikasi Pola Kesepakatan (Consensus) dan Perdebatan Hasil (Contradiction) antar peneliti terdahulu.',
      'Susun Narasi Tematik yang mengalir menggunakan kata hubung akademik (Sebaliknya, Sejalan dengan itu, Kendati demikian).',
      'Jelaskan Kerangka Konseptual / Hipotesis Kerja yang ditarik dari sintesis literatur tersebut.',
    ],
    promptConstraints: [
      'Dilarang membuat format "Peneliti A berkata X. Peneliti B berkata Y." Buatlah sintesis tematik terintegrasi.',
    ],
    promptOutputFormatGuidelines: [
      'Tabel matriks literatur diikuti paragraf analisis naratif berbobot.',
    ],
    promptQualityBenchmarks: [
      'Menghindari sindrom "daftar belanjaan pustaka" dan menunjukkan kemampuan telaah kritis tingkat tinggi.',
    ],
  },
  {
    id: 'desain-metodologi-penelitian',
    title: 'Desain Metodologi Penelitian & Instrumen Data',
    description:
      'Rancang Bab 3 metodologi penelitian lengkap: populasi, sampel, teknik sampling, instrumen, dan uji keabsahan data.',
    category: 'penelitian-akademik',
    targetPersonas: ['mahasiswa', 'peneliti'],
    isPopular: false,
    tags: ['Metodologi Penelitian', 'Kuantitatif', 'Kualitatif', 'Instrumen Data'],
    defaultTopic: 'Analisis Pengaruh Budaya Organisasi terhadap Kinerja Karyawan melalui Motivasi Kerja',
    defaultGoal: 'Menyusun Bab Metodologi Penelitian Kuantitatif dengan analisis jalur (Path Analysis / SEM-PLS)',
    defaultContext: 'Tesis Magister Manajemen, populasi 300 karyawan perbankan',
    defaultEducationLevel: 'Pascasarjana/S2-S3',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Konsultan Metodologi Riset & Statistik Terapan untuk Sains dan Sosial.',
    promptObjective:
      'Menyusun desain metodologi penelitian yang sistematis, teruji validitasnya, dan sesuai kaidah sains.',
    promptInstructions: [
      'Uraikan Jenis dan Desain Penelitian beserta alasan pemilihannya.',
      'Definisikan Populasi, Sampel, dan Rumus Penentuan Ukuran Sampel (misal rumus Slovin atau Hair et al.).',
      'Tentukan Teknik Sampling yang tepat (Probability vs Non-Probability).',
      'Rancang Definisi Operasional Variabel (DOV) dalam format tabel (Variabel, Dimensi, Indikator, Skala Ukur).',
      'Jelaskan Uji Validitas dan Reliabilitas Instrumen.',
      'Uraikan Teknik Analisis Data langkah demi langkah.',
    ],
    promptConstraints: [
      'Harus konsisten antara rumusan masalah, hipotesis, dan alat uji statistik yang dipilih.',
    ],
    promptOutputFormatGuidelines: [
      'Format standar Bab 3 Tesis/Skripsi lengkap dengan rumus dan tabel definisi operasional.',
    ],
    promptQualityBenchmarks: [
      'Memenuhi standar kelolosan sidang proposal komite etik dan komite pembimbing.',
    ],
  },
  {
    id: 'parafrase-akademik-antiplagiasi',
    title: 'Parafrase Akademik Bebas Plagiasi (Turnitin Safe)',
    description:
      'Ubah teks sumber menjadi kalimat akademik berstruktur baru tanpa mengubah makna esensial untuk menurunkan skor kemiripan.',
    category: 'penelitian-akademik',
    targetPersonas: ['mahasiswa', 'peneliti'],
    isPopular: true,
    tags: ['Parafrase', 'Anti Plagiasi', 'Turnitin', 'Sitasi'],
    defaultTopic: 'Definisi dan Teori Transformasi Digital menurut Ahli Manajemen Global',
    defaultGoal: 'Memparafrasekan 3 paragraf kutipan langsung menjadi narasi sintesis bergaya APA 7th edition',
    defaultContext: 'Penulisan naskah artikel jurnal internasional',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'kritis',
    defaultOutputFormat: 'essay-narrative',
    defaultLanguage: 'id',
    promptRole: 'Editor Jurnal Scopus & Spesialis Integritas Akademik.',
    promptObjective:
      'Melakukan parafrase mendalam pada teks yang diberikan: mengubah struktur kalimat, menggunakan kosakata formal bersinonim kaya, namun mempertahankan presisi makna ilmiah asli.',
    promptInstructions: [
      'Analisis gagasan utama dari teks sumber.',
      'Ubah struktur kalimat dari pasif ke aktif (atau sebaliknya) dan ubah susunan klausa pendukung.',
      'Gunakan sinonim akademik yang tepat dan presisi dalam konteks ilmu terkait.',
      'Sajikan 3 Variasi Parafrase berbeda (Variasi 1: Formal Padat, Variasi 2: Naratif Analitis, Variasi 3: Sintesis Ringkas).',
      'Sertakan contoh format sitasi dalam teks (In-text citation) standar APA 7th edition.',
    ],
    promptConstraints: [
      'Dilarang melakukan parafrase robotik (hanya menukar kata dengan thesaurus sembarangan). Kalimat harus enak dibaca manusia ilmiah.',
      'Hindari mengubah data statistik, angka, atau nama paten.',
    ],
    promptOutputFormatGuidelines: [
      'Tampilkan teks asli berdampingan dengan 3 variasi hasil parafrase.',
    ],
    promptQualityBenchmarks: [
      'Skor similarity Turnitin di bawah 5% pada bagian teks tersebut.',
    ],
  },
  {
    id: 'pembahasan-hasil-penelitian',
    title: 'Pembahasan Hasil Penelitian (Discussion & Synthesis)',
    description:
      'Bahas mengapa hasil data penelitian Anda seperti itu, bandingkan dengan teori dan penelitian sebelumnya, dan jelaskan implikasinya.',
    category: 'penelitian-akademik',
    targetPersonas: ['mahasiswa', 'peneliti'],
    isPopular: false,
    tags: ['Pembahasan', 'Hasil Penelitian', 'Diskusi Temuan', 'Implikasi'],
    defaultTopic: 'Temuan bahwa Pelatihan Guru Tidak Berpengaruh Signifikan terhadap Kinerja Siswa Tanpa Adanya Supervisi Kepala Sekolah',
    defaultGoal: 'Menyusun narasi pembahasan hasil uji hipotesis yang menolak hipotesis awal',
    defaultContext: 'Bab 4 Skripsi / Pembahasan Artikel Jurnal',
    defaultEducationLevel: 'Pascasarjana/S2-S3',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Penilai Ahli Bab Diskusi Riset & Editor Senior Reviewer Peer-Reviewed.',
    promptObjective:
      'Menyusun narasi pembahasan hasil (Discussion) yang tidak sekadar mengulang angka statistik di bab hasil, melainkan memaknai fenomena secara teoretis.',
    promptInstructions: [
      'Sajikan Ringkasan Temuan Empiris dalam 1 paragraf lugas.',
      'Jawab Pertanyaan "Mengapa Hasilnya Demikian?": Berikan penjelasan kausal berdasarkan dinamika lapangan.',
      'Bandingkan dengan Penelitian Terdahulu (Apakah temuan ini mengonfirmasi penelitian X atau membantah penelitian Y? Mengapa berbeda?).',
      'Uraikan Implikasi Teoretis (kontribusi terhadap ilmu) dan Implikasi Praktis (manfaat bagi praktisi).',
      'Kemukakan Keterbatasan Penelitian secara jujur dan beri rekomendasi untuk penelitian mendatang.',
    ],
    promptConstraints: [
      'Jangan hanya menulis tabel angka; pembahasan berfokus pada interpretasi makna dan filosofi data.',
    ],
    promptOutputFormatGuidelines: [
      'Gunakan alur paragraf argumentatif bertingkat.',
    ],
    promptQualityBenchmarks: [
      'Bagian paling kuat dan paling menarik dibaca dari keseluruhan skripsi/artikel.',
    ],
  },
  {
    id: 'abstrak-standar-imrad',
    title: 'Penyusunan Abstrak Standar Jurnal Internasional (IMRaD)',
    description:
      'Tuliskan abstrak padat 200-250 kata yang mencakup Background, Objectives, Methodology, Results, dan Conclusion beserta kata kunci.',
    category: 'penelitian-akademik',
    targetPersonas: ['mahasiswa', 'peneliti'],
    isPopular: true,
    tags: ['Abstrak', 'IMRaD', 'Scopus', 'Artikel Ilmiah'],
    defaultTopic: 'Efektivitas Model Flipped Classroom terhadap Kemampuan Pemecahan Masalah Matematika Siswa SMK',
    defaultGoal: 'Menyusun abstrak dwi-bahasa (Indonesia dan Inggris) standar jurnal terakreditasi SINTA / Scopus',
    defaultContext: 'Kelengkapan submit artikel ilmiah naskah skripsi',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Managing Editor Jurnal Ilmiah Internasional Terindeks Scopus & Web of Science.',
    promptObjective:
      'Menyusun abstrak terstruktur yang padat, memikat pembaca, dan memenuhi batasan kata (200-250 kata) secara ketat.',
    promptInstructions: [
      'Tuliskan Kalimat 1-2 (Introduction & Objective): Latar belakang singkat dan tujuan utama penelitian.',
      'Tuliskan Kalimat 3-4 (Methods): Desain riset, subjek/sampel, instrumen, dan teknik analisis.',
      'Tuliskan Kalimat 5-6 (Results): Temuan data paling signifikan (sertakan data numerik kunci jika kuantitatif).',
      'Tuliskan Kalimat 7 (Conclusion & Implication): Kesimpulan pokok dan dampak praktis hasil riset.',
      'Sajikan versi Bahasa Indonesia dan versi Bahasa Inggris akademik (Academic English) yang gramatikal elegan.',
      'Cantumkan 4-5 Kata Kunci (Keywords) yang relevan untuk optimasi pencarian database ilmiah.',
    ],
    promptConstraints: [
      'Dilarang mencantumkan singkatan tanpa kepanjangan, kutipan sitasi, atau rumus matematis rumit dalam abstrak.',
      'Patuhi batas maksimal 250 kata.',
    ],
    promptOutputFormatGuidelines: [
      'Format terbagi rapi: Judul, Abstrak Bahasa Indonesia, Keywords, Abstract English, Keywords.',
    ],
    promptQualityBenchmarks: [
      'Abstrak lolos skrining awal (desk review) editor jurnal tanpa revisi format.',
    ],
  },

  // =========================================================================
  // 7. PRESENTASI DAN ADMINISTRASI (5 Templates)
  // =========================================================================
  {
    id: 'outline-slide-presentasi',
    title: 'Outline Slide Presentasi Edukatif yang Memikat',
    description:
      'Struktur 10-12 slide presentasi yang visual, tidak membosankan, dilengkapi naskah pembicara (speaker notes) dan ide grafis.',
    category: 'presentasi-admin',
    targetPersonas: ['guru', 'mahasiswa', 'siswa'],
    isPopular: true,
    tags: ['Slide Presentasi', 'PowerPoint', 'Canva', 'Speaker Notes'],
    defaultTopic: 'Pengantar Kecerdasan Buatan & Etika Penggunaannya di Era Digital',
    defaultGoal: 'Menyusun struktur 10 slide presentasi 15 menit untuk seminar mahasiswa baru',
    defaultContext: 'Peserta mahasiswa baru yang aktif dan lebih menyukai visual daripada teks panjang',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'santai',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Konsultan Presentasi TEDx & Desainer Komunikasi Visual Edukasi.',
    promptObjective:
      'Merancang alur presentasi yang menjaga audiens tetap terjaga, antusias, dan memahami pesan kunci tanpa "death by PowerPoint".',
    promptInstructions: [
      'Rancang Alur Cerita (Story Arc): Hook pembuka, konflik/permasalahan, klimaks pemahaman, dan kesimpulan inspiratif.',
      'Untuk setiap slide (total 10 slide), tuliskan: [Nomor Slide, Judul Slide, Poin Teks Utama (maksimal 3 bullet pendek), Saran Visual / Grafis / Foto, dan Naskah Bicara Pembicara (Speaker Notes)].',
      'Sertakan Slide Interaktif (Slide kuis cepat atau pertanyaan reflektif untuk audiens).',
      'Tuliskan kalimat penutup yang membekas (Call to Action).',
    ],
    promptConstraints: [
      'Haram menumpuk lebih dari 30 kata di dalam satu slide.',
      'Setiap slide harus memiliki satu pesan utama tunggal.',
    ],
    promptOutputFormatGuidelines: [
      'Sajikan dalam tabel matriks slide yang mudah disalin ke PowerPoint atau Canva.',
    ],
    promptQualityBenchmarks: [
      'Audiens mengingat pesan utama presentasi bahkan seminggu setelah acara.',
    ],
  },
  {
    id: 'naskah-pidato-sambutan-guru',
    title: 'Naskah Pidato / Sambutan Guru & Pengantar Kelas',
    description:
      'Naskah pidato yang menyentuh hati, inspiratif, dan membakar semangat murid di upacara, kelulusan, atau hari pertama sekolah.',
    category: 'presentasi-admin',
    targetPersonas: ['guru'],
    isPopular: false,
    tags: ['Pidato', 'Sambutan', 'Inspirasi', 'Hari Guru', 'Kelulusan'],
    defaultTopic: 'Sambutan Kepala Sekolah / Wali Kelas pada Hari Pertama Masuk Sekolah Tahun Ajaran Baru',
    defaultGoal: 'Menyusun pidato 5 menit yang menghangatkan suasana dan memotivasi siswa untuk berani bermimpi',
    defaultContext: 'Upacara pembukaan tahun ajaran baru, dihadiri siswa dan wali murid',
    defaultEducationLevel: 'SMP',
    defaultTone: 'naratif',
    defaultOutputFormat: 'essay-narrative',
    defaultLanguage: 'id',
    promptRole: 'Penulis Pidato Profesional (Speechwriter) untuk Tokoh Pendidikan & Motivator Nasional.',
    promptObjective:
      'Menulis naskah pidato lisan yang mengalir merdu saat diucapkan, sarat empati, dan tidak klise.',
    promptInstructions: [
      'Tuliskan Salam Pembuka yang santun dan inklusif.',
      'Awali dengan Cerita Pendek atau Renungan Hangat yang langsung menarik atensi hadirin.',
      'Sampaikan 3 Pesan Moral / Nilai Kehidupan utama dengan bahasa yang puitis namun membumi.',
      'Sertakan jeda intonasi `[Jeda sejenak untuk senyum]` atau `[Beri penekanan suara]` untuk memandu pembaca.',
      'Tutup dengan Doa dan Harapan Tulus yang membangkitkan rasa optimisme bersama.',
    ],
    promptConstraints: [
      'Durasi pembacaan sekitar 5-7 menit (sekitar 500-700 kata). Hindari kalimat majemuk beranak-pinak yang membuat pembicara kehabisan napas.',
    ],
    promptOutputFormatGuidelines: [
      'Format teks berparagraf dengan instruksi panggung/intonasi di dalam tanda kurung siku.',
    ],
    promptQualityBenchmarks: [
      'Mampu menyentuh emosi audiens dan meninggalkan kesan mendalam.',
    ],
  },
  {
    id: 'surat-edukasi-laporan-sekolah',
    title: 'Surat Undangan & Laporan Komunikasi Resmi Sekolah',
    description:
      'Format persuratan resmi institusi pendidikan: undangan pertemuan orang tua, permohonan izin kegiatan, atau laporan evaluasi.',
    category: 'presentasi-admin',
    targetPersonas: ['guru'],
    isPopular: false,
    tags: ['Administrasi', 'Surat Resmi', 'Wali Murid', 'Laporan'],
    defaultTopic: 'Undangan Sosialisasi Program Proyek Penguatan Profil Pelajar Pancasila (P5) kepada Orang Tua Siswa',
    defaultGoal: 'Menyusun surat dinas resmi sekolah yang komunikatif dan persuasif',
    defaultContext: 'Ditujukan kepada orang tua siswa kelas 10 SMA',
    defaultEducationLevel: 'SMA/SMK',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Sekretaris Administrasi Sekolah Berpengalaman & Ahli Tata Naskah Dinas Pendidikan.',
    promptObjective:
      'Menyusun naskah surat resmi yang baku sesuai kaidah tata naskah dinas, rapi, dan mudah dipahami oleh penerima surat.',
    promptInstructions: [
      'Sediakan Struktur Kop Surat / Kepala Surat resmi.',
      'Cantumkan Nomor, Lampiran, dan Perihal Surat yang jelas.',
      'Tuliskan Salam Pembuka dan Paragraf Pengantar maksud surat.',
      'Cantumkan Rincian Agenda Kegiatan dalam format tabel/poin (Hari/Tanggal, Waktu, Tempat, Agenda Acara).',
      'Tuliskan Imbauan Konfirmasi Kehadiran dan nomor kontak narahubung (PIC).',
      'Sediakan Format Tanda Tangan Kepala Sekolah / Panitia lengkap dengan NIP.',
    ],
    promptConstraints: [
      'Gunakan bahasa baku yang santun dan mengedepankan asas kemitraan antara sekolah dan keluarga.',
    ],
    promptOutputFormatGuidelines: [
      'Template siap isi dengan tanda `[...]` untuk bagian data yang disesuaikan.',
    ],
    promptQualityBenchmarks: [
      'Bebas kesalahan ketik dan memenuhi standar tata naskah dinas.',
    ],
  },
  {
    id: 'silabus-rps-kuliah',
    title: 'Rancangan Pembelajaran Semester (RPS) Kuliah',
    description:
      'Format baku RPS perguruan tinggi berbasis Outcome-Based Education (OBE) lengkap dengan CPL, CPMK, materi, dan asesmen.',
    category: 'presentasi-admin',
    targetPersonas: ['peneliti', 'guru'],
    isPopular: false,
    tags: ['RPS', 'Silabus', 'Perguruan Tinggi', 'OBE', 'Kurikulum'],
    defaultTopic: 'Mata Kuliah Kecerdasan Buatan dan Sains Data untuk Pendidikan (3 SKS)',
    defaultGoal: 'Menyusun silabus 16 minggu pertemuan (termasuk UTS dan UAS) berorientasi luaran portofolio',
    defaultContext: 'Program Studi S1 Pendidikan / Ilmu Komputer',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'formal',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Pengembang Kurikulum Pendidikan Tinggi & Asesor Akreditasi OBE.',
    promptObjective:
      'Merancang Rencana Pembelajaran Semester (RPS) yang selaras dengan standar akreditasi LAM/BAN-PT.',
    promptInstructions: [
      'Rumuskan Capaian Pembelajaran Lulusan (CPL) dan Capaian Pembelajaran Mata Kuliah (CPMK).',
      'Petakan 16 Pekan Perkuliahan ke dalam tabel: [Minggu ke-, Kemampuan Akhir (Sub-CPMK), Bahan Kajian/Materi, Bentuk Pembelajaran & Waktu, Pengalaman Belajar Mahasiswa, Kriteria Penilaian, Bobot Nilai].',
      'Rancang Pekan 8 (UTS) dan Pekan 16 (UAS / Evaluasi Portofolio Akhir).',
      'Cantumkan Daftar Pustaka Utama dan Pustaka Pendukung (buku teks dan jurnal 5 tahun terakhir).',
    ],
    promptConstraints: [
      'Pastikan beban belajar mahasiswa seimbang sesuai perhitungan 1 SKS (50 menit tatap muka, 60 menit terstruktur, 60 menit mandiri).',
    ],
    promptOutputFormatGuidelines: [
      'Tabel matriks RPS standar Kemendikbudristek.',
    ],
    promptQualityBenchmarks: [
      'Siap diverifikasi oleh Badan Penjaminan Mutu universitas.',
    ],
  },
  {
    id: 'notulen-rapat-evaluasi',
    title: 'Format Notulen Rapat & Rencana Tindak Lanjut (RTL)',
    description:
      'Dokumentasikan hasil rapat dewan guru atau rapat tim riset menjadi ringkasan keputusan, penanggung jawab, dan tenggat waktu.',
    category: 'presentasi-admin',
    targetPersonas: ['guru', 'peneliti'],
    isPopular: false,
    tags: ['Notulen', 'Rapat Guru', 'Action Plan', 'Akuntabilitas'],
    defaultTopic: 'Rapat Evaluasi Tengah Semester dan Persiapan Pekan Olahraga & Seni Sekolah',
    defaultGoal: 'Menyusun format notulen rapat yang padat keputusan dan matriks penanggung jawab',
    defaultContext: 'Rapat koordinasi guru dan staf tata usaha',
    defaultEducationLevel: 'Umum',
    defaultTone: 'formal',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Notulis Profesional & Konsultan Manajemen Akuntabilitas Rapat Organisasi.',
    promptObjective:
      'Mengubah dinamika diskusi rapat yang panjang menjadi dokumen notulen yang ringkas, jelas keputusannya, dan mudah diawasi eksekusinya.',
    promptInstructions: [
      'Cantumkan Identitas Rapat (Nama Agenda, Hari/Tanggal, Waktu, Tempat, Pimpinan Rapat, Jumlah Hadir).',
      'Tuliskan Ringkasan Poin Pembahasan Pokok per agenda.',
      'Sajikan Matriks Keputusan & Rencana Tindak Lanjut (RTL) dalam format tabel: [No, Keputusan/Tindakan, PIC (Penanggung Jawab), Batas Waktu (Deadline), Indikator Selesai].',
      'Catat hal-hal yang ditunda ke rapat berikutnya.',
    ],
    promptConstraints: [
      'Hindari mencatat curahan hati peserta; fokus murni pada argumen pokok dan kesepakatan final rapat.',
    ],
    promptOutputFormatGuidelines: [
      'Format dokumen ringkas dengan tabel rencana aksi di bagian akhir.',
    ],
    promptQualityBenchmarks: [
      'Seluruh peserta rapat langsung tahu persis apa tugas mereka setelah membaca notulen ini.',
    ],
  },

  // =========================================================================
  // 8. PRODUKTIVITAS (5 Templates)
  // =========================================================================
  {
    id: 'email-komunikasi-wali-murid',
    title: 'Pembuat Email / Pesan Komunikasi Positif Wali Murid',
    description:
      'Tuliskan pesan WhatsApp atau email kepada orang tua tentang perkembangan belajar anak secara suportif, solutif, dan bebas konflik.',
    category: 'produktivitas',
    targetPersonas: ['guru'],
    isPopular: true,
    tags: ['Komunikasi Guru-Ortu', 'Parenting', 'Email', 'WhatsApp'],
    defaultTopic: 'Memberitahukan Penurunan Nilai dan Kurangnya Konsentrasi Siswa di Kelas dengan Pendekatan Solutif',
    defaultGoal: 'Menyusun pesan WhatsApp santun menggunakan metode sandwich feedback (pujian-evaluasi-ajakan kolaborasi)',
    defaultContext: 'Wali kelas berkomunikasi dengan orang tua siswa kelas 8 SMP',
    defaultEducationLevel: 'SMP',
    defaultTone: 'santai',
    defaultOutputFormat: 'essay-narrative',
    defaultLanguage: 'id',
    promptRole: 'Konselor Hubungan Sekolah-Keluarga & Komunikator Empatik Guru.',
    promptObjective:
      'Menyusun naskah pesan komunikasi kepada wali murid yang tidak memicu kepanikan atau defensif, melainkan membangun sinergi saling mendukung.',
    promptInstructions: [
      'Gunakan Teknik Sandwich Feedback: Awali dengan mengapresiasi kelebihan/karakter positif anak di sekolah.',
      'Sampaikan tantangan yang sedang dihadapi siswa secara objektif berdasar data pengamatan nyata (bukan menghakimi).',
      'Tawarkan solusi kemitraan: apa yang bisa dibantu sekolah dan apa yang dapat didukung orang tua di rumah.',
      'Buka ruang untuk berdiskusi lebih lanjut dengan jadwal yang fleksibel.',
      'Sajikan versi pesan formal (Email) dan versi pesan semi-formal (WhatsApp/Telegram).',
    ],
    promptConstraints: [
      'Haram menyudutkan atau menyalahkan pola asuh orang tua. Fokus 100% pada kesejahteraan dan kemajuan siswa.',
    ],
    promptOutputFormatGuidelines: [
      'Tampilkan 2 variasi format pesan siap salin.',
    ],
    promptQualityBenchmarks: [
      'Orang tua merasa dihargai dan tergerak untuk mendampingi anaknya belajar di rumah.',
    ],
  },
  {
    id: 'manajemen-waktu-guru-dosen',
    title: 'Penyusun Rencana Kerja Mingguan Pendidik (Time Blocking)',
    description:
      'Atur beban mengajar, koreksi tugas, administrasi, dan waktu pribadi dengan metode Time Blocking agar terhindar dari stres kronis.',
    category: 'produktivitas',
    targetPersonas: ['guru', 'peneliti'],
    isPopular: false,
    tags: ['Time Blocking', 'Work-Life Balance', 'Manajemen Stres', 'Jadwal Kerja'],
    defaultTopic: 'Mengatur Waktu Mengajar 24 JP, Memeriksa 120 Lembar Tugas, dan Menulis Proposal Penelitian',
    defaultGoal: 'Menyusun jadwal mingguan Senin-Jumat dengan alokasi deep work dan batas waktu tegas',
    defaultContext: 'Guru/Dosen yang merasa selalu kekurangan waktu dan sering lembur di akhir pekan',
    defaultEducationLevel: 'Umum',
    defaultTone: 'sederhana',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Pelatih Efisiensi Kerja Pendidik & Konsultan Anti-Burnout Akademisi.',
    promptObjective:
      'Menata ritme kerja pendidik agar seluruh kewajiban profesional tuntas di hari kerja tanpa mengorbankan waktu istirahat bersama keluarga.',
    promptInstructions: [
      'Identifikasi Blok Waktu Mengajar Tetap (Fixed Commitment).',
      'Alokasikan 2 Blok Deep Work (90 menit fokus penuh untuk pekerjaan kognitif berat seperti menyusun modul atau riset).',
      'Kelompokkan Tugas Administratif Rutin (Batching: balas pesan, input presensi, koreksi cepat) ke dalam 1 jam sore.',
      'Tentukan "Shutdown Ritual" (Waktu berhenti kerja yang tegas setiap sore).',
      'Sertakan strategi "Koreksi Efisien" (misal peer assessment atau rubrik ceklis) untuk memangkas waktu menilai lembar jawaban.',
    ],
    promptConstraints: [
      'Jangan membuat jadwal yang terlalu padat tanpa jeda bernapas; sediakan buffer time 30 menit setiap hari untuk insiden tak terduga.',
    ],
    promptOutputFormatGuidelines: [
      'Tabel jadwal mingguan Senin sampai Jumat dilengkapi pembagian warna prioritas.',
    ],
    promptQualityBenchmarks: [
      'Mengurangi jam kerja lembur akhir pekan hingga nol.',
    ],
  },
  {
    id: 'pembangkit-ide-proyek-ilmiah',
    title: 'Pembangkit Ide Proyek Kreatif & Tema Karya Ilmiah',
    description:
      'Hasilkan 5 ide topik penelitian atau proyek inovatif yang orisinal, berdampak sosial, dan realistis dikerjakan.',
    category: 'produktivitas',
    targetPersonas: ['mahasiswa', 'siswa', 'peneliti'],
    isPopular: true,
    tags: ['Brainstorming', 'Ide Skripsi', 'Inovasi', 'Lomba Karya Tulis'],
    defaultTopic: 'Pemanfaatan Limbah Pertanian Lokal untuk Kemasan Ramah Lingkungan (Biodegradable)',
    defaultGoal: 'Menghasilkan 5 judul proposal lomba karya tulis ilmiah remaja / skripsi yang unik dan aplikatif',
    defaultContext: 'Siswa SMA / Mahasiswa yang bingung mencari tema lomba karya tulis ilmiah',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'kritis',
    defaultOutputFormat: 'markdown-table',
    defaultLanguage: 'id',
    promptRole: 'Juri Kompetisi Inovasi Sains Nasional & Mentor Brainstorming Kreatif.',
    promptObjective:
      'Membantu pembelajar menemukan ide riset atau proyek yang belum banyak digarap namun memiliki urgensi tinggi di masyarakat.',
    promptInstructions: [
      'Hasilkan 5 Konsep Ide Berbeda dari topik yang diberikan.',
      'Untuk setiap ide, jabarkan: [Judul Usulan yang Catchy & Akademik, Latar Belakang Masalah Riil, Solusi Kebaruan/Inovasi, Metode Pelaksanaan Sederhana, dan Dampak Nyata bagi Masyarakat].',
      'Beri rating Kelayakan Eksekusi (Biaya, Waktu, Ketersediaan Alat).',
      'Sebutkan potensi kendala teknis dan cara mengatasinya.',
    ],
    promptConstraints: [
      'Hindari ide yang terlalu klise yang sudah ribuan kali diteliti orang lain.',
    ],
    promptOutputFormatGuidelines: [
      'Tabel komparasi 5 ide inovatif diikuti penjabaran detail per konsep.',
    ],
    promptQualityBenchmarks: [
      'Setidaknya ada 2 ide yang langsung siap diajukan ke proposal hibah atau kompetisi.',
    ],
  },
  {
    id: 'asisten-pengecekan-tata-bahasa',
    title: 'Asisten Pengecekan Tata Bahasa & Kejelasan Akademik',
    description:
      'Koreksi ketepatan PUEBI/EYD edisi terbaru, struktur kalimat efektif, kebakuan istilah, dan kejelasan alur paragraf teks Anda.',
    category: 'produktivitas',
    targetPersonas: ['mahasiswa', 'peneliti', 'guru'],
    isPopular: false,
    tags: ['Proofreading', 'EYD', 'PUEBI', 'Tata Bahasa', 'Editing'],
    defaultTopic: 'Paragraf Pembahasan Skripsi tentang Analisis Regresi dan Uji Multikolinearitas',
    defaultGoal: 'Memeriksa dan memperbaiki tata bahasa, kalimat bertele-tele, dan ketepatan ejaan EYD',
    defaultContext: 'Naskah draf skripsi sebelum dikirim ke dosen penguji',
    defaultEducationLevel: 'Sarjana/S1',
    defaultTone: 'formal',
    defaultOutputFormat: 'full-document',
    defaultLanguage: 'id',
    promptRole: 'Penyelaras Bahasa (Proofreader) & Editor Senior Penerbit Buku Akademik Nasional.',
    promptObjective:
      'Memoles draf tulisan agar memenuhi kaidah bahasa Indonesia ilmiah yang lugas, presisi, dan sesuai EYD Edisi V.',
    promptInstructions: [
      'Identifikasi Kesalahan Ejaan, Tanda Baca, dan Penulisan Kata Baku (misal "efektif" bukan "efektip", "analisis" bukan "analisa").',
      'Pangkas Kalimat Bertele-tele (Wordiness) menjadi kalimat efektif yang tajam.',
      'Perbaiki Kalimat Rancu / Menggantung (Kalimat tanpa predikat yang jelas).',
      'Sajikan Tabel Perbandingan: [Teks Asli, Teks Hasil Revisi, dan Alasan Kaidah Kebahasaannya].',
      'Berikan versi Teks Final Bersih yang siap langsung disalin.',
    ],
    promptConstraints: [
      'Pertahankan substansi dan makna gagasan penulis asli; jangan mengubah kesimpulan ilmiahnya.',
    ],
    promptOutputFormatGuidelines: [
      'Tabel koreksi detail disusul dengan blok teks utuh hasil perbaikan.',
    ],
    promptQualityBenchmarks: [
      'Teks terbaca profesional, renyah, dan terbebas dari kesalahan elementer.',
    ],
  },
  {
    id: 'rekap-evaluasi-refleksi-kelas',
    title: 'Format Rekap Evaluasi & Jurnal Refleksi Mengajar Mingguan',
    description:
      'Dokumentasikan apa yang berhasil, apa yang gagal, dan apa yang perlu diperbaiki di kelas Anda dengan kerangka refleksi Gibbs.',
    category: 'produktivitas',
    targetPersonas: ['guru'],
    isPopular: false,
    tags: ['Refleksi Guru', 'Siklus Gibbs', 'Pengembangan Diri', 'PTK'],
    defaultTopic: 'Evaluasi Pembelajaran Matematika Materi Pecahan yang Kurang Direspon Siswa',
    defaultGoal: 'Menyusun jurnal reflektif mingguan menggunakan siklus Gibbs untuk perbaikan pertemuan berikutnya',
    defaultContext: 'Guru SD Kelas 4 yang ingin meningkatkan keterlibatan siswa',
    defaultEducationLevel: 'SD',
    defaultTone: 'naratif',
    defaultOutputFormat: 'step-by-step',
    defaultLanguage: 'id',
    promptRole: 'Mentor Pengembangan Keprofesian Berkelanjutan (PKB) Guru & Fasilitator Refleksi Gibbs.',
    promptObjective:
      'Membimbing guru menyusun jurnal refleksi yang jujur dan transformatif, yang dapat dijadikan bahan Penelitian Tindakan Kelas (PTK).',
    promptInstructions: [
      'Tahap 1 (Deskripsi): Apa yang sebenarnya terjadi di kelas selama sesi pembelajaran?',
      'Tahap 2 (Perasaan): Apa yang Anda rasakan sebelum, saat, dan sesudah sesi mengajar?',
      'Tahap 3 (Evaluasi): Apa hal baik yang berjalan lancar dan apa hal buruk yang tidak berjalan sesuai rencana?',
      'Tahap 4 (Analisis): Mengapa hal itu terjadi? Apa faktor pemicu utama dari guru, siswa, atau lingkungan?',
      'Tahap 5 (Kesimpulan): Apa alternatif tindakan lain yang sebenarnya bisa dilakukan?',
      'Tahap 6 (Rencana Aksi): Jika situasi yang sama terulang minggu depan, apa tindakan konkret yang akan Anda lakukan?',
    ],
    promptConstraints: [
      'Refleksi harus berfokus pada solusi konstruktif, bukan sekadar keluhan tanpa arah.',
    ],
    promptOutputFormatGuidelines: [
      'Format jurnal 6 langkah Siklus Gibbs terstruktur.',
    ],
    promptQualityBenchmarks: [
      'Dapat langsung diarsipkan sebagai bukti portofolio kinerja guru.',
    ],
  },
];
