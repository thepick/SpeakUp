# Full Dataset Integration Plan — SpeakUp!

> **For Hermes:** Execute task-by-task. Every task has a verification step.

**Goal:** Expand the app from 67 starter-pack entries to the full 175-entry canonical dataset, generate audio for all entries, and add new unit categories — all without breaking existing functionality.

**Architecture:** Generate a static `fullDataset.ts` at build-time by reading the canonical JSON files. App imports from this single source. Unit selector expands from 6 to 8 units to cover all 17 modules. Audio for all 175 entries is bundled in `public/audio/`. The existing `isSafeForAutoPractice` filter is preserved and slightly refined.

---

## Pre-Flight Validation (already done — recorded for the executor)

The dataset is clean:
- ✅ 175 unique IDs (no duplicates)
- ✅ Zero missing required fields (all 175 have `speechaceIntegration`, `thresholdProfile`, `focusWords`, `thaiErrorPattern`, `successMessage`)
- ✅ Zero broken `remediationLinks` or `contrastWith`
- ✅ 4 entries with `studentVisible=false` (IDs 99, 100, 101, 102) — these are higher-level B2 and will be filtered
- ✅ Sentence lengths range 3-111 chars (no generation concerns)
- ✅ 8 `classroomStatus x appUse` combinations (clean separation)

---

### Task 1: Build the dataset generator script

**Objective:** Create a Node script that reads the canonical JSON files and outputs a TypeScript file with all 175 entries

**Files:**
- Create: `scripts/generate-dataset.mjs` (or `.ts`)
- Output: `src/data/fullDataset.ts` (generated, gitignored or committed)

**Why a script:** Avoids 175 entries in a hand-written file. Re-runnable. Single source of truth from the ZIP.

**Implementation outline:**

```js
// scripts/generate-dataset.mjs
import { readFileSync, writeFileSync } from 'fs';

const datasetPath = process.argv[2];  // path to data/pronunciation_dataset_v1_0.json
const full = JSON.parse(readFileSync(datasetPath, 'utf-8'));
const allEntries = full.entries || full;

// Order by lessonOrder, then id
allEntries.sort((a, b) => (a.lessonOrder - b.lessonOrder) || (a.id - b.id));

const ts = `// AUTO-GENERATED from pronunciation_dataset_v1_0.json
// Do not edit by hand — re-run: npm run generate-dataset
import { DatasetEntry } from '../types';

export const FULL_DATASET: DatasetEntry[] = ${JSON.stringify(allEntries, null, 2)};
`;

writeFileSync('src/data/fullDataset.ts', ts);
```

**Verification:**
1. `node scripts/generate-dataset.mjs "C:/Users/Ajarn Michael/speakup-dataset/data/pronunciation_dataset_v1_0.json"`
2. `grep -c 'id:' src/data/fullDataset.ts` → 175
3. `wc -l src/data/fullDataset.ts` → expect ~6000+ lines

---

### Task 2: Update package.json with dataset generation script

**Objective:** Add `generate-dataset` script and document the build process

**File to modify:** `package.json`

**Add to `scripts`:**
```json
"generate-dataset": "node scripts/generate-dataset.mjs ../speakup-dataset/data/pronunciation_dataset_v1_0.json"
```

