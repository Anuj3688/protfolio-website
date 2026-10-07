"use client";

import React from "react";
import { ArrowUp, Compass, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { playSoftClick, currentTheme } = useTheme();

  const scrollToTop = () => {
    playSoftClick(560, 0.04);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full border-t border-[var(--border)] bg-[var(--bg-surface)] transition-colors mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-[var(--border)] gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[var(--bg-surface-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold font-serif text-lg text-[var(--text-heading)] block leading-tight">
                Anuj Tiwari
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                Backend Engineer • Share.Market by PhonePe • Bangalore, India
              </span>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-4 text-xs font-medium text-[var(--text-muted)]">
            <a
              href="mailto:anuj.10tiwari2001@gmail.com"
              onClick={() => playSoftClick(420, 0.02)}
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>anuj.10tiwari2001@gmail.com</span>
            </a>

            <span className="opacity-30">•</span>

            <a
              href="tel:+919987540731"
              onClick={() => playSoftClick(440, 0.02)}
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>+91-9987540731</span>
            </a>

            <span className="opacity-30">•</span>

            <a
              href="https://www.linkedin.com/in/anujtiwari2001/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSoftClick(470, 0.02)}
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>LinkedIn</span>
            </a>

            <span className="opacity-30">•</span>

            <a
              href="https://github.com/Anuj3688"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSoftClick(490, 0.02)}
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>github.com/Anuj3688</span>
            </a>

            <span className="opacity-30">•</span>

            <button
              onClick={scrollToTop}
              className="vintage-btn text-xs py-1 px-2.5"
              title="Return to top"
            >
              <ArrowUp className="w-3 h-3 text-[var(--accent)]" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Sub-footer details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-3 text-center sm:text-left">
          <p>
            B.E. Computer Science, Savitribai Phule Pune University (9.2 CGPA)
          </p>

          <p>
            Active Palette: <strong className="text-[var(--accent)] font-semibold">{currentTheme.name}</strong>
          </p>

          <p>
            &copy; 2026 Anuj Tiwari.
          </p>
        </div>
      </div>
    </footer>
  );
}
