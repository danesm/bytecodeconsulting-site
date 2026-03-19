export function ContactDetails() {
  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Email</p>
        <p className="mt-2 text-lg text-white">admin@bytecodeconsulting.com</p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Location</p>
        <p className="mt-2 text-lg text-white">Dartford, Kent, United Kingdom</p>
      </div>
    </div>
  );
}
