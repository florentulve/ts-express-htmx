import { Command } from "commander";
import { startServer } from "./server";
const program = new Command();
program.name("XXXXXXXXXXXXXXX").description("XXXXX ").version("XXXX");

program
    .command("serve")
    .description("Start the server")
    .action(() => {
        startServer();
    });

program.parse();
