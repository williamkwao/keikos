import Image from "next/image";
import type { LookbookItem } from "@/lib/lookbook";

export default function FeatureCard({ item }: { item: LookbookItem }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title ?? "Keikos Fine Reserve"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-5">
        <p className="text-xs uppercase tracking-[0.4em] text-sand/60">Fine Reserve</p>
        <h3 className="font-display text-2xl text-sand">
          {item.title ?? "Signature Release"}
        </h3>
        <p className="text-sm text-sand/70">
          {item.body || "A slow, sun-warmed pour with notes of cane, vanilla, and salt air."}
        </p>
      </div>
    </div>
  );
}
