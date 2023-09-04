// Also as a component library
import html from "@kitajs/html";

export default function layout({ name, children }: html.PropsWithChildren<{ name: string }>) {
    return (
        <html lang="fr">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hello World</title>
                <script
                    src="https://unpkg.com/htmx.org@1.9.5"
                    integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO"
                    crossorigin="anonymous"
                ></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"></link>
                <link rel="stylesheet" href="/css/style.css"></link>
            </head>
            <body>
                <header class="container">
                    <nav>
                        <ul>
                            <li>
                                <strong>Brand</strong>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">Link</a>
                            </li>
                            <li>
                                <a href="#">Link</a>
                            </li>
                            <li>
                                <a href="#" id="theme_switcher"></a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main class="container">
                    <div>Hello {name}</div>
                    {children}
                </main>
            </body>
        </html>
    );
}
