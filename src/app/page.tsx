'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import {
  Mic,
  BrainCircuit,
  ArrowRight,
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
  GraduationCap,
  History,
  TrendingUp,
  MessageCircle,
  LogOut,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';

export default function Home() {
  const { user } = useUser();
  const auth = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const screenshot = PlaceHolderImages.find((img) => img.id === 'hero-speaking');
  const feedbackImg = PlaceHolderImages.find((img) => img.id === 'feature-feedback');

  const handleSignOut = () => {
    if (auth) signOut(auth);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-body selection:bg-primary/10 selection:text-primary relative overflow-x-hidden">
      {/* Background Texture */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] grayscale"
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/63d98840a42cc68f41527a33/66b61b85b8e153d7f9801c4e_0c2113_9978482509ad47a3a8772a8449a392c3~mv2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-white/95 via-white/80 to-white/95 backdrop-blur-[2px]" />

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#features" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">Features</Link>
            <Link href="/dashboard" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">Dashboard</Link>
            <Link href="#about" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            {mounted && (
              user ? (
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-gray-500 font-bold hover:text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                  <Button asChild size="sm" className="rounded-full px-6 font-bold shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90">
                    <Link href="/speak">Practice Now</Link>
                  </Button>
                </div>
              ) : (
                <Button asChild size="sm" className="rounded-full px-6 font-bold shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90">
                  <Link href="/login">Get Started</Link>
                </Button>
              )
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 md:pt-20 md:pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-10 mb-20 max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20 animate-in fade-in slide-in-from-top-2 duration-1000">
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered English Speaking Coach
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Speak English Confidently. <br />
                <span className="text-primary">Instant AI Feedback.</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-medium px-4">
                Practice conversations anytime with a human-like AI partner. Master pronunciation, grammar, and fluency with precision coaching powered by Gemini AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center pt-4 w-full sm:w-auto px-4">
                <Button asChild size="lg" className="h-16 px-12 text-lg font-black rounded-full group w-full sm:w-auto shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
                  <Link href={mounted && user ? "/speak" : "/login"}>
                    {user ? "Start Speaking Free" : "Get Started Free"}
                    <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-12 text-lg font-black rounded-full border-2 border-gray-200 hover:bg-gray-50 w-full sm:w-auto">
                  <PlayCircle className="mr-2 h-6 w-6" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex flex-col items-center gap-4 pt-8 animate-in fade-in duration-1000 delay-500">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 text-lg font-black text-gray-900">4.9/5 Rating</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-400 font-black uppercase tracking-[0.25em]">
                  Trusted by 50,000+ students • Powered by <span className="text-primary">Gemini 2.5</span>
                </p>
              </div>
            </div>

            {/* Product Interface Mockup - Block System */}
            <div className="relative max-w-6xl mx-auto px-4">
              <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-200 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="hidden sm:flex items-center gap-3 p-5 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                  </div>
                  <div className="mx-auto text-[10px] font-black text-gray-400 uppercase tracking-widest">SpeakSmart Interactive Dashboard</div>
                </div>
                
                <div className="grid lg:grid-cols-12 gap-0 min-h-[500px]">
                  <div className="lg:col-span-8 p-8 md:p-12 border-r border-gray-100">
                    <div className="space-y-8">
                      <div className="flex gap-5 items-start">
                         <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Zap className="h-6 w-6 text-primary" />
                         </div>
                         <div className="bg-gray-100 rounded-[2rem] p-6 md:p-8 text-sm md:text-base font-bold text-gray-700 leading-relaxed max-w-[85%]">
                           "Hello! Let's practice for a technical interview. Can you explain how you handle complex problem-solving in a team environment?"
                         </div>
                      </div>
                      <div className="flex gap-5 items-start justify-end">
                         <div className="bg-primary rounded-[2rem] p-6 md:p-8 text-sm md:text-base font-bold text-white leading-relaxed max-w-[85%] shadow-xl shadow-primary/20">
                           "I usually break down the problem into smaller tasks. I believe communication is key for team success."
                         </div>
                         <div className="h-12 w-12 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                            <Users className="h-6 w-6 text-gray-400" />
                         </div>
                      </div>
                      <div className="flex items-center justify-center pt-16">
                        <div className="bg-white rounded-full border border-gray-100 px-8 py-5 shadow-2xl flex items-center gap-10">
                          <Waves className="h-10 w-10 text-primary animate-pulse" />
                          <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                            <Mic className="h-7 w-7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-4 p-8 md:p-12 bg-gray-50/40">
                    <div className="space-y-12">
                      <div className="space-y-6">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Real-Time Performance</div>
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            { label: 'Fluency', score: 88 },
                            { label: 'Grammar', score: 94 },
                            { label: 'Pronunciation', score: 91 }
                          ].map((item) => (
                            <div key={item.label} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                              <div className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.label}</div>
                              <div className="text-2xl font-black text-primary">{item.score}%</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">AI Feedback</div>
                        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg space-y-3">
                          <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase">
                             <CheckCircle2 className="h-4 w-4" />
                             Pronunciation Note
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed font-semibold italic">
                            "Excellent clarity on 'communication'. Try to soften the 't' sound slightly for a more natural flow."
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

        {/* Metrics Section - Blocks */}
        <section className="bg-white border-y border-gray-50 py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Sessions Practiced", value: "1.5M+" },
                { label: "Feedback Accuracy", value: "98.2%" },
                { label: "User Rating", value: "4.95" },
                { label: "Global Users", value: "120k+" },
              ].map((m, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter group-hover:text-primary transition-colors">{m.value}</div>
                  <div className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.3em]">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Stacks */}
        <section id="features" className="py-32 md:py-48 space-y-48 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary border-primary/20 font-black px-5 py-2 uppercase tracking-[0.2em] text-[10px]">Natural Interaction</Badge>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
                  AI Dialogue that <br /> Feels Human.
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                  Experience zero-latency conversations. Our AI understands your intent, slang, and emotion, providing a partner that adapts to your pace.
                </p>
                <div className="grid gap-4">
                   {[
                     "Sub-second response time",
                     "Context-aware follow-up questions",
                     "Premium neural voice synthesis"
                   ].map((item) => (
                     <div key={item} className="flex items-center gap-4 text-lg font-bold text-gray-800">
                       <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                       {item}
                     </div>
                   ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-[3rem] bg-gray-50 border-8 border-white shadow-2xl overflow-hidden order-1 lg:order-2">
                {screenshot && <Image src={screenshot.imageUrl} alt="AI Conversation" fill className="object-cover" />}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square rounded-[3rem] bg-gray-50 border-8 border-white shadow-2xl overflow-hidden">
                {feedbackImg && <Image src={feedbackImg.imageUrl} alt="Analysis Tools" fill className="object-cover" />}
              </div>
              <div className="space-y-8">
                <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary border-primary/20 font-black px-5 py-2 uppercase tracking-[0.2em] text-[10px]">Smart Analytics</Badge>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
                  Diagnostic Feedback <br /> for Rapid Growth.
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                  We pinpoint the exact sounds and grammatical structures holding you back. No more general advice—get specific fixes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <Card className="rounded-[2rem] border-gray-100 shadow-xl p-8 hover:translate-y-[-4px] transition-transform bg-white">
                    <BarChart3 className="h-10 w-10 text-primary mb-6" />
                    <div className="font-black text-gray-900 text-xl mb-2">Fluency Metrics</div>
                    <div className="text-sm text-gray-500 font-bold leading-relaxed">Track your pace and hesitation patterns over time.</div>
                  </Card>
                  <Card className="rounded-[2rem] border-gray-100 shadow-xl p-8 hover:translate-y-[-4px] transition-transform bg-white">
                    <History className="h-10 w-10 text-primary mb-6" />
                    <div className="font-black text-gray-900 text-xl mb-2">Error Mapping</div>
                    <div className="text-sm text-gray-500 font-bold leading-relaxed">See where you consistently stumble and fix it.</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios Section - Blocks */}
        <section id="about" className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-20">
                <Badge variant="secondary" className="bg-white text-primary border-primary/10 font-black px-5 py-2 uppercase tracking-widest text-[10px]">Real-World Practice</Badge>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">Endless Scenarios.</h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Practice what matters most to you in life and work.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Job Interview", desc: "Ace your next career move with tech & behavioral prep.", icon: BriefcaseIcon },
                  { title: "IELTS Speaking", desc: "Specific modules for Part 1, 2, and 3 simulation.", icon: GraduationCap },
                  { title: "Business Pitch", desc: "Refine your presentation and negotiation skills.", icon: TrendingUp },
                  { title: "Daily Coffee", desc: "Casual small talk to build social confidence.", icon: MessageCircleIcon },
                  { title: "Emergency Help", desc: "Critical vocabulary for travel and unexpected events.", icon: Activity },
                  { title: "Academic Debate", desc: "Structured arguments for university environments.", icon: BrainCircuit }
                ].map((s) => (
                    <Card key={s.title} className="p-8 rounded-[2.5rem] border-none shadow-xl hover:shadow-2xl transition-all cursor-pointer group bg-white">
                        <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                            <s.icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-3">{s.title}</h3>
                        <p className="text-gray-500 font-bold text-sm leading-relaxed">{s.desc}</p>
                    </Card>
                ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">Common Questions.</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "Is it free to start?", a: "Yes, you can start practicing immediately with our free tier, which includes daily AI conversation sessions." },
                { q: "How accurate is the feedback?", a: "Powered by Gemini 2.5, our analysis achieves over 98% accuracy in grammar and pronunciation diagnostics." },
                { q: "Can I use it on my phone?", a: "Absolutely! SpeakSmart AI is fully optimized for mobile browsers, allowing you to practice anywhere." },
                { q: "Does it support British English?", a: "Yes, you can choose between US and UK English accents for both recognition and feedback." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 border-none rounded-3xl px-8 shadow-sm">
                  <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-500 font-bold pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-24 md:py-48 text-center">
            <div className="max-w-6xl mx-auto bg-primary text-white rounded-[3rem] md:rounded-[5rem] p-12 md:p-32 shadow-[0_50px_100px_rgba(79,70,229,0.3)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
                <div className="relative z-10 space-y-10 md:space-y-16">
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] animate-pulse">Speak English <br /> like a Native.</h2>
                  <p className="text-xl md:text-3xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed font-bold">
                      Transform your confidence in weeks, not years. Join 50,000+ successful learners today.
                  </p>
                  <div className="pt-8">
                    <Button asChild size="lg" className="h-20 px-16 text-2xl font-black bg-white text-primary hover:bg-gray-100 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95">
                      <Link href={mounted && user ? "/speak" : "/login"}>Start Your First Session</Link>
                    </Button>
                  </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div className="col-span-2 space-y-10">
              <Logo />
              <p className="text-lg text-gray-500 max-w-xs font-semibold leading-relaxed">
                The AI-powered partner for English mastery. Practice anywhere, anytime.
              </p>
            </div>
            <div className="space-y-8">
               <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em]">Product</h4>
               <ul className="space-y-5 text-sm font-bold text-gray-400">
                  <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                  <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                  <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
               </ul>
            </div>
            <div className="space-y-8">
               <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em]">Resources</h4>
               <ul className="space-y-5 text-sm font-bold text-gray-400">
                  <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Guides</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">API Docs</Link></li>
               </ul>
            </div>
            <div className="space-y-8">
               <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em]">Legal</h4>
               <ul className="space-y-5 text-sm font-bold text-gray-400">
                  <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
               </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs text-gray-400 font-black uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} SpeakSmart AI • All rights reserved
            </p>
            <div className="flex items-center gap-3 text-gray-400 font-black text-xs uppercase tracking-[0.2em]">
              <Globe className="h-4 w-4" />
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BriefcaseIcon(props: any) {
    return <Briefcase {...props} />
}

function MessageCircleIcon(props: any) {
    return <MessageCircle {...props} />
}

import { Briefcase } from 'lucide-react';