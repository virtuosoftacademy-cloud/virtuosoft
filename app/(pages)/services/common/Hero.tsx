'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { StaticImageData } from "next/image"

export interface HeroVariant {
  image: StaticImageData;
  imageAlt?: string;
  containerClassName?: string;
  sectionClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
  title: string;
  topDescription: string;
  bottomDescription: string;
  btnTitle: string;
}

// The visual-only subset of HeroVariant — each service vertical defines one
// of these once and spreads it into every one of its services' Hero data.
export type HeroStyle = Omit<HeroVariant, 'title' | 'topDescription' | 'bottomDescription' | 'btnTitle'>;

const DEFAULT_CONTAINER_CLASSNAME = "w-full flex justify-center px-6 md:px-10 lg:px-12"
const DEFAULT_SECTION_CLASSNAME = "bg-linear-to-br from-[#084387] to-[#021021] text-white border-white/5"
const DEFAULT_DESCRIPTION_CLASSNAME = "opacity-80"
const DEFAULT_BUTTON_CLASSNAME =
  "bg-white text-[#084387] hover:bg-[#084387] hover:text-accent font-bold capitalize text-sm md:text-base px-8 h-12 transition-all duration-300 shadow-xl rounded-lg active:scale-95"

export default function Hero({
  title,
  topDescription,
  bottomDescription,
  btnTitle,
  image,
  imageAlt = "AI Agents",
  containerClassName = DEFAULT_CONTAINER_CLASSNAME,
  sectionClassName = DEFAULT_SECTION_CLASSNAME,
  descriptionClassName = DEFAULT_DESCRIPTION_CLASSNAME,
  buttonClassName = DEFAULT_BUTTON_CLASSNAME,
}: HeroVariant) {
  return (
    <div className={containerClassName}>
      <section
        className={`relative w-full max-w-[1240px] py-12 md:py-16 px-8 md:px-16 lg:px-20
                   text-left overflow-hidden shadow-2xl shadow-black/15 ${sectionClassName}`}
      >
        <Image
          width={400}
          height={400}
          src={image}
          alt={imageAlt}
          className="absolute -top-10 -right-10 w-[220px] md:w-[320px] lg:w-[420px]
                     hidden lg:block object-contain opacity-50 xl:opacity-90
                     pointer-events-none z-0 transition-transform duration-700 hover:scale-105"
          aria-hidden="true"
        />

        <div className="relative z-20">
          <div className="max-w-full lg:max-w-[62%] text-center md:text-left">
            <p className="text-base md:text-xl lg:text-2xl font-light opacity-90 tracking-wide">
              {topDescription}
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold italic my-4 leading-tight tracking-tight">
              {title}
            </h2>

            <p className={`text-xs md:text-sm lg:text-[15px] max-w-lg mx-auto md:mx-0 font-light leading-relaxed mb-10 ${descriptionClassName}`}>
              {bottomDescription}
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <Button asChild className={buttonClassName}>
              <Link href="/contact">
                {btnTitle}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
