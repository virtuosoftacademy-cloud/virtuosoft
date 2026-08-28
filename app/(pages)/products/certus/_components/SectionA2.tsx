import Image from "next/image"
import { Eyebrow, SectionTitle, SHELL } from "./Ui"

/**
 * "One Platform, Eight Capabilities" — full-bleed pale-blue band with a
 * 4x2 grid of frosted-glass capability cards.
 * Figma: Group 1000002075 (2017:5589), 1565x728.
 */

const IMG = "/assets/Images/products/certus/page"

const CAPABILITIES = [
  {
    icon: `${IMG}/a-cap-doc.svg`,
    title: "Intelligent Document Processing",
    body: "Sorts every document and routes it to the right workflow, whatever the format.",
  },
  {
    icon: `${IMG}/a-cap-ocr.svg`,
    title: "Advanced AI OCR",
    body: "Reads the important numbers and details from any document, printed or scanned.",
  },
  {
    icon: `${IMG}/a-cap-extract.svg`,
    title: "Intelligent Data Extraction",
    body: "Pulls out vendors, line items, VAT, due dates and bank details automatically.",
  },
  {
    icon: `${IMG}/a-cap-shield.svg`,
    title: "AI Validation & Verification",
    body: "Catches duplicates and fraud, and matches every invoice to its PO.",
  },
  {
    icon: `${IMG}/a-cap-workflow.svg`,
    title: "Workflow Automation",
    body: "Handles approvals and sign-offs with a full record of who did what.",
  },
  {
    icon: `${IMG}/a-cap-integrations.svg`,
    title: "Enterprise Integrations",
    body: "Connects natively to your ERP, accounting system and the tools you already run.",
  },
  {
    icon: `${IMG}/a-cap-vision.svg`,
    title: "Computer Vision",
    body: "Reads handwritten notes, rotated pages and low-quality scans the way a person would.",
  },
  {
    icon: `${IMG}/a-cap-query.svg`,
    title: "Natural-Language Query",
    body: "Ask a question in plain language, get the answer straight from your documents.",
  },
] as const

export default function SectionA2() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(125.74deg,#f5faff_0.13%,#f6fbff_101%)] pb-24 pt-14 md:pb-[120px] md:pt-[60px]">
      {/* Ambient glow — stands in for the masked radial ellipse in Figma */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-56 h-[700px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(140,176,255,0.30)_0%,rgba(205,222,255,0.14)_55%,rgba(255,255,255,0)_100%)]"
      />

      {/* Dot patterns */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[calc(75%-17px)] top-[9px] hidden md:block"
      >
        <Image
          src={`${IMG}/a-dots-top.svg`}
          alt=""
          width={502}
          height={94}
          className="h-[94px] w-[502px] max-w-none"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[17px] left-0 hidden rotate-180 md:block"
      >
        <Image
          src={`${IMG}/a-dots-bottom.svg`}
          alt=""
          width={501}
          height={51}
          className="h-[51px] w-[501px] max-w-none"
        />
      </div>

      <div className={`${SHELL} relative z-10`}>
        <div className="flex flex-col items-start gap-2">
          <Eyebrow>Capabilities</Eyebrow>
          <SectionTitle
            lead={
              <>
                One Platform,{" "}
                <span className="font-bold text-[#0051e4]">
                  Eight Capabilities
                </span>
              </>
            }
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-14">
          {CAPABILITIES.map((c) => (
            <article
              key={c.title}
              className="flex min-h-[171px] flex-col rounded-[22px] border-[0.97px] border-white/95 bg-[linear-gradient(156.43deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.62)_71.43%)] px-4 pb-4 pt-6 shadow-[0px_0px_29.115px_0px_rgba(52,67,122,0.09)]"
            >
              <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[11px] bg-[#0051e4] shadow-[0px_6px_15px_-3px_rgba(37,99,235,0.36)]">
                <Image
                  src={c.icon}
                  alt=""
                  width={21}
                  height={21}
                  className="size-[21px]"
                />
              </span>
              <h3 className="font-helvetica-now-display mt-4 text-base font-bold leading-[1.24] tracking-[-0.064px] text-[#13161b]">
                {c.title}
              </h3>
              <p className="font-helvetica-now-display mt-[7px] text-xs leading-[1.52] text-[#4a5261]">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
