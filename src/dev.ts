import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import app from "./app";

const server = new Hono();
server.use("/*", serveStatic({ root: "./public" }));
server.route("/", app);

export default {
  port: 3000,
  fetch: server.fetch,
};
