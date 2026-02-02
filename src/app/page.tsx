import Image from "next/image";
import Link from "next/link";
import { featureItems, storyItems } from "@/lib/lookbook";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  const story = storyItems.slice(0, 3);

  return (
    <div className="texture-overlay">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.45em] text-sand/70">Keikos Fine Reserve</p>
          <h1 className="font-display text-4xl leading-tight text-sand sm:text-5xl">
            The Caribbean reserve crafted for slow pours and golden hours.
          </h1>
          <p className="max-w-xl text-base text-sand/75">
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
              Explore Lookbook
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Aged</p>
              <p className="mt-2 font-display text-2xl">8-10 Years</p>
            </div>
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Origin</p>
              <p className="mt-2 font-display text-2xl">Caribbean</p>
            </div>
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Style</p>
              <p className="mt-2 font-display text-2xl">Fine Reserve</p>
            </div>
          </div>
        </div>
        <div className="relative order-first lg:order-none">
          <div className="absolute -inset-12 bg-[radial-gradient(circle_at_40%_20%,rgba(232,160,123,0.35),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(244,231,210,0.18),transparent_55%)] blur-2xl" />
          <div className="absolute inset-x-6 top-10 h-[70%] rounded-full bg-[radial-gradient(circle,rgba(255,236,200,0.25),transparent_70%)] blur-3xl" />
          <div className="hero-bottle relative mx-auto flex h-[360px] items-end justify-center sm:h-[420px] lg:h-[560px]">
            <Image
              src="/images/keikos-bottle.png"
              alt="Keikos Fine Reserve bottle"
              width={520}
              height={980}
              priority
              className="h-full w-auto object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="section-title text-2xl text-sand">Product Highlights</h2>
          <Link href="/gallery" className="text-xs uppercase tracking-[0.3em] text-sand/60">
            Full Lookbook
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((item) => (
            <FeatureCard key={item.pageIndex} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-sand/60">Craft</p>
            <h2 className="font-display text-3xl text-sand">A reserve shaped by tradition.</h2>
            <p className="text-sm text-sand/70">
              Keikos is produced in the Caribbean using time-honored distilling and aging
              methods refined in the Cognac region of France. The result is a warm, layered
              spirit worthy of the long pour.
            </p>
          </div>
          <div className="grid gap-4">
            {story.map((item) => (
              <div key={item.pageIndex} className="glass-panel rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Keikos Note</p>
                <p className="mt-3 text-sm text-sand/75">
                  {item.body || "A Keikos campaign detail, refined and archived."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
