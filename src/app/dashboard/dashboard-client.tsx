'use client';

import { useState, useEffect } from 'react';
import type { SessionScore } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

export default function DashboardClient() {
  const [sessions, setSessions] = useState<SessionScore[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedSessions = localStorage.getItem('speaksmart-sessions');
    if (storedSessions) {
      setSessions(JSON.parse(storedSessions));
    }
  }, []);

  if (!isClient) {
    return null;
  }

  if (sessions.length === 0) {
    return (
        <Card className="text-center py-16">
            <CardHeader>
                <CardTitle>No Sessions Yet!</CardTitle>
                <CardDescription>Complete a speaking session to see your progress here.</CardDescription>
            </CardHeader>
        </Card>
    );
  }
  
  const chartData = sessions.map(session => ({
    name: format(new Date(session.date), 'MMM d'),
    Fluency: session.fluencyScore,
    Pronunciation: session.pronunciationScore,
    Grammar: session.grammarAccuracyScore,
    Confidence: session.confidenceScore,
  }));

  return (
    <div className="space-y-6 md:space-y-8">
      <Card>
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-xl md:text-2xl">Overall Score Trends</CardTitle>
          <CardDescription>Your average scores over the last few sessions.</CardDescription>
        </CardHeader>
        <CardContent className="p-2 md:p-6 overflow-hidden">
          <div className="h-[250px] md:h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--foreground))" fontSize={10} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    fontSize: "12px"
                  }}
                />
                <Legend iconSize={8} wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                <Bar dataKey="Fluency" fill="hsl(var(--chart-1))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="Pronunciation" fill="hsl(var(--chart-2))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="Grammar" fill="hsl(var(--chart-3))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="Confidence" fill="hsl(var(--chart-4))" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-xl md:text-2xl">Session History</CardTitle>
          <CardDescription>A detailed log of all your practice sessions.</CardDescription>
        </CardHeader>
        <CardContent className="p-0 md:p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[120px]">Date</TableHead>
                  <TableHead className="text-right">Fluency</TableHead>
                  <TableHead className="text-right">Pronunciation</TableHead>
                  <TableHead className="text-right hidden sm:table-cell">Grammar</TableHead>
                  <TableHead className="text-right hidden sm:table-cell">Confidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessions.slice().reverse().map((session, idx) => (
                  <TableRow key={`${session.date}-${idx}`}>
                    <TableCell className="font-medium text-xs md:text-sm">{format(new Date(session.date), 'PP')}</TableCell>
                    <TableCell className="text-right text-xs md:text-sm">{session.fluencyScore}</TableCell>
                    <TableCell className="text-right text-xs md:text-sm">{session.pronunciationScore}</TableCell>
                    <TableCell className="text-right text-xs md:text-sm hidden sm:table-cell">{session.grammarAccuracyScore}</TableCell>
                    <TableCell className="text-right text-xs md:text-sm hidden sm:table-cell">{session.confidenceScore}</TableCell>
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
