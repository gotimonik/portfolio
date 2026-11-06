export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#specializations", label: "Focus" },
  { href: "#approach", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const profile = {
  name: "Monik Goti",
  title: "Full Stack Developer",
  subtitle: "React · TypeScript · Node.js · Firebase · GCP",
  location: "Gujarat, India",
  email: "gotimonik@gmail.com",
  phone: "+91 8128313138",
  linkedin: "https://linkedin.com/in/monikgoti",
  github: "https://github.com/gotimonik",
  appStore: "https://apps.apple.com/in/developer/monik-goti/id6819157610",
  yearsExperience: "7+",
  photo: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  availability: "Available for freelance & full-time work",
  focusAreas: ["Full Stack Web Apps", "Payments & Billing", "AI-Powered Products", "Independent Products"],
  summary: `Results-driven Full Stack Developer with 7+ years of experience designing, building, and maintaining scalable, responsive web applications end to end. I work across the stack — from pixel-perfect, accessible React interfaces down to the API design, database schema, and cloud infrastructure that supports them — and I care as much about how a product feels to use as I do about how it holds up in production.`,
  extendedSummary: `Over the course of my career I've moved from pure frontend work into full-stack ownership, which means I'm usually the person translating a business requirement into a working, secure, production-grade feature rather than just a component. That's included building Stripe payment workflows end to end — subscriptions, one-time payments, proration, and webhook-driven state reconciliation — as well as real-time systems using WebSockets and streaming APIs so users see live data without polling. I've designed push notification infrastructure and a scalable transactional email pipeline (built on Twilio and SendGrid) tuned for high deliverability, and I've integrated AI-powered features using the OpenAI/ChatGPT APIs, Google's Vertex AI, and LangGraph to orchestrate multi-step, stateful agent workflows rather than single-shot prompts. Whatever the feature, the throughline is the same: build it to survive contact with real users, real traffic, and real edge cases — with security, performance, and maintainability treated as requirements, not afterthoughts.`,
};

export type Specialization = {
  icon: "payments" | "realtime" | "ai" | "email" | "notifications" | "cloud";
  title: string;
  description: string;
};

export const specializations: Specialization[] = [
  {
    icon: "payments",
    title: "Payments & Billing",
    description:
      "End-to-end Stripe integrations — subscriptions, one-time charges, proration, and webhook-driven reconciliation — built for correctness under retries, disputes, and edge-case billing states.",
  },
  {
    icon: "realtime",
    title: "Real-Time Systems",
    description:
      "WebSocket-based live updates and streaming API consumption for interfaces that need to reflect changing data instantly, without relying on inefficient polling.",
  },
  {
    icon: "ai",
    title: "AI-Powered Features",
    description:
      "Production integrations of OpenAI/ChatGPT and Google Vertex AI, with LangGraph used to orchestrate multi-step, stateful agent workflows beyond simple prompt/response calls.",
  },
  {
    icon: "email",
    title: "Email Infrastructure",
    description:
      "Scalable transactional and automated email pipelines built on Twilio and SendGrid, designed and tuned for high deliverability at volume.",
  },
  {
    icon: "notifications",
    title: "Push Notification Systems",
    description:
      "Notification infrastructure spanning scheduling, targeting, and delivery — built to keep users informed without becoming noise.",
  },
  {
    icon: "cloud",
    title: "Cloud & Data",
    description:
      "Comfortable operating in Google Cloud Platform and Firebase, including BigQuery-backed reporting, with an eye toward cost, scalability, and observability.",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2018 — Present",
    summary:
      "Independent full-stack engineering for international clients, owning projects from initial requirements through deployment and support.",
    points: [
      "Develop and deploy production web applications for international clients using React and Node.js, owning the project from architecture through deployment.",
      "Collaborate directly with clients — often non-technical stakeholders — to translate business requirements into concrete technical solutions and realistic delivery plans.",
      "Design and implement responsive, accessible UI components alongside performance optimizations (code-splitting, memoization, asset optimization) for a faster, smoother user experience.",
      "Deliver business-critical integrations including Stripe payment workflows, real-time features over WebSockets, transactional email pipelines, and AI-powered functionality using OpenAI and Vertex AI APIs.",
      "Manage the full development lifecycle solo where needed: requirements, technical design, implementation, testing, deployment, and post-launch iteration.",
    ],
    stack: ["React", "Node.js", "TypeScript", "Stripe", "WebSockets", "Firebase", "GCP"],
  },
  {
    company: "Tagline Infotech",
    role: "React.js Developer",
    period: "2017 — 2018",
    summary:
      "Frontend engineering for client projects, focused on modular architecture and secure API integration.",
    points: [
      "Built modular and scalable frontend components using React and Redux, establishing patterns that were reused across multiple client codebases.",
      "Integrated RESTful APIs and implemented secure user authentication flows, including token handling and protected routing.",
      "Worked closely with backend developers to ensure smooth, well-contracted integration between frontend and backend services.",
    ],
    stack: ["React", "Redux", "REST APIs", "JavaScript"],
  },
  {
    company: "RV Technolabs",
    role: "Senior Frontend Developer",
    period: "2016 — 2017",
    summary:
      "Led frontend delivery across multiple concurrent client projects, mentoring quality through review and planning.",
    points: [
      "Led frontend development for multiple client projects simultaneously using JavaScript and React, balancing competing deadlines and priorities.",
      "Delivered pixel-perfect UI implementations closely aligned with client design guidelines and brand standards.",
      "Participated actively in sprint planning and code reviews, helping raise overall project and code quality across the team.",
    ],
    stack: ["JavaScript", "React", "HTML5", "CSS3"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: ["React", "Vue", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "jQuery", "Bootstrap", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Nest.js", "Express.js"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitLab", "Bitbucket", "Azure", "Postman", "Swagger", "VS Code", "JIRA", "Trello", "Asana"],
  },
  {
    category: "Cloud",
    items: ["Google Cloud Platform (GCP)", "Firebase", "BigQuery"],
  },
  {
    category: "Integrations & Practices",
    items: ["Stripe", "Twilio", "SendGrid", "OpenAI / ChatGPT", "Vertex AI", "LangGraph", "WebSockets", "REST APIs", "Agile/Scrum"],
  },
];

export type Project = {
  name: string;
  stack: string;
  tagline: string;
  description: string;
  highlights: string[];
  featured?: boolean;
  badge?: string;
  links?: { web?: string; playStore?: string; appStore?: string };
};

export const projects: Project[] = [
  {
    name: "Cricket Score Counter",
    stack: "Web App & Android App",
    tagline: "Self-built product — live cricket scoring, web, Google Play & App Store",
    featured: true,
    badge: "5.0★ on Google Play · 5000+ installs",
    description:
      "An independent product I designed, built, and shipped end to end: a free live cricket scoring tool for street, club, school, and society matches. Score ball-by-ball, track runs, wickets, overs, and extras in real time, and share a live match link so teammates and spectators can follow along from anywhere — no login required to get started.",
    highlights: [
      "Ball-by-ball scoring with automatic run rate, partnerships, and batting/bowling stats.",
      "Instant live match-link sharing for teammates and spectators to follow along in real time.",
      "Optional login to save matches, resume half-finished games, and sync player rosters across browsers and devices.",
      "Shipped as a web app and native mobile apps on Google Play and the App Store, rated 5.0★ on Google Play by local cricket players and organizers.",
    ],
    links: {
      web: "https://cricket-score-counter.com",
      playStore: "https://play.google.com/store/apps/details?id=com.cricketscorecounter.mobile",
      appStore: "https://apps.apple.com/in/app/cricket-score-counter/id6819157368",
    },
  },
  {
    name: "MandalHisab",
    stack: "Next.js 16, TypeScript, MongoDB Atlas, Capacitor, Vercel",
    tagline: "Self-built product — Mandal finance app, web, Google Play & App Store",
    description:
      "A financial management platform for Mandals, trusts, societies, and community organizations — replacing paper registers and spreadsheets with one transparent system for member contributions (hapta), savings, loans, donations, expenses, and reports. Also includes a private Personal Hisab money book for individual users.",
    highlights: [
      "Multi-tenant organizations with admin, manager, and member roles, platform-admin approval, and an append-only audit log.",
      "Double-entry ledger, gap-free receipt numbering, and reversal-only corrections — financial records are never deleted.",
      "Interest engine (simple, compound, flat, reducing-balance), member loans (upad), withdrawal vouchers, and a cash book.",
      "12 reports with CSV export, including trial balance and balance sheet, plus automated due-date reminders via daily cron jobs.",
    ],
    links: {
      web: "https://mandal-hisab-frontend.vercel.app",
      playStore: "https://play.google.com/store/apps/details?id=com.mandalhisab.app",
      appStore: "https://apps.apple.com/in/app/mandalhisab-bachat-khata/id6827958501",
    },
  },
  {
    name: "Happy Kids Academy",
    stack: "Next.js 16, React 19, TypeScript, Zustand, Capacitor",
    tagline: "Self-built product — preschool learning app, web, Google Play & App Store",
    description:
      "A modern, accessible, offline-capable learning app for young children, rebuilt for the web from an original Android app and packaged for Android and iOS with Capacitor. Covers 13 learning categories — letters, numbers, math facts, shapes, colors, animals, birds, fruits, vegetables, vehicles, body parts, and Gujarati and Hindi alphabets.",
    highlights: [
      "Quizzes, games, writing practice, and a rewards system to keep kids engaged.",
      "Parent dashboard with progress charts and a study coach.",
      "Spoken pronunciation via the Web Speech API, audio chimes, and haptic feedback.",
      "Works offline as a PWA, with progress saved locally — no account needed.",
    ],
    links: {
      web: "https://happy-kids-academy.vercel.app",
      playStore: "https://play.google.com/store/apps/details?id=com.happykids.academy",
      appStore: "https://apps.apple.com/in/app/happy-kids-academy-abc-123/id6820455448",
    },
  },
  {
    name: "Insight Timer",
    stack: "React, Node, Stripe, GCP, BigQuery, Twilio, SendGrid",
    tagline: "SaaS platform, internal tooling & marketplace payments",
    description:
      "Contributed to Insight Timer's SaaS product and internal web tooling, focused on the systems that keep the marketplace running and users engaged: payments, notifications, and communications.",
    highlights: [
      "Built push notification workflows to drive engagement without overwhelming users.",
      "Implemented Stripe marketplace APIs handling multi-party payments and payout logic.",
      "Designed a transactional email pipeline on Twilio and SendGrid for reliable, high-deliverability messaging.",
      "Worked with BigQuery for reporting and data-driven decisions on GCP infrastructure.",
    ],
  },
  {
    name: "PromoPrep",
    stack: "React, Postman, Swagger, Git",
    tagline: "Marketing collaboration tool",
    description:
      "A collaboration platform for marketing teams to plan and execute campaigns together, replacing scattered spreadsheets and email threads with one shared workflow.",
    highlights: [
      "Delivered live in-app notifications so teams stay in sync as plans change.",
      "Built calendar-based campaign workflows for scheduling and coordination.",
      "Implemented file-sharing integration for creative assets and briefs.",
    ],
  },
  {
    name: "Eyedog",
    stack: "React, Node.js, MongoDB, Loopback",
    tagline: "Indoor navigation for accessibility",
    description:
      "A human-centered indoor navigation system designed with accessibility as the core requirement, not an add-on — helping users navigate complex indoor spaces confidently.",
    highlights: [
      "Designed real-time map data handling for accurate, up-to-date indoor positioning.",
      "Built the experience around accessibility-first interaction patterns.",
      "Used Loopback and MongoDB to model and serve navigation data efficiently.",
    ],
  },
  {
    name: "BCE System",
    stack: "React, Postman, Swagger, Git",
    tagline: "E-learning platform for teachers",
    description:
      "An e-learning application that gives teachers the tools to create, assign, and manage lessons for their students in one modular, easy-to-use system.",
    highlights: [
      "Built modular lesson components that teachers could mix and match per class.",
      "Implemented assignment workflows connecting lessons to students.",
      "Integrated and documented APIs using Postman and Swagger for maintainability.",
    ],
  },
  {
    name: "Bartleby",
    stack: "React, Postman, Swagger, Git",
    tagline: "Online academic help platform",
    description:
      "Led the frontend implementation for an academic help platform connecting students with support resources, from UI design through API integration.",
    highlights: [
      "Owned UI design and frontend architecture for the platform.",
      "Integrated backend APIs and managed sprint planning for frontend delivery.",
      "Balanced fast iteration with a clean, maintainable component structure.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  field: string;
  school: string;
  year: string;
  score: string;
};

export const education: EducationItem[] = [
  { degree: "MCA", field: "Master of Computer Applications", school: "SGVU University", year: "2020", score: "8.00 / 10 CGPA" },
  { degree: "BCA", field: "Bachelor of Computer Applications", school: "Sutex Bank College, Surat", year: "2018", score: "8.20 / 10 CGPA" },
  { degree: "HSC", field: "Higher Secondary Certificate", school: "GSEB, Gujarat", year: "2015", score: "84.53%" },
  { degree: "SSC", field: "Secondary School Certificate", school: "GSEB, Gujarat", year: "2013", score: "81.02%" },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: "discover" | "build" | "ship" | "support";
};

export const process: ProcessStep[] = [
  {
    step: "01",
    icon: "discover",
    title: "Discover",
    description:
      "Start by understanding the business problem, not just the feature request — clarifying goals, constraints, and what success actually looks like before writing code.",
  },
  {
    step: "02",
    icon: "build",
    title: "Design & Build",
    description:
      "Architect the solution with scalability and maintainability in mind, then build it iteratively with clean, well-documented, testable code.",
  },
  {
    step: "03",
    icon: "ship",
    title: "Ship",
    description:
      "Deploy with confidence — proper environments, monitoring, and rollback plans — so launches are routine, not stressful.",
  },
  {
    step: "04",
    icon: "support",
    title: "Support & Iterate",
    description:
      "Stay engaged after launch: monitor real usage, fix what surfaces, and iterate based on actual feedback rather than assumptions.",
  },
];

export type QuickFact = {
  label: string;
  value: string;
};

export const quickFacts: QuickFact[] = [
  { label: "Location", value: profile.location },
  { label: "Experience", value: `${profile.yearsExperience} years` },
  { label: "Availability", value: "Open to new projects" },
  { label: "Works best as", value: "Full stack / remote" },
];
