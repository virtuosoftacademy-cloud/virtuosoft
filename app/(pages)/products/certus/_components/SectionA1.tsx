import Image from "next/image"
import { Eyebrow, SectionBody, SectionTitle, SHELL } from "./Ui"

/**
 * "How It Works" — the ingest → review → route funnel diagram.
 * Figma: Frame 1000001462 (2017:4943), 1248x1315.
 */

const IMG = "/assets/Images/products/certus/page"

const SOURCES: { label: string; src: string; extra?: string }[] = [
  { label: "PDF", src: `${IMG}/a-pdf-1.svg`, extra: `${IMG}/a-pdf-2.svg` },
  { label: "Image / Photo", src: `${IMG}/a-image.svg` },
  { label: "Email", src: `${IMG}/a-email.svg` },
  { label: "WhatsApp / SMS", src: `${IMG}/a-whatsapp.svg` },
]

const REVIEW_LAYERS = [
  {
    icon: `${IMG}/a-clipboard.svg`,
    title: "Known format? Read instantly",
    body: "Matches a vendor template we've seen before",
  },
  {
    icon: `${IMG}/a-ai-read.svg`,
    title: "New format? AI reads it",
    body: "Understood the way a person would read it",
  },
] as const

function OutcomeCard({
  icon,
  title,
  body,
  tone,
  ringed = false,
}: {
  icon: string
  title: string
  body: string
  tone: "success" | "warn"
  ringed?: boolean
}) {
  const success = tone === "success"
  return (
    <div
      className={`flex w-full items-center rounded-2xl border p-[17px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] ${
        success
          ? "border-[#bbf7d0] bg-[#f0fdf4]"
          : "border-[#fed7aa] bg-[#fff7ed]"
      }`}
    >
      <span
        className={`mr-4 flex size-10 shrink-0 items-center justify-center rounded-full ${
          success ? "bg-[#22c55e]" : ringed ? "bg-[#ea580c]" : "bg-[#f97316]"
        } ${ringed && success ? "border border-[#dcfce7]" : ""}`}
      >
        <Image src={icon} alt="" width={24} height={24} className="size-6" />
      </span>
      <span className="font-helvetica-now-display flex min-w-0 flex-col gap-[2px]">
        <span
          className={`text-sm font-bold leading-5 ${
            success ? "text-[#166534]" : "text-[#9a3412]"
          }`}
        >
          {title}
        </span>
        <span
          className={`text-xs leading-4 ${
            success ? "text-[#15803d]/70" : "text-[#c2410c]/70"
          }`}
        >
          {body}
        </span>
      </span>
    </div>
  )
}

