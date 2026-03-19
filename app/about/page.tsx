import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";
import { differentiators, localPositioning } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: "Founder-led consultancy combining senior engineering thinking with practical AI, cloud, software, and training delivery.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        eyebrow="About"
        title="Founder-led, senior-level technical delivery with a practical teaching mindset."
        copy="Bytecode Consulting is built around modern engineering judgement, cloud-native thinking, and AI delivery that serves real business goals. The aim is not just implementation, but capability building too."
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
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Working principle</p>
            <blockquote className="mt-5 text-2xl italic leading-9 text-white sm:text-3xl sm:leading-[1.45]">
              “Good technology should reduce friction, strengthen capability, and make the business easier to run.”
            </blockquote>
            <p className="mt-6 text-sm leading-7 text-slate-300">
              Bytecode Consulting focuses on practical implementation, stronger systems, and confident adoption rather than technology for its own sake.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="section-shell">
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Brand philosophy</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">A visual identity shaped around engineering clarity and modern intelligence.</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
              Bytecode Consulting&apos;s visual identity reflects the blend of structured engineering discipline and modern AI thinking at the heart of the business, pairing clear technical foundations with connected intelligence and practical innovation.
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
