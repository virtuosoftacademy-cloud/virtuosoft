'use client'

import Image from "next/image"
import Link from "next/link"
import BadgeIcon from "@/public/assets/Images/home/global/badge-sparkle.svg"
import CertusCardIcon from "@/public/assets/Images/home/global/certus-card-icon.svg"
import DotPatternTop from "@/public/assets/Images/home/global/industries-dot-pattern-top.svg"
import DotPatternBottom from "@/public/assets/Images/home/global/industries-dot-pattern-bottom.svg"
import GlassPanelBg from "@/public/assets/Images/home/global/glass-panel-bg.png"
import GlassPanelEllipse from "@/public/assets/Images/home/global/glass-panel-ellipse.svg"
import GlassPanelIcon from "@/public/assets/Images/home/global/glass-panel-icon.svg"
import NetworkConnectors from "@/public/assets/Images/home/global/network-connectors.svg"
import NetworkNodeDot from "@/public/assets/Images/home/global/network-node-dot.svg"
import NetworkNodeDotActive from "@/public/assets/Images/home/global/network-node-dot-active.svg"
import { Button } from "@/components/ui/button"

const productTabs = [
  { id: "certus", label: "Certus", href: "/products/certus" },
  { id: "cortex-radiology", label: "Cortex Radiology", href: "#" },
  { id: "catalyst-ai", label: "Catalyst.ai", href: "#" },
]

const whoItServes = [
  { label: "Shared Service Centers", active: false },
  { label: "Enterprises", active: true },
  { label: "Finance Teams", active: false },
]

const networkNodes = [
  { label: "SAP", left: "20%", top: "19%", size: "18%", active: false },
  { label: "Oracle", left: "61%", top: "19%", size: "18%", active: false },
  { label: "Certus", left: "38%", top: "36%", size: "23.5%", active: true },
  { label: "Dynamics", left: "67%", top: "64%", size: "18%", active: false },
]

