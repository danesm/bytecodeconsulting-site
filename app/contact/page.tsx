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
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Or</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">Prefer to email directly?</p>
            <a
              href="mailto:admin@bytecodeconsulting.com"
              className="mt-4 inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan/40 hover:bg-cyan/15"
            >
              admin@bytecodeconsulting.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
