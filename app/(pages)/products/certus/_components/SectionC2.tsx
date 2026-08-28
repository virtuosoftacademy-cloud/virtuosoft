import Image from "next/image"
import { SHELL, Eyebrow, SectionTitle, SectionBody } from "./Ui"

/**
 * Figma 2017:5336 — "Certus vs. Traditional OCR".
 * Header block + a 3-column comparison table (Capability / Certus / Traditional OCR)
 * inside a frosted, rounded card. The Certus column is highlighted with a vertical
 * blue-tinted gradient, hairline blue borders and a "RECOMMENDED" pill.
 */

const CERTUS_COLUMN =
  "border-x border-[rgba(0,65,200,0.05)] bg-[linear-gradient(to_bottom,rgba(182,196,255,0.15)_0%,rgba(220,225,255,0.05)_100%)]"

type Row = {
  capability: string
  certus: string
  legacy: string
}

const ROWS: Row[] = [
  {
    capability: "Document understanding",
    certus: "Understands semantic meaning and intent",
    legacy: "Simple character recognition only",
  },
  {
    capability: "Validation",
    certus: "Autonomous, rule-based verification",
    legacy: "Costly manual verification cycles",
  },
  {
    capability: "Fraud detection",
    certus: "Native forensic forgery detection",
    legacy: "Requires third-party tools",
  },
  {
    capability: "ERP integration",
    certus: "Native bi-directional connectivity",
    legacy: "Isolated, static output",
  },
  {
    capability: "Workflow automation",
    certus: "Straight-through processing (STP)",
    legacy: "Fragmented manual workflows",
  },
  {
    capability: "Analytics",
    certus: "AI-powered predictive insights",
    legacy: "Basic volumetric reporting",
  },
  {
    capability: "Natural-language assistant",
    certus: "In-app conversational intelligence",
    legacy: "None available",
  },
  {
    capability: "Security",
    certus: "SOC2 Type II & End-to-end encryption",
    legacy: "Standard encryption",
  },
]

export default function SectionC2() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className={SHELL}>
        <div className="flex flex-col items-start gap-2">
          <Eyebrow>The Problem</Eyebrow>
          <div className="flex flex-col gap-3">
            {/* Single line in Figma, so the accent rides inside `lead` — passing
                `accent` separately would force SectionTitle's line break. */}
            <SectionTitle
              lead={
                <>
                  Certus vs.{" "}
                  <span className="font-bold text-[#0051e4]">
                    Traditional OCR
                  </span>
                </>
              }
            />
            <SectionBody>
              The next generation of document intelligence, engineered for
              accuracy and enterprise-grade performance.
            </SectionBody>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-xl border border-[rgba(226,232,240,0.6)] bg-white/70 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.05),0px_8px_10px_-6px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
          <div className="font-helvetica-now-display min-w-[1024px]">
            {/* Header row */}
            <div className="flex items-stretch border-b border-[rgba(226,232,240,0.6)]">
              <div className="flex flex-1 flex-col px-8 pb-[40.5px] pt-[55px]">
                <p className="text-[12px] font-bold leading-4 text-[#94a3b8]">
                  CAPABILITY
                </p>
              </div>
              <div
                className={`flex flex-1 flex-col gap-[2px] px-8 pb-[40.5px] pt-[22px] ${CERTUS_COLUMN}`}
              >
                <span className="inline-flex h-4 w-fit items-center rounded-full bg-[#0051e4] px-2 text-[12px] font-bold leading-4 text-white">
                  RECOMMENDED
                </span>
                <p className="text-2xl font-bold leading-8 text-[#0051e4]">
                  Certus
                </p>
              </div>
              <div className="flex flex-1 flex-col px-8 pb-[40.5px] pt-11">
                <p className="text-2xl font-bold leading-8 text-[#94a3b8]">
                  Traditional OCR
                </p>
              </div>
            </div>

            {/* Body rows */}
            {ROWS.map((row, index) => (
              <div
                key={row.capability}
                className={`flex items-stretch ${index === 0 ? "" : "border-t border-[#f1f5f9]"}`}
              >
                <div className="flex flex-1 flex-col px-8 pb-7 pt-[27px]">
                  <p className="text-sm font-bold leading-5 text-[#050f21]">
                    {row.capability}
                  </p>
                </div>
                <div
                  className={`flex flex-1 flex-col justify-center px-[33px] py-[24.5px] ${CERTUS_COLUMN}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]">
                      <Image
                        src="/assets/Images/products/certus/page/c-check-white.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="size-[14.4px]"
                      />
                    </span>
                    <p className="text-sm font-bold leading-5 text-[#002260]">
                      {row.certus}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-8 pb-7 pt-[27px]">
                  <p className="text-sm leading-5 text-[#94a3b8]">
                    {row.legacy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
