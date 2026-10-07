"use client";

import React, { useState } from "react";
import {
  Compass,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Cpu,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  Mail,
  Phone,
} from "lucide-react";
import { LinkedinIcon } from "@/components/BrandIcons";
import { useTheme } from "@/context/ThemeContext";

interface WorkbenchTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export default function HeroTerminal() {
  const { playSoftClick } = useTheme();
  const [activeTab, setActiveTab] = useState<string>("skills");

  const tabs: WorkbenchTab[] = [
    {
      id: "skills",
      label: "Technical Skills & Toolchain",
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-xs uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Core Engineering Capabilities (From Production Experience)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Languages &amp; Core
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                Java, Python, SQL, Node.js, Express.js, React.js
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Frameworks &amp; Design
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                Spring Boot, Dropwizard, FastAPI, System Design, Scalable Architecture, REST APIs
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Messaging &amp; Streaming
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                Apache Kafka, RabbitMQ, Event-Driven Architecture, Queue Saturation Defense
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Databases &amp; Observability
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                PostgreSQL, MongoDB, Azure Cosmos DB, Redis, Grafana, Foxtrot, Docker, CI/CD
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "operational",
      label: "Operational Excellence",
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-xs uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Tech Lead &amp; SME Charter at Share.Market by PhonePe</span>
          </div>
          <div className="p-4 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)] space-y-2">
            <p className="text-[var(--text-main)] leading-relaxed">
              Leading the <strong>Operational Excellence</strong> pod to eliminate service bottlenecks,
              stabilize onboarding workflows, and improve real-time observability across high-scale fintech systems.
            </p>
            <ul className="space-y-1.5 text-xs text-[var(--text-muted)] pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Restructured asynchronous acknowledgment &amp; backoff strategies to prevent queue saturation in Kafka &amp; RabbitMQ</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Engineered Grafana dashboards with Foxtrot alerting, elevating failure visibility from 10% to 90%</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Built fail-safe manual fallback mechanisms to ensure 100% business continuity during external API instability</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "automation",
      label: "ETL & Data Automation",
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Financial Data Integrity &amp; Validation at Hexaware</span>
          </div>
          <div className="p-4 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)] space-y-2">
            <p className="text-[var(--text-main)] leading-relaxed">
              Led deep RCA (Root Cause Analysis) on high-impact system failures and built automated data validation
              pipelines that eliminated operational discrepancies.
            </p>
            <ul className="space-y-1.5 text-xs text-[var(--text-muted)] pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Automated ETL data processing pipelines saving 10,000+ hours of manual operational effort</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Constructed automated validation frameworks that drove reconciliation errors down to near-zero</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Accelerated downstream reporting decision-making visibility by 50%</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "philosophy",
      label: "Leadership & Mindset",
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Team Mentorship &amp; Production Resiliency</span>
          </div>
          <div className="p-4 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)] space-y-2.5">
            <p className="text-[var(--text-main)] leading-relaxed">
              &ldquo;Reliability is built through disciplined code reviews, thoughtful telemetry, and proactive
              system hardening. Scaling 100%+ while driving down customer ticket ratios is the true mark of backend craftsmanship.&rdquo;
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
                <strong className="block text-[var(--accent)]">Pod Leadership</strong>
                <span className="text-[var(--text-muted)] text-[11px]">Led 3-engineer pod defining roadmaps and architectural standards</span>
              </div>
              <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
                <strong className="block text-[var(--accent)]">Resiliency Patterns</strong>
                <span className="text-[var(--text-muted)] text-[11px]">Circuit breakers, exponential backoff, dead-letter queues</span>
              </div>
              <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
                <strong className="block text-[var(--accent)]">Observability First</strong>
                <span className="text-[var(--text-muted)] text-[11px]">Sub-second alerts and granular metrics reduce MTTR by 80%</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-14 space-y-10">
      {/* Hero Header Card */}
      <div className="vintage-card p-6 sm:p-10 md:p-12 relative overflow-hidden bg-[var(--bg-surface)]">
        {/* Subtle compass watermark */}
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none select-none hidden lg:block">
          <Compass className="w-72 h-72 text-[var(--accent)]" />
        </div>

        <div className="relative z-10 space-y-6 max-w-4xl">
          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-surface-alt)] border border-[var(--border)] rounded-full text-xs font-semibold text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
            <span>BACKEND ENGINEER • 4 YEARS EXPERIENCE IN DISTRIBUTED SYSTEMS</span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif text-[var(--text-heading)] tracking-tight leading-[1.1]">
              Anuj Tiwari
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[var(--accent)]">
              Backend Engineer specializing in Distributed Systems &amp; Event-Driven Architectures
            </p>
          </div>

