import Image from "next/image"
import { Eyebrow, SHELL, SectionTitle } from "./Ui"

/**
 * "Not Projections, A Live Production Run" — full-bleed blue gradient band with
 * an eyebrow, headline, supporting copy and a five-up production metrics grid.
 * Figma: Frame 1000001255 (2017:4538), 1440x566.
 */

const STATS = [
  { value: "99.2%", label: "Straight-through Automation Rate" },
  { value: "40,000+", label: "Documents Processed End-to-end" },
  { value: "106", label: "Flagged before reaching the ERP" },
  { value: "10", label: "Supplier Formats Handled" },
  { value: "60×", label: "Speed Improvement Per Document" },
]

export default function SectionB1() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0051e4]">
      <Image
        src="/assets/Images/products/certus/page/b-live-run-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      <div className={`${SHELL} relative py-14 md:py-[60px]`}>
        <div className="flex w-full max-w-[1075px] flex-col gap-10 md:gap-[60px]">
          <div className="flex flex-col gap-6">
            <div>
              <Eyebrow className="bg-[#e6eefc]">Production Numbers</Eyebrow>
            </div>

            <div className="flex flex-col gap-3">
              <SectionTitle
                light
                lead={
                  <>
                    Not Projections,{" "}
                    <span className="font-bold">A Live Production Run</span>
                  </>
                }
              />
              <p className="font-helvetica-now-display text-base leading-[22px] text-[#f9f8f5]">
                These figures come from a live enterprise deployment in the GCC, not a
                lab, not a pilot with hand-picked clean data. Every one of the 106
                flagged documents was caught by the three-layer engine and safely routed
                for human review, never posted, never lost. Certus knows the difference
                between a document it can trust and one it cannot, and it never guesses.
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-x-[68px] gap-y-8 sm:grid-cols-2 md:gap-y-11 lg:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="font-helvetica-now-display text-[40px] font-bold leading-[48px] text-white md:text-[48px] md:leading-[56px]">
                  {stat.value}
                </dt>
                <dd className="font-helvetica-now-display text-sm font-bold leading-5 text-white">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
