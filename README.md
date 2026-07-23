# SpeakSmart AI - Practice Spoken English

Practice your spoken English with an AI partner. This tool provides real-time feedback on pronunciation, grammar, and fluency.

## Push to GitHub

Run these commands in your terminal:

1.  **Initialize Git:**
    ```bash
    git init
    ```

2.  **Add your remote repository:**
    ```bash
    git remote add origin https://github.com/Toufiq-Github/SmartSpeakAI.git
    ```

3.  **Stage and commit your changes:**
    ```bash
    git add .
    git commit -m "Initial commit"
    ```

4.  **Push to the main branch:**
    ```bash
    git branch -M main
    git push -u origin main
    ```

## Deployment to Vercel

1.  Push your code to the GitHub repo linked above.
2.  Import the repository into Vercel.
3.  Add the `GOOGLE_GENAI_API_KEY` to your environment variables.
4.  Deploy.

## Technical Details

- **Frontend:** Next.js 15
- **AI:** Google Genkit (Gemini 2.5 Flash)
- **Database/Auth:** Firebase
- **Styling:** Tailwind CSS + Shadcn UI
