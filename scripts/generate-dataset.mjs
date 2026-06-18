// Generate src/data/fullDataset.ts from the canonical pronunciation_dataset_v1_0.json
// Run: node scripts/generate-dataset.mjs <path-to-json>
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error("Usage: node scripts/generate-dataset.mjs <path-to-dataset.json>");
  process.exit(1);
}

console.log(`Reading ${jsonPath}...`);
const full = JSON.parse(readFileSync(jsonPath, 'utf-8'));
let allEntries = full.entries || full;

if (!Array.isArray(allEntries)) {
  console.error("Expected JSON to have an 'entries' array or be a top-level array");
  process.exit(1);
}

// Sort by lessonOrder, then id for stable output
allEntries.sort((a, b) => (a.lessonOrder - b.lessonOrder) || (a.id - b.id));

console.log(`Loaded ${allEntries.length} entries`);

// Sanity check: unique IDs
const ids = allEntries.map(e => e.id);
const uniqueIds = new Set(ids);
if (uniqueIds.size !== ids.length) {
  console.error(`Duplicate IDs found: ${ids.length - uniqueIds.size} dupes`);
  process.exit(1);
}

// Sanity check: required fields
const required = ['id', 'displayName', 'sentence', 'audioPromptText', 'level',
                  'lessonOrder', 'module', 'practiceStage', 'skillType',
                  'difficultyScore', 'instruction', 'tags', 'targetSounds', 'speechaceIntegration'];
for (const e of allEntries) {
  for (const field of required) {
    if (!(field in e)) {
      console.error(`Entry ${e.id}: missing required field '${field}'`);
      process.exit(1);
    }
  }
}

const header = `// AUTO-GENERATED from pronunciation_dataset_v1_0.json
// Do not edit by hand — re-run: npm run generate-dataset
// Source: ${jsonPath}
// Generated: ${new Date().toISOString()}
// Entry count: ${allEntries.length}

import { DatasetEntry } from '../types';

export const FULL_DATASET: DatasetEntry[] = `;

const ts = header + JSON.stringify(allEntries, null, 2) + ';\n';
const outPath = resolve('src/data/fullDataset.ts');
writeFileSync(outPath, ts, 'utf-8');

console.log(`Wrote ${allEntries.length} entries to ${outPath}`);
console.log(`File size: ${(ts.length / 1024).toFixed(1)} KB`);
