import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Faq_AIAgent } from "@/app/_constant"
import { SHELL, SectionTitle } from "./Ui"

/**
 * Figma 2017:5837 — "Frequently Asked Questions" accordion (1036 × 676).
 * White cards, 12px radius, 1px rgba(90,140,242,.2) border, 0 8px 10px
 * rgba(64,78,133,.1) shadow; first item open, blue label + blue chevron.
 * The Q&A in the frame is the existing `Faq_AIAgent` set, reused verbatim.
 */
export default function SectionF1() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className={SHELL}>
        <div className="mx-auto flex w-full max-w-[1036px] flex-col items-center gap-10">
          <SectionTitle
            lead="Frequently Asked"
            accent=" Questions"
            className="text-center [&_br]:hidden"
          />

          <Accordion
            type="single"
            collapsible
            defaultValue={Faq_AIAgent[0]?.value}
            className="flex w-full flex-col gap-3"
          >
            {Faq_AIAgent.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="rounded-xl border border-[rgba(90,140,242,0.2)] bg-white px-6 shadow-[0px_8px_10px_rgba(64,78,133,0.1)] last:border-b"
              >
                <AccordionTrigger className="items-center rounded-none py-5 text-left text-lg font-medium leading-7 text-[#050f21] hover:no-underline data-[state=open]:text-[#0051e4] md:text-xl [&>svg]:size-4 [&>svg]:translate-y-0 [&>svg]:rounded-none [&>svg]:border-0 [&>svg]:p-0 [&>svg]:text-[#050f21] data-[state=open]:[&>svg]:text-[#0051e4]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 text-base leading-[22px] text-[#474747]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <button
            type="button"
            className="inline-flex h-12 w-[200px] items-center justify-center rounded-full border-[1.5px] border-[#0051e4] bg-white text-base font-bold text-[#0051e4] transition-colors hover:bg-[#f8faff]"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
