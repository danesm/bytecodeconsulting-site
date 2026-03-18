import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bytecodeconsulting.com"),
  title: {
    default: "Bytecode Consulting | AI, Cloud, Software Engineering, Training",
    template: "%s | Bytecode Consulting",
  },
  description:
    "Bytecode Consulting helps UK organisations deliver practical AI enablement, cloud architecture, software engineering, automation, and training.",
  keywords: [
    "Bytecode Consulting",
    "AI consulting UK",
    "cloud consultancy",
    "software engineering consultancy",
    "training workshops",
    "automation consulting",
  ],
  openGraph: {
    title: "Bytecode Consulting",
    description:
      "Founder-led consultancy delivering AI, cloud, software engineering, automation, and practical training.",
    url: "https://bytecodeconsulting.com",
    siteName: "Bytecode Consulting",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bytecode Consulting",
    description:
      "AI, cloud, software engineering, automation, and training for UK organisations.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
