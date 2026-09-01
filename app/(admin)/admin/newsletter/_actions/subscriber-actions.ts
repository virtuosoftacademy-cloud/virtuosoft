"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

// Admin-only half of the newsletter feature. The public `subscribe` action
// lives in lib/newsletter/actions.ts, because the footer sign-up form imports
// it and should not reach into the admin tree.

export async function deleteSubscriber(formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return;

    const id = String(formData.get("id") ?? "");
    if (!id) return;

    await prisma.newsletterSubscriber.delete({ where: { id } });
    revalidatePath("/admin/newsletter");
}
