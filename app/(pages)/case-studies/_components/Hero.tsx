import Image from "next/image"
import { Eyebrow, SHELL } from "./Ui"

import HeroBg from "@/public/assets/Images/casestudies/detail/hero-bg.svg"

/**
 * "Case Study Hero — Full" (Figma 2179:16555 + Container 2179:16779).
 *
 * The hero art is a single exported 1440x441 vector; the global <Nav /> from
 * app/(pages)/layout.tsx sits in flow above this section, so no nav offset is
 * applied here.
 */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#060b19] -mt-20">
      <Image
        src={HeroBg}
        alt=""
        aria-hidden
        priority
        className="pointer-events-none absolute inset-0 -z-10 size-full select-none object-cover"
      />

      <div className={`${SHELL} pt-32 pb-16 md:pt-[172px] md:pb-[115px]`}>
        <Eyebrow>Case Study</Eyebrow>

        <h1 className="mt-2 text-4xl leading-[1.17] text-white md:text-5xl">
          Our Success <span className="font-bold">Stories</span>
        </h1>

        <p className="mt-3 max-w-[452px] text-base leading-[22px] text-white">
          Explore how we&rsquo;ve helped businesses transform through innovative custom software
          solutions
        </p>
      </div>
    </section>
  )
}

export default Hero
