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
    role: "Backend Engineer (Tech Lead & SME)",
    company: "Share.Market by PhonePe",
    companyTagline: "High-Scale Stockbroking & Wealth Management Infrastructure",
    location: "Bangalore, India",
    period: "Apr 2024 — Present",
    status: "Active Production Systems • 98% SLA",
    headline: "Operational Excellence, Queue Optimization (Kafka / RabbitMQ) & Resilient Workflows",
    metrics: [
      { label: "24h Activation SLA", value: "85% → 98%", desc: "+12% SLA uplift achieved" },
      { label: "Turnaround Time (TAT)", value: "-48%", desc: "Cut from 61h down to 32h" },
      { label: "Failure Visibility", value: "10% → 90%", desc: "Grafana & Foxtrot alerting" },
      { label: "Platform Growth", value: "100%+", desc: "Scaled with reduced CX tickets" },
    ],
    bulletPoints: [
      "Served as Technical Lead & SME for the Operational Excellence charter, stabilizing onboarding and modification workflows for high-scale fintech services.",
      "Led a 3-engineer pod defining the architectural roadmap, building Node.js-based backend services and React.js interfaces to streamline operational workflows across distributed systems.",
      "Optimized asynchronous event integrations (RabbitMQ & Apache Kafka) by restructuring acknowledgment protocols and exponential backoff strategies to completely eliminate queue saturation.",
      "Engineered comprehensive Grafana telemetry dashboards with Foxtrot alerting, elevating failure detection visibility from 10% to 90% and substantially reducing MTTR.",
      "Designed a fail-safe manual upload fallback mechanism, ensuring strict business continuity during external banking and regulatory API instability.",
      "Developed and integrated React.js components with high-throughput Node.js REST APIs, enhancing operational visibility into service-level lifecycle events.",
      "Conducted structured peer code reviews and mentored junior engineers, enforcing distributed resiliency patterns, circuit breakers, and production best practices.",
    ],
    techStack: [
      "Node.js",
      "Java",
      "Kafka",
      "RabbitMQ",
      "PostgreSQL",
      "Grafana",
      "Foxtrot Alerting",
      "React.js",
      "Docker",
      "Circuit Breakers",
    ],
    rawAuditJson: {
      charter: "Operational Excellence & High-Scale Ingestion",
      sla_uplift: "85% to 98% (+12%)",
      tat_reduction: "61h to 32h (-48%)",
      queue_protocol: "Kafka + RabbitMQ with custom backoff",
      pod_size: "3 Engineers (Lead & SME)",
      location: "Bangalore, IN",
    },
  },
  {
    id: "exp-hexaware",
    role: "Associate Software Engineer (Intern → Full-time)",
    company: "Hexaware Technologies",
    companyTagline: "Enterprise Financial Data Processing & Automation",
    location: "Chennai, India",
    period: "Jun 2022 — Apr 2024",
    status: "Promoted to Full-time • 10,000+ Hours Saved",
    headline: "ETL Automation, Financial Data Validation & Resilient Processing Pipelines",
    metrics: [
      { label: "Manual Effort Eliminated", value: "10,000+ hrs", desc: "Automated ETL data pipelines" },
      { label: "Decision Visibility", value: "+50%", desc: "Downstream reporting streams" },
      { label: "Reconciliation Errors", value: "Near Zero", desc: "Automated validation framework" },
      { label: "Career Progression", value: "Fast Track", desc: "Intern to Full-time conversion" },
    ],
    bulletPoints: [
      "Led deep RCA (Root Cause Analysis) investigations on high-impact system failures, identifying bottleneck causes in data processing workflows and implementing permanent stability fixes.",
      "Engineered end-to-end ETL automation eliminating 10,000+ hours of manual operational effort through streamlined, fault-tolerant data pipelines.",
      "Developed automated validation frameworks improving financial data integrity and significantly reducing external reconciliation discrepancies.",
      "Designed and implemented backend data aggregation logic to process high-volume financial data, powering downstream reporting systems and accelerating decision-making visibility by 50%.",
      "Enforced unit and integration testing standards with JUnit and CI/CD pipelines, conducting rigorous peer code reviews to ensure resilient production code.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Python",
      "SQL",
      "Data Pipelines",
      "PostgreSQL",
      "JUnit",
      "CI/CD Pipelines",
      "Linux",
    ],
    rawAuditJson: {
      role_progression: "Intern -> Full-time Associate Software Engineer",
      effort_saved_hours: 10000,
      validation_framework: "Automated financial integrity checks",
      downstream_reporting_uplift: "+50% visibility",
      location: "Chennai, IN",
    },
  },
];

export default function FintechExperience() {
  const { playSoftClick } = useTheme();
  const [selectedTag, setSelectedTag] = useState<string>("ALL");
  const [expandedJson, setExpandedJson] = useState<Record<string, boolean>>({});

  const allTags = [
    "ALL",
    "Kafka",
    "RabbitMQ",
    "Java",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
    "Grafana",
    "Docker",
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
          Specializing in distributed event-driven systems at <strong>PhonePe</strong> and 
          financial data automation at <strong>Hexaware</strong>.
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
