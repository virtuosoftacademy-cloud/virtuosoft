// ============================================================================
// Admin screen: case-study industries taxonomy.
// Purpose: Industry management at /industries — same pattern as blog
//          categories: add form, list with case-study counts, delete
//          (case studies are detached to "No industry", never deleted).
// Type: Server Component (async, force-dynamic)
// ============================================================================
import { prisma } from "@/app/api/lib/prisma";
import { DeleteTaxonomyButton, NewTaxonomyForm } from "@/app/(admin)/admin/case-study/_components/taxonomy-form";
import { createIndustry, deleteIndustry } from "@/app/(admin)/admin/case-study/_actions/case-study-actions";

export const metadata = { title: "Industries" };
export const dynamic = "force-dynamic";

export default async function IndustriesPage() {
    const industries = await prisma.industry.findMany({
        orderBy: { label: "asc" },
        include: { _count: { select: { caseStudies: true } } },
    });

    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Industries</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    Deleting an industry moves its case studies to &quot;No
                    industry&quot; — case studies are never deleted from here.
                </p>
            </header>

            <NewTaxonomyForm
                action={createIndustry}
                label="New industry"
                placeholder="Property & Real Estate"
            />

            <section className="mt-6 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {industries.length === 0 ? (
                    <p className="px-6 py-10 text-center text-neutral-600">
                        No industries yet. Add one above.
                    </p>
                ) : (
                    <ul className="divide-y divide-neutral-100">
                        {industries.map((ind) => (
                            <li key={ind.id} className="flex items-center justify-between gap-4 px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <span className="font-medium text-neutral-900">{ind.label}</span>
                                    <span className="text-xs text-neutral-500">
                                        {ind._count.caseStudies} case stud{ind._count.caseStudies === 1 ? "y" : "ies"}
                                    </span>
                                </div>
                                <DeleteTaxonomyButton
                                    id={ind.id}
                                    label={ind.label}
                                    usageCount={ind._count.caseStudies}
                                    usageNoun="case stud"
                                    detachNote='will be moved to "No industry".'
                                    action={deleteIndustry}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}