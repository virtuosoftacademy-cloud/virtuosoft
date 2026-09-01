'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import BadgeIcon from "@/public/assets/Images/home/global/badge-sparkle.svg"
import { global_Testimonials } from "@/app/_constant"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

// The design shows three dot indicators.
const MAX_DOTS = 3

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [snapCount, setSnapCount] = useState(0)

  // Track the centred slide so it can take the design's highlighted treatment
  // while the flanking cards sit dimmed behind it.
  useEffect(() => {
    if (!api) return

    const sync = () => {
      setSelected(api.selectedScrollSnap())
      setSnapCount(api.scrollSnapList().length)
    }

    sync()
    api.on("select", sync)
    api.on("reInit", sync)
    return () => {
      api.off("select", sync)
      api.off("reInit", sync)
    }
  }, [api])

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-0 my-16 lg:my-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-white px-4 py-2">
        <Image src={BadgeIcon} alt="" className="size-3.5" />
        <span className="text-xs font-bold text-primary">Testimonial</span>
      </div>
      <h2 className="mt-5 text-4xl leading-[1.4] text-[#050f21] md:text-[40px]">
        Client Success <span className="text-primary font-bold">Stories</span>
      </h2>
      <p className="mt-3 text-base leading-[1.4] text-[#474747] max-w-3xl">
        See how we help businesses solve complex challenges, accelerate growth and turn technology investments into measurable results.
      </p>

      <Carousel setApi={setApi} className="mt-10 w-full" opts={{ align: "center", loop: true }}>
        <CarouselContent>
          {global_Testimonials.map((t, i) => {
            const isActive = i === selected
            return (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div
                  className={cn(
                    "flex h-full flex-col gap-8 p-8 transition-all duration-300",
                    isActive
                      ? "rounded-3xl border border-white/95 bg-gradient-to-br from-white/92 to-white/62 shadow-[0_0_14px_rgba(52,67,122,0.09)]"
                      : "rounded-[20px] bg-white opacity-50 shadow-[0_2px_6px_rgba(31,45,61,0.1)]"
                  )}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star
                          key={star}
                          className={cn(
                            "size-5",
                            star < t.rating
                              ? "fill-primary text-primary"
                              : "fill-none text-neutral-300"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-base leading-[22px] text-[#474747]">
                      {t.quote}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#050f21] text-[18px] font-semibold leading-5 text-[#ebeff8]">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-xl font-medium leading-7 text-[#050f21]">
                        {t.name}
                      </p>
                      <p className="text-sm leading-6 text-primary">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {/* Dot indicators, per the design — capped at three. Any further
            slides stay reachable by dragging/swiping the carousel. */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: Math.min(snapCount, MAX_DOTS) }).map((_, i) => {
            const isActive = Math.min(selected, MAX_DOTS - 1) === i
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={isActive}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "size-2.5 rounded-full transition-all",
                  isActive ? "bg-primary" : "bg-primary/20 hover:bg-primary/40"
                )}
              />
            )
          })}
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonials
