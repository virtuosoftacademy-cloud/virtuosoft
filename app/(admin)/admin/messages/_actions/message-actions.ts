"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

// Admin-only half of the contact feature. The visitor-facing action that
// creates these rows lives in lib/contact/actions.ts, because the public
// contact form imports it and should not reach into the admin tree.

async function requireAdmin() {
    const session = await auth();
    return session?.user?.role === "ADMIN";
}

export async function setMessageRead(formData: FormData) {
    if (!(await requireAdmin())) return;

    const id = String(formData.get("id") ?? "");
    if (!id) return;

    await prisma.contactMessage.update({
        where: { id },
        data: { isRead: formData.get("read") === "yes" },
    });
    revalidatePath("/admin/messages");
    revalidatePath("/admin");
}

export async function deleteContactMessage(formData: FormData) {
    if (!(await requireAdmin())) return;

    const id = String(formData.get("id") ?? "");
    if (!id) return;

    await prisma.contactMessage.delete({ where: { id } });
    revalidatePath("/admin/messages");
    revalidatePath("/admin");
}
