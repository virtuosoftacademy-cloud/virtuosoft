'use client'

import Image from "next/image"
import BadgeIcon from "@/public/assets/Images/home/ksa/badge-sparkle.svg"
import CaseGascoBg from "@/public/assets/Images/home/ksa/case-gasco.png"
import CaseGascoLogo from "@/public/assets/Images/home/ksa/case-alwatania-logo.svg"
import CaseTawalBg from "@/public/assets/Images/home/ksa/case-tawal.png"
import CaseTawalLogo from "@/public/assets/Images/home/ksa/case-tarabut-logo.svg"

interface KsaCaseStudy {
  title: string
  description: string
  industry: string
  bgImage: typeof CaseGascoBg
  logo: typeof CaseGascoLogo
}

const ksaCaseStudies: KsaCaseStudy[] = [
  {
    title: "Industrial Grade Service management for GASCO",
    description:
      "GASCO partnered with us to implement and manage IT Service management on BMC Helix across its Riyadh operation, replacing fragmented request handling with a single, measured service desk aligned to ITIL and ISO/IEC 20000.",
    industry: "Oil & Gas",
    bgImage: CaseGascoBg,
    logo: CaseGascoLogo,
  },
  {
    title: "Advancing Cyber Resilience",
    description:
      "We engaged with Tawal Telecom as a third-party cybersecurity vendor to perform advanced Red Teaming assessments. The engagement focused on simulating real-world attacks to test detection and response security controls.",
    industry: "Holding & Investment",
    bgImage: CaseTawalBg,
    logo: CaseTawalLogo,
  },
]

function TrackRecordKSA() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 my-16 lg:my-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
        <Image src={BadgeIcon} alt="" className="size-3.5" />
        <span className="font-helvetica-now-display text-xs font-bold text-primary">Who Built This</span>
      </div>
      <h2 className="font-helvetica-now-display mt-5 font-normal max-w-2xl text-4xl md:text-[40px] leading-[1.2] text-[#080e19]">
        16+ Years Building Enterprise Systems That{" "}
        <span className="text-primary font-bold">Work in Production</span>
      </h2>
      <p className="font-helvetica-now-display mt-4 text-base text-[#4c5468] max-w-2xl">
        Virtuosoft is an enterprise technology and AI consulting firm with offices in Pakistan, Saudi Arabia, UAE, USA and France. We have scaled 50+ startups and enterprises, impacted 50,000+ users and built systems across ERP, FinTech, cybersecurity and custom software engineering.
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ksaCaseStudies.map((study) => (
          <div
            key={study.title}
            className="rounded-3xl border border-white bg-gradient-to-br from-white to-[#F3F6FF] shadow-[0_0_29px_0_rgba(52,67,122,0.09)] p-3"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-[#1B2334]">
              <Image src={study.bgImage} alt={study.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
              <div className="absolute left-6 top-6 rounded-xl bg-white/95 px-4 py-3">
                <Image src={study.logo} alt="" width={110} height={40} className="h-8 w-auto object-contain" />
              </div>
              <button className="absolute bottom-6 right-6 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                View Project →
              </button>
            </div>
            <div className="p-5">
              <h3 className="font-helvetica-now-display text-xl font-bold text-[#050f21]">{study.title}</h3>
              <p className="font-helvetica-now-display mt-3 text-xs font-bold text-[#050f21] tracking-wide">
                DESCRIPTION
              </p>
              <p className="font-helvetica-now-display mt-2 text-sm text-[#575c63] leading-relaxed">
                {study.description}
              </p>
              <p className="font-helvetica-now-display mt-4 text-[10px] font-semibold tracking-wide text-[#050f21]">
                INDUSTRY
              </p>
              <p className="font-helvetica-now-display text-sm text-[#575c63]">{study.industry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrackRecordKSA
