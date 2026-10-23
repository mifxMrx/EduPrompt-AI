import type {
  PromptTemplate,
  FormValues,
  Persona,
  LanguageCode,
} from '../types';
import { TONE_STYLES, OUTPUT_FORMATS, VARIATIONS } from '../data/options';

export function getLanguageInstruction(language: LanguageCode, customLanguage?: string): string {
  switch (language) {
    case 'id':
      return 'Seluruh keluaran wajib disusun secara utuh dalam Bahasa Indonesia yang baku, komunikatif, dan sesuai kaidah tata bahasa Indonesia yang baik.';
    case 'en':
      return 'The entire output must be crafted completely in natural, grammatically flawless, and professional/academic English.';
    case 'ar':
      return 'يجب تقديم المخرجات كاملة باللغة العربية الفصحى المعاصرة وبأسلوب أكاديمي دقيق وواضح.';
    case 'ja':
      return 'すべての出力は、正確かつ自然な現代日本語（丁寧で分かりやすい学術的・教育的トーン）で作成してください。';
    case 'zh':
      return '所有生成内容必须完全使用规范、流畅、学术性强的现代标准中文（普通话）呈现。';
    case 'custom':
      return `Seluruh materi keluaran wajib disusun secara utuh dalam bahasa: ${
        customLanguage?.trim() || 'Bahasa Kustom yang ditentukan'
      }.`;
    default:
      return 'Gunakan Bahasa Indonesia baku dan profesional.';
  }
}

export function generatePrompt(
  template: PromptTemplate,
  formValues: FormValues,
  persona: Persona
): string {
  const {
    topic,
    goal,
    context,
    educationLevel,
    tone,
    outputFormat,
    language,
    customLanguage,
    customValues,
    variation,
  } = formValues;

  const selectedTone = TONE_STYLES.find((t) => t.value === tone);
  const selectedFormat = OUTPUT_FORMATS.find((f) => f.value === outputFormat);
  const selectedVariation = VARIATIONS.find((v) => v.type === variation);

  // Compile custom fields text if any
  const customFieldsEntries = Object.entries(customValues);
  const customFieldsText =
    customFieldsEntries.length > 0
      ? customFieldsEntries
          .map(([key, val]) => {
            const fieldDef = template.customFields?.find((f) => f.id === key);
            const label = fieldDef?.label || key;
            return `- **${label}:** ${val}`;
          })
          .join('\n')
      : '';

  // Tailor variations modifier
  let variationGuideline = '';
  switch (variation) {
    case 'komprehensif':
      variationGuideline =
        'Prioritaskan kedalaman dan detail maksimal. Sertakan contoh kasus nyata, penjabaran langkah demi langkah yang sangat terperinci, dan antisipasi kendala umum secara mendalam.';
      break;
    case 'ringkas':
      variationGuideline =
        'Prioritaskan efisiensi dan keringkasan tinggi (high information density). Langsung ke poin substansi tanpa basa-basi pengantar, gunakan bullet points tajam dan hindari redundansi kata.';
      break;
    case 'contoh_nyata':
      variationGuideline =
        'Fokuskan pada penerapan dunia nyata, analogi kontekstual sehari-hari, dan studi kasus lokal yang sangat relevan dengan peserta didik di Indonesia.';
      break;
    case 'hots_kritis':
      variationGuideline =
        'Tekankan kemampuan berpikir tingkat tinggi (HOTS: C4 Analisis, C5 Evaluasi, C6 Kreasi). Dorong pemecahan masalah kompleks, perdebatan multi-sudut pandang, dan dekonstruksi argumen mendalam.';
      break;
    case 'standar':
    default:
      variationGuideline =
        'Jaga keseimbangan proporsional antara kedalaman penjelasan teoritis, kepraktisan eksekusi, dan kejelasan alur bahasa.';
      break;
  }

  // Format instructions with bullet markers
  const instructionsList = template.promptInstructions
    .map((inst, idx) => `${idx + 1}. ${inst}`)
    .join('\n');

  // Format constraints
  const constraintsList = template.promptConstraints
    .map((c) => `- ${c}`)
    .join('\n');

  // Format format guidelines
  const formatGuidelinesList = template.promptOutputFormatGuidelines
    .map((g) => `- ${g}`)
    .join('\n');

  // Format quality benchmarks
  const qualityList = template.promptQualityBenchmarks
    .map((q) => `- ${q}`)
    .join('\n');

  const languageDirective = getLanguageInstruction(language, customLanguage);

  // Construct structured, pedagogical prompt
  const parts: string[] = [];

  parts.push(`### [1. PERAN AI / AI PERSONA]`);
  parts.push(
    `Bertindaklah sebagai: **${template.promptRole}**.\nAnda memiliki keahlian mendalam dalam pedagogi modern, perancangan pembelajaran kontekstual, dan pemecahan masalah edukatif untuk sasaran profil: **${persona.name}**.`
  );

  parts.push(`\n### [2. TUJUAN UTAMA (PRIMARY OBJECTIVE)]`);
  parts.push(
    `Tujuan utama Anda adalah menghasilkan: **${goal}**.\nMateri/Topik Pokok: **${topic}**.\nFokus Eksekusi: ${template.promptObjective}`
  );

  parts.push(`\n### [3. KONTEKS & SASARAN AUDIENS]`);
  parts.push(`- **Jenjang Pendidikan:** ${educationLevel}`);
  if (context && context.trim().length > 0) {
    parts.push(`- **Kondisi / Konteks Khusus:** ${context.trim()}`);
  }
  parts.push(`- **Sasaran Pengguna:** ${persona.name} (${persona.tagline})`);
  if (customFieldsText) {
    parts.push(customFieldsText);
  }

  parts.push(`\n### [4. PENDEKATAN & GAYA BAHASA]`);
  parts.push(
    `- **Gaya Nada Bicara:** ${selectedTone?.label || tone} (${selectedTone?.desc || ''})`
  );
  parts.push(
    `- **Tipe Variasi & Kedalaman:** ${selectedVariation?.label || variation} — ${variationGuideline}`
  );

  parts.push(`\n### [5. INSTRUKSI SPESIFIK & LANGKAH KERJA]`);
  parts.push(
    `Lakukan langkah-langkah berikut secara berurutan dan terstruktur tanpa melewatkan komponen kunci:`
  );
  parts.push(instructionsList);

  parts.push(`\n### [6. BATASAN & ATURAN KETAT (CONSTRAINTS)]`);
  parts.push(constraintsList);
  parts.push(
    `- Jangan memberikan jawaban klise atau terlalu abstrak; setiap komponen harus siap diterapkan di lapangan.`
  );
  parts.push(
    `- Hindari fabrikasi atau halusinasi data/rumus/kutipan ilmiah; jika ada keraguan, nyatakan asumsi secara transparan.`
  );

  parts.push(`\n### [7. FORMAT KELUARAN (OUTPUT FORMAT)]`);
  parts.push(`Bentuk Format Utama: **${selectedFormat?.label || outputFormat}**`);
  parts.push(
    `Keterangan Format: ${selectedFormat?.desc || 'Sajikan secara teratur dengan penataan hierarki markdown.'}`
  );
  if (formatGuidelinesList) {
    parts.push(formatGuidelinesList);
  }
  parts.push(
    `- Gunakan heading Markdown (H2, H3), tabel Markdown rapi, dan poin berbutir untuk memaksimalkan keterbacaan visual.`
  );

  parts.push(`\n### [8. BAHASA PENYAMPAIAN]`);
  parts.push(languageDirective);

  parts.push(`\n### [9. KRITERIA KEBERHASILAN (QUALITY BENCHMARKS)]`);
  parts.push(
    `Hasil akhir Anda akan dianggap berhasil jika memenuhi kriteria berikut:`
  );
  parts.push(qualityList);
  parts.push(
    `- Memiliki nilai guna praktis langsung bagi ${persona.name} tanpa memerlukan penulisan ulang substansial.`
  );

  return parts.join('\n');
}

