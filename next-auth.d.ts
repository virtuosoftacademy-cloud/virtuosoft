import type { DefaultSession } from "next-auth";

// Augments Auth.js's built-in types with the `role` this app actually reads
// off the session (set from Prisma's User.role in lib/auth/config.ts's jwt/
// session callbacks) and the user id, which DefaultSession otherwise omits.
declare module "next-auth" {
    interface User {
        role?: "USER" | "ADMIN";
    }

    interface Session {
        user: {
            id: string;
            role: "USER" | "ADMIN";
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role?: "USER" | "ADMIN";
        id?: string;
    }
}
