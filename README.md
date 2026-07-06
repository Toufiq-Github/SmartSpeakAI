# SpeakSmart AI - AI Voice for Productivity

Practice your spoken English with an AI partner. Get real-time feedback on pronunciation, grammar, and fluency.

## Push to GitHub using the Workspace Terminal

You can push your code directly from the terminal at the bottom of your screen. Run these commands:

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
    git commit -m "Initial commit from SpeakSmart AI Studio"
    ```

4.  **Push to the main branch:**
    ```bash
    git branch -M main
    git push -u origin main
    ```

## Deployment to Vercel

Once your code is on GitHub:

1.  Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** and then **"Project"**.
3.  Import the `SmartSpeakAI` repository from your GitHub.
4.  Ensure the Framework Preset is set to **Next.js**.
5.  Add your environment variables (like `GEMINI_API_KEY`) in the "Environment Variables" section.
6.  Click **Deploy**.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **AI Engine:** Google Genkit (Gemini 2.5 Flash)
- **UI Components:** Shadcn UI, Tailwind CSS
- **Icons:** Lucide React
- **Charts:** Recharts
