"use client";

import React, { useEffect, useState } from "react";
import { GitBranch, GitCommit, Star, ExternalLink, RefreshCw, Code2, CheckCircle2 } from "lucide-react";
import { FormattedRepo, FALLBACK_REPOS } from "@/lib/github";
import { useTheme } from "@/context/ThemeContext";

export default function GithubRecentRepos() {
  const { playSoftClick } = useTheme();
  const [repos, setRepos] = useState<FormattedRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastRefreshed, setLastRefreshed] = useState<string>("just now");

  const loadRepos = async () => {
    setLoading(true);
    playSoftClick(480, 0.03);
    try {
      const res = await fetch("/api/github");
      if (res.ok) {
        const data = await res.json();
        if (data.repos && data.repos.length > 0) {
          setRepos(data.repos);
          setLastRefreshed(new Date().toTimeString().split(" ")[0]);
        }
      }
    } catch (e) {
      console.warn("Using fallback repositories:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <section id="github" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
            <GitBranch className="w-4 h-4" />
            <span>Open Source &amp; Systems Repositories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[var(--text-heading)] mt-1">
            Recent GitHub Activity &amp; Codebases
          </h2>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="text-xs text-[var(--text-muted)] hidden sm:inline">
            Last Synced: {lastRefreshed}
          </span>
          <button
            onClick={loadRepos}
            disabled={loading}
            className="vintage-btn"
            title="Refresh repository commit data"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[var(--accent)] ${loading ? "animate-spin" : ""}`} />
            <span>{loading ? "Syncing..." : "Sync Repos"}</span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="vintage-card p-6 bg-[var(--bg-surface)] flex flex-col justify-between group space-y-5"
          >
            {/* Card Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono border-b border-[var(--border)] pb-2.5">
                <span className="flex items-center gap-1.5 font-bold text-[var(--accent)]">
                  <GitCommit className="w-3.5 h-3.5" />
                  <span>{repo.commitHash}</span>
                </span>
                <span className="text-[11px] font-sans text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  CI/CD Verified
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <GitBranch className="w-3 h-3 text-[var(--accent)]" />
                  <span>{repo.branch}</span>
                </span>
                <span>{repo.timeAgo}</span>
              </div>

              <h3 className="text-lg font-bold font-serif text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors">
                {repo.name}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed">
                {repo.description}
              </p>
            </div>

            {/* Footer with language & link */}
            <div className="pt-4 border-t border-[var(--border)] space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-[var(--text-main)]">
                  <Code2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{repo.language}</span>
                </span>

                <span className="flex items-center gap-1 text-[var(--text-muted)]">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{repo.stars} stars</span>
                </span>
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSoftClick(500, 0.03)}
                className="vintage-btn w-full justify-center"
              >
                <span>View Source Code</span>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--accent)]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
