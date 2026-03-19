import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardCopy, CardTitle } from "@/components/ui/card";
import { trainingItems } from "@/lib/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Training",
  description:
    "Business AI workshops, cloud fundamentals, software engineering mentoring, school sessions, and practical team enablement from Bytecode Consulting.",
  path: "/training/",
  keywords: [
    "AI workshops UK",
    "Cloud fundamentals training",
    "Software engineering mentoring",
    "Business training consultancy",
  ],
});

export default function TrainingPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        eyebrow="Training"
        title="Practical training for teams that need confidence as well as capability."
        copy="Training is a core Bytecode Consulting service. Sessions are designed to help organisations understand modern technology, reduce adoption friction, and develop useful skills that stick after the workshop ends."
        primaryCta={{ label: "Enquire about training", href: "/contact" }}
        secondaryCta={{ label: "Schools & students", href: "/schools-students" }}
      />

      <section className="section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Workshop Areas"
            title="Business-ready sessions built around practical outcomes."
            copy="The emphasis is on clear understanding, relevant examples, and sessions that align with how teams actually work."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trainingItems.map((item) => (
              <Card key={item.title}>
                <div className="mb-5 inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-200">
                  Training
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardCopy>{item.description}</CardCopy>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-backdrop py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/20 via-white/5 to-purple/10 p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Why it matters</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">The goal is practical capability, not abstract theory.</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
              <li>Build internal confidence across AI, cloud, and software delivery.</li>
              <li>Reduce friction when adopting new tools, processes, or technical ways of working.</li>
              <li>Improve practical skills through relevant, modern examples.</li>
              <li>Help teams use AI and cloud services effectively without unnecessary complexity.</li>
            </ul>
          </div>
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Formats</p>
            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-200">Half-day or full-day workshops</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-200">Leadership or non-technical awareness sessions</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-200">Developer mentoring and team enablement</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-200">Custom sessions tailored to your operating context</div>
            </div>
            <div className="mt-8">
              <Button href="/contact">Book a workshop</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
