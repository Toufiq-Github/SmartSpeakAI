'use client';

import { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Message } from '@/lib/types';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, Loader, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import FeedbackDisplay from './feedback-display';

interface ConversationAreaProps {
  messages: Message[];
  isLoading: boolean;
}

export default function ConversationArea({ messages, isLoading }: ConversationAreaProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading]);

  return (
    <ScrollArea className="flex-1" ref={scrollAreaRef}>
      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-8">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              'flex items-start gap-4',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.role === 'assistant' && (
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot />
                </AvatarFallback>
              </Avatar>
            )}

            <div
              className={cn(
                'max-w-md rounded-2xl p-4 text-base',
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-secondary text-secondary-foreground rounded-bl-none'
              )}
            >
              <p>{message.text}</p>
              {message.role === 'assistant' && message.feedback && (
                <FeedbackDisplay feedback={message.feedback} />
              )}
            </div>

            {message.role === 'user' && (
              <Avatar>
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-4 justify-start">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot />
              </AvatarFallback>
            </Avatar>
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-4 rounded-bl-none">
                <Loader className="h-5 w-5 animate-spin"/>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
