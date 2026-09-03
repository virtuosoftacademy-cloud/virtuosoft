import Image from "next/image"
import Link from "next/link"
import { SHELL, SectionBadge } from "../../_components/Ui"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getCaseStudyCards, toCarouselCard } from "@/app/api/lib/casestudy-actions/actions"
import { isOptimizableImageSrc } from "@/app/api/lib/r2"

async function MoreCaseStudies({ excludeSlug }: { excludeSlug: string }) {
  const rows = await getCaseStudyCards()
  const others = rows.filter((row) => row.slug !== excludeSlug).map(toCarouselCard)

  if (others.length === 0) return null

  return (
    <section className={`${SHELL} pb-14 md:pb-16`}>
      <SectionBadge label="Who Built This" />

      <h2 className="mt-5 max-w-3xl text-4xl leading-[1.2] text-[#080e19] md:text-[40px]">
        16+ Years Building Enterprise Systems That{" "}
        <span className="font-bold text-[#0051e4]">Work in Production</span>
      </h2>

      <p className="mt-3 max-w-2xl text-base leading-[22px] text-[#4c5468]">
        Virtuosoft is an enterprise technology and AI consulting firm with offices in Pakistan,
        Saudi Arabia, UAE, USA and France. We have scaled 50+ startups and enterprises, impacted
        50,000+ users and built systems across ERP, FinTech, cybersecurity and custom software
        engineering.
      </p>

      <Carousel opts={{ align: "start", loop: true }} className="mt-10 w-full">
        <CarouselContent>
          {others.map((card) => (
            <CarouselItem key={card.id} className="basis-[88%] sm:basis-3/4 lg:basis-[58%]">
              <div
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-white/95 p-3 shadow-[0_0_29px_0_rgba(52,67,122,0.09)]"
                style={{
                  backgroundImage:
                    "linear-gradient(146.76deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.62) 71.43%)",
                }}
              >
                {/* Visual */}
                <div className="relative aspect-[736/406] w-full overflow-hidden rounded-[18px] bg-[#1b2334]">
                  <Image
                    src={card.visual}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1280px) 75vw, 58vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={!isOptimizableImageSrc(card.visual)}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/40" />

                  {card.logoImage && (
                    <Image
                      src={card.logoImage}
                      alt={card.title}
                      width={800}
                      height={200}
                      unoptimized={!isOptimizableImageSrc(card.logoImage)}
                      className="absolute left-8 top-8 h-auto w-[150px] max-w-[45%] object-contain"
                    />
                  )}

                  <Link
                    href={card.href}
                    className="absolute bottom-5 right-5 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-4 text-[17px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    View Project{" "}
                    <span aria-hidden className="text-xl font-normal">
                      &rarr;
                    </span>
                  </Link>
                </div>

                {/* Divider sits above the title, per the design */}
                <div className="mx-2 mt-6 h-px bg-[#f3f6ff]" />

                <div className="px-2 pb-3 pt-5">
                  <h3 className="text-2xl font-bold leading-8 text-[#050f21]">
                    {card.title}
                  </h3>

                  <div className="mt-4 flex flex-col gap-4 md:flex-row md:gap-8">
                    <div className="flex-1">
                      <p className="text-sm font-bold leading-5 text-[#050f21]">
                        DESCRIPTION
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-[#050f21]">
                        {card.description}
                      </p>
                    </div>

                    {card.industry ? (
                      <div className="md:w-[130px] md:shrink-0">
                        <p className="text-[10px] font-semibold tracking-[0.6px] text-[#050f21]">
                          INDUSTRY
                        </p>
                        <p className="mt-1.5 text-[13.5px] leading-[17px] text-[#050f21]">
                          {card.industry}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-6 flex justify-end gap-3">
          <CarouselPrevious className="static size-10 translate-x-0 translate-y-0" />
          <CarouselNext className="static size-10 translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </section>
  )
}

export default MoreCaseStudies
