import Image from "next/image"
import { SHELL, SectionBadge } from "../../_components/Ui"
import type { CaseStudyDetailProps } from "@/lib/lib-backend/case-study/types"
import { toSafeHtml } from "@/lib/rich-text-html"
import Tick from "@/public/assets/Images/casestudies/tick.svg"

function Situation({ caseStudy }: { caseStudy: CaseStudyDetailProps }) {
  const { summary, situation } = caseStudy
  const hasSituation =
    (situation?.paragraphs?.length ?? 0) > 0 ||
    (situation?.questions?.length ?? 0) > 0 ||
    situation?.closing

  if (!summary && !hasSituation) return null

  return (
    <section className={`${SHELL} py-14 md:py-16`}>
      {summary && (
        <div
          className="max-w-[820px] text-lg leading-8 text-[#050f21] [&_p]:mb-4 [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: toSafeHtml(summary) }}
        />
      )}

      {hasSituation && (
        <div className="mt-10">
          <SectionBadge label="The Situation" />

          <div className="mt-5 max-w-[730px] space-y-4 text-base leading-[22px] text-[#474747]">
            {situation?.paragraphs?.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {situation?.questions && situation.questions.length > 0 && (
            <ul className="mt-6 flex max-w-[730px] flex-col gap-3">
              {situation.questions.map((question) => (
                <li key={question} className="flex items-start gap-3">
                  <Image src={Tick} alt="" className="mt-1 size-[18px] shrink-0" />
                  <span className="text-base leading-[22px] text-[#474747]">{question}</span>
                </li>
              ))}
            </ul>
          )}

          {situation?.closing && (
            <p className="mt-6 max-w-[730px] text-base italic leading-[22px] text-[#474747]">
              {situation.closing}
            </p>
          )}
        </div>
      )}
    </section>
  )
}

export default Situation
