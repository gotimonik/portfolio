# Monik Goti — Portfolio

A personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS, generated from Monik's resume. Includes a light/dark theme switcher and scroll-reveal animations.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

- `src/data/resume.ts` — all resume content (profile, specializations, process/approach, experience, skills, projects, education). Edit this file to update the site's content.
- `src/components/` — one component per section (Hero, About, Specializations, Approach, Experience, Skills, Projects, Education, Contact, Nav, Footer), plus `ThemeProvider`/`ThemeToggle` for dark/light mode and `Reveal` for scroll animations.
- `src/app/page.tsx` — assembles the sections into the homepage.
- `src/app/globals.css` — light + dark color palettes (CSS variables) and global styles.
- `public/profile.jpg` — profile photo used in the hero and nav. `public/resume.pdf` — powers the "Resume" download button.

## Theming

Theme switching is powered by `next-themes`. The toggle button lives in the nav (top right) and persists the user's choice across visits. Color tokens for both themes are defined in `globals.css` under `.dark` and `.light`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

This project is already set up for a zero-config Vercel deployment: a git repo is initialized locally with an initial commit, `.gitignore` excludes `node_modules`/`.next`/`.env*`, and `package.json` pins a compatible Node version (`>=20.9.0`) via `engines`.

1. **Push to GitHub (or GitLab/Bitbucket).**
   Create an empty repo on GitHub, then from this folder:

   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import into Vercel.**
   Go to [vercel.com/new](https://vercel.com/new), sign in, and import the repo. Vercel auto-detects Next.js — no build settings need to change (build command `next build`, output handled automatically).

3. **Set the site URL environment variable.**
   In the Vercel project → Settings → Environment Variables, add:

   ```
   NEXT_PUBLIC_SITE_URL=https://<your-vercel-domain>.vercel.app
   ```

   (Update it again if you attach a custom domain later.) This is used to resolve the Open Graph preview image for link sharing. See `.env.example` for reference.

4. **Deploy.** Vercel builds and deploys automatically on every push to `main`; pull requests get their own preview URLs.

### Don't have a GitHub repo yet?

If you'd rather skip GitHub, the [Vercel CLI](https://vercel.com/docs/cli) can deploy straight from this folder:

```bash
npm i -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```
