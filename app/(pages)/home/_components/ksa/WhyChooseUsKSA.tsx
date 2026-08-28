'use client'

import Image from "next/image"
import BadgeIcon from "@/public/assets/Images/home/ksa/badge-sparkle.svg"
import { ksa_WhyChooseUs } from "@/app/_constant"

function WhyChooseUsKSA() {
  return (
    <div
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        backgroundImage: "linear-gradient(120deg, #F5FAFF 0%, #F6FBFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
          <Image src={BadgeIcon} alt="" className="size-3.5" />
          <span className="font-helvetica-now-display text-xs font-bold text-primary">The intelligence layer</span>
        </div>
        <h2 className="font-helvetica-now-display mt-5 text-4xl md:text-[40px] leading-[1.2] text-[#050f21]">
          Why Choose Us? <span className="text-primary font-bold">Technology With Purpose</span>
        </h2>
        <p className="font-helvetica-now-display mt-4 text-base text-[#474747] max-w-xl">
          We combine innovation, industry expertise and proven execution to deliver scalable technology solutions that create measurable business value.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ksa_WhyChooseUs.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white border border-[#E8EBF2] shadow-[0_15px_32px_-8px_rgba(26,38,89,0.08)] p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary">
                  <Image src={card.icon} alt={card.title} width={28} height={28} className="size-7 object-contain" />
                </div>
                <span className="font-helvetica-now-display text-sm text-primary/40">{card.index}</span>
              </div>
              <h3 className="font-helvetica-now-display mt-6 text-xl font-bold text-[#050f21]">{card.title}</h3>
              <div className="mt-2 h-[3px] w-9 rounded-full bg-primary" />
              <p className="font-helvetica-now-display mt-4 text-sm text-[#5c6169] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUsKSA
