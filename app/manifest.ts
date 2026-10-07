import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anuj Tiwari | Senior Backend Engineer",
    short_name: "Anuj Tiwari",
    description:
      "Senior Backend Engineer specializing in high-throughput transaction engines, distributed event-driven ledgers, and resilient architectures.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F4EE",
    theme_color: "#8B4513",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "developer", "finance", "portfolio"],
  };
}
