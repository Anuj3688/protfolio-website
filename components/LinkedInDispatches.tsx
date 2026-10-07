"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, ArrowUpRight, RefreshCw, Radio } from "lucide-react";
import { LinkedinIcon } from "@/components/BrandIcons";
import { useTheme } from "@/context/ThemeContext";
import { LinkedInDispatch } from "@/lib/linkedin";
import initialFallback from "@/data/linkedin-posts.json";

export default function LinkedInDispatches() {
  const { playSoftClick } = useTheme();
  const [dispatches, setDispatches] = useState<LinkedInDispatch[]>(initialFallback);
  const [source, setSource] = useState<"live_api" | "feed" | "fallback">("fallback");
  const [loading, setLoading] = useState<boolean>(true);
  const [lastSync, setLastSync] = useState<string>("boot");

  const loadDispatches = async () => {
    setLoading(true);
    playSoftClick(470, 0.03);
    try {
      const res = await fetch("/api/linkedin");
      if (res.ok) {
        const data = await res.json();
        if (data.posts && data.posts.length > 0) {
          setDispatches(data.posts);
          setSource(data.source || "fallback");
          setLastSync(new Date().toTimeString().split(" ")[0]);
        }
      }
    } catch (e) {
      console.warn("Using fallback dispatches:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDispatches();
  }, []);

  return (
    <section id="dispatches" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Technical Publications &amp; Writing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[var(--text-heading)] mt-1">
            Engineering Insights &amp; Dispatches
          </h2>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface-alt)] border border-[var(--border)] text-xs text-[var(--text-muted)]">
            <Radio
              className={`w-3 h-3 ${
                source !== "fallback" ? "text-emerald-600 animate-pulse" : "text-amber-600"
              }`}
            />
            <span>
              {source === "live_api"
                ? "LinkedIn Live API"
                : source === "feed"
                ? "LinkedIn Live Feed"
                : "Curated Technical Archive"}
            </span>
          </div>

          <button
            onClick={loadDispatches}
            disabled={loading}
            className="vintage-btn"
            title="Fetch latest LinkedIn dispatches"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[var(--accent)] ${loading ? "animate-spin" : ""}`} />
            <span>{loading ? "Syncing..." : "Sync"}</span>
          </button>
        </div>
      </div>

      {/* Dispatches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dispatches.map((item, index) => (
          <div
            key={item.id}
            className="vintage-card p-6 sm:p-7 bg-[var(--bg-surface)] flex flex-col justify-between group space-y-5"
          >
            {/* Entry Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] border-b border-[var(--border)] pb-2.5">
                <span className="font-semibold text-[var(--accent)]">
                  {item.isLive ? "Live LinkedIn Article" : `Technical Journal #${index + 1}`}
                </span>
                <span>
                  {item.publishedDate} • {item.readTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-serif text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {item.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded bg-[var(--bg-tag)] border border-[var(--border)] text-[var(--text-muted)] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read on LinkedIn Button */}
            <div className="pt-4 border-t border-[var(--border)]">
              <a
                href={item.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSoftClick(510, 0.03)}
                className="vintage-btn w-full justify-center"
              >
                <span>Read Dispatch on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Welcoming Connect Banner for HR, Recruiters, and Engineering Peers */}
      <div className="vintage-card p-6 sm:p-8 bg-[var(--bg-surface-alt)] flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[var(--border)]">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
            <LinkedinIcon className="w-4 h-4" />
            <span>Open Network &amp; Strategic Discussions</span>
          </div>
          <h4 className="text-lg sm:text-2xl font-bold font-serif text-[var(--text-heading)]">
            Looking to scale high-throughput fintech infrastructure?
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl leading-relaxed">
            I enjoy discussing distributed systems trade-offs, transactional idempotency, and
            backend scalability. Reach out on LinkedIn to explore strategic senior opportunities.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/in/anujtiwari2001/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playSoftClick(540, 0.04)}
          className="vintage-btn vintage-btn-primary px-5 py-2.5 text-sm font-semibold shrink-0"
        >
          <LinkedinIcon className="w-4 h-4" />
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
