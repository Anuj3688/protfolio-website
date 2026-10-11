"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Award,
  ChevronRight,
  TrendingUp,
  Clock,
  Activity,
  Layers,
  Database,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyTagline: string;
  location: string;
  period: string;
  status: string;
  headline: string;
  metrics: { label: string; value: string; desc: string }[];
  bulletPoints: string[];
  techStack: string[];
  rawAuditJson: Record<string, unknown>;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-phonepe",
    role: "Backend Engineer",
    company: "PhonePe Invest",
    companyTagline: "High-Throughput Wealth & Investment Infrastructure • Distributed Microservices",
    location: "Bangalore, India",
    period: "Apr 2024 — Present",
    status: "Active Production Systems • 10,000+ Daily Flows",
    headline: "Distributed Transactions (Saga Pattern), RabbitMQ Dropwizard Optimization & Resilient Event Workflows",
    metrics: [
      { label: "Messaging Scale", value: "10,000+", desc: "Daily user flows across 20+ workflows (Yatra Journey)" },
      { label: "Failure Visibility", value: "10% → 90%", desc: "Grafana & Foxtrot observability pipelines" },
      { label: "Queue Saturation", value: "0 Breaches", desc: "Optimized RabbitMQ in Dropwizard microservices" },
      { label: "Distributed Consistency", value: "100%", desc: "Saga pattern across back-office & exchange services" },
    ],
    bulletPoints: [
      "Architected and delivered strict-compliance features (ReKYC, Account Closure, Inactivity) utilizing Java, Spring Boot, and the Saga design pattern to manage distributed transactions and guarantee data consistency across back-office and exchange services.",
      "Optimized distributed asynchronous workflows in RabbitMQ by restructuring acknowledgment strategies, consumer lag configurations, and backoff patterns within Dropwizard microservices, successfully eliminating queue saturation and preventing SLA breaches.",
      "Stabilized high-scale FinTech onboarding pipelines backed by Azure Cosmos DB against external third-party rate limiting and downtime by implementing robust dead-letter queue (DLQ) handling and calendar-aware retry mechanisms.",
      "Engineered proactive observability pipelines using Grafana and Foxtrot, correlating queue metrics, structured logs, and state transitions to improve system failure visibility from 10% to 90%.",
      "Resolved complex CDSL-Exchange discrepancies and repository-level inconsistencies within PostgreSQL-backed ledger systems by conducting deep root-cause analysis, ensuring accuracy across financial reconciliation flows and live-funnel SLA reporting.",
      "Architected Yatra Journey, a centralized Java/Spring Boot communication and notification orchestrator featuring state-machine routing and automated queue cancellation, scaling to 10,000+ daily user messaging flows across 20+ active workflows for 10 engineering pods.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Dropwizard",
      "RabbitMQ",
      "Kafka",
      "Azure Cosmos DB",
      "PostgreSQL",
      "Grafana",
      "Foxtrot",
      "Saga Pattern",
      "Docker",
      "Circuit Breakers",
    ],
    rawAuditJson: {
      company: "PhonePe Invest",
      role: "Backend Engineer",
      location: "Bangalore, India",
      period: "Apr 2024 — Present",
      orchestration: {
        system: "Yatra Journey",
        scale: "10,000+ daily user messaging flows",
        scope: "20+ active workflows across 10 engineering pods",
        stack: "Java, Spring Boot, State-machine routing, Automated cancellation",
      },
      distributed_transactions: {
        pattern: "Saga Design Pattern",
        compliance_modules: ["ReKYC", "Account Closure", "Inactivity"],
        guarantee: "Strict data consistency across back-office & exchange services",
      },
      queue_optimization: {
        broker: "RabbitMQ",
        framework: "Dropwizard microservices",
        techniques: ["Acknowledgment tuning", "Consumer lag config", "Exponential backoff"],
        result: "Zero queue saturation, prevented SLA breaches",
      },
      pipeline_stabilization: {
        database: "Azure Cosmos DB",
        protection: ["Dead-letter queue (DLQ) handling", "Calendar-aware retry mechanisms"],
        target: "Guarded against third-party rate limiting and downtime",
      },
      observability: {
        tools: "Grafana + Foxtrot",
        uplift: "Failure visibility improved from 10% to 90%",
      },
      reconciliation: {
        datastore: "PostgreSQL",
        investigation: "Deep RCA resolving complex CDSL-Exchange discrepancies",
      },
    },
  },
  {
    id: "exp-hexaware",
    role: "Associate Software Engineer (Intern → Full-time)",
    company: "Hexaware Technologies",
    companyTagline: "Enterprise Financial Data Processing & High-Throughput Aggregation",
    location: "Chennai, India",
    period: "Jun 2022 — Apr 2024",
    status: "Promoted to Full-time • 10,000+ Hours Saved",
    headline: "Python Batch Processing, T-SQL Index Optimization & Automated Financial Validation",
    metrics: [
      { label: "Manual Effort Eliminated", value: "10,000+ hrs", desc: "Automated Python batch-processing services" },
      { label: "Decision Visibility", value: "+50%", desc: "T-SQL queries & indexing optimization" },
      { label: "Reconciliation Discrepancies", value: "Drastically Reduced", desc: "Automated validation framework via RCA" },
      { label: "Engineering Rigor", value: "PyTest CI/CD", desc: "Strict unit and integration testing coverage" },
    ],
    bulletPoints: [
      "Designed and optimized backend batch-processing services in Python to aggregate high-throughput financial data, eliminating 10,000+ hours of manual operations and powering downstream reporting systems.",
      "Led root-cause analysis (RCA) on critical data-processing bottlenecks, engineering automated validation frameworks that drastically reduced financial reconciliation errors and improved overall system reliability.",
      "Streamlined data aggregation logic by optimizing T-SQL queries and indexing strategies, improving the processing efficiency of high-volume financial datasets and increasing decision-making visibility by 50%.",
      "Elevated engineering standards by enforcing strict unit and integration testing coverage PyTest, conducting rigorous code reviews, and integrating validation checks into the CI/CD deployment pipeline.",
    ],
    techStack: [
      "Python",
      "SQL",
      "T-SQL",
      "PyTest",
      "Data Pipeline",
      "PostgreSQL",
      "CI/CD Pipelines",
      "Linux",
    ],
    rawAuditJson: {
      company: "Hexaware Technologies",
      role_progression: "Intern -> Full-time Associate Software Engineer",
      location: "Chennai, India",
      period: "Jun 2022 — Apr 2024",
      batch_processing: {
        language: "Python",
        impact: "Eliminated 10,000+ hours of manual operations",
        downstream: "Powered real-time reporting systems",
      },
      rca_and_validation: {
        scope: "Critical financial data-processing bottlenecks",
        outcome: "Automated validation frameworks drastically reducing reconciliation errors",
      },
      database_optimization: {
        dialect: "T-SQL",
        techniques: ["Query optimization", "Indexing strategies"],
        impact: "Processing efficiency boost, +50% decision-making visibility",
      },
      quality_assurance: {
        framework: "PyTest",
        pipeline: "CI/CD automated integration checks & rigorous code reviews",
      },
    },
  },
];

