'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroBg from "@/public/assets/Images/home/ksa/hero-bg.png"
import ConsultationModal from "@/components/common/ConsultationModal"
import LogoCloud from "./LogoCloud"

// One background film per regional home page, keyed by the file's own name in
// public/assets/videos.
const HERO_VIDEOS = {
  global: "/assets/videos/global.webm",
  uk: "/assets/videos/uk.webm",
  ksa: "/assets/videos/ksa.webm",
} as const

export type HeroRegion = keyof typeof HERO_VIDEOS

interface HeroProps {
  region?: HeroRegion
}

function Hero({ region = "global" }: HeroProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  return (
    <section
      className="relative h-screen md:min-h-screen flex items-center overflow-hidden pt-28 sm:pt-10 -mt-19"
    >

      <div className="absolute inset-0 -z-10">
        {/* Decorative backdrop. `key` forces a reload when the region changes,
            since swapping a <source> alone does not re-fetch. The still is the
            poster, so it covers both the pre-load frame and browsers without
            webm support. */}
        <video
          key={region}
          className="h-full w-full object-cover"
          poster={HeroBg.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={HERO_VIDEOS[region]} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
      </div>



      <div className="absolute -top-32 -left-56 size-[550px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -top-24 -right-40 size-[500px] rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-0 pb-16">
        <div
          className="mx-auto lg:mx-0 max-w-2xl rounded-3xl px-8 py-10 md:px-12 md:py-10 bg-accent/5 backdrop-blur-sm border border-white/20"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
            Innovative Tech That Drives Progress
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
            From custom applications to full scale enterprise systems, we help businesses cut through complexity and ship technology that drives real results, without the bureaucracy of a big consultancy.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              className="rounded-full"
              onClick={() => setIsConsultationOpen(true)}
            >
              Start a conversation
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-white bg-accent/5 backdrop-blur-3xl hover:bg-white/20 hover:text-white border border-white/20 font-bold"
              asChild
            >
              <Link href="/services">See Our Work →</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Client marquee sits over the dark hero band — the logo exports are
          white-filled and would be invisible on the light sections below. */}
      <div className="absolute inset-x-0 bottom-4">
        <LogoCloud />
      </div>

      <ConsultationModal
        open={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </section>
  )
}

export default Hero
