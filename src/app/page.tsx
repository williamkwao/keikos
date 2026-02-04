import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { featureItems } from "@/lib/lookbook";
import FeatureCard from "@/components/FeatureCard";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "Keikos Fine Reserve X.O.",
  description:
    "Discover Keikos Fine Reserve X.O., an artisanal Turks and Caicos rum aged in oak for a smooth, layered finish designed for slow pours and golden hours.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const craftHighlights = [
    {
      title: "Finest ingredients",
      body: "Crafted from organically grown sugarcane juice for a clean, authentic foundation.",
    },
    {
      title: "Made with care",
      body: "Handcrafted in small batches by dedicated artisans for balance and exclusivity.",
    },
    {
      title: "Aged to depth",
      body: "Extended aging in oak builds rich layers of spice, wood, and warm finish.",
    },
  ];

  return (
    <div className="texture-overlay">
      <section className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <HeroVideo
            className="h-full w-full object-cover object-[center_35%]"
            src="/videos/keikos-hero.mp4"
            poster="/images/keikos-craft.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80 md:from-black/60 md:via-black/35 md:to-black/70" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4">
        <div className="relative space-y-8">
          <p className="text-xs uppercase tracking-[0.45em] text-sand/70">Keikos Fine Reserve</p>
          <h1 className="relative z-10 font-display text-3xl leading-tight text-sand sm:text-4xl lg:text-6xl">
            The Caribbean reserve crafted{" "}
            <span className="relative inline-flex items-center">
              <span className="lg:ml-0">for slow pours</span>
            </span>{" "}
            and golden hours.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-sand/85 sm:text-base sm:leading-relaxed">
            Keikos Fine Reserve blends Caribbean sugarcane, French oak aging, and coastal
            air into a sipping rum designed for the long pour. Every bottle is a study in
            patience, warmth, and refined character.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-copperLight"
            >
              Contact us
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-sand transition hover:border-white/40"
            >
              Explore Gallery
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-sand/70 sm:hidden">
              Aged <span className="text-sand">8-10 Years</span> · Origin{" "}
              <span className="text-sand">Turks &amp; Caicos</span> · Style{" "}
              <span className="text-sand">Fine Reserve</span>
            </div>
            <div className="glass-panel hidden rounded-2xl p-3 sm:block sm:p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Aged</p>
              <p className="mt-2 font-display text-xl sm:text-2xl">8-10 Years</p>
            </div>
            <div className="glass-panel hidden rounded-2xl p-3 sm:block sm:p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Origin</p>
              <p className="mt-2 font-display text-xl sm:text-2xl">Turks &amp; Caicos</p>
            </div>
            <div className="glass-panel hidden rounded-2xl p-3 sm:block sm:p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Style</p>
              <p className="mt-2 font-display text-xl sm:text-2xl">Fine Reserve</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block" />
        <div className="pointer-events-none absolute bottom-6 right-10 hidden lg:block">
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_40%_20%,rgba(232,160,123,0.28),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(244,231,210,0.16),transparent_55%)] blur-2xl" />
          <div className="hero-bottle relative flex h-[300px] w-[230px] items-end justify-end">
            <Image
              src="/images/keikos-bottle.png"
              alt="Keikos Fine Reserve bottle"
              width={300}
              height={680}
              priority
              className="h-full w-auto object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-4 sm:pt-8">
        <div className="space-y-4">
          <h2 className="section-title text-2xl text-sand">Product Highlights</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((item) => (
            <FeatureCard key={item.pageIndex} item={item} />
          ))}
        </div>
        <Link
          href="/gallery"
          className="mt-6 inline-flex text-xs uppercase tracking-[0.3em] text-sand/60"
        >
          View Gallery
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-sand/60">Craft</p>
            <h2 className="font-display text-3xl text-sand">A reserve shaped by tradition.</h2>
            <p className="text-sm text-sand/70">
              Keikos is produced in the Caribbean using time-honored distilling and aging
              methods refined in the Cognac region of France. The result is a warm, layered
              spirit worthy of the long pour.
            </p>
            <div className="grid gap-4">
              {craftHighlights.map((item) => (
                <div key={item.title} className="glass-panel rounded-2xl p-5">
                  <p className="mt-1 font-display text-lg text-sand">{item.title}</p>
                  <p className="mt-3 text-sm text-sand/75">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src="/images/keikos-craft.jpg"
              alt="Keikos bottle on the shoreline"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
