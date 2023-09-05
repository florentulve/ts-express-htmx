import type { Config } from "drizzle-kit";

export default {
    schema: "./src/app/server/database/schema.ts",
    out: "./drizzle",
} satisfies Config;
