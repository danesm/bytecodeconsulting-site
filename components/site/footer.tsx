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
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/bytecode2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Bytecode Consulting on X"
              className="text-slate-500 transition hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575348774145"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Bytecode Consulting on Facebook"
              className="text-slate-500 transition hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
