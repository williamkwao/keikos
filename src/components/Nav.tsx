import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
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
        <div className="md:hidden text-xs text-sand/70">Menu</div>
      </div>
    </header>
  );
}
