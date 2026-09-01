"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { emailKey, isRateLimited, minutesLeft } from "@/lib/rate-limit";

export type LoginState = { error?: string; pendingDevice?: boolean };

function tooManyMessage(email: string): string {
    const mins = minutesLeft(emailKey(email));
    return mins > 0
        ? `Too many attempts. Try again in ${mins} minute(s).`
        : "Too many attempts. Please try again shortly.";
}

export async function login(
    _prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    const email = String(formData.get("email") ?? "").toLowerCase().trim();

    if (!email) return { error: "Invalid email or password." };

    // Fast path only. The counters are recorded and cleared inside authorize()
    // — the provider is also reachable directly at
    // /api/auth/callback/credentials, so the form cannot be the only guard.
    // This check just avoids a pointless bcrypt comparison and gives a precise
    // message; authorize() enforces the same limit by email AND by IP.
    if (isRateLimited(emailKey(email))) {
        return { error: tooManyMessage(email) };
    }

    try {
        await signIn("credentials", {
            email,
            password: formData.get("password"),
            deviceName: formData.get("deviceName"),
            redirectTo: "/admin",
        });
        // Unreachable: on success signIn throws a redirect, caught and
        // rethrown below. Left as the explicit non-redirect return.
        return {};
    } catch (error) {
        if (error instanceof AuthError) {
            const code = (error as AuthError & { code?: string }).code;

            if (code === "rate_limited") {
                return { error: tooManyMessage(email) };
            }

            // A pending device means the password was right, so this isn't a
            // failed attempt — counting it would lock the account out while the
            // admin is still deciding whether to approve the browser.
            if (code === "device_pending") {
                return {
                    pendingDevice: true,
                    error:
                        "This device is not recognised. Your request has been sent " +
                        "to the administrator for approval.",
                };
            }

            // Same message for wrong email and wrong password.
            return { error: "Invalid email or password." };
        }
        // Success path: signIn redirects by throwing — rethrow it.
        throw error;
    }
}
