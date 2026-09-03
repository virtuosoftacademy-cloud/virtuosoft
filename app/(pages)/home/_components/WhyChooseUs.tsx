'use client'

import Image from "next/image"
import BadgeIcon from "@/public/assets/Images/home/global/badge-sparkle.svg"
import { global_WhyChooseUs } from "@/app/_constant"
import DotPattern from "@/public/assets/Images/home/global/whychoose-dot-pattern.svg"
import ConnectorWave from "@/public/assets/Images/home/global/whychoose-connector-wave.svg"

function WhyChooseUs() {
  return (
    <div className="relative overflow-hidden py-16 lg:pb-42 lg:pt-24 bg-linear-to-tr from-white to-primary/10">
      <div className="absolute -right-6 blur-3xl bg-primary/40 size-36"/>
      <Image
        src={DotPattern}
        alt=""
        className="pointer-events-none select-none absolute right-0 -top-2 w-[520px] opacity-90"
      />
      <Image
        src={DotPattern}
        alt=""
        className="pointer-events-none select-none absolute left-0 -bottom-10 w-[520px] rotate-180 opacity-90"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-0">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
          <Image src={BadgeIcon} alt="" className="size-3.5" />
          <span className="text-xs font-bold text-primary">The intelligence layer</span>
        </div>
        <h2 className="mt-5 max-w-2xl text-4xl leading-[1.4] text-[#050f21] md:text-[40px] whitespace-pre-line">
          Why Choose Us? {"\n"}<span className="text-primary font-bold">Technology With Purpose</span>
        </h2>
        {" "}
        <p className="mt-3 text-base leading-[1.4] text-[#474747] max-w-xl">
          We combine innovation, industry expertise and proven execution to deliver scalable technology solutions that create measurable business value.
        </p>

        <div className="relative mt-10">
          {/* Dashed wave threading the staggered cards together */}
          <Image
            src={ConnectorWave}
            alt=""
            className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 select-none lg:block"
          />

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {global_WhyChooseUs.map((card, index) => (
              <div
                key={card.title}
                className={`rounded-[21px] bg-white border border-[#E8EBF2] shadow-[0_15px_32px_-8px_rgba(26,38,89,0.08)] px-8 pt-6 pb-18 transition ${
                  index % 2 === 1 ? "lg:translate-y-15" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={60}
                    height={60}
                    className="size-22 object-contain -ml-5"
                  />
                  <span className="text-sm leading-6 text-[#0051e4]/40">
                    {card.index}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#050f21]">
                  {card.title}
                </h3>
                <div className="mt-2 h-[3px] w-[34px] rounded-full bg-primary" />
                <p className="mt-4 text-sm leading-6 text-[#5c6169] w-52">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
