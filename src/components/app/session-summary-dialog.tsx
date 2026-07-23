'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Award, Frown, Gauge, MicVocal, MessageSquareQuote } from 'lucide-react';
import Link from 'next/link';
import type { SessionScore } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SessionSummaryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  scores: SessionScore | null;
  onRestart: () => void;
}

const scoreItems = [
    { key: 'fluencyScore', label: 'Fluency', icon: <MessageSquareQuote className="h-4 w-4 md:h-5 md:w-5" /> },
    { key: 'pronunciationScore', label: 'Pronunciation', icon: <MicVocal className="h-4 w-4 md:h-5 md:w-5" /> },
    { key: 'grammarAccuracyScore', label: 'Grammar', icon: <Award className="h-4 w-4 md:h-5 md:w-5" /> },
    { key: 'confidenceScore', label: 'Confidence', icon: <Gauge className="h-4 w-4 md:h-5 md:w-5" /> },
] as const;


export default function SessionSummaryDialog({ open, onOpenChange, scores, onRestart }: SessionSummaryDialogProps) {
  
  const handleRestart = () => {
    onRestart();
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
        <ScrollArea className="flex-1">
          <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-xl md:text-2xl font-headline text-center">Session Summary</DialogTitle>
              <DialogDescription className="text-center text-xs md:text-sm">
                Here's a breakdown of your performance.
              </DialogDescription>
            </DialogHeader>
            
            {scores ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Your Scores</h3>
                    {scoreItems.map(({ key, label, icon }) => (
                        <div key={key} className="space-y-2">
                            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                                {icon}
                                <span className="font-medium">{label}</span>
                                <span className="ml-auto font-bold text-foreground">{scores[key]}%</span>
                            </div>
                            <Progress value={scores[key]} className="h-1.5 md:h-2" />
                        </div>
                    ))}
                </div>
                <div className="space-y-4 rounded-2xl bg-secondary/30 p-4 md:p-6 border border-secondary">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">AI Feedback</h3>
                    <p className="text-xs md:text-sm text-secondary-foreground leading-relaxed font-medium">{scores.feedback}</p>
                </div>
              </div>
            ) : (
                <div className="py-8 md:py-12 text-center space-y-4">
                    <Frown className="h-10 w-10 md:h-12 md:w-12 mx-auto text-muted-foreground" />
                    <h3 className="font-bold text-lg">Analysis Not Available</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">We couldn't generate a report. <br className="hidden sm:block"/>Try a longer session next time.</p>
                </div>
            )}
          </div>
        </ScrollArea>

        <DialogFooter className="p-6 bg-secondary/10 border-t flex flex-col sm:flex-row gap-2">
          <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={handleRestart}>
            New Session
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
