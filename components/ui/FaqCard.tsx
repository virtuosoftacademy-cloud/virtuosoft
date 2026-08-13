'use client'

import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import type { FaqItem } from "@/app/_constant";

export interface FaqCardProps {
    faq: FaqItem;
}

export default function FaqCard({ faq }: FaqCardProps) {
    const { answer, question, value } = faq;
    return (
        <>
            <AccordionItem value={value}>
                <AccordionTrigger>
                    <h4>
                        {question}
                    </h4>
                </AccordionTrigger>
                <AccordionContent>
                    {answer}
                </AccordionContent>
            </AccordionItem>
        </>
    )
}
