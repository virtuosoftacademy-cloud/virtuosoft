// ============================================================================
// Server action: create a blog post.
// Purpose: createPost server action — UPDATED for the latest setup:
//            - Auth guard INSIDE the action (defense in depth). Middleware
//              protects /admin routes, but server actions are their own
//              endpoints and must verify the caller themselves.
//            - `auth` imported from the colocated auth module in
//              app/api/auth/[...nextauth]/ (via the "@/auth" tsconfig alias;
//              swap for the bracket path if you didn't add the alias).
//            - Prisma client is the shared driver-adapter instance from
//              lib/prisma.ts.
//            - Author is whichever Author record the form's picker sets —
//              independent of the signed-in admin (see prisma/schema.prisma's
//              Author model).
//          Flow: guard -> validate -> slug (reject duplicates) -> insert ->
//                revalidate /blog + /admin -> redirect to the new post.
// Type: Server Action ("use server")
// ============================================================================
"use server";

import { prisma } from "@/app/api/lib/prisma";
import { auth } from "@/auth"; // -> app/api/auth/[...nextauth]/auth.ts via alias
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
    type PostFormState,
    parseAndValidatePostForm,
    slugify,
    computeTimeAgo,
    computeReadTime,
} from "@/app/types/types";

export async function createPost(
    _prevState: PostFormState,
    formData: FormData
): Promise<PostFormState> {
    // ── Guard: only a signed-in ADMIN may create posts ────────────
    // Middleware already gates the /admin PAGES, but this action is an
    // endpoint of its own — never trust that alone.
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return { error: "You must be signed in as an admin to create posts." };
    }

    // ── Validate ──────────────────────────────────────────────────
    // `values` always comes back, so every rejection below can hand the
    // author's own input to the form rather than letting React blank it.
    const { values, fieldErrors } = parseAndValidatePostForm(formData);
    if (fieldErrors) return { fieldErrors, values };

    // ── Slug: generated from the title, must be unique ────────────
    const slug = slugify(values.title);

    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing) {
        return {
            fieldErrors: {
                title: `A post with the slug "${slug}" already exists. Change the title.`,
            },
            values,
        };
    }

    // ── Insert ────────────────────────────────────────────────────
    // authorId comes from `values` (the form's Author picker) — the byline
    // is an independent Author record, not necessarily whoever is signed
    // in writing this post.
    try {
        await prisma.blogPost.create({
            data: {
                ...values,
                slug,
                timeAgo: computeTimeAgo(values.date),
                readTime: computeReadTime(values.content),
                href: `/blogs/${slug}`,
            },
        });
    } catch (err) {
        console.error("Failed to create post:", err);
        return {
            error: "Could not save the post. Check the server logs and try again.",
            values,
        };
    }

    // ── Refresh caches, then land on the live post ────────────────
    revalidatePath("/blogs");
    revalidatePath("/view-page");
    redirect(`/blogs/${slug}`);
}