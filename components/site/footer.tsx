import Link from "next/link";
import { LogoMark } from "@/components/site/logo-mark";
import { navItems } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <LogoMark className="h-14 w-14" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Bytecode Consulting</p>
            <p className="mt-1 text-sm text-slate-400">AI • Cloud • Software Engineering • Training</p>
            <p className="mt-1 text-sm text-slate-500">Dartford, Kent • Supporting local and UK organisations</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-400">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Bytecode Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}
