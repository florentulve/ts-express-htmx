import { connect, runMigratation } from "./database/database";
import { projects, contributors, groups } from "./database/schema";
import { serve } from "./server";

async function startServer() {
    const db = connect();
    await runMigratation(db);
    serve();
}

export { startServer, projects, contributors, groups };
