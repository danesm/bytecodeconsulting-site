import Link from "next/link";
import { LogoMark } from "@/components/site/logo-mark";

export function Footer() {
  const quickLinks = [
    { label: "Services", href: "/services" },
    { label: "Training", href: "/training" },
    { label: "News", href: "/news" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const policyLinks = [
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <LogoMark className="h-14 w-14" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Bytecode Consulting</p>
                <p className="mt-1 text-sm text-slate-400">
                  AI • Cloud • Software Delivery • Training
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Quick Links</p>
            <div className="mt-4 grid gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              {policyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Contact</p>
            <div className="mt-4 grid gap-3">
              <a
                href="mailto:admin@bytecodeconsulting.com"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                admin@bytecodeconsulting.com
              </a>
              <p className="text-sm text-slate-500">Consultation and delivery enquiries</p>
              <Link href="/contact" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bytecode Consulting Ltd. All rights reserved.</p>
          <p>Professional technology consulting for AI adoption, modernization, and delivery.</p>
        </div>
      </div>
    </footer>
  );
}
