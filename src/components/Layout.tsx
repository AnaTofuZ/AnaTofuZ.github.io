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

      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.tailwindcss.com"></script>

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: 'body { font-family: "Noto Sans JP", sans-serif; }',
        }}
      />
    </head>
    <body class="min-h-screen bg-base-100">{children}</body>
  </html>
);
