import Image from "next/image"
import HeroBg from "@/public/assets/Images/whitepaper/hero-bg.svg"
import BadgeSparkle from "@/public/assets/Images/whitepaper/badge-sparkle.svg"

// Dark "futuristic" hero band: the gradient, corner glows and dot grid all come
// from the exported Figma frame, so nothing here is redrawn by hand.
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060B19]">
      <Image
        src={HeroBg}
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 md:px-10 md:pt-[172px] md:pb-[115px] lg:px-6">
        <span className="inline-flex items-center gap-2 rounded-[180px] border border-[#0051e4] bg-[#f8faff] px-[17px] py-[9px]">
          <span className="relative block size-[14px] shrink-0">
            <Image src={BadgeSparkle} alt="" fill className="size-full" />
          </span>
          <span className="font-helvetica-now-display text-[12px] font-bold leading-[16px] text-[#0051e4]">
            Resources
          </span>
        </span>

        <h1 className="font-helvetica-now-display mt-2 text-4xl font-normal leading-[1.2] text-white md:text-[48px] md:leading-[56px]">
          White Papers
        </h1>

        <p className="font-helvetica-now-display mt-3 max-w-[553px] text-[16px] leading-[22px] text-white">
          Discover in-depth research and expert perspectives on AI, digital
          transformation, emerging technologies, and the trends shaping modern
          businesses.
        </p>
      </div>
    </section>
  )
}

export default Hero
