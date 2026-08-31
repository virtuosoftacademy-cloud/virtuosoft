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
        "font-helvetica-now-display inline-flex items-center gap-2 rounded-full border text-[12px] font-bold leading-4",
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
