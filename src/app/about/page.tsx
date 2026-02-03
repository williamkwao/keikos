import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    label: "Aged",
    value: "Minimum 8 years",
    detail: "Matured in oak casks under tropical conditions for depth and warmth.",
  },
  {
    label: "Craft",
    value: "Sugarcane-based",
    detail:
      "Fresh, organically grown sugarcane juice shapes a cleaner, more authentic profile.",
  },
  {
    label: "Strength",
    value: "42% ABV (84 Proof)",
    detail: "Bold yet smooth, built for a long, satisfying finish.",
  },
];

const craftNotes = [
  {
    title: "Traditional distilling",
    body: "Made in the Caribbean using 17th-century distilling and aging methods refined with French Cognac influence.",
  },
  {
    title: "Artisanal, small batch",
    body: "Every batch is handcrafted by dedicated artisans, ensuring balance, character, and exclusivity.",
  },
  {
    title: "Extended aging",
    body: "Extra Old aging brings layered aromas of wood, sugarcane, spice, and subtle smoke.",
  },
  {
    title: "Distinctive terroir",
    body: "Each release captures the character of a single plantation and the island climate.",
  },
];

const audience = [
  "Restaurants and cocktail programs",
  "Boutique hotels and luxury resorts",
  "Premium retailers and wholesalers",
  "Individual enthusiasts and collectors",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-sand/60">About Keikos</p>
          <h1 className="font-display text-4xl text-sand">
            Indulge in the legacy of Keikos Fine Reserve X.O.
          </h1>
          <p className="max-w-2xl text-sm text-sand/70">
            Keikos Fine Reserve X.O. is an artisanal rum from the Turks and Caicos Islands,
            refined by time and defined by character. Crafted from organically grown
            sugarcane and aged for a minimum of eight years, it offers a smooth yet bold
            profile with a warm, slightly smoky finish.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-copperLight"
            >
              Contact Keikos
            </Link>
            <a
              href="#availability"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-sand transition hover:border-white/40"
            >
              Find a bottle
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-2xl shadow-black/40">
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <Image
            src="/images/keikos-about-hero.png"
            alt="Keikos Fine Reserve poured on the shoreline"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.label} className="glass-panel rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/60">{item.label}</p>
            <p className="mt-2 font-display text-2xl text-sand">{item.value}</p>
            <p className="mt-3 text-sm text-sand/75">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-sand/60">What sets Keikos apart</p>
          <h2 className="font-display text-3xl text-sand">Tradition meets luxury.</h2>
          <p className="text-sm text-sand/70">
            Keikos is celebrated for its complex aromas of wood, sugarcane, tropical fruits,
            and subtle spices. The long aging and artisanal blending deliver a rum that is
            refined, authentic, and unmistakably Keikos.
          </p>
          <div className="grid gap-4">
            {craftNotes.map((note) => (
              <div key={note.title} className="glass-panel rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-sand/60">{note.title}</p>
                <p className="mt-3 text-sm text-sand/75">{note.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-sand/60">Who it is for</p>
            <h2 className="font-display text-3xl text-sand">Built for discerning tastes.</h2>
            <p className="text-sm text-sand/70">
              Whether you are curating a luxury bar, elevating a resort program, or
              collecting exceptional spirits, Keikos Fine Reserve X.O. is designed for
              those who value depth, craftsmanship, and authenticity.
            </p>
          </div>
          <div className="grid gap-4">
            {audience.map((item) => (
              <div key={item} className="glass-panel rounded-2xl p-5">
                <p className="text-sm text-sand/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="availability" className="mt-16">
        <div className="glass-panel rounded-3xl px-8 py-10">
          <p className="text-xs uppercase tracking-[0.4em] text-sand/60">Contact and availability</p>
          <h2 className="mt-3 font-display text-3xl text-sand">
            Available in Providenciales
          </h2>
          <p className="mt-4 text-sm text-sand/75">
            Find Keikos Fine Reserve X.O. at IGA Supermarket, IGA Gourmet, Blue Haven Cafe &
            Convenience Store, GK Food Store, and Alex Supermarket.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Address</p>
              <p className="mt-2 text-sm text-sand/80">64 Marketplace, Providenciales</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Phone</p>
              <p className="mt-2 text-sm text-sand/80">649 346 3429</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
