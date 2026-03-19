"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/site/logo-mark";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site-content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "px-4 pt-3" : "px-0 pt-0",
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl border border-transparent px-6 py-4 md:px-8",
          scrolled ? "glass-panel rounded-[2rem] border-white/10 shadow-panel" : "bg-transparent",
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5">
            <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-white">BYTECODE</div>
              <div className="text-xs uppercase tracking-[0.32em] text-slate-400">Consulting</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="hidden text-sm text-slate-300 transition hover:text-white xl:inline-flex">
              admin@bytecodeconsulting.com
            </Link>
            <Button href="/contact" className="px-4 py-2.5 text-sm">
              Book a consultation
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="text-lg leading-none">{mobileOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {mobileOpen ? (
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
              admin@bytecodeconsulting.com
            </div>
            <Button href="/contact" className="w-full justify-center">
              Book a consultation
            </Button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
