
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { updateCaseStudy } from "@/app/(admin)/admin/case-study/_actions/case-study-actions";
import { CaseStudyForm } from "@/app/(admin)/admin/case-study/_components/case-study-form";
import { caseStudyInclude } from "@/lib/case-study/types";

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
                    industryId: cs.industryId,
                    serviceAreaIds: cs.serviceAreas.map((a) => a.id),
                    summary: cs.summary,
                    situationParagraphs: cs.situationParagraphs,
                    situationQuestions: cs.situationQuestions,
                    situationClosing: cs.situationClosing,
                    challenge: cs.challenge,
                    approachIntro: cs.approachIntro,
                    outcome: cs.outcome,
                    keyResults: cs.keyResults,
                    calloutHeading: cs.calloutHeading,
                    calloutText: cs.calloutText,
                    calloutButtonHref: cs.calloutButtonHref,
                    calloutButtonLabel: cs.calloutButtonLabel,
                    cards: cs.approachCards.map(({ title, description }) => ({ title, description })),
                    timeline: cs.timeline.map(({ phase, duration }) => ({ phase, duration })),
                    services: cs.relatedServices.map(({ label, href }) => ({ label, href })),
                }}
            />
        </main>
    );
}