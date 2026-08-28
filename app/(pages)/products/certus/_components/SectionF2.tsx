import Image from "next/image"
import { Eyebrow, SectionBody, SectionTitle, SHELL } from "./Ui"

/**
 * Figma 2005:38224 — "Who Built This" intro + two glass case-study cards
 * (Group 1000002082, 1544 × 942). The Figma frame is wider than the 1248 shell,
 * so the two 760px cards are re-flowed into a responsive 2-column grid.
 */

const BASE = "/assets/Images/products/certus/page"

type CaseCard = {
  title: string
  description: string
  industry?: string
  visual: string
  visualAlt: string
  /** how the art fills the 736×406 frame in Figma */
  visualFit: "object-fill" | "object-cover"
  logo: string
  logoAlt: string
  /** logo placement inside the visual, taken from Figma */
  logoClass: string
  logoAspect: string
}

const CARDS: CaseCard[] = [
  {
    title: "Industrial Grade Service management for GASCO",
    description:
      "GASCO partnered with us to implement and manage IT Service management on BMC Helix across its Riyadh operation, replacing fragment requested handing with a single, measured service desk aligned to ITIL and ISO/IEC 20000.",
    visual: `${BASE}/f-card-gasco-visual.png`,
    visualAlt: "Abstract blue light-trail artwork",
    visualFit: "object-fill",
    logo: `${BASE}/f-card-gasco-logo.svg`,
    logoAlt: "Alwatania International Holding",
    logoClass: "left-[4.35%] top-[9.4%] w-[20.4%]",
    logoAspect: "150 / 70",
  },
  {
    title: "Advancing Cyber Resilience",
    description:
      "We engaged with Tawal Telecom as a third-party cybersecurity vendor to perform advance Red Teaming assessments. The engagement focus on simulation real-detective and response security controls.",
    industry: "Holding & Investment",
    visual: `${BASE}/f-card-tarabut-visual.png`,
    visualAlt: "Abstract blue data-stream artwork",
    visualFit: "object-cover",
    logo: `${BASE}/f-card-tarabut-logo.svg`,
    logoAlt: "Tarabut",
    logoClass: "left-[2.8%] top-[2.8%] w-[24%]",
    logoAspect: "176.8 / 82.7",
  },
]

function CaseStudyCard({ card }: { card: CaseCard }) {
  return (
    <article className="overflow-hidden rounded-[22px] border-[0.97px] border-white/95 bg-gradient-to-br from-white/[0.92] to-white/[0.62] p-3 shadow-[0px_0px_29px_0px_rgba(52,67,122,0.09)]">
      {/* Visual — 736 × 406 in Figma */}
      <div className="relative aspect-[736/406] w-full overflow-hidden rounded-[18px] bg-[#1b2334]">
        <Image
          src={card.visual}
          alt={card.visualAlt}
          fill
          sizes="(max-width: 768px) 100vw, 620px"
          className={card.visualFit}
        />

        <div
          className={`absolute ${card.logoClass}`}
          style={{ aspectRatio: card.logoAspect }}
        >
          <Image
            src={card.logo}
            alt={card.logoAlt}
            fill
            sizes="200px"
            className="object-contain brightness-0 invert"
          />
        </div>

        {/* frosted footer strip */}
        <div className="absolute inset-x-0 bottom-0 h-[23.4%] backdrop-blur-[7px]" />

        {/* "View Project" chip — non-interactive, no project route exists yet */}
        <div className="absolute bottom-[5.7%] right-[4.2%] inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2.5 text-white sm:px-5 sm:py-3.5">
          <span className="text-sm font-semibold leading-none sm:text-[17px]">
            View Project
          </span>
          <span aria-hidden className="text-lg leading-none sm:text-[20px]">
            &rarr;
          </span>
        </div>
      </div>

      {/* Copy */}
      <div className="px-2 pb-4 pt-10 sm:px-4 sm:pt-14">
        <div className="h-px w-full bg-[#f3f6ff]" />

        <h3 className="font-helvetica-now-display mt-[18px] text-xl font-bold leading-8 text-[#050f21] sm:text-2xl">
          {card.title}
        </h3>

        <div className="mt-1 flex items-start justify-between gap-6">
          <div className="min-w-0 max-w-[675px]">
            <p className="font-helvetica-now-display text-sm font-bold leading-5 text-[#050f21]">
              DESCRIPTION
            </p>
            <p className="font-helvetica-now-display mt-[5px] text-sm leading-6 text-[#050f21]">
              {card.description}
            </p>
          </div>

          {card.industry && (
            <div className="mt-1 hidden w-[128px] shrink-0 lg:block">
              <p className="text-[10px] font-semibold tracking-[0.6px] text-[#050f21]">
                INDUSTRY
              </p>
              <p className="mt-1 text-[13.5px] leading-[17px] text-[#050f21]">
                {card.industry}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function SectionF2() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className={SHELL}>
        <div className="flex flex-col gap-3">
          <Eyebrow className="self-start">Who Built This</Eyebrow>
          <SectionTitle
            lead="16+ Years Building Enterprise Systems That"
            accent="Work in Production"
          />
          <SectionBody className="max-w-[585px]">
            Virtuosoft is an enterprise technology and AI consulting firm with
            offices in Pakistan, Saudi Arabia, UAE, USA and France. We have
            scaled 50+ startups and enterprises, impacted 50,000+ users and
            built systems across ERP, FinTech, cybersecurity and custom software
            engineering.
          </SectionBody>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CARDS.map((card) => (
            <CaseStudyCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
