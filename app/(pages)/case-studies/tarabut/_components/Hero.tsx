import Image from "next/image"
import { caseStudies_HeroStats, caseStudies_HeroTags } from "@/app/_constant"

import Laptop from "@/public/assets/Images/casestudies/hero-laptop.png"
import ScreenTop from "@/public/assets/Images/casestudies/hero-screen-top.png"
import ScreenBody from "@/public/assets/Images/casestudies/hero-screen-body.png"
import GlowLeft from "@/public/assets/Images/casestudies/hero-glow-left.svg"
import GlowRight from "@/public/assets/Images/casestudies/hero-glow-right.svg"
import IconInstitutions from "@/public/assets/Images/casestudies/stat-icon-institutions.svg"
import IconUsers from "@/public/assets/Images/casestudies/stat-icon-users.svg"

// The "$45M" stat icon is drawn from primitives in the design (two rounded
// rectangles inside a blue tile) rather than exported as an asset, so it is
// reproduced here with the same primitives.
function FundingIcon() {
  return (
    <span className="relative block size-[38px] shrink-0 overflow-hidden rounded-[10px] bg-[#0051e4] shadow-[0px_5.9px_11.8px_0px_rgba(0,81,228,0.35)]">
      <span className="absolute left-[8.9px] top-[11.8px] block h-[14.8px] w-[20.7px] rounded-[3px] border-[1.5px] border-white" />
      <span className="absolute left-[16.3px] top-[16.3px] block h-[5.9px] w-[6.7px] rounded-l-[1.5px] bg-white" />
    </span>
  )
}

function StatIcon({ icon }: { icon: "institutions" | "users" | "funding" }) {
  if (icon === "funding") return <FundingIcon />
  if (icon === "users") {
    return (
      <span className="relative flex size-[38px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#0051e4] shadow-[0px_5.9px_11.8px_0px_rgba(0,81,228,0.35)]">
        <Image src={IconUsers} alt="" className="h-[20px] w-[16px]" />
      </span>
    )
  }
  return <Image src={IconInstitutions} alt="" className="size-[38px] shrink-0" />
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(108.88deg, rgb(6,11,25) 9.52%, rgb(4,26,87) 57.14%, rgb(13,51,143) 104.76%)",
      }}
    >
      {/* Decorative glows */}
      <Image
        src={GlowLeft}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-[105px] -top-[128px] w-[355px] select-none"
      />
      <Image
        src={GlowRight}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-[80px] -top-[85px] w-[385px] select-none"
      />

      {/* Dot matrix */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[52px] h-[420px]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 0.9px, transparent 0.9px)",
          backgroundSize: "57.69px 41.42px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 md:px-10 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-[0.85px] border-white/25 bg-white/10 px-3 py-1.5">
              <span className="size-[5px] rounded-full bg-[#0051e4]" />
              <span className="text-[11px] font-semibold text-white">Case Study</span>
            </span>

            <h1 className="font-helvetica-now-display mt-4 max-w-[601px] text-4xl font-bold leading-[1.17] text-white md:text-5xl">
              Powering Secure Open Banking Innovation
            </h1>

            <p className="font-helvetica-now-display mt-6 max-w-[644px] text-base leading-6 text-white/90">
              Virtuosoft has been partnering with Tarabut&rsquo;s Riyadh subsidiary for over 1.6
              years as a software development and security controls implementation partner. As the
              MENA region&rsquo;s leading open banking and embedded finance platform, Tarabut
              enables secure, API-driven connectivity between banks, fintechs, and third-party
              service providers. Virtuosoft supported the design and development of regulated open
              banking platform components, accelerating development cycles while ensuring security,
              scalability and regulatory alignment across the ecosystem.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {caseStudies_HeroTags.map((tag) => (
                <span
                  key={tag}
                  className="font-helvetica-now-display inline-flex items-center rounded-full border-[0.85px] border-white/20 bg-white/8 px-3 py-1.5 text-sm font-bold leading-5 text-white/85"
                >
                  {tag}
                </span>
              ))}
              <a
                href="https://www.tarabut.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-helvetica-now-display ml-1 inline-flex items-center gap-1.5 text-sm font-bold leading-5 text-white transition-opacity hover:opacity-80"
              >
                View Live Site
                <span aria-hidden className="text-xs font-semibold">
                  &#8599;
                </span>
              </a>
            </div>
          </div>

          {/* Laptop mockup with the Tarabut site on screen */}
          <div className="relative w-full">
            <div className="relative mx-auto w-full max-w-[665px]">
              <Image
                src={Laptop}
                alt="Tarabut open banking platform shown on a laptop"
                className="relative z-10 h-auto w-full select-none"
                priority
              />
              {/* Screen cut-out of the laptop frame, expressed as a share of the
                  mockup so it stays aligned at every width. */}
              <div className="absolute left-[13.037%] top-[2.254%] h-[80.132%] w-[74.023%] overflow-hidden">
                <div className="absolute left-[-0.03%] top-0 h-[64.07%] w-[100.8%] overflow-hidden">
                  <Image
                    src={ScreenTop}
                    alt=""
                    className="absolute left-0 top-0 h-[157.25%] w-full max-w-none"
                  />
                </div>
                <div className="absolute left-[-0.03%] top-[10.4%] h-[80.58%] w-[100.8%] overflow-hidden">
                  <Image
                    src={ScreenBody}
                    alt=""
                    className="absolute left-0 top-[-25.04%] h-[125.04%] w-full max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stat row */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {caseStudies_HeroStats.map((stat) => (
            <div
              key={stat.value}
              className="flex items-start gap-4 rounded-[13px] border-[0.74px] border-[#ebedf2]/60 bg-white/10 px-4 py-5"
            >
              <StatIcon icon={stat.icon} />
              <span className="flex flex-col gap-0.5">
                <span className="font-helvetica-now-display text-xl font-medium leading-7 text-white">
                  {stat.value}
                </span>
                <span className="font-helvetica-now-display text-base leading-[22px] text-white">
                  {stat.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
