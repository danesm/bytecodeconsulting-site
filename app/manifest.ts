import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bytecode Consulting",
    short_name: "Bytecode",
    description: "AI, cloud, software engineering, automation, and training for growing organisations.",
    start_url: "/",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone", "minimal-ui"],
    orientation: "portrait",
    background_color: "#020617",
    theme_color: "#020617",
    categories: ["business", "productivity", "education", "technology"],
    lang: "en-GB",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/brand/favicon.svg",
        sizes: "96x96",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Contact",
        short_name: "Contact",
        description: "Open the contact page",
        url: "/contact/",
        icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
      },
      {
        name: "Services",
        short_name: "Services",
        description: "View consultancy services",
        url: "/services/",
        icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
      },
      {
        name: "Training",
        short_name: "Training",
        description: "View training offers",
        url: "/training/",
        icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
      },
    ],
  };
}
