import Image from "next/image"
import type { ReactNode } from "react"
import { Eyebrow, SectionBody, SectionTitle, SHELL } from "./Ui"

const IMG = "/assets/Images/products/certus/page"

/** 1px rule exported from Figma — stretched to the paper width. */
function Rule({ src }: { src: string }) {
  return (
    <div className="relative h-px w-full shrink-0">
      <Image src={src} alt="" fill sizes="256px" className="object-fill" />
    </div>
  )
}

function StatusBadge({
  icon,
  label,
  surface,
  tone,
}: {
  icon: string
  label: string
  surface: string
  tone: string
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-[5.85px] rounded-[7.8px] px-[9.75px] py-[5.85px]"
      style={{ backgroundColor: surface }}
    >
      <Image
        src={icon}
        alt=""
        width={14}
        height={14}
        className="size-[13.65px] shrink-0"
      />
      <span
        className="text-[11.7px] font-bold whitespace-nowrap"
        style={{ color: tone }}
      >
        {label}
      </span>
    </div>
  )
}

function FlowArrow({ src }: { src: string }) {
  return (
    <div className="flex size-[39px] shrink-0 items-center justify-center">
      <Image
        src={src}
        alt=""
        width={16}
        height={16}
        className="size-[15.6px] rotate-90 lg:rotate-0"
      />
    </div>
  )
}

function DocColumn({ badge, children }: { badge: ReactNode; children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[253.5px] shrink-0 flex-col items-start gap-[11.7px] lg:mx-0 lg:w-[253.5px]">
      {badge}
      {children}
    </div>
  )
}

