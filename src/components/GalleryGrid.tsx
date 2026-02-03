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
          <div className="p-4" />
        </div>
      ))}
    </div>
  );
}
