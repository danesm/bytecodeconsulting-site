import dynamic from "next/dynamic";
import { Footer } from "@/components/site/footer";
import { HeroVisual } from "@/components/site/hero-visual";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardCopy, CardTitle } from "@/components/ui/card";
import {
  localPositioning,
} from "@/lib/site-content";

const Navbar = dynamic(() => import("@/components/site/navbar").then((mod) => mod.Navbar), { ssr: false });

export default function Home() {
  const technologyItems = [
    {
      label: "AWS",
      subtitle: "AWS Cloud",
      logoSrc: "/tool-logos/anthropic.png",
      logoAlt: "AWS logo",
      logoClassName: "h-10 w-auto",
      logoSurfaceClassName: "bg-white",
    },
    {
      label: "Google Cloud",
      logoSrc: "https://www.gstatic.com/cgc/google-cloud-logo.svg",
      logoAlt: "Google Cloud logo",
      logoClassName: "h-9 w-auto",
      logoSurfaceClassName: "bg-white",
    },
    {
      label: "React / Next.js",
      logoSrc: "/tool-logos/nextjs-react.png",
      logoAlt: "React and Next.js logo",
      logoClassName: "h-12 w-auto",
      logoSurfaceClassName: "bg-white",
    },
    {
      label: "Terraform",
      logoSrc: "/tool-logos/terraform.svg",
      logoAlt: "Terraform logo",
      logoClassName: "h-10 w-auto",
    },
    {
      label: "OpenAI",
      subtitle: "Codex",
      logoSrc: "/tool-logos/openai-logo.jpg",
      logoAlt: "OpenAI logo",
      logoClassName: "h-12 w-auto",
      logoSurfaceClassName: "bg-white",
    },
    {
      label: "Anthropic",
      subtitle: "Claude",
      logoSrc: "/tool-logos/aws.png",
      logoAlt: "Anthropic logo",
      logoClassName: "h-10 w-auto",
    },
    {
      label: "Figma",
      logoSrc: "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?auto=format&fit=max&h=540&q=75&w=540",
      logoAlt: "Figma logo",
      logoClassName: "h-10 w-10",
      logoSurfaceClassName: "bg-white",
    },
    {
      label: "Kiro",
      logoSrc: "https://kiro.dev/images/kiro-wordmark.png?h=0ad65a93",
      logoAlt: "Kiro wordmark",
      logoClassName: "h-8 w-auto",
    },
  ];

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
              AI • Cloud • Software Delivery • Training
            </div>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Use AI, cloud, and modern software to <span className="text-gradient">move faster and stay future-ready</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Bytecode Consulting helps businesses adopt AI, modernise systems, and deliver better software so teams can work more efficiently and stay competitive.
            </p>
            <p className="mt-4 max-w-2xl text-base italic leading-7 text-slate-400">
              Faster delivery, sensible pricing, and training that helps your team use the technology with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Book a consultation</Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Practical AI Adoption\nUse AI to improve workflows, service quality, and productivity.",
                "Secure Cloud Modernization\nModernise platforms for resilience, security, flexibility, and cost control.",
                "Software Delivery & Training\nDeliver secure, reliable software with the training teams need to use it confidently.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-medium leading-7 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:text-sm sm:font-normal sm:leading-6 sm:text-slate-300"
                >
                  <div
                    className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-primary via-cyan to-purple"
                    style={{ opacity: 0.8 - index * 0.12 }}
                  />
                  {item.split("\n").map((line, lineIndex) => (
                    <div
                      key={`${item}-${lineIndex}`}
                      className={lineIndex === 0 ? "font-semibold text-white sm:text-base" : "mt-2"}
                    >
                      {line}
                    </div>
                  ))}
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

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-lg italic leading-8 text-white sm:text-xl">
                  “Generative AI is going to reinvent virtually every customer experience we know.”
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">Andy Jassy, Amazon CEO</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-lg italic leading-8 text-white sm:text-xl">
                  “AI is the new electricity.”
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">Andrew Ng, Founder of DeepLearning.AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-backdrop section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Tools & Technologies"
            title="Using modern platforms and AI tools to deliver practical outcomes."
            copy="Bytecode Consulting works with leading cloud, software, and AI platforms to help organisations modernise confidently, ship efficiently, and adopt the right technology for the job."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologyItems.map((item) => (
              <div
                key={item.label}
                className="flex min-h-28 flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 text-center text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                {item.logoSrc ? (
                  <div
                    className={`flex min-h-14 items-center justify-center rounded-2xl px-4 py-3 ${
                      item.logoSurfaceClassName ?? "bg-transparent"
                    }`}
                  >
                    <img
                      src={item.logoSrc}
                      alt={item.logoAlt}
                      className={item.logoClassName}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="rounded-2xl border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cyan-100">
                    {item.label}
                  </div>
                )}
                <div className="mt-3 text-sm font-medium text-slate-300">{item.subtitle ?? item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="How We Help"
            title="A consultancy offer designed for practical outcomes."
            copy="Whether you need a focused AI pilot, a cloud modernization roadmap, a working software product, or training that helps your team adopt the change, the emphasis stays on useful outcomes over unnecessary complexity."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Card className="flex h-full flex-col justify-between">
              <div>
                <CardTitle>AI & Cloud Consulting</CardTitle>
                <CardCopy>
                  Strategy, architecture, and delivery support for organisations that want to adopt AI sensibly and modernise with cloud-native approaches.
                </CardCopy>
              </div>
              <Button href="/services" variant="secondary" className="mt-8 w-full justify-center">
                View services
              </Button>
            </Card>
            <Card className="flex h-full flex-col justify-between">
              <div>
                <CardTitle>Software Delivery</CardTitle>
                <CardCopy>
                  Delivery of websites, internal tools, operational platforms, and modernization work with strong engineering discipline from day one.
                </CardCopy>
              </div>
              <Button href="/services" variant="secondary" className="mt-8 w-full justify-center">
                Explore delivery
              </Button>
            </Card>
            <Card className="flex h-full flex-col justify-between">
              <div>
                <CardTitle>Training & Enablement</CardTitle>
                <CardCopy>
                  Workshops, mentoring, and practical guidance that help business and technical teams understand the technology and use it well.
                </CardCopy>
              </div>
              <Button href="/training" variant="secondary" className="mt-8 w-full justify-center">
                View training
              </Button>
            </Card>
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
                  Let&apos;s plan the right next step.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                  If you&apos;re planning a new website, looking to automate repetitive processes, improve how your team handles enquiries, or introduce AI into day-to-day operations, Bytecode Consulting can help you move forward with clarity.
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
