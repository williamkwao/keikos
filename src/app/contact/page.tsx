import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Keikos Fine Reserve X.O. for restaurant, resort, retail, or private inquiries. Reach our team in Providenciales.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-sand/60">Contact</p>
        <h1 className="font-display text-4xl text-sand">Reach the Keikos team</h1>
        <p className="max-w-2xl text-sm text-sand/70">
          Whether you are stocking shelves or curating a tasting, we would love to hear
          from you. Share your details and we will follow up.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Placeholder form</p>
          <div className="mt-6 space-y-4 text-sm text-sand/70">
            <div className="rounded-xl border border-white/10 px-4 py-3">Name</div>
            <div className="rounded-xl border border-white/10 px-4 py-3">Email</div>
            <div className="rounded-xl border border-white/10 px-4 py-3">Message</div>
            <button className="w-full rounded-full bg-copper px-6 py-3 text-sm font-semibold text-ink">
              Contact us
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Email</p>
            <p className="mt-2 text-sm">hello@keikosrum.com</p>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Social</p>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <Link href="#" className="hover:text-sand">Instagram</Link>
              <Link href="#" className="hover:text-sand">Facebook</Link>
              <Link href="#" className="hover:text-sand">TikTok</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
