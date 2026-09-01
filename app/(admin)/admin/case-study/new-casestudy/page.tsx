

import { prisma } from "@/lib/prisma";
import { createCaseStudy } from "@/app/(admin)/admin/case-study/_actions/case-study-actions";
import { CaseStudyForm } from "@/app/(admin)/admin/case-study/_components/case-study-form";

export const metadata = { title: "New case study" };

export default async function NewCaseStudyPage() {
    // Lookups for the Industry select and Service-areas checkboxes.
    const [industries, serviceAreas] = await Promise.all([
        prisma.industry.findMany({ orderBy: { label: "asc" } }),
        prisma.serviceArea.findMany({ orderBy: { label: "asc" } }),
    ]);

    return (
        <main className="max-w-3xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">New case study</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    The URL slug is generated from the hero title automatically.
                </p>
            </header>
            <CaseStudyForm
                industries={industries}
                serviceAreas={serviceAreas}
                action={createCaseStudy}
                submitLabel="Publish case study"
                pendingLabel="Publishing…"
            />
        </main>
    );
}