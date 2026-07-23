import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Mic,
  BrainCircuit,
  Trophy,
  Repeat,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';

const features = [
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'Voice Conversation Engine',
    description:
      'Engage in natural, spoken conversations with our AI. It listens, understands, and responds like a real person.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Real-Time Feedback',
    description:
      "Receive instant, actionable feedback on your grammar, pronunciation, and vocabulary after you speak. Don't wait to improve.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Speaking Score & Analysis',
    description:
      'Get a detailed breakdown of your performance after each session, including fluency, confidence, and accuracy scores.',
  },
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: 'Guided & Roleplay Modes',
    description:
      'Practice with topic-based prompts or simulate real-world scenarios like job interviews to build practical skills.',
  },
];

export default function Home() {
  const bgImage = PlaceHolderImages.find((img) => img.id === 'homepage-bg');

  return (
    <div className="relative flex flex-col min-h-screen bg-background overflow-x-hidden">
      {/* Background Image Layer */}
      {bgImage && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image
            src={bgImage.imageUrl}
            alt="Background"
            fill
            className="object-cover opacity-50 grayscale"
            priority
          />
          {/* Matte Dark Overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo />
        </header>

        <main className="flex-grow">
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                Your AI Productivity Partner
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground font-headline">
                AI Voice for Productivity
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stop just learning, start speaking. SpeakSmart AI is your personal
                voice assistant for practicing English. Get instant feedback, track
                your progress, and build real-world confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="font-semibold text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/speak">Start Speaking for Free</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold text-lg px-8 border-primary/20 bg-background/50 hover:bg-accent">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>

          <section id="features" className="bg-secondary/30 backdrop-blur-md py-16 md:py-24 border-y border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                  A Smarter Way to Practice
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  SpeakSmart isn't a chatbot. It's a powerful training tool designed to
                  make you a better, more confident English speaker.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                  <Card key={feature.title} className="bg-background/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      {feature.icon}
                      <CardTitle className="pt-4 font-headline">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
              <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Find Your Voice?</h2>
                  <p className="text-lg text-muted-foreground mt-4 mb-8">
                      No more fear of judgment. No more expensive tutors. Just you and your AI coach, available 24/7.
                  </p>
                  <Button asChild size="lg" className="font-semibold text-lg px-12">
                    <Link href="/speak">Start Your First Session</Link>
                  </Button>
              </div>
          </section>
        </main>

        <footer className="bg-background border-t border-border/50 mt-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
            <Logo />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SpeakSmart AI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}