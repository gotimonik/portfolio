import { Apple } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/resume";

const footerLinks = [
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.appStore, label: "App Store", Icon: Apple },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {footerLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
