
import { prisma } from "@/app/api/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { updatePost } from "@/app/(admin)/admin/blog/_actions/update-post";
import { PostForm } from "@/app/(admin)/admin/blog/_components/post-form";

export const metadata = { title: "Edit post" };
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export default async function EditPostPage({ params }: Props) {
    const { slug } = await params;

    const [post, categories, authors] = await Promise.all([
        prisma.blogPost.findUnique({ where: { slug } }),
        prisma.blogCategory.findMany({
            orderBy: { label: "asc" },
            select: { id: true, label: true },
        }),
        prisma.author.findMany({
            orderBy: { name: "asc" },
            select: { id: true, name: true },
        }),
    ]);

    if (!post) notFound();

    // Bind the slug so the client form's action signature stays (state, formData).
    const updatePostWithSlug = updatePost.bind(null, post.slug);

    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Edit post</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    Editing{" "}
                    <Link href={post.href} className="font-medium underline">
                        /{post.slug}
                    </Link>
                    . The slug stays the same so existing links keep working.
                </p>
            </header>

            <PostForm
                categories={categories}
                authors={authors}
                action={updatePostWithSlug}
                submitLabel="Save changes"
                pendingLabel="Saving…"
                defaultValues={{
                    title: post.title,
                    excerpt: post.excerpt,
                    content: post.content,
                    image: post.image,
                    thumbnailImage: post.thumbnailImage,
                    accent: post.accent,
                    date: post.date,
                    categoryId: post.categoryId,
                    authorId: post.authorId,
                    isFeatured: post.isFeatured,
                    isSidebar: post.isSidebar,
                }}
            />
        </main>
    );
}
