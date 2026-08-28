'use client'
import Image from "next/image"
import { CommonHead } from "@/components/Styles/StyleClasses"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Rating4 from '@/public/assets/Images/home/uk/rating-4.svg'
import AvatarBg1 from '@/public/assets/Images/home/uk/avatar-bg-1.svg'

interface Testimonial {
  quote: string
  name: string
  role: string
  avatarBg: typeof AvatarBg1
  initials: string
}

// NOTE: the Figma design ships these testimonials as unfilled placeholder
// copy (Lorem ipsum / repeated "Maxin Will"). Kept as-is rather than
// inventing fabricated client quotes — swap in real client testimonials
// before this ships to production.
//
// Rating: every testimonial card in Figma (node 2005:31975 and its
// siblings) renders 4 filled stars + 1 unfilled star, not a full 5-star
// rating — confirmed via get_design_context and a hidden "4/5" label node.
// Avatar background: all cards use the same dark navy circle (#050F21,
// same fill as `avatar-bg-1.svg`) — Figma does not alternate the color.
const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
    name: "Maxin Will",
    role: "Product Manager",
    avatarBg: AvatarBg1,
    initials: "MW",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
    name: "Maxin Will",
    role: "Product Manager",
    avatarBg: AvatarBg1,
    initials: "MW",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
    name: "Maxin Will",
    role: "Product Manager",
    avatarBg: AvatarBg1,
    initials: "MW",
  },
]

function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-10 my-16 lg:my-24">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2">
          <span className="font-helvetica-now-display text-primary text-xs font-bold">Testimonial</span>
        </div>
        <h4 className={`font-helvetica-now-display font-normal mt-5 ${CommonHead}`}>
          Client Success <span className="text-primary font-bold">Stories</span>
        </h4>
        <p className="font-helvetica-now-display mt-4 text-[#474747] text-base">
          See how we help businesses solve complex challenges, accelerate growth and turn technology investments into measurable results.
        </p>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-6xl">
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-full rounded-2xl bg-white p-8 shadow-[0px_2px_6px_rgba(31,45,61,0.1)] flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <Image src={Rating4} alt="4 out of 5 star rating" className="h-5 w-auto" />
                  <p className="font-helvetica-now-display text-[#474747] text-base leading-relaxed">{t.quote}</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative size-12 shrink-0">
                    <Image src={t.avatarBg} alt="" fill />
                    <span className="absolute inset-0 flex items-center justify-center text-[#ebeff8] text-sm font-semibold">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-helvetica-now-display font-medium text-[#050f21] text-lg">{t.name}</p>
                    <p className="font-helvetica-now-display text-primary text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Testimonials
