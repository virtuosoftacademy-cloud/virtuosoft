import Image, { StaticImageData } from "next/image"
import SectionBadge from "./SectionBadge"
import { caseStudies_Problem, caseStudies_Solution, type CaseStudyPanel } from "@/app/_constant"

import Tick from "@/public/assets/Images/casestudies/tick.svg"
import ProblemVisual from "@/public/assets/Images/casestudies/problem-visual.png"
import SolutionVisual from "@/public/assets/Images/casestudies/solution-visual.png"

function Panel({ panel, visual }: { panel: CaseStudyPanel; visual: StaticImageData }) {
  return (
    <div className="flex h-full flex-col drop-shadow-[0px_4px_4px_rgba(0,0,0,0.07)]">
      <div className="rounded-t-[20px] border border-[#dbeafe] bg-white px-6 py-5 md:px-8">
        <p className="font-helvetica-now-display text-2xl leading-10 text-[#050f21] md:text-[28px]">
          {panel.titleLead}{" "}
          <span className="font-bold text-[#0051e4]">{panel.titleAccent}</span>
        </p>
        <p className="font-helvetica-now-display mt-2 text-base leading-[22px] text-[#474747]">
          {panel.intro}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-5 rounded-b-[20px] border-x border-b border-[#dbeafe] bg-white px-6 pb-8 pt-5 md:px-8">
        <ul className="flex flex-col gap-3">
          {panel.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <Image src={Tick} alt="" className="mt-1 size-[18px] shrink-0" />
              <span className="font-helvetica-now-display text-base leading-[22px] text-[#474747]">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <div className="relative mt-auto aspect-[548/170] w-full overflow-hidden rounded-2xl">
          <Image
            src={visual}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-[rgba(0,81,228,0.2)]" />
        </div>
      </div>
    </div>
  )
}

function ProblemSolution() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
      <SectionBadge label="Customer Success Story" />

      <h2 className="font-helvetica-now-display mt-5 max-w-[766px] text-4xl leading-[1.2] text-[#080e19] md:text-[40px]">
        How Virtuosoft Helped Tarabut Scale Secure{" "}
        <span className="font-bold text-[#0051e4]">Open Banking Across MENA</span>
      </h2>

      <p className="font-helvetica-now-display mt-3 max-w-[730px] text-base leading-[22px] text-[#474747]">
        Virtuosoft partnered with Tarabut, the MENA region&rsquo;s leading open banking platform, to
        scale engineering, QA and DevOps teams for faster delivery and secure financial
        infrastructure.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Panel panel={caseStudies_Problem} visual={ProblemVisual} />
        <Panel panel={caseStudies_Solution} visual={SolutionVisual} />
      </div>
    </section>
  )
}

export default ProblemSolution
