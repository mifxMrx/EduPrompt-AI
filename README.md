# 🎓 EduPrompt AI — Website Generator Prompt Edukasi & Riset Gratis

> **Platform generator prompt AI cerdas berbasis standar pedagogis modern untuk Guru, Siswa, Mahasiswa, dan Peneliti.**  
> Hasilkan prompt terstruktur dan berbobot tanpa API key, siap disalin dan dijalankan langsung di [Google Gemini](https://gemini.google.com/) maupun [OpenAI ChatGPT](https://chatgpt.com/).

---

## 🌟 Fitur Utama

- **100% Bebas API Key & Gratis Selamanya**  
  Tidak memerlukan OpenAI API, Gemini API, akun berbayar, atau backend server. Seluruh mesin generator berjalan 100% di browser Anda (*client-side*).

- **4 Profil Pengguna yang Disesuaikan**
  1. 👨‍🏫 **Guru & Pendidik:** Modul Ajar Kurikulum Merdeka, LKPD, RPP, soal HOTS, dan asesmen autentik.
  2. 🎒 **Siswa Sekolah:** Tutor belajar interaktif, analogi sederhana (Feynman), latihan soal bertahap, dan rangkuman ujian.
  3. 🎓 **Mahasiswa:** Literature review skripsi, kritik jurnal, olah data statistik, dan slide seminar proposal.
  4. 🔬 **Peneliti & Dosen:** Metodologi penelitian, kerangka IMRaD, perumusan masalah, parafrase bebas plagiasi, dan draft artikel jurnal.

- **8 Kategori Prompt Komprehensif (46+ Template Aktif)**
  1. *Modul Ajar & Perencanaan Pembelajaran* (6 template)
  2. *LKPD & Bahan Ajar Eksploratif* (6 template)
  3. *Bank Soal & Rubrik Penilaian Autentik* (6 template)
  4. *Rangkuman & Penjelasan Materi Berkonsep* (6 template)
  5. *Tutor Belajar & Persiapan Ujian (Sokratik & Active Recall)* (6 template)
  6. *Penelitian & Tulisan Akademik (Skripsi, Tesis, Jurnal)* (6 template)
  7. *Presentasi & Administrasi Sekolah/Kampus* (5 template)
  8. *Produktivitas & Manajemen Waktu Edukator* (5 template)

- **Mesin Generator 9-Komponen Berstandar Industri**  
  Menghasilkan prompt profesional berdasarkan arsitektur prompt engineering:
  - `[1. PERAN AI / AI PERSONA]`
  - `[2. TUJUAN UTAMA / OBJECTIVE]`
  - `[3. KONTEKS & SASARAN AUDIENS]`
  - `[4. PENDEKATAN & GAYA BAHASA]`
  - `[5. INSTRUKSI SPESIFIK & LANGKAH KERJA]`
  - `[6. BATASAN & ATURAN KETAT (CONSTRAINTS)]`
  - `[7. FORMAT KELUARAN (OUTPUT FORMAT)]`
  - `[8. BAHASA PENYAMPAIAN]`
  - `[9. KRITERIA KEBERHASILAN (QUALITY BENCHMARKS)]`

- **Editor Hasil Prompt Interaktif**
  - Teks hasil dapat langsung diedit di tempat sebelum disalin.
  - Penghitung kata (*word count*) dan karakter otomatis.
  - Tombol **Salin Prompt** dengan umpan balik animasi selebrasi confetti dan toast.
  - Tombol **Unduh TXT** dengan penamaan file bersih dan rapi.
  - Pengubah variasi instan (*Standar, Komprehensif, Ringkas, Kaya Contoh, Fokus HOTS*).
  - Tombol **Lanjutkan di Gemini** & **Lanjutkan di ChatGPT** yang menyalin prompt terlebih dahulu lalu membuka tab resmi AI tujuan.

- **Studio Kustom (Bebas)**  
  Fitur bagi pengguna tingkat lanjut untuk menyusun prompt dari nol dengan kontrol penuh atas seluruh parameter tanpa batasan template.

- **Penyimpanan Riwayat & Favorit Lokal**  
  Menggunakan `localStorage` browser sehingga prompt tersimpan otomatis, dapat dicari, dibintang sebagai favorit, dimuat kembali ke editor, atau dihapus kapan saja.

- **Dukungan Multibahasa**  
  Mendukung keluaran dalam Bahasa Indonesia 🇮🇩, English 🇬🇧, Arab (العربية) 🇸🇦, Jepang (日本語) 🇯🇵, Mandarin (中文) 🇨🇳, serta opsi bahasa kustom.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) dengan `@tailwindcss/vite`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations & Effects:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Local Storage:** Native browser `localStorage` API (Zero tracking, 100% offline-ready)

