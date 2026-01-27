import type { RealTimeFeedbackOutput, SpeakingScoreAnalysisOutput } from "@/ai/flows/real-time-feedback-on-mistakes";

export type Message = {
  role: 'user' | 'assistant';
  text: string;
  feedback?: RealTimeFeedbackOutput;
};

export type SpeakingMode = 'free' | 'guided' | 'roleplay';

export type SessionScore = SpeakingScoreAnalysisOutput & {
  date: string;
};
