"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type ThemeId =
  | "saddle-parchment"
  | "tobacco-denim"
  | "prairie-sage"
  | "canyon-terracotta"
  | "campfire-midnight";

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  shortName: string;
  era: string;
  baseColor: string;
  accentColor: string;
  borderColor: string;
  isDark?: boolean;
}

export const THEMES: ThemeDefinition[] = [
  {
    id: "saddle-parchment",
    name: "Saddle Leather & Parchment (Heritage)",
    shortName: "SADDLE & PARCHMENT",
    era: "Warm Natural Linen",
    baseColor: "#F7F4EE",
    accentColor: "#8B4513",
    borderColor: "#DDD4C7",
    isDark: false,
  },
  {
    id: "tobacco-denim",
    name: "Cured Tobacco & Raw Denim",
    shortName: "TOBACCO & DENIM",
    era: "Vintage Indigo Canvas",
    baseColor: "#F5EFE6",
    accentColor: "#2B4A6F",
    borderColor: "#D8CCBD",
    isDark: false,
  },
  {
    id: "prairie-sage",
    name: "Prairie Sagebrush & Dune",
    shortName: "PRAIRIE SAGE",
    era: "Earth Botanical",
    baseColor: "#F2F4EE",
    accentColor: "#446343",
    borderColor: "#CCD2C6",
    isDark: false,
  },
  {
    id: "canyon-terracotta",
    name: "Canyon Terracotta & Red Clay",
    shortName: "CANYON TERRACOTTA",
    era: "Warm Desert Earth",
    baseColor: "#FAF4ED",
    accentColor: "#B85331",
    borderColor: "#E5D5C6",
    isDark: false,
  },
  {
    id: "campfire-midnight",
    name: "Campfire Midnight (Roasted Coffee)",
    shortName: "CAMPFIRE MIDNIGHT",
    era: "Warm Espresso Dark",
    baseColor: "#181412",
    accentColor: "#E5A85C",
    borderColor: "#3B3028",
    isDark: true,
  },
];

interface ThemeContextType {
  currentTheme: ThemeDefinition;
  allThemes: ThemeDefinition[];
  isManual: boolean;
  paperTexture: boolean;
  soundEnabled: boolean;
  setTheme: (id: ThemeId) => void;
  cycleTheme: () => void;
  resetToAuto: () => void;
  togglePaperTexture: () => void;
  toggleSound: () => void;
  playSoftClick: (freq?: number, duration?: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getHourlyThemeIndex(): number {
  return Math.floor(Date.now() / (1000 * 60 * 60)) % THEMES.length;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(THEMES[0].id);
  const [isManual, setIsManual] = useState<boolean>(false);
  const [paperTexture, setPaperTexture] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  // Soft organic acoustic click (like a warm vintage keypress or soft wood tap)
  const playSoftClick = useCallback(
    (freq: number = 420, duration: number = 0.035) => {
      if (!soundEnabled || typeof window === "undefined") return;
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm triangle wave for organic acoustic feel instead of harsh electronic square/sine
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.6, ctx.currentTime + duration);

        gain.gain.setValueAtTime(0.035, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch {
        // Ignored if audio permission is not yet granted
      }
    },
    [soundEnabled]
  );

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("portfolio_vintage_theme") as ThemeId | null;
    const storedTexture = localStorage.getItem("portfolio_paper_texture");
    const storedSound = localStorage.getItem("portfolio_sound");

    if (storedTexture !== null) {
      setPaperTexture(storedTexture === "true");
    }
    if (storedSound !== null) {
      setSoundEnabled(storedSound === "true");
    }

    if (storedTheme && THEMES.some((t) => t.id === storedTheme)) {
      setThemeId(storedTheme);
      setIsManual(true);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      // Default to Saddle & Parchment for calm warm craftsman feel
      const defaultTheme = THEMES[0].id;
      setThemeId(defaultTheme);
      setIsManual(false);
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, []);

  // Hourly rotation if auto mode
  useEffect(() => {
    if (isManual) return;

    const checkHourly = () => {
      const idx = getHourlyThemeIndex();
      const nextTheme = THEMES[idx].id;
      setThemeId((prev) => {
        if (prev !== nextTheme) {
          document.documentElement.setAttribute("data-theme", nextTheme);
          return nextTheme;
        }
        return prev;
      });
    };

    const interval = setInterval(checkHourly, 60000);
    return () => clearInterval(interval);
  }, [isManual]);

  const selectTheme = (id: ThemeId) => {
    setIsManual(true);
    setThemeId(id);
    localStorage.setItem("portfolio_vintage_theme", id);
    document.documentElement.setAttribute("data-theme", id);
    playSoftClick(460, 0.04);
  };

  const cycleTheme = () => {
    const currentIdx = THEMES.findIndex((t) => t.id === themeId);
    const nextIdx = (currentIdx + 1) % THEMES.length;
    selectTheme(THEMES[nextIdx].id);
  };

  const resetToAuto = () => {
    setIsManual(false);
    localStorage.removeItem("portfolio_vintage_theme");
    const autoIdx = getHourlyThemeIndex();
    const autoTheme = THEMES[autoIdx].id;
    setThemeId(autoTheme);
    document.documentElement.setAttribute("data-theme", autoTheme);
    playSoftClick(380, 0.05);
  };

  const togglePaperTexture = () => {
    setPaperTexture((prev) => {
      const next = !prev;
      localStorage.setItem("portfolio_paper_texture", String(next));
      playSoftClick(340, 0.03);
      return next;
    });
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("portfolio_sound", String(next));
      if (next) playSoftClick(520, 0.05);
      return next;
    });
  };

  const activeTheme = THEMES.find((t) => t.id === themeId) || THEMES[0];

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: activeTheme,
        allThemes: THEMES,
        isManual,
        paperTexture,
        soundEnabled,
        setTheme: selectTheme,
        cycleTheme,
        resetToAuto,
        togglePaperTexture,
        toggleSound,
        playSoftClick,
      }}
    >
      <div
        className={`theme-${themeId} ${mounted ? "hydrated" : ""} ${
          paperTexture ? "paper-grain-active" : ""
        }`}
      >
        {paperTexture && <div className="vintage-paper-overlay" aria-hidden="true" />}
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
