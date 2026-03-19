import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trainingItems } from "@/lib/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Training Brochure",
  description: "Reusable training brochure page for Bytecode Consulting workshops and mentoring services.",
  path: "/training-brochure/",
});

export default function TrainingBrochurePage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Training Brochure</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Practical technical training for teams, students, and organisations.</h1>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Use this page as a standalone brochure for workshop-led engagements. It works well for sending to prospective clients,
              schools, or community partners who want a focused overview of training offers.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-cyan/20 bg-cyan/10 p-5">
              <p className="text-sm font-medium text-cyan-100">Suggested outcomes</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-cyan-50">
                <li>Build internal confidence.</li>
                <li>Reduce adoption friction.</li>
                <li>Improve practical skills.</li>
                <li>Help teams use AI and cloud effectively.</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/#contact">Enquire about training</Button>
              <Button href="/" variant="secondary">
                Back to website
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trainingItems.map((item) => (
              <Card key={item.title}>
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
