import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardCopy, CardTitle } from "@/components/ui/card";
import { schoolWorkshopItems } from "@/lib/site-content";
import { buildMetadata } from "@/lib/seo";

const Navbar = dynamic(() => import("@/components/site/navbar").then((mod) => mod.Navbar), { ssr: false });

export const metadata: Metadata = buildMetadata({
  title: "Schools & Student Workshops",
  description:
    "Workshops, talks, and practical learning sessions for schools, students, and education settings from Bytecode Consulting.",
  path: "/schools-students/",
  keywords: ["School workshops", "Student workshops", "AI workshops for schools", "Kent school technology workshops"],
});

export default function SchoolsStudentsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        eyebrow="Schools & Student Workshops"
        title="Modern technical workshops for schools, students, and community learning."
        copy="Bytecode Consulting also supports education-focused workshops and talks, helping students understand AI, cloud, software engineering, and the practical realities of working in technology."
        primaryCta={{ label: "Enquire about a workshop", href: "/contact" }}
        secondaryCta={{ label: "View training", href: "/training" }}
      />

      <section className="section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Education Offer"
            title="Sessions designed to be current, practical, and accessible."
            copy="The aim is to make modern technology feel understandable and relevant, whether the audience is students, staff, community learners, or mixed groups."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {schoolWorkshopItems.map((item) => (
              <Card key={item.title}>
                <div className="mb-5 inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-200">
                  Education
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardCopy>{item.description}</CardCopy>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-backdrop py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Suitable for</p>
            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-200">Schools and colleges</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-200">Student groups and clubs</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-200">Community organisations</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-200">Career events and awareness sessions</div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Approach</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Practical teaching that connects learning with the real world.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Sessions are designed to be modern, approachable, and useful. That means less jargon, more relevant examples, and a clearer view of how current digital tools and engineering practices are actually used.
            </p>
            <div className="mt-8">
              <Button href="/contact">Discuss a school session</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
