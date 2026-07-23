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
    <div className="flex flex-col min-h-screen bg-white font-body selection:bg-primary/10 selection:text-primary relative">
      {/* Dynamic Background Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-50 grayscale transition-opacity duration-1000"
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Features</Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Pricing</Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Dashboard</Link>
            <Link href="#about" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-500 hover:text-primary">Log in</Link>
            <Button asChild size="sm" className="rounded-full px-5 font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              <Link href="/speak">Start Speaking Free</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-40 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-8 mb-20 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-700">
                <Sparkles className="h-3 w-3" />
                AI-Powered English Speaking Coach
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 leading-[1.05] animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
                Speak English Confidently. <br />
                <span className="text-primary italic">Get Instant AI Feedback.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                Practice conversations anytime, anywhere. Receive real-time grammar, pronunciation, and fluency coaching powered by Google's Gemini AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center pt-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                <Button asChild size="lg" className="h-16 px-12 text-xl font-bold rounded-full group shadow-2xl shadow-primary/30 transition-all hover:scale-105">
                  <Link href="/speak">
                    Start Speaking Free
                    <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-12 text-xl font-bold rounded-full border-2 border-gray-200 hover:bg-white hover:border-primary/50 transition-all shadow-sm">
                  <PlayCircle className="mr-2 h-6 w-6" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-col items-center gap-4 pt-8 animate-in fade-in duration-1000 delay-500">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  <span className="ml-3 text-lg font-black text-gray-900 tracking-tight">4.9/5 Rating</span>
                </div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-[0.2em]">
                  Trusted by 50,000+ students worldwide • Powered by <span className="text-primary">Gemini</span>
                </div>
              </div>
            </div>

            {/* Product Screenshot Mockup - The Block System */}
            <div className="relative max-w-6xl mx-auto pt-10">
              <div className="relative rounded-[3rem] border border-gray-200 bg-white/80 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="flex items-center gap-3 p-5 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-gray-200" />
                    <div className="w-3.5 h-3.5 rounded-full bg-gray-200" />
                    <div className="w-3.5 h-3.5 rounded-full bg-gray-200" />
                  </div>
                  <div className="mx-auto text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">ai interaction dashboard</div>
                </div>
                
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Left Column - Conversation */}
                  <div className="lg:col-span-8 p-10 border-r border-gray-100">
                    <div className="space-y-8">
                      <div className="flex gap-5 items-start">
                         <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 shadow-inner">
                            <Zap className="h-6 w-6 text-primary" />
                         </div>
                         <div className="bg-gray-50/80 rounded-[2rem] p-8 text-base font-semibold text-gray-800 leading-relaxed max-w-[85%] shadow-sm border border-gray-100">
                           "Hello! Today let's practice a job interview scenario. Can you tell me about your previous work experience and what skills you bring to a team?"
                         </div>
                      </div>
                      <div className="flex gap-5 items-start justify-end">
                         <div className="bg-primary rounded-[2rem] p-8 text-base font-semibold text-white leading-relaxed max-w-[85%] shadow-2xl shadow-primary/20">
                           "Sure, I worked as a software developer for three years. I'm very good at solving complex problems and working with different teams."
                         </div>
                         <div className="h-12 w-12 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200">
                            <Users className="h-6 w-6 text-gray-400" />
                         </div>
                      </div>
                      <div className="flex items-center justify-center pt-12">
                        <div className="bg-white rounded-full border border-gray-200 px-10 py-5 shadow-2xl flex items-center gap-8 group cursor-pointer hover:scale-105 transition-transform">
                          <Waves className="h-8 w-8 text-primary animate-pulse" />
                          <div className="h-10 w-[150px] bg-primary/10 rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/20 animate-shimmer" />
                          </div>
                          <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white shadow-xl group-hover:bg-primary/90">
                            <Mic className="h-7 w-7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Analysis */}
                  <div className="lg:col-span-4 p-10 bg-gray-50/20 backdrop-blur-sm">
                    <div className="space-y-10">
                      <div>
                        <div className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Real-Time Score</div>
                        <div className="grid grid-cols-2 gap-5">
                          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xl group hover:border-primary/50 transition-colors">
                            <div className="text-3xl font-black text-primary">88%</div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Fluency</div>
                          </div>
                          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xl group hover:border-primary/50 transition-colors">
                            <div className="text-3xl font-black text-primary">92%</div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Grammar</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Active Feedback</div>
                        <div className="bg-white p-7 rounded-[2.5rem] border border-gray-200 shadow-xl space-y-4 hover:shadow-2xl transition-shadow">
                          <div className="flex items-center gap-3 text-[12px] font-black text-primary uppercase tracking-tighter">
                             <CheckCircle2 className="h-4 w-4" />
                             Pronunciation
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed font-semibold">
                            "Great work on 'complex'! Ensure the 'x' sound is crisp and sharp."
                          </p>
                        </div>
                        <div className="bg-white p-7 rounded-[2.5rem] border border-gray-200 shadow-xl space-y-4 opacity-40">
                          <div className="flex items-center gap-3 text-[12px] font-black text-gray-400 uppercase tracking-tighter">
                             <TrendingUp className="h-4 w-4" />
                             Vocabulary
                          </div>
                          <p className="text-sm text-gray-400 italic font-bold">Analyzing next segment...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decor */}
              <div className="absolute -z-10 -top-20 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -z-10 -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="bg-white/90 backdrop-blur-md py-24 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="space-y-3">
                <div className="text-5xl font-black text-gray-900 tracking-tighter">1.2M+</div>
                <div className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Sessions Practiced</div>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-black text-gray-900 tracking-tighter">95%</div>
                <div className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Success Rate</div>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-black text-gray-900 tracking-tighter">4.9</div>
                <div className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Average Rating</div>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-black text-gray-900 tracking-tighter">140+</div>
                <div className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-white/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-40">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary border-primary/20 font-black px-5 py-2 uppercase tracking-widest text-[10px]">Real-Time Conversations</Badge>
                <h2 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
                  Speak Naturally with <br /> Context-Aware AI.
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                  Our voice engine understands nuance, slang, and context. Engage in organic dialogue that feels like talking to a native speaker.
                </p>
                <ul className="space-y-5">
                  {[
                    "Instant response time (< 1s latency)",
                    "Topic-aware follow-up questions",
                    "Natural human-like voice synthesis"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-base font-bold text-gray-700">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-[3rem] bg-gray-50 border-4 border-white shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden order-1 lg:order-2">
                {screenshot && <Image src={screenshot.imageUrl} alt="UI Mockup" fill className="object-cover" data-ai-hint="conversational ui" />}
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-video rounded-[3rem] bg-gray-50 border-4 border-white shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden">
                {feedbackImg && <Image src={feedbackImg.imageUrl} alt="Analysis Mockup" fill className="object-cover" data-ai-hint="ai analytics" />}
              </div>
              <div className="space-y-8">
                <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary border-primary/20 font-black px-5 py-2 uppercase tracking-widest text-[10px]">Advanced Diagnostics</Badge>
                <h2 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
                  Precision Feedback on <br /> Every Sentence.
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                  Stop guessing where you're failing. Get granular insights into your pronunciation, grammar, and vocabulary usage immediately.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl space-y-4 hover:border-primary/50 transition-colors">
                    <BarChart3 className="h-8 w-8 text-primary" />
                    <div className="font-black text-gray-900 text-lg">Fluency Score</div>
                    <div className="text-sm text-gray-500 font-medium">Track rhythm and flow.</div>
                  </div>
                  <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl space-y-4 hover:border-primary/50 transition-colors">
                    <History className="h-8 w-8 text-primary" />
                    <div className="font-black text-gray-900 text-lg">Error History</div>
                    <div className="text-sm text-gray-500 font-medium">Never repeat mistakes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50/80 backdrop-blur-md py-32 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-24 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900">How It Works</h2>
              <p className="text-xl text-gray-500 font-medium">
                Mastering spoken English is now a simple, structured process.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Choose Scenario", desc: "Select from free conversation, guided topics, or real-world roleplays.", icon: <MessageSquare /> },
                { step: "02", title: "Start Speaking", desc: "Talk naturally to the AI. It listens and responds like a native coach.", icon: <Mic /> },
                { step: "03", title: "AI Analysis", desc: "Receive instant feedback on grammar, pronunciation, and fluency.", icon: <BrainCircuit /> },
                { step: "04", title: "Track Improvement", desc: "Watch your scores rise on your personalized progress dashboard.", icon: <TrendingUp /> },
              ].map((item, i) => (
                <div key={i} className="relative p-12 bg-white rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group cursor-default">
                   <div className="absolute top-8 right-10 text-5xl font-black text-gray-50 group-hover:text-primary/10 transition-colors">{item.step}</div>
                   <div className="w-16 h-16 rounded-[1.5rem] bg-primary/5 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all">
                     {item.icon}
                   </div>
                   <h3 className="text-2xl font-black text-gray-900 mb-5">{item.title}</h3>
                   <p className="text-gray-500 text-base leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
               <div className="space-y-6 max-w-2xl text-left">
                  <h2 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900">Practice Real Scenarios</h2>
                  <p className="text-xl text-gray-500 font-medium">Prepare for any situation with our specialized practice modules.</p>
               </div>
               <Button variant="ghost" className="font-black text-primary hover:text-primary/80 text-lg uppercase tracking-widest">
                View all 50+ Scenarios <ArrowRight className="ml-2 h-5 w-5" />
               </Button>
             </div>
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  { title: "Job Interview", desc: "Practice common HR questions and industry-specific technical rounds.", badge: "Professional" },
                  { title: "IELTS Speaking", desc: "Full simulation of parts 1, 2, and 3 with official scoring criteria.", badge: "Exams" },
                  { title: "Business Meeting", desc: "Learn to present ideas, disagree politely, and negotiate.", badge: "Professional" },
                  { title: "Travel & Dining", desc: "Master essential phrases for hotels, airports, and restaurants.", badge: "Daily Life" },
                  { title: "First Meeting", desc: "Perfect your small talk and introduction skills with confidence.", badge: "Daily Life" },
                  { title: "Presentations", desc: "Structure and deliver compelling presentations in English.", badge: "Advanced" },
                ].map((item, i) => (
                  <Card key={i} className="rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group p-4 bg-white/50 backdrop-blur-sm">
                    <CardHeader className="p-10 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-inner">
                           <GraduationCap className="h-8 w-8 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                        <Badge variant="outline" className="rounded-full font-black text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 border-gray-200">{item.badge}</Badge>
                      </div>
                      <div className="space-y-4">
                        <CardTitle className="text-3xl font-black text-gray-900 leading-tight">{item.title}</CardTitle>
                        <CardDescription className="text-gray-500 text-base leading-relaxed font-semibold">{item.desc}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
             </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-50/50 py-32 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-24 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900">Simple Pricing</h2>
              <p className="text-xl text-gray-500 font-medium">Choose the plan that fits your learning journey.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Free Plan */}
              <div className="p-12 rounded-[3.5rem] border border-gray-200 bg-white/60 backdrop-blur-md shadow-xl flex flex-col hover:border-primary/30 transition-colors">
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Free</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-gray-900">$0</span>
                    <span className="text-sm font-black text-gray-400 uppercase tracking-widest">/mo</span>
                  </div>
                </div>
                <ul className="space-y-6 mb-12 flex-grow">
                  {["5 sessions per day", "Basic grammar analysis", "Standard AI voice", "Community support"].map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm text-gray-600 font-bold">
                      <CheckCircle2 className="h-5 w-5 text-gray-300" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full rounded-full h-14 text-lg font-black border-2 border-gray-200 hover:border-primary">Get Started</Button>
              </div>
              
              {/* Pro Plan */}
              <div className="p-12 rounded-[3.5rem] border-4 border-primary bg-primary/[0.02] shadow-[0_40px_100px_rgba(79,70,229,0.15)] flex flex-col relative overflow-hidden scale-105 z-10">
                <div className="absolute top-0 right-0 bg-primary text-white text-[11px] font-black px-8 py-3 rounded-bl-[2rem] tracking-[0.2em]">POPULAR</div>
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Pro</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-gray-900">$19</span>
                    <span className="text-sm font-black text-gray-400 uppercase tracking-widest">/mo</span>
                  </div>
                </div>
                <ul className="space-y-6 mb-12 flex-grow">
                  {["Unlimited sessions", "Advanced pronunciation diagnostics", "Premium AI voices", "Progress dashboard", "Priority support"].map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm text-gray-800 font-black">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full h-14 text-lg font-black bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30">Upgrade to Pro</Button>
              </div>

              {/* Enterprise Plan */}
              <div className="p-12 rounded-[3.5rem] border border-gray-200 bg-white/60 backdrop-blur-md shadow-xl flex flex-col hover:border-primary/30 transition-colors">
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Enterprise</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-gray-900">Custom</span>
                  </div>
                </div>
                <ul className="space-y-6 mb-12 flex-grow">
                  {["School-wide licensing", "Custom learning paths", "Detailed admin dashboard", "Dedicated manager"].map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm text-gray-600 font-bold">
                      <CheckCircle2 className="h-5 w-5 text-gray-300" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full rounded-full h-14 text-lg font-black border-2 border-gray-200 hover:border-primary">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-5xl font-black tracking-tight text-gray-900 text-center mb-24">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {[
                { q: "Is SpeakSmart AI suitable for beginners?", a: "Absolutely! SpeakSmart AI adjusts its vocabulary and speaking speed based on your performance level. It's designed to grow with you from A1 to C2." },
                { q: "How accurate is the pronunciation feedback?", a: "Extremely. We use state-of-the-art speech recognition technology trained on diverse global accents to ensure your feedback is both precise and culturally aware." },
                { q: "Can I use it to prepare for the IELTS exam?", a: "Yes, we have specialized modules for IELTS, TOEFL, and PTE that follow the official exam structures and scoring rubrics." },
                { q: "Is my voice data kept private?", a: "Privacy is non-negotiable. Your recordings are used strictly for real-time analysis and are encrypted end-to-end. We never sell your data." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50/50 px-10 rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
                  <AccordionTrigger className="text-xl font-black text-gray-900 hover:no-underline py-8 text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8 font-medium">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <div className="max-w-6xl mx-auto bg-gray-900 text-white rounded-[4rem] p-20 md:p-32 shadow-[0_60px_120px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] opacity-40 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]" />
                
                <div className="relative z-10 space-y-12">
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">Speak English <br /> like a Pro today.</h2>
                  <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-bold">
                      Join thousands of professionals and students who have already transformed their speaking confidence with SpeakSmart AI.
                  </p>
                  <div className="pt-8">
                    <Button asChild size="lg" className="h-20 px-16 text-2xl font-black bg-white text-gray-900 hover:bg-primary hover:text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95">
                      <Link href="/speak">Start Your Free Session</Link>
                    </Button>
                  </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
            <div className="col-span-2 space-y-10">
              <Logo />
              <p className="text-base text-gray-500 max-w-xs font-semibold leading-relaxed">
                The world's leading AI-powered English speaking partner. Built for productivity and real-world confidence.
              </p>
              <div className="flex gap-6">
                 <div className="h-10 w-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer" />
                 <div className="h-10 w-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer" />
                 <div className="h-10 w-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer" />
              </div>
            </div>
            <div className="space-y-8">
               <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.3em]">Product</h4>
               <ul className="space-y-5 text-sm font-bold text-gray-400">
                  <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                  <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                  <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
               </ul>
            </div>
            <div className="space-y-8">
               <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.3em]">Company</h4>
               <ul className="space-y-5 text-sm font-bold text-gray-400">
                  <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
               </ul>
            </div>
            <div className="space-y-8">
               <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.3em]">Legal</h4>
               <ul className="space-y-5 text-sm font-bold text-gray-400">
                  <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
               </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} SpeakSmart AI Inc.
            </p>
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-gray-400" />
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">English (US)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}