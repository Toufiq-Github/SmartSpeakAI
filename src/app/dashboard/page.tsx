import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import DashboardClient from './dashboard-client';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <header className="flex items-center justify-between border-b p-4">
        <Logo />
        <Button asChild>
          <Link href="/speak">Start New Session</Link>
        </Button>
      </header>
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Your Progress Dashboard</h1>
                <p className="text-muted-foreground">Track your journey to fluent English speaking.</p>
            </div>
            <DashboardClient />
        </div>
      </main>
    </div>
  );
}
