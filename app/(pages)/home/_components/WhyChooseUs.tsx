'use client'

import Image from "next/image"
import BadgeIcon from "@/public/assets/Images/home/global/badge-sparkle.svg"
import { global_WhyChooseUs } from "@/app/_constant"
import DotPattern from "@/public/assets/Images/home/global/whychoose-dot-pattern.svg"
import ConnectorWave from "@/public/assets/Images/home/global/whychoose-connector-wave.svg"

function WhyChooseUs() {
  return (
    <div
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        backgroundImage: "linear-gradient(120.7deg, #F5FAFF 0.1%, #F6FBFF 101.2%)",
      }}
    >
      <Image
        src={DotPattern}
        alt=""
        className="pointer-events-none select-none absolute right-0 top-0 w-[260px] opacity-70"
      />
      <Image
        src={DotPattern}
        alt=""
        className="pointer-events-none select-none absolute left-0 bottom-0 w-[260px] rotate-180 opacity-70"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
          <Image src={BadgeIcon} alt="" className="size-3.5" />
          <span className="text-xs font-bold text-primary font-helvetica-now-display">The intelligence layer</span>
        </div>
        <h2 className="font-helvetica-now-display mt-5 max-w-2xl text-4xl leading-[1.4] text-[#050f21] md:text-[40px] whitespace-pre-line">
          Why Choose Us? {"\n"}<span className="text-primary font-bold">Technology With Purpose</span>
        </h2>
        {" "}
        <p className="mt-3 text-base leading-[1.4] text-[#474747] max-w-xl font-helvetica-now-display">
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
                className={`rounded-[21px] bg-white border border-[#E8EBF2] shadow-[0_15px_32px_-8px_rgba(26,38,89,0.08)] p-7 transition ${
                  index % 2 === 1 ? "lg:translate-y-15" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={60}
                    height={60}
                    className="size-15 object-contain"
                  />
                  <span className="text-sm leading-6 text-[#0051e4]/40 font-helvetica-now-display">
                    {card.index}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#050f21] font-helvetica-now-display">
                  {card.title}
                </h3>
                <div className="mt-2 h-[3px] w-[34px] rounded-full bg-primary" />
                <p className="mt-4 text-sm leading-6 text-[#5c6169] font-helvetica-now-display">
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
