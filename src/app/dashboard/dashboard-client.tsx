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
    return null; // Or a loading skeleton
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
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Overall Score Trends</CardTitle>
          <CardDescription>Your average scores over the last few sessions.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))"
                }}
              />
              <Legend />
              <Bar dataKey="Fluency" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Pronunciation" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Grammar" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Confidence" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Session History</CardTitle>
          <CardDescription>A detailed log of all your practice sessions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Fluency</TableHead>
                <TableHead className="text-right">Pronunciation</TableHead>
                <TableHead className="text-right">Grammar</TableHead>
                <TableHead className="text-right">Confidence</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.slice().reverse().map((session) => (
                <TableRow key={session.date}>
                  <TableCell className="font-medium">{format(new Date(session.date), 'PPp')}</TableCell>
                  <TableCell className="text-right">{session.fluencyScore}</TableCell>
                  <TableCell className="text-right">{session.pronunciationScore}</TableCell>
                  <TableCell className="text-right">{session.grammarAccuracyScore}</TableCell>
                  <TableCell className="text-right">{session.confidenceScore}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
