import NextAuth from "next-auth";
import { authConfig } from "@/lib/lib-backend/auth/config";

export const { auth: middleware } = NextAuth(authConfig);

export default middleware;

// middleware.ts
export const config = {
    matcher: ["/admin", "/admin/:path*"],
};

