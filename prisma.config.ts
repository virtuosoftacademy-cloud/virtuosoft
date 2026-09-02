
import "dotenv/config";
import { defineConfig } from "prisma/config";
import { buildDatabaseUrl } from "./app/api/lib/db-config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: buildDatabaseUrl(),
  },
});
