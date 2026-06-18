# Speak Up!

Thai-English Pronunciation Coach — a web app for Grade 5 Thai students to practice English pronunciation.

Students listen to model pronunciations, record themselves speaking, and receive encouraging feedback.

## Features

- 175 pronunciation activities across 7 themed units
- Pre-recorded native-speaker audio for every word and sentence
- Microphone recording with instant scoring
- Kid-friendly tips tailored for Thai learners
- Teacher mode for browsing the full dataset and testing feedback

## Tech

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- Static SPA — no server required

## Setup

```bash
npm install
npm run dev
```

## Dataset

The dataset lives in `src/data/fullDataset.ts`, generated from the canonical pronunciation dataset.

To regenerate:
```bash
npm run generate-dataset path/to/pronunciation_dataset_v1_0.json
```

## Audio

Pre-recorded audio files are in `public/audio/`. To regenerate all 175 MP3s:

```bash
pip install gtts
npm run generate-audio
```

## Deploy

Pushes to `main` auto-deploy to GitHub Pages at [speakup.mtomlinson.ca](https://speakup.mtomlinson.ca).
