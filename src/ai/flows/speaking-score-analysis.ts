'use server';

/**
 * @fileOverview Analyzes a user's speaking session and provides a score based on fluency, pronunciation,
 * grammar accuracy, and confidence.
 *
 * - analyzeSpeakingSession - A function that analyzes the speaking session and returns a score.
 * - SpeakingScoreAnalysisInput - The input type for the analyzeSpeakingSession function.
 * - SpeakingScoreAnalysisOutput - The return type for the analyzeSpeakingSession function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SpeakingScoreAnalysisInputSchema = z.object({
  transcript: z
    .string()
    .describe('The transcript of the user speaking during the session.'),
  audioDataUri: z
    .string()
    .describe(
      'The audio recording of the user speaking during the session, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected typo here
    ),
});
export type SpeakingScoreAnalysisInput = z.infer<
  typeof SpeakingScoreAnalysisInputSchema
>;

const SpeakingScoreAnalysisOutputSchema = z.object({
  fluencyScore: z
    .number()
    .describe('A score (0-100) representing the user\'s fluency.'),
  pronunciationScore: z
    .number()
    .describe('A score (0-100) representing the user\'s pronunciation accuracy.'),
  grammarAccuracyScore: z
    .number()
    .describe('A score (0-100) representing the user\'s grammar accuracy.'),
  confidenceScore: z
    .number()
    .describe(
      'A score (0-100) representing the AI\'s assessment of the user\'s confidence based on their speech.'
    ),
  feedback: z
    .string()
    .describe('Personalized feedback for the user based on their speaking session.'),
});

export type SpeakingScoreAnalysisOutput = z.infer<
  typeof SpeakingScoreAnalysisOutputSchema
>;

export async function analyzeSpeakingSession(
  input: SpeakingScoreAnalysisInput
): Promise<SpeakingScoreAnalysisOutput> {
  return speakingScoreAnalysisFlow(input);
}

const speakingScoreAnalysisPrompt = ai.definePrompt({
  name: 'speakingScoreAnalysisPrompt',
  input: {schema: SpeakingScoreAnalysisInputSchema},
  output: {schema: SpeakingScoreAnalysisOutputSchema},
  prompt: `You are an AI speaking coach that gives helpful feedback on a users english speaking ability.

You are given the transcript of the user's speech, as well as the audio recording.

Based on the transcript and audio, provide a score (out of 100) for the user's fluency, pronunciation, grammar, and confidence.
Also, provide personalized feedback to the user. Specifically:
* Point out any grammar mistakes that are present in the transcript.
* Point out any mispronounced words that are present in the audio recording.
* Encourage the user based on their performance.

Transcript: {{{transcript}}}
Audio: {{media url=audioDataUri}}

Please provide your response in the format specified by the output schema.
`, // Include media to help with analyzing audio
});

const speakingScoreAnalysisFlow = ai.defineFlow(
  {
    name: 'speakingScoreAnalysisFlow',
    inputSchema: SpeakingScoreAnalysisInputSchema,
    outputSchema: SpeakingScoreAnalysisOutputSchema,
  },
  async input => {
    const {output} = await speakingScoreAnalysisPrompt(input);
    return output!;
  }
);
