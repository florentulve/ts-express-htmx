"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Also as a component library
const html_1 = __importDefault(require("@kitajs/html"));
function layout({ name, children }) {
    return (html_1.default.createElement("html", { lang: "fr" },
        html_1.default.createElement("head", null,
            html_1.default.createElement("meta", { charset: "UTF-8" }),
            html_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            html_1.default.createElement("title", null, "Hello World"),
            html_1.default.createElement("script", { src: "https://unpkg.com/htmx.org@1.9.5", integrity: "sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO", crossorigin: "anonymous" }),
            html_1.default.createElement("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" }),
            html_1.default.createElement("link", { rel: "stylesheet", href: "/css/style.css" })),
        html_1.default.createElement("body", null,
            html_1.default.createElement("header", { class: "container" },
                html_1.default.createElement("nav", null,
                    html_1.default.createElement("ul", null,
                        html_1.default.createElement("li", null,
                            html_1.default.createElement("strong", null, "Brand"))),
                    html_1.default.createElement("ul", null,
                        html_1.default.createElement("li", null,
                            html_1.default.createElement("a", { href: "#" }, "Link")),
                        html_1.default.createElement("li", null,
                            html_1.default.createElement("a", { href: "#" }, "Link")),
                        html_1.default.createElement("li", null,
                            html_1.default.createElement("a", { href: "#", id: "theme_switcher" }))))),
            html_1.default.createElement("main", { class: "container" },
                html_1.default.createElement("div", null,
                    "Hello ",
                    name),
                children))));
}
exports.default = layout;
