import Image from "next/image"
import Link from "next/link"
import { SectionBody, SectionTitle, SHELL } from "./Ui"

/**
 * Figma 2017:4802 — "Section - Final CTA (Dark)" (1248 × 509).
 * Despite the layer name the frame is a LIGHT card: white surface, 20px radius,
 * two 500px blurred brand blobs behind it at 10% container opacity.
 */

const BASE = "/assets/Images/products/certus/page"

const PROMISES = [
  {
    icon: `${BASE}/f-cta-check.svg`,
    width: 20,
    height: 20,
    lines: ["No Generic", "Demo"],
  },
  {
    icon: `${BASE}/f-cta-ban.svg`,
    width: 20,
    height: 20,
    lines: ["No Slide", "Deck"],
  },
  {
    icon: `${BASE}/f-cta-chart.svg`,
    width: 22,
    height: 17,
    lines: ["Your Documents, Your System, Your Numbers"],
  },
]

export default function SectionF3() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className={SHELL}>
        <div className="relative flex w-full flex-col items-center overflow-hidden rounded-[20px] bg-white px-6 py-[60px] md:px-12 lg:px-[192px]">
          {/* ambient brand blobs */}
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 size-[500px] rounded-xl bg-[#003aa2] opacity-50 blur-[60px]" />
            <div className="absolute bottom-0 left-0 size-[500px] rounded-xl bg-[#0051e4] opacity-50 blur-[60px]" />
          </div>

          <div className="relative flex w-full max-w-[896px] flex-col items-center gap-10">
            <SectionTitle
              lead="See It Against Your"
              accent=" Own Documents"
              className="text-center [&_br]:hidden"
            />

            <div className="flex w-full flex-col items-center justify-center gap-6 border-y border-[rgba(0,81,228,0.05)] py-[17px] sm:flex-row sm:items-start">
              {PROMISES.map((promise) => (
                <div
                  key={promise.lines.join(" ")}
                  className="flex w-full max-w-[260px] flex-col items-center"
                >
                  <span
                    className="mb-2 block shrink-0"
                    style={{ width: promise.width, height: promise.height }}
                  >
                    <Image
                      src={promise.icon}
                      alt=""
                      width={promise.width}
                      height={promise.height}
                      className="block size-full"
                    />
                  </span>
                  <p className="text-center text-xl font-semibold leading-7 text-[#050f21]">
                    {promise.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <SectionBody className="max-w-[858px] text-center">
              Book a 30-minute working session with the Virtuosoft team. We will
              walk through your actual invoice volume, your current ERP setup
              and your supplier mix and show you exactly what automation looks
              like for your business specifically.
            </SectionBody>

            <Link
              href="/contact"
              className="inline-flex h-[59px] w-[270px] items-center justify-center rounded-[90px] border border-[#0051e4] bg-white text-base font-bold text-[#0051e4] transition-colors hover:bg-[#f8faff]"
            >
              Start Your Free POC
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
