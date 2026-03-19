import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Proposal Template",
  description: "A reusable proposal page template for Bytecode Consulting client engagements.",
  path: "/proposal/",
});

const sections = [
  {
    title: "Engagement Summary",
    content:
      "Summarise the client context, the business challenge, and the opportunity in a concise, plain-English way.",
  },
  {
    title: "Objectives",
    content: "List the outcomes this work should deliver, such as automation gains, improved reliability, or team enablement.",
  },
  {
    title: "Scope",
    content: "Describe what is included, what is excluded, and where assumptions or client dependencies exist.",
  },
  {
    title: "Approach",
    content: "Outline the discovery, design, delivery, and enablement plan in a way that feels reassuring and practical.",
  },
  {
    title: "Timeline",
    content: "Present phases, checkpoints, and expected milestones with enough detail to set expectations without overcommitting.",
  },
  {
    title: "Investment",
    content: "Replace this section with your fee structure, payment schedule, and any optional add-ons or support packages.",
  },
];

export default function ProposalPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="section-shell">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Proposal Template</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">Bytecode Consulting client proposal</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                A clean starting point for adapting proposals across consultancy, engineering, automation, and training engagements.
              </p>
            </div>
            <Button href="/">Back to website</Button>
          </div>

          <div className="mt-10 grid gap-6">
            {sections.map((section) => (
              <Card key={section.title} className="p-6">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{section.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
