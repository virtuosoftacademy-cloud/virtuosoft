'use client'

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { ksa_Solutions } from "@/app/_constant"
import BadgeIcon from "@/public/assets/Images/home/ksa/badge-sparkle.svg"
import SolutionsPhoto from "@/public/assets/Images/home/ksa/solutions-purpose-photo.png"
import CardGlow from "@/public/assets/Images/home/ksa/solutions-card-glow.svg"

function SolutionsKSA() {
  const [openId, setOpenId] = useState<string | undefined>(ksa_Solutions[0]?.id)

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 my-16 lg:my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
            <Image src={BadgeIcon} alt="" className="size-3.5" />
            <span className="font-helvetica-now-display text-xs font-bold text-primary">
              Purpose-Built Solutions
            </span>
          </div>
          <h2 className="font-helvetica-now-display mt-5 text-4xl md:text-[40px] leading-[1.2] text-[#050f21]">
            Innovative Solution <span className="text-primary font-bold">Real Results</span>
          </h2>
          <p className="font-helvetica-now-display mt-4 text-base leading-[1.4] text-[#474747] max-w-md">
            From powerful web applications to enterprise systems, we transform your ideas into high-performance digital products.
          </p>

          <div className="relative mt-8 h-[232px] w-full max-w-[419px] overflow-hidden rounded-2xl border border-white shadow-[0_16px_36px_-10px_rgba(15,23,51,0.16)]">
            <Image src={SolutionsPhoto} alt="" fill className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {ksa_Solutions.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className={cn(
                  "relative overflow-hidden rounded-[22px] bg-gradient-to-b from-white to-[#F2F5FF] transition-all duration-300",
                  "shadow-[inset_0_-2px_0_0_rgba(129,162,255,0.18),inset_0_2px_4px_0_rgba(0,64,240,0.15),0_16px_36px_-10px_rgba(15,23,51,0.12)]",
                  isOpen ? "p-6 md:p-8" : "p-5 md:p-6"
                )}
              >
                {isOpen && (
                  <Image
                    src={CardGlow}
                    alt=""
                    className="pointer-events-none absolute -left-16 top-8 -z-0 h-auto w-[130%] max-w-none opacity-70"
                  />
                )}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? undefined : item.id)}
                  className="relative z-10 flex w-full items-center justify-between gap-4 text-left"
                >
                  <span
                    className={cn(
                      "font-helvetica-now-display font-semibold text-[#13161b]",
                      isOpen ? "text-2xl md:text-[26px]" : "text-lg md:text-xl"
                    )}
                  >
                    {item.title}
                  </span>
                  <span className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-sm tracking-wide text-[#050f21]/60">
                      ({item.index})
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-4 text-[#050f21]/60 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </span>
                </button>

                {isOpen && (item.description || item.tags) && (
                  <div className="relative z-10 mt-4 space-y-4">
                    {item.description && (
                      <p className="font-helvetica-now-display text-sm text-[#141518]">
                        {item.description}
                      </p>
                    )}
                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-helvetica-now-display rounded-full border border-white/60 bg-white/40 px-3.5 py-2 text-xs font-medium text-[#0c0e11]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SolutionsKSA
