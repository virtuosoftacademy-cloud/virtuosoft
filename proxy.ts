import NextAuth from "next-auth";
import { authConfig } from "./app/api/lib/auth/config";

export const { auth: middleware } = NextAuth(authConfig);

export default middleware;

// middleware.ts
export const config = {
    matcher: ["/admin", "/admin/:path*"],
};

