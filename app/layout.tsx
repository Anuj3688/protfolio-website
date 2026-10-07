import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import PwaRegister from "@/components/PwaRegister";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B4513",
};

export const metadata: Metadata = {
  title: "Anuj Tiwari | Senior Backend & Distributed Systems Engineer",
  description:
    "Senior Backend Engineer specializing in high-throughput transaction engines, low-latency financial ledgers, and zero-data-loss distributed architectures.",
  keywords: [
    "Backend Engineer",
    "Distributed Systems",
    "Fintech",
    "High Throughput",
    "Kafka",
    "RabbitMQ",
    "Java",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "PhonePe",
  ],
  authors: [{ name: "Anuj Tiwari" }],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Anuj Tiwari",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Anuj Tiwari | Senior Backend & Distributed Systems Engineer",
    description:
      "4 Years Track Record in High-Scale Fintech Systems, Low-Latency Architecture, and Event-Driven Ledgers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--bg-base)] text-[var(--text-main)] selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          {children}
          <PwaRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
