'use client'

import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { SHELL } from "./Ui"

import VisualAlwatania from "@/public/assets/Images/casestudies/detail/visual-alwatania.png"
import VisualAmax from "@/public/assets/Images/casestudies/detail/visual-amax.png"
import VisualTarabut from "@/public/assets/Images/casestudies/detail/visual-tarabut.png"
import VisualGasco from "@/public/assets/Images/casestudies/detail/visual-gasco.png"
import VisualNeogies from "@/public/assets/Images/casestudies/detail/visual-neogies.png"
import VisualBuypass from "@/public/assets/Images/casestudies/detail/visual-buypass.png"

import LogoAlwatania from "@/public/assets/Images/casestudies/detail/logo-alwatania.svg"
import LogoAmax from "@/public/assets/Images/casestudies/detail/logo-amax.svg"
import LogoTarabut from "@/public/assets/Images/casestudies/detail/logo-tarabut.svg"
import LogoGasco from "@/public/assets/Images/casestudies/detail/logo-gasco.svg"
import LogoNeogies from "@/public/assets/Images/casestudies/detail/logo-neogies.svg"
import LogoBuypass from "@/public/assets/Images/ClientLogo/buypass.png"

/**
 * Every card in the Figma frame carries the same DESCRIPTION paragraph — the
 * designer left the GASCO copy in place across all six. Reproduced verbatim.
 */
const DESCRIPTION =
  "GASCO partnered with us to implement and manage IT Service management on BMC Helix across its Riyadh operation, replacing fragment requested handing with a single, measured service desk aligned to ITIL and ISO/IEC 20000."

type CaseCard = {
  id: string
  title: string
  description: string
  visual: StaticImageData
  logo: StaticImageData
  /** Logo width as a share of the 588px visual, straight from the Figma frame. */
  logoWidth: string
  logoAlt: string
  /** Renders a dark-on-transparent logo white, matching the design treatment. */
  invertLogo?: boolean
  /** Only set when the destination route actually exists in the app. */
  href?: string
}

const CASE_CARDS: CaseCard[] = [
  {
    id: "gasco-service-management",
    title: "Industrial Grade Service management for GASCO",
    description: DESCRIPTION,
    visual: VisualAlwatania,
    logo: LogoAlwatania,
    logoWidth: "21.3%",
    logoAlt: "Alwatania",
  },
  {
    id: "amax-genbi",
    title: "AMAX’s Conversational Data Agent - GenBI",
    description: DESCRIPTION,
    visual: VisualAmax,
    logo: LogoAmax,
    logoWidth: "17%",
    logoAlt: "AMAX",
  },
  {
    id: "tarabut-open-banking",
    title: "Powering Secure Open Banking Innovation",
    description: DESCRIPTION,
    visual: VisualTarabut,
    logo: LogoTarabut,
    logoWidth: "17%",
    logoAlt: "Tarabut",
    href: "/case-studies/tarabut",
  },
  {
    id: "gasco-itsm",
    title: "Enterprise IT Service Management",
    description: DESCRIPTION,
    visual: VisualGasco,
    logo: LogoGasco,
    logoWidth: "17%",
    logoAlt: "GASCO",
  },
  {
    id: "neogies-energy",
    title: "Empowering Energy Efficiency with NEOGIES",
    description: DESCRIPTION,
    visual: VisualNeogies,
    logo: LogoNeogies,
    logoWidth: "17%",
    logoAlt: "NEOGIES",
  },
  {
    id: "buypass-super-app",
    title: "Buypass AI :Pakistan’s First Super App",
    description: DESCRIPTION,
    visual: VisualBuypass,
    logo: LogoBuypass,
    logoWidth: "16.3%",
    logoAlt: "Buypass",
    invertLogo: true,
  },
]

const INITIAL_VISIBLE = 4

const CARD_SURFACE =
  "linear-gradient(146.26deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.62) 71.43%)"

const VISUAL_SCRIM =
  "linear-gradient(to bottom, rgba(0,0,0,0.08) 40.87%, rgba(0,0,0,0.4) 101.3%)"

function ViewProjectPill() {
  return (
    <>
      <span className="text-[15px] font-semibold sm:text-[17px]">View Project</span>
      <span aria-hidden className="text-[18px] sm:text-[20px]">
        &#8594;
      </span>
    </>
  )
}

function CaseCardItem({ card }: { card: CaseCard }) {
  const pillClasses =
    "absolute bottom-5 right-5 flex h-11 w-[150px] items-center justify-center gap-2.5 rounded-full bg-white/10 text-white backdrop-blur-[2px] sm:bottom-7 sm:right-7 sm:h-12 sm:w-[180px]"

  return (
    <article
      className="overflow-hidden rounded-[22.56px] border-[0.97px] border-white/95 p-3 shadow-[0px_0px_29.115px_0px_rgba(52,67,122,0.09)]"
      style={{ backgroundImage: CARD_SURFACE }}
    >
      {/* Visual — 588x298 in Figma */}
      <div className="relative aspect-[588/298] w-full overflow-hidden rounded-[18px] bg-[#1b2334]">
        <Image
          src={card.visual}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover"
          sizes="(min-width: 1280px) 588px, (min-width: 768px) 45vw, 92vw"
        />

        <span
          aria-hidden
          className="absolute inset-0 block"
          style={{ backgroundImage: VISUAL_SCRIM }}
        />

        <span
          className="absolute left-[4.8%] top-[9.4%] block"
          style={{ width: card.logoWidth }}
        >
          <Image
            src={card.logo}
            alt={card.logoAlt}
            className={`h-auto w-full select-none ${card.invertLogo ? "brightness-0 invert" : ""}`}
          />
        </span>

        {card.href ? (
          <Link
            href={card.href}
            className={`${pillClasses} transition-colors hover:bg-white/20`}
          >
            <ViewProjectPill />
          </Link>
        ) : (
          /* No detail route exists for this study yet, so the control is
             rendered as a non-interactive label rather than a dead link. */
          <span className={pillClasses} aria-hidden>
            <ViewProjectPill />
          </span>
        )}
      </div>

      <div className="px-4">
        <span aria-hidden className="mt-10 block h-px w-full bg-[#f3f6ff]" />

        <h3 className="font-helvetica-now-display mt-5 text-2xl font-bold leading-8 text-[#050f21]">
          {card.title}
        </h3>

        <p className="font-helvetica-now-display mt-6 text-sm font-bold leading-5 text-[#050f21]">
          DESCRIPTION
        </p>

        <p className="font-helvetica-now-display mb-7 mt-1 text-sm leading-6 text-[#474747]">
          {card.description}
        </p>
      </div>
    </article>
  )
}

function CaseGrid() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? CASE_CARDS : CASE_CARDS.slice(0, INITIAL_VISIBLE)

  return (
    <section className={`${SHELL} py-14 lg:py-16`}>
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((card) => (
          <CaseCardItem key={card.id} card={card} />
        ))}
      </div>

      {!showAll && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="font-helvetica-now-display inline-flex h-12 w-[200px] items-center justify-center rounded-[50px] border-[1.5px] border-[#0051e4] text-base font-bold leading-6 text-[#0051e4] transition-colors hover:bg-[#0051e4] hover:text-white"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}

export default CaseGrid
