import type { FC } from "hono/jsx";
import { nav, talks } from "../data";

const Nav: FC = () => (
  <nav class="navbar bg-base-200 border-b border-base-300 px-4 lg:px-8">
    <div class="flex gap-4">
      {nav.map((item) => (
        <a
          href={item.url}
          class="font-semibold text-base hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  </nav>
);

const formatDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-");
  return `${year}/${month}/${day}`;
};

export const Talks: FC = () => (
  <>
    <Nav />
    <main class="max-w-5xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6">Talks</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {talks.map((talk) => (
          <div class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md hover:border-primary transition-all">
            <a
              href={talk.url}
              target="_blank"
              rel="noreferrer"
              class="block"
            >
              <figure class="aspect-video overflow-hidden bg-base-200 rounded-t-xl">
                {talk.thumbnail ? (
                  <img
                    src={talk.thumbnail}
                    alt={talk.title}
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div class="w-full h-full flex items-center justify-center p-4">
                    <span class="text-base-content/30 text-sm text-center">{talk.title}</span>
                  </div>
                )}
              </figure>
            </a>
            <div class="card-body p-4 gap-1">
              <h2 class="card-title text-sm font-semibold leading-snug line-clamp-2">
                <a href={talk.url} target="_blank" rel="noreferrer" class="hover:text-primary">
                  {talk.title}
                </a>
              </h2>
              {talk.event && (
                <p class="text-xs font-medium truncate">
                  {talk.eventUrl ? (
                    <a
                      href={talk.eventUrl}
                      target="_blank"
                      rel="noreferrer"
                      class="text-primary hover:underline"
                    >
                      {talk.event}
                    </a>
                  ) : (
                    <span class="text-primary">{talk.event}</span>
                  )}
                </p>
              )}
              <p class="text-xs text-base-content/50 mt-1">
                {formatDate(talk.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
);
