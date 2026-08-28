'use client'
import Image from "next/image"
import SolutionsPhoto from '@/public/assets/Images/home/uk/solutions-photo.png'
import BadgeSparkle from '@/public/assets/Images/home/uk/badge-sparkle.svg'

interface SolutionItem {
  index: string
  titleRegular: string
  titleMedium: string
  description?: string
  tags?: string[]
}

const solutions: SolutionItem[] = [
  {
    index: "01",
    titleRegular: "Artificial",
    titleMedium: " Intelligence",
    description: "Identify high-ROI use cases and define a realistic, measurable AI roadmap.",
    tags: ["Stakeholder discovery", "Value model & KPI definition", "Data readiness assessment"],
  },
  { index: "02", titleRegular: "Software", titleMedium: " Engineering" },
  { index: "03", titleRegular: "Advisory &", titleMedium: " Strategy" },
  { index: "04", titleRegular: "IT", titleMedium: " Governance" },
]

function InnovativeSolutions() {
  return (
    <div className="max-w-7xl mx-auto px-10 my-16 lg:my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-[#f8faff] px-4 py-2">
            <Image src={BadgeSparkle} alt="" className="size-3.5" />
            <span className="font-helvetica-now-display text-primary text-xs font-bold">Purpose-Built Solutions</span>
          </div>
          <h4 className="font-helvetica-now-display mt-5 text-4xl md:text-[40px] leading-[1.2] text-[#050f21]">
            Innovative Solution <span className="text-primary font-bold">Real Results</span>
          </h4>
          <p className="font-helvetica-now-display mt-4 text-base leading-[1.4] text-[#474747] max-w-md">
            From powerful web applications to enterprise systems, we transform your ideas into high-performance digital products.
          </p>
          <div className="relative mt-8 w-full max-w-md aspect-[419/232] rounded-2xl overflow-hidden border border-white shadow-[0px_16px_36px_-10px_rgba(15,23,51,0.16)]">
            <Image src={SolutionsPhoto} alt="Innovative technology solutions" fill className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {solutions.map((item) => (
            <div
              key={item.index}
              className={
                item.description
                  ? "rounded-[22px] px-8 py-6 shadow-[inset_0px_-4px_0px_0px_rgba(129,162,255,0.18),inset_0px_2px_4px_0px_rgba(0,64,240,0.21)]"
                  : "rounded-[22px] px-8 py-6 shadow-[inset_0px_-2px_0px_0px_rgba(129,162,255,0.18),inset_0px_2px_4px_0px_rgba(0,64,240,0.21)]"
              }
              style={{
                backgroundImage:
                  "linear-gradient(175deg, rgba(255,255,255,0.184) 0%, rgba(255,255,255,0.124) 71.4%)",
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <p
                  className={
                    item.description
                      ? "font-helvetica-now-display text-[26px] tracking-[-0.312px] text-[#13161b]"
                      : "font-helvetica-now-display text-[20px] tracking-[-0.2px] text-[#13161b]"
                  }
                >
                  <span className="font-normal">{item.titleRegular}</span>
                  <span className="font-medium">{item.titleMedium}</span>
                </p>
                <span className="font-helvetica-now-display text-black text-base shrink-0">({item.index})</span>
              </div>
              {item.description && (
                <>
                  <p className="font-helvetica-now-display mt-3 text-sm leading-6 text-[#141518]">{item.description}</p>
                  {item.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-helvetica-now-display rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-medium text-[#0c0e11]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InnovativeSolutions