function FunnelCaption({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className ?? ""}`}>
      <span className="flex items-center gap-2">
        <Image
          src={`${IMG}/a-sparkle-blue.svg`}
          alt=""
          width={24}
          height={24}
          className="size-5 shrink-0 md:size-6"
        />
        <span className="font-helvetica-now-display text-sm font-medium leading-7 text-[#004acf] sm:text-base md:text-xl">
          However it arrives, we take it
        </span>
      </span>
      <p className="font-helvetica-now-display max-w-[234px] text-center text-[11px] leading-4 text-[#0051e4] md:text-sm">
        Cleaned up automatically, no manual re-typing or re-scanning
      </p>
    </div>
  )
}

export default function SectionA1() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 md:py-20">
      <div className={SHELL}>
        <div className="flex flex-col items-center gap-10">
          {/* Heading block */}
          <div className="flex w-full flex-col items-center gap-4">
            <Eyebrow>How It Works</Eyebrow>
            <div className="flex w-full flex-col items-center gap-6">
              <SectionTitle
                className="text-center"
                lead="Every Document Passes Three Checks Before Anything"
                accent="Touches Your Books"
              />
              <SectionBody className="max-w-[758px] text-center">
                The system captures documents from whatever source you configure
                PDF, image, email or WhatsApp cleans them up and runs every one
                through three independent review layers before making a routing
                decision.
              </SectionBody>
            </div>
          </div>

          {/* Funnel diagram */}
          <div className="flex w-full max-w-[824px] flex-col items-center">
            {/* Input sources */}
            <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-6 sm:gap-x-10">
              {SOURCES.map((s) => (
                <div
                  key={s.label}
                  className="flex w-[110px] flex-col items-center"
                >
                  <div className="flex size-20 items-center justify-center rounded-full border border-[#e2e8f0] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                    <div className="relative size-10">
                      <Image
                        src={s.src}
                        alt=""
                        width={40}
                        height={40}
                        className={
                          s.extra
                            ? "absolute inset-y-[12.5%] left-[21.46%] right-[20.21%] h-[75%] w-[58.33%]"
                            : "size-10"
                        }
                      />
                      {s.extra && (
                        <Image
                          src={s.extra}
                          alt=""
                          width={40}
                          height={40}
                          className="absolute left-[38.13%] right-[36.88%] top-[45.83%] h-[16.67%] w-[25%]"
                        />
                      )}
                    </div>
                  </div>
                  <span className="font-helvetica-now-display pt-2 text-center text-sm leading-6 text-[#475569]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Funnel graphic + caption */}
            <div className="relative mt-3 w-full max-w-[612px]">
              <Image
                src={`${IMG}/a-funnel.svg`}
                alt=""
                width={612}
                height={204}
                className="h-auto w-full"
                priority={false}
              />
              <FunnelCaption className="absolute left-1/2 top-[22.7%] hidden w-[46%] -translate-x-1/2 sm:flex" />
            </div>
            <FunnelCaption className="mt-4 sm:hidden" />

            {/* Review engine card */}
            <div className="w-full max-w-[400px] overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-center border-b border-[#f1f5f9] bg-[#f8fafc] px-4 pb-[13px] pt-3">
                <span className="mr-3 flex shrink-0 rounded-lg bg-[#0051e4] p-2">
                  <Image
                    src={`${IMG}/a-gear.svg`}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </span>
                <h3 className="font-helvetica-now-display text-lg font-medium leading-7 text-[#050f21] md:text-xl">
                  Read Three Ways Before It&apos;s Trusted
                </h3>
              </div>
              <div className="flex flex-col gap-3 px-3 py-4">
                {REVIEW_LAYERS.map((l) => (
                  <div
                    key={l.title}
                    className="flex items-center rounded-xl border border-[#dbeafe] bg-[#eff6ff]/50 p-[13px]"
                  >
                    <span className="mr-4 flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#bfdbfe] bg-white">
                      <Image
                        src={l.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="size-6"
                      />
                    </span>
                    <span className="font-helvetica-now-display flex min-w-0 flex-col">
                      <span className="text-sm font-bold leading-5 text-[#1e3a8a]">
                        {l.title}
                      </span>
                      <span className="text-xs leading-4 text-[#1d4ed8]/70">
                        {l.body}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neck between review engine and routing decision */}
            <div className="h-[60px] w-[94px] bg-[#bfdbfe]/50" />

            {/* Routing decision */}
            <div className="flex w-full max-w-[448px] flex-col items-center">
              <div className="flex w-full flex-col items-center rounded-2xl border border-[#dbeafe] bg-white p-[21px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                <span className="flex items-center pb-1">
                  <Image
                    src={`${IMG}/a-route.svg`}
                    alt=""
                    width={24}
                    height={24}
                    className="mr-2 size-6 shrink-0"
                  />
                  <span className="font-helvetica-now-display text-lg font-medium leading-7 text-[#050f21] md:text-xl">
                    Certus Decides: Post It, or Flag It
                  </span>
                </span>
                <p className="font-helvetica-now-display max-w-[170px] text-center text-xs leading-4 text-[#686766]">
                  Based on all three checks above
                </p>
              </div>
              {/* Branching arrows */}
              <div className="relative h-16 w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[27.68%]">
                  <Image
                    src={`${IMG}/a-branch-left.svg`}
                    alt=""
                    fill
                    sizes="128px"
                  />
                </div>
                <div className="absolute inset-y-0 right-0 w-[27.68%]">
                  <Image
                    src={`${IMG}/a-branch-right.svg`}
                    alt=""
                    fill
                    sizes="128px"
                  />
                </div>
              </div>
            </div>

            {/* Final outcomes */}
            <div className="mt-3 flex w-full flex-col justify-center gap-8 md:flex-row md:gap-12">
              <div className="flex flex-1 flex-col items-center gap-4">
                <OutcomeCard
                  tone="success"
                  icon={`${IMG}/a-check.svg`}
                  title="Looks Right > Posted"
                  body="Posts straight into your accounting system"
                />
                <Image
                  src={`${IMG}/a-arrow-down-green.svg`}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
                <OutcomeCard
                  tone="success"
                  ringed
                  icon={`${IMG}/a-erp.svg`}
                  title="Your ERP / Accounting System"
                  body="SAP, Oracle, Dynamics & more"
                />
              </div>
              <div className="flex flex-1 flex-col items-center gap-4">
                <OutcomeCard
                  tone="warn"
                  icon={`${IMG}/a-alert.svg`}
                  title="Needs a Closer Look > Flagged"
                  body="Sent to your team to check"
                />
                <Image
                  src={`${IMG}/a-arrow-down-orange.svg`}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
                <OutcomeCard
                  tone="warn"
                  ringed
                  icon={`${IMG}/a-inbox.svg`}
                  title="Sent to Your Team"
                  body="Dashboard + email alert"
                />
              </div>
            </div>
          </div>

          <SectionBody className="text-center">
            No step requires a human unless Certus flags something and the reason
            is always visible.
          </SectionBody>
        </div>
      </div>
    </section>
  )
}
