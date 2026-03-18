"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/site/logo-mark";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site-content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          "mx-auto flex max-w-7xl items-center justify-between border border-transparent px-6 py-4 md:px-8",
          scrolled
            ? "glass-panel rounded-full border-white/10 shadow-panel"
            : "bg-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-3">
          <LogoMark className="h-10 w-10" />
          <div>
            <div className="text-sm font-semibold tracking-[0.2em] text-white">BYTECODE</div>
            <div className="text-xs uppercase tracking-[0.32em] text-slate-400">Consulting</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden text-sm text-slate-300 transition hover:text-white xl:inline-flex">
            hello@bytecodeconsulting.com
          </a>
          <Button href="#contact" className="px-4 py-2.5 text-sm">
            Book a consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
