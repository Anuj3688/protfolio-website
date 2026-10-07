import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
  themeColor: "#F7F4EE",
};

export const metadata: Metadata = {
  title: "Anuj Tiwari | Senior Backend & Distributed Systems Engineer",
  description:
    "Senior Backend Engineer with 4–5 years track record architecting high-throughput transaction engines, low-latency financial ledgers, and zero-data-loss distributed systems.",
  keywords: [
    "Backend Engineer",
    "Distributed Systems",
    "Fintech",
    "High Throughput",
    "Transaction Engine",
    "Saga Pattern",
    "Kafka",
    "Go",
    "Java",
    "PostgreSQL",
  ],
  authors: [{ name: "Anuj Tiwari" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Anuj Tiwari | Senior Backend & Distributed Systems Engineer",
    description:
      "4–5 Years of Track Record in High-Scale Fintech Systems, Low-Latency Architecture, and Event-Driven Ledgers.",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
