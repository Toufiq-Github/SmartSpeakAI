'use server';

import { ai } from '@/ai/genkit';
import { provideRealTimeFeedback } from '@/ai/flows/real-time-feedback-on-mistakes';
import { analyzeSpeakingSession } from '@/ai/flows/speaking-score-analysis';
import { z } from 'zod';

// Simple conversational prompt
const conversationalPrompt = ai.definePrompt(
  {
    name: 'conversationalPrompt',
    input: {
      schema: z.object({
        history: z.array(z.object({
            role: z.enum(['user', 'model']),
            parts: z.array(z.object({
                text: z.string(),
            })),
        })),
        userSpeech: z.string(),
      }),
    },
    prompt: `You are a friendly and encouraging AI English speaking partner. Your goal is to keep the conversation going naturally.

Here is the conversation history:
{{#each history}}
{{role}}: {{parts.[0].text}}
{{/each}}

The user just said:
user: {{{userSpeech}}}

Your task is to provide a natural, conversational response to keep the dialogue flowing. Ask a follow-up question if it feels right. Keep your response concise.`,
  }
);


export async function getAIResponseAndFeedback(history: any[], userSpeech: string) {
  try {
    const [feedback, conversationalResponse] = await Promise.all([
      provideRealTimeFeedback({ userSpeech }),
      conversationalPrompt({ history, userSpeech }),
    ]);
    
    const conversationalReply = await conversationalResponse.text();

    return {
      conversationalReply,
      feedback,
    };
  } catch (error) {
    console.error('Error getting AI response and feedback:', error);
    return {
      conversationalReply: "I'm sorry, I had trouble processing that. Could you please try again?",
      feedback: {
        grammarFeedback: '',
        pronunciationFeedback: '',
        vocabularySuggestions: '',
        fluencyFeedback: '',
      }
    };
  }
}

export async function getSessionAnalysis(transcript: string, audioDataUri: string) {
    try {
        if (!transcript.trim() || !audioDataUri) {
            return null;
        }
        const analysis = await analyzeSpeakingSession({ transcript, audioDataUri });
        return analysis;
    } catch (error) {
        console.error('Error getting session analysis:', error);
        return null;
    }
}
