import { PROMPT_TEMPLATES } from '../src/data/templates';
import { PERSONAS } from '../src/data/personas';
import { CATEGORIES } from '../src/data/categories';
import { generatePrompt, generateCustomPrompt } from '../src/utils/generator';
import type { FormValues, LanguageCode, VariationType } from '../src/types';

console.log('=== EDU PROMPT AI VERIFICATION TEST SUITE ===\n');

// 1. Verify Templates Count & Categories
console.log(`[TEST 1] Template Count: ${PROMPT_TEMPLATES.length}`);
if (PROMPT_TEMPLATES.length >= 40) {
  console.log(` PASS: Minimal 40 templates requirement met (${PROMPT_TEMPLATES.length} templates provided).`);
} else {
  console.error(` FAIL: Template count is below 40!`);
  process.exit(1);
}

// 2. Verify all 8 categories exist
console.log(`\n[TEST 2] Category Coverage:`);
const requiredCategoryIds = [
  'modul-ajar',
  'lkpd-bahan',
  'bank-soal',
  'rangkuman-materi',
  'tutor-ujian',
  'penelitian-akademik',
  'presentasi-admin',
  'produktivitas',
];

requiredCategoryIds.forEach((catId) => {
  const count = PROMPT_TEMPLATES.filter((t) => t.category === catId).length;
  console.log(`  - Category '${catId}': ${count} templates`);
  if (count === 0) {
    console.error(` FAIL: Category ${catId} has zero templates!`);
    process.exit(1);
  }
});
console.log(' PASS: All 8 required categories have active templates.');

// 3. Verify all 4 personas exist
console.log(`\n[TEST 3] Persona Coverage:`);
const requiredPersonaIds = ['guru', 'siswa', 'mahasiswa', 'peneliti'];
requiredPersonaIds.forEach((pId) => {
  const count = PROMPT_TEMPLATES.filter((t) => t.targetPersonas.includes(pId as any)).length;
  console.log(`  - Persona '${pId}': targeted by ${count} templates`);
  if (count === 0) {
    console.error(` FAIL: Persona ${pId} has zero matching templates!`);
    process.exit(1);
  }
});
console.log(' PASS: All 4 personas are covered.');

// 4. Test Prompt Generation Engine across languages
console.log(`\n[TEST 4] Multilingual Output Generation:`);
const testLanguages: LanguageCode[] = ['id', 'en', 'ar', 'ja', 'zh', 'custom'];
const sampleTemplate = PROMPT_TEMPLATES[0]; // Modul Ajar Merdeka
const samplePersona = PERSONAS[0]; // Guru

testLanguages.forEach((lang) => {
  const formValues: FormValues = {
    topic: 'Fotosintesis SMP',
    goal: 'Menyusun modul ajar 2 pertemuan berdiferensiasi',
    context: 'Kelas 7 SMP dengan 32 siswa heterogen',
    educationLevel: 'SMP',
    tone: 'formal',
    outputFormat: 'full-document',
    language: lang,
    customLanguage: lang === 'custom' ? 'Bahasa Sunda' : undefined,
    customValues: {
      alokasiWaktu: '2x40 menit',
      modelPembelajaran: 'Problem-Based Learning (PBL)',
      profilPancasila: 'Bernalar Kritis, Gotong Royong',
    },
    variation: 'standar',
  };

  const output = generatePrompt(sampleTemplate, formValues, samplePersona);

  // Assert output structure
  const hasRole = output.includes('[1. PERAN AI');
  const hasObjective = output.includes('[2. TUJUAN UTAMA');
  const hasContext = output.includes('[3. KONTEKS');
  const hasTone = output.includes('[4. PENDEKATAN');
  const hasInstructions = output.includes('[5. INSTRUKSI SPESIFIK');
  const hasConstraints = output.includes('[6. BATASAN');
  const hasFormat = output.includes('[7. FORMAT KELUARAN');
  const hasLang = output.includes('[8. BAHASA PENYAMPAIAN');
  const hasQuality = output.includes('[9. KRITERIA KEBERHASILAN');

  if (
    hasRole &&
    hasObjective &&
    hasContext &&
    hasTone &&
    hasInstructions &&
    hasConstraints &&
    hasFormat &&
    hasLang &&
    hasQuality
  ) {
    console.log(`  - Language [${lang}]: PASS (Full 9-part structured prompt produced)`);
  } else {
    console.error(`  - Language [${lang}]: FAIL (Missing structured sections)`);
    process.exit(1);
  }
});

// 5. Test Prompt Variations
console.log(`\n[TEST 5] Variations Testing:`);
const variations: VariationType[] = ['standar', 'komprehensif', 'ringkas', 'contoh_nyata', 'hots_kritis'];
variations.forEach((v) => {
  const formValues: FormValues = {
    topic: 'HOTS Pecahan SD',
    goal: 'Membuat bank soal',
    context: '',
    educationLevel: 'SD',
    tone: 'santai',
    outputFormat: 'markdown-table',
    language: 'id',
    customValues: {},
    variation: v,
  };
  const prompt = generatePrompt(sampleTemplate, formValues, samplePersona);
  if (prompt.length > 200) {
    console.log(`  - Variation [${v}]: PASS (Generated ${prompt.length} chars)`);
  } else {
    console.error(`  - Variation [${v}]: FAIL`);
    process.exit(1);
  }
});

// 6. Test Custom Builder Generator
console.log(`\n[TEST 6] Custom Builder Prompt Generation:`);
const customValues: FormValues = {
  topic: 'Analisis Valuasi Saham Perbankan Digital',
  goal: 'Menyusun kerangka studi kasus untuk tesis magister',
  context: 'Mahasiswa S2 Manajemen Keuangan',
  educationLevel: 'Pascasarjana/S2-S3',
  tone: 'kritis',
  outputFormat: 'full-document',
  language: 'id',
  customValues: {},
  variation: 'komprehensif',
};
const customPrompt = generateCustomPrompt(customValues, PERSONAS[3]);
if (customPrompt.includes('Analisis Valuasi Saham Perbankan Digital') && customPrompt.includes('[1. PERAN AI')) {
  console.log(' PASS: Custom Builder generated rich structured prompt.');
} else {
  console.error(' FAIL: Custom Builder output incomplete.');
  process.exit(1);
}

console.log('\n=== ALL 6 TEST SUITES PASSED FLAWLESSLY! ===');