---

## 📁 Struktur Direktori

```text
Edueduprompt-ai/
├── public/                 # Static assets & icons
├── scripts/
│   └── test-verify.ts      # Automated verification test suite
├── src/
│   ├── components/
│   │   ├── CategoryFilter.tsx     # Filter kategori 8 bidang + Populer
│   │   ├── CustomBuilder.tsx      # Studio pembuat prompt kustom
│   │   ├── Footer.tsx             # Footer & disclaimer edukatif
│   │   ├── Hero.tsx               # Banner utama & quick topic input
│   │   ├── HistoryModal.tsx       # Modal riwayat & favorit lokal
│   │   ├── Navbar.tsx             # Navigasi & quick profile switcher
│   │   ├── PersonaSelector.tsx    # Kartu profil (Guru, Siswa, Mhs, Peneliti)
│   │   ├── PromptForm.tsx         # Formulir dinamis & parameter kustom
│   │   ├── PromptGuideModal.tsx   # Panduan pedagogis & taksonomi Bloom
│   │   ├── PromptResult.tsx       # Editor prompt, salin, unduh, & link AI
│   │   ├── TemplateCard.tsx       # Kartu kartu template siap pakai
│   │   └── Toast.tsx              # Notifikasi toast mengambang
│   ├── data/
│   │   ├── categories.ts          # Metadata 8 kategori prompt
│   │   ├── options.ts             # Opsi jenjang, nada, format, bahasa, variasi
│   │   ├── personas.ts            # Data 4 profil persona pengguna
│   │   ├── templates.ts           # 46 template prompt kurikulum & riset
│   │   └── tips.ts                # Tips prompt engineering anti-halusinasi
│   ├── types/
│   │   └── index.ts               # Definisi TypeScript type & interface
│   ├── utils/
│   │   ├── export.ts              # Clipboard, TXT downloader, link Gemini/ChatGPT
│   │   ├── generator.ts           # Mesin penyusun prompt 9-komponen
│   │   └── storage.ts             # Manajemen riwayat & bookmark localStorage
│   ├── App.tsx                    # Komponen induk & orkestrasi status
│   ├── index.css                  # Tema Tailwind CSS & custom scrollbar
│   └── main.tsx                   # React DOM entrypoint
├── index.html                     # HTML5 template & SEO meta tags
├── package.json                   # Dependensi & NPM scripts
├── tsconfig.json                  # Konfigurasi TypeScript
└── vite.config.ts                 # Konfigurasi bundler Vite
```

---

## 🚀 Panduan Instalasi & Menjalankan Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18.0.0 atau yang lebih baru.
- NPM (otomatis terpasang bersama Node.js).

### Langkah Menjalankan:

1. **Clone atau buka folder proyek:**
   ```bash
   cd Edueduprompt-ai
   ```

2. **Pasang dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan lokal (Dev Server):**
   ```bash
   npm run dev
   ```
   Buka peramban Anda di alamat: `http://localhost:5173/`

4. **Uji build produksi dan pemeriksaan tipe:**
   ```bash
   npm run build
   ```

