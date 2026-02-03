import type { Metadata } from "next";
import GalleryStory from "@/components/GalleryStory";
import { lookbookItems } from "@/lib/lookbook";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the Keikos Fine Reserve gallery — a visual story of the bottle, the ritual, and the slow luxury of a coastal pour.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-sand/60">Gallery</p>
        <h1 className="font-display text-4xl text-sand">The Keikos product gallery</h1>
        <p className="max-w-2xl text-sm text-sand/70">
          A visual story of the Keikos Fine Reserve. Each image captures the product,
          the ritual, and the slow luxury of a coastal pour.
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-sand/60">
          Click any image to view as a slideshow.
        </p>
      </div>
      <GalleryStory items={lookbookItems} />
    </div>
  );
}
