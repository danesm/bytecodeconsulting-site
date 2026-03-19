import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, copy, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="section-divider relative overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-20 h-64 w-64 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-[10%] top-12 h-72 w-72 rounded-full bg-cyan/10 blur-[140px]" />
      </div>
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
            {eyebrow}
          </p>
          <h1 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy}</p>
          {primaryCta || secondaryCta ? (
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
