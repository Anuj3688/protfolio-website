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
  title: "Anuj Tiwari | Backend Engineer • Distributed Systems & Event-Driven Architecture",
  description:
    "Backend Engineer with 4 years of experience specializing in distributed systems, event-driven architectures, Java microservices, and Kafka/RabbitMQ workflows at PhonePe Invest and Hexaware.",
  keywords: [
    "Anuj Tiwari",
    "Backend Engineer",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Java",
    "Spring Boot",
    "Dropwizard",
    "RabbitMQ",
    "Kafka",
    "Azure Cosmos DB",
    "PostgreSQL",
    "Saga Pattern",
    "PhonePe Invest",
    "Microservices",
    "High Availability",
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
    title: "Anuj Tiwari | Backend Engineer • Distributed Systems & Event-Driven Architecture",
    description:
      "4 Years Track Record in High-Scale Fintech Systems, Distributed Systems, Event-Driven Architectures, and Microservices.",
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
