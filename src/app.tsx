import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Layout } from "./components/Layout";
import { redirects } from "./data";
import { Home } from "./pages/Home";

const app = new Hono();

app.use(
  "*",
  jsxRenderer(({ children }) => <Layout>{children}</Layout>, { docType: true }),
);

app.get("/", (c) => c.render(<Home />));

for (const r of redirects) {
  app.get(r.path, (c) =>
    c.html(
      `<!DOCTYPE html>
        <html lang="ja">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="refresh" content="0; url=${r.to}">
          <title>Redirecting to ${r.name}...</title>
          <style>
            body {
              font-family: sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
            }
            a {
              color: #6366f1;
            }
          </style>
        </head>
        <body>
          <p>
            <a href="${r.to}">${r.name}</a> に移動しています...
          </p>
        </body>
      </html>`,
    ),
  );
}

export default app;
