import Image from "next/image"
import { Eyebrow, SHELL } from "../../_components/Ui"
import { isRenderableImageSrc, FALLBACK_POST_IMAGE } from "@/lib/lib-backend/blog-actions/blog-image"
import type { CaseStudyDetailProps } from "@/lib/lib-backend/case-study/types"

import HeroBg from "@/public/assets/Images/casestudies/detail/hero-bg.svg"

function Hero({ caseStudy }: { caseStudy: CaseStudyDetailProps }) {
  const { heroTitle, heroSubtitle, heroImage, industry, serviceAreas } = caseStudy
  const image = isRenderableImageSrc(heroImage) ? heroImage! : FALLBACK_POST_IMAGE

  return (
    <section className="relative isolate overflow-hidden bg-[#060b19] -mt-20">
      <Image
        src={HeroBg}
        alt=""
        aria-hidden
        priority
        className="pointer-events-none absolute inset-0 -z-10 size-full select-none object-cover"
      />

      <div className={`${SHELL} pt-32 pb-16 md:pt-[172px] md:pb-24`}>
        <div className="flex flex-wrap items-center gap-3">
          <Eyebrow>Case Study</Eyebrow>
          {industry && <Eyebrow variant="dark">{industry}</Eyebrow>}
        </div>

        <h1 className="mt-4 max-w-[766px] text-4xl leading-[1.17] text-white md:text-5xl">
          {heroTitle}
        </h1>

        {heroSubtitle && (
          <p className="mt-4 max-w-[644px] text-base leading-6 text-white/90">
            {heroSubtitle}
          </p>
        )}

        {serviceAreas && serviceAreas.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2.5">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center rounded-full border border-white/20 bg-white/8 px-3 py-1.5 text-sm font-bold leading-5 text-white/85"
              >
                {area}
              </span>
            ))}
          </div>
        )}

        <div className="relative mt-10 aspect-[1152/480] w-full overflow-hidden rounded-2xl bg-[#1b2334]">
          <Image
            src={image}
            alt={heroTitle ?? ""}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
