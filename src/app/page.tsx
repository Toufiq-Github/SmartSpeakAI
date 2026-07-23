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
  Activity,
  Waves,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';

const features = [
  {
    icon: <Mic className="h-7 w-7 text-primary" />,
    title: 'Voice Engine',
    description:
      'Engage in natural, spoken conversations with our AI. It listens, understands, and responds like a real person.',
  },
  {
    icon: <BrainCircuit className="h-7 w-7 text-primary" />,
    title: 'Real-Time Feedback',
    description:
      "Receive instant feedback on grammar, pronunciation, and vocabulary after you speak. Don't wait to improve.",
  },
  {
    icon: <Trophy className="h-7 w-7 text-primary" />,
    title: 'Detailed Analysis',
    description:
      'Get a breakdown of your performance after each session, including fluency, confidence, and accuracy scores.',
  },
  {
    icon: <Repeat className="h-7 w-7 text-primary" />,
    title: 'Guided Modes',
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
            className="object-cover opacity-5 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-white/95" />
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Dashboard</Link>
              <Button asChild size="sm" className="font-semibold">
                <Link href="/speak">Start Speaking</Link>
              </Button>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-16 md:pb-32">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                  <Zap className="h-4 w-4" />
                  AI Voice for Productivity
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
                  Master Your <span className="text-[#10B981]">Spoken English</span> with AI
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Stop just learning, start speaking. SpeakSmart AI is your personal
                  voice partner for practicing English. Get instant feedback and build real-world confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button asChild size="lg" className="h-14 px-10 text-lg font-bold group shadow-xl shadow-primary/20">
                    <Link href="/speak">
                      Start Your First Session
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-bold border-2">
                    <Link href="#features">Explore Features</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-6 text-muted-foreground text-sm font-semibold uppercase tracking-wider">
                  <div className="flex items-center gap-2.5"><ShieldCheck className="h-5 w-5 text-emerald-600" /> Private Practice</div>
                  <div className="flex items-center gap-2.5"><ShieldCheck className="h-5 w-5 text-emerald-600" /> 24/7 Availability</div>
                </div>
              </div>
              
              {/* Hero Visual Block - Upscaled Right Side */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative aspect-[4/5] bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40" />
                  
                  {/* Floating Tech Elements */}
                  <div className="absolute top-12 right-12 animate-bounce duration-[3000ms]">
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-lg flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Activity className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div className="text-xs font-bold text-emerald-900">Fluency: 92%</div>
                    </div>
                  </div>

                  <div className="absolute left-8 top-1/3 -translate-y-1/2">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-xl flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                         <Waves className="h-4 w-4 text-primary animate-pulse" />
                         <span className="text-[10px] font-bold text-muted-foreground uppercase">Real-time Waveform</span>
                      </div>
                      <div className="flex gap-1 items-end h-8">
                        <div className="w-1 bg-primary/40 rounded-full h-1/2 animate-pulse" />
                        <div className="w-1 bg-primary/60 rounded-full h-3/4 animate-pulse delay-75" />
                        <div className="w-1 bg-primary rounded-full h-full animate-pulse delay-150" />
                        <div className="w-1 bg-primary/60 rounded-full h-2/3 animate-pulse delay-200" />
                        <div className="w-1 bg-primary/40 rounded-full h-1/3 animate-pulse delay-300" />
                      </div>
                    </div>
                  </div>

                  {/* Main Interaction Card */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-white shadow-inner border border-slate-100 flex items-center justify-center mb-10 group cursor-pointer hover:scale-105 transition-transform">
                      <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20" />
                        <Mic className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    
                    <div className="w-[85%] bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <BrainCircuit className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-bold">Feedback Analysis</div>
                            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Gemini 2.5 Flash Engine</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse delay-100" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground">
                          <span>Pronunciation</span>
                          <span className="text-primary">Perfect</span>
                        </div>
                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[88%] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
                        </div>
                        <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 italic text-[13px] text-primary font-medium leading-relaxed">
                          "Your pronunciation of ' Productivity ' is clear and natural."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section id="features" className="bg-slate-50 py-32 border-y border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-6 mb-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                  A Smarter Way to Practice
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Powerful training tools designed to build your confidence and fluency in real-world situations.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                  <Card key={feature.title} className="group hover:shadow-2xl transition-all duration-500 border-slate-200 bg-white shadow-sm flex flex-col h-full rounded-2xl">
                    <CardHeader className="pt-10 pb-6">
                      <div className="mb-6 bg-primary/5 w-16 h-16 rounded-[1.25rem] flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-sm">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 leading-tight">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow pb-10">
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
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
              <div className="max-w-5xl mx-auto bg-slate-900 text-white rounded-[3rem] p-16 md:p-24 shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                  
                  <div className="relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to Find Your Voice?</h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        No more fear of judgment. No more expensive tutors. Just you and your AI coach, available 24/7.
                    </p>
                    <div className="pt-6">
                      <Button asChild size="lg" className="h-16 px-14 text-xl font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-xl shadow-white/10">
                        <Link href="/speak">Start Your Free Session Now</Link>
                      </Button>
                    </div>
                  </div>
              </div>
          </section>
        </main>

        <footer className="bg-white border-t border-slate-200 mt-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <Logo />
              <div className="flex gap-10 text-sm font-bold text-muted-foreground tracking-wide">
                <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-primary transition-colors">Support</Link>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                &copy; {new Date().getFullYear()} SpeakSmart AI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
