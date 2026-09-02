import { prisma } from "@/app/api/lib/prisma";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteTestimonialButton } from "./_components/delete-testimonial-button";

export const metadata = { title: "Testimonials" };
export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
    const testimonials = await prisma.testimonial.findMany({
        orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });

    return (
        <main>
            <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold text-neutral-900">Testimonials</h1>
                    <p className="mt-1 text-sm text-neutral-600">
                        Shown in the &quot;Client Success Stories&quot; carousel on the home page.
                        The site falls back to its placeholder quotes until at least one is added
                        here.
                    </p>
                </div>
                <Button className="py-4">
                    <Link href="/admin/testimonials/new">New testimonial</Link>
                </Button>
            </header>

            <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {testimonials.length === 0 ? (
                    <div className="px-6 py-12 text-center">
                        <p className="text-neutral-600">No testimonials yet — the home page shows its placeholder quotes.</p>
                        <Link
                            href="/admin/testimonials/new"
                            className="mt-2 inline-block text-sm font-medium text-neutral-900 underline"
                        >
                            Add the first one
                        </Link>
                    </div>
                ) : (
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
                            <tr>
                                <th className="px-4 py-3 font-medium">Quote</th>
                                <th className="px-4 py-3 font-medium">Name</th>
                                <th className="px-4 py-3 font-medium">Rating</th>
                                <th className="px-4 py-3 font-medium">Order</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {testimonials.map((t) => (
                                <tr key={t.id} className="hover:bg-neutral-50">
                                    <td className="max-w-sm px-4 py-3">
                                        <p className="line-clamp-2 text-neutral-800">{t.quote}</p>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3">
                                        <p className="font-medium text-neutral-900">{t.name}</p>
                                        <p className="text-xs text-neutral-500">{t.role}</p>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3">
                                        <div className="flex gap-0.5">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`size-3.5 ${i < t.rating ? "fill-amber-400 text-amber-400" : "fill-none text-neutral-300"}`}
                                                />
                                            ))}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3 text-neutral-600">{t.order}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link
                                                href={`/admin/testimonials/${t.id}/edit`}
                                                className="rounded-md px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100"
                                            >
                                                Edit
                                            </Link>
                                            <DeleteTestimonialButton id={t.id} name={t.name} />
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
