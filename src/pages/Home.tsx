import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcase,
  faDiagramProject,
  faGamepad,
  faGears,
  faLink,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import type { FC, PropsWithChildren } from "hono/jsx";
import { FontAwesomeIcon } from "../components/FontAwesomeIcon";
import {
  careerTimeline,
  hobbies,
  links,
  nav,
  profile,
  projects,
  skills,
} from "../data";

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

const ProfileCard: FC = () => (
  <div class="card bg-base-200 shadow-md">
    <div class="card-body items-center text-center py-8 gap-3">
      <div class="avatar">
        <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={profile.photo} alt={profile.handle} />
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-bold">{profile.name}</h1>
        <p class="text-base font-medium">{profile.nameEn}</p>
        <p class="text-base-content/60 font-medium">{profile.handle}</p>
        <p class="text-sm text-base-content/50 mt-1">{profile.location}</p>
      </div>
      <div class="flex gap-1 mt-1">
        {profile.socials.map((s) => (
          <a
            href={s.url}
            class="btn btn-ghost btn-sm btn-circle text-xl"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={s.icon} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Section: FC<
  PropsWithChildren<{
    title: string;
    icon: IconDefinition;
    defaultOpen?: boolean;
  }>
> = ({ title, icon, defaultOpen = false, children }) => (
  <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-xl">
    <input type="checkbox" checked={defaultOpen} />
    <div class="collapse-title font-semibold text-base flex items-center gap-2">
      <FontAwesomeIcon icon={icon} class="text-primary w-5 h-5" />
      {title}
    </div>
    <div class="collapse-content text-sm">{children}</div>
  </div>
);

const AboutMe: FC = () => (
  <Section title="About Me" icon={faUser} defaultOpen>
    <p class="pt-1">山梨県出身のWebアプリケーションエンジニア。</p>
    <p class="pt-1">大学は沖縄、新卒で京都と点々としました。</p>
    <p class="pt-1">現在は山梨に戻ってきて甲府からリモートワークしています。</p>
  </Section>
);

export const Home: FC = () => (
  <>
    <Nav />
    <main class="max-w-5xl mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <div class="w-full md:w-64 md:flex-shrink-0 md:sticky md:top-6">
          <ProfileCard />
        </div>

        <div class="flex-1 flex flex-col gap-3">
          <AboutMe />
          <Section title="Career" icon={faBriefcase}>
            <ul class="timeline timeline-vertical pt-2">
              {careerTimeline.map((item, index) => (
                <li>
                  {index > 0 && <hr class="bg-base-300" />}
                  <div class="timeline-start text-xs text-base-content/60 text-right whitespace-nowrap pr-2">
                    {item.period}
                  </div>
                  <div class="timeline-middle">
                    {item.type === "work" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5 text-primary"
                      >
                        <title>Work</title>
                        <path
                          fill-rule="evenodd"
                          d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.32.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                          clip-rule="evenodd"
                        />
                        <path d="M3 15.055v-.188a9.333 9.333 0 006 .918 9.333 9.333 0 006-.918v.188c0 1.313-.996 2.397-2.3 2.543a41.293 41.293 0 01-7.4 0C3.996 17.452 3 16.368 3 15.055z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5 text-secondary"
                      >
                        <title>Education</title>
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    )}
                  </div>
                  <div class="timeline-end timeline-box mb-2">
                    {item.url ? (
                      <a
                        href={item.url}
                        class="font-semibold link link-hover"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <p class="font-semibold">{item.title}</p>
                    )}
                    <p class="text-xs text-base-content/60 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  {index < careerTimeline.length - 1 && (
                    <hr class="bg-base-300" />
                  )}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Projects" icon={faDiagramProject}>
            <div class="pt-1 space-y-3">
              {projects.map((p) => (
                <div>
                  <a
                    href={p.url}
                    class="link link-primary font-medium"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.name}
                  </a>
                  <p class="ml-3 mt-0.5 text-base-content/70">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Skills" icon={faGears}>
            <div class="pt-2 space-y-2">
              {skills.map((s) => (
                <div class="flex items-center gap-4">
                  <span class="w-16 font-medium">{s.name}</span>
                  <progress
                    class="progress progress-primary flex-1"
                    value={s.percent}
                    max="100"
                  ></progress>
                  <span class="text-base-content/50 w-10 text-right">
                    {s.percent}%
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Hobbies" icon={faGamepad}>
            <ul class="pt-1 space-y-1">
              {hobbies.map((h) => (
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  {h}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Links" icon={faLink}>
            <div class="pt-1 space-y-3">
              {links.map((l) => (
                <div>
                  <a
                    href={l.url}
                    class="link link-primary font-medium"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.name}
                  </a>
                  <p class="ml-3 mt-0.5 text-base-content/60">
                    {l.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </main>
  </>
);
