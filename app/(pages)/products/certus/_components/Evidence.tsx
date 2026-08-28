import Image from "next/image"
import { Eyebrow, SectionBody, SectionTitle, SHELL } from "./Ui"

const docTypes = [
  "INVOICE", "RECEIPT", "BANK STATEMENT", "CHEQUE", "PASSPORT ID", "INSURANCE CLAIM",
  "PURCHASE ORDER", "CUSTOMS DECLARATION", "MEDICAL RECORD", "LEGAL SERVICE AGREEMENT",
  "AUDIT REPORT",
]

/** Grey placeholder bars standing in for the body copy of the scanned page. */
const invoiceRows: [string, string][] = [
  ["247px", "99px"],
  ["285px", "99px"],
  ["198px", "99px"],
]

/** The three connectors tying a field on the page to its extracted value. */
const connectors = [
  { src: "m-connector-1.svg", w: 192, h: 118, style: "left-[-96px] top-[15px] w-[192px]" },
  { src: "m-connector-2.svg", w: 175, h: 146, style: "left-[-88px] top-[244px] w-[175px]" },
  { src: "m-connector-3.svg", w: 211, h: 79, style: "left-[-105px] top-[389px] w-[211px]" },
]

function Bar({ w, muted = false }: { w: string; muted?: boolean }) {
  return (
    <span
      className={`block h-3 max-w-full rounded-[2px] ${muted ? "bg-[#d1d5db]" : "bg-[#e5e7eb]"}`}
      style={{ width: w }}
    />
  )
}

export default function Evidence() {
  return (
    <section className="bg-[#f8faff] py-16 md:py-24">
      <div className={SHELL}>
        <Eyebrow>Every Number Has Evidence</Eyebrow>
        <SectionTitle
          className="mt-2"
          lead="Click Any Value and Land on the"
          accent="Exact Spot It Was Read From"
        />
        <SectionBody className="mt-3">
          This is the claim you can test in five minutes on your own worst scans.
          <br />
          An accuracy percentage is not.
        </SectionBody>

        {/* Document types this applies to */}
        <div className="mt-8 flex flex-wrap gap-3">
          {docTypes.map((type, i) => (
            <span
              key={type}
              className={`font-helvetica-now-display inline-flex h-10 items-center justify-center rounded-full px-4 text-[12px] font-bold leading-4 ${
                i === 0 ? "bg-[#0051e4] text-white" : "border border-[#0051e4] text-[#0051e4]"
              }`}
            >
              {type}
            </span>
          ))}
        </div>

        {/* Evidence card: the paper on the left, what was filed on the right */}
        <div className="mt-10 rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-[0px_10px_15px_rgba(15,23,51,0.05)] md:p-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <p className="text-[14px] font-bold uppercase leading-5 tracking-[1.85px] text-[#6b7280]">
              1 &nbsp;&middot;&nbsp; The paper you received
            </p>
            <p className="text-[14px] font-bold uppercase leading-5 tracking-[1.85px] text-[#6b7280]">
              2 &nbsp;&middot;&nbsp; What Certus filed
            </p>
          </div>

          <div className="relative mt-5 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left: the scanned page */}
            <div className="flex flex-col gap-6 rounded-[10px] border-2 border-[#e5e7eb] bg-white p-6 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[26px] font-extrabold text-[#111827] md:text-[30px]">INVOICE</p>
                <div>
                  <p className="text-[13px] font-semibold text-[#6b7280]">Invoice No.</p>
                  <div className="mt-1 rounded-[5px] border-[2.5px] border-[#0051e4] bg-[#e5eefc] px-4 py-2">
                    <p className="text-[18px] font-bold text-[#0051e4]">AP - 8834</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Bar w="223px" />
                <Bar w="148px" />
              </div>
              <hr className="border-[#e5e7eb]" />

              <div className="flex flex-col gap-4">
                {invoiceRows.map(([left, right], i) => (
                  <div key={i} className="flex items-start justify-between gap-4">
                    <Bar w={left} />
                    <Bar w={right} />
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-end gap-5">
                <div>
                  <p className="text-[13px] font-semibold text-[#6b7280]">Total</p>
                  <div className="mt-1 rounded-[5px] border-[2.5px] border-[#0051e4] bg-[#e5eefc] px-4 py-2">
                    <p className="text-[18px] font-bold text-[#0051e4]">4,120,000</p>
                  </div>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#6b7280]">Tax Reg. No.</p>
                  <div className="mt-1 flex items-center gap-4 rounded-[5px] border-2 border-dashed border-[#b37a30] bg-[#faf3e8] px-4 py-2">
                    <span className="flex items-start gap-1">
                      <Bar w="20px" muted />
                      <Bar w="15px" muted />
                      <Bar w="25px" muted />
                      <Bar w="10px" muted />
                    </span>
                    <span className="text-[13px] italic text-[#b37a30]">smudged</span>
                  </div>
                </div>
              </div>
              <Bar w="173px" />
            </div>

            {/* Right: the extraction */}
            <div className="relative flex flex-col gap-7 rounded-[10px] border-2 border-[#e5e7eb] bg-white p-6 md:p-10">
              {/* Connectors only make sense once the columns sit side by side */}
              <div className="pointer-events-none absolute inset-0 hidden lg:block">
                {connectors.map((c) => (
                  <Image
                    key={c.src}
                    src={`/assets/Images/products/certus/page/${c.src}`}
                    alt=""
                    width={c.w}
                    height={c.h}
                    className={`absolute ${c.style}`}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[16px] text-[#6b7280]">Invoice number</p>
                <p className="text-[24px] font-bold text-[#111827]">AP-8834</p>
                <span className="w-fit rounded-[5px] border border-[#0051e4] bg-[#e5eefc] px-2 py-1 text-[13px] font-bold tracking-[0.62px] text-[#0051e4]">
                  VERIFIED
                </span>
              </div>
              <hr className="border-[#e5e7eb]" />

              <div className="flex flex-col gap-2">
                <p className="text-[16px] text-[#6b7280]">Total amount</p>
                <p className="text-[24px] font-bold text-[#111827]">PKR 4,120,000</p>
                <span className="w-fit rounded-[5px] border border-[#0051e4] bg-[#e5eefc] px-2 py-1 text-[13px] font-bold tracking-[0.62px] text-[#0051e4]">
                  VERIFIED
                </span>
              </div>
              <hr className="border-[#e5e7eb]" />

              <div className="flex flex-col gap-2">
                <p className="text-[16px] text-[#6b7280]">Tax registration</p>
                <p className="text-[24px] italic text-[#b37a30]">not readable</p>
                <span className="w-fit rounded-[5px] border border-[#b37a30] bg-[#faf3e8] px-2 py-1 text-[13px] font-bold tracking-[0.62px] text-[#b37a30]">
                  NEEDS CONFIRMING
                </span>
              </div>

              <p className="mt-auto pt-6 text-[16px] text-[#6b7280]">
                Sent to a named reviewer. Not guessed.
              </p>
            </div>
          </div>

          <hr className="mt-6 border-[#e5e7eb]" />
          <p className="mt-6 text-[17px] leading-[27px] text-[#111827]">
            <span className="font-bold">The field, and where it came from.</span> Every value Certus
            files keeps its line back to the exact region of the page &mdash; and where the page
            cannot be read, it asks a person instead of inventing a number.
          </p>
        </div>
      </div>
    </section>
  )
}
