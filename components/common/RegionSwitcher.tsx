'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { isLightBackgroundRoute } from "@/lib/navTheme"
import GlobeIcon from "@/public/assets/Images/nav/globe-icon.svg"
import GlobeIconWhite from "@/public/assets/Images/nav/globe-icon-white.svg"

// Global's canonical URL is the site root; UK/KSA live under /home/<region>.
const REGION_OPTIONS = [
  { code: "ksa", label: "KSA", href: "/home/ksa" },
  { code: "uk", label: "UK", href: "/home/uk" },
  { code: "global", label: "Global", href: "/" },
] as const

// "/" is a prefix of every path, so the root option can only be matched
// exactly — otherwise it would light up on every page. /home and
// /home/global are the other spellings that still render the Global variant.
const GLOBAL_PATHS = ["/", "/home", "/home/global"]

function resolveActiveRegion(pathname: string | null): string {
  if (!pathname) return "global"
  const match = REGION_OPTIONS.find(
    (region) => region.href !== "/" && pathname.startsWith(region.href)
  )
  if (match) return match.code
  return GLOBAL_PATHS.includes(pathname) ? "global" : ""
}

interface RegionSwitcherProps {
  // "mobile" renders as an inline accordion (matching the Services/Products/
  // Solutions/About Us pattern in the mobile menu) instead of a floating
  // popover — the mobile menu panel clips absolutely-positioned overflow,
  // so a popover there would open invisibly.
  variant?: "desktop" | "mobile"
  onNavigate?: () => void
}

export default function RegionSwitcher({ variant = "desktop", onNavigate }: RegionSwitcherProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const activeRegion = resolveActiveRegion(pathname)
  // Blue globe on light-background pages, white over a dark hero.
  const isLightBackground = isLightBackgroundRoute(pathname)

  // Close on outside click / Escape rather than on the button's blur: blur
  // fires on mousedown, which would unmount the menu before the click on a
  // link inside it could land, making the links appear dead.
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  // Close whenever navigation actually completes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  if (variant === "mobile") {
    return (
      <div>
        <div
          className="font-semibold flex items-center justify-between cursor-pointer transition-colors hover:text-primary"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="flex items-center gap-2">
            {/* The mobile menu panel is always dark, so this stays white. */}
            <Image src={GlobeIconWhite} alt="" className="size-5" />
            Region
          </span>
          <span
            className={cn(
              "text-2xl leading-none transition-transform duration-300",
              open && "rotate-180"
            )}
          >
            <ChevronUp />
          </span>
        </div>

        <div
          className={cn(
            "grid transition-all duration-400 ease-out",
            open ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 pl-4 border-l border-white/30 pt-3 pb-2">
              {REGION_OPTIONS.map((region) => (
                <Link
                  key={region.code}
                  href={region.href}
                  onClick={() => {
                    setOpen(false)
                    onNavigate?.()
                  }}
                  className={cn(
                    "font-helvetica-now-display text-base transition-colors hover:text-primary",
                    activeRegion === region.code ? "text-white font-semibold" : "text-accent"
                  )}
                >
                  {region.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex size-5 items-center justify-center"
        aria-label="Select region"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Image
          src={isLightBackground ? GlobeIcon : GlobeIconWhite}
          alt=""
          className="size-5"
        />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+10px)] z-50 flex w-[79px] flex-col items-center gap-1 rounded-lg bg-white p-2 shadow-[0_4px_2px_rgba(0,0,0,0.15)]">
          {REGION_OPTIONS.map((region, index) => (
            <div key={region.code} className="w-full">
              {index > 0 && <div className="my-1 h-px w-full bg-black/10" />}
              <Link
                href={region.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-helvetica-now-display block w-full text-center text-sm leading-6 text-[#050F21] hover:font-medium",
                  activeRegion === region.code && "font-semibold"
                )}
              >
                {region.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
