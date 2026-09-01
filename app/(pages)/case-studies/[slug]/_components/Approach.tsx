import { SHELL, SectionBadge } from "../../_components/Ui"
import type { CaseStudyDetailProps } from "@/lib/case-study/types"

function Approach({ caseStudy }: { caseStudy: CaseStudyDetailProps }) {
  const { approach, timeline } = caseStudy
  const hasApproach = (approach?.intro?.length ?? 0) > 0 || (approach?.cards?.length ?? 0) > 0
  const hasTimeline = (timeline?.length ?? 0) > 0

  if (!hasApproach && !hasTimeline) return null

  return (
    <section className={`${SHELL} pb-14 md:pb-16`}>
      {hasApproach && (
        <>
          <SectionBadge label="Our Approach" />

          {approach?.intro && approach.intro.length > 0 && (
            <div className="mt-5 max-w-[730px] space-y-4 text-base leading-[22px] text-[#474747]">
              {approach.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}

          {approach?.cards && approach.cards.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {approach.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#dbeafe] bg-white px-6 py-6"
                >
                  <h3 className="text-lg font-bold leading-6 text-[#050f21]">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-[#474747]">{card.description}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {hasTimeline && (
        <div className={hasApproach ? "mt-12" : ""}>
          <SectionBadge label="Engagement Timeline" />

          <div className="mt-6 flex flex-col divide-y divide-[#e0e3e9] overflow-hidden rounded-[20px] border border-[#e0e3e9] bg-white sm:flex-row sm:divide-x sm:divide-y-0">
            {timeline?.map((phase) => (
              <div key={phase.phase} className="flex-1 px-6 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.6px] text-[#0051e4]">
                  {phase.duration}
                </p>
                <p className="mt-1.5 text-base font-bold leading-[22px] text-[#050f21]">
                  {phase.phase}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Approach
