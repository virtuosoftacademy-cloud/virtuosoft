
import { prisma } from "@/app/api/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { updateCaseStudy } from "@/app/(admin)/admin/case-study/_actions/case-study-actions";
import { CaseStudyForm } from "@/app/(admin)/admin/case-study/_components/case-study-form";
import { caseStudyInclude } from "@/app/api/lib/case-study/types";

export const metadata = { title: "Edit case study" };
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export default async function EditCaseStudyPage({ params }: Props) {
   const { slug } = await params;

    const [cs, industries, serviceAreas] = await Promise.all([
        prisma.caseStudy.findUnique({ where: { slug }, include: caseStudyInclude }),
        prisma.industry.findMany({ orderBy: { label: "asc" } }),
        prisma.serviceArea.findMany({ orderBy: { label: "asc" } }),
    ]);
    if (!cs) notFound();

    const updateWithSlug = updateCaseStudy.bind(null, cs.slug);

    return (
        <main className="max-w-3xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Edit case study</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    Editing{" "}
                    <Link href={`/case-study/${cs.slug}`} className="font-medium underline">
                        /case-studies/{cs.slug}
                    </Link>
                    . The slug stays the same so existing links keep working.
                </p>
            </header>

           <CaseStudyForm
                industries={industries}
                serviceAreas={serviceAreas}
                action={updateWithSlug}
                submitLabel="Save changes"
                pendingLabel="Saving…"
                defaultValues={{
                    heroTitle: cs.heroTitle,
                    heroSubtitle: cs.heroSubtitle,
                    heroImage: cs.heroImage,
                    thumbnailImage: cs.thumbnailImage,
                    logoImage: cs.logoImage,
                    liveSiteUrl: cs.liveSiteUrl,
                    industryId: cs.industryId,
                    serviceAreaIds: cs.serviceAreas.map((a) => a.id),
                    heroTags: cs.heroTags,
                    summaryHeadingLead: cs.summaryHeadingLead,
                    summaryHeadingAccent: cs.summaryHeadingAccent,
                    summaryIntro: cs.summaryIntro,
                    problemTitleLead: cs.problemTitleLead,
                    problemTitleAccent: cs.problemTitleAccent,
                    problemIntro: cs.problemIntro,
                    problemPoints: cs.problemPoints,
                    solutionTitleLead: cs.solutionTitleLead,
                    solutionTitleAccent: cs.solutionTitleAccent,
                    solutionIntro: cs.solutionIntro,
                    solutionPoints: cs.solutionPoints,
                    impactNote: cs.impactNote,
                    heroStats: cs.heroStats.map(({ icon, value, label }) => ({ icon, value, label })),
                    impactRows: cs.impactRows.map(({ icon, label, before, after }) => ({ icon, label, before, after })),
                }}
            />
        </main>
    );
}