import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/seo";

const Navbar = dynamic(() => import("@/components/site/navbar").then((mod) => mod.Navbar), { ssr: false });

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Bytecode Consulting about AI consulting, cloud projects, software delivery, automation, website chatbots, or training workshops.",
  path: "/contact/",
  keywords: ["Contact Bytecode Consulting", "AI consultancy contact", "Kent business technology support"],
});

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title="Let’s plan the right next step"
        copy=""
      />

      <section className="pb-20 pt-10 sm:pt-12">
        <div className="section-shell max-w-3xl">
          <ContactForm />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <a
              href="mailto:admin@bytecodeconsulting.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan/40 hover:bg-cyan/15"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              admin@bytecodeconsulting.com
            </a>
            <a
              href="tel:01322635059"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              01322 635059
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
