import { readFile } from "node:fs/promises";
import tailwindcssPlugin from "@tailwindcss/postcss";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import postcss from "postcss";
import app from "./app";

const server = new Hono();

server.get("/css/main.css", async (c) => {
  const css = await readFile("./src/styles/main.css", "utf-8");
  const result = await postcss([tailwindcssPlugin]).process(css, {
    from: "./src/styles/main.css",
  });
  return c.text(result.css, 200, { "Content-Type": "text/css" });
});

server.use("/*", serveStatic({ root: "./public" }));
server.route("/", app);

export default {
  port: 3000,
  fetch: server.fetch,
};
