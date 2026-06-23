import type { FC, PropsWithChildren } from "hono/jsx";
import { siteTitle } from "../data";

export const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => (
  <html lang="ja" data-theme="light">
    <head>
      <title>{title ?? siteTitle}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Takahiro SHIMIZU" />
      <meta name="author" content="AnaTofuZ" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/favicon/manifest.json" />

      <link href="/css/main.css" rel="stylesheet" />

      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            'body { font-family: "Noto Sans JP", sans-serif; } .svg-inline--fa { display: inline-block; height: 1em; overflow: visible; vertical-align: -0.125em; }',
        }}
      />
    </head>
    <body class="min-h-screen bg-base-100">{children}</body>
  </html>
);
