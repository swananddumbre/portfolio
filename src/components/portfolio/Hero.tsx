import { ArrowRight, Download } from "lucide-react";
import { DataParticles } from "./DataParticles";
import { contact, profileImage, resumeUrl } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div className="section-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[image:var(--gradient-glow)]" />
      <DataParticles className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">
            {contact.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-gradient sm:text-2xl">
            Transforming Data into Meaningful Business Insights.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            I am an M.Sc. Computer Science student passionate about Data Analytics, Data
            Science, and Artificial Intelligence. I enjoy transforming raw data into
            actionable insights using modern analytical tools and programming languages. My
            goal is to build intelligent data-driven solutions that solve real-world
            business problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              View My Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-surface-2"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-full bg-[image:var(--gradient-accent)] opacity-25 blur-3xl" />
          <div className="relative overflow-hidden rounded-full border border-border bg-surface p-2 shadow-[var(--shadow-elevated)]">
            <img
              src={profileImage}
              alt="Swanand Dumbre, Data Science enthusiast, professional headshot"
              width={1200}
              height={1200}
              sizes="(min-width: 1024px) 28rem, 90vw"
              decoding="async"
              fetchPriority="high"
              loading="eager"
              className="aspect-square w-full rounded-full object-cover object-center [image-rendering:auto]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}