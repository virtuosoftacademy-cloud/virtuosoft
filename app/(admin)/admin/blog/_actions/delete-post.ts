
"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth"; // -> app/api/auth/[...nextauth]/auth.ts via alias
import { revalidatePath } from "next/cache";

export async function deletePost(formData: FormData) {
    // Guard: server actions are endpoints of their own — middleware
    // protecting the pages is not enough.
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return;

    const id = String(formData.get("id") ?? "");
    if (!id) return;

    await prisma.blogPost.delete({ where: { id } });

    revalidatePath("/view-page");
    revalidatePath("/blogs");
}