export function generateCustomPrompt(formValues: FormValues, persona: Persona): string {
  const {
    topic,
    goal,
    context,
    educationLevel,
    tone,
    outputFormat,
    language,
    customLanguage,
    variation,
  } = formValues;

  const selectedTone = TONE_STYLES.find((t) => t.value === tone);
  const selectedFormat = OUTPUT_FORMATS.find((f) => f.value === outputFormat);
  const selectedVariation = VARIATIONS.find((v) => v.type === variation);
  const languageDirective = getLanguageInstruction(language, customLanguage);

  return `### [1. PERAN AI / AI PERSONA]
Bertindaklah sebagai Konsultan Pendidikan Ahli dan Pakar Subjek untuk ${persona.name}. Anda menggabungkan keilmuan akademis yang solid dengan pedagogi aplikatif berstandar tinggi.

### [2. TUJUAN UTAMA]
Hasilkan luaran edukatif berkualitas tinggi mengenai topik:
**"${topic}"**
Tujuan spesifik:
**${goal || 'Menyajikan materi/analisis komprehensif, operasional, dan siap dipraktikkan'}**

### [3. KONTEKS & AUDIENS SASARAN]
- **Jenjang Pendidikan:** ${educationLevel}
- **Konteks Lapangan:** ${context || 'Lingkungan pembelajaran formal dan mandiri di Indonesia'}
- **Sasaran Pengguna:** ${persona.name}

### [4. GAYA BAHASA & VARIASI]
- **Gaya Komunikasi:** ${selectedTone?.label} (${selectedTone?.desc})
- **Tingkat Kedalaman:** ${selectedVariation?.label} (${selectedVariation?.description})

### [5. INSTRUKSI UTAMA]
1. Awali dengan ringkasan konseptual atau latar belakang urgensi topik secara padat.
2. Uraikan materi inti, strategi, atau langkah implementasi secara sekuensial dan terukur.
3. Berikan contoh konkret atau studi kasus kontekstual yang mudah dipahami sasaran audiens.
4. Sertakan mekanisme evaluasi, cek pemahaman, atau indikator ketercapaian yang jelas.
5. Tutup dengan rekomendasi tindak lanjut atau refleksi kritis.

### [6. BATASAN & STANDAR KUALITAS]
- Hindari bahasa pasif berbelit-belit atau teori tanpa penerapan.
- Sajikan informasi yang akurat, mutakhir, dan bebas halusinasi.
- Jika ada istilah teknis, sertakan penjelasan singkat yang ramah pembelajar.

### [7. FORMAT KELUARAN]
Format Utama: **${selectedFormat?.label}**
${selectedFormat?.desc}
Gunakan Markdown rapi dengan tabel pembanding dan daftar butir untuk navigasi visual yang nyaman.

### [8. BAHASA PENYAMPAIAN]
${languageDirective}

### [9. KRITERIA KELAYAKAN]
Keluaran harus bermakna, aplikatif, dan langsung dapat digunakan oleh ${persona.name} untuk pembelajaran atau riset nyata.`;
}
