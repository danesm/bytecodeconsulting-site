import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/seo";

const Navbar = dynamic(() => import("@/components/site/navbar").then((mod) => mod.Navbar), { ssr: false });

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Bytecode Consulting, explaining how personal information is collected, used, and protected through this website and related enquiries.",
  path: "/privacy/",
  keywords: ["Bytecode Consulting privacy policy", "privacy policy", "data protection"],
});

const sections = [
  {
    title: "Who we are",
    body: "Bytecode Consulting provides AI enablement, cloud modernization, software delivery, and training services. If you contact Bytecode Consulting through this website, your information is handled for business communication and service delivery purposes.",
  },
  {
    title: "What information may be collected",
    body: "This may include your name, email address, organisation name, and any details you include in a contact enquiry. If you choose to contact Bytecode Consulting directly by email, the information you provide will also be processed in order to respond to your enquiry.",
  },
  {
    title: "How information is used",
    body: "Information is used to respond to enquiries, understand the type of support requested, provide consulting or delivery services, and maintain appropriate business records where needed. Personal information is not sold to third parties.",
  },
  {
    title: "Lawful basis",
    body: "Where applicable under UK data protection law, information is processed because it is necessary for legitimate business interests such as responding to enquiries, taking steps before entering into an agreement, or fulfilling contractual obligations.",
  },
  {
    title: "How long information is kept",
    body: "Information is retained only for as long as reasonably necessary for enquiry handling, service delivery, legal obligations, or legitimate record-keeping. If an enquiry does not lead to ongoing work, the information should not be kept longer than necessary.",
  },
  {
    title: "Sharing information",
    body: "Information may be shared with trusted service providers where reasonably necessary for hosting, communication, security, or delivery operations. Any such sharing should be limited to what is necessary to provide or support the service.",
  },
  {
    title: "Cookies and website technology",
    body: "This website may use essential technical features required for the site to function properly. If analytics, marketing tools, or other non-essential cookies are added in future, this policy and any cookie controls should be updated accordingly.",
  },
  {
    title: "Your rights",
    body: "Depending on your location and applicable law, you may have rights to request access to your personal information, ask for correction, request deletion, or object to certain processing. To make a privacy-related request, use the contact details below.",
  },
  {
    title: "Contact",
    body: "For privacy questions or requests, please contact admin@bytecodeconsulting.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        copy="This page explains, in plain language, how Bytecode Consulting may collect, use, and protect personal information submitted through this website."
      />

      <section className="pb-20 pt-4">
        <div className="section-shell max-w-4xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="text-sm leading-7 text-slate-400">
              Last updated: 24 March 2026
            </p>

            <div className="mt-8 grid gap-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-300">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
