import Image from "next/image"
import { Eyebrow, SectionBody, SectionTitle, SHELL } from "./Ui"

const manualPoints = [
  "Manual keying, line by line",
  "PO matching done by hand",
  "Errors found by auditors — if at all",
]

const certusPoints = [
  "Reads like a trained reviewer",
  "Cross-checks its own work 3×",
  "Posts only what it can verify",
]

export default function Problem() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className={SHELL}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: the problem statement */}
          <div>
            <Eyebrow>The Problem</Eyebrow>
            <SectionTitle
              className="mt-2"
              lead="Your Teams Are Still Processing"
              accent="Documents by Hand"
            />
            <SectionBody className="mt-3">
              A single invoice can take up to an hour to process manually, opening it, matching it
              to a PO, and keying every line into the ERP, one keystroke away from a wrong number
              reaching the books.
            </SectionBody>
            <SectionBody className="mt-4">
              Suppliers send scanned PDFs, rotated pages and inconsistent formats. Errors slip
              through until an auditor finds them, often with no dashboard, no alert and no
              visibility.
            </SectionBody>
          </div>

          {/* Right: 60 minutes by hand vs 6 seconds with Certus */}
          <div>
            <p className="font-helvetica-now-display text-[10px] font-medium uppercase tracking-[1.2px] text-[#808799]">
              Per document
            </p>

            <div className="mt-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              {/* Today */}
              <div className="flex-1 rounded-[22px] border border-white/95 bg-gradient-to-br from-white/95 to-white/60 p-5 shadow-[0px_0px_29px_0px_rgba(52,67,122,0.09)] ring-1 ring-[#eef1f8]">
                <span className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#fcf1e0]">
                  <Image
                    src="/assets/Images/products/certus/page/m-icon-clock.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </span>
                <p className="font-helvetica-now-display mt-4 text-[30px] font-bold tracking-[-0.45px] text-[#13161b]">
                  60 Min
                </p>
                <p className="font-helvetica-now-display text-[12px] leading-4 text-[#808799]">
                  per document, today
                </p>
                <ul className="mt-4 flex flex-col gap-[7px]">
                  {manualPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-[1.5px] w-2 shrink-0 bg-[#808799]" />
                      <span className="font-helvetica-now-display text-[12px] leading-4 text-[#4a5261]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ~600x faster */}
              <div className="flex shrink-0 flex-row items-center justify-center gap-3 px-4 sm:flex-col sm:gap-2">
                <span className="relative inline-flex h-7 w-[61px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src="/assets/Images/products/certus/page/m-pill-600x.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <span className="font-helvetica-now-display relative text-[12px] font-medium tracking-[0.24px] text-white">
                    ~600×
                  </span>
                </span>
                <span className="text-[26px] font-bold text-[#808799]">→</span>
                <span className="font-helvetica-now-display text-[9px] font-medium uppercase tracking-[0.36px] text-[#808799]">
                  faster
                </span>
              </div>

              {/* With Certus */}
              <div className="relative flex-1 overflow-hidden rounded-[24px] p-5">
                <Image
                  src="/assets/Images/products/certus/page/m-card-blue-bg.png"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="relative">
                  <span className="flex size-[38px] items-center justify-center rounded-[10px] bg-white/[0.16]">
                    <Image
                      src="/assets/Images/products/certus/page/m-icon-check.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                  <p className="font-helvetica-now-display mt-4 text-[30px] font-bold tracking-[-0.45px] text-white">
                    6 Sec
                  </p>
                  <p className="font-helvetica-now-display text-[12px] leading-4 text-[#d9e0f5]">
                    per document, with Certus
                  </p>
                  <ul className="mt-4 flex flex-col gap-[7px]">
                    {certusPoints.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <Image
                          src="/assets/Images/products/certus/page/m-icon-tick.svg"
                          alt=""
                          width={12}
                          height={12}
                          className="size-3 shrink-0"
                        />
                        {/* IBM Plex Sans in the design — deliberately no Helvetica class */}
                        <span className="text-[12px] leading-4 text-[#ebf0fc]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[13px] border border-white/95 bg-gradient-to-b from-white/95 to-white/60 px-5 py-4 shadow-[0px_0px_14px_rgba(52,67,122,0.09)] ring-1 ring-[#eef1f8]">
              <SectionBody>
                Certus reads documents the way a trained reviewer would, checking its own work three
                separate times, and posting only what it can verify.
              </SectionBody>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
