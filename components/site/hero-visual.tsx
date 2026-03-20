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
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Our Engineering Standards</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              Secure, scalable, and maintainable engineering practices built into every delivery.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Secure Applications</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Security-conscious development for websites, internal tools, and business systems.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Analytics & Insight</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Clear reporting and usage visibility to support better decisions.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Monitoring Dashboards</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Clear monitoring dashboards and operational visibility that help systems stay reliable.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Automated Testing</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Quality checks and delivery discipline that reduce regressions and improve confidence.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Pay as you go IT infrastructure</p>
              <p className="mt-2 text-sm font-medium text-slate-100">Flexible cloud setup aligned to business usage and cost control.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Self-managed IT infrastructure</p>
              <p className="mt-2 text-sm font-medium text-slate-100">Modern platforms your team can operate confidently with the right structure and handover.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
