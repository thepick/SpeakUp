#!/usr/bin/env python3
"""Generate src/data/fullDataset.ts from the canonical dataset JSON.
Usage: python scripts/generate-dataset.py <path-to-dataset.json>
"""
import json, os, sys
from datetime import datetime, timezone

if len(sys.argv) < 2:
    print("Usage: python scripts/generate-dataset.py <path-to-dataset.json>")
    sys.exit(1)

json_path = sys.argv[1]
print(f"Reading {json_path}...")

with open(json_path, 'r', encoding='utf-8') as f:
    full = json.load(f)

all_entries = full.get('entries', full) if isinstance(full, dict) else full

if not isinstance(all_entries, list):
    print("Expected JSON to have an 'entries' array or be a top-level array")
    sys.exit(1)

# Sort by lessonOrder, then id
all_entries.sort(key=lambda e: (e.get('lessonOrder', 0), e.get('id', 0)))

print(f"Loaded {len(all_entries)} entries")

# Sanity: unique IDs
ids = [e['id'] for e in all_entries]
if len(set(ids)) != len(ids):
    dupes = [i for i in set(ids) if ids.count(i) > 1]
    print(f"Duplicate IDs found: {dupes}")
    sys.exit(1)

# Sanity: required fields
required = ['id', 'displayName', 'sentence', 'audioPromptText', 'level',
            'lessonOrder', 'module', 'practiceStage', 'skillType',
            'difficultyScore', 'instruction', 'tags', 'targetSounds', 'speechaceIntegration']
for e in all_entries:
    for field in required:
        if field not in e:
            print(f"Entry {e.get('id')}: missing required field '{field}'")
            sys.exit(1)

# Build TypeScript
header = f"""// AUTO-GENERATED from pronunciation_dataset_v1_0.json
// Do not edit by hand — re-run: npm run generate-dataset
// Source: {json_path}
// Generated: {datetime.now(timezone.utc).isoformat()}
// Entry count: {len(all_entries)}

import {{ DatasetEntry }} from '../types';

export const FULL_DATASET: DatasetEntry[] = """

ts = header + json.dumps(all_entries, indent=2, ensure_ascii=False) + ';\n'

out_path = os.path.join('src', 'data', 'fullDataset.ts')
os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(ts)

print(f"Wrote {len(all_entries)} entries to {out_path}")
print(f"File size: {len(ts) / 1024:.1f} KB")
