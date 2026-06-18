#!/usr/bin/env python3
"""Generate MP3 audio files for all entries in src/data/fullDataset.ts.
Uses gTTS (Google Translate TTS). Skips files that already exist with valid size.

Usage:
  python scripts/generate-audio.py
"""
import os, sys, re, json, time, random

# Make sure gTTS is available
try:
    from gtts import gTTS
except ImportError:
    print("ERROR: gTTS not installed. Run: pip install gtts")
    sys.exit(1)

# Locate the generated dataset
ds_path = os.path.join('src', 'data', 'fullDataset.ts')
if not os.path.exists(ds_path):
    print(f"ERROR: {ds_path} not found. Run generate-dataset first.")
    sys.exit(1)

print(f"Reading {ds_path}...")
with open(ds_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the array literal
start = content.index('FULL_DATASET: DatasetEntry[] = ') + len('FULL_DATASET: DatasetEntry[] = ')
arr_text = content[start:].rstrip().rstrip(';')
try:
    entries = json.loads(arr_text)
except json.JSONDecodeError as e:
    print(f"ERROR parsing dataset: {e}")
    sys.exit(1)

print(f"Loaded {len(entries)} entries")

# Output dir
out_dir = os.path.join('public', 'audio')
os.makedirs(out_dir, exist_ok=True)

# Detect existing valid files (size > 2KB and not the 197121-byte silent file)
existing = {}
for f in os.listdir(out_dir):
    m = re.match(r'(\d+)\.mp3', f)
    if m:
        eid = int(m.group(1))
        size = os.path.getsize(os.path.join(out_dir, f))
        existing[eid] = size

valid_existing = {eid: size for eid, size in existing.items() if size > 2000 and size != 197121}
print(f"Found {len(valid_existing)} valid existing audio files")

# Generate
total = len(entries)
generated = 0
skipped = 0
failed = 0

for i, e in enumerate(entries):
    eid = e['id']
    sentence = e['sentence']
    out_path = os.path.join(out_dir, f"{eid}.mp3")

    # Skip if valid file exists
    if eid in valid_existing:
        skipped += 1
        print(f"  [{i+1}/{total}] SKIP ID {eid} (exists, {valid_existing[eid]} bytes)")
        continue

    try:
        # Sanitize: gTTS handles punctuation fine, but trim super-long
        text = sentence.strip()
        tts = gTTS(text=text, lang='en', slow=False)
        tts.save(out_path)
        size = os.path.getsize(out_path)
        if size < 2000 or size == 197121:
            # Silent / corrupted — retry once after a small delay
            time.sleep(0.5)
            tts = gTTS(text=text, lang='en', slow=False)
            tts.save(out_path)
            size = os.path.getsize(out_path)
        print(f"  [{i+1}/{total}] GEN  ID {eid}: {size:>6d} B  \"{text[:50]}\"")
        generated += 1
    except Exception as ex:
        print(f"  [{i+1}/{total}] FAIL ID {eid}: {ex}")
        failed += 1

    # Small random delay to avoid gTTS rate limits
    time.sleep(random.uniform(0.1, 0.4))

print(f"\n=== SUMMARY ===")
print(f"Total entries:  {total}")
print(f"Skipped:        {skipped}")
print(f"Generated:      {generated}")
print(f"Failed:         {failed}")
print(f"Files on disk:  {len([f for f in os.listdir(out_dir) if f.endswith('.mp3')])}")
