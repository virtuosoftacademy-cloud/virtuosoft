import React from 'react';
import { Accordion } from '@/components/ui/accordion';
import FaqCard from '@/components/ui/FaqCard';
import type { FaqItem } from '@/app/_constant';

export interface FaqProps {
  items?: FaqItem[];
}

export default function Faq({ items = [] }: FaqProps) {
  return (
    <div className="mx-auto max-w-[850px] px-6 sm:px-12 text-foreground pt-10">
      <h4 className="text-2xl md:text-[42px] text-center mb-10">
        Frequently Asked <span className="font-bold">Questions</span>
      </h4>

      <Accordion 
        type="single" 
        collapsible            
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