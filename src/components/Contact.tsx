import { Mail, Phone } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Let's talk" title="Get In Touch" index="08">
      <Reveal className="max-w-2xl">
        <p className="text-base leading-relaxed text-muted">
          I&apos;m open to new opportunities and interesting projects. Feel free to
          reach out via email or connect with me on LinkedIn / GitHub.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
        </div>
        <div className="mt-6 flex gap-6 text-sm">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