**Add to `.gitignore`:**
```
src/data/fullDataset.ts
```
(Generated file — don't commit noise to git. The canonical JSONs stay external.)

Actually — for portability, **commit it**. The JSON isn't checked in either. Re-runnable script is better documentation than a huge TS file. Decision: commit it.

**Revert `.gitignore`** change — keep `fullDataset.ts` committed.

**Verification:** `npm run generate-dataset` regenerates the file identically.

---

### Task 3: Verify TypeScript compiles with full dataset

**Objective:** Catch type mismatches before they hit the browser

**File to create/check:** `src/data/fullDataset.ts`

**Steps:**
1. Run `npm run lint` (which is `tsc --noEmit`)
2. Fix any type errors — common ones:
   - `practiceStage` value `'challenge'`, `'diagnostic'`, `'teacher_modeling'` not in the `DatasetEntry` union
   - `remediationLinks` may include `null` values
3. If `practiceStage` types don't match, **expand the union** in `src/types.ts`:
   ```ts
   practiceStage: 'word' | 'minimal_pair' | 'phrase' | 'sentence' | 'real_world'
                  | 'challenge' | 'diagnostic' | 'teacher_modeling';
   ```
4. Re-run `tsc --noEmit` → must pass

**Verification:** `npm run lint` exits 0.

---

### Task 4: Update `isSafeForAutoPractice` filter to be explicit

**Objective:** The current filter is a good default, but make it visible and add a comment explaining the gating policy

**File to modify:** `src/App.tsx`

**Current logic:**
```ts
function isSafeForAutoPractice(e: DatasetEntry): boolean {
  if (e.studentVisible === false) return false;
  if (e.classroomStatus === undefined) return true;
  return e.classroomStatus === 'grade5_ready';
}
```

**Enhancement — also filter by `defaultAutoPath`:**
```ts
function isSafeForAutoPractice(e: DatasetEntry): boolean {
  if (e.studentVisible === false) return false;
  if (e.defaultAutoPath !== true) return false;  // teacher-only items have false
  if (e.classroomStatus === undefined) return true;
  return e.classroomStatus === 'grade5_ready';
}
```

This is defense-in-depth — `studentVisible=false` OR `defaultAutoPath=false` excludes 4+ entries safely.

**Verification:** Add a quick `console.log` (temporary) to confirm 131 entries pass.

---

### Task 5: Update App.tsx to use FULL_DATASET + expand to 8 units

**Objective:** Wire in the new dataset and add the 2 new unit categories

**File to modify:** `src/App.tsx`

**Changes:**
1. Replace `import { STARTER_PACK_ENTRIES } from './data/starterPack';` with `import { FULL_DATASET } from './data/fullDataset';`
2. Replace the `soundThemes` array with 8 units (see below)
3. Keep `isSafeForAutoPractice` updated from Task 4

**New unit array (matches plan):**

```ts
const soundThemes = [
  { id: 'quick_mix', name: '🌪️ Quick Mixed Game', description: '...',
    getEntries: () => { /* same as before, samples from full dataset */ } },
  { id: 'th_sounds', name: '👅 Unit 1: The TH Sounds', description: '...',
    getEntries: () => FULL_DATASET.filter(e => isSafeForAutoPractice(e) && e.module === 'th_sounds') },
  { id: 'v_w_f', name: '👄 Unit 2: V vs. W vs. F', description: '...',
    getEntries: () => FULL_DATASET.filter(e => isSafeForAutoPractice(e) && e.module === 'v_w_f') },
  { id: 'final_consonants', name: '🏁 Unit 3: Final Consonants & Stops', description: '...',
    getEntries: () => FULL_DATASET.filter(e => isSafeForAutoPractice(e) &&
      (e.module === 'final_consonants' || e.module === 'stop_voicing')) },
  { id: 'clusters', name: '🤝 Unit 4: Consonant Clusters & R/L', description: '...',
    getEntries: () => FULL_DATASET.filter(e => isSafeForAutoPractice(e) &&
      (e.module === 'clusters' || e.module === 'r_l')) },
  { id: 'vowels', name: '🎼 Unit 5: Vowels & Weak Forms', description: '...',
    getEntries: () => FULL_DATASET.filter(e => isSafeForAutoPractice(e) &&
      (e.module === 'vowels' || e.module === 'schwa_and_reduction')) },
  { id: 'sibilants', name: '🗣️ Unit 6: S, Z, SH, CH, J & Nasals', description: '...',
    getEntries: () => FULL_DATASET.filter(e => isSafeForAutoPractice(e) &&
      (e.module === 's_z_sh_ch_j' || e.module === 'nasals' || e.module === 'zh_sound')) },
  { id: 'classroom', name: '🏫 Unit 7: Real World & Connected Speech', description: '...',
    getEntries: () => FULL_DATASET.filter(e => isSafeForAutoPractice(e) &&
      (e.module === 'real_world_phrases' || e.module === 'connected_speech' ||
       e.module === 'intonation' || e.module === 'stress_and_rhythm')) },
];
```

**Note:** 7 actual units + Quick Mix = 8 themes total. Module `diagnostics` and `teacher_modeling` are correctly excluded (teacher-only modules).

**Verification:**
- `npm run lint` passes
- `npm run build` succeeds
- Manual: open the dev server, count units in the picker = 8

---

### Task 6: Update TeacherPanel.tsx imports

**Objective:** Switch from `STARTER_PACK_ENTRIES` to `FULL_DATASET`

**File to modify:** `src/components/TeacherPanel.tsx`

**Change:** Line 4: `import { STARTER_PACK_ENTRIES } from '../data/starterPack';` → `import { FULL_DATASET } from '../data/fullDataset';`

**Verification:** `npm run lint` → 0 errors. `Teacher Panel` should show 175 entries.

---

### Task 7: Update scorePronunciation.ts imports

**Objective:** Switch from `STARTER_PACK_ENTRIES` to `FULL_DATASET`

**File to modify:** `src/utils/scorePronunciation.ts`

**Change:** Line 1: `import { STARTER_PACK_ENTRIES } from '../data/starterPack';` → `import { FULL_DATASET } from '../data/fullDataset';`

**And:** Line 17 and other references to `STARTER_PACK_ENTRIES.find(...)` → `FULL_DATASET.find(...)`

**Verification:** `npm run lint` → 0 errors.

---

### Task 8: Keep `starterPack.ts` as a backwards-compatible re-export

**Objective:** Avoid breaking any other files that might still import it

**File to modify:** `src/data/starterPack.ts`

**Change:** Replace entire contents with:
```ts
// DEPRECATED: Use FULL_DATASET from './fullDataset' instead.
// This re-export preserves backwards compatibility.
export { FULL_DATASET as STARTER_PACK_ENTRIES } from './fullDataset';
```

**Why:** Zero risk of breaking anything; lets us delete it later.

**Verification:** `npm run lint` → 0 errors. `grep -r "STARTER_PACK_ENTRIES" src/` still resolves.

---

### Task 9: Generate audio for the 108 missing entries

**Objective:** Create MP3 files for all 175 entries (we already have 67)

**Files affected:** `public/audio/{id}.mp3` — 108 new files

**Approach:** Reuse the gTTS script that already worked. Add the dataset JSON as input.

**File to create:** `scripts/generate-audio.py`

**Key safety features:**
- Skip IDs that already have a valid MP3 (size > 2KB, not the 197121 silent file)
- Sanitize sentences (replace quotes, control chars)
- Add small random delays (0.1-0.5s) between requests to avoid rate limiting
- Print progress + final summary

**Steps:**
1. Write the script (re-uses proven gTTS approach)
2. Run: `python scripts/generate-audio.py` (uses src/data/fullDataset.ts → or re-reads JSON)
3. **Verify all 175 files exist:** `ls public/audio/*.mp3 | wc -l` → 175
4. **Verify no silent files:** `find public/audio -size 197121c -size 197121c` → 0 results
5. **Verify real audio data:** `file 1.mp3` → `MPEG ADTS, layer III`

**Backup plan:** If gTTS rate-limits partway, the script logs which IDs succeeded, you re-run and it skips those.

---

### Task 10: Add `npm run generate-audio` script for future re-runs

**Objective:** Make audio regeneration easy if the dataset updates

**File to modify:** `package.json`

**Add to `scripts`:**
```json
"generate-audio": "python scripts/generate-audio.py"
```

**Document** in README (create if missing):
```markdown
## Setup
1. `npm install`
2. `npm run generate-dataset` (requires dataset JSON path)
3. `npm run generate-audio` (requires Python + gTTS)
4. `npm run dev`
```

**Verification:** `npm run generate-audio` runs without error.

---

### Task 11: Build, validate, and verify

**Objective:** End-to-end check that the bundled app is correct

**Steps:**
1. `npm run build` → must succeed
2. `ls dist/audio/*.mp3 | wc -l` → must be 175
3. `ls dist/index.html` → exists
4. `grep -c '"id":' dist/assets/*.js | head -1` → expect ID references in the bundle
5. Start dev server: `npm run dev` → manually test:
   - Open browser, click each of the 8 units
   - Each unit shows entries (not empty)
   - Each entry plays its audio
6. Kimi audit on the full diff

**Verification checklist (all must be true):**
- [ ] Build succeeds
- [ ] 175 MP3s in `dist/audio/`
- [ ] 8 units in the picker
- [ ] All units have entries (no "module is currently setting up!" message)
- [ ] Audio plays for all entries
- [ ] TeacherPanel shows 175 entries
- [ ] Quick Mixed Game samples from full dataset
- [ ] isSafeForAutoPractice excludes teacher-only entries

---

### Task 12: Commit and push

**Objective:** Land the change

**Commit message:**
```
feat: expand to full 175-entry dataset with 8 units + audio

- Replace STARTER_PACK_ENTRIES (67) with FULL_DATASET (175)
- Add 2 new units: Sibilants, Connected Speech
- Group related modules under existing units
- Generate 108 new MP3s via gTTS
- Add scripts/generate-dataset.mjs for dataset regeneration
- Add scripts/generate-audio.py for audio regeneration
- Keep isSafeForAutoPractice filter for safety
- Keep starterPack.ts as backwards-compat re-export
```

**Push:** `git push origin main`

**Post-push:**
- Wait for GitHub Actions deploy
- Visit https://speakup.mtomlinson.ca
- Spot-check 1 entry from each of the 8 units
- Verify audio plays in browser console (no 404s)

---

## Risks & Tradeoffs

| Risk | Mitigation |
|------|-----------|
| gTTS rate-limits during batch | Script skips already-downloaded; re-runnable |
| gTTS voices change over time | Pin gTTS version in requirements.txt |
| Bundle size grows (108 more MP3s) | Audio is in `public/` not bundled in JS — 0 JS impact, ~2-3MB total audio |
| Dataset JSON changes upstream | Generator script is re-runnable; commit regenerated TS |
| `practiceStage` types differ | Expand union in `src/types.ts` (Task 3) |
| Hidden entries (studentVisible=false) leaking to students | Defense-in-depth: filter checks both `studentVisible` AND `defaultAutoPath` |
| Teacher-assignable entries (B1+) confusing to students | `isSafeForAutoPractice` correctly excludes them |

## Open Questions

- Should the README/landing screen say "175 activities" or keep it generic?
- Do you want a per-module progress indicator (would need state)?

Both are non-blocking — defer until after the expansion is live.
