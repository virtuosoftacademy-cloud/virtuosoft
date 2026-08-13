'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { ServiceCategory } from "@/app/_constant"

interface ServiceCardProps {
  category: ServiceCategory;
  showAll?: boolean;
}

export default function ServiceCard({ category, showAll = true }: ServiceCardProps) {
  const {
    title,
    subtitletop,
    subtitlebottom,
    bgColor,
    textColor,
    imagePosition,
    accentImage,
    href,
    services,
  } = category
  return (
    <div className={`px-6 md:px-10 lg:px-16 xl:px-30`}>
      <section
        className=
        {`relative 
        py-20 px-10 md:px-20 lg:px-32 
        text-left rounded
        overflow-hidden 
        shadow-2xl shadow-black/15
      ${bgColor} ${textColor}`}
      >
        {accentImage &&
          // eslint-disable-next-line @next/next/no-img-element -- dynamically sized via `imagePosition`/arbitrary Tailwind classes; images.unoptimized is set so next/image adds no benefit here
          <img
            src={accentImage}
            alt={title}
            className=
            {`${imagePosition} w-[360]
          absolute hidden lg:flex
          object-contain object-top-right 
          opacity-90 pointer-events-none z-10
          `}
            aria-hidden="true"
          />
        }
        <div>
          <div className="max-w-4xl pb-10 md:pb-14">
            <p className="text-lg md:text-3xl font-light">
              {subtitletop}
            </p>
            <h2 className="text-4xl pb-2 lg:pb-0 sm:text-5xl md:text-6xl lg:text-7xl font-semibold italic leading-tight mt-2">
              {title}
            </h2>
            <p className="text-sm md:text-sm opacity-90 max-w-lg font-light">
              {subtitlebottom}
            </p>
          </div>
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr gap-6 lg:gap-8
              `}>
            {services.map((service, index) =>
              <Link
                href={(`${href}/${service.slug}` || null) as string}   // or "" or null — Next.js will prevent navigation
                className={!service.slug ? "pointer-events-none cursor-default" : ""}
                aria-disabled={!service.slug}
                tabIndex={!service.slug ? -1 : undefined}
                key={index}
              >
                <div
                  className=
                  "group relative w-full max-w-[380] bg-transparent p-8 overflow-hidden"
                >
                  {/* Animated glowing border on hover – using ::after via Tailwind arbitrary variants */}
                  <div
                    className=
                    "absolute inset-0 rounded-2xl pointer-events-none z-0 border-2 border-white/70 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-out mask-image mask-l-from-black mask-l-from-85% mask-l-to-transparent"
                  />

                  {/* Optional subtle hover background glow */}
                  <div
                    className={`
                          absolute inset-0 rounded-2xl pointer-events-none -z-10
                          bg-linear-to-br from-primary/10 via-transparent to-transparent
                          opacity-0 group-hover:opacity-60
                          transition-opacity duration-700 ease-out
                          `}
                  />

                  {/* Card content */}
                  <div
                    className={`
                relative z-10 space-y-5 sm:space-y-6
                transition-colors duration-400 ease-in-out
                group-hover:text-white
                `}
                  >
                    <h4
                      className="
                        font-semibold text-2xl
                        mb-2 text-accent md:text-gray-300
                        md:group-hover:text-gray-100
        transition-colors duration-400"
                    >
                      {service.label}
                    </h4>

                    <p
                      className="text-xs leading-relaxed text-accent md:text-gray-300 md:group-hover:text-gray-100 max-w-prose transition-colors duration-500"
                    >
                      {service.description}

                    </p>
                  </div>
                </div>
              </Link>
            )}

          </div>

        </div>
      </section >
    </div >

  )
}