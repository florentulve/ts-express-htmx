CREATE TABLE `contributors` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`external_gitlab_id` integer,
	`full_name` text,
	`email` text,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `groups` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`external_gitlab_id` integer,
	`name` text,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`external_gitlab_id` integer,
	`name` text,
	`slug` text,
	`updated_at` integer
);
