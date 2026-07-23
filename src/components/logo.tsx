import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-foreground font-semibold text-lg group',
        className
      )}
    >
      <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:scale-110">
        <MessageCircle className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-headline tracking-tight">SpeakSmart <span className="text-[#10B981]">AI</span></span>
    </Link>
  );
}
