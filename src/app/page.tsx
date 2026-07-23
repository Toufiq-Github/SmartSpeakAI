import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Mic,
  BrainCircuit,
  Trophy,
  Repeat,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';

const features = [
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'Voice Engine',
    description:
      'Engage in natural, spoken conversations with our AI. It listens, understands, and responds like a real person.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Real-Time Feedback',
    description:
      "Receive instant feedback on grammar, pronunciation, and vocabulary after you speak. Don't wait to improve.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Detailed Analysis',
    description:
      'Get a breakdown of your performance after each session, including fluency, confidence, and accuracy scores.',
  },
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: 'Guided Modes',
    description:
      'Practice with topic-based prompts or simulate real-world scenarios like job interviews to build practical skills.',
  },
];

export default function Home() {
  const bgImage = PlaceHolderImages.find((img) => img.id === 'homepage-bg');

  return (
    <div className="relative flex flex-col min-h-screen bg-background overflow-x-hidden">
      {/* Background Image Layer - Subtle visibility for clean white theme */}
      {bgImage && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image
            src={bgImage.imageUrl}
            alt="Background"
            fill
            className="object-cover opacity-5 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Dashboard</Link>
              <Button asChild size="sm">
                <Link href="/speak">Start Speaking</Link>
              </Button>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {/* Hero Section - Block Style */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-20 md:pb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/10">
                  <Zap className="h-4 w-4" />
                  AI Voice for Productivity
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Master Your <span className="text-primary">Spoken English</span> with AI
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Stop just learning, start speaking. SpeakSmart AI is your personal
                  voice partner for practicing English. Get instant feedback and build real-world confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold group shadow-lg shadow-primary/20">
                    <Link href="/speak">
                      Start Your First Session
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold">
                    <Link href="#features">Explore Features</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4 text-muted-foreground text-sm font-medium">
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-500" /> Private Practice</div>
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-500" /> 24/7 Availability</div>
                </div>
              </div>
              
              {/* Hero Visual Block */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl border border-primary/10 shadow-inner flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-50" />
                  <Mic className="h-32 w-32 text-primary/40" />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <BrainCircuit className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Real-time Feedback</div>
                        <div className="text-xs text-muted-foreground">Analyzing pronunciation...</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/10 rounded-full w-full" />
                      <div className="h-2 bg-primary/10 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid - Modular Block System */}
          <section id="features" className="bg-muted/30 py-24 border-y border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  A Smarter Way to Practice
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Powerful training tools designed to make you a more confident English speaker.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => (
                  <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col h-full">
                    <div className="h-2 w-full bg-primary/10" />
                    <CardHeader className="pt-8">
                      <div className="mb-4 bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Block */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
              <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-[2rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Ready to Find Your Voice?</h2>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                        No more fear of judgment. No more expensive tutors. Just you and your AI coach, available 24/7.
                    </p>
                    <div className="pt-4">
                      <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold">
                        <Link href="/speak">Start Your Free Session Now</Link>
                      </Button>
                    </div>
                  </div>
              </div>
          </section>
        </main>

        <footer className="bg-background border-t border-border/50 mt-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <Logo />
              <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-primary transition-colors">Support</Link>
              </div>
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} SpeakSmart AI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
