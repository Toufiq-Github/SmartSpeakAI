
'use client';

import { useState, useEffect } from 'react';
import type { SessionScore, SpeakingMode } from '@/lib/types';
import { getAIResponseAndFeedback, getSessionAnalysis } from '@/app/actions';
import { useSpeechService } from '@/hooks/use-speech-service';
import { Button } from '@/components/ui/button';
import { Mic, Send, Square } from 'lucide-react';
import ModeSelector from '@/components/app/mode-selector';
import ConversationArea from '@/components/app/conversation-area';
import SessionSummaryDialog from '@/components/app/session-summary-dialog';
import Logo from '@/components/logo';
import Link from 'next/link';
import { useUser, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function SpeakClient() {
  const { user } = useUser();
  const db = useFirestore();
  const [mode, setMode] = useState<SpeakingMode>('free');
  const [topic, setTopic] = useState('');
  const [sessionStarted, setSessionStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [sessionScores, setSessionScores] = useState<SessionScore | null>(null);
  const [textInput, setTextInput] = useState('');

  const {
    messages,
    isListening,
    startListening,
    stopListening,
    speak,
    addMessage,
    audioBlobs,
    clearSession,
    isSpeaking,
    isProcessing,
  } = useSpeechService({
    onListen: async (userSpeech) => {
      setIsLoading(true);
      const history = messages.map((msg) => ({
        role: msg.role === 'user' ? ('user' as const) : ('model' as const),
        parts: [{ text: msg.text }],
      }));
      const { conversationalReply, feedback } =
        await getAIResponseAndFeedback(history, userSpeech);
      setIsLoading(false);
      if (conversationalReply) {
        addMessage({ role: 'assistant', text: conversationalReply, feedback });
        speak(conversationalReply);
      }
    },
  });

  const handleStartSession = (selectedMode: SpeakingMode, selectedTopic: string) => {
    setMode(selectedMode);
    setTopic(selectedTopic);
    setSessionStarted(true);
    let initialMessage = "Let's start our conversation.";
    if (selectedMode === 'guided' && selectedTopic) {
      initialMessage = `Today's topic is: ${selectedTopic}. Let's discuss it.`;
    } else if (selectedMode === 'roleplay' && selectedTopic) {
      initialMessage = `Let's roleplay. The scenario is: ${selectedTopic}. I'll start.`;
    }
    addMessage({ role: 'assistant', text: initialMessage });
    speak(initialMessage);
  };

  const handleEndSession = async () => {
    setIsLoading(true);
    const fullTranscript = messages
      .filter((m) => m.role === 'user')
      .map((m) => m.text)
      .join('\n');
    
    if (audioBlobs.length === 0 || !fullTranscript) {
        setShowSummary(true);
        setSessionScores(null);
        setIsLoading(false);
        return;
    }

    const audioBlob = new Blob(audioBlobs, { type: 'audio/webm' });
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = async () => {
      const base64Audio = reader.result as string;
      const analysis = await getSessionAnalysis(fullTranscript, base64Audio);
      
      if (analysis) {
        const newScore: SessionScore = { 
          ...analysis, 
          date: new Date().toISOString() 
        };
        setSessionScores(newScore);
        
        // Save to Firestore if user is authenticated
        if (user && db) {
          const sessionsRef = collection(db, 'users', user.uid, 'sessions');
          addDoc(sessionsRef, {
            ...analysis,
            topic: topic || 'Free Conversation',
            mode: mode,
            date: serverTimestamp(),
          });
        } else {
          // Fallback to local storage for guests
          const pastScores: SessionScore[] = JSON.parse(localStorage.getItem('speaksmart-sessions') || '[]');
          localStorage.setItem('speaksmart-sessions', JSON.stringify([...pastScores, newScore]));
        }
      }
      setShowSummary(true);
      setIsLoading(false);
    };
  };

  const handleTextInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim()) {
      addMessage({ role: 'user', text: textInput.trim() });
      setTextInput('');
    }
  };

  const resetFlow = () => {
    clearSession();
    setShowSummary(false);
    setSessionScores(null);
    setSessionStarted(false);
  };

  return (
    <div className="flex flex-col min-h-screen md:h-screen bg-card overflow-hidden">
      <header className="flex items-center justify-between border-b p-4 bg-white shrink-0">
        <Logo className="text-xl md:text-2xl" />
        {sessionStarted && (
            <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="destructive"
              size="sm"
              onClick={handleEndSession}
              disabled={isLoading || isListening || isSpeaking || isProcessing}
            >
              End
            </Button>
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex"><Link href="/dashboard">Dashboard</Link></Button>
            </div>
        )}
      </header>

      {!sessionStarted ? (
        <div className="flex-1 overflow-y-auto">
          <ModeSelector onStart={handleStartSession} />
        </div>
      ) : (
        <div className="flex flex-1 flex-col overflow-hidden relative">
          <ConversationArea messages={messages} isLoading={isLoading} />

          <div className="border-t p-4 bg-white shrink-0">
            <div className="relative mx-auto max-w-2xl">
              <div className="flex gap-2">
                 <Button
                    onClick={isListening ? stopListening : startListening}
                    disabled={isLoading || isSpeaking || isProcessing}
                    className="group transition-all duration-300 shrink-0"
                    size="icon"
                  >
                    {isListening ? (
                      <Square className="h-5 w-5 md:h-6 md:w-6 text-destructive animate-pulse" />
                    ) : (
                      <Mic className="h-5 w-5 md:h-6 md:w-6" />
                    )}
                  </Button>
                  <form onSubmit={handleTextInputSubmit} className="flex-1 flex gap-2">
                    <input
                      type="text"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full rounded-md border border-input bg-background px-3 md:px-4 py-2 text-sm md:text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={isListening || isLoading || isSpeaking || isProcessing}
                    />
                    <Button type="submit" size="icon" className="shrink-0" disabled={!textInput || isListening || isLoading || isSpeaking || isProcessing}>
                      <Send className="h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <SessionSummaryDialog open={showSummary} onOpenChange={setShowSummary} scores={sessionScores} onRestart={resetFlow} />
    </div>
  );
}
