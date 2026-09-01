
import "dotenv/config";
import { defineConfig } from "prisma/config";
import { buildDatabaseUrl } from "./lib/lib-backend/db-config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: buildDatabaseUrl(),
  },
});
