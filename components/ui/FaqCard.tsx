'use client'

import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import type { FaqItem } from "@/app/_constant";

export interface FaqCardProps {
    faq: FaqItem;
}

/**
 * One card in the Figma 2455:3810 FAQ: white, 12px radius, hairline
 * rgba(90,140,242,.2) border and a soft 0 8px 10px rgba(64,78,133,.1) shadow.
 * The question is H5 (20/28, -1px) — #050F21 closed, blue-500 open, with the
 * chevron following suit. Styling is applied here rather than in the shared
 * accordion primitive so other accordions keep their own look.
 */
export default function FaqCard({ faq }: FaqCardProps) {
    const { answer, question, value } = faq;
    return (
        <AccordionItem
            value={value}
            className="rounded-xl border border-[rgba(90,140,242,0.2)] bg-white px-6 shadow-[0px_8px_10px_rgba(64,78,133,0.1)] last:border-b"
        >
            <AccordionTrigger className="items-center rounded-none py-5 text-left text-lg font-bold leading-7 tracking-[-1px] text-[#050f21] data-[state=open]:text-[#0051e4] md:text-xl [&>svg]:size-4 [&>svg]:translate-y-0 [&>svg]:rounded-none [&>svg]:border-0 [&>svg]:p-0 [&>svg]:text-[#050f21] data-[state=open]:[&>svg]:text-[#0051e4]">
                {question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 pt-0 text-base leading-[22px] text-[#474747]">
                {answer}
            </AccordionContent>
        </AccordionItem>
    )
}
