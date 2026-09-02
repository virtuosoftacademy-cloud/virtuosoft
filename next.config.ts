import type { NextConfig } from "next";

// R2 public host for next/image (safe if the env var is unset or malformed)
const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
let r2Hostname: string | null = null;
try {
  r2Hostname = r2PublicUrl ? new URL(r2PublicUrl).hostname : null;
} catch {
  console.warn("Invalid NEXT_PUBLIC_R2_PUBLIC_URL — R2 host not whitelisted");
}

const nextConfig: NextConfig = {
  serverExternalPackages: ["mariadb", "@prisma/adapter-mariadb"],

  // Hostinger builds with output:"standalone", which ships only the files Next's
  // tracer can follow. `mariadb` resolves through conditional "exports"
  // (./dist/promise.cjs), which the tracer misses — it copied package.json and
  // nothing else, so the driver failed to load at runtime and every Prisma query
  // died with "pool timeout ... active=0 idle=0". Force-copy these packages.
  // The whole chain must be listed: the tracer misses mariadb's transitive
  // deps (iconv-lite, lru-cache, denque) for the same "exports" reason, and
  // each one copied as a bare package.json breaks the require() the moment
  // the driver loads.
  outputFileTracingIncludes: {
    "/**": [
      "./node_modules/mariadb/**/*",
      "./node_modules/@prisma/adapter-mariadb/**/*",
      "./node_modules/@prisma/driver-adapter-utils/**/*",
      "./node_modules/@prisma/debug/**/*",
      "./node_modules/iconv-lite/**/*",
      "./node_modules/safer-buffer/**/*",
      "./node_modules/lru-cache/**/*",
      "./node_modules/denque/**/*",
    ],
  },

  images: {
    remotePatterns: [
      ...(r2Hostname
        ? [
            {
              protocol: "https" as const,
              hostname: r2Hostname,
              pathname: "/**",
            },
          ]
        : []),
      {
        protocol: "https" as const,
        hostname: "*.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;