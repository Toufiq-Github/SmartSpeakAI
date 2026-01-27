'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Message } from '@/lib/types';
import { useToast } from './use-toast';

interface UseSpeechServiceProps {
  onListen: (text: string) => void;
}

export function useSpeechService({ onListen }: UseSpeechServiceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioBlobs, setAudioBlobs] = useState<Blob[]>([]);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        toast({
            title: "Speech Recognition Not Available",
            description: "Your browser does not support speech recognition. Please try Chrome or Edge.",
            variant: "destructive",
        });
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          addMessage({ role: 'user', text: finalTranscript.trim() });
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        mediaRecorderRef.current?.stop();
      };
      
      recognition.onerror = (event) => {
        toast({
            title: "Speech Recognition Error",
            description: `An error occurred: ${event.error}. Please check your microphone permissions.`,
            variant: "destructive",
        });
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [toast]);
  
  const addMessage = useCallback((newMessage: Message) => {
    setMessages((prev) => [...prev, newMessage]);
    if (newMessage.role === 'user' && onListen) {
      setIsProcessing(true);
      onListen(newMessage.text);
      setIsProcessing(false);
    }
  }, [onListen]);

  const startListening = async () => {
    if (isListening || !recognitionRef.current) return;
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                setAudioBlobs(prev => [...prev, event.data]);
            }
        };

        mediaRecorder.start();
        recognitionRef.current.start();
        setIsListening(true);
    } catch (error) {
        toast({
            title: "Microphone Access Denied",
            description: "Please allow microphone access to use the voice feature.",
            variant: "destructive",
        });
    }
  };

  const stopListening = () => {
    if (!isListening || !recognitionRef.current) return;
    recognitionRef.current.stop();
    setIsListening(false);
    mediaRecorderRef.current?.stop();
  };

  const speak = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };
  
  const clearSession = () => {
    setMessages([]);
    setAudioBlobs([]);
  };

  return {
    messages,
    addMessage,
    isListening,
    isSpeaking,
    isProcessing,
    startListening,
    stopListening,
    speak,
    audioBlobs,
    clearSession,
  };
}
