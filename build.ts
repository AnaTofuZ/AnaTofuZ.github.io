import { cp, mkdir, writeFile } from "node:fs/promises";
import { readFile } from "node:fs/promises";
import { toSSG } from "hono/ssg";
import postcss from "postcss";
import tailwindcssPlugin from "@tailwindcss/postcss";
import app from "./src/app";

await mkdir("./dist/css", { recursive: true });

const css = await readFile("./src/styles/main.css", "utf-8");
const result = await postcss([tailwindcssPlugin]).process(css, {
  from: "./src/styles/main.css",
  to: "./dist/css/main.css",
});
await writeFile("./dist/css/main.css", result.css);

await toSSG(app, { writeFile, mkdir }, { dir: "./dist" });
await cp("./public", "./dist", { recursive: true, force: true });

console.log("Build complete: dist/");
