import { SHELL, SectionBadge } from "../../_components/Ui"
import { CaseStudyCard } from "../../_components/ui/CaseStudyCard"
import { getCaseStudyCards, toCard } from "@/lib/casestudy-actions/actions"

async function MoreCaseStudies({ excludeSlug }: { excludeSlug: string }) {
  const rows = await getCaseStudyCards()
  const others = rows.filter((row) => row.slug !== excludeSlug).slice(0, 3)

  if (others.length === 0) return null

  return (
    <section className={`${SHELL} pb-14 md:pb-16`}>
      <SectionBadge label="More Case Studies" />

      <h2 className="mt-5 max-w-2xl text-3xl leading-[1.2] text-[#050f21] md:text-4xl">
        Explore More <span className="font-bold text-[#0051e4]">Success Stories</span>
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {others.map((row) => (
          <CaseStudyCard key={row.id} {...toCard(row)} />
        ))}
      </div>
    </section>
  )
}

export default MoreCaseStudies
