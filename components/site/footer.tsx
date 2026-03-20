import { LogoMark } from "@/components/site/logo-mark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <LogoMark className="h-14 w-14" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Bytecode Consulting</p>
            <p className="mt-1 text-sm text-slate-400">AI • Cloud • Software Engineering • Training</p>
            <p className="mt-1 text-sm text-slate-500">Dartford, Kent</p>
          </div>
        </div>

        <a
          href="mailto:admin@bytecodeconsulting.com"
          className="text-sm text-slate-400 transition hover:text-white"
        >
          admin@bytecodeconsulting.com
        </a>

        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Bytecode Consulting Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
