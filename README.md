# SpeakSmart AI - AI Voice for Productivity

Practice your spoken English with an AI partner. Get real-time feedback on pronunciation, grammar, and fluency.

## Getting Started

1.  Clone this repository (after pushing from Studio).
2.  Install dependencies: `npm install`.
3.  Run the development server: `npm run dev`.
4.  Open [http://localhost:9002](http://localhost:9002) in your browser.

## Deployment to GitHub

To push the code from this Studio environment to your repository:

1.  Open your local terminal in the project root.
2.  Run the following commands:
    ```bash
    git init
    git remote add origin https://github.com/Toufiq-Github/SmartSpeakAI.git
    git add .
    git commit -m "Initial commit from SpeakSmart AI Studio"
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
