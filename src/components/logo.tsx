import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2.5 text-gray-900 font-black text-2xl group transition-all',
        className
      )}
    >
      <div className="bg-primary p-2.5 rounded-[1rem] shadow-xl shadow-primary/25 transition-all group-hover:scale-110 group-hover:rotate-6">
        <MessageCircle className="h-6 w-6 text-white" />
      </div>
      <span className="font-headline tracking-tighter">SpeakSmart<span className="text-primary italic">AI</span></span>
    </Link>
  );
}