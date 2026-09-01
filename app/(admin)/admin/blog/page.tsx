
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toggleFeatured, toggleSidebar } from "./_actions/toggle-placement";
import { DeletePostButton } from "@/app/(admin)/admin/blog/_components/delete-post-button";

export const metadata = { title: "Dashboard" };

export const dynamic = "force-dynamic";

export default async function PostsPage() {
    // One round of parallel queries: the full post list for the table,
    // plus the three counts for the stat cards.
    const [posts, postCount, categoryCount, featuredCount] = await Promise.all([
        prisma.blogPost.findMany({
            orderBy: { date: "desc" },
            include: { category: { select: { label: true, accent: true } } },
        }),
        prisma.blogPost.count(),
        prisma.blogCategory.count(),
        prisma.blogPost.count({ where: { isFeatured: true } }),
    ]);

    const stats = [
        { label: "Posts", value: postCount },
        { label: "Categories", value: categoryCount },
        { label: "Featured", value: featuredCount },
    ];

    return (
        <main>
            <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold text-neutral-900">Posts</h1>
                    <p className="mt-1 text-sm text-neutral-600">
                        Manage posts, placement, and categories
                    </p>
                </div>
                <Button className="py-4">
                    <Link
                        href="/admin/blog/new-post"
                    >
                        New post
                    </Link>
                </Button>
            </header>

            {/* ── Stat cards ─────────────────────────────────────── */}
            <section className="mb-8 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="rounded-lg border border-neutral-200 bg-white px-4 py-3"
                    >
                        <p className="text-2xl font-semibold text-neutral-900">{s.value}</p>
                        <p className="text-sm text-neutral-500">{s.label}</p>
                    </div>
                ))}
            </section>

            {/* ── Posts table (or empty state) ───────────────────── */}
            <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {posts.length === 0 ? (
                    <div className="px-6 py-12 text-center">
                        <p className="text-neutral-600">No posts yet.</p>
                        <Link
                            href="/admin/new-post"
                            className="mt-2 inline-block text-sm font-medium text-neutral-900 underline"
                        >
                            Write your first post
                        </Link>
                    </div>
                ) : (
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
                            <tr>
                                <th className="px-4 py-3 font-medium">Title</th>
                                <th className="px-4 py-3 font-medium">Category</th>
                                <th className="px-4 py-3 font-medium">Date</th>
                                <th className="px-4 py-3 font-medium">Placement</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {posts.map((post) => (
                                <tr key={post.id} className="hover:bg-neutral-50">
                                    <td className="max-w-xs px-4 py-3">
                                        <Link
                                            href={post.href}
                                            className="block truncate font-medium text-neutral-900 hover:underline"
                                            title={post.title}
                                        >
                                            {post.title}
                                        </Link>
                                        <span className="block truncate text-xs text-neutral-400">
                                            /{post.slug}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        {post.category ? (
                                            <span
                                                className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                                                style={{ backgroundColor: post.category.accent }}
                                            >
                                                {post.category.label}
                                            </span>
                                        ) : (
                                            <span className="text-xs text-neutral-400">—</span>
                                        )}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3 text-neutral-600">
                                        {post.date}
                                    </td>
                                    {/* Placement toggles — each is a one-field form
                                        posting to its toggle server action */}
                                    <td className="px-4 py-3">
                                        <div className="flex gap-1.5">
                                            <form action={toggleFeatured}>
                                                <input type="hidden" name="id" value={post.id} />
                                                <button
                                                    type="submit"
                                                    title="Toggle featured"
                                                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${post.isFeatured
                                                        ? "bg-amber-100 text-amber-800"
                                                        : "bg-neutral-100 text-neutral-400 hover:text-neutral-600"
                                                        }`}
                                                >
                                                    Featured
                                                </button>
                                            </form>
                                            <form action={toggleSidebar}>
                                                <input type="hidden" name="id" value={post.id} />
                                                <button
                                                    type="submit"
                                                    title="Toggle sidebar"
                                                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${post.isSidebar
                                                        ? "bg-sky-100 text-sky-800"
                                                        : "bg-neutral-100 text-neutral-400 hover:text-neutral-600"
                                                        }`}
                                                >
                                                    Sidebar
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link
                                                href={`/admin/blog/${post.slug}/edit`}
                                                className="rounded-md px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100"
                                            >
                                                Edit
                                            </Link>
                                            <DeletePostButton id={post.id} title={post.title} />
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