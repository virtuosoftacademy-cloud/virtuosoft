
import { createPost } from "@/app/(admin)/admin/blog/_actions/create-post";
import { PostForm } from "@/app/(admin)/admin/blog/_components/post-form";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "New post" };

export default async function NewPostPage() {
    // Populate the category <select> on first paint — no client fetch.
    const categories = await prisma.blogCategory.findMany({
        orderBy: { label: "asc" },
        select: { id: true, label: true },
    });

    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">New post</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    The slug and link are generated from the title automatically.
                </p>
            </header>

            <PostForm
                categories={categories}
                action={createPost}
                submitLabel="Publish post"
                pendingLabel="Publishing…"
            />
        </main>
    );
}