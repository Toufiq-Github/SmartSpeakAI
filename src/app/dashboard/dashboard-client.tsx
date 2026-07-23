
'use client';

import { useMemo } from 'react';
import type { SessionScore } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';

export default function DashboardClient() {
  const { user, loading: authLoading } = useUser();
  const db = useFirestore();

  // Define Firestore query for sessions
  const sessionsQuery = useMemo(() => {
    if (!db || !user) return null;
    return query(
      collection(db, 'users', user.uid, 'sessions'),
      orderBy('date', 'desc')
    );
  }, [db, user]);

  const { data: firestoreSessions, loading: firestoreLoading } = useCollection<any>(sessionsQuery);

  // Combine with local sessions if any (for users who just registered)
  const sessions = useMemo(() => {
    let localSessions: SessionScore[] = [];
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('speaksmart-sessions');
        if (stored) localSessions = JSON.parse(stored);
    }

    if (firestoreSessions.length > 0) {
        // Convert Firestore timestamps to ISO strings for consistency
        const converted = firestoreSessions.map(s => ({
            ...s,
            date: s.date?.toDate ? s.date.toDate().toISOString() : s.date
        }));
        return converted as SessionScore[];
    }

    return localSessions;
  }, [firestoreSessions]);

  if (authLoading || firestoreLoading) {
    return (
        <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );
  }

  if (sessions.length === 0) {
    return (
        <Card className="text-center py-16 border-dashed bg-gray-50/50">
            <CardHeader>
                <CardTitle className="text-2xl font-black">Ready to Start?</CardTitle>
                <CardDescription className="font-medium">Complete your first speaking session to see your progress trends here.</CardDescription>
            </CardHeader>
        </Card>
    );
  }
  
  const chartData = [...sessions].reverse().map(session => ({
    name: format(new Date(session.date), 'MMM d'),
    Fluency: session.fluencyScore,
    Pronunciation: session.pronunciationScore,
    Grammar: session.grammarAccuracyScore,
    Confidence: session.confidenceScore,
  }));

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
            { label: 'Fluency', key: 'fluencyScore', color: 'text-chart-1' },
            { label: 'Pronunciation', key: 'pronunciationScore', color: 'text-chart-2' },
            { label: 'Grammar', key: 'grammarAccuracyScore', color: 'text-chart-3' },
            { label: 'Confidence', key: 'confidenceScore', color: 'text-chart-4' }
        ].map(stat => {
            const avg = Math.round(sessions.reduce((acc, s) => acc + (s[stat.key as keyof SessionScore] as number), 0) / sessions.length);
            return (
                <Card key={stat.label} className="border-none shadow-xl bg-white">
                    <CardContent className="p-6">
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label} Avg</p>
                        <p className={`text-3xl font-black ${stat.color}`}>{avg}%</p>
                    </CardContent>
                </Card>
            )
        })}
      </div>

      <Card className="border-none shadow-2xl bg-white overflow-hidden">
        <CardHeader className="p-6 md:p-8 bg-gray-50/50 border-b border-gray-100">
          <CardTitle className="text-xl md:text-2xl font-black tracking-tight">Performance Trends</CardTitle>
          <CardDescription className="font-medium text-gray-500">Your growth across core speaking dimensions over time.</CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-8">
          <div className="h-[300px] md:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--secondary))', opacity: 0.4 }}
                  contentStyle={{
                    backgroundColor: "white",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "1rem",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}
                />
                <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', paddingBottom: '20px' }} />
                <Bar dataKey="Fluency" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="Pronunciation" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="Grammar" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="Confidence" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-2xl bg-white overflow-hidden">
        <CardHeader className="p-6 md:p-8 bg-gray-50/50 border-b border-gray-100">
          <CardTitle className="text-xl md:text-2xl font-black tracking-tight">Session History</CardTitle>
          <CardDescription className="font-medium text-gray-500">A detailed log of all your AI-analyzed practice sessions.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50/80">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="min-w-[140px] font-black uppercase text-[10px] tracking-widest text-gray-400">Date</TableHead>
                  <TableHead className="text-right font-black uppercase text-[10px] tracking-widest text-gray-400">Fluency</TableHead>
                  <TableHead className="text-right font-black uppercase text-[10px] tracking-widest text-gray-400">Pronunciation</TableHead>
                  <TableHead className="text-right hidden sm:table-cell font-black uppercase text-[10px] tracking-widest text-gray-400">Grammar</TableHead>
                  <TableHead className="text-right hidden sm:table-cell font-black uppercase text-[10px] tracking-widest text-gray-400">Confidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessions.map((session, idx) => (
                  <TableRow key={`${session.date}-${idx}`} className="group hover:bg-gray-50/50 transition-colors">
                    <TableCell className="font-bold py-5">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-900">{format(new Date(session.date), 'PPP')}</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-tighter">{format(new Date(session.date), 'p')}</span>
                        </div>
                    </TableCell>
                    <TableCell className="text-right font-black text-chart-1">{session.fluencyScore}%</TableCell>
                    <TableCell className="text-right font-black text-chart-2">{session.pronunciationScore}%</TableCell>
                    <TableCell className="text-right font-black text-chart-3 hidden sm:table-cell">{session.grammarAccuracyScore}%</TableCell>
                    <TableCell className="text-right font-black text-chart-4 hidden sm:table-cell">{session.confidenceScore}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
