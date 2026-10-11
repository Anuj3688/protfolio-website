"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";
import { FileText, Compass, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { playSoftClick } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--bg-base)]/95 backdrop-blur-md transition-colors">
      {/* Top subtle vintage tape */}
      <div className="hidden md:flex items-center justify-between px-6 py-1 bg-[var(--bg-surface-alt)] border-b border-[var(--border)] text-[11px] text-[var(--text-muted)]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-medium text-[var(--text-main)]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>BACKEND ENGINEER • PHONEPE INVEST (BANGALORE)</span>
          </span>
          <span className="opacity-40">•</span>
          <span>4 YEARS IN DISTRIBUTED SYSTEMS &amp; EVENT-DRIVEN ARCHITECTURES</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px]">
          <span>YATRA JOURNEY: 10K+ FLOWS</span>
          <span className="opacity-40">•</span>
          <span>MANUAL OPS SAVED: 10,000+ HRS</span>
          <span className="opacity-40">•</span>
          <span>VISIBILITY: 10% → 90%</span>
          <span className="opacity-40">•</span>
          <span>B.E. CS: 9.2 CGPA</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-md overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-surface-alt)] shadow-xs shrink-0">
            <Image
              src="/anuj-tiwari.jpg"
              alt="Anuj Tiwari"
              width={36}
              height={36}
              priority
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <a
              href="#"
              onClick={() => playSoftClick(540, 0.03)}
              className="text-base sm:text-lg font-bold font-serif text-[var(--text-heading)] hover:text-[var(--accent)] transition-colors block leading-tight"
            >
              Anuj Tiwari
            </a>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium block">
              Backend Engineer • PhonePe Invest
            </span>
          </div>
        </div>

        {/* Right: Actions & Theme Switch */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          {/* Social, Email & Resume Links */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:anuj.10tiwari2001@gmail.com"
              onClick={() => playSoftClick(420, 0.03)}
              className="vintage-btn"
              title="Email Anuj"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="hidden sm:inline">Email</span>
            </a>

            <a
              href="https://github.com/Anuj3688"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSoftClick(440, 0.03)}
              className="vintage-btn"
              title="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/anujtiwari2001/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSoftClick(480, 0.03)}
              className="vintage-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href="#contact"
              onClick={() => playSoftClick(520, 0.03)}
              className="vintage-btn vintage-btn-primary"
              title="View Resume / Contact"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          <div className="h-5 w-[1px] bg-[var(--border)] hidden sm:block" />

          {/* Palette selector */}
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
