import { Command } from "commander";
import { startServer } from "./server";
import "dotenv/config";
import { setGlobalDispatcher, ProxyAgent } from "undici";
import { getAllProjects } from "./gitlab";

if (process.env["HTTPS_PROXY"]) {
    const dispatcher = new ProxyAgent({ uri: new URL(process.env["HTTPS_PROXY"]).toString() });
    setGlobalDispatcher(dispatcher);
}

const program = new Command();
program.name("XXXXXXXXXXXXXXX").description("XXXXX ").version("XXXX");

program
    .command("serve")
    .description("Start the server")
    .action(() => {
        startServer();
    });

program
    .command("gitlab")
    .description("Start the server")
    .action(() => {
        getAllProjects();
    });

program.parse();
