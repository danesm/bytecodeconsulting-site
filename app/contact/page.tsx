import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ContactDetails } from "@/components/site/contact-details";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
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
        title="Ready to plan your next project, workshop, or technical improvement?"
        copy="Start with a conversation about your goals, your current constraints, and the most sensible next step. Consultancy, delivery, training, and school workshop enquiries are all welcome."
      />

      <section className="py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading eyebrow="Get In Touch" title="Start your enquiry." copy="Share a few details and we’ll get back to you with the next step." />
              <div className="mt-8 rounded-[2rem] border border-cyan/20 bg-gradient-to-br from-cyan/10 via-white/5 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Best fit engagements</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  AI enablement, cloud migration, software delivery, automation projects, internal tools, business training, and schools & student workshops.
                </p>
              </div>
              <div className="mt-10">
                <ContactDetails />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
