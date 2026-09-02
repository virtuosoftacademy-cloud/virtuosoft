
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";
import { prisma } from "@/app/api/lib/prisma";
import { registerDeviceForLogin, readClientMeta } from "@/app/api/lib/device";
import {
    signInKeys,
    checkKeys,
    recordFailureFor,
    clearAttemptsFor,
} from "@/app/api/lib/rate-limit";
import { authConfig } from "./config";

/**
 * Raised when the password was right but the browser isn't trusted yet.
 * A distinct error type so the sign-in form can say "waiting for approval"
 * instead of the generic "invalid email or password".
 */
export class DevicePendingError extends CredentialsSignin {
    code = "device_pending";
}

/** Raised when too many failed attempts have come from this email or IP. */
export class TooManyAttemptsError extends CredentialsSignin {
    code = "rate_limited";
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                // Optional; only used the first time a browser is seen, so the
                // admin approving it has something friendlier than a UA string.
                deviceName: { label: "Device name", type: "text" },
            },
            async authorize(credentials) {
                // Normalize the email the same way create-admin.ts stores it
                // (lowercased + trimmed), so lookups always match.
                const email = String(credentials?.email ?? "").toLowerCase().trim();
                const password = String(credentials?.password ?? "");
                if (!email || !password) return null;

                // Rate limiting lives HERE rather than in the sign-in server
                // action, because this provider is reachable directly at
                // /api/auth/callback/credentials. A limiter that only guarded
                // the form would be bypassed by posting to that endpoint —
                // which is exactly what an attacker would script.
                const { ip } = await readClientMeta();
                const keys = signInKeys(email, ip);

                const limit = checkKeys(keys);
                if (limit.limited) throw new TooManyAttemptsError();

                const user = await prisma.user.findUnique({ where: { email } });
                // User must exist AND have a password (OAuth-only users can't
                // log in with credentials).
                // Counted as a failure: otherwise guessing addresses is free,
                // and only guessing passwords is throttled.
                if (!user?.password) {
                    recordFailureFor(keys);
                    return null;
                }

                const valid = await compare(password, user.password);
                if (!valid) {
                    recordFailureFor(keys);
                    return null;
                }

                // Correct password — clear the counters before the device check
                // so a run of typos can't leave the account throttled, and so a
                // pending device (password was right) doesn't count against it.
                clearAttemptsFor(keys);

                // Password is correct; now decide whether this browser is one
                // the account has signed in from before. Runs after the password
                // check so an attacker can't probe an account's device list.
                const verdict = await registerDeviceForLogin(
                    user.id,
                    credentials?.deviceName == null
                        ? null
                        : String(credentials.deviceName)
                );
                if (verdict === "pending") throw new DevicePendingError();

                // Only return what the JWT needs — never the password hash.
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],
});