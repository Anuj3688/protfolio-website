"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, ThemeId } from "@/context/ThemeContext";
import { Palette, Volume2, VolumeX, Sparkles, RefreshCw, ChevronDown, Feather } from "lucide-react";

export default function ThemeSwitch() {
  const {
    currentTheme,
    allThemes,
    isManual,
    paperTexture,
    soundEnabled,
    setTheme,
    cycleTheme,
    resetToAuto,
    togglePaperTexture,
    toggleSound,
    playSoftClick,
  } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2 relative text-xs" ref={dropdownRef}>
      {/* Sound Toggle */}
      <button
        onClick={toggleSound}
        className="vintage-btn px-2.5 py-1.5"
        title={soundEnabled ? "Acoustic Taps: ON" : "Acoustic Taps: MUTED"}
        aria-label="Toggle soft acoustic audio feedback"
      >
        {soundEnabled ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="hidden sm:inline text-[11px]">Audio</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 opacity-40" />
            <span className="hidden sm:inline text-[11px] opacity-50">Muted</span>
          </>
        )}
      </button>

      {/* Paper Grain Toggle */}
      <button
        onClick={togglePaperTexture}
        className={`vintage-btn px-2.5 py-1.5 ${paperTexture ? "border-[var(--accent)] text-[var(--accent)]" : "opacity-60"}`}
        title="Toggle Linen Paper Grain"
        aria-label="Toggle Linen Paper Grain"
      >
        <Feather className="w-3.5 h-3.5" />
        <span className="hidden sm:inline text-[11px]">Paper Grain</span>
      </button>

      {/* Natural Palette Dropdown Button */}
      <div className="relative">
        <button
          onClick={() => {
            playSoftClick(480, 0.04);
            setIsOpen((prev) => !prev);
          }}
          className="vintage-btn font-semibold flex items-center gap-2 px-3 py-1.5"
          aria-expanded={isOpen}
          aria-label="Choose vintage color palette"
        >
          <span
            className="w-3 h-3 rounded-full inline-block border border-black/15 shadow-inner"
            style={{ backgroundColor: currentTheme.accentColor }}
          />
          <span className="text-[11px] tracking-wide font-medium">
            Palette: <strong className="font-bold text-[var(--accent)]">{currentTheme.shortName}</strong>
          </span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform text-[var(--text-muted)] ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-lg shadow-xl p-2 z-50 text-xs font-sans">
            <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-[var(--border)] text-[var(--text-muted)] text-[10px] uppercase font-bold tracking-wider px-1">
              <span>Natural Earth Palettes</span>
              <span className="font-mono text-[9px]">{isManual ? "Manual" : "Hourly Auto"}</span>
            </div>

            <div className="space-y-1">
              {allThemes.map((t) => {
                const isActive = t.id === currentTheme.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id as ThemeId);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-2 rounded-md flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-[var(--bg-surface-alt)] text-[var(--accent)] font-bold shadow-xs"
                        : "hover:bg-[var(--bg-tag)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: t.accentColor }}
                      />
                      <span className="text-xs">{t.shortName}</span>
                    </div>
                    <span className="text-[10px] opacity-75">{t.era}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Actions Footer */}
            <div className="pt-2 mt-2 border-t border-[var(--border)] flex items-center justify-between gap-1.5">
              <button
                onClick={() => cycleTheme()}
                className="vintage-btn text-[11px] py-1 px-2 flex-1 justify-center"
              >
                <Sparkles className="w-3 h-3 text-[var(--accent)]" />
                <span>Next</span>
              </button>
              <button
                onClick={() => {
                  resetToAuto();
                  setIsOpen(false);
                }}
                className={`vintage-btn text-[11px] py-1 px-2 flex-1 justify-center ${
                  !isManual ? "opacity-40 pointer-events-none" : ""
                }`}
                title="Reset to automated hourly theme rotation"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Hourly Auto</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
