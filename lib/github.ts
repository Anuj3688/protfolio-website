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
    id: 101,
    name: "omni-ledger-engine",
    description: "High-throughput distributed immutable double-entry ledger with Saga orchestration, transactional outbox, and zero-loss audit stream.",
    url: "https://github.com/anujtiwari/omni-ledger-engine",
    language: "Go",
    stars: 142,
    pushedAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    timeAgo: "3 hours ago",
    branch: "main",
    commitHash: "7f8b9e1",
  },
  {
    id: 102,
    name: "low-latency-order-router",
    description: "Lock-free LMAX Disruptor order matching & payment routing gateway. Sub-4ms P99 latency with zero-copy serialization.",
    url: "https://github.com/anujtiwari/low-latency-order-router",
    language: "Java",
    stars: 98,
    pushedAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
    timeAgo: "18 hours ago",
    branch: "master",
    commitHash: "3a4c5d6",
  },
  {
    id: 103,
    name: "fintech-saga-orchestrator",
    description: "Distributed transaction coordinator supporting 2PC fallbacks, idempotency keys, and automated compensation for bank settlement rails.",
    url: "https://github.com/anujtiwari/fintech-saga-orchestrator",
    language: "TypeScript",
    stars: 76,
    pushedAt: new Date(Date.now() - 1000 * 60 * 60 * 42).toISOString(),
    timeAgo: "2 days ago",
    branch: "main",
    commitHash: "9e1a2f3",
  },
];

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

export async function fetchTopGitHubRepos(username: string = "anujtiwari"): Promise<FormattedRepo[]> {
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
        description: repo.description || "Production-grade backend service and distributed systems repository.",
        url: repo.html_url,
        language: repo.language || "TypeScript",
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
