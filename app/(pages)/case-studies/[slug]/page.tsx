import type { Metadata } from "next"
import { cache } from "react"
import { notFound } from "next/navigation"
import Cta from "@/components/common/Cta"
import { prisma } from "@/lib/prisma"
import { caseStudyInclude, toDetailProps } from "@/lib/lib-backend/case-study/types"
import Hero from "./_components/Hero"
import Situation from "./_components/Situation"
import Challenge from "./_components/Challenge"
import Approach from "./_components/Approach"
import Outcome from "./_components/Outcome"
import Callout from "./_components/Callout"
import MoreCaseStudies from "./_components/MoreCaseStudies"

interface CaseStudyPageProps {
  slug: string
}

// cache() dedupes the lookup between generateMetadata and the page itself;
// the try/catch degrades to a 404 instead of crashing the page (or the
// build's static generation) if the DB call fails — same pattern as
// getBlogData in lib/blog-actions/blogActions.ts.
const getCaseStudy = cache(async (slug: string) => {
  try {
    const row = await prisma.caseStudy.findUnique({
      where: { slug },
      include: caseStudyInclude,
    })
    return row ? toDetailProps(row) : null
  } catch {
    return null
  }
})

export async function generateStaticParams(): Promise<CaseStudyPageProps[]> {
  try {
    const rows = await prisma.caseStudy.findMany({ select: { slug: true } })
    return rows.map((row) => ({ slug: row.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CaseStudyPageProps>
}): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    return { title: "Case Study Not Found | Virtuosoft" }
  }

  return {
    title: `${caseStudy.heroTitle} | Virtuosoft`,
    description: caseStudy.heroSubtitle,
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<CaseStudyPageProps>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <Hero caseStudy={caseStudy} />
      <Situation caseStudy={caseStudy} />
      <Challenge caseStudy={caseStudy} />
      <Approach caseStudy={caseStudy} />
      <Outcome caseStudy={caseStudy} />
      {caseStudy.callout ? <Callout callout={caseStudy.callout} /> : <Cta />}
      <MoreCaseStudies excludeSlug={slug} />
    </>
  )
}
