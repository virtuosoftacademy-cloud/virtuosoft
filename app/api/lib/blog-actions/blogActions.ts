
import { cache } from "react";
import { prisma } from "@/app/api/lib/prisma";
import { coverOf } from "@/app/api/lib/blog-actions/blog-image";
import { blogPosts as staticBlogPosts, type BlogPost } from "@/app/(pages)/blogs/_components";

const blogPostInclude = {
    category: { select: { label: true } },
    author: { select: { name: true, jobTitle: true, bio: true, image: true, linkedIn: true } },
};

type BlogPostRow = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    thumbnailImage: string | null;
    date: string;
    readTime: string;
    content: string;
    category: { label: string } | null;
    author: {
        name: string | null;
        jobTitle: string | null;
        bio: string | null;
        image: string | null;
        linkedIn: string | null;
    } | null;
};

/** "2024-03-15" -> "March 15, 2024", matching the static data's display format. */
function formatDate(iso: string): string {
    const date = new Date(`${iso}T00:00:00`);
    if (Number.isNaN(date.getTime())) return iso;
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/** Prisma BlogPost row (with category + author) -> the BlogPost shape every
 * blog component already renders. */
export function toBlogPost(row: BlogPostRow): BlogPost {
    return {
        id: row.id,
        slug: row.slug,
        title: row.title,
        content: row.content,
        excerpt: row.excerpt,
        Src: coverOf(row),
        date: formatDate(row.date),
        readTime: row.readTime,
        category: row.category?.label ?? "",
        author: row.author?.name ?? "Virtuosoft Team",
        authorRole: row.author?.jobTitle ?? undefined,
        authorBio: row.author?.bio ?? undefined,
        authorImage: row.author?.image ?? undefined,
        authorLinkedIn: row.author?.linkedIn ?? undefined,
    };
}

// cache() dedupes across components in the same request; the try/catch
// degrades to the site's own static posts instead of crashing the page (or
// the build's static generation) if the DB call fails — same pattern as
// getCaseStudyCards in casestudy-actions/actions.ts.
export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
    try {
        const rows = await prisma.blogPost.findMany({
            // isFeatured first so `posts[0]` is always the admin's chosen
            // featured post, matching how the page picks it (`const
            // [featuredPost] = posts`) — same as the old static array,
            // which simply had its featured entry listed first.
            orderBy: [{ isFeatured: "desc" }, { date: "desc" }],
            include: blogPostInclude,
        });
        return rows.length > 0 ? rows.map(toBlogPost) : staticBlogPosts;
    } catch {
        return staticBlogPosts;
    }
});

export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
    try {
        const row = await prisma.blogPost.findUnique({
            where: { slug },
            include: blogPostInclude,
        });
        if (row) return toBlogPost(row);
        // Falls through to the static list too, so a slug from the old
        // static data keeps resolving even once the DB has real posts.
        return staticBlogPosts.find((post) => post.slug === slug) ?? null;
    } catch {
        return staticBlogPosts.find((post) => post.slug === slug) ?? null;
    }
});
