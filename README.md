# 🎙️ SpeakSmart AI

SpeakSmart AI is a tool for practicing spoken English with an AI partner. It provides analysis of pronunciation, grammar, and fluency.

## Overview

SpeakSmart AI is an AI-powered English speaking platform designed to help learners improve their spoken English through natural conversations with an intelligent AI assistant. It provides real-time conversational practice and detailed feedback on pronunciation, grammar, fluency, and vocabulary.

## Features

- AI-powered English conversations
- Authentication via Firebase
- Real-time speaking feedback
- Grammar correction
- Pronunciation evaluation
- Fast and responsive UI
- Fully responsive design

## Deployment

### Sync with GitHub
Run these commands in your terminal to sync your local code with your repository:

```bash
git add .
git commit -m "Final updates and styling"
git push origin main --force
```

### Deploy to Vercel
1. **Import to Vercel:** Connect your GitHub repository.
2. **Environment Variables:** Add `GOOGLE_GENAI_API_KEY` with your key from Google AI Studio.
3. **Deploy:** Click the Deploy button.

## Tech Stack

- **Frontend:** Next.js 15, React, TypeScript
- **AI Engine:** Google Genkit (Gemini 2.5 Flash)
- **Backend:** Firebase (Auth & Firestore)
- **Styling:** Tailwind CSS + Shadcn UI
