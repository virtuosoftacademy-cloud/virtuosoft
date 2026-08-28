'use client'

import Image from "next/image"
import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import BadgeIcon from "@/public/assets/Images/home/ksa/badge-sparkle.svg"

interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: "Head of IT Service Management",
    role: "Energy & Utilities, Riyadh",
    quote: "Virtuosoft rebuilt our service desk on BMC Helix without disrupting daily operations. Ticket resolution times dropped within the first quarter.",
    rating: 4,
    initials: "IT",
  },
  {
    name: "Chief Information Security Officer",
    role: "Holding & Investment Group",
    quote: "Their red team engagement surfaced gaps our internal audits missed, and the remediation roadmap was practical enough to execute in-house.",
    rating: 5,
    initials: "CI",
  },
  {
    name: "VP of Digital Transformation",
    role: "Banking & Financial Services",
    quote: "The document intelligence platform now processes thousands of records a day with a fraction of the manual review we used to need.",
    rating: 5,
    initials: "VP",
  },
  {
    name: "Director of Operations",
    role: "Government-Adjacent Enterprise",
    quote: "We needed a partner who understood Gulf compliance requirements from day one. Virtuosoft delivered without the usual back-and-forth.",
    rating: 4,
    initials: "DO",
  },
]

function TestimonialsKSA() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 my-16 lg:my-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
        <Image src={BadgeIcon} alt="" className="size-3.5" />
        <span className="font-helvetica-now-display text-xs font-bold text-primary">Testimonial</span>
      </div>
      <h2 className="font-helvetica-now-display mt-5 text-4xl md:text-[40px] leading-[1.2] text-[#050f21]">
        Client Success <span className="text-primary font-bold">Stories</span>
      </h2>
      <p className="font-helvetica-now-display mt-4 text-base text-[#474747] max-w-xl">
        See how we help businesses solve complex challenges, accelerate growth and turn technology investments into measurable results.
      </p>

      <Carousel opts={{ align: "start", loop: true }} className="w-full mt-10">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.name} className="basis-[90%] sm:basis-1/2 lg:basis-1/3 lg:pl-5">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-7 shadow-[0_2px_6px_rgba(31,45,61,0.1)]">
                <div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${i < testimonial.rating ? "fill-primary text-primary" : "fill-none text-neutral-300"}`}
                      />
                    ))}
                  </div>
                  <p className="font-helvetica-now-display mt-4 text-sm leading-relaxed text-[#474747]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-400 text-sm font-semibold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-helvetica-now-display text-sm font-bold text-[#050f21]">{testimonial.name}</div>
                    <div className="font-helvetica-now-display text-xs text-primary">{testimonial.role}</div>
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

export default TestimonialsKSA
