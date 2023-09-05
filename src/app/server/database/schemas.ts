import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const users = sqliteTable("users", {
    id: integer("id").primaryKey(), // 'id' is the column name
    fullName: text("full_name"),
});

export { users };
