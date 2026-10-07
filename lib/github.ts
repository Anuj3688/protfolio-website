export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  stargazers_count: number;
  language: string | null;
  pushed_at: string;
  updated_at: string;
  topics?: string[];
  default_branch?: string;
}

export interface FormattedRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  pushedAt: string;
  timeAgo: string;
  branch: string;
  commitHash: string;
}

export const FALLBACK_REPOS: FormattedRepo[] = [
  {
    id: 1409202254,
    name: "protfolio-website",
    description: "Production-ready Retro Fintech portfolio built with Next.js App Router, TypeScript, and Progressive Web App (PWA) architecture.",
    url: "https://github.com/Anuj3688/protfolio-website",
    language: "TypeScript",
    stars: 1,
    pushedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    timeAgo: "recently",
    branch: "main",
    commitHash: "27eb114",
  },
  {
    id: 102,
    name: "OmniLedger",
    description: "High-concurrency, ACID-compliant fund transfer service built with Spring Boot and PostgreSQL, featuring a double-entry ledger system and deadlock prevention.",
    url: "https://github.com/Anuj3688/OmniLedger",
    language: "Java",
    stars: 1,
    pushedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    timeAgo: "1d ago",
    branch: "main",
    commitHash: "4c7e8a1",
  },
  {
    id: 103,
    name: "HouseHelpBookingSystem",
    description: "Enterprise booking microservices with Spring Boot RESTful architecture, transactional integrity, and relational data modeling.",
    url: "https://github.com/Anuj3688/HouseHelpBookingSystem",
    language: "Java",
    stars: 1,
    pushedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    timeAgo: "2d ago",
    branch: "main",
    commitHash: "9e1a2f3",
  },
];

export function getSmartDescription(name: string, description: string | null): string {
  if (description && description.trim()) return description;
  const n = name.toLowerCase();
  if (n.includes("protfolio") || n.includes("portfolio")) {
    return "Production-ready Retro Fintech portfolio built with Next.js App Router, TypeScript, and PWA capabilities.";
  }
  if (n.includes("omniledger")) {
    return "High-concurrency, ACID-compliant fund transfer service built with Spring Boot and PostgreSQL, featuring double-entry ledger system.";
  }
  if (n.includes("househelp")) {
    return "Enterprise booking microservices with Spring Boot RESTful architecture, transactional integrity, and relational data modeling.";
  }
  if (n.includes("expence") || n.includes("expense")) {
    return "High-performance expense splitting and debt settlement engine written in Go with concurrency safety.";
  }
  if (n.includes("neetcode")) {
    return "Optimized algorithmic solutions for data structures, dynamic programming, and distributed system problems.";
  }
  return "Backend service repository featuring high-throughput processing, clean architecture, and rigorous validation.";
}

export function formatTimeAgo(isoString: string): string {
  try {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    if (diffMs < 0) return "just now";

    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins < 60) return `${Math.max(1, diffMins)}m ago`;

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours < 24) return `${diffHours}h ago`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 30) return `${diffDays}d ago`;

    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths}mo ago`;
  } catch {
    return "recently";
  }
}

export function generatePseudoHash(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(7, "0").slice(0, 7);
}

export async function fetchTopGitHubRepos(username: string = "Anuj3688"): Promise<FormattedRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "RetroFintechPortfolio/1.0",
  };

  const pat = process.env.GITHUB_PAT;
  if (pat) {
    headers.Authorization = `Bearer ${pat}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=pushed&direction=desc&per_page=10`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}. Falling back to default repos.`);
      return FALLBACK_REPOS;
    }

    const repos: GitHubRepo[] = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      return FALLBACK_REPOS;
    }

    const filtered = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, 3)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: getSmartDescription(repo.name, repo.description),
        url: repo.html_url,
        language: repo.language || (repo.name.toLowerCase().includes("go") ? "Go" : repo.name.toLowerCase().includes("java") ? "Java" : "TypeScript"),
        stars: repo.stargazers_count,
        pushedAt: repo.pushed_at,
        timeAgo: formatTimeAgo(repo.pushed_at),
        branch: repo.default_branch || "main",
        commitHash: generatePseudoHash(repo.name + repo.pushed_at),
      }));

    return filtered.length > 0 ? filtered : FALLBACK_REPOS;
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return FALLBACK_REPOS;
  }
}
