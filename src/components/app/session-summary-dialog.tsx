'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Award, Frown, Gauge, MicVocal, MessageSquareQuote } from 'lucide-react';
import Link from 'next/link';
import type { SessionScore } from '@/lib/types';

interface SessionSummaryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  scores: SessionScore | null;
  onRestart: () => void;
}

const scoreItems = [
    { key: 'fluencyScore', label: 'Fluency', icon: <MessageSquareQuote className="h-5 w-5" /> },
    { key: 'pronunciationScore', label: 'Pronunciation', icon: <MicVocal className="h-5 w-5" /> },
    { key: 'grammarAccuracyScore', label: 'Grammar Accuracy', icon: <Award className="h-5 w-5" /> },
    { key: 'confidenceScore', label: 'Confidence', icon: <Gauge className="h-5 w-5" /> },
] as const;


export default function SessionSummaryDialog({ open, onOpenChange, scores, onRestart }: SessionSummaryDialogProps) {
  
  const handleRestart = () => {
    onRestart();
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-center">Session Summary</DialogTitle>
          <DialogDescription className="text-center">
            Here's a breakdown of your performance in this session.
          </DialogDescription>
        </DialogHeader>
        
        {scores ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
                <h3 className="font-semibold">Your Scores</h3>
                {scoreItems.map(({ key, label, icon }) => (
                    <div key={key} className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            {icon}
                            <span>{label}</span>
                            <span className="ml-auto font-semibold text-foreground">{scores[key]} / 100</span>
                        </div>
                        <Progress value={scores[key]} className="h-2" />
                    </div>
                ))}
            </div>
            <div className="space-y-4 rounded-lg bg-secondary/50 p-4">
                <h3 className="font-semibold">Personalized Feedback</h3>
                <p className="text-sm text-secondary-foreground leading-relaxed">{scores.feedback}</p>
            </div>
          </div>
        ) : (
            <div className="py-8 text-center space-y-4">
                <Frown className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="font-semibold">Analysis Not Available</h3>
                <p className="text-muted-foreground">We couldn't generate a report for this session. <br/>This usually happens if the session was too short or no audio was recorded.</p>
            </div>
        )}

        <DialogFooter className="sm:justify-center gap-2 pt-4">
          <Button type="button" variant="outline" onClick={handleRestart}>
            Start New Session
          </Button>
          <Button asChild>
            <Link href="/dashboard">View Progress Dashboard</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
