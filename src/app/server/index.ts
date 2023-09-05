import { connect, runMigratation } from "./database/database";
import { users } from "./database/schemas";
import { serve } from "./server";

async function startServer() {
    const db = connect();
    await runMigratation(db);
    serve();
}

export { startServer, users };