export default function SectionE1() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className={SHELL}>
        {/* Header_Row — 2105:13396 */}
        <div className="flex w-full items-start justify-between">
          <div className="flex w-full max-w-[741px] flex-col items-start gap-[15.6px]">
            <Eyebrow>Build For Real Documents</Eyebrow>
            <SectionTitle
              lead={
                <>
                  Documents Aren&rsquo;t{" "}
                  <span className="font-bold text-[#0051e4]">Always Clean</span>
                </>
              }
            />
            <SectionBody>
              From a handwritten supplier invoice captured on a scanner to a digitally
              generated one arriving by email, Certus brings them into the same
              pipeline and is honest about which ones need a person to look.
            </SectionBody>
          </div>
        </div>

        {/* Pipeline_Flow_Row — 2105:13411 */}
        <div className="mt-10 flex w-full flex-col items-center gap-[15.6px] lg:mt-[39px] lg:flex-row lg:justify-between">
          {/* Doc_Col_1 — handwritten paper */}
          <DocColumn
            badge={
              <StatusBadge
                icon={`${IMG}/e-pipeline-pencil.svg`}
                label="Handwritten invoice"
                surface="#fff7ed"
                tone="#ea580c"
              />
            }
          >
            <div className="relative flex h-[195px] w-full flex-col items-start gap-[11.7px] overflow-clip rounded-[7.8px] border-[0.975px] border-[#e3dcb8] bg-[#faf5e6] p-[15.6px] shadow-[0px_3.9px_11.7px_0px_rgba(0,0,0,0.04)]">
              <Image
                src={`${IMG}/e-pipeline-coffee-stain.svg`}
                alt=""
                width={59}
                height={49}
                className="pointer-events-none absolute top-[116.02px] left-[174.53px] h-[48.75px] w-[58.5px]"
              />
              <p className="w-full text-[13.65px] font-bold text-[#2b2013]">
                Global Trading LLC
              </p>
              <div className="flex w-full items-center justify-between whitespace-nowrap text-[#544331]">
                <p className="text-[9.75px]">Inv No: INV-2024-0158</p>
                <p className="text-[8.775px]">Date: 18/05/2025</p>
              </div>
              <Rule src={`${IMG}/e-pipeline-divider-paper.svg`} />
              <div className="flex w-full items-start justify-between text-[9.75px] whitespace-nowrap text-[#544331]">
                <div className="flex flex-col items-start gap-[3.9px]">
                  <p>Office Supplies</p>
                  <p>Consulting Fee</p>
                  <p>VAT (5%)</p>
                </div>
                <div className="flex flex-col items-end gap-[3.9px] font-bold">
                  <p>2,500.00</p>
                  <p>5,000.00</p>
                  <p>375.00</p>
                </div>
              </div>
              <Rule src={`${IMG}/e-pipeline-divider-paper.svg`} />
              <div className="flex w-full items-start justify-between whitespace-nowrap">
                <p className="text-[10.725px] font-bold text-[#2b2013]">Total</p>
                <p className="text-[11.7px] font-bold text-[#0051e4]">7,875.00</p>
              </div>
            </div>
          </DocColumn>

          <FlowArrow src={`${IMG}/e-pipeline-arrow-right-1.svg`} />

          {/* Doc_Col_2 — poor-quality scan */}
          <DocColumn
            badge={
              <StatusBadge
                icon={`${IMG}/e-pipeline-scan.svg`}
                label="Poor-quality scan"
                surface="#fff7ed"
                tone="#ea580c"
              />
            }
          >
            <div className="flex h-[195px] w-full flex-col items-start gap-[11.7px] overflow-clip rounded-[7.8px] border-[0.975px] border-[#d1d5db] bg-[#f3f4f6] p-[15.6px] shadow-[0px_3.9px_7.8px_0px_rgba(0,0,0,0.03)]">
              <div className="relative h-[3.9px] w-full shrink-0">
                <Image
                  src={`${IMG}/e-pipeline-scan-topline.png`}
                  alt=""
                  fill
                  sizes="256px"
                  className="object-fill"
                />
              </div>
              <div className="flex w-full items-start justify-between whitespace-nowrap">
                <p className="text-[11.7px] font-bold text-[#6b7280] opacity-70">
                  GULF SERVICES FZC
                </p>
                <p className="text-[9.75px] text-[#9ca3af] opacity-70">INVOICE</p>
              </div>
              <p className="text-[8.775px] whitespace-nowrap text-[#9ca3af] opacity-70">
                Date: 18 May 2025
              </p>
              <Rule src={`${IMG}/e-pipeline-divider-scan.svg`} />
              <div className="flex w-full items-start justify-between text-[8.775px] whitespace-nowrap text-[#6b7280]">
                <div className="flex flex-col items-start gap-[3.9px] opacity-70">
                  <p>Office Supplies</p>
                  <p>Consulting Fee</p>
                </div>
                <div className="flex flex-col items-end gap-[3.9px] opacity-70">
                  <p>2,500.00</p>
                  <p>5,000.00</p>
                </div>
              </div>
              <Rule src={`${IMG}/e-pipeline-divider-scan.svg`} />
              <div className="flex w-full items-start justify-between whitespace-nowrap">
                <p className="text-[9.75px] font-bold text-[#6b7280] opacity-70">TOTAL</p>
                <p className="text-[10.725px] font-bold text-[#111827] opacity-70">
                  7,875.00
                </p>
              </div>
            </div>
          </DocColumn>

          <FlowArrow src={`${IMG}/e-pipeline-arrow-right-2.svg`} />

          {/* Doc_Col_3 — email PDF */}
          <DocColumn
            badge={
              <StatusBadge
                icon={`${IMG}/e-pipeline-file.svg`}
                label="Email PDF"
                surface="#f0fdf4"
                tone="#15803d"
              />
            }
          >
            <div className="flex h-[195px] w-full flex-col items-start gap-[11.7px] rounded-[7.8px] border-[0.975px] border-[#e5e7eb] bg-white p-[15.6px] drop-shadow-[0px_3.9px_3.9px_rgba(0,0,0,0.03)]">
              <div className="flex w-full items-start justify-between">
                <div className="flex flex-col items-start gap-[1.95px] whitespace-nowrap">
                  <p className="text-[12.675px] font-bold text-[#090e1a]">
                    Bright Solutions LLC
                  </p>
                  <p className="text-[8.775px] text-[#4b5563]">Tax Invoice</p>
                </div>
                <div className="flex shrink-0 items-start rounded-[3.9px] bg-[#eff6ff] px-[5.85px] py-[2.925px]">
                  <p className="text-[8.775px] font-bold whitespace-nowrap text-[#0051e4]">
                    INV-2024-0158
                  </p>
                </div>
              </div>
              <p className="text-[7.8px] whitespace-nowrap text-[#4b5563]">
                Date: 18 May 2025
              </p>
              <Rule src={`${IMG}/e-pipeline-divider-pdf.svg`} />
              <div className="flex w-full items-start justify-between text-[8.775px] whitespace-nowrap">
                <div className="flex flex-col items-start gap-[3.9px] text-[#4b5563]">
                  <p>Office Supplies</p>
                  <p>Consulting Fee</p>
                </div>
                <div className="flex flex-col items-end gap-[3.9px] text-[#090e1a]">
                  <p>2,500.00</p>
                  <p>5,000.00</p>
                </div>
              </div>
              <Rule src={`${IMG}/e-pipeline-divider-pdf.svg`} />
              <div className="flex w-full items-start justify-between whitespace-nowrap text-[#090e1a]">
                <p className="text-[9.75px] font-bold">Total</p>
                <p className="text-[10.725px] font-bold">7,875.00</p>
              </div>
            </div>
          </DocColumn>

          <FlowArrow src={`${IMG}/e-pipeline-arrow-right-3.svg`} />

          {/* Extraction_Pipeline_Card */}
          <div className="mx-auto flex h-[195px] w-full max-w-[253.5px] shrink-0 flex-col items-center justify-center gap-[15.6px] rounded-[15.6px] border-[0.975px] border-[#eff6ff] bg-white p-[23.4px] drop-shadow-[0px_9.75px_11.7px_rgba(0,0,0,0.06)] lg:mx-0 lg:w-[234px]">
            <div className="flex size-[46.8px] shrink-0 items-center justify-center rounded-[11.7px] bg-[#eff6ff]">
              <Image
                src={`${IMG}/e-pipeline-cpu.svg`}
                alt=""
                width={24}
                height={24}
                className="size-[23.4px]"
              />
            </div>
            <div className="flex flex-col items-center gap-[3.9px] text-center text-[13.65px] font-bold whitespace-nowrap text-[#090e1a]">
              <p>Same extraction</p>
              <p>pipeline</p>
            </div>
            <p className="w-full text-center text-[10.725px] text-[#4b5563]">
              Consistent data capture, validation and review.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
