import Image from "next/image"
import { Eyebrow, SectionBody, SectionTitle, SHELL } from "./Ui"

const IMG = "/assets/Images/products/certus/page"

const STEPS = [
  {
    icon: `${IMG}/aud-select-invoice.svg`,
    title: "Select invoice for audit",
    body: "Flag high value invoices, new vendors, and periodic spot checks for review",
  },
  {
    icon: `${IMG}/aud-gather-info.svg`,
    title: "Gather supporting information.",
    body: "Pull the PO, vendor contract, packing slip, and internal approvals",
  },
  {
    icon: `${IMG}/aud-review-details.svg`,
    title: "Review invoice details",
    body: "Check vendor info, invoice number payment terms, and line items",
  },
  {
    icon: `${IMG}/aud-3way-match.svg`,
    title: "3-way match: invoice, PO & delivery",
    body: "Confirm invoice, PO, and delivery receipt align on quantities and pricing.",
  },
  {
    icon: `${IMG}/aud-verify-approvals.svg`,
    title: "Verify internal approvals",
    body: "Ensure submission came through the correct approval channels",
  },
  {
    icon: `${IMG}/aud-check-duplicates.svg`,
    title: "Check for duplicates",
    body: "Confirm the invoice number and amount haven't already been paid",
  },
  {
    icon: `${IMG}/aud-audit-approve.svg`,
    title: "Information audit & approve/escalate",
    body: "Log your findings, approve for payment, or flag discrepancies for review",
  },
]

export default function AuditProcess() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className={SHELL}>
        <div className="flex flex-col items-start gap-2">
          <Eyebrow>Every Number Has Evidence</Eyebrow>
          <SectionTitle
            className="max-w-[537px]"
            lead="Invoice Audit"
            accent=" Process"
          />
          <SectionBody className="max-w-[537px]">
            Catch costly invoice errors before they become payments. Get a clear,
            evidence-backed view of what&rsquo;s accurate, what&rsquo;s missing, and what needs
            attention.
          </SectionBody>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <article
              key={step.title}
              className="flex min-h-[355px] flex-col gap-6 rounded-[22px] border border-white/95 bg-[linear-gradient(138deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.62)_71.43%)] p-6 shadow-[0px_0px_15px_0px_rgba(52,67,122,0.09)]"
            >
              <div className="flex flex-col gap-2">
                <span className="flex size-[73px] items-center justify-center">
                  <Image src={step.icon} alt="" width={40} height={40} />
                </span>
                <h3 className="text-2xl font-bold leading-8 tracking-[-1px] text-[#111827]">
                  {step.title}
                </h3>
              </div>
              <p className="text-[15px] leading-6 text-[#4b5563] md:text-base md:leading-8">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
