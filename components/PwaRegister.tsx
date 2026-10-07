"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function PwaRegister() {
  const { playSoftClick } = useTheme();
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  useEffect(() => {
    // Register Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("ServiceWorker registration successful with scope: ", registration.scope);
          })
          .catch((err) => {
            console.warn("ServiceWorker registration failed: ", err);
          });
      });
    }

    // Check if app is already running in standalone PWA mode
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true)
    ) {
      setIsInstalled(true);
    }

    // Capture install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    playSoftClick(540, 0.04);
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") {
      setInstallPrompt(null);
    }
  };

  // If install prompt is available and not yet installed, show subtle install button in bottom corner
  if (!installPrompt || isInstalled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce">
      <button
        onClick={handleInstallClick}
        className="vintage-btn vintage-btn-primary shadow-lg px-3.5 py-2 text-xs font-bold flex items-center gap-2"
        title="Install portfolio as native app on desktop or mobile"
      >
        <Download className="w-4 h-4" />
        <span>Install App</span>
      </button>
    </div>
  );
}
