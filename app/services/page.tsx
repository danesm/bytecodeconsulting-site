import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardCopy, CardTitle } from "@/components/ui/card";
import { processSteps, serviceItems, solutionItems } from "@/lib/site-content";
import { buildMetadata } from "@/lib/seo";

const Navbar = dynamic(() => import("@/components/site/navbar").then((mod) => mod.Navbar), { ssr: false });

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "AI, cloud, software engineering, automation, website chatbots, internal tools, advisory, and technical delivery services from Bytecode Consulting.",
  path: "/services/",
  keywords: [
    "AI consulting services",
    "Cloud migration services",
    "Website chatbot development",
    "Internal tools consultancy",
    "Automation services UK",
  ],
});

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        eyebrow="Services"
        title="Consulting and engineering services designed for practical business outcomes."
        copy="Bytecode Consulting works with small businesses, local organisations, schools, startups, and established teams that need modern technical capability without unnecessary complexity."
        primaryCta={{ label: "Book a consultation", href: "/contact" }}
        secondaryCta={{ label: "View training", href: "/training" }}
      />

      <section className="section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Delivery Areas"
            title="A broad offer, delivered with clear priorities."
            copy="From AI enablement through to cloud migration, custom software, and advisory support, the emphasis stays on implementation that is useful, maintainable, and commercially sensible."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((service) => (
              <Card key={service.title} className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                    <span className="h-px flex-1 bg-gradient-to-r from-cyan/60 to-transparent" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardCopy>{service.description}</CardCopy>
                </div>
                <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:translate-x-0.5 hover:text-cyan-200">
                  <span>{service.cta}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-backdrop section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Example Solutions"
            title="Typical outcomes we can help shape and deliver."
            copy="These are example use cases rather than client claims, intended to show how consultancy, delivery, and enablement fit together."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutionItems.map((item) => (
              <Card key={item.title}>
                <div className="mb-5 text-[11px] uppercase tracking-[0.3em] text-slate-500">Example engagement</div>
                <CardTitle>{item.title}</CardTitle>
                <CardCopy>{item.description}</CardCopy>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="How We Work"
            title="A delivery model built around clarity and adoption."
            copy="The work is structured to make implementation manageable, but also to help teams understand what has been built and how to use it confidently."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-cyan to-purple" />
                <div className="absolute right-6 top-6 text-4xl font-semibold text-white/10">0{index + 1}</div>
                <CardTitle>{step.title}</CardTitle>
                <CardCopy>{step.description}</CardCopy>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
