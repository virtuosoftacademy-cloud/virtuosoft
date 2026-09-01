import Image from "next/image"
import Link from "next/link"
import { SHELL, SectionBadge } from "../../_components/Ui"
import type { CaseStudyDetailProps } from "@/lib/lib-backend/case-study/types"
import Tick from "@/public/assets/Images/casestudies/tick.svg"

function Outcome({ caseStudy }: { caseStudy: CaseStudyDetailProps }) {
  const { outcome, keyResults, relatedServices } = caseStudy
  const hasOutcome = (outcome?.length ?? 0) > 0
  const hasKeyResults = (keyResults?.length ?? 0) > 0
  const hasRelatedServices = (relatedServices?.length ?? 0) > 0

  if (!hasOutcome && !hasKeyResults && !hasRelatedServices) return null

  return (
    <section className={`${SHELL} pb-14 md:pb-16`}>
      {(hasOutcome || hasKeyResults) && <SectionBadge label="The Outcome" />}

      {hasOutcome && (
        <div className="mt-5 max-w-[730px] space-y-4 text-base leading-[22px] text-[#474747]">
          {outcome?.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}

      {hasKeyResults && (
        <ul className="mt-6 grid max-w-[820px] gap-3 sm:grid-cols-2">
          {keyResults?.map((result) => (
            <li
              key={result}
              className="flex items-start gap-3 rounded-[14px] border border-[#e0e3e9] bg-white px-4 py-3.5"
            >
              <Image src={Tick} alt="" className="mt-1 size-[18px] shrink-0" />
              <span className="text-sm font-semibold leading-[22px] text-[#050f21]">
                {result}
              </span>
            </li>
          ))}
        </ul>
      )}

      {hasRelatedServices && (
        <div className={hasOutcome || hasKeyResults ? "mt-10" : ""}>
          <p className="text-xs font-bold uppercase tracking-[0.6px] text-[#050f21]">
            Related Services
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {relatedServices?.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="inline-flex items-center rounded-full border border-[#0051e4] px-4 py-2 text-sm font-bold text-[#0051e4] transition-colors hover:bg-[#0051e4] hover:text-white"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Outcome
