'use client'

import Image from "next/image"
import Link from "next/link"
import { global_CtaStats } from "@/app/_constant"
import Avatar1 from "@/public/assets/Images/home/global/cta-avatar-1.png"
import Avatar2 from "@/public/assets/Images/home/global/cta-avatar-2.png"
import Avatar3 from "@/public/assets/Images/home/global/cta-avatar-3.png"
import DotPattern from "@/public/assets/Images/home/global/cta-dot-pattern.svg"

// Avatars sit as a triangular cluster rather than an overlapping row,
// positioned as a percentage of the cluster box so it scales down cleanly.
const avatarCluster = [
  { src: Avatar1, left: "0%", top: "0%" },
  { src: Avatar2, left: "0%", top: "48%" },
  { src: Avatar3, left: "56%", top: "24%" },
]

function Cta() {
  return (
    <div className="px-6 lg:px-10 my-16 lg:my-24 flex justify-center">
      <div
        className="relative w-full max-w-7xl overflow-hidden rounded-[28px] px-8 py-10 md:px-14 md:py-14"
        style={{
          backgroundImage:
            "linear-gradient(83deg, rgb(6,11,25) 0%, rgb(4,28,92) 50%, rgb(10,48,140) 100%)",
        }}
      >
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -left-24 -top-24 size-[280px] rounded-full bg-[#2353cc]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -top-28 size-[320px] rounded-full bg-[#2353cc]/25 blur-3xl" />

        {/* Dot pattern decorations */}
        <Image
          src={DotPattern}
          alt=""
          className="pointer-events-none select-none absolute -left-6 -top-2 w-[220px] opacity-40"
        />
        <Image
          src={DotPattern}
          alt=""
          className="pointer-events-none select-none absolute -right-6 bottom-0 w-[220px] rotate-180 opacity-40 hidden lg:block"
        />

        <div className="relative flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-10 lg:gap-6">
          {/* Left: copy + actions */}
          <div className="max-w-[480px] shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white font-helvetica-now-display">
              <span className="size-1.5 rounded-full bg-white" />
              Get In Touch
            </span>
            <h3 className="font-helvetica-now-display mt-5 text-3xl font-bold leading-tight text-white md:text-[40px]">
              Talk To An Expert
            </h3>
            <p className="font-helvetica-now-display mt-3 text-sm leading-6 text-white/72">
              Get professional insights to take your business to the next level. Connect with our experts and start your journey toward growth today.
            </p>
            <div className="mt-7 flex items-center gap-8">
              <Link
                href="/contact"
                className="font-helvetica-now-display inline-flex items-center justify-center rounded-full bg-white px-[26px] py-3.5 text-sm font-bold leading-5 text-[#050f21] transition-colors hover:bg-white/90"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:underline"
              >
                Book a Call <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Middle: stats, stepped diagonally down-right per the design */}
          <div className="flex items-start gap-6 md:gap-10 lg:gap-6 xl:gap-10">
            {global_CtaStats.map((stat, i) => (
              <div key={stat.label} className="flex items-start gap-6 md:gap-10 lg:gap-6 xl:gap-10">
                <div
                  className="text-center lg:pt-[var(--step)]"
                  style={{ ["--step" as string]: `${i * 78}px` }}
                >
                  <p className="font-helvetica-now-display text-[32px] font-bold leading-10 text-white">
                    {stat.value}
                  </p>
                  <p className="font-helvetica-now-display mt-1 text-xs leading-4 text-white/65 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
                {i < global_CtaStats.length - 1 && (
                  <div
                    className="hidden h-[74px] w-px bg-white/15 lg:block lg:mt-[var(--divider-step)]"
                    style={{ ["--divider-step" as string]: `${i * 83 + 68}px` }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right: avatar cluster */}
          <div className="relative hidden h-[232px] w-[224px] shrink-0 md:block">
            {avatarCluster.map((avatar, i) => (
              <div
                key={i}
                className="absolute size-[68px] overflow-hidden rounded-full border border-[#2353cc] bg-white/20"
                style={{ left: avatar.left, top: avatar.top }}
              >
                <Image src={avatar.src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
