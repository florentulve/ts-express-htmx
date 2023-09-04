"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const BaseHtml_1 = __importDefault(require("./components/layout/BaseHtml"));
const app = (0, express_1.default)();
const port = process.env['PORT'] ?? 3000;
app.use((0, helmet_1.default)({
    contentSecurityPolicy: {
        directives: {
            "script-src": ["'self'", "'sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO'"],
            "style-src": ["'self'", "https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css", "'sha256-d7rFBVhb3n/Drrf+EpNWYdITkos3kQRFpB0oSOycXg4='"],
        }
    }
}));
app.use(express_1.default.static(__dirname + "/../../public"));
app.get('/', (req, res) => {
    console.log(req);
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.send((0, BaseHtml_1.default)({ name: "test", children: "" }));
});
function server() {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
exports.server = server;
