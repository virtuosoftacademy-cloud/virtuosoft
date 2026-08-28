'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import HeroBg from "@/public/assets/Images/home/ksa/hero-bg.png"

function Hero() {
  return (
    <section
      className="relative min-h-[600px] md:min-h-screen flex items-center overflow-hidden pt-10 -mt-20"
    >

      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroBg}
          alt="Riyadh skyline"
          className="h-full w-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
      </div>



      <div className="absolute -top-32 -left-56 size-[550px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -top-24 -right-40 size-[500px] rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-0 pb-16">
        <div
          className="max-w-2xl rounded-3xl px-8 py-10 md:px-12 md:py-10 bg-accent/20 backdrop-blur-3xl border border-white/20"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
            Innovative Tech That Drives Progress
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
            From custom applications to full scale enterprise systems, we help businesses cut through complexity and ship technology that drives real results, without the bureaucracy of a big consultancy.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="default" size="lg" className="rounded-full font-sans" asChild>
              <Link href="/contact">Get Your Free Consultation</Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full font-sans text-white bg-transparent backdrop-blur-3xl hover:bg-white/20 hover:text-white border border-white/20"
              asChild
            >
              <Link href="/services">See Our Work →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