function Industries() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-0 my-16 lg:my-24">
      <div className="flex justify-between items-center">
        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
            <Image src={BadgeIcon} alt="" className="size-3.5" />
            <span className="text-xs font-bold text-primary font-helvetica-now-display">Our Products</span>
          </div>
          <h2 className="font-helvetica-now-display mt-5 max-w-2xl text-4xl leading-[1.2] text-[#080e19] md:text-[40px]">
            Purpose-Built Technology for <span className="text-primary font-bold">Complex Industries</span>
          </h2>
          <p className="mt-4 text-base leading-[1.4] text-[#474747] max-w-xl font-helvetica-now-display">
            From intelligent document processing to AI-powered medical imaging, Virtuosoft builds specialized platforms that turn complex workflows into smarter, scalable digital experiences.
          </p>
        </div>
        <Link
          href="/services"
          className="relative mt-8 hidden lg:inline-flex items-center rounded-full border-2 border-primary px-4 py-2 text-lg font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
        >
          View All Services
        </Link>
      </div>

      {/* Product tab selector — each product now has its own page */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {productTabs.map((tab, i) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`flex h-10 items-center justify-center rounded-full px-4 md:px-6 text-xs font-bold font-helvetica-now-display transition-colors ${i === 0
              ? "bg-primary text-white hover:bg-primary/90"
              : "border border-primary text-primary hover:bg-primary/5"
              }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.37fr_1fr_1fr] gap-4">
        {/* Main Card — Certus */}
        <div className="relative overflow-hidden rounded-3xl border border-white bg-gradient-to-br from-white/92 to-white/62 shadow-[0_0_29px_0_rgba(52,67,122,0.09)] p-7">
          <Image src={DotPatternTop} alt="" className="absolute left-0 top-0 w-full opacity-80 pointer-events-none select-none" />
          <Image src={DotPatternBottom} alt="" className="absolute left-0 bottom-0 w-full opacity-80 pointer-events-none select-none" />
          <div className="relative flex size-14 items-center justify-center">
            <Image src={CertusCardIcon} alt="Certus" className="size-14" />
          </div>
          <h3 className="relative mt-4 text-xl font-bold text-foreground">Certus</h3>
          <p className="relative mt-3 text-xs text-neutral-500 leading-relaxed font-helvetica-now-display">
            AI-native document intelligence for enterprise finance teams. Certus reads, validates and posts invoices and purchase orders in seconds — combining OCR, LLMs and Agentic AI in a single platform.
          </p>
          <div className="relative mt-6 grid grid-cols-3 gap-4 border-t border-[#E5E8ED] pt-5">
            <div>
              <p className="font-semibold text-foreground text-sm">6 sec</p>
              <p className="text-xs text-neutral-500 mt-1 font-helvetica-now-display">per document, start to post</p>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">3×</p>
              <p className="text-xs text-neutral-500 mt-1 font-helvetica-now-display">self-verification passes</p>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">99.9%</p>
              <p className="text-xs text-neutral-500 mt-1 font-helvetica-now-display">posting accuracy</p>
            </div>
          </div>
          <Link
            href="/products/certus"
            className="relative mt-8 inline-flex items-center rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Learn More →
          </Link>
        </div>

        {/* Middle column: Tagline + Glass Icon panels */}
        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border border-white bg-[#E3E8FA] shadow-[0_0_29px_0_rgba(52,67,122,0.09)] p-7 text-center">
            <p className="font-bold text-foreground text-lg font-helvetica-now-display">Documents, understood.</p>
            <p className="mt-2 text-xs text-neutral-500 font-helvetica-now-display">
              Every invoice read, verified against your business rules, and posted — never guessed.
            </p>
          </div>
          <div className="relative flex-1 min-h-[220px] overflow-hidden rounded-3xl">
            <Image src={GlassPanelBg} alt="" fill className="object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div className="relative size-16">
                <Image src={GlassPanelEllipse} alt="" fill className="object-contain" />
                <Image src={GlassPanelIcon} alt="" className="absolute inset-0 m-auto size-8" />
              </div>
              <p className="mt-4 text-xs text-white/85 font-helvetica-now-display">Posts only what it can verify.</p>
            </div>
          </div>
        </div>

        {/* Right column: Network diagram + Segment picker panels */}
        <div className="flex flex-col gap-4">
          <div className="relative min-h-[220px] overflow-hidden rounded-3xl border border-white bg-[#E3E8FA] shadow-[0_0_29px_0_rgba(52,67,122,0.09)]">
            <Image src={NetworkConnectors} alt="" className="absolute left-0 top-0 w-[70%] opacity-70 pointer-events-none select-none" />
            {networkNodes.map((node) => (
              <div
                key={node.label}
                className="absolute flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/90 bg-white/55 backdrop-blur-sm shadow-[0_4px_11px_0_rgba(26,51,153,0.18)]"
                style={{ left: node.left, top: node.top, width: node.size, aspectRatio: "1 / 1" }}
              >
                <Image src={node.active ? NetworkNodeDotActive : NetworkNodeDot} alt="" className="size-2.5" />
                <span className="text-[10px] font-medium text-foreground font-helvetica-now-display">{node.label}</span>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white bg-gradient-to-br from-white/92 to-white/62 shadow-[0_0_29px_0_rgba(52,67,122,0.09)] px-6 py-5 text-center">
            <p className="text-[9px] font-medium tracking-wide text-primary font-helvetica-now-display">Who It Serves</p>
            <div className="mt-3 flex flex-col items-center gap-2">
              {whoItServes.map((pill) => (
                <span
                  key={pill.label}
                  className={`rounded-full px-4 py-2 text-[11px] font-medium font-helvetica-now-display ${pill.active ? "bg-primary text-white" : "bg-[#F6F7F9] text-foreground"
                    }`}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator spanning the full section width */}
      <div className="mt-10 h-2 w-full overflow-hidden rounded-full bg-[#EFF2FF]">
        <div className="h-full w-[13.4%] rounded-full bg-primary" />
      </div>
    </div>
  )
}

export default Industries
