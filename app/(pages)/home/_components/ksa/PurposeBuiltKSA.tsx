'use client'

import Image from "next/image"
import Link from "next/link"
import BadgeIcon from "@/public/assets/Images/home/ksa/badge-sparkle.svg"
import CertusIcon from "@/public/assets/Images/home/ksa/certus-glass-icon.svg"
import GlassPanelBg from "@/public/assets/Images/home/ksa/glass-panel-bg.png"
import GlassPanelEllipse from "@/public/assets/Images/home/ksa/glass-panel-ellipse.svg"
import GlassPanelIcon from "@/public/assets/Images/home/ksa/glass-panel-icon.svg"
import NetworkConnectors from "@/public/assets/Images/home/ksa/network-connectors.svg"

const networkNodes = [
  { label: "SAP", className: "left-[8%] top-[16%]" },
  { label: "Oracle", className: "right-[8%] top-[16%]" },
  { label: "Dynamics", className: "right-[6%] bottom-[10%]" },
]

function PurposeBuiltKSA() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 my-16 lg:my-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#F8FAFF] px-4 py-2">
        <Image src={BadgeIcon} alt="" className="size-3.5" />
        <span className="font-helvetica-now-display text-xs font-bold text-primary">Our Products</span>
      </div>
      <h2 className="font-helvetica-now-display mt-5 text-4xl md:text-[40px] leading-[1.2] max-w-2xl text-[#080e19]">
        Purpose-Built Technology for <span className="text-primary font-bold">Complex Industries</span>
      </h2>
      <p className="font-helvetica-now-display mt-4 text-base leading-[1.4] text-[#474747] max-w-xl">
        From intelligent document processing to AI-powered medical imaging, Virtuosoft builds specialized platforms that turn complex workflows into smarter, scalable digital experiences.
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Card — Certus */}
        <div className="lg:col-span-1 rounded-[22px] border border-white bg-gradient-to-br from-white/92 to-white/62 shadow-[0_0_29px_0_rgba(52,67,122,0.09)] p-7 flex flex-col">
          <div className="flex size-14 items-center justify-center">
            <Image src={CertusIcon} alt="Certus" className="size-14" />
          </div>
          <h3 className="font-helvetica-now-display mt-4 text-xl font-bold text-[#050f21]">Certus</h3>
          <p className="font-helvetica-now-display mt-3 text-xs leading-relaxed text-[#575c63]">
            AI-native document intelligence for enterprise finance teams. Certus reads, validates and posts invoices and purchase orders in seconds — combining OCR, LLMs and Agentic AI in a single platform.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#e5e8ed] pt-4">
            <div>
              <p className="font-helvetica-now-display font-semibold text-sm text-[#050f21]">6 sec</p>
              <p className="font-helvetica-now-display text-[11px] text-[#575c63] mt-1">per document, start to post</p>
            </div>
            <div>
              <p className="font-helvetica-now-display font-semibold text-sm text-[#050f21]">3×</p>
              <p className="font-helvetica-now-display text-[11px] text-[#575c63] mt-1">self-verification passes</p>
            </div>
            <div>
              <p className="font-helvetica-now-display font-semibold text-sm text-[#050f21]">99.9%</p>
              <p className="font-helvetica-now-display text-[11px] text-[#575c63] mt-1">posting accuracy</p>
            </div>
          </div>
          <Link
            href="/products/certus"
            className="font-helvetica-now-display mt-6 inline-flex w-fit items-center rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Learn More →
          </Link>
        </div>

        {/* Right column: tagline + network + glass icon + segment picker */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-[22px] border border-white bg-[#E3E8FA] shadow-[0_0_29px_0_rgba(52,67,122,0.09)] p-8 flex flex-col items-center justify-center text-center">
            <p className="font-helvetica-now-display font-bold text-lg text-[#050f21]">Documents, understood.</p>
            <p className="font-helvetica-now-display mt-2 text-xs text-[#575c63]">
              Every invoice read, verified against your business rules, and posted — never guessed.
            </p>
          </div>

          <div className="relative rounded-[22px] border border-white bg-[#E3E8FA] shadow-[0_0_29px_0_rgba(52,67,122,0.09)] overflow-hidden min-h-[160px]">
            <Image src={NetworkConnectors} alt="" fill className="object-cover opacity-70" />
            {networkNodes.map((node) => (
              <div
                key={node.label}
                className={`absolute ${node.className} rounded-2xl border border-white/95 bg-white/55 px-4 py-2.5 text-[10px] font-helvetica-now-display font-medium text-[#050f21] shadow-[0_4px_11px_0_rgba(26,51,153,0.18)] backdrop-blur-sm`}
              >
                {node.label}
              </div>
            ))}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/95 bg-white/75 px-5 py-3 text-[10px] font-helvetica-now-display font-medium text-[#050f21] shadow-[0_4px_11px_0_rgba(26,51,153,0.18)] backdrop-blur-sm">
              Certus
            </div>
          </div>

          <div className="relative rounded-[28px] overflow-hidden min-h-[220px] flex flex-col items-center justify-center text-center">
            <Image src={GlassPanelBg} alt="" fill className="object-cover" />
            <Image
              src={GlassPanelEllipse}
              alt=""
              className="pointer-events-none absolute inset-0 m-auto size-[70%] max-w-none opacity-80"
            />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <Image src={GlassPanelIcon} alt="" width={70} height={70} className="size-16" />
              <p className="font-helvetica-now-display text-xs text-white/85 max-w-[220px]">
                Posts only what it can verify.
              </p>
            </div>
          </div>

          <div className="rounded-[22px] border border-white bg-gradient-to-br from-white/92 to-white/62 shadow-[0_0_29px_0_rgba(52,67,122,0.09)] p-6 flex flex-col items-center justify-center gap-3">
            <p className="font-helvetica-now-display text-[9px] font-medium tracking-[0.05em] text-primary">
              WHO IT SERVES
            </p>
            <div className="flex flex-col items-center gap-2">
              <span className="font-helvetica-now-display rounded-full bg-[#f6f7f9] px-4 py-2 text-[11px] font-medium text-[#050f21]">
                Shared Service Centers
              </span>
              <span className="font-helvetica-now-display rounded-full bg-primary px-4 py-2 text-[11px] font-medium text-white">
                Enterprises
              </span>
              <span className="font-helvetica-now-display rounded-full bg-[#f6f7f9] px-4 py-2 text-[11px] font-medium text-[#050f21]">
                Finance Teams
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurposeBuiltKSA
