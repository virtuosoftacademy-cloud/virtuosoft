'use client'
import Image from "next/image"
import BadgeSparkle from '@/public/assets/Images/home/uk/badge-sparkle-2.svg'
import DotPatternTop from '@/public/assets/Images/home/uk/products-dot-pattern-top.svg'
import DotPatternBottom from '@/public/assets/Images/home/uk/products-dot-pattern-bottom.svg'
import ProductsGlassIcon from '@/public/assets/Images/home/uk/products-glass-icon.svg'
import NetworkConnectors from '@/public/assets/Images/home/uk/network-connectors.svg'
import NetworkDotDark from '@/public/assets/Images/home/uk/network-dot-dark.svg'
import NetworkVector83 from '@/public/assets/Images/home/uk/network-vector-83.svg'
import NetworkDotBlue from '@/public/assets/Images/home/uk/network-dot-blue.svg'
import GlassIconPanelBg from '@/public/assets/Images/home/uk/glass-icon-panel-bg.png'
import BigGlassIcon from '@/public/assets/Images/home/uk/big-glass-icon.svg'

const stats = [
  { value: "6 sec", label: "per document, start to post" },
  { value: "3×", label: "self-verification passes" },
  { value: "99.9%", label: "posting accuracy" },
]

const networkNodes = [
  { name: "SAP", left: "20.4%", top: "19.1%", width: "18%", dot: NetworkDotDark, dotSize: "size-3" },
  { name: "Oracle", left: "61.6%", top: "19.1%", width: "18%", dot: NetworkDotDark, dotSize: "size-3" },
  { name: "Certus", left: "38.2%", top: "36.4%", width: "23.5%", dot: NetworkDotBlue, dotSize: "size-4" },
  { name: "Dynamics", left: "67.4%", top: "64.5%", width: "18%", dot: NetworkDotDark, dotSize: "size-3" },
]

const segments = [
  { label: "Shared Service Centers", active: false },
  { label: "Enterprises", active: true },
  { label: "Finance Teams", active: false },
]

const glassCardStyle = {
  backgroundImage:
    "linear-gradient(120deg, rgba(255,255,255,0.92) 11.3%, rgba(255,255,255,0.62) 100.4%)",
}

