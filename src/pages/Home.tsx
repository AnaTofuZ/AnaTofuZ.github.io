import type { FC, PropsWithChildren } from "hono/jsx";
import {
  about,
  education,
  experiences,
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
            <i class={s.icon}></i>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Section: FC<
  PropsWithChildren<{ title: string; icon: string; defaultOpen?: boolean }>
> = ({ title, icon, defaultOpen = false, children }) => (
  <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-xl">
    <input type="checkbox" checked={defaultOpen} />
    <div class="collapse-title font-semibold text-base flex items-center gap-2">
      <i class={`fas ${icon} text-primary w-5 text-center`}></i>
      {title}
    </div>
    <div class="collapse-content text-sm">{children}</div>
  </div>
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
          <Section title="About Me" icon="fa-user" defaultOpen>
            <p class="pt-1">{about}</p>
          </Section>

          <Section title="Experiences" icon="fa-briefcase">
            <div class="pt-1 space-y-4">
              {experiences.map((exp) => (
                <div>
                  <h3 class="font-semibold text-base">{exp.role}</h3>
                  <div class="ml-3 mt-1 space-y-1">
                    {exp.entries.map((e) => (
                      <div class="flex flex-wrap gap-x-2 text-sm">
                        <span class="text-base-content/60">{e.period}</span>
                        <span class="text-base-content/40">·</span>
                        <a
                          href={e.url}
                          class="link link-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {e.company}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Education" icon="fa-graduation-cap">
            <div class="pt-1 space-y-3">
              {education.map((e) => (
                <div>
                  <h3 class="font-semibold text-base">{e.degree}</h3>
                  <p class="ml-3 text-sm text-base-content/60">
                    {e.period} · {e.school}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Projects" icon="fa-project-diagram">
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

          <Section title="Skills" icon="fa-cogs">
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

          <Section title="Hobbies" icon="fa-gamepad">
            <ul class="pt-1 space-y-1">
              {hobbies.map((h) => (
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  {h}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Links" icon="fa-link">
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