          {/* Authentic Summary from Resume */}
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Currently serving as Technical Lead &amp; SME for Operational Excellence at{" "}
            <strong className="text-[var(--text-main)]">Share.Market by PhonePe</strong> (ex-
            <strong className="text-[var(--text-main)]">Hexaware</strong>). Proven track record
            of improving system reliability, SLA adherence, and processing latency in high-throughput
            backend services. Strong expertise in building scalable microservices using Java,
            optimizing Kafka/RabbitMQ workflows, and debugging production systems.
          </p>

          {/* Contact details row */}
          <div className="flex items-center flex-wrap gap-4 pt-1 text-xs text-[var(--text-muted)]">
            <a
              href="mailto:anuj.10tiwari2001@gmail.com"
              onClick={() => playSoftClick(420, 0.02)}
              className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>anuj.10tiwari2001@gmail.com</span>
            </a>
            <span className="opacity-30">•</span>
            <a
              href="tel:+919987540731"
              onClick={() => playSoftClick(450, 0.02)}
              className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>+91-9987540731</span>
            </a>
            <span className="opacity-30">•</span>
            <span>Bangalore, India</span>
          </div>

          {/* Quick Metrics Tablet Row (Directly from Resume) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-3">
            <div className="p-3.5 bg-[var(--bg-surface-alt)] rounded-lg border border-[var(--border)] text-center sm:text-left">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                SLA Uplift
              </span>
              <span className="text-xl sm:text-2xl font-bold font-serif text-[var(--text-heading)] block mt-0.5">
                85% → 98%
              </span>
              <span className="text-[11px] text-[var(--text-muted)]">24h Activation (+12%)</span>
            </div>

            <div className="p-3.5 bg-[var(--bg-surface-alt)] rounded-lg border border-[var(--border)] text-center sm:text-left">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                TAT Reduced
              </span>
              <span className="text-xl sm:text-2xl font-bold font-serif text-[var(--accent)] block mt-0.5">
                -48%
              </span>
              <span className="text-[11px] text-[var(--text-muted)]">Cut from 61h to 32h</span>
            </div>

            <div className="p-3.5 bg-[var(--bg-surface-alt)] rounded-lg border border-[var(--border)] text-center sm:text-left">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                Effort Saved
              </span>
              <span className="text-xl sm:text-2xl font-bold font-serif text-emerald-700 block mt-0.5">
                10,000+ hrs
              </span>
              <span className="text-[11px] text-[var(--text-muted)]">ETL Automation</span>
            </div>

            <div className="p-3.5 bg-[var(--bg-surface-alt)] rounded-lg border border-[var(--border)] text-center sm:text-left">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                Failure Visibility
              </span>
              <span className="text-xl sm:text-2xl font-bold font-serif text-[var(--text-heading)] block mt-0.5">
                10% → 90%
              </span>
              <span className="text-[11px] text-[var(--text-muted)]">Grafana &amp; Foxtrot</span>
            </div>

            <div className="p-3.5 bg-[var(--bg-surface-alt)] rounded-lg border border-[var(--border)] text-center sm:text-left col-span-2 sm:col-span-1">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                Academic CGPA
              </span>
              <span className="text-xl sm:text-2xl font-bold font-serif text-[var(--text-heading)] block mt-0.5">
                9.2 / 10
              </span>
              <span className="text-[11px] text-[var(--text-muted)]">B.E. Computer Science</span>
            </div>
          </div>

          {/* Navigation CTA Bar */}
          <div className="flex items-center flex-wrap gap-2.5 pt-4 border-t border-[var(--border)]">
            <span className="text-xs font-semibold text-[var(--text-muted)] mr-1">
              Explore Portfolio:
            </span>
            <a
              href="#experience"
              onClick={() => playSoftClick(420, 0.03)}
              className="vintage-btn"
            >
              <span>Work Experience</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#github"
              onClick={() => playSoftClick(460, 0.03)}
              className="vintage-btn"
            >
              <span>GitHub Repositories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#dispatches"
              onClick={() => playSoftClick(500, 0.03)}
              className="vintage-btn"
            >
              <span>Engineering Dispatches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Architecture Workbench */}
      <div className="vintage-card p-5 sm:p-7 bg-[var(--bg-surface)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[var(--border)] gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[var(--accent)]" />
            <h3 className="font-serif font-bold text-base sm:text-lg text-[var(--text-heading)]">
              Core Skills &amp; Architecture Workbench
            </h3>
          </div>
          <span className="text-xs text-[var(--text-muted)]">
            Detailed breakdown of production toolchain, telemetry, and leadership charter
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center flex-wrap gap-2 pt-1">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playSoftClick(440, 0.03);
                  setActiveTab(tab.id);
                }}
                className={`vintage-btn text-xs font-semibold px-3 py-1.5 transition-all ${
                  isActive
                    ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-xs"
                    : "hover:bg-[var(--bg-surface-alt)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="pt-2">
          {tabs.find((t) => t.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
}
