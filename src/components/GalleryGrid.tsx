import Image from "next/image";
import type { LookbookItem } from "@/lib/lookbook";

export default function GalleryGrid({ items }: { items: LookbookItem[] }) {
  return (
    <div className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
      {items.map((item) => (
        <div
          key={item.pageIndex}
          className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/30"
        >
          <div className="relative w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title ?? "Keikos Fine Reserve"}
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-sand/60">Lookbook</p>
            <h3 className="mt-2 font-display text-xl text-sand">
              {item.title ?? "Keikos Fine Reserve"}
            </h3>
            <p className="mt-2 text-sm text-sand/70">
              {item.type === "extra"
                ? item.body || "A campaign note from the Keikos reserve."
                : "A visual moment from the Keikos campaign."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
