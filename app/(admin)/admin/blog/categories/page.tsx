import { DeleteCategoryButton } from "@/app/(admin)/admin/blog/categories/_components/delete-category-button";
import { EditCategoryForm } from "@/app/(admin)/admin/blog/categories/_components/edit-category-form";
import { NewCategoryForm } from "@/app/(admin)/admin/blog/categories/_components/new-category-form";
import { prisma } from "@/app/api/lib/prisma";

export const metadata = { title: "Categories" };
export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
    const categories = await prisma.blogCategory.findMany({
        orderBy: { label: "asc" },
        include: { _count: { select: { posts: true } } },
    });

    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Categories</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    Deleting a category moves its posts to &quot;No category&quot; — posts
                    are never deleted from here.
                </p>
            </header>

            <NewCategoryForm />

            <section className="mt-6 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {categories.length === 0 ? (
                    <p className="px-6 py-10 text-center text-neutral-600">
                        No categories yet. Add one above to start organising posts.
                    </p>
                ) : (
                    <ul className="divide-y divide-neutral-100">
                        {categories.map((cat) => (
                            <li
                                key={cat.id}
                                className="flex items-center justify-between gap-4 px-4 py-3"
                            >
                                <div className="flex items-center gap-3">
                                    {/* Display mode shows label + accent exactly as before;
                                        Edit flips the row to inputs with Save/Cancel */}
                                    <EditCategoryForm
                                        id={cat.id}
                                        label={cat.label}
                                        accent={cat.accent}
                                    />
                                    <span className="text-xs text-neutral-500">
                                        {cat._count.posts} post
                                        {cat._count.posts === 1 ? "" : "s"}
                                    </span>
                                </div>
                                <DeleteCategoryButton
                                    id={cat.id}
                                    label={cat.label}
                                    postCount={cat._count.posts}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}