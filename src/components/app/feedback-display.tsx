import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { RealTimeFeedbackOutput } from "@/ai/flows/real-time-feedback-on-mistakes";
import { Badge } from "../ui/badge";

interface FeedbackDisplayProps {
    feedback: RealTimeFeedbackOutput;
}

export default function FeedbackDisplay({ feedback }: FeedbackDisplayProps) {
    const hasFeedback = feedback.grammarFeedback || feedback.pronunciationFeedback || feedback.vocabularySuggestions || feedback.fluencyFeedback;

    if (!hasFeedback) {
        return null;
    }

    return (
        <div className="mt-4">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="feedback" className="border-t border-b-0 border-secondary-foreground/20 pt-2">
                    <AccordionTrigger className="py-2 text-sm hover:no-underline">
                        View Feedback
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2 pt-2 text-sm">
                        {feedback.grammarFeedback && <div><Badge variant="secondary">Grammar</Badge><p className="pt-1">{feedback.grammarFeedback}</p></div>}
                        {feedback.pronunciationFeedback && <div><Badge variant="secondary">Pronunciation</Badge><p className="pt-1">{feedback.pronunciationFeedback}</p></div>}
                        {feedback.vocabularySuggestions && <div><Badge variant="secondary">Vocabulary</Badge><p className="pt-1">{feedback.vocabularySuggestions}</p></div>}
                        {feedback.fluencyFeedback && <div><Badge variant="secondary">Fluency</Badge><p className="pt-1">{feedback.fluencyFeedback}</p></div>}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
