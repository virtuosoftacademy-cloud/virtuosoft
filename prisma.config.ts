
import "dotenv/config";
import { defineConfig } from "prisma/config";
import { buildDatabaseUrl } from "./lib/db-config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: buildDatabaseUrl(),
  },
});
