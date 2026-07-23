'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Coffee, Briefcase, MessageSquare } from 'lucide-react';
import type { SpeakingMode } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ModeSelectorProps {
  onStart: (mode: SpeakingMode, topic: string) => void;
}

const guidedTopics = [
  'What is your favorite hobby and why?',
  'Describe a memorable vacation you have taken.',
  'What are your career goals for the next five years?',
  'Talk about a book or movie that has impacted you.',
];

const roleplayScenarios = [
  'You are at a coffee shop and need to order a drink.',
  'You are in a job interview for a customer service position.',
  'You are meeting a new colleague for the first time.',
  'You need to return a faulty item to a store.',
];

export default function ModeSelector({ onStart }: ModeSelectorProps) {
  const [mode, setMode] = useState<SpeakingMode>('free');
  const [subSelection, setSubSelection] = useState('');

  const handleStart = () => {
    if ((mode === 'guided' || mode === 'roleplay') && !subSelection) {
      const defaultTopic = mode === 'guided' ? guidedTopics[0] : roleplayScenarios[0];
      onStart(mode, defaultTopic);
    } else {
        onStart(mode, subSelection);
    }
  };

  return (
    <div className="flex-grow flex items-start md:items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-2xl shadow-2xl border-none md:border md:border-border">
        <CardHeader className="text-center p-4 md:p-6">
          <CardTitle className="text-2xl md:text-3xl font-headline">Choose Your Mode</CardTitle>
          <CardDescription className="text-sm md:text-base">Select how you want to practice today.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 md:space-y-8 p-4 md:p-6">
          <RadioGroup value={mode} onValueChange={(value) => setMode(value as SpeakingMode)} className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            <Label htmlFor="free" className="block cursor-pointer">
              <Card className={cn("transition-all h-full", mode === 'free' ? 'border-primary ring-2 ring-primary bg-primary/5' : 'hover:border-primary/50')}>
                <CardHeader className="flex flex-col items-center justify-center text-center p-4 md:p-6">
                  <RadioGroupItem value="free" id="free" className="sr-only"/>
                  <MessageSquare className="h-8 w-8 md:h-10 md:w-10 mb-2 text-primary"/>
                  <p className="font-semibold text-sm md:text-base">Free Conversation</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Talk about anything.</p>
                </CardHeader>
              </Card>
            </Label>
            <Label htmlFor="guided" className="block cursor-pointer">
              <Card className={cn("transition-all h-full", mode === 'guided' ? 'border-primary ring-2 ring-primary bg-primary/5' : 'hover:border-primary/50')}>
                <CardHeader className="flex flex-col items-center justify-center text-center p-4 md:p-6">
                  <RadioGroupItem value="guided" id="guided" className="sr-only"/>
                  <Coffee className="h-8 w-8 md:h-10 md:w-10 mb-2 text-primary"/>
                  <p className="font-semibold text-sm md:text-base">Guided Practice</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Topic-based prompts.</p>
                </CardHeader>
              </Card>
            </Label>
            <Label htmlFor="roleplay" className="block cursor-pointer">
              <Card className={cn("transition-all h-full", mode === 'roleplay' ? 'border-primary ring-2 ring-primary bg-primary/5' : 'hover:border-primary/50')}>
                <CardHeader className="flex flex-col items-center justify-center text-center p-4 md:p-6">
                  <RadioGroupItem value="roleplay" id="roleplay" className="sr-only"/>
                  <Briefcase className="h-8 w-8 md:h-10 md:w-10 mb-2 text-primary"/>
                  <p className="font-semibold text-sm md:text-base">Roleplay Mode</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Real-world scenarios.</p>
                </CardHeader>
              </Card>
            </Label>
          </RadioGroup>

          {(mode === 'guided' || mode === 'roleplay') && (
            <div className="space-y-3">
              <Label className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground">Select a Scenario</Label>
              <RadioGroup onValueChange={setSubSelection} defaultValue={mode === 'guided' ? guidedTopics[0] : roleplayScenarios[0]} className="space-y-2">
                  {(mode === 'guided' ? guidedTopics : roleplayScenarios).map((item) => (
                      <div key={item} className="flex items-center space-x-2 bg-secondary/50 p-2 md:p-3 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item} className="text-xs md:text-sm font-medium leading-tight cursor-pointer flex-1">{item}</Label>
                      </div>
                  ))}
              </RadioGroup>
            </div>
          )}

          <Button onClick={handleStart} size="lg" className="w-full text-base md:text-lg font-semibold h-12 md:h-14">
            Start Session
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
