import { Globe, Smartphone, Star } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects" index="06">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.06}
            className={project.featured ? "h-full sm:col-span-2" : "h-full"}
          >
            <div className="card-hover group flex h-full flex-col rounded-lg border border-border bg-surface p-6 hover:border-accent">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-accent-soft">
                    {project.tagline}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:text-accent">
                    {project.name}
                  </h3>
                </div>
                {project.badge && (
                  <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-accent/30 bg-surface-alt px-3 py-1 text-xs font-medium text-accent-soft">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

              <ul className={`mt-4 grid gap-1.5 ${project.featured ? "sm:grid-cols-2" : ""}`}>
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs text-muted">{project.stack}</p>

                {project.links && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.web && (
                      <a
                        href={project.links.web}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Web App
                      </a>
                    )}
                    {project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                        Google Play
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
