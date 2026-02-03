import Image from "next/image";
import type { LookbookItem } from "@/lib/lookbook";

export default function FeatureCard({ item }: { item: LookbookItem }) {
  const fallbackTitle = item.title ?? "Signature Release";
  const fallbackBody =
    item.body || "A slow, sun-warmed pour with notes of cane, vanilla, and salt air.";

  const splitQA = () => {
    if (!item.body) {
      return { title: fallbackTitle, body: fallbackBody };
    }
    const idx = item.body.indexOf("?");
    if (idx === -1) {
      return { title: fallbackTitle, body: fallbackBody };
    }
    const title = item.body.slice(0, idx + 1).trim();
    const body = item.body.slice(idx + 1).trim();
    if (!body) {
      return { title: fallbackTitle, body: fallbackBody };
    }
    return { title, body };
  };

  const qa = splitQA();

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
        <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-sand/85">
          {qa.title}
        </h3>
        <p className="text-sm text-sand/70">
          {qa.body}
        </p>
      </div>
    </div>
  );
}
