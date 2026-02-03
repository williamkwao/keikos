"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="text-xs uppercase tracking-[0.5em] text-sand/60">Keikos</span>
          <span className="font-display text-lg text-sand">Fine Reserve</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-sand/80 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-sand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden text-xs uppercase tracking-[0.35em] text-sand/70"
        >
          Menu
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-ink/95"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 h-full bg-gradient-to-b from-ink via-inkSoft to-black px-6 py-8">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.5em] text-sand/60">Keikos</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.35em] text-sand/70"
              >
                Close
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-4 text-lg text-sand">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-sand/90 shadow-lg shadow-black/40 backdrop-blur"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
