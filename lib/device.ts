// Server-only: uses next/headers, which throws if imported from a Client
// Component. Not enforced by the "server-only" package as that isn't a
// dependency here.
import { cookies, headers } from "next/headers";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";

// A browser is identified by a random id in an httpOnly cookie rather than a
// fingerprint: fingerprints change on browser updates and are easy to spoof,
// whereas a cookie the client cannot read or forge is both stabler and simpler.
export const DEVICE_COOKIE = "nx_device";
const ONE_YEAR = 60 * 60 * 24 * 365;

/** Existing device id for this browser, or null if it has never been issued one. */
export async function getDeviceId(): Promise<string | null> {
    return (await cookies()).get(DEVICE_COOKIE)?.value ?? null;
}

/** Reads the current device id, minting and setting one if absent. */
export async function ensureDeviceId(): Promise<string> {
    const jar = await cookies();
    const existing = jar.get(DEVICE_COOKIE)?.value;
    if (existing) return existing;

    const id = randomUUID();
    jar.set(DEVICE_COOKIE, id, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: ONE_YEAR,
    });
    return id;
}

/** Best-effort client details, recorded so an admin can recognise a device. */
export async function readClientMeta() {
    const h = await headers();
    const forwarded = h.get("x-forwarded-for");
    return {
        userAgent: h.get("user-agent")?.slice(0, 500) ?? null,
        // x-forwarded-for is a comma-separated chain; the first entry is the client.
        ip: (forwarded ? forwarded.split(",")[0] : h.get("x-real-ip"))?.trim() ?? null,
    };
}

/** Longest device label we store; the rest is trimmed off rather than rejected. */
export const DEVICE_LABEL_MAX = 60;

export type DeviceVerdict = "trusted" | "bootstrapped" | "pending";

/**
 * Decides whether the browser making this request may complete a sign-in, and
 * records it either way. Call only after the password has been verified, so a
 * failed attempt never reveals which devices an account trusts.
 *
 * The first device a user ever signs in from is trusted automatically —
 * otherwise the very first login would have nobody to approve it. That rule
 * doubles as the way out of a lockout: remove every device from the Devices
 * page and the next successful sign-in re-trusts whatever browser is used.
 */
export async function registerDeviceForLogin(
    userId: string,
    label: string | null
): Promise<DeviceVerdict> {
    const deviceId = await ensureDeviceId();
    const meta = await readClientMeta();
    const cleanLabel = label?.trim().slice(0, DEVICE_LABEL_MAX) || null;

    const existing = await prisma.device.findUnique({
        where: { userId_deviceId: { userId, deviceId } },
    });

    if (existing) {
        // Touch it either way: an admin looking at a pending row wants to know
        // the person is still trying, not just when they first tried.
        await prisma.device.update({
            where: { id: existing.id },
            data: {
                lastSeenAt: new Date(),
                ip: meta.ip,
                userAgent: meta.userAgent,
                // Don't let a later attempt overwrite a label an admin has seen.
                label: existing.label ?? cleanLabel,
            },
        });
        return existing.approved ? "trusted" : "pending";
    }

    const isFirstDevice = (await prisma.device.count({ where: { userId } })) === 0;

    await prisma.device.create({
        data: {
            deviceId,
            userId,
            label: cleanLabel,
            ip: meta.ip,
            userAgent: meta.userAgent,
            approved: isFirstDevice,
            approvedAt: isFirstDevice ? new Date() : null,
            // Left null for the bootstrap device: no admin made this decision.
            approvedBy: null,
        },
    });

    return isFirstDevice ? "bootstrapped" : "pending";
}

/** Devices for a user, pending first so anything awaiting a decision is obvious. */
export function listDevices(userId: string) {
    return prisma.device.findMany({
        where: { userId },
        orderBy: [{ approved: "asc" }, { lastSeenAt: "desc" }],
    });
}

/** Condenses a UA string to something readable in a table. */
export function describeUserAgent(ua: string | null): string {
    if (!ua) return "Unknown device";
    const browser =
        /Edg\//.test(ua) ? "Edge" :
        /OPR\//.test(ua) ? "Opera" :
        /Chrome\//.test(ua) ? "Chrome" :
        /Safari\//.test(ua) ? "Safari" :
        /Firefox\//.test(ua) ? "Firefox" : "Browser";
    const os =
        /Windows/.test(ua) ? "Windows" :
        /Android/.test(ua) ? "Android" :
        /iPhone|iPad|iOS/.test(ua) ? "iOS" :
        /Mac OS X|Macintosh/.test(ua) ? "macOS" :
        /Linux/.test(ua) ? "Linux" : "Unknown OS";
    return `${browser} on ${os}`;
}