5. **Pratinjau build produksi lokal:**
   ```bash
   npm run preview
   ```

---

## ☁️ Panduan Deployment ke Vercel

EduPrompt AI adalah Single Page Application (SPA) berbasis frontend statis sehingga sangat cocok dideploy gratis di **Vercel** dengan kecepatan CDN global.

### Opsi A: Deploy Menggunakan Vercel Dashboard (Rekomendasi)
1. Unggah kode ke repositori GitHub / GitLab / Bitbucket Anda.
2. Masuk ke dashboard [vercel.com](https://vercel.com).
3. Klik tombol **"Add New..."** > **"Project"**.
4. Impor repositori GitHub Anda.
5. Vercel akan secara otomatis mendeteksi framework **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Klik **"Deploy"**. Dalam hitungan detik website akan aktif dengan URL `https://nama-proyek.vercel.app`.

### Opsi B: Deploy Menggunakan Vercel CLI
```bash
npm install -g vercel
vercel
# Untuk rilis produksi langsung:
vercel --prod
```

---

## ⚡ Panduan Deployment ke Cloudflare Pages

EduPrompt AI dapat dideploy dengan mudah di **Cloudflare Pages**:

### Pengaturan Build di Cloudflare Pages Dashboard:
1. Hubungkan akun GitHub Anda ke Cloudflare Pages (**Workers & Pages** > **Create application** > **Pages** > **Connect to Git**).
2. Pilih repositori `Edueduprompt-ai`.
3. Di bagian **Build settings**:
   - **Framework preset:** `Vite` (atau `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (atau kosongkan jika file berada di root repo)
4. Di bagian **Environment variables (Opsional tapi direkomendasikan):**
   - Tambahkan variabel: `NODE_VERSION` dengan nilai `20` (proyek sudah menyediakan berkas `.nvmrc`).
5. Klik **"Save and Deploy"**.

---

## 🧪 Laporan Pengujian Otomatis

Seluruh logika bisnis telah divalidasi menggunakan suite pengujian `scripts/test-verify.ts`:
- ✅ **Test 1 - Jumlah Template:** 46 template berkualitas tinggi (melebihi batas minimal 40).
- ✅ **Test 2 - Cakupan Kategori:** Seluruh 8 kategori utama terisi penuh template operasional.
- ✅ **Test 3 - Cakupan Profil Pengguna:** Guru (31), Siswa (15), Mahasiswa (27), Peneliti (14).
- ✅ **Test 4 - Dukungan Bahasa:** Lolos pengujian keluaran untuk Bahasa Indonesia, Inggris, Arab, Jepang, Mandarin, dan Kustom.
- ✅ **Test 5 - Variasi Parameter:** Lolos uji 5 variasi prompt (*Standar, Komprehensif, Ringkas, Contoh Nyata, Fokus HOTS*).
- ✅ **Test 6 - Studio Kustom:** Lolos uji penyusunan prompt kustom bebas tanpa template.
- ✅ **Test 7 - Kompilasi TypeScript & Vite Build:** 0 error, build lulus dalam waktu ~1.6 detik.

---

## 🔒 Kebijakan Privasi & Etika Penggunaan

- **Bukan API AI Langsung:** EduPrompt AI adalah generator kerangka instruksi prompt (*prompt engineering assistant*), bukan model AI backend itu sendiri. Kami secara transparan menyatakan bahwa kami tidak memproses prompt menggunakan server rahasia, melainkan merancang teks instruksi terbaik untuk Anda gunakan di model AI resmi.
- **Privasi Mutlak:** Tidak ada data input atau topik pencarian Anda yang dikirim ke server pihak ketiga. Semua data tetap berada di komputer Anda.

---

## 📄 Lisensi
Hak Cipta © 2026 EduPrompt AI. Lisensi Terbuka untuk Dunia Pendidikan Indonesia.
