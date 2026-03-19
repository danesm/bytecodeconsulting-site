import type { Metadata } from "next";
import { ContactDetails } from "@/components/site/contact-details";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bytecode Consulting about AI consulting, cloud projects, software delivery, automation, or training workshops.",
};

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
              <SectionHeading
                eyebrow="Get In Touch"
                title="Tell us what you need and we’ll respond with a practical next step."
                copy="Bytecode Consulting supports businesses, local organisations, and education settings across Dartford, Kent, London, and wider UK delivery."
              />
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
