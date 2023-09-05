import Database from "better-sqlite3";
import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

function connect(): BetterSQLite3Database {
    const sqlite = new Database("sqlite.db");
    sqlite.pragma("journal_mode = WAL");
    return drizzle(sqlite);
}

async function runMigratation(db: BetterSQLite3Database) {
    await migrate(db, { migrationsFolder: "./drizzle" });
}

export { connect, runMigratation };