export default function FintechExperience() {
  const { playSoftClick } = useTheme();
  const [selectedTag, setSelectedTag] = useState<string>("ALL");
  const [expandedJson, setExpandedJson] = useState<Record<string, boolean>>({});

  const allTags = [
    "ALL",
    "Java",
    "Spring Boot",
    "Dropwizard",
    "RabbitMQ",
    "Kafka",
    "Python",
    "Azure Cosmos DB",
    "PostgreSQL",
    "Grafana",
    "Saga Pattern",
    "Docker",
    "CI/CD Pipelines",
  ];

  const filtered =
    selectedTag === "ALL"
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.techStack.includes(selectedTag));

  const toggleJson = (id: string) => {
    playSoftClick(430, 0.03);
    setExpandedJson((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>4 Years Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[var(--text-heading)] mt-1">
            Professional Experience &amp; Impact
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
          Specializing in distributed event-driven systems at <strong>PhonePe Invest</strong> and 
          high-throughput financial data pipelines at <strong>Hexaware Technologies</strong>.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center flex-wrap gap-2 pt-1">
        <span className="text-xs font-semibold text-[var(--text-muted)] mr-1">
          Filter by Technology:
        </span>
        {allTags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => {
                playSoftClick(460, 0.03);
                setSelectedTag(tag);
              }}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all border ${
                isActive
                  ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-xs"
                  : "bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--border-strong)] hover:text-[var(--text-main)]"
              }`}
            >
              {tag === "ALL" ? "All Technologies" : tag}
            </button>
          );
        })}
      </div>

      {/* Experience Cards */}
      <div className="space-y-8 pt-2">
        {filtered.map((exp) => {
          const isJsonOpen = !!expandedJson[exp.id];

          return (
            <div
              key={exp.id}
              className="vintage-card p-6 sm:p-8 bg-[var(--bg-surface)] space-y-5"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-4 border-b border-[var(--border)] gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                      {exp.company}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">• {exp.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[var(--text-heading)] mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-[var(--text-muted)] mt-0.5">
                    {exp.headline}
                  </p>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-2 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--bg-surface-alt)] border border-[var(--border)] text-xs font-semibold text-[var(--text-main)]">
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 hidden sm:block">
                    {exp.status}
                  </span>
                </div>
              </div>

              {/* Quantified Impact Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {exp.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-lg bg-[var(--bg-surface-alt)] border border-[var(--border)] text-center sm:text-left"
                  >
                    <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase block">
                      {m.label}
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-serif text-[var(--text-heading)] block mt-0.5">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">
                      {m.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-main)] pt-1">
                {exp.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Deployed & Raw JSON Toggle */}
              <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-semibold text-[var(--text-muted)] mr-1">
                    Technologies:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded bg-[var(--bg-tag)] border border-[var(--border)] text-[var(--text-muted)] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleJson(exp.id)}
                  className="vintage-btn text-xs py-1 px-2.5"
                >
                  <Database className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{isJsonOpen ? "Hide Raw Metrics" : "View Raw Metrics"}</span>
                </button>
              </div>

              {/* Expandable JSON Metadata */}
              {isJsonOpen && (
                <div className="mt-3 p-4 rounded-lg bg-[var(--bg-surface-alt)] border border-[var(--border)] font-mono text-xs text-[var(--text-main)] overflow-x-auto">
                  <pre>{JSON.stringify(exp.rawAuditJson, null, 2)}</pre>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Education & Academic Excellence Card */}
      <div className="vintage-card p-6 sm:p-8 bg-[var(--bg-surface-alt)] border border-[var(--border-strong)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shrink-0 shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider block">
                Education &amp; Academic Honors
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-[var(--text-heading)] mt-0.5">
                Bachelor of Engineering (B.E.) in Computer Science
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5">
                Savitribai Phule Pune University • Pune, India (2018 — 2022)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 sm:border-l sm:border-[var(--border)] sm:pl-6">
            <Award className="w-5 h-5 text-amber-600" />
            <div>
              <span className="text-xl sm:text-2xl font-bold font-serif text-[var(--text-heading)] block leading-tight">
                9.2 <span className="text-xs font-sans font-normal text-[var(--text-muted)]">/ 10 CGPA</span>
              </span>
              <span className="text-[11px] text-[var(--text-muted)] block">Graduated with Distinction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
