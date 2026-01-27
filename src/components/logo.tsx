import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-foreground font-semibold text-lg',
        className
      )}
    >
      <div className="bg-primary p-1.5 rounded-lg">
        <MessageCircle className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-headline">SpeakSmart AI</span>
    </Link>
  );
}
