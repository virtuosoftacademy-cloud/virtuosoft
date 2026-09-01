import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion"
import { Eyebrow, SectionBody, SectionTitle, SHELL } from "./Ui"

type EvidenceField = {
  /** Short tag shown on the "paper" side, e.g. "Invoice No." */
  leftLabel: string
  /** Fuller phrase shown on the "what Certus filed" side, e.g. "Invoice number" */
  rightLabel: string
  leftValue: string
  rightValue: string
}

type EvidenceExample = {
  /** Pill label and the big document title printed on the paper. */
  type: string
  ref: EvidenceField
  total: EvidenceField
  /** The one field Certus can't read cleanly — same story on every document type. */
  smudged: { leftLabel: string; rightLabel: string }
}

const EVIDENCE_EXAMPLES: EvidenceExample[] = [
  {
    type: "INVOICE",
    ref: { leftLabel: "Invoice No.", rightLabel: "Invoice number", leftValue: "AP - 8834", rightValue: "AP-8834" },
    total: { leftLabel: "Total", rightLabel: "Total amount", leftValue: "4,120,000", rightValue: "PKR 4,120,000" },
    smudged: { leftLabel: "Tax Reg. No.", rightLabel: "Tax registration" },
  },
  {
    type: "RECEIPT",
    ref: { leftLabel: "Receipt No.", rightLabel: "Receipt number", leftValue: "RC-5521", rightValue: "RC-5521" },
    total: { leftLabel: "Total Paid", rightLabel: "Total paid", leftValue: "18,450", rightValue: "PKR 18,450" },
    smudged: { leftLabel: "Merchant Tax ID", rightLabel: "Merchant tax ID" },
  },
  {
    type: "BANK STATEMENT",
    ref: { leftLabel: "Account No.", rightLabel: "Account number", leftValue: "011-2200-88", rightValue: "011-2200-88" },
    total: { leftLabel: "Closing Balance", rightLabel: "Closing balance", leftValue: "1,204,650", rightValue: "PKR 1,204,650" },
    smudged: { leftLabel: "Branch Code", rightLabel: "Branch code" },
  },
  {
    type: "CHEQUE",
    ref: { leftLabel: "Cheque No.", rightLabel: "Cheque number", leftValue: "CHQ-00931", rightValue: "CHQ-00931" },
    total: { leftLabel: "Amount", rightLabel: "Amount", leftValue: "250,000", rightValue: "PKR 250,000" },
    smudged: { leftLabel: "Bank Code", rightLabel: "Payee bank code" },
  },
  {
    type: "PASSPORT ID",
    ref: { leftLabel: "Passport No.", rightLabel: "Passport number", leftValue: "AB1234567", rightValue: "AB1234567" },
    total: { leftLabel: "Date of Birth", rightLabel: "Date of birth", leftValue: "14 Mar 1990", rightValue: "14 Mar 1990" },
    smudged: { leftLabel: "MRZ Line", rightLabel: "MRZ checksum" },
  },
  {
    type: "INSURANCE CLAIM",
    ref: { leftLabel: "Claim No.", rightLabel: "Claim number", leftValue: "CLM-77410", rightValue: "CLM-77410" },
    total: { leftLabel: "Claim Amount", rightLabel: "Claim amount", leftValue: "980,000", rightValue: "PKR 980,000" },
    smudged: { leftLabel: "Adjuster Stamp", rightLabel: "Adjuster stamp" },
  },
  {
    type: "PURCHASE ORDER",
    ref: { leftLabel: "PO No.", rightLabel: "PO number", leftValue: "PO-33812", rightValue: "PO-33812" },
    total: { leftLabel: "Order Total", rightLabel: "Order total", leftValue: "612,300", rightValue: "PKR 612,300" },
    smudged: { leftLabel: "Delivery Terms", rightLabel: "Delivery terms" },
  },
  {
    type: "CUSTOMS DECLARATION",
    ref: { leftLabel: "Declaration No.", rightLabel: "Declaration number", leftValue: "CD-90217", rightValue: "CD-90217" },
    total: { leftLabel: "Declared Value", rightLabel: "Declared value", leftValue: "3,450,000", rightValue: "PKR 3,450,000" },
    smudged: { leftLabel: "HS Code", rightLabel: "HS code" },
  },
  {
    type: "MEDICAL RECORD",
    ref: { leftLabel: "Patient ID", rightLabel: "Patient ID", leftValue: "PT-04482", rightValue: "PT-04482" },
    total: { leftLabel: "Visit Date", rightLabel: "Visit date", leftValue: "02 Jun 2025", rightValue: "02 Jun 2025" },
    smudged: { leftLabel: "Physician Signature", rightLabel: "Physician signature" },
  },
  {
    type: "LEGAL SERVICE AGREEMENT",
    ref: { leftLabel: "Agreement No.", rightLabel: "Agreement number", leftValue: "AG-15590", rightValue: "AG-15590" },
    total: { leftLabel: "Contract Value", rightLabel: "Contract value", leftValue: "2,100,000", rightValue: "PKR 2,100,000" },
    smudged: { leftLabel: "Counterparty Seal", rightLabel: "Counterparty seal" },
  },
  {
    type: "AUDIT REPORT",
    ref: { leftLabel: "Report No.", rightLabel: "Report number", leftValue: "AR-2025-06", rightValue: "AR-2025-06" },
    total: { leftLabel: "Period Covered", rightLabel: "Period covered", leftValue: "Q2 2025", rightValue: "Q2 2025" },
    smudged: { leftLabel: "Auditor Signature", rightLabel: "Auditor signature" },
  },
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function Bar({ w, muted = false }: { w: string; muted?: boolean }) {
  return (
    <span
      className={`block h-3 max-w-full rounded-[2px] ${muted ? "bg-[#d1d5db]" : "bg-[#e5e7eb]"}`}
      style={{ width: w }}
    />
  )
}

export default function Evidence() {
  const [selected, setSelected] = useState(0)
  const active = EVIDENCE_EXAMPLES[selected]
  const reduceMotion = useReducedMotion()
  const fadeIn = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.2 },
          variants: fadeInUp,
          transition: { duration: 0.6, ease: "easeOut" as const, delay },
        }

  return (
    <section className="py-16 md:py-24">
      <div className={SHELL}>
        <motion.div>
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
        </motion.div>

        {/* Document types this applies to — click one to see its evidence card below */}
        <motion.div className="mt-8 flex flex-wrap gap-3" {...fadeIn(0.15)}>
          {EVIDENCE_EXAMPLES.map((example, i) => (
            <button
              key={example.type}
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              className={`inline-flex h-10 items-center justify-center rounded-full px-4 text-[12px] font-bold leading-4 transition-colors ${
                selected === i
                  ? "bg-[#0051e4] text-white"
                  : "border border-[#0051e4] text-[#0051e4] hover:bg-[#0051e4]/5"
              }`}
            >
              {example.type}
            </button>
          ))}
        </motion.div>

        {/* Evidence card: the paper on the left, what was filed on the right */}
        <motion.div
          className="mt-10 rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-[0px_10px_15px_rgba(15,23,51,0.05)] md:p-10"
          {...fadeIn(0.3)}
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <p className="text-[14px] font-bold uppercase leading-5 tracking-[1.85px] text-[#6b7280]">
              1 &nbsp;&middot;&nbsp; The paper you received
            </p>
            <p className="text-[14px] font-bold uppercase leading-5 tracking-[1.85px] text-[#6b7280]">
              2 &nbsp;&middot;&nbsp; What Certus filed
            </p>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.type}
              className="relative mt-5 grid gap-6 lg:grid-cols-2 lg:gap-8"
              initial={reduceMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Left: the scanned page */}
              <div className="flex flex-col gap-6 rounded-[10px] border-2 border-[#e5e7eb] bg-white p-6 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[26px] font-extrabold text-[#111827] md:text-[30px]">
                    {active.type}
                  </p>
                  <div>
                    <p className="text-[13px] font-semibold text-[#6b7280]">{active.ref.leftLabel}</p>
                    <div className="mt-1 rounded-[5px] border-[2.5px] border-[#0051e4] bg-[#e5eefc] px-4 py-2">
                      <p className="text-[18px] font-bold text-[#0051e4]">{active.ref.leftValue}</p>
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
                    <p className="text-[13px] font-semibold text-[#6b7280]">{active.total.leftLabel}</p>
                    <div className="mt-1 rounded-[5px] border-[2.5px] border-[#0051e4] bg-[#e5eefc] px-4 py-2">
                      <p className="text-[18px] font-bold text-[#0051e4]">{active.total.leftValue}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#6b7280]">{active.smudged.leftLabel}</p>
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
                  <p className="text-[16px] text-[#6b7280]">{active.ref.rightLabel}</p>
                  <p className="text-[24px] font-bold text-[#111827]">{active.ref.rightValue}</p>
                  <span className="w-fit rounded-[5px] border border-[#0051e4] bg-[#e5eefc] px-2 py-1 text-[13px] font-bold tracking-[0.62px] text-[#0051e4]">
                    VERIFIED
                  </span>
                </div>
                <hr className="border-[#e5e7eb]" />

                <div className="flex flex-col gap-2">
                  <p className="text-[16px] text-[#6b7280]">{active.total.rightLabel}</p>
                  <p className="text-[24px] font-bold text-[#111827]">{active.total.rightValue}</p>
                  <span className="w-fit rounded-[5px] border border-[#0051e4] bg-[#e5eefc] px-2 py-1 text-[13px] font-bold tracking-[0.62px] text-[#0051e4]">
                    VERIFIED
                  </span>
                </div>
                <hr className="border-[#e5e7eb]" />

                <div className="flex flex-col gap-2">
                  <p className="text-[16px] text-[#6b7280]">{active.smudged.rightLabel}</p>
                  <p className="text-[24px] italic text-[#b37a30]">not readable</p>
                  <span className="w-fit rounded-[5px] border border-[#b37a30] bg-[#faf3e8] px-2 py-1 text-[13px] font-bold tracking-[0.62px] text-[#b37a30]">
                    NEEDS CONFIRMING
                  </span>
                </div>

                <p className="mt-auto pt-6 text-[16px] text-[#6b7280]">
                  Sent to a named reviewer. Not guessed.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <hr className="mt-6 border-[#e5e7eb]" />
          <p className="mt-6 text-[17px] leading-[27px] text-[#111827]">
            <span className="font-bold">The field, and where it came from.</span> Every value Certus
            files keeps its line back to the exact region of the page &mdash; and where the page
            cannot be read, it asks a person instead of inventing a number.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
