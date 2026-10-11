"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  MapPin,
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
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-xs uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Complete Technical Arsenal (From Resume &amp; Production Work)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Languages &amp; Core
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                Java, Python, SQL, Node.js, React.js
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Frameworks &amp; Microservices
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                Spring Boot, Dropwizard, FastAPI, REST APIs, Microservices
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Distributed Systems &amp; Design
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                System Design, Scalable Architecture, High Availability, Event-Driven Architecture, Saga Pattern, Circuit Breakers
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Messaging &amp; Streaming
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                RabbitMQ, Apache Kafka, DLQ Handling, Consumer Lag Tuning
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Databases &amp; Caching
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                PostgreSQL, Azure Cosmos DB, MongoDB, Redis, T-SQL
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                DevOps &amp; Infrastructure
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                Docker, CI/CD Pipelines, Azure Pipelines, Linux, Airflow
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Observability &amp; Pipelines
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                Grafana, Foxtrot Telemetry, Data Pipeline, Structured Logging
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)]">
              <span className="font-bold text-[var(--text-heading)] block mb-1">
                Testing &amp; Quality
              </span>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                JUnit, PyTest, Automated Validation Frameworks, Deep RCA
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "phonepe",
      label: "PhonePe Invest Architecture",
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-xs uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>High-Throughput FinTech Architecture at PhonePe Invest (Bangalore)</span>
          </div>
          <div className="p-4 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)] space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-[var(--bg-surface)] rounded border border-[var(--border)]">
                <strong className="block text-[var(--text-heading)] mb-1">Yatra Journey Orchestrator</strong>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                  Architected centralized Java/Spring Boot communication orchestrator with state-machine routing and automated queue cancellation, scaling to 10,000+ daily flows across 20+ workflows for 10 pods.
                </p>
              </div>
              <div className="p-3 bg-[var(--bg-surface)] rounded border border-[var(--border)]">
                <strong className="block text-[var(--text-heading)] mb-1">Saga Distributed Transactions</strong>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                  Delivered strict-compliance features (ReKYC, Account Closure, Inactivity) utilizing Java, Spring Boot, and Saga patterns to guarantee data consistency across back-office and exchange services.
                </p>
              </div>
              <div className="p-3 bg-[var(--bg-surface)] rounded border border-[var(--border)]">
                <strong className="block text-[var(--text-heading)] mb-1">RabbitMQ Dropwizard Optimization</strong>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                  Restructured acknowledgment strategies, consumer lag settings, and backoff patterns, completely eliminating queue saturation and preventing SLA breaches.
                </p>
              </div>
              <div className="p-3 bg-[var(--bg-surface)] rounded border border-[var(--border)]">
                <strong className="block text-[var(--text-heading)] mb-1">Azure Cosmos DB &amp; Observability</strong>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                  Stabilized onboarding pipelines with robust DLQ handling and calendar-aware retries; engineered Grafana &amp; Foxtrot pipelines elevating failure visibility from 10% to 90%.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "hexaware",
      label: "Hexaware Data Automation",
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>High-Throughput Financial Data Processing at Hexaware (Chennai)</span>
          </div>
          <div className="p-4 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)] space-y-2.5">
            <p className="text-[var(--text-main)] leading-relaxed">
              Designed and optimized backend batch-processing services in Python to aggregate high-throughput financial data, eliminating 10,000+ hours of manual operations and powering downstream reporting systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
                <strong className="block text-[var(--accent)]">10,000+ Hours Eliminated</strong>
                <span className="text-[var(--text-muted)] text-[11px]">Python batch processing automated tedious manual operations completely</span>
              </div>
              <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
                <strong className="block text-[var(--accent)]">+50% Decision Visibility</strong>
                <span className="text-[var(--text-muted)] text-[11px]">Streamlined aggregation via optimized T-SQL queries and indexing strategies</span>
              </div>
              <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
                <strong className="block text-[var(--accent)]">Automated Validation</strong>
                <span className="text-[var(--text-muted)] text-[11px]">Deep RCA frameworks drastically reducing financial reconciliation errors</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "philosophy",
      label: "Engineering Mindset",
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Distributed Reliability &amp; Production Hardening</span>
          </div>
          <div className="p-4 bg-[var(--bg-surface-alt)] rounded-md border border-[var(--border)] space-y-2.5">
            <p className="text-[var(--text-main)] leading-relaxed">
              &ldquo;Reliability in distributed systems requires disciplined design: transactional consistency via Sagas, queue saturation defense with backoffs and DLQs, and proactive observability with sub-second alert correlation.&rdquo;
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
                <strong className="block text-[var(--accent)]">Transactional Integrity</strong>
                <span className="text-[var(--text-muted)] text-[11px]">Saga patterns and idempotency across back-office and exchange services</span>
              </div>
              <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
                <strong className="block text-[var(--accent)]">Resilient Queues</strong>
                <span className="text-[var(--text-muted)] text-[11px]">RabbitMQ &amp; Kafka tuning, DLQs, calendar-aware retry mechanisms</span>
              </div>
              <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-[var(--border)]">
                <strong className="block text-[var(--accent)]">Proactive Observability</strong>
                <span className="text-[var(--text-muted)] text-[11px]">Grafana and Foxtrot correlating logs and state transitions (10% → 90%)</span>
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

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-10">
          {/* Left Column: Bio, Summary, Contacts, Metrics, CTAs */}
          <div className="flex-1 space-y-6 w-full">
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
              Backend Engineer with 4 years of experience specializing in distributed systems and event-driven architectures.
              Proven track record of improving system reliability, SLA adherence, and processing latency in high-throughput
              backend services. Strong experience in building scalable microservices using Java, optimizing Kafka/RabbitMQ-based
              workflows, and debugging production systems. Currently at <strong className="text-[var(--text-main)]">PhonePe Invest</strong> (ex-<strong className="text-[var(--text-main)]">Hexaware</strong>).
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
                  Messaging Scale
                </span>
                <span className="text-xl sm:text-2xl font-bold font-serif text-[var(--text-heading)] block mt-0.5">
                  10,000+
                </span>
                <span className="text-[11px] text-[var(--text-muted)]">Daily Flows (Yatra)</span>
              </div>

              <div className="p-3.5 bg-[var(--bg-surface-alt)] rounded-lg border border-[var(--border)] text-center sm:text-left">
                <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                  Failure Visibility
                </span>
                <span className="text-xl sm:text-2xl font-bold font-serif text-[var(--accent)] block mt-0.5">
                  10% → 90%
                </span>
                <span className="text-[11px] text-[var(--text-muted)]">Grafana &amp; Foxtrot</span>
              </div>

              <div className="p-3.5 bg-[var(--bg-surface-alt)] rounded-lg border border-[var(--border)] text-center sm:text-left">
                <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                  Manual Ops Saved
                </span>
                <span className="text-xl sm:text-2xl font-bold font-serif text-emerald-700 block mt-0.5">
                  10,000+ hrs
                </span>
                <span className="text-[11px] text-[var(--text-muted)]">Python Batch Systems</span>
              </div>

              <div className="p-3.5 bg-[var(--bg-surface-alt)] rounded-lg border border-[var(--border)] text-center sm:text-left">
                <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                  Decision Visibility
                </span>
                <span className="text-xl sm:text-2xl font-bold font-serif text-[var(--text-heading)] block mt-0.5">
                  +50%
                </span>
                <span className="text-[11px] text-[var(--text-muted)]">T-SQL Optimization</span>
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

          {/* Right Column: Tactile Photo Dossier Card */}
          <div className="w-full sm:w-72 lg:w-64 xl:w-72 shrink-0">
            <div className="vintage-card p-3 sm:p-4 bg-[var(--bg-surface-alt)] border-2 border-[var(--border-strong)] shadow-md relative group">
              {/* Corner crosshairs */}
              <div className="absolute top-1.5 left-2 font-mono text-[10px] text-[var(--accent)] opacity-60 select-none">┌</div>
              <div className="absolute top-1.5 right-2 font-mono text-[10px] text-[var(--accent)] opacity-60 select-none">┐</div>
              <div className="absolute bottom-1.5 left-2 font-mono text-[10px] text-[var(--accent)] opacity-60 select-none">└</div>
              <div className="absolute bottom-1.5 right-2 font-mono text-[10px] text-[var(--accent)] opacity-60 select-none">┘</div>

              {/* Header Tape */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)] pb-2 mb-2.5 border-b border-[var(--border)]">
                <span className="font-bold text-[var(--accent)] uppercase tracking-wider">DOSSIER // AT-2024</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>VERIFIED</span>
                </span>
              </div>

              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full rounded border border-[var(--border)] overflow-hidden bg-[var(--bg-base)] shadow-inner">
                <Image
                  src="/anuj-tiwari.jpg"
                  alt="Anuj Tiwari - Backend Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 288px, 320px"
                  className="object-cover object-top filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-white drop-shadow">
                  <span>● PhonePe Invest</span>
                  <span>Bangalore</span>
                </div>
              </div>

              {/* Metadata plate */}
              <div className="pt-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-[var(--text-heading)]">Anuj Tiwari</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--accent)] font-semibold">
                    4 YOE
                  </span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)] leading-tight">
                  Backend Engineer • Distributed Systems &amp; Event-Driven Architecture
                </p>
                <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[var(--accent)]" />
                    <span>Bangalore, IN</span>
                  </span>
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">9.2 CGPA</span>
                </div>
              </div>
            </div>
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
