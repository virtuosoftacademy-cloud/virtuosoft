import Image from "next/image"
import BadgeIcon from "@/public/assets/Images/home/global/badge-sparkle.svg"
import { getTestimonials } from "@/app/api/lib/testimonial-actions/actions"
import TestimonialsCarousel from "./TestimonialsCarousel"

async function Testimonials() {
  const testimonials = await getTestimonials()
  if (testimonials.length === 0) return null

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-0 my-16 lg:my-24">
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

      <TestimonialsCarousel testimonials={testimonials} />
    </div>
  )
}

export default Testimonials
