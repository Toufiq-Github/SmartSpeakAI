'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Coffee, Briefcase, MessageSquare } from 'lucide-react';
import type { SpeakingMode } from '@/lib/types';

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
    <div className="flex-grow flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Choose Your Practice Mode</CardTitle>
          <CardDescription>Select how you want to practice your speaking skills today.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <RadioGroup value={mode} onValueChange={(value) => setMode(value as SpeakingMode)} className="grid md:grid-cols-3 gap-4">
            <Label htmlFor="free" className="block">
              <Card className={`cursor-pointer transition-all ${mode === 'free' ? 'border-primary ring-2 ring-primary' : 'hover:border-primary/50'}`}>
                <CardHeader className="flex flex-col items-center justify-center text-center p-6">
                  <RadioGroupItem value="free" id="free" className="sr-only"/>
                  <MessageSquare className="h-10 w-10 mb-2 text-primary"/>
                  <p className="font-semibold">Free Conversation</p>
                  <p className="text-xs text-muted-foreground">Talk about anything.</p>
                </CardHeader>
              </Card>
            </Label>
            <Label htmlFor="guided" className="block">
              <Card className={`cursor-pointer transition-all ${mode === 'guided' ? 'border-primary ring-2 ring-primary' : 'hover:border-primary/50'}`}>
                <CardHeader className="flex flex-col items-center justify-center text-center p-6">
                  <RadioGroupItem value="guided" id="guided" className="sr-only"/>
                  <Coffee className="h-10 w-10 mb-2 text-primary"/>
                  <p className="font-semibold">Guided Practice</p>
                  <p className="text-xs text-muted-foreground">Topic-based prompts.</p>
                </CardHeader>
              </Card>
            </Label>
            <Label htmlFor="roleplay" className="block">
              <Card className={`cursor-pointer transition-all ${mode === 'roleplay' ? 'border-primary ring-2 ring-primary' : 'hover:border-primary/50'}`}>
                <CardHeader className="flex flex-col items-center justify-center text-center p-6">
                  <RadioGroupItem value="roleplay" id="roleplay" className="sr-only"/>
                  <Briefcase className="h-10 w-10 mb-2 text-primary"/>
                  <p className="font-semibold">Roleplay Mode</p>
                  <p className="text-xs text-muted-foreground">Real-world scenarios.</p>
                </CardHeader>
              </Card>
            </Label>
          </RadioGroup>

          {mode === 'guided' && (
             <RadioGroup onValueChange={setSubSelection} defaultValue={guidedTopics[0]} className="space-y-2">
                {guidedTopics.map((topic) => (
                    <div key={topic} className="flex items-center space-x-2">
                        <RadioGroupItem value={topic} id={topic} />
                        <Label htmlFor={topic}>{topic}</Label>
                    </div>
                ))}
            </RadioGroup>
          )}

          {mode === 'roleplay' && (
             <RadioGroup onValueChange={setSubSelection} defaultValue={roleplayScenarios[0]} className="space-y-2">
                {roleplayScenarios.map((scenario) => (
                    <div key={scenario} className="flex items-center space-x-2">
                        <RadioGroupItem value={scenario} id={scenario} />
                        <Label htmlFor={scenario}>{scenario}</Label>
                    </div>
                ))}
            </RadioGroup>
          )}

          <Button onClick={handleStart} size="lg" className="w-full text-lg font-semibold">
            Start Session
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
