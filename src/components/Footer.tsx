export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-10 text-sand/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em]">Keikos Fine Reserve</p>
          <p className="mt-2 text-sm">Crafted in the Caribbean. Aged with patience.</p>
        </div>
        <div className="text-xs">
          <p>Placeholder socials: Instagram · Facebook · TikTok</p>
          <p className="mt-2">Contact: hello@keikosrum.com</p>
        </div>
      </div>
    </footer>
  );
}
