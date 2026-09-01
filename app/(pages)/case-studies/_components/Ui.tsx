import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Shared primitives for the case studies listing page.
 * Design tokens straight from Figma:
 *   primary #0051E4 · heading #050F21 · body #474747 · badge surface #F8FAFF
 */

export const SHELL = "mx-auto w-full max-w-7xl px-6 xl:px-0"

export function Eyebrow({
  children,
  variant = "light",
  className,
}: {
  children: ReactNode
  /** `light` = blue on near-white (default sections) · `dark` = glass on dark art */
  variant?: "light" | "dark"
  className?: string
}) {
  const isDark = variant === "dark"
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border text-[12px] font-bold leading-4",
        isDark
          ? "border-white bg-white/30 px-4 py-2 text-white"
          : "border-[#0051e4] bg-[#f8faff] px-[17px] py-[9px] text-[#0051e4]",
        className
      )}
    >
      <Image
        src={
          isDark
            ? "/assets/Images/casestudies/detail/spark-white.svg"
            : "/assets/Images/casestudies/detail/spark-blue.svg"
        }
        alt=""
        width={14}
        height={14}
        className="size-[14px] shrink-0"
      />
      {children}
    </span>
  )
}

/** Section label used on CMS-driven detail pages — same treatment as the
 * bespoke Tarabut page's SectionBadge, kept here since it's shared across
 * dynamically rendered case studies rather than owned by one route. */
export function SectionBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[180px] border border-[#0051e4] px-[17px] py-[9px]">
      <Image
        src="/assets/Images/casestudies/badge-sparkle.svg"
        alt=""
        width={14}
        height={14}
        className="size-3.5"
      />
      <span className="text-xs font-bold leading-4 text-[#0051e4]">{label}</span>
    </span>
  )
}
