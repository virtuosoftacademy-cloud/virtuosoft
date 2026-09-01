import React from 'react';
import { Accordion } from '@/components/ui/accordion';
import FaqCard from '@/components/ui/FaqCard';
import type { FaqItem } from '@/app/_constant';

export interface FaqProps {
  items?: FaqItem[];
}

/**
 * Figma 2455:3810 — "Frequently Asked Questions" (1036 wide). Heading is
 * Public Sans 40/48 with -1px tracking, the accent word in blue-500; the
 * questions are separate white cards stacked with a 12px gap. The first
 * item opens by default, as in the design.
 */
export default function Faq({ items = [] }: FaqProps) {
  return (
    <div className="mx-auto flex w-full max-w-[1036px] flex-col items-center gap-10 px-6 pt-10 text-foreground md:px-12 lg:px-0">
      <h4 className="text-center text-[28px] leading-tight tracking-[-1px] text-black md:text-[40px] md:leading-[48px]">
        Frequently Asked <span className="font-bold text-primary">Questions</span>
      </h4>

      <Accordion
        type="single"
        collapsible
        defaultValue={items[0]?.value}
        className="flex w-full flex-col gap-3"
      >
        {Array.isArray(items) && items.length > 0 ? (
          items.map((faq, index) => (
            <FaqCard
              key={faq.value || index}
              faq={faq}
            />
          ))
        ) : (
          <p className="text-center text-muted-foreground py-8">
            No questions available at the moment.
          </p>
        )}
      </Accordion>
    </div>
  );
}
