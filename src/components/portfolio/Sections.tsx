import { useState } from "react";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Download,
  Github,
  Award,
  LineChart,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Globe,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { certifications, contact, projects, skillGroups } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Introduction" title="About Me" />
      <div className="mt-14">
        <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Hello! I'm <strong className="text-foreground">Swanand Dumbre</strong>, a
            Computer Science graduate with a{" "}
            <strong className="text-foreground">B.Sc. in Computer Science</strong> and
            currently pursuing my{" "}
            <strong className="text-foreground">M.Sc. in Computer Science</strong>. I am
            passionate about{" "}
            <strong className="text-foreground">
              Data Analytics, Data Science, and Artificial Intelligence
            </strong>
            , with a strong interest in learning how data can be used to solve real-world
            problems and support better decision-making.
          </p>
          <p>
            I have developed a strong foundation in Python, SQL, NumPy, Pandas,
            Scikit-learn, Matplotlib, Seaborn, HTML, and CSS. My areas of interest include
            data cleaning, data visualization, exploratory data analysis (EDA), machine
            learning, and artificial intelligence.
          </p>
          <p>
            I enjoy continuously learning new technologies, improving my technical skills,
            and exploring data-driven solutions through academic projects and
            self-learning. As an enthusiastic and dedicated learner, I am eager to begin my
            professional journey as a Data Analyst, Data Scientist, or AI/ML Engineer.
          </p>
          <p className="rounded-2xl border border-border bg-surface/60 px-5 py-4 text-sm font-medium text-foreground">
            Currently learning. Continuously building. Always improving.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Certifications({ bare = false }: { bare?: boolean }) {
  return (
    <section
      id="certifications"
      className={
        bare
          ? "mx-auto max-w-6xl px-4 sm:px-6"
          : "relative mx-auto max-w-6xl px-4 py-24 sm:px-6"
      }
    >
      {bare ? null : (
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Certifications and courses will be showcased here."
        />
      )}
      <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${bare ? "" : "mt-14"}`}>
        {certifications.map((item, i) => (
          <Reveal key={i} delay={i * 100}>
            <article className="glass-card grid h-full grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.issuer ?? "Details will be added soon."}
                  {item.date ? ` · ${item.date}` : ""}
                </p>
                {item.highlights?.length ? (
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.url ? (
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm font-medium text-primary hover:underline"
                    >
                      View certificate
                    </a>
                    <a
                      href={item.url}
                      download
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
                    >
                      <Download className="h-3.5 w-3.5" aria-hidden="true" />
                      Download
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const categoryIcons: Record<string, typeof Code2> = {
  "Languages & Query": Code2,
  "Data Libraries": Database,
  "BI & Reporting": BarChart3,
  "Core Practices": LineChart,
  Visualization: Globe,
  "Machine Learning": BrainCircuit,
};

const showcaseTabs = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
] as const;

type ShowcaseTab = (typeof showcaseTabs)[number]["id"];

const tabCaption: Record<ShowcaseTab, string> = {
  projects: `${projects.length} projects · in progress`,
  certificates: `${certifications.length} certificates · growing`,
  tech: `${skillGroups.reduce((n, g) => n + g.items.length, 0)} technologies · daily stack`,
};

export function Showcase() {
  const [tab, setTab] = useState<ShowcaseTab>("projects");

  return (
    <section id="showcase" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-border sm:w-16" />
            <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
              Showcase
            </span>
            <span className="h-px w-10 bg-border sm:w-16" />
          </div>
          <h2 className="mt-6 bg-[linear-gradient(180deg,var(--color-foreground),color-mix(in_oklab,var(--color-foreground)_45%,transparent))] bg-clip-text font-display text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Portfolio Showcase
          </h2>

          <div
            role="tablist"
            aria-label="Showcase categories"
            className="glass-card mx-auto mt-10 inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full p-1.5"
          >
            {showcaseTabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  tab === t.id
                    ? "bg-surface-2 text-foreground shadow-[0_0_30px_-8px_var(--color-primary)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-border" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              {tabCaption[tab]}
            </span>
            <span className="h-px w-8 bg-border" />
          </div>
        </Reveal>
      </div>

      <div className="mt-16">
        {tab === "projects" ? <Projects bare /> : null}
        {tab === "certificates" ? <Certifications bare /> : null}
        {tab === "tech" ? <Skills bare /> : null}
      </div>
    </section>
  );
}

export function Skills({ bare = false }: { bare?: boolean }) {
  return (
    <section
      id="skills"
      className={`mx-auto max-w-6xl px-4 sm:px-6 ${bare ? "" : "py-24"}`}
    >
      {bare ? null : (
        <SectionHeading
          eyebrow="Toolkit"
          title="Technical Skills"
          subtitle="Tools and technologies I use while learning and building."
        />
      )}
      <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${bare ? "" : "mt-14"}`}>
        {skillGroups.map((group, i) => {
          const Icon = categoryIcons[group.category] ?? Sparkles;
          return (
            <Reveal key={group.category} delay={i * 80}>
              <article className="glass-card h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold">{group.category}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Projects({ bare = false }: { bare?: boolean }) {
  return (
    <section
      id="projects"
      className={`mx-auto max-w-6xl px-4 sm:px-6 ${bare ? "" : "py-24"}`}
    >
      {bare ? null : (
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          subtitle="Projects and practical work will be showcased here."
        />
      )}
      <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${bare ? "" : "mt-14"}`}>
        {projects.map((project, i) => (
          <Reveal key={i} delay={i * 90}>
            <article className="glass-card flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="section-grid relative grid h-40 place-items-center border-b border-border bg-surface-2">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    In progress
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {project.tech?.length ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-primary/12 px-2.5 py-1 text-xs text-primary"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {project.github || project.demo ? (
                  <div className="mt-5 flex gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-primary/50"
                      >
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-xs font-semibold text-primary-foreground"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold">{contact.name}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            Built with passion for technology &amp; data.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            © 2026 Swanand Dumbre. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email Swanand"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={contact.phoneHref}
            aria-label="Call Swanand"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}