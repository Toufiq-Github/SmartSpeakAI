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
    <div className="flex flex-col min-h-screen bg-white font-body selection:bg-primary/10 selection:text-primary">
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-8 mb-16 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/10">
                <Sparkles className="h-3 w-3" />
                AI-Powered English Speaking Coach
              </div>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Speak English Confidently. <br />
                <span className="text-primary">Get Instant AI Feedback.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                Practice conversations anytime, anywhere. Receive real-time grammar, pronunciation, and fluency coaching powered by Google's Gemini AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full group shadow-2xl shadow-primary/20">
                  <Link href="/speak">
                    Start Speaking Free
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-bold rounded-full border-2 border-gray-100 hover:bg-gray-50">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-col items-center gap-4 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 text-sm font-bold text-gray-900">4.9/5 Rating</span>
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  Trusted by 50,000+ students worldwide • Powered by <span className="text-gray-900 font-bold">Gemini</span>
                </div>
              </div>
            </div>

            {/* Product Screenshot Mockup */}
            <div className="relative max-w-6xl mx-auto">
              <div className="relative rounded-[2.5rem] border border-gray-100 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="flex items-center gap-2 p-4 border-b border-gray-50 bg-gray-50/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                    <div className="w-3 h-3 rounded-full bg-green-400/20" />
                  </div>
                  <div className="mx-auto text-[10px] font-bold text-gray-300 uppercase tracking-widest">ai interaction dashboard</div>
                </div>
                
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Left Column - Conversation */}
                  <div className="lg:col-span-8 p-8 border-r border-gray-50">
                    <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                         <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Zap className="h-5 w-5 text-primary" />
                         </div>
                         <div className="bg-gray-50 rounded-3xl p-6 text-sm font-medium text-gray-800 leading-relaxed max-w-[80%]">
                           "Hello! Today let's practice a job interview scenario. Can you tell me about your previous work experience and what skills you bring to a team?"
                         </div>
                      </div>
                      <div className="flex gap-4 items-start justify-end">
                         <div className="bg-primary rounded-3xl p-6 text-sm font-medium text-white leading-relaxed max-w-[80%] shadow-lg shadow-primary/20">
                           "Sure, I worked as a software developer for three years. I'm very good at solving complex problems and working with different teams."
                         </div>
                         <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                            <Users className="h-5 w-5 text-gray-400" />
                         </div>
                      </div>
                      <div className="flex items-center justify-center pt-8">
                        <div className="bg-white rounded-full border border-gray-100 px-8 py-4 shadow-xl flex items-center gap-6">
                          <Waves className="h-6 w-6 text-primary animate-pulse" />
                          <div className="h-8 w-[120px] bg-primary/10 rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/20 animate-shimmer" />
                          </div>
                          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                            <Mic className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Analysis */}
                  <div className="lg:col-span-4 p-8 bg-gray-50/30">
                    <div className="space-y-8">
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Real-Time Score</div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-2xl font-bold text-primary">88%</div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase">Fluency</div>
                          </div>
                          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-2xl font-bold text-primary">92%</div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase">Grammar</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Feedback</div>
                        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-3">
                          <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-600">
                             <CheckCircle2 className="h-3 w-3" />
                             Pronunciation
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            "Great work on 'complex'! Ensure the 'x' sound is crisp."
                          </p>
                        </div>
                        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-3 opacity-60">
                          <div className="flex items-center gap-2 text-[11px] font-bold text-primary">
                             <TrendingUp className="h-3 w-3" />
                             Vocabulary
                          </div>
                          <p className="text-xs text-gray-400 italic">Analyzing next segment...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decor */}
              <div className="absolute -z-10 -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
              <div className="absolute -z-10 -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="bg-white py-24 border-y border-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900 tracking-tight">1.2M+</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Sessions Practiced</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900 tracking-tight">95%</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900 tracking-tight">4.9</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900 tracking-tight">140+</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Countries Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 space-y-40">
          {/* Feature 1 */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary border-none font-bold px-4 py-1">Real-Time Conversations</Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                  Speak Naturally with <br /> Context-Aware AI.
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Our voice engine understands nuance, slang, and context. Engage in organic dialogue that feels like talking to a native speaker, not a rigid robot.
                </p>
                <ul className="space-y-4">
                  {[
                    "Instant response time (< 1s latency)",
                    "Topic-aware follow-up questions",
                    "Natural human-like voice synthesis"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-[2rem] bg-gray-50 border border-gray-100 overflow-hidden shadow-2xl order-1 lg:order-2">
                {screenshot && <Image src={screenshot.imageUrl} alt="UI Mockup" fill className="object-cover" data-ai-hint="conversational ui" />}
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-video rounded-[2rem] bg-gray-50 border border-gray-100 overflow-hidden shadow-2xl">
                {feedbackImg && <Image src={feedbackImg.imageUrl} alt="Analysis Mockup" fill className="object-cover" data-ai-hint="ai analytics" />}
              </div>
              <div className="space-y-8">
                <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary border-none font-bold px-4 py-1">Advanced Diagnostics</Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                  Precision Feedback on <br /> Every Sentence.
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Stop guessing where you're failing. Get granular insights into your pronunciation, grammar, and vocabulary usage immediately after you speak.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-2">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <div className="font-bold text-gray-900">Fluency Score</div>
                    <div className="text-xs text-gray-400">Track rhythm and flow.</div>
                  </div>
                  <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-2">
                    <History className="h-6 w-6 text-primary" />
                    <div className="font-bold text-gray-900">Error History</div>
                    <div className="text-xs text-gray-400">Never repeat mistakes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">How It Works</h2>
              <p className="text-lg text-gray-500">
                Mastering spoken English is now a simple, structured process.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Choose Scenario", desc: "Select from free conversation, guided topics, or real-world roleplays.", icon: <MessageSquare /> },
                { step: "02", title: "Start Speaking", desc: "Talk naturally to the AI. It listens and responds like a native coach.", icon: <Mic /> },
                { step: "03", title: "AI Analysis", desc: "Receive instant feedback on grammar, pronunciation, and fluency.", icon: <BrainCircuit /> },
                { step: "04", title: "Track Improvement", desc: "Watch your scores rise on your personalized progress dashboard.", icon: <TrendingUp /> },
              ].map((item, i) => (
                <div key={i} className="relative p-10 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                   <div className="absolute top-6 right-8 text-4xl font-black text-gray-100 group-hover:text-primary/10 transition-colors">{item.step}</div>
                   <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8">
                     {item.icon}
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios Section */}
        <section className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
               <div className="space-y-6 max-w-2xl text-left">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Practice Real-World Scenarios</h2>
                  <p className="text-lg text-gray-500">Prepare for any situation with our specialized practice modules.</p>
               </div>
               <Button variant="ghost" className="font-bold text-primary hover:text-primary/80">View all 50+ Scenarios <ArrowRight className="ml-2 h-4 w-4" /></Button>
             </div>
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Job Interview", desc: "Practice common HR questions and industry-specific technical rounds.", badge: "Professional" },
                  { title: "IELTS Speaking", desc: "Full simulation of parts 1, 2, and 3 with official scoring criteria.", badge: "Exams" },
                  { title: "Business Meeting", desc: "Learn to present ideas, disagree politely, and negotiate.", badge: "Professional" },
                  { title: "Travel & Dining", desc: "Master essential phrases for hotels, airports, and restaurants.", badge: "Daily Life" },
                  { title: "First Meeting", desc: "Perfect your small talk and introduction skills with confidence.", badge: "Daily Life" },
                  { title: "Presentations", desc: "Structure and deliver compelling presentations in English.", badge: "Advanced" },
                ].map((item, i) => (
                  <Card key={i} className="rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer group">
                    <CardHeader className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                           <GraduationCap className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                        <Badge variant="outline" className="rounded-full font-bold text-[10px] uppercase tracking-wider">{item.badge}</Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-3">{item.title}</CardTitle>
                      <CardDescription className="text-gray-500 text-sm leading-relaxed">{item.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
             </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-white py-32 border-t border-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-500">Choose the plan that fits your learning journey.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="p-10 rounded-[2.5rem] border border-gray-100 bg-white shadow-sm flex flex-col">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">$0</span>
                    <span className="text-sm font-medium text-gray-400">/mo</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {["5 sessions per day", "Basic grammar analysis", "Standard AI voice", "Community support"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full rounded-full h-12 border-2">Get Started</Button>
              </div>
              
              {/* Pro Plan */}
              <div className="p-10 rounded-[2.5rem] border border-primary/20 bg-primary/5 shadow-2xl shadow-primary/10 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-6 py-2 rounded-bl-3xl">BEST VALUE</div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">$19</span>
                    <span className="text-sm font-medium text-gray-400">/mo</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {["Unlimited sessions", "Advanced pronunciation diagnostics", "Premium AI voices", "Progress dashboard", "Priority support"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-700 font-bold">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full h-12 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">Upgrade to Pro</Button>
              </div>

              {/* Enterprise Plan */}
              <div className="p-10 rounded-[2.5rem] border border-gray-100 bg-white shadow-sm flex flex-col">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {["School-wide licensing", "Custom learning paths", "Detailed admin dashboard", "Dedicated account manager"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full rounded-full h-12 border-2">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "Is SpeakSmart AI suitable for beginners?", a: "Absolutely! SpeakSmart AI adjusts its vocabulary and speaking speed based on your performance level." },
                { q: "How accurate is the pronunciation feedback?", a: "Very. We use state-of-the-art speech recognition technology that compares your voice patterns to thousands of native speaker samples." },
                { q: "Can I use it to prepare for the IELTS exam?", a: "Yes, we have a specific 'IELTS Speaking Simulation' mode that follows the official exam format and scoring." },
                { q: "Is my voice data kept private?", a: "Privacy is our priority. Your recordings are used only for generating your feedback and are never shared with third parties." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white px-8 rounded-3xl border border-gray-100">
                  <AccordionTrigger className="text-lg font-bold text-gray-900 hover:no-underline py-6">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-base leading-relaxed pb-6">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <div className="max-w-5xl mx-auto bg-gray-900 text-white rounded-[3.5rem] p-16 md:p-24 shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                
                <div className="relative z-10 space-y-10">
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Speak English like a Pro today.</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                      Join thousands of professionals and students who have already transformed their speaking confidence with SpeakSmart AI.
                  </p>
                  <div className="pt-6">
                    <Button asChild size="lg" className="h-16 px-14 text-xl font-bold bg-white text-gray-900 hover:bg-gray-100 rounded-full shadow-2xl shadow-white/10">
                      <Link href="/speak">Start Your Free Session</Link>
                    </Button>
                  </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 space-y-8">
              <Logo />
              <p className="text-sm text-gray-400 max-w-xs font-medium leading-relaxed">
                The world's leading AI-powered English speaking partner. Built for productivity and real-world confidence.
              </p>
              <div className="flex gap-4">
                 <div className="h-8 w-8 rounded-full bg-gray-100" />
                 <div className="h-8 w-8 rounded-full bg-gray-100" />
                 <div className="h-8 w-8 rounded-full bg-gray-100" />
              </div>
            </div>
            <div className="space-y-6">
               <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Product</h4>
               <ul className="space-y-4 text-sm font-medium text-gray-400">
                  <li><Link href="#features" className="hover:text-primary">Features</Link></li>
                  <li><Link href="#pricing" className="hover:text-primary">Pricing</Link></li>
                  <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
               </ul>
            </div>
            <div className="space-y-6">
               <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Company</h4>
               <ul className="space-y-4 text-sm font-medium text-gray-400">
                  <li><Link href="#" className="hover:text-primary">About Us</Link></li>
                  <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                  <li><Link href="#" className="hover:text-primary">Support</Link></li>
               </ul>
            </div>
            <div className="space-y-6">
               <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Legal</h4>
               <ul className="space-y-4 text-sm font-medium text-gray-400">
                  <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:text-primary">Cookie Policy</Link></li>
               </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} SpeakSmart AI Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-400" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">English (US)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}