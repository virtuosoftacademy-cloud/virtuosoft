
import { prisma } from "@/app/api/lib/prisma";
import Link from "next/link";
import { DeleteCaseStudyButton } from "@/app/(admin)/admin/case-study/_components/delete-case-study-button";
import { Button } from "@/components/ui/button";
export const metadata = { title: "Case studies" };
export const dynamic = "force-dynamic";

export default async function ViewCaseStudiesPage() {
    const studies = await prisma.caseStudy.findMany({
        orderBy: { updatedAt: "desc" },
        include: {
            industry: { select: { label: true } },
            _count: { select: { approachCards: true, timeline: true } },
        },
    });

    return (
        <main>
            <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold text-neutral-900">Case studies</h1>
                    <p className="mt-1 text-sm text-neutral-600">
                        Manage the case studies shown at /case-studies.
                    </p>
                </div>
                <Button>
                    <Link href="/admin/case-study/new-casestudy">
                        New case study
                    </Link>
                </Button>
            </header>

            <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {studies.length === 0 ? (
                    <div className="px-6 py-12 text-center">
                        <p className="text-neutral-600">No case studies yet.</p>
                        <Link href="/admin/case-study/new-casestudy"
                            className="mt-2 inline-block text-sm font-medium text-neutral-900 underline">
                            Write your first case study
                        </Link>
                    </div>
                ) : (
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
                            <tr>
                                <th className="px-4 py-3 font-medium">Title</th>
                                <th className="px-4 py-3 font-medium">Industry</th>
                                <th className="px-4 py-3 font-medium">Content</th>
                                <th className="px-4 py-3 font-medium">Updated</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {studies.map((cs) => (
                                <tr key={cs.id} className="hover:bg-neutral-50">
                                    <td className="max-w-xs px-4 py-3">
                                        <Link href={`/case-studies/${cs.slug}`}
                                            className="block truncate font-medium text-neutral-900 hover:underline"
                                            title={cs.heroTitle}>
                                            {cs.heroTitle}
                                        </Link>
                                        <span className="block truncate text-xs text-neutral-400">/{cs.slug}</span>
                                    </td>
                                    <td className="px-4 py-3 text-neutral-600">
                                        {cs.industry?.label ?? <span className="text-neutral-400">—</span>}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3 text-xs text-neutral-500">
                                        {cs._count.approachCards} cards · {cs._count.timeline} phases
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3 text-neutral-600">
                                        {cs.updatedAt.toISOString().slice(0, 10)}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={`/admin/case-study/${cs.slug}/edit`}
                                                className="rounded-md px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100">
                                                Edit
                                            </Link>
                                            <DeleteCaseStudyButton id={cs.id} title={cs.heroTitle} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </main>
    );
}