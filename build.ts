import { cp, mkdir, writeFile } from "node:fs/promises";
import { toSSG } from "hono/ssg";
import app from "./src/app";

await toSSG(app, { writeFile, mkdir }, { dir: "./dist" });
await cp("./public", "./dist", { recursive: true, force: true });

console.log("Build complete: dist/");
