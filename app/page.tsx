import { Footer } from "@/components/site/footer";
import { HeroVisual } from "@/components/site/hero-visual";
import { Navbar } from "@/components/site/navbar";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardCopy, CardTitle } from "@/components/ui/card";
import {
  credibilityItems,
  localPositioning,
  processSteps,
  serviceItems,
  trainingItems,
} from "@/lib/site-content";

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden">
      <Navbar />

      <section className="section-divider relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute right-[12%] top-28 h-96 w-96 rounded-full bg-cyan/10 blur-[150px]" />
          <div className="absolute inset-x-0 top-0 h-[720px] grid-glow opacity-25 mask-bottom" />
        </div>

        <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
              Practical AI, cloud, software, and training for growing organisations
            </div>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Practical AI and modern technical delivery for <span className="text-gradient">growing organisations</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Bytecode Consulting helps growing businesses use AI intelligence, cloud, and modern software to reduce manual work, improve service,
              and move forward with confidence.
            </p>
            <p className="mt-4 max-w-2xl text-base italic leading-7 text-slate-400">
              Practical delivery, sensible pricing, and training designed for real-world use.
            </p>
            <blockquote className="mt-5 max-w-2xl text-lg italic leading-8 text-cyan-100 sm:text-xl">
              “The question is no longer whether AI matters, but how to apply it in a practical, cost-conscious way.”
            </blockquote>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Book a consultation</Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Reduce repetitive work with AI, automation, and intelligent website chatbots",
                "Modern websites, cloud systems, and internal tools for growing businesses",
                "Starter AI-enabled websites from £99. Optional support from £19.99 per month",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div
                    className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-primary via-cyan to-purple"
                    style={{ opacity: 0.8 - index * 0.12 }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="section-shell">
          <div className="rounded-[2rem] border border-cyan/20 bg-gradient-to-br from-cyan/10 via-white/5 to-transparent p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">{localPositioning.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{localPositioning.title}</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">{localPositioning.copy}</p>
          </div>
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Credibility"
            title="Enterprise-grade engineering, delivered in a practical way."
            copy="Bytecode Consulting combines senior technical thinking with the responsiveness of a boutique partner. The result is delivery that is capable, measured, and grounded in outcomes your organisation can actually use."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {credibilityItems.map((item) => (
              <Card key={item.title}>
                <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-primary via-cyan to-purple" />
                <CardTitle>{item.title}</CardTitle>
                <CardCopy>{item.description}</CardCopy>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-backdrop section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Core Offers"
            title="What Bytecode Consulting helps you deliver."
            copy="From AI adoption and automation to websites, cloud systems, and practical training, Bytecode Consulting helps growing organisations move forward with clear, commercially sensible technical support."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Card className="flex h-full flex-col justify-between">
              <div>
                <CardTitle>Services</CardTitle>
                <CardCopy>
                  AI consulting, cloud architecture, automation, internal tools, websites, software delivery, and ongoing technical advisory.
                </CardCopy>
              </div>
              <Button href="/services" variant="secondary" className="mt-8 w-full justify-center">
                View services
              </Button>
            </Card>
            <Card className="flex h-full flex-col justify-between">
              <div>
                <CardTitle>Training</CardTitle>
                <CardCopy>
                  Business workshops, team mentoring, cloud fundamentals, AI awareness, and practical enablement sessions designed for adoption.
                </CardCopy>
              </div>
              <Button href="/training" variant="secondary" className="mt-8 w-full justify-center">
                View training
              </Button>
            </Card>
            <Card className="flex h-full flex-col justify-between">
              <div>
                <CardTitle>Schools & Students</CardTitle>
                <CardCopy>
                  Accessible workshops and talks for education settings, helping students understand modern technology and future career pathways.
                </CardCopy>
              </div>
              <Button href="/schools-students" variant="secondary" className="mt-8 w-full justify-center">
                View schools offer
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Training"
              title="Training remains a core service, not an afterthought."
              copy="For businesses, local organisations, and education settings, the goal is the same: build confidence, reduce adoption friction, and make modern technology genuinely useful."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/training">Training services</Button>
              <Button href="/schools-students" variant="secondary">
                Schools & student workshops
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trainingItems.slice(0, 4).map((item) => (
              <Card key={item.title}>
                <div className="mb-5 inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-200">
                  Workshop
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardCopy>{item.description}</CardCopy>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-backdrop section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Process"
            title="A simple delivery model that keeps work practical and understandable."
            copy="Whether the brief is AI enablement, cloud migration, software delivery, or training, the engagement stays clear and outcome-focused."
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

      <section className="py-20">
        <div className="section-shell">
          <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Ready to talk?</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Let&apos;s plan the right next step for your business, team, or workshop.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                  If you&apos;re in Dartford, Kent, London, or elsewhere in the UK, Bytecode Consulting can help you approach AI, cloud, software, and training in a way that is commercially sensible and technically strong.
                </p>
              </div>
              <Button href="/contact">Contact Bytecode Consulting</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
