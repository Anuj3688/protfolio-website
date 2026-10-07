# TASK: Build a Production-Ready Retro Fintech Portfolio Website for Vercel Deployment

## 1. Project Overview & Tech Stack
- **Framework:** Next.js (App Router, latest version) with TypeScript
- **Styling:** Tailwind CSS + custom retro styling (CRT scanlines, phosphor glow, monospace typography, terminal-like borders)
- **Icons:** Lucide React (`lucide-react`)
- **Hosting Target:** Vercel (clean API routes, zero server overhead, optimized caching)

---

## 2. Dynamic Retro Color Theme Engine
Implement a global CSS variable-based retro theme engine with 5 distinct retro color schemes:
1. **Phosphor Green (VT220 / Matrix):** Dark slate/black base (`#0a0f0d`), Neon Green accents (`#00ff66`), Muted mint borders (`#052e16`).
2. **Amber CRT (Bloomberg / DEC VT100):** Dark charcoal base (`#0f0d0a`), Amber/Gold accents (`#ffb000`), Dark bronze borders (`#382405`).
3. **Cyberpunk Cyan (80s Mainframe):** Deep navy base (`#070d18`), Electric Cyan accents (`#00f0ff`), Dark teal borders (`#082f49`).
4. **Commodore Synthwave (Retro Magenta):** Deep plum base (`#120814`), Hot Pink/Magenta accents (`#ff007f`), Deep violet borders (`#3b0736`).
5. **Monochrome Paper White (Old Mac/Solarized Dark):** Dark graphite base (`#121212`), Crisp Silver/White accents (`#e2e8f0`), Slate borders (`#27272a`).

### Theme Switching Behavior:
- **Automatic Rotation (Hourly):** 
  - Compute active theme dynamically based on the current hour: `Math.floor(Date.now() / (1000 * 60 * 60)) % themes.length`.
  - Check/rotate automatically via a timer hook or on initial load if no manual override is active.
- **Manual Selector (Top-Right Nav):**
  - Place a persistent retro badge/button in the top-right corner showing the current active theme name and an icon (e.g., `[ THEME: AMBER-CRT ⇄ ]`).
  - Clicking cycles through the themes sequentially or opens a retro dropdown selector.
  - Persist manual selection in `localStorage` with a reset option `[AUTO: HOURLY]`.

---

## 3. Core Page Architecture & Sections

### A. Terminal Header & Hero Section
- **Header:**
  - Left: Terminal status indicator `[SYSTEM: ONLINE | TPS: 14.2k | UPTIME: 99.999%]`.
  - Right: Theme toggle button and GitHub/LinkedIn/Resume retro links.
- **Hero:**
  - Retro interactive terminal / Bloomberg-style card displaying:
    - Name and Title: Senior Backend Engineer | 4–5 Years Experience in High-Scale Fintech Systems.
    - Mini ASCII banner or styled terminal window.
    - Quick metrics dashboard: "Core Focus: Distributed Systems, Low-Latency Architecture, High-Throughput Transaction Engines, Event-Driven Ledgers".

### B. Fintech Experience Timeline (4–5 Years Track Record)
- Designed like a system execution log or audit ledger.
- Emphasize scale, transactional integrity, and backend performance:
  - High-throughput payment routing & order matching.
  - Distributed transactions (Saga, 2PC, Idempotency, Outbox pattern).
  - Low-latency event streaming (Kafka, RabbitMQ, Redis, PostgreSQL).
  - 99.99% SLA reliability, zero-data-loss ledger designs.
- Interactive tags for tech stack used per role.

### C. Live Dynamic GitHub Projects (Top 3 Recent Commits)
- **Data Fetching:**
  - Create a Next.js route: `app/api/github/route.ts` that fetches `https://api.github.com/users/<GITHUB_USERNAME>/repos?sort=pushed&direction=desc&per_page=10`.
  - Filter out forks (`repo.fork === false`), sort strictly by `pushed_at`, and slice top 3 repositories.
  - Implement Next.js ISR cache (`next: { revalidate: 3600 }`) and accept `process.env.GITHUB_PAT` to prevent rate limiting.
- **Display:**
  - Render as terminal commit cards showing: Repo Name, Language, Stars, Last Commit Timestamp (formatted as "X hours ago"), Description, and `[View Source ->]` terminal button.

### D. Engineering Insights & LinkedIn Dispatches Section
- Provide a curated feed engine (`data/linkedin-posts.json`):
  - Each item includes: `id`, `title`, `summary`, `tags` (e.g., `#SystemDesign`, `#Fintech`, `#DistributedSystems`), `readTime`, `publishedDate`, and direct `linkedInUrl`.
- Rendered as an **Engineering Teletype / System Dispatches** section:
  - Cards styled like confidential technical memos / RFC logs.
  - Action button: `[ READ DISPATCH ON LINKEDIN ↗ ]`.
  - Include an external link prompting visitors to connect on LinkedIn.

### E. Interactive Retro Features
- Optional CRT scanline overlay with a toggle switch `[SCANLINES: ON/OFF]`.
- Subtle blinking cursor `_` on title headers.
- Sound effect toggle or click sound feedback (optional, subtle terminal blip with Web Audio API).

---

## 4. Code Standards & File Structure
Ensure clean project setup:
```text
├── app/
│   ├── api/github/route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── ThemeSwitch.tsx
│   ├── HeroTerminal.tsx
│   ├── FintechExperience.tsx
│   ├── GithubRecentRepos.tsx
│   ├── LinkedInDispatches.tsx
│   └── Footer.tsx
├── context/
│   └── ThemeContext.tsx
├── data/
│   └── linkedin-posts.json
├── lib/
│   └── github.ts
└── tailwind.config.ts