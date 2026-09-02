// ============================================================================
// Server action: update a blog post.
// Purpose: updatePost server action for the edit page. Validates with the
//          shared helper, updates the row by slug, recomputes timeAgo from
//          the (possibly changed) date, revalidates the affected pages, and
//          redirects to the live post. The slug itself is never regenerated —
//          changing it would break existing links and bookmarks.
// Type: Server Action ("use server")
// ============================================================================

"use server";

import { prisma } from "@/app/api/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
    type PostFormState,
    parseAndValidatePostForm,
    computeTimeAgo,
    computeReadTime,
} from "@/app/types/types";

export async function updatePost(
    slug: string,
    _prevState: PostFormState,
    formData: FormData
): Promise<PostFormState> {
    // Guard: only a signed-in ADMIN may edit posts.
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return { error: "You must be signed in as an admin to edit posts." };
    }

    // `values` always comes back so a rejection can be re-rendered with the
    // author's edits intact instead of reverting to the stored row.
    const { values, fieldErrors } = parseAndValidatePostForm(formData);
    if (fieldErrors) return { fieldErrors, values };

    try {
        await prisma.blogPost.update({
            where: { slug },
            data: {
                ...values,
                timeAgo: computeTimeAgo(values.date),
                readTime: computeReadTime(values.content),
            },
        });
    } catch (err) {
        console.error("Failed to update post:", err);
        return {
            error: "Could not update the post. Check the server logs and try again.",
            values,
        };
    }

    revalidatePath("/view-page");
    revalidatePath("/blogs");
    revalidatePath(`/blogs/${slug}`);
    redirect(`/blogs/${slug}`);
}