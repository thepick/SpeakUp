#!/usr/bin/env python3
"""
Generate MP3 audio files for all 175 SpeakUp dataset entries
using Google Gemini 3.1 Flash TTS via OpenRouter.

Alternates between male (Puck/Fenrir) and female (Kore/Leda) American voices.
"""
import os, sys, re, json, time, httpx, subprocess, tempfile

api_key = os.environ.get("OPENROUTER_API_KEY", "")
if not api_key:
    print("ERROR: OPENROUTER_API_KEY not set")
    sys.exit(1)

# --- Voices: alternate male/female American ---
MALE_VOICES = ["Puck", "Fenrir"]      # Upbeat, Excitable
FEMALE_VOICES = ["Kore", "Leda"]       # Firm, Youthful

# --- Paths ---
DS_PATH = os.path.join("src", "data", "fullDataset.ts")
OUT_DIR = os.path.join("public", "audio")
os.makedirs(OUT_DIR, exist_ok=True)

# --- Read dataset ---
print(f"Reading {DS_PATH}...")
with open(DS_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

start = content.index('FULL_DATASET: DatasetEntry[] = ') + len('FULL_DATASET: DatasetEntry[] = ')
arr_text = content[start:].rstrip().rstrip(';')
entries = json.loads(arr_text)
print(f"Loaded {len(entries)} entries")

# --- Build voice map ---
# Even IDs get male, odd IDs get female (alternating pattern)
voice_map = {}
for i, e in enumerate(entries):
    eid = e['id']
    if eid % 2 == 0:  # even -> male
        voice_map[eid] = MALE_VOICES[i % len(MALE_VOICES)]
    else:  # odd -> female
        voice_map[eid] = FEMALE_VOICES[i % len(FEMALE_VOICES)]

# --- Check existing ---
existing = set()
for f in os.listdir(OUT_DIR):
    m = re.match(r'(\d+)\.mp3', f)
    if m:
        path = os.path.join(OUT_DIR, f)
        if os.path.getsize(path) > 2000:
            existing.add(int(m.group(1)))

print(f"Found {len(existing)} valid existing MP3 files")

# --- Generate ---
url = "https://openrouter.ai/api/v1/audio/speech"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}",
    "HTTP-Referer": "https://speakup.app",
    "X-Title": "SpeakUp",
}

total = len(entries)
generated = 0
skipped = 0
failed = 0
last_request_time = 0

for i, e in enumerate(entries):
    eid = e['id']
    sentence = e['sentence']
    voice = voice_map[eid]
    gender = "M" if eid % 2 == 0 else "F"
    out_path = os.path.join(OUT_DIR, f"{eid}.mp3")

    if eid in existing:
        skipped += 1
        print(f"  [{i+1}/{total}] SKIP ID {eid:>3d} ({gender} {voice} — exists)")
        continue

    # Rate limit: max ~20 req/s, but be conservative
    elapsed = time.time() - last_request_time
    if elapsed < 0.15:
        time.sleep(0.15 - elapsed)

    try:
        payload = {
            "model": "google/gemini-3.1-flash-tts-preview",
            "input": sentence,
            "voice": voice,
            "response_format": "pcm"
        }
        
        resp = httpx.post(url, json=payload, headers=headers, timeout=30)
        last_request_time = time.time()

        if resp.status_code == 200:
            pcm_data = resp.content
            
            # Convert PCM to MP3 via ffmpeg
            # PCM is 24kHz 16-bit mono
            with tempfile.NamedTemporaryFile(suffix='.pcm', delete=False) as tmp:
                tmp.write(pcm_data)
                pcm_path = tmp.name
            
            try:
                subprocess.run([
                    "ffmpeg", "-y", "-f", "s16le", "-ar", "24000", "-ac", "1",
                    "-i", pcm_path, "-codec:a", "libmp3lame", "-b:a", "64k",
                    out_path
                ], check=True, capture_output=True)
                size = os.path.getsize(out_path)
            finally:
                os.unlink(pcm_path)
            
            print(f"  [{i+1}/{total}] GEN  ID {eid:>3d} ({gender} {voice}): {size:>6d} B  \"{sentence[:45]}\"")
            generated += 1

        elif resp.status_code == 429:
            # Rate limited — wait and retry once
            print(f"  [{i+1}/{total}] RATE ID {eid:>3d} — waiting 5s...")
            time.sleep(5)
            resp = httpx.post(url, json=payload, headers=headers, timeout=30)
            if resp.status_code == 200:
                pcm_data = resp.content
                with tempfile.NamedTemporaryFile(suffix='.pcm', delete=False) as tmp:
                    tmp.write(pcm_data)
                    pcm_path = tmp.name
                try:
                    subprocess.run([
                        "ffmpeg", "-y", "-f", "s16le", "-ar", "24000", "-ac", "1",
                        "-i", pcm_path, "-codec:a", "libmp3lame", "-b:a", "64k",
                        out_path
                    ], check=True, capture_output=True)
                    size = os.path.getsize(out_path)
                finally:
                    os.unlink(pcm_path)
                print(f"  [{i+1}/{total}] GEN  ID {eid:>3d} ({gender} {voice}): {size:>6d} B  \"{sentence[:45]}\" (retry)")
                generated += 1
            else:
                print(f"  [{i+1}/{total}] FAIL ID {eid:>3d}: {resp.status_code} {resp.text[:100]}")
                failed += 1
        else:
            print(f"  [{i+1}/{total}] FAIL ID {eid:>3d}: {resp.status_code} {resp.text[:100]}")
            failed += 1
    
    except Exception as ex:
        print(f"  [{i+1}/{total}] FAIL ID {eid:>3d}: {ex}")
        failed += 1

print(f"\n{'='*60}")
print(f"SUMMARY")
print(f"  Total entries:  {total}")
print(f"  Skipped:        {skipped}")
print(f"  Generated:      {generated}")
print(f"  Failed:         {failed}")
print(f"  Files on disk:  {len([f for f in os.listdir(OUT_DIR) if f.endswith('.mp3')])}")
