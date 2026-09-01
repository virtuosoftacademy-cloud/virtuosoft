import { SHELL, SectionBadge } from "../../_components/Ui"
import type { CaseStudyDetailProps } from "@/lib/case-study/types"
import { toSafeHtml } from "@/lib/rich-text-html"

function Challenge({ caseStudy }: { caseStudy: CaseStudyDetailProps }) {
  const html = toSafeHtml(caseStudy.challenge)
  if (!html) return null

  return (
    <section className={`${SHELL} pb-14 md:pb-16`}>
      <SectionBadge label="The Challenge" />

      <div
        className="mt-5 max-w-[820px] text-[#050f21]
          [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-7
          [&_p]:mb-4 [&_p]:text-base [&_p]:leading-[22px] [&_p]:text-[#474747]
          [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5
          [&_li]:mb-2 [&_li]:text-base [&_li]:leading-[22px] [&_li]:text-[#474747]
          [&_strong]:font-bold [&_strong]:text-[#050f21]
          [&>*:first-child]:mt-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  )
}

export default Challenge
