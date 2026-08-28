import Image from "next/image"
import { SHELL, Eyebrow, SectionTitle } from "./Ui"

/**
 * Figma 2017:5261 — "Measurable Impact, From Day One".
 * Eyebrow + 40px two-tone H2 over a 3-up grid of glassy metric cards
 * (frosted white gradient, soft blue-grey shadow, big 64px stat).
 */

type Metric = {
  kicker: string
  value: string
  /** Figma paints only the first card's number in blue. */
  valueClassName: string
  title: string
  points: string[]
}

const METRICS: Metric[] = [
  {
    kicker: "UP TO",
    value: "95%",
    valueClassName: "text-[#0041c8]",
    title: "LESS DATA ENTRY",
    points: ["Reduced processing costs", "Less fraud & duplicate payments"],
  },
  {
    kicker: "UP TO",
    value: "90%",
    valueClassName: "text-[#191c1e]",
    title: "FASTER",
    points: ["Faster invoice approvals", "Real-time business insight"],
  },
  {
    kicker: "UP TO",
    value: "99%",
    valueClassName: "text-[#191c1e]",
    title: "READING ACCURACY",
    points: ["Compliance & audit readiness", "Higher operational efficiency"],
  },
]

export default function SectionC1() {
  return (
    <section className="w-full">
      <div className={SHELL}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 items-start">
            <Eyebrow>Business Benefits</Eyebrow>
            {/* Single line in Figma, so the accent rides inside `lead` — passing
                `accent` separately would force SectionTitle's line break. */}
            <SectionTitle
              lead={
                <>
                  Measurable Impact,{" "}
                  <span className="font-bold text-[#0051e4]">From Day One</span>
                </>
              }
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {METRICS.map((metric) => (
              <article
                key={metric.title}
                className="font-helvetica-now-display flex flex-col rounded-[22.562px] border-[0.97px] border-white/95 bg-[linear-gradient(152.49deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.62)_71.429%)] p-[33px] shadow-[0px_0px_29.115px_0px_rgba(52,67,122,0.09)]"
              >
                <div className="flex flex-col gap-2 pb-2">
                  <p className="text-[12px] leading-4 text-[#737688]">
                    {metric.kicker}
                  </p>
                  <p
                    className={`text-5xl font-bold leading-[1.125] md:text-[64px] md:leading-[72px] ${metric.valueClassName}`}
                  >
                    {metric.value}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold leading-8 text-[#191c1e]">
                    {metric.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {metric.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <Image
                          src="/assets/Images/products/certus/page/c-check-circle-blue.svg"
                          alt=""
                          width={14}
                          height={16}
                          className="h-[15.333px] w-[13.333px] shrink-0"
                        />
                        <span className="text-sm leading-6 text-[#474747]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
