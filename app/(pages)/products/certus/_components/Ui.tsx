import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Shared primitives for the Tarabut case study page.
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
          : "border-primary bg-[#f8faff] px-[17px] py-[9px] text-primary",
        className
      )}
    >
      <Image
        src={
          isDark
            ? "/assets/Images/products/certus/page/spark-white.svg"
            : "/assets/Images/products/certus/page/spark-blue.svg"
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

/**
 * Section H2. Figma spec is 40/48 — deliberately NOT the shared 55px CommonHead.
 * `lead` renders in #050F21 regular, `accent` in #0051E4 bold, matching the
 * two-line treatment used across every section of this design.
 */
export function SectionTitle({
  lead,
  accent,
  light = false,
  className,
}: {
  lead?: ReactNode
  accent?: ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <h2
      className={cn(
        "text-4xl md:text-[40px] leading-[1.2]",
        className
      )}
    >
      {lead && (
        <span className={cn("font-normal", light ? "text-white" : "text-[#050f21]")}>
          {lead}
        </span>
      )}
      {lead && accent && <br />}
      {accent && <span className="font-bold text-[#0051e4]">{accent}</span>}
    </h2>
  )
}

export function SectionBody({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "text-base leading-[22px] text-[#474747]",
        className
      )}
    >
      {children}
    </p>
  )
}

/** Primary pill button styling used throughout the design (48px tall, fully round). */
export const PRIMARY_BTN =
  "inline-flex h-12 items-center justify-center rounded-full bg-[#0051e4] px-6 text-base font-bold text-white transition-colors hover:bg-[#0044c0]"

export const SECONDARY_BTN =
  "inline-flex h-12 items-center justify-center rounded-full border border-white px-6 text-base font-bold text-white transition-colors hover:bg-white/10"
