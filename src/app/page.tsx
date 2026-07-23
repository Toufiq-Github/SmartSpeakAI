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
    imageId: 'feature-feedback',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Real-Time Feedback',
    description:
      "Receive instant, actionable feedback on your grammar, pronunciation, and vocabulary after you speak. Don't wait to improve.",
    imageId: 'feature-progress',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Speaking Score & Analysis',
    description:
      'Get a detailed breakdown of your performance after each session, including fluency, confidence, and accuracy scores.',
    imageId: 'feature-roleplay',
  },
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: 'Guided & Roleplay Modes',
    description:
      'Practice with topic-based prompts or simulate real-world scenarios like job interviews to build practical skills.',
    imageId: 'hero-speaking',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-speaking');
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
            className="object-cover opacity-10 grayscale"
            priority
          />
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo />
        </header>

        <main className="flex-grow">
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Your AI Productivity Partner
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground font-headline">
                  AI Voice for Productivity
                </h1>
                <p className="text-lg text-muted-foreground">
                  Stop just learning, start speaking. SpeakSmart AI is your personal
                  voice assistant for practicing English. Get instant feedback, track
                  your progress, and build real-world confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="font-semibold">
                    <Link href="/speak">Start Speaking for Free</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
              </div>
            </div>
          </section>

          <section id="features" className="bg-card/50 backdrop-blur-sm py-16 md:py-24">
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
                  <Card key={feature.title} className="bg-background/80 backdrop-blur-sm border hover:shadow-lg transition-shadow">
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
                  <Button asChild size="lg" className="font-semibold text-lg">
                    <Link href="/speak">Start Your First Session</Link>
                  </Button>
              </div>
          </section>
        </main>

        <footer className="bg-card/80 backdrop-blur-sm border-t mt-auto">
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
