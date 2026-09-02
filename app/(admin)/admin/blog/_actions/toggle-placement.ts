"use server";

import { prisma } from "@/app/api/lib/prisma";
import { revalidatePath } from "next/cache";

// Placement toggles for the blog list. The delete action lives beside them in
// delete-post.ts; an older duplicate of it in lib/dashboardactions.ts was
// never imported and has been removed.

export async function toggleFeatured(formData: FormData) {
    const id = String(formData.get("id") ?? "");
    if (!id) return;

    const post = await prisma.blogPost.findUnique({
        where: { id },
        select: { isFeatured: true },
    });
    if (!post) return;

    await prisma.blogPost.update({
        where: { id },
        data: { isFeatured: !post.isFeatured },
    });

    revalidatePath("/admin");
    revalidatePath("/blog");
}

export async function toggleSidebar(formData: FormData) {
    const id = String(formData.get("id") ?? "");
    if (!id) return;

    const post = await prisma.blogPost.findUnique({
        where: { id },
        select: { isSidebar: true },
    });
    if (!post) return;

    await prisma.blogPost.update({
        where: { id },
        data: { isSidebar: !post.isSidebar },
    });

    revalidatePath("/admin");
    revalidatePath("/blog");
}
