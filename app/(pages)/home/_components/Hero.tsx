'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroBg from "@/public/assets/Images/home/ksa/hero-bg.png"
import ConsultationModal from "@/components/common/ConsultationModal"
import LogoCloud from "./LogoCloud"

// Copy and backdrop per regional home page, from the "Hero glass card" frames
// in Figma: Global 1929:18719, UK 1929:20051, KSA 1929:21383. The video keys
// match the file names in public/assets/videos.
const HERO_CONTENT = {
  global: {
    video: "/assets/videos/global.webm",
    titleRegular:"AI That Moves the Needle,\n",
    title: "Not Just the Conversation",
    body: "Our experience and trusted partnerships help enterprises move past AI hype and into transformation that actually redefines how they operate, compete and grow.",
    workLabel: "See Our Work",
    width:"max-w-[46em]"
  },
  uk: {
    video: "/assets/videos/uk.webm",
    titleRegular:"AI Transformation, Delivered \nWith Proof, ",
    title: "Not Promises",
    body: "We bring enterprise-grade AI expertise within reach, so growing businesses can compete, streamline operations and make smarter decisions without the enterprise price tag or complexity.",
    workLabel: "See the work",
    width:"max-w-[50em]"
  },
  ksa: {
    video: "/assets/videos/ksa.webm",
    titleRegular:"Where Proven Expertise \nMeets",
    title: " AI Transformation",
    body: "Our partnerships and regional presence give you a partner who understands enterprise complexity, delivering AI solutions built for scale, security and long-term advantage.",
    workLabel: "See the work",
    width:"max-w-[45em]"
  },
} as const

export type HeroRegion = keyof typeof HERO_CONTENT

interface HeroProps {
  region?: HeroRegion
}

function Hero({ region = "global" }: HeroProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const content = HERO_CONTENT[region]

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
          <source src={content.video} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
      </div>



      <div className="absolute -left-40 size-[800px] bg-primary/20 blur-3xl" />
      <div className="absolute size-full -right-40 bg-primary/12 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-0 pb-16">
        <div
          className={`mx-auto lg:mx-0 rounded-3xl px-8 py-10 md:pl-12 md:pr-0 md:py-10 bg-foreground/5 backdrop-blur-lg border border-white/20 ${content.width}`}
        >
          <h1 className="text-4xl md:text-[3.50em] md:whitespace-pre font-semibold text-white leading-[1.05] tracking-tight">
            <span className="font-normal">
              {content.titleRegular}
            </span>
            {content.title}
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
            {content.body}
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
              <Link href="/services">{content.workLabel} →</Link>
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
