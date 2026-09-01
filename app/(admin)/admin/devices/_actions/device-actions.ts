"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { getDeviceId } from "@/lib/device";

export type DeviceActionState = { success?: string; error?: string };

/**
 * Every action re-checks the session. Middleware gates the /admin pages, but a
 * server action is its own endpoint and must verify the caller itself.
 */
async function requireAdmin() {
    const session = await auth();
    if (session?.user?.role !== "ADMIN" || !session.user.id) return null;
    return session.user;
}

export async function approveDevice(
    _prev: DeviceActionState,
    formData: FormData
): Promise<DeviceActionState> {
    const admin = await requireAdmin();
    if (!admin) return { error: "Not authorised." };

    const id = String(formData.get("id") ?? "");
    if (!id) return { error: "Missing device id." };

    const device = await prisma.device.findUnique({ where: { id } });
    if (!device) return { error: "That device no longer exists." };

    await prisma.device.update({
        where: { id },
        data: { approved: true, approvedAt: new Date(), approvedBy: admin.id },
    });

    revalidatePath("/admin/devices");
    return { success: `Approved ${device.label || "device"}.` };
}

export async function revokeDevice(
    _prev: DeviceActionState,
    formData: FormData
): Promise<DeviceActionState> {
    const admin = await requireAdmin();
    if (!admin) return { error: "Not authorised." };

    const id = String(formData.get("id") ?? "");
    if (!id) return { error: "Missing device id." };

    const device = await prisma.device.findUnique({ where: { id } });
    if (!device) return { error: "That device no longer exists." };

    // Refuse to revoke the device you're currently using — doing so would lock
    // you out mid-session with no way back in if you're the only admin.
    const current = await getDeviceId();
    if (current && device.deviceId === current) {
        return { error: "You cannot revoke the device you're signed in on." };
    }

    await prisma.device.delete({ where: { id } });
    revalidatePath("/admin/devices");
    return { success: `Removed ${device.label || "device"}.` };
}
