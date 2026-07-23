import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-gray-900 font-bold text-xl group',
        className
      )}
    >
      <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
        <MessageCircle className="h-5 w-5 text-white" />
      </div>
      <span className="font-headline tracking-tighter">SpeakSmart<span className="text-primary">AI</span></span>
    </Link>
  );
}