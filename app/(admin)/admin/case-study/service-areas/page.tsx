
import { prisma } from "@/app/api/lib/prisma";
import { DeleteTaxonomyButton, NewTaxonomyForm } from "@/app/(admin)/admin/case-study/_components/taxonomy-form";
import { createServiceArea, deleteServiceArea } from "@/app/(admin)/admin/case-study/_actions/case-study-actions";

export const metadata = { title: "Service areas" };
export const dynamic = "force-dynamic";

export default async function ServiceAreasPage() {
    const areas = await prisma.serviceArea.findMany({
        orderBy: { label: "asc" },
        include: { _count: { select: { caseStudies: true } } },
    });

    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Service areas</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    Deleting a service area removes the tag from every case study
                    that uses it — case studies themselves are never deleted.
                </p>
            </header>

            <NewTaxonomyForm
                action={createServiceArea}
                label="New service area"
                placeholder="Management Accounts"
            />

            <section className="mt-6 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {areas.length === 0 ? (
                    <p className="px-6 py-10 text-center text-neutral-600">
                        No service areas yet. Add one above.
                    </p>
                ) : (
                    <ul className="divide-y divide-neutral-100">
                        {areas.map((area) => (
                            <li key={area.id} className="flex items-center justify-between gap-4 px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <span className="font-medium text-neutral-900">{area.label}</span>
                                    <span className="text-xs text-neutral-500">
                                        {area._count.caseStudies} case stud{area._count.caseStudies === 1 ? "y" : "ies"}
                                    </span>
                                </div>
                                <DeleteTaxonomyButton
                                    id={area.id}
                                    label={area.label}
                                    usageCount={area._count.caseStudies}
                                    usageNoun="case stud"
                                    detachNote="will lose this tag."
                                    action={deleteServiceArea}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}