function PurposeBuilt() {
  return (
    <div className="max-w-7xl mx-auto px-10 my-16 lg:my-24">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#f8faff] px-4 py-2">
          <Image src={BadgeSparkle} alt="" className="size-3.5" />
          <span className="font-helvetica-now-display text-primary text-xs font-bold">Our Products</span>
        </div>
        <h4 className="font-helvetica-now-display mt-5 text-4xl md:text-[40px] leading-[1.2] text-[#080e19]">
          Purpose-Built Technology for <span className="text-primary font-bold">Complex Industries</span>
        </h4>
        <p className="font-helvetica-now-display mt-4 text-base leading-[1.4] text-[#474747]">
          From intelligent document processing to AI-powered medical imaging, Virtuosoft builds specialized platforms that turn complex workflows into smarter, scalable digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.37fr_1fr_1fr] lg:grid-rows-2 gap-4 mt-10 items-stretch">
        {/* Main Card — Certus */}
        <div
          className="relative overflow-hidden rounded-[22px] border border-white/95 shadow-[0px_0px_29px_0px_rgba(52,67,122,0.09)] lg:row-span-2"
          style={glassCardStyle}
        >
          <Image src={DotPatternTop} alt="" className="absolute inset-x-0 top-0 w-full h-auto select-none pointer-events-none" />
          <Image src={DotPatternBottom} alt="" className="absolute inset-x-0 bottom-0 w-full h-auto select-none pointer-events-none" />
          <div className="relative flex h-full flex-col p-7">
            <div className="size-14 shrink-0">
              <Image src={ProductsGlassIcon} alt="" className="size-full" />
            </div>
            <h3 className="font-helvetica-now-display font-bold text-[21px] text-[#050f21] mt-6">Certus</h3>
            <p className="font-helvetica-now-display text-xs leading-4 text-[#575c63] mt-3 max-w-[440px]">
              AI-native document intelligence for enterprise finance teams. Certus reads, validates and posts invoices and purchase orders in seconds — combining OCR, LLMs and Agentic AI in a single platform.
            </p>
            <div className="mt-6 flex gap-7 border-t border-[#e5e8ed] pt-3.5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-helvetica-now-display font-semibold text-sm text-[#050f21]">{stat.value}</span>
                  <span className="font-helvetica-now-display text-xs leading-4 text-[#575c63] max-w-[100px]">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <a
                href="#"
                className="font-helvetica-now-display inline-flex items-center justify-center gap-1 rounded-full border border-primary px-3.5 py-2 text-[11px] font-semibold text-primary"
              >
                Learn More <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tagline Panel */}
        <div className="rounded-[22px] border border-white/95 bg-[#e3e8fa] shadow-[0px_0px_29px_0px_rgba(52,67,122,0.09)] flex flex-col items-center justify-center text-center px-8 py-10 lg:min-h-[154px]">
          <h4 className="font-helvetica-now-display font-bold text-lg text-[#050f21]">Documents, understood.</h4>
          <p className="font-helvetica-now-display text-xs leading-5 text-[#575c63] mt-2 max-w-[284px]">
            Every invoice read, verified against your business rules, and posted — never guessed.
          </p>
        </div>

        {/* Network Panel */}
        <div className="relative overflow-hidden rounded-[22px] border border-white/95 bg-[#e3e8fa] shadow-[0px_0px_29px_0px_rgba(52,67,122,0.09)] aspect-[361.61/311.98] lg:min-h-[312px]">
          <Image
            src={NetworkConnectors}
            alt=""
            className="absolute left-0 top-0 select-none pointer-events-none"
            style={{ width: "69.4%", height: "67.4%" }}
          />
          {networkNodes.map((node) => (
            <div
              key={node.name}
              className="absolute flex aspect-square -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-[18px] border border-white/95 bg-white/60 shadow-[0px_4px_11px_0px_rgba(26,51,153,0.18)] backdrop-blur-sm"
              style={{ left: node.left, top: node.top, width: node.width }}
            >
              <Image src={node.dot} alt="" className={node.dotSize} />
              <span className="font-helvetica-now-display text-[10px] font-medium text-[#050f21]">{node.name}</span>
            </div>
          ))}
          {/* connector joint arrow near Oracle/Certus */}
          <Image
            src={NetworkVector83}
            alt=""
            className="absolute select-none pointer-events-none"
            style={{ left: "60.7%", top: "38%", width: "2.1%" }}
          />
        </div>

        {/* Glass Icon Panel */}
        <div className="relative overflow-hidden rounded-[37px] lg:min-h-[312px]">
          <Image src={GlassIconPanelBg} alt="" fill className="object-cover" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 py-10 text-center">
            <div className="size-[125px]">
              <Image src={BigGlassIcon} alt="" className="size-full" />
            </div>
            <p className="font-helvetica-now-display text-xs font-medium text-white/85 max-w-[241px]">
              Posts only what it can verify.
            </p>
          </div>
        </div>

        {/* Segment Picker Panel */}
        <div
          className="rounded-[22px] border border-white/95 shadow-[0px_0px_29px_0px_rgba(52,67,122,0.09)] flex flex-col items-center gap-2.5 px-6 py-5 lg:min-h-[166px]"
          style={glassCardStyle}
        >
          <span className="font-helvetica-now-display text-[9px] font-medium tracking-[0.7px] text-primary">
            Who It Serves
          </span>
          <div className="mt-1 flex flex-col items-center gap-2">
            {segments.map((segment) => (
              <span
                key={segment.label}
                className={
                  segment.active
                    ? "font-helvetica-now-display rounded-full bg-primary px-4 py-2 text-[11px] font-medium text-white"
                    : "font-helvetica-now-display rounded-full bg-[#f6f7f9] px-4 py-2 text-[11px] font-medium text-[#050f21]"
                }
              >
                {segment.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* decorative progress indicator */}
      <div className="relative mt-10 h-2 w-full rounded-full bg-[#eff2ff]">
        <div className="absolute inset-y-0 left-0 rounded-full bg-primary" style={{ width: "13.4%" }} />
      </div>
    </div>
  )
}

export default PurposeBuilt
