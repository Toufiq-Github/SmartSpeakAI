import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
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
  Star,
  CheckCircle2,
  Users,
  Globe,
  PlayCircle,
  BarChart3,
  Sparkles,
  MessageSquare,
  GraduationCap,
  History,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';

export default function Home() {
  const screenshot = PlaceHolderImages.find((img) => img.id === 'hero-speaking');
  const feedbackImg = PlaceHolderImages.find((img) => img.id === 'feature-feedback');
  const progressImg = PlaceHolderImages.find((img) => img.id === 'feature-progress');
  const roleplayImg = PlaceHolderImages.find((img) => img.id === 'feature-roleplay');

  return (
    <div className="flex flex-col min-h-screen bg-white font-body selection:bg-primary/10 selection:text-primary relative overflow-x-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-30 grayscale"
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/63d98840a42cc68f41527a33/66b61b85b8e153d7f9801c4e_0c2113_9978482509ad47a3a8772a8449a392c3~mv2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-white/40 backdrop-blur-[2px]" />

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Features</Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Pricing</Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Dashboard</Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-500 hover:text-primary">Log in</Link>
            <Button asChild size="sm" className="rounded-full px-4 sm:px-6 font-semibold shadow-lg shadow-primary/20">
              <Link href="/speak">Start Free</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-24 md:pb-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-10 mb-16 md:mb-24 max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <Sparkles className="h-3 w-3" />
                AI-Powered English Speaking Coach
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
                Speak English Confidently. <br className="hidden sm:block" />
                <span className="text-primary italic">Instant AI Feedback.</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-medium px-4">
                Practice conversations anytime. Receive real-time grammar, pronunciation, and fluency coaching powered by Gemini AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center pt-4 w-full sm:w-auto px-4">
                <Button asChild size="lg" className="h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-bold rounded-full group w-full sm:w-auto shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
                  <Link href="/speak">
                    Start Speaking Free
                    <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-bold rounded-full border-2 border-gray-200 hover:bg-white w-full sm:w-auto">
                  <PlayCircle className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex flex-col items-center gap-3 pt-4 animate-in fade-in duration-1000 delay-500">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 text-base md:text-lg font-black text-gray-900">4.9/5 Rating</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em] text-center">
                  Trusted by 50,000+ students • Powered by <span className="text-primary">Gemini</span>
                </p>
              </div>
            </div>

            {/* Product Mockup Block */}
            <div className="relative max-w-6xl mx-auto px-2">
              <div className="relative rounded-[2rem] md:rounded-[3rem] border border-gray-200 bg-white/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="hidden sm:flex items-center gap-3 p-4 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  </div>
                  <div className="mx-auto text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">ai interaction dashboard</div>
                </div>
                
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Left Column - Conversation */}
                  <div className="lg:col-span-8 p-6 md:p-10 border-r border-gray-100">
                    <div className="space-y-6 md:space-y-8">
                      <div className="flex gap-4 items-start">
                         <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                         </div>
                         <div className="bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 text-sm md:text-base font-semibold text-gray-800 leading-relaxed max-w-[90%] border border-gray-100">
                           "Hello! Let's practice a job interview. Can you tell me about your skills and why you're a good fit for this team?"
                         </div>
                      </div>
                      <div className="flex gap-4 items-start justify-end">
                         <div className="bg-primary rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 text-sm md:text-base font-semibold text-white leading-relaxed max-w-[90%] shadow-xl shadow-primary/20">
                           "I've worked as a developer for three years. I'm excellent at solving problems and working in agile teams."
                         </div>
                         <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                            <Users className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
                         </div>
                      </div>
                      <div className="flex items-center justify-center pt-8 md:pt-12">
                        <div className="bg-white rounded-full border border-gray-100 px-6 md:px-10 py-3 md:py-5 shadow-xl flex items-center gap-4 md:gap-8 group">
                          <Waves className="h-6 w-6 md:h-8 md:w-8 text-primary animate-pulse" />
                          <div className="hidden sm:block h-8 w-24 md:w-40 bg-primary/10 rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/20 animate-shimmer" />
                          </div>
                          <div className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                            <Mic className="h-5 w-5 md:h-7 md:w-7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Analysis */}
                  <div className="lg:col-span-4 p-6 md:p-10 bg-gray-50/30">
                    <div className="space-y-8 md:space-y-10">
                      <div>
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Real-Time Score</div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-2xl md:text-3xl font-black text-primary">88%</div>
                            <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Fluency</div>
                          </div>
                          <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-2xl md:text-3xl font-black text-primary">92%</div>
                            <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Grammar</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Feedback</div>
                        <div className="bg-white p-5 md:p-7 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-md space-y-3">
                          <div className="flex items-center gap-2 text-[11px] font-black text-primary uppercase">
                             <CheckCircle2 className="h-3.5 w-3.5" />
                             Pronunciation
                          </div>
                          <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-semibold">
                            "Excellent work on 'agile'! Ensure the 'g' is soft and melodic."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Block */}
        <section className="bg-white/90 border-y border-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { label: "Sessions Practiced", value: "1.2M+" },
                { label: "Success Rate", value: "95%" },
                { label: "Average Rating", value: "4.9" },
                { label: "Countries", value: "140+" },
              ].map((m, i) => (
                <div key={i} className="space-y-1 md:space-y-3">
                  <div className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">{m.value}</div>
                  <div className="text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Stacks */}
        <section id="features" className="py-20 md:py-32 space-y-20 md:space-y-40">
          <div className="container mx-auto px-4">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-40">
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary border-primary/20 font-black px-4 py-1.5 uppercase tracking-widest text-[10px]">Real-Time Conversations</Badge>
                <h2 className="text-3xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
                  Speak Naturally with <br className="hidden md:block" /> AI that Understands.
                </h2>
                <p className="text-base md:text-xl text-gray-500 leading-relaxed font-medium">
                  Our engine understands nuance, slang, and context. Engage in dialogue that feels like talking to a real coach.
                </p>
                <ul className="space-y-4">
                  {["Low latency (<1s response)", "Topic-aware follow-ups", "Natural voice synthesis"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm md:text-base font-bold text-gray-700">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] bg-gray-50 border-4 border-white shadow-xl overflow-hidden order-1 lg:order-2">
                {screenshot && <Image src={screenshot.imageUrl} alt="UI Mockup" fill className="object-cover" data-ai-hint="conversational interface" />}
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] bg-gray-50 border-4 border-white shadow-xl overflow-hidden">
                {feedbackImg && <Image src={feedbackImg.imageUrl} alt="Analysis Mockup" fill className="object-cover" data-ai-hint="ai analytics" />}
              </div>
              <div className="space-y-6 md:space-y-8">
                <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary border-primary/20 font-black px-4 py-1.5 uppercase tracking-widest text-[10px]">Advanced Diagnostics</Badge>
                <h2 className="text-3xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
                  Precision Feedback <br className="hidden md:block" /> for Every Phrase.
                </h2>
                <p className="text-base md:text-xl text-gray-500 leading-relaxed font-medium">
                  Stop guessing where you need improvement. Get instant insights into pronunciation, grammar, and rhythm.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
                  <div className="p-6 md:p-8 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 shadow-lg space-y-3">
                    <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    <div className="font-black text-gray-900 text-base md:text-lg">Fluency Score</div>
                    <div className="text-[11px] md:text-sm text-gray-500 font-medium">Track your natural rhythm.</div>
                  </div>
                  <div className="p-6 md:p-8 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 shadow-lg space-y-3">
                    <History className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    <div className="font-black text-gray-900 text-base md:text-lg">Error Tracking</div>
                    <div className="text-[11px] md:text-sm text-gray-500 font-medium">Monitor repeated mistakes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
            <div className="max-w-6xl mx-auto bg-gray-900 text-white rounded-[2rem] md:rounded-[4rem] p-10 md:p-32 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] md:blur-[120px]" />
                <div className="relative z-10 space-y-8 md:space-y-12">
                  <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-tight">Speak English <br /> like a Pro today.</h2>
                  <p className="text-base md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-bold">
                      Join thousands of students who have already transformed their confidence with SpeakSmart AI.
                  </p>
                  <div className="pt-4 md:pt-8">
                    <Button asChild size="lg" className="h-16 md:h-20 px-8 md:px-16 text-lg md:text-2xl font-black bg-white text-gray-900 hover:bg-primary hover:text-white rounded-full shadow-2xl transition-all hover:scale-105">
                      <Link href="/speak">Start Your Free Session</Link>
                    </Button>
                  </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16 mb-16">
            <div className="col-span-2 space-y-6 md:space-y-10">
              <Logo />
              <p className="text-sm md:text-base text-gray-500 max-w-xs font-semibold leading-relaxed">
                The world's leading AI-powered English partner. Built for confidence.
              </p>
            </div>
            <div className="space-y-4 md:space-y-8">
               <h4 className="text-[10px] md:text-[11px] font-black text-gray-900 uppercase tracking-widest">Product</h4>
               <ul className="space-y-3 md:space-y-5 text-[12px] md:text-sm font-bold text-gray-400">
                  <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                  <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                  <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
               </ul>
            </div>
            <div className="space-y-4 md:space-y-8">
               <h4 className="text-[10px] md:text-[11px] font-black text-gray-900 uppercase tracking-widest">Legal</h4>
               <ul className="space-y-3 md:space-y-5 text-[12px] md:text-sm font-bold text-gray-400">
                  <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
               </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] md:text-[11px] text-gray-400 font-black uppercase tracking-widest">
              &copy; {new Date().getFullYear()} SpeakSmart AI Inc.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Globe className="h-4 w-4" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest">English (US)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
