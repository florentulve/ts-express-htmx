import express, { Request, Response } from 'express';
import helmet from "helmet";
import layout from './components/layout/BaseHtml';

const app = express();
const port = process.env['PORT'] ?? 3000;

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      "script-src": ["'self'", "'sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO'"],
      "style-src": ["'self'", "https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css", "'sha256-d7rFBVhb3n/Drrf+EpNWYdITkos3kQRFpB0oSOycXg4='"],
    }
  }
}));

app.use(express.static(__dirname + "/../../public"));

app.get('/', (req: Request, res: Response) => {
  console.log(req);
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.send(layout({ name: "test", children: "" }));
});

export function server() {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}




