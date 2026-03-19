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
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Delivery Approach</p>
              <p className="mt-2 text-lg font-semibold text-white">Modern engineering with practical business outcomes</p>
            </div>
            <div className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs text-cyan-200">
              Cloud & Mobile first thinking
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">AI Enablement</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Discovery, safe adoption, workflow design, and practical experimentation support.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Cloud Architecture</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Secure, scalable infrastructure and migration planning built for real operating needs.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Adoption", "AI strategy and rollout"],
              ["Delivery", "Cloud and software implementation"],
              ["Enablement", "Training for teams and students"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">{label}</p>
                <p className="mt-2 text-sm font-medium text-slate-100">{value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Capability Building</p>
                <p className="mt-2 text-2xl font-semibold text-white">Training woven into delivery</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                  Workshops, mentoring, and handover designed to leave your team stronger after implementation.
                </p>
              </div>
              <div className="hidden h-28 w-28 rounded-full bg-gradient-to-br from-primary via-cyan to-purple blur-[2px] sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
