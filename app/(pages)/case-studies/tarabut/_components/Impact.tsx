import Image from "next/image"
import SectionBadge from "./SectionBadge"
import { caseStudies_Impact, caseStudies_ImpactNote } from "@/app/_constant"

import IconEfficiency from "@/public/assets/Images/casestudies/impact-efficiency.svg"
import IconLatency from "@/public/assets/Images/casestudies/impact-latency.svg"
import IconAvailability from "@/public/assets/Images/casestudies/impact-availability.svg"
import IconDelivery from "@/public/assets/Images/casestudies/impact-delivery.svg"
import Arrow from "@/public/assets/Images/casestudies/impact-arrow.svg"
import NoteFlag from "@/public/assets/Images/casestudies/impact-note-flag.svg"

const rowIcons = {
  efficiency: IconEfficiency,
  latency: IconLatency,
  availability: IconAvailability,
  delivery: IconDelivery,
}

function Impact() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:pb-24">
      <SectionBadge label="Business Impact" />

      <h2 className="mt-5 max-w-[766px] text-4xl leading-[1.2] text-[#050f21] md:text-[40px]">
        The Virtuosoft <span className="font-bold text-[#0051e4]">Impact</span>
      </h2>

      <p className="mt-3 max-w-[730px] text-base leading-[22px] text-[#474747]">
        Key areas transformed with measurable impact
      </p>

      <div className="mt-7 overflow-hidden rounded-[20px] border-[1.15px] border-[#e0e3e9] bg-white p-2">
        {caseStudies_Impact.map((row, index) => (
          <div
            key={`${row.label}-${row.before}`}
            className={`flex flex-col gap-4 px-4 py-[18px] lg:flex-row lg:items-center lg:gap-4 ${
              index > 0 ? "border-t-[1.15px] border-[#e0e3e9]" : ""
            }`}
          >
            <div className="flex w-full shrink-0 items-center gap-3.5 lg:w-[219px]">
              <span className="flex h-9 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[7.6px] bg-[#0051e4] shadow-[0px_4.6px_10.7px_-2.3px_rgba(37,99,235,0.36)]">
                <Image src={rowIcons[row.icon]} alt="" className="size-[22px]" />
              </span>
              <span className="text-[17px] font-extrabold tracking-[-0.05px] text-[#13161b]">
                {row.label}
              </span>
            </div>

            <div className="flex flex-1 flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-4">
              <p className="flex items-center rounded-full bg-[#fcecea] px-4 py-2.5 text-sm font-extrabold leading-[1.4] text-[#d03836] lg:w-[449px] lg:shrink-0">
                {row.before}
              </p>
              <Image
                src={Arrow}
                alt=""
                className="h-[24px] w-[22px] shrink-0 rotate-90 self-center lg:rotate-0"
              />
              <p className="flex flex-1 items-center rounded-full bg-[#e6f6ee] px-4 py-2.5 text-sm font-extrabold leading-[1.4] text-[#059669]">
                {row.after}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-[14px] border-[1.15px] border-[#e0e3e9] bg-white px-4 py-4">
        <Image src={NoteFlag} alt="" className="mt-0.5 h-[22px] w-[19px] shrink-0" />
        <p className="text-sm leading-[1.5] text-[#4a5261]">{caseStudies_ImpactNote}</p>
      </div>
    </section>
  )
}

export default Impact
