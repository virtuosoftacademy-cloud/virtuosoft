'use client'
import Image from "next/image"
import BadgeIcon from '@/public/assets/Images/home/uk/badge-sparkle.svg'
import ConnectorWave from '@/public/assets/Images/home/uk/connector-wave.svg'
import DotPattern from '@/public/assets/Images/home/uk/whychoose-dot-pattern.svg'

// UK-specific copy: the shared `values_Section` constant (Teamwork/Integrity/
// Reliability) carries longer "About Us" style copy used elsewhere on the
// site. The Figma "Why Choose Us" cards use shorter, punchier wording, so
// this section keeps its own local copy instead of editing the shared array.
const cards = [
  {
    title: "Transparency",
    description:
      "We believe in openness at every level, with our clients, partners and teams. Every action and decision is guided by honesty and clarity.",
    imageSrc: "/assets/Images/home/transparency.svg",
    alt: "Transparency Icon",
  },
  {
    title: "Teamwork",
    description:
      "Our strength lies in the way we work together, across teams and disciplines. Everyone contributes, challenges and supports one another.",
    imageSrc: "/assets/Images/home/teamwork.svg",
    alt: "Teamwork Icon",
  },
  {
    title: "Integrity",
    description:
      "Integrity guides our choices and shapes our culture. We stand by our word and always choose fairness, even when no one is watching.",
    imageSrc: "/assets/Images/home/integrity.svg",
    alt: "Integrity Icon",
  },
  {
    title: "Reliability",
    description:
      "We stand for consistency, precision and accountability — from the smallest task to the most complex project, every time.",
    imageSrc: "/assets/Images/home/relability.svg",
    alt: "Reliability Icon",
  },
]

function WhyChooseUs() {
  return (
    <div className="max-w-7xl mx-auto px-10 my-16 lg:my-24 relative overflow-hidden">
      <Image
        src={DotPattern}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute right-0 -top-2 w-[260px] opacity-70"
      />
      <Image
        src={DotPattern}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute left-0 bottom-0 w-[260px] rotate-180 opacity-70"
      />

      <div className="max-w-2xl relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#f8faff] px-4 py-2">
          <Image src={BadgeIcon} alt="" className="size-3.5" />
          <span className="font-helvetica-now-display text-primary text-xs font-bold">The intelligence layer</span>
        </div>
        <h2 className="font-helvetica-now-display mt-5 font-normal text-3xl md:text-[40px] leading-[1.2] text-[#050f21]">
          Why Choose Us? <span className="text-primary font-bold">Technology With Purpose</span>
        </h2>
        <p className="font-helvetica-now-display mt-4 text-base leading-relaxed text-[#474747] max-w-xl">
          We combine innovation, industry expertise and proven execution to deliver scalable technology solutions that create measurable business value.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[75px] w-[80%] opacity-40 pointer-events-none">
          <Image src={ConnectorWave} alt="" className="w-full" />
        </div>
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="bg-white border border-[#e8ebf2] rounded-2xl p-7 shadow-[0px_15px_32px_-8px_rgba(26,38,89,0.08)]"
          >
            <div className="flex items-start justify-between">
              <div className="relative size-[52px]">
                <Image src={card.imageSrc} alt={card.alt} fill className="object-contain" />
              </div>
              <span className="font-helvetica-now-display text-sm text-primary/40">0{index + 1}</span>
            </div>
            <h3 className="font-helvetica-now-display mt-5 font-bold text-xl text-[#050f21]">{card.title}</h3>
            <div className="mt-3 h-[3px] w-9 rounded-full bg-primary" />
            <p className="font-helvetica-now-display mt-4 text-sm text-[#5c6169] leading-relaxed line-clamp-6">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
