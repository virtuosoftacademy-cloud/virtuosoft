'use client'

import { useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FaqItem } from "@/app/_constant";

export interface FaqProps {
  items?: FaqItem[];
  initialCount?: number;
}

export default function Faq({ items = [], initialCount = 4 }: FaqProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-12">

      <h4 className="mb-10 text-center text-4xl md:text-5xl">
        Frequently Asked {" "}
        <span className="font-extrabold text-primary">
        Questions
        </span>
      </h4>

      <AccordionPrimitive.Root type="single" collapsible defaultValue="item-1" className="flex flex-col gap-4">
        {visibleItems.map((faq) => (
          <AccordionPrimitive.Item
            key={faq.value}
            value={faq.value}
            className="overflow-hidden rounded-2xl bg-primary/10 px-6"
          >
            <AccordionPrimitive.Header>
              <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-lg md:text-xl font-semibold text-foreground outline-none data-[state=open]:text-primary">
                {faq.question}
                <ChevronDown className="size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden text-sm md:text-base leading-relaxed text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <p className="pb-5">{faq.answer}</p>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="rounded-xl"
            onClick={() => setVisibleCount(items.length)}
          >
            Load More
          </Button>
        </div>
      )}
    </section>
  );
}
