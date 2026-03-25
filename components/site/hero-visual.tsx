type FeatureItemProps = {
  title: string;
  copy: string;
  icon: React.ReactNode;
  subtle?: boolean;
};

function FeatureItem({ title, copy, icon, subtle = false }: FeatureItemProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-5 ${subtle ? "bg-white/[0.03]" : "bg-slate-950/70"}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan-200">
          {icon}
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-300 sm:text-xs sm:tracking-[0.28em] sm:text-slate-400">
          {title}
        </p>
      </div>
      <p className="mt-3 text-base leading-7 text-slate-200 sm:text-sm sm:leading-6">{copy}</p>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute right-0 top-0 h-36 w-36 animate-pulseSoft rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute bottom-10 right-12 h-32 w-32 rounded-full bg-purple/25 blur-3xl" />
      <div className="glass-panel relative overflow-hidden rounded-[2rem] border-white/10 p-6 shadow-panel">
        <div className="grid-glow absolute inset-0 opacity-40" />
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
        <div className="absolute -right-12 top-20 h-32 w-32 rounded-full border border-cyan/20 bg-cyan/10 blur-2xl" />
        <div className="relative space-y-5">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan-200">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="M12 3l7 4v5c0 4.5-2.9 7.8-7 9-4.1-1.2-7-4.5-7-9V7l7-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m9.5 12 1.7 1.7 3.3-3.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-300 sm:text-xs sm:tracking-[0.28em] sm:text-slate-400">
                Our Engineering Standards
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureItem
              title="Secure Applications"
              copy="Security-conscious delivery for websites, internal tools, and business-critical systems."
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="M7 10V8a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 14v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              }
            />
            <FeatureItem
              title="Analytics & Insight"
              copy="Clear reporting and usage visibility to support better operational and commercial decisions."
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M7 16V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12 16V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M17 16v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              }
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureItem
              title="Monitoring Dashboards"
              copy="Visibility into services, usage, and operational performance so systems stay reliable."
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="m7 13 3-3 2 2 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <FeatureItem
              title="Automated Testing"
              copy="Quality checks and delivery discipline that reduce regressions and improve confidence."
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="M9 3h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M10 3v5l-4.5 7.5A3 3 0 0 0 8 20h8a3 3 0 0 0 2.5-4.5L14 8V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m9.5 14 1.7 1.7 3.3-3.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureItem
              title="Cloud-Native Infrastructure"
              copy="Flexible cloud architecture aligned to resilience, scale, and cost control."
              subtle
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="M7 18a4 4 0 1 1 .8-7.9A5.5 5.5 0 0 1 18.5 12 3.5 3.5 0 1 1 18 19H7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <FeatureItem
              title="Training"
              copy="Practical training and handover that help teams use new tools confidently after delivery."
              subtle
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="m12 5 8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 11v3.5c0 1.4 1.8 2.5 4 2.5s4-1.1 4-2.5V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 9v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              }
            />
          </div>

        </div>
      </div>
    </div>
  );
}
