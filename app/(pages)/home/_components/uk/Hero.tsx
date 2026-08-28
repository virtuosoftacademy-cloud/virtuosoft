'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Particles from "@/components/Particles"
import HeroEllipse1 from '@/public/assets/Images/home/uk/hero-ellipse-1.svg'
import HeroEllipse2 from '@/public/assets/Images/home/uk/hero-ellipse-2.svg'

function Hero() {
  return (
    <section className="relative min-h-full md:min-h-screen pt-20 -mt-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgb(6,11,25) 0%, rgb(8,22,64) 45%, rgb(10,35,102) 100%)",
        }}
      >
        <Image
          src={HeroEllipse1}
          alt=""
          className="absolute -left-16 -top-8 w-[45%] max-w-xl opacity-40"
        />
        <Image
          src={HeroEllipse2}
          alt=""
          className="absolute right-0 -top-6 w-[40%] max-w-lg opacity-40"
        />
        <div className="h-full opacity-80">
          <Particles
            particleCount={220}
            particleSpread={12}
            speed={0.1}
            particleColors={["#5c8dff", "#5c8dff", "#ffffff"]}
            alphaParticles={false}
            particleBaseSize={50}
            sizeRandomness={1}
            cameraDistance={11}
            disableRotation={false}
          />
        </div>
      </div>

      <div className="flex justify-center px-4 pt-24 pb-16 md:pt-32">
        <div
          className="w-full max-w-3xl rounded-3xl p-8 md:p-12 text-white"
          style={{
            backgroundImage:
              "linear-gradient(143deg, rgba(255,255,255,0.04) 2%, rgba(255,255,255,0.06) 95%)",
            backdropFilter: "blur(6px)",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.98] tracking-tight">
            Technology That Creates Impact
          </h1>
          <p className="mt-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
            Sixteen years shipping software that Saudi and Gulf enterprises depend on every day core banking integrations, clinical AI, and document intelligence running under real load.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="default" className="rounded-full font-sans">
              <Link href="/contact">Start a conversation</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full font-sans text-white border-white/40 bg-white/10 hover:bg-white/20 hover:text-white"
            >
              <Link href="/services" className="flex items-center gap-2">
                See the work <span aria-hidden>→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
