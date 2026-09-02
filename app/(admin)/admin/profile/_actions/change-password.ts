"use server";

import { prisma } from "@/app/api/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { hash, compare } from "bcryptjs";

export type ChangePasswordState = { success?: string; error?: string };

/**
 * Re-checks the session itself. Middleware gates the /admin pages, but a
 * server action is its own endpoint and must verify the caller.
 */
async function requireAdmin() {
    const session = await auth();
    if (session?.user?.role !== "ADMIN" || !session.user.id) return null;
    return session.user;
}

export async function changePassword(
    _prev: ChangePasswordState,
    formData: FormData
): Promise<ChangePasswordState> {
    const admin = await requireAdmin();
    if (!admin) return { error: "Not authorised." };

    const current = String(formData.get("currentPassword") ?? "");
    const next = String(formData.get("newPassword") ?? "");
    const confirm = String(formData.get("confirmPassword") ?? "");

    if (!current || !next) return { error: "Both password fields are required." };
    if (next.length < 12) return { error: "New password must be at least 12 characters." };
    if (next !== confirm) return { error: "New passwords do not match." };

    const user = await prisma.user.findUnique({ where: { id: admin.id } });
    if (!user?.password) return { error: "This account has no password set." };

    if (!(await compare(current, user.password))) {
        return { error: "Current password is incorrect." };
    }

    await prisma.user.update({
        where: { id: admin.id },
        data: { password: await hash(next, 12) },
    });

    revalidatePath("/admin/profile");
    return { success: "Password updated." };
}
