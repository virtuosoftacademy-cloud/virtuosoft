'use client'
import Image from "next/image"
import { CommonHead } from "@/components/Styles/StyleClasses"
import BadgeSparkle from '@/public/assets/Images/home/uk/case-badge-sparkle.svg'
import GascoPhoto from '@/public/assets/Images/home/uk/case-gasco-photo.png'
import GascoLogo from '@/public/assets/Images/home/uk/case-gasco-logo.svg'
import CyberPhoto from '@/public/assets/Images/home/uk/case-cyber-photo.png'
import CyberLogo from '@/public/assets/Images/home/uk/case-cyber-logo.svg'

interface CaseStudy {
  title: string
  description: string
  industry?: string
  photo: typeof GascoPhoto
  logo: typeof GascoLogo
}

// Copy pulled verbatim from Figma (node 2005:32542 / 2005:32764) via
// get_design_context. The source copy has a couple of rough phrasings
// ("replacing fragment requested handing", "focus on simulation
// real-detective") — kept as-is to match the current design exactly rather
// than silently rewriting it; flag with design if it should be cleaned up.
const caseStudies: CaseStudy[] = [
  {
    title: "Industrial Grade Service management for GASCO",
    description:
      "GASCO partnered with us to implement and manage IT Service management on BMC Helix across its Riyadh operation, replacing fragment requested handing with a single, measured service desk aligned to ITIL and ISO/IEC 20000.",
    photo: GascoPhoto,
    logo: GascoLogo,
  },
  {
    title: "Advancing Cyber Resilience",
    description:
      "We engaged with Tawal Telecom as a third-party cybersecurity vendor to perform advance Red Teaming assessments. The engagement focus on simulation real-detective and response security controls.",
    industry: "Holding & Investment",
    photo: CyberPhoto,
    logo: CyberLogo,
  },
]

function CaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-10 my-16 lg:my-24">
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2">
          <Image src={BadgeSparkle} alt="" className="size-3.5" />
          <span className="font-helvetica-now-display text-primary text-xs font-bold">Who Built This</span>
        </div>
        <h4 className={`font-helvetica-now-display font-normal mt-5 ${CommonHead}`}>
          16+ Years Building Enterprise Systems That <span className="text-primary">Work in Production</span>
        </h4>
        <p className="font-helvetica-now-display mt-4 text-[#4c5468] text-base">
          Virtuosoft is an enterprise technology and AI consulting firm with offices in Pakistan, Saudi Arabia, UAE, USA and France. We have scaled 50+ startups and enterprises, impacted 50,000+ users and built systems across ERP, FinTech, cybersecurity and custom software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {caseStudies.map((study) => (
          <div
            key={study.title}
            className="rounded-3xl border border-white/95 shadow-[0px_0px_29px_0px_rgba(52,67,122,0.09)] p-3"
            style={{
              backgroundImage:
                "linear-gradient(147deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.62) 71.4%)",
            }}
          >
            <div className="relative aspect-[736/406] rounded-2xl overflow-hidden bg-[#1b2334]">
              <Image src={study.photo} alt={study.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />
              <div className="absolute left-8 top-9 h-20 w-44">
                <Image src={study.logo} alt="" fill className="object-contain object-left brightness-0 invert" />
              </div>
              <div className="absolute right-8 bottom-8 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-5 py-3 text-white">
                <span className="text-sm font-semibold">View Project</span>
                <span aria-hidden>→</span>
              </div>
            </div>

            <div className="px-5 pt-6 pb-5">
              <h3 className="font-helvetica-now-display font-bold text-2xl text-[#050f21]">{study.title}</h3>
              <div className="mt-5 flex gap-8">
                <div className="flex-1">
                  <p className="font-helvetica-now-display text-sm font-bold text-[#050f21]">DESCRIPTION</p>
                  <p className="font-helvetica-now-display mt-2 text-sm text-[#050f21]/80 leading-relaxed">{study.description}</p>
                </div>
                {study.industry && (
                  <div className="shrink-0 w-32">
                    <p className="text-xs font-semibold tracking-wide text-[#050f21]">INDUSTRY</p>
                    <p className="mt-2 text-sm text-[#050f21]/80">{study.industry}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseStudies
