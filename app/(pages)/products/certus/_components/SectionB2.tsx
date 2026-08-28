import Image from "next/image"
import { Eyebrow, SHELL, SectionBody, SectionTitle } from "./Ui"

/**
 * "Your Invoices Arrive However They Arrive" — intro block plus a four-up row of
 * document-source cards (PDF / Images / Email / Text messages).
 * Figma: Group 1000002079 (2017:6109), 1248x380.
 */

const SOURCES = [
  {
    icon: "/assets/Images/products/certus/page/b-source-pdf.svg",
    title: "PDF Documents",
    body: "Scanned, rotated, multi-page or multi-format — all read the same way.",
  },
  {
    icon: "/assets/Images/products/certus/page/b-source-image.svg",
    title: "Images",
    body: "Including a photo of a receipt sent over WhatsApp.",
  },
  {
    icon: "/assets/Images/products/certus/page/b-source-email.svg",
    title: "Email Attachments",
    body: "Read directly from the inbox — no forwarding required.",
  },
  {
    icon: "/assets/Images/products/certus/page/b-source-message.svg",
    title: "Text Messages",
    body: "If an order comes through as a written message, Certus reads that too.",
  },
]

export default function SectionB2() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className={SHELL}>
        <div className="flex flex-col gap-2">
          <div>
            <Eyebrow>Any Source, One Pipeline</Eyebrow>
          </div>

          <div className="flex flex-col gap-3">
            <SectionTitle
              lead="Your Invoices Arrive However They Arrive."
              accent="The System Reads All of Them"
            />
            <SectionBody className="max-w-[1040px]">
              You configure the source. Certus reads from wherever your documents
              actually land:
            </SectionBody>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {SOURCES.map((source) => (
            <div key={source.title} className="flex flex-col gap-[15px]">
              <div className="flex size-[57px] shrink-0 items-center justify-center rounded-full border border-[rgba(37,99,235,0.22)] bg-[rgba(37,99,235,0.1)]">
                <Image
                  src={source.icon}
                  alt=""
                  width={34}
                  height={34}
                  className="size-[34px]"
                />
              </div>
              <p className="font-helvetica-now-display text-base font-bold leading-6 text-[#13161b]">
                {source.title}
              </p>
              <p className="font-helvetica-now-display text-sm leading-6 text-[#4a5261]">
                {source.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
