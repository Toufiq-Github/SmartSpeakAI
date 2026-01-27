'use server';

/**
 * @fileOverview Provides real-time feedback on user's grammar, pronunciation, vocabulary, and fluency.
 *
 * - provideRealTimeFeedback - A function that processes user speech and provides feedback.
 * - RealTimeFeedbackInput - The input type for the provideRealTimeFeedback function.
 * - RealTimeFeedbackOutput - The return type for the provideRealTimeFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RealTimeFeedbackInputSchema = z.object({
  userSpeech: z
    .string()
    .describe('The transcribed text of the user\'s speech.'),
});
export type RealTimeFeedbackInput = z.infer<typeof RealTimeFeedbackInputSchema>;

const RealTimeFeedbackOutputSchema = z.object({
  grammarFeedback: z.string().describe('Feedback on grammar mistakes.'),
  pronunciationFeedback: z.string().describe('Feedback on pronunciation issues.'),
  vocabularySuggestions: z.string().describe('Suggestions for better vocabulary.'),
  fluencyFeedback: z.string().describe('Feedback on fluency, including pauses and filler words.'),
});
export type RealTimeFeedbackOutput = z.infer<typeof RealTimeFeedbackOutputSchema>;

export async function provideRealTimeFeedback(
  input: RealTimeFeedbackInput
): Promise<RealTimeFeedbackOutput> {
  return realTimeFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'realTimeFeedbackPrompt',
  input: {schema: RealTimeFeedbackInputSchema},
  output: {schema: RealTimeFeedbackOutputSchema},
  prompt: `You are an AI language tutor providing feedback to a student learning English.\n\n  Analyze the following text and provide feedback in the following categories:\n  * Grammar mistakes
  * Pronunciation issues
  * Vocabulary suggestions
  * Fluency (pauses, fillers)\n\n  Text: {{{userSpeech}}}\n\n  Do not interrupt mid-sentence. Provide short, direct corrections after the user finishes speaking.
  `,
});

const realTimeFeedbackFlow = ai.defineFlow(
  {
    name: 'realTimeFeedbackFlow',
    inputSchema: RealTimeFeedbackInputSchema,
    outputSchema: RealTimeFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
