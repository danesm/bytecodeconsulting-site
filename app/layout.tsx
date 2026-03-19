import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { PwaRegister } from "@/components/site/pwa-register";
import { buildMetadata, siteSeo } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Bytecode Consulting",
    description:
      "Bytecode Consulting helps growing organisations use AI, cloud, automation, software engineering, and practical training to improve operations and move forward with confidence.",
    path: "/",
    keywords: [
      "Bytecode Consulting",
      "AI consulting UK",
      "Kent technology consultancy",
      "Dartford AI consultancy",
      "cloud consultancy",
      "software engineering consultancy",
      "training workshops",
      "automation consulting",
      "AI chatbot development",
      "internal tools consultancy",
    ],
  }),
  metadataBase: new URL("https://bytecodeconsulting.com"),
  title: {
    default: "Bytecode Consulting | AI, Cloud, Software Engineering, Training",
    template: "%s | Bytecode Consulting",
  },
  applicationName: "Bytecode Consulting",
  category: "technology",
  creator: "Bytecode Consulting",
  publisher: "Bytecode Consulting",
  authors: [{ name: "Bytecode Consulting" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  appleWebApp: {
    capable: true,
    title: "Bytecode Consulting",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteSeo.siteUrl}/#organization`,
        name: "Bytecode Consulting",
        url: siteSeo.siteUrl,
        image: `${siteSeo.siteUrl}${siteSeo.defaultImage}`,
        logo: `${siteSeo.siteUrl}/icon.svg`,
        description:
          "Bytecode Consulting helps growing organisations use AI, cloud, software engineering, automation, and training to improve operations and build digital capability.",
        email: "admin@bytecodeconsulting.com",
        areaServed: [
          "Dartford",
          "Kent",
          "London",
          "United Kingdom",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dartford",
          addressRegion: "Kent",
          addressCountry: "GB",
        },
        knowsAbout: [
          "AI consulting",
          "Cloud architecture",
          "Software engineering",
          "Automation",
          "Internal tools",
          "Training workshops",
          "School workshops",
        ],
        serviceType: [
          "AI consulting and enablement",
          "Cloud architecture and migration",
          "Web and software development",
          "Business process automation",
          "Internal platforms and dashboards",
          "Training workshops and mentoring",
          "Support, optimisation, and advisory",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteSeo.siteUrl}/#website`,
        url: siteSeo.siteUrl,
        name: "Bytecode Consulting",
        publisher: {
          "@id": `${siteSeo.siteUrl}/#organization`,
        },
        inLanguage: "en-GB",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem("bytecode-theme");
                  var theme = stored || "dark";
                  document.documentElement.setAttribute("data-theme", theme);
                } catch (e) {
                  document.documentElement.setAttribute("data-theme", "dark");
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={manrope.variable}>
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}
