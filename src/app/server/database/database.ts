import Database from "better-sqlite3";
import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

function connect(): BetterSQLite3Database {
    const sqlite = new Database("sqlite.db");
    sqlite.pragma("journal_mode = WAL");
    sqlite.pragma("synchronous = normal");
    sqlite.pragma("temp_store = memory");
    sqlite.pragma("mmap_size = 30000000000");
    sqlite.pragma("page_size = 32768");
    return drizzle(sqlite);
}

async function runMigratation(db: BetterSQLite3Database) {
    migrate(db, { migrationsFolder: "./drizzle" });
}

export { connect, runMigratation };
