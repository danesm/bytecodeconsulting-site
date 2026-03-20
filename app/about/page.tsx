import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";
import { differentiators, localPositioning } from "@/lib/site-content";
import { buildMetadata } from "@/lib/seo";

const Navbar = dynamic(() => import("@/components/site/navbar").then((mod) => mod.Navbar), { ssr: false });

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Bytecode Consulting, a Kent-based consultancy combining senior engineering thinking with practical AI, cloud, software, and training delivery.",
  path: "/about/",
  keywords: ["About Bytecode Consulting", "Kent consultancy", "Dartford technology consultancy"],
});

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        eyebrow="About"
        title="Practical technical delivery with modern AI, cloud, software, and training capability."
        copy="Bytecode Consulting brings together senior engineering judgement, practical implementation, and clear enablement to help organisations improve systems, reduce friction, and use modern technology well."
        primaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <section className="section-divider py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Local roots</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">A Kent-based consultancy with a practical focus on local business value.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{localPositioning.copy}</p>
            <div className="mt-6 rounded-2xl border border-cyan/20 bg-cyan/10 p-6">
              <p className="text-lg italic leading-8 text-cyan-50 sm:text-xl">
                “AI should create operational value, not just excitement. The real advantage goes to organisations that apply it clearly, practically, and with purpose.”
              </p>
            </div>
          </Card>
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">How Bytecode works</p>
            <blockquote className="mt-5 text-2xl italic leading-9 text-white sm:text-3xl sm:leading-[1.45]">
              “The right technology should solve real operational problems, support growth, and be practical for your team to use.”
            </blockquote>
            <p className="mt-6 text-sm leading-7 text-slate-300">
              Bytecode Consulting focuses on clear implementation, better systems, and sensible adoption so organisations get useful outcomes rather than unnecessary complexity.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-backdrop py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Why Bytecode"
            title="Clear differentiators that matter in real engagements."
            copy="The offer is shaped to work for SMEs, schools, startups, and organisations that need strong technical support without unnecessary bureaucracy or hype."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item) => (
              <Card key={item} className="p-6">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
