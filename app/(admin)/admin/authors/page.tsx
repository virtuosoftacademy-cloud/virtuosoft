import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/app/api/lib/prisma";
import { Button } from "@/components/ui/button";
import { isOptimizableImageSrc } from "@/app/api/lib/r2";
import { DeleteAuthorButton } from "./_components/delete-author-button";

export const metadata = { title: "Authors" };
export const dynamic = "force-dynamic";

function initialsOf(name: string): string {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join("");
}

export default async function AuthorsPage() {
    const authors = await prisma.author.findMany({
        orderBy: { name: "asc" },
        include: { _count: { select: { posts: true, caseStudies: true } } },
    });

    return (
        <main>
            <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold text-neutral-900">Authors</h1>
                    <p className="mt-1 text-sm text-neutral-600">
                        Bylines credited on posts and case studies — independent of who&apos;s
                        signed in to write them.
                    </p>
                </div>
                <Button className="py-4">
                    <Link href="/admin/authors/new">New author</Link>
                </Button>
            </header>

            <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {authors.length === 0 ? (
                    <div className="px-6 py-12 text-center">
                        <p className="text-neutral-600">No authors yet.</p>
                        <Link
                            href="/admin/authors/new"
                            className="mt-2 inline-block text-sm font-medium text-neutral-900 underline"
                        >
                            Add the first one
                        </Link>
                    </div>
                ) : (
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
                            <tr>
                                <th className="px-4 py-3 font-medium">Author</th>
                                <th className="px-4 py-3 font-medium">Job title</th>
                                <th className="px-4 py-3 font-medium">Credited on</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {authors.map((author) => {
                                const usageCount = author._count.posts + author._count.caseStudies;
                                return (
                                    <tr key={author.id} className="hover:bg-neutral-50">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="relative size-9 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                                                    {author.image ? (
                                                        <Image
                                                            src={author.image}
                                                            alt=""
                                                            fill
                                                            sizes="36px"
                                                            className="object-cover"
                                                            unoptimized={!isOptimizableImageSrc(author.image)}
                                                        />
                                                    ) : (
                                                        <span className="flex size-full items-center justify-center text-xs font-semibold text-neutral-500">
                                                            {initialsOf(author.name)}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="font-medium text-neutral-900">{author.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-neutral-600">
                                            {author.jobTitle ?? <span className="text-neutral-400">—</span>}
                                        </td>
                                        <td className="px-4 py-3 text-xs text-neutral-500">
                                            {author._count.posts} post{author._count.posts === 1 ? "" : "s"} ·{" "}
                                            {author._count.caseStudies} case stud
                                            {author._count.caseStudies === 1 ? "y" : "ies"}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-1">
                                                <Link
                                                    href={`/admin/authors/${author.id}/edit`}
                                                    className="rounded-md px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100"
                                                >
                                                    Edit
                                                </Link>
                                                <DeleteAuthorButton
                                                    id={author.id}
                                                    name={author.name}
                                                    usageCount={usageCount}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </section>
        </main>
    );
}
