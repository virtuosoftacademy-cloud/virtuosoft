import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

// Keep this list in sync with the matcher in middleware.ts.
const PROTECTED_PREFIXES = ["/admin"];

// Served directly by the middleware for blocked /admin requests.
//
// NextResponse.rewrite() cannot be used here: on Hostinger the app sits behind
// Passenger, and a rewrite makes it issue an HTTP request back to its own public
// origin rather than resolving internally. That fails with
// "Failed to proxy https://<host>/admin/not-found: socket hang up" on every
// unauthenticated hit (crawlers included) and returns a 500. Returning the
// response inline keeps everything in-process.
const NOT_FOUND_HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Page Not Found</title>
<style>
  :root{color-scheme:light dark}
  body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;
       justify-content:center;gap:1rem;text-align:center;padding:2rem;
       font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
       background:#fff;color:#0f172a}
  @media(prefers-color-scheme:dark){body{background:#0b1220;color:#e2e8f0}}
  .code{font-size:.875rem;letter-spacing:.2em;text-transform:uppercase;opacity:.6}
  h1{font-size:clamp(1.75rem,5vw,3rem);margin:0;font-weight:700}
  p{margin:0;max-width:32rem;opacity:.75}
  a{margin-top:1rem;display:inline-block;padding:.75rem 1.5rem;border:1px solid currentColor;
    text-decoration:none;color:inherit;font-weight:600}
</style></head>
<body>
  <p class="code">404</p>
  <h1>Page Not Found</h1>
  <p>The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.</p>
  <a href="/">Back to Home</a>
</body></html>`;

export const authConfig = {
    pages: {
        // Route lives at app/(admin)/auth/signin — "(admin)" is a route group,
        // so it contributes nothing to the URL.
        signIn: "/auth/signin",
    },
    session: {
        // Credentials provider requires JWT sessions — database
        // sessions are not supported with it.
        strategy: "jwt",
    },
    callbacks: {
        // Copy the role onto the token at sign-in…
        jwt({ token, user }) {
            if (user) {
                token.role = (user as { role?: string }).role ?? "USER";
                token.id = user.id;
            }
            return token;
        },
        // …and expose it on the session object.
        session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as "USER" | "ADMIN";
                session.user.id = token.id as string;
            }
            return session;
        },
        // Runs in middleware for every matched request.
        authorized({ auth, request }) {
            const { pathname } = request.nextUrl;
            const isProtected = PROTECTED_PREFIXES.some((p) =>
                pathname.startsWith(p)
            );
            if (!isProtected) return true;
            if (auth?.user?.role === "ADMIN") return true;
            // Hide the admin area from unauthorised visitors — a blocked
            // admin route renders as a plain 404 rather than bouncing to
            // /signin (which would reveal that the route exists at all).
            //
            return new NextResponse(NOT_FOUND_HTML, {
                status: 404,
                headers: {
                    "content-type": "text/html; charset=utf-8",
                    "x-robots-tag": "noindex",
                    "cache-control": "no-store",
                },
            });
        },
    },
    providers: [], // real providers live in auth.ts
} satisfies NextAuthConfig;