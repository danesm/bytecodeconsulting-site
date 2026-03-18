import { Footer } from "@/components/site/footer";
import { HeroVisual } from "@/components/site/hero-visual";
import { Navbar } from "@/components/site/navbar";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardCopy, CardTitle } from "@/components/ui/card";
import {
  credibilityItems,
  differentiators,
  processSteps,
  serviceItems,
  solutionItems,
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

        <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
              Founder-led consultancy for AI, cloud, software, and training
            </div>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build modern digital capability with <span className="text-gradient">trusted technical delivery</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Bytecode Consulting helps UK organisations adopt AI with confidence, design cloud-ready systems,
              ship quality software, automate operations, and upskill teams through practical training.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">Book a consultation</Button>
              <Button href="#services" variant="secondary">
                View services
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "AI strategy, adoption, and delivery",
                "Cloud architecture and modernisation",
                "Hands-on training and enablement",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-primary via-cyan to-purple" style={{ opacity: 0.8 - index * 0.12 }} />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.26em] text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">Founder-led</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">UK-focused consultancy</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">Delivery + enablement</span>
            </div>
          </div>

          <HeroVisual />
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

      <section id="services" className="section-backdrop section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Services"
            title="Technical services shaped for delivery, adoption, and long-term value."
            copy="From initial strategy through implementation and enablement, the focus stays on building capability as well as shipping the work."
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
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:translate-x-0.5 hover:text-cyan-200"
                >
                  <span>{service.cta}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="section-divider py-20">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Training"
                title="Workshops and mentoring that make technology useful, not intimidating."
                copy="Training is a core service. Sessions are designed to help businesses, schools, students, and delivery teams build confidence, reduce adoption friction, and improve practical capability."
              />
              <div className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/20 via-white/5 to-purple/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Training outcomes</p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Business workshops</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Schools and students</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Custom team sessions</span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
                  <li>Build internal confidence across AI, cloud, and software delivery.</li>
                  <li>Reduce friction when adopting new tools or workflows.</li>
                  <li>Improve practical skills with hands-on, relevant exercises.</li>
                  <li>Help teams apply AI and cloud services in sensible, business-ready ways.</li>
                </ul>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button href="#contact">Enquire about training</Button>
                  <Button href="#contact" variant="secondary">
                    Book a workshop
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {trainingItems.map((item) => (
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
        </div>
      </section>

      <section className="section-backdrop section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Why Bytecode"
            title="A consultancy model built around clarity, capability, and practical results."
            copy="The aim is not only to implement modern technology well, but to leave your organisation more confident and more capable afterwards."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="overflow-hidden p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {differentiators.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="flex h-full flex-col justify-between bg-gradient-to-b from-white/8 to-white/[0.03] p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Delivery approach</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Tailored for SMEs, local organisations, and growing teams.</h3>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  You get senior-level engineering judgement, a pragmatic delivery pace, and a partner who treats enablement,
                  mentoring, and documentation as part of the job rather than a handover afterthought.
                </p>
              </div>
              <div className="mt-8 rounded-[1.75rem] border border-cyan/20 bg-cyan/10 p-5 text-sm leading-6 text-cyan-100">
                Strong architecture matters, but so does helping people use what has been built. Bytecode Consulting is designed to do both.
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Process"
            title="A simple engagement model that keeps delivery moving."
            copy="Clear phases, strong communication, and practical handover make it easier to move from idea to working capability."
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

      <section id="solutions" className="section-backdrop section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Use Cases"
            title="Example solutions that reflect the kind of work Bytecode Consulting can support."
            copy="These are sample engagements rather than client claims, intended to show how consultancy, engineering, and training can combine into practical outcomes."
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

      <section id="about" className="section-divider py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Card className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">About</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Founder-led, senior-level technical delivery.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Built for organisations that need thoughtful implementation, clear guidance, and a partner who can also help their people grow in confidence.
              </p>
            </Card>

            <Card className="p-8">
              <p className="text-base leading-8 text-slate-300">
                Bytecode Consulting is built around modern engineering judgement, cloud-native thinking, and practical AI delivery.
                The consultancy model is deliberately hands-on: solving business problems, improving technical capability, and helping teams
                become more confident through mentoring, workshops, and strong implementation.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200">Senior engineering thinking</div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200">Modern cloud and AI delivery</div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200">Capability building through training</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Ready to plan your next project, platform, or workshop?"
                copy="Start with a conversation about your goals, current constraints, and the most sensible next step. Consultancy, delivery, and training engagements are all welcome."
              />

              <div className="mt-8 rounded-[2rem] border border-cyan/20 bg-gradient-to-br from-cyan/10 via-white/5 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Best fit engagements</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  AI enablement, cloud migration, software delivery, automation projects, internal tools, and practical workshops for businesses or education settings.
                </p>
              </div>

              <div className="mt-10 space-y-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Email</p>
                  <p className="mt-2 text-lg text-white">danesh@bytecodeconsulting.com</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">LinkedIn</p>
                  <p className="mt-2 text-lg text-white">linkedin.com/in/your-profile</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Calendly</p>
                  <p className="mt-2 text-lg text-white">calendly.com/your-handle</p>
                </div>
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
