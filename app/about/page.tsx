import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

const Navbar = dynamic(() => import("@/components/site/navbar").then((mod) => mod.Navbar), { ssr: false });

const workingPrinciples = [
  {
    title: "Practical Over Hype",
    copy: "Technology choices should support real business outcomes, not add unnecessary complexity or fashionable noise.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: "Fast, Focused Delivery",
    copy: "The goal is to create momentum quickly, keep priorities clear, and move from idea to useful outcome without wasting time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: "Security-Conscious Thinking",
    copy: "AI, cloud, and software delivery should be approached with care, good engineering habits, and sensible risk awareness from the start.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Adoption Matters",
    copy: "Technology only creates value when people can use it confidently, which is why training and practical enablement are built into the approach.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Bytecode Consulting, a modern consultancy focused on practical AI adoption, cloud modernization, software delivery, and training.",
  path: "/about/",
  keywords: ["About Bytecode Consulting", "AI consultancy", "cloud modernization consultancy"],
});

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        eyebrow="About"
        title="Practical AI, cloud, and software consulting for organisations ready to modernise."
        copy="Bytecode Consulting helps organisations adopt AI, modernise systems, and deliver better software with a practical, commercially sensible approach to change."
        primaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <section className="section-divider py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">What Bytecode is</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">A modern consultancy focused on useful outcomes, not unnecessary complexity.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Bytecode Consulting is a technology consultancy built to help organisations make practical progress with AI, cloud, software delivery, and training. Based in Kent, we work with businesses across the UK.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The focus is not on oversized transformation language or overengineered solutions. It is on helping clients move forward with clarity, sensible technical choices, and delivery that supports real business needs.
            </p>
          </Card>
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Why Bytecode exists</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">To help businesses use modern technology in ways that are practical, usable, and commercially sensible.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Many organisations want to explore AI, modernise in the cloud, or improve the software they rely on, but they do not always need a large consultancy model or abstract strategy language.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Bytecode Consulting was created to offer a more grounded approach: clear thinking, strong engineering standards, and support that helps teams understand and adopt what gets delivered.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-backdrop py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="How We Work"
            title="A practical approach built around trust, delivery, and adoption."
            copy="For an early-stage consultancy, the strongest credibility comes from how the work is approached: clear priorities, good engineering habits, and an emphasis on useful outcomes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {workingPrinciples.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Who We Help</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Built for organisations that want practical progress with AI, cloud, and software.
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
              Bytecode Consulting is a good fit for growing businesses, modernising teams, and organisations that want support navigating AI adoption, cloud change, software delivery, or technical training without unnecessary complexity.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Growing SMEs", copy: "Businesses looking to use AI and modern software to work more efficiently and compete effectively." },
                { label: "Modernising Teams", copy: "Technical and non-technical teams transitioning to cloud-native platforms or adopting new AI tools." },
                { label: "Organisations in Kent & the UK", copy: "Local and national organisations that want practical, commercially grounded technology support." },
              ].map((item) => (
                <li key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.copy}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact">Start a conversation</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
