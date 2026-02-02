import GalleryGrid from "@/components/GalleryGrid";
import { lookbookItems } from "@/lib/lookbook";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-sand/60">Lookbook</p>
        <h1 className="font-display text-4xl text-sand">The Keikos campaign archive</h1>
        <p className="max-w-2xl text-sm text-sand/70">
          A visual story of the Keikos Fine Reserve. Every page captures the product,
          the ritual, and the slow luxury of a coastal pour.
        </p>
      </div>
      <GalleryGrid items={lookbookItems} />
    </div>
  );
}
