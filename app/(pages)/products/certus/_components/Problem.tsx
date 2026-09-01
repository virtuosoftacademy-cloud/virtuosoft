import Image from "next/image"
import { Eyebrow, SectionBody, SectionTitle, SHELL } from "./Ui"

const capabilities = [
  "Classify & Extract",
  "Validate Business Rules",
  "Detect Anomalies & Fraud",
  "Trigger Approvals",
  "Execute Workflows",
  "Sync Systems",
]

const outcomes = ["Reduce Manual Work", "Improve Control", "Accelerate Operations", "Measurable Outcomes"]

/** Hub-and-spoke inputs feeding the Certus AI core, in `left%, top%` of the 480×531 diagram box. */
const inputs = [
  { icon: "m-plat-email.svg", label: "Email", size: 32, left: 10.42, top: 11.3 },
  { icon: "m-plat-document.svg", label: "Document", size: 30, left: 80.21, top: 7.53 },
  { icon: "m-plat-folder.svg", label: "Folders", size: 30, left: 6.25, top: 41.43 },
  { icon: "m-plat-systems.svg", label: "Systems", size: 32, left: 93.75, top: 37.66 },
]

export default function Problem() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(125.74deg,#f5faff_0.13%,#f6fbff_101%)] py-16 md:py-24">
      {/* Ambient glow — soft radial blur behind the diagram, matches SectionA2's treatment */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-[482px] w-[445px] rounded-full bg-[radial-gradient(closest-side,rgba(140,176,255,0.30)_0%,rgba(205,222,255,0.14)_55%,rgba(255,255,255,0)_100%)]"
      />

      {/* Dot patterns */}
      <div aria-hidden className="pointer-events-none absolute right-[-104px] top-[-9px] hidden md:block">
        <Image
          src="/assets/Images/products/certus/page/a-dots-top.svg"
          alt=""
          width={505}
          height={94}
          className="h-[93.8px] w-[505.05px] max-w-none"
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute bottom-[-6px] left-[calc(50%-248px)] hidden rotate-180 md:block">
        <Image
          src="/assets/Images/products/certus/page/a-dots-bottom.svg"
          alt=""
          width={505}
          height={53}
          className="h-[52.9px] w-[504.72px] max-w-none"
        />
      </div>

      <div className={`${SHELL} relative z-10`}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: platform overview */}
          <div>
            <Eyebrow>The Certus Platform</Eyebrow>
            <SectionTitle
              className="mt-3"
              lead="Certus AI Turns Fragmented Business Information Into"
              accent="Intelligent Business Operations."
            />
            <SectionBody className="mt-3">
              Every organization runs on information, but the information inside them is often
              scattered across emails, files, folders and business systems. Certus brings that
              information together and turns it into structured, actionable business intelligence.
            </SectionBody>

            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-3">
              {capabilities.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[#6b9eff]/40 bg-[#6b9eff]/10 px-3.5 py-2 text-[12.5px] text-[#050f21]"
                >
                  {label}
                </span>
              ))}
            </div>

            <hr className="mt-6 max-w-[620px] border-[#e5e7eb]" />

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              {outcomes.map((label) => (
                <span key={label} className="flex items-center gap-2">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#0051e4]" />
                  <span className="text-[12.5px] font-bold text-[#050f21]">{label}</span>
                </span>
              ))}
            </div>

            <p className="mt-4 text-[11px] font-medium uppercase tracking-[1.2px] text-[#808799]">
              Powered by IDP &middot; Machine Learning &middot; Computer Vision &middot; LLMs &middot; Agentic
              Automation
            </p>
          </div>

          {/* Right: information sources flowing into the Certus AI core */}
          <div className="relative mx-auto aspect-[480/531] w-full max-w-[420px]">
            <svg
              viewBox="0 0 480 531"
              className="pointer-events-none absolute inset-0 size-full"
              aria-hidden
            >
              {inputs.map((input) => (
                <line
                  key={input.label}
                  x1={(input.left / 100) * 480}
                  y1={(input.top / 100) * 531}
                  x2={230}
                  y2={330}
                  stroke="#0051e4"
                  strokeWidth={1.2}
                />
              ))}
              <line x1={230} y1={405} x2={236} y2={475} stroke="#0047c9" strokeWidth={2} />
            </svg>

            {inputs.map((input) => (
              <div
                key={input.label}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                style={{ left: `${input.left}%`, top: `${input.top}%` }}
              >
                <span className="flex size-[60px] items-center justify-center rounded-full bg-[#0051e4] shadow-[0px_6px_16px_0px_rgba(0,81,228,0.3)]">
                  <Image
                    src={`/assets/Images/products/certus/page/${input.icon}`}
                    alt=""
                    width={input.size}
                    height={input.size}
                  />
                </span>
                <span className="text-[11.5px] text-[#090e1b]">{input.label}</span>
              </div>
            ))}

            <div
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              style={{ left: "47.92%", top: "62.14%" }}
            >
              <Image
                src="/assets/Images/products/certus/page/m-plat-core-ring.svg"
                alt=""
                width={150}
                height={150}
                className="absolute"
              />
              <div className="relative size-[110px] overflow-hidden rounded-full">
                <Image
                  src="/assets/Images/products/certus/page/m-plat-core-bg.png"
                  alt=""
                  fill
                  className="object-cover"
                />
                <Image
                  src="/assets/Images/products/certus/page/m-plat-core-mask.png"
                  alt=""
                  width={57}
                  height={52}
                  className="absolute left-1/2 top-[23px] -translate-x-1/2"
                />
                <p className="absolute bottom-[8.5px] left-1/2 -translate-x-1/2 text-[9.5px] font-medium tracking-[1.14px] text-white">
                  CERTUS AI
                </p>
              </div>
            </div>

            <div
              className="absolute flex w-[276px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2.5 rounded-xl border border-[#20e783]/50 bg-[#4dffa6]/20 px-4 py-3.5"
              style={{ left: "49.17%", top: "94.73%" }}
            >
              <Image
                src="/assets/Images/products/certus/page/m-plat-check.svg"
                alt=""
                width={18}
                height={18}
              />
              <p className="text-[13px] font-bold text-[#050f21]">Structured Business Intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
