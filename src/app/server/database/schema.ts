import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const projects = sqliteTable("projects", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    external_gitlab_id: integer("external_gitlab_id"),
    name: text("name"),
    slug: text("slug"),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" }),
});

const groups = sqliteTable("groups", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    external_gitlab_id: integer("external_gitlab_id"),
    name: text("name"),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" }),
});

const contributors = sqliteTable("contributors", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    external_gitlab_id: integer("external_gitlab_id"),
    fullName: text("full_name"),
    email: text("email"),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" }),
});

export { projects, groups, contributors };
