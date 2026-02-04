"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { LookbookItem } from "@/lib/lookbook";

export default function GalleryStory({ items }: { items: LookbookItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const hasActive = activeIndex !== null;
  const activeItem = hasActive ? items[activeIndex] : null;

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!hasActive) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hasActive, activeIndex]);

  const splitQA = (item: LookbookItem) => {
    const body = item.body?.trim() ?? "";
    const idx = body.indexOf("?");
    if (idx !== -1) {
      const title = body.slice(0, idx + 1).trim();
      const answer = body.slice(idx + 1).trim();
      return { title: title || null, body: answer || body };
    }
    return {
      title: item.title && item.title !== "Fine Reserve" ? item.title : null,
      body: body || "A Keikos moment captured in the reserve.",
    };
  };

  return (
    <div className="space-y-10">
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        const qa = splitQA(item);
        return (
          <div
            key={item.pageIndex}
            className={`grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] ${
              isEven ? "" : "lg:grid-cols-[0.9fr_1.1fr]"
            }`}
          >
            <div
              className={`order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}
            >
              <button
                type="button"
                className="group relative w-full overflow-hidden rounded-[28px] border border-white/10 shadow-2xl shadow-black/40"
                onClick={() => open(index)}
              >
                <Image
                  src={item.image}
                  alt={item.title ?? "Keikos Fine Reserve"}
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </button>
            </div>
            <div
              className={`order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}
            >
              {qa.title ? (
                <h3 className="font-display text-2xl text-sand">{qa.title}</h3>
              ) : null}
              <p className={qa.title ? "mt-4 text-sm text-sand/75" : "text-sm text-sand/75"}>
                {qa.body}
              </p>
            </div>
          </div>
        );
      })}

      {hasActive && activeItem ? (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur">
          <button
            type="button"
            onClick={close}
            className="absolute right-6 top-6 z-10 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sand/80"
          >
            Close
          </button>
          <div className="grid h-full w-full gap-0 pt-16 lg:grid-cols-[1.35fr_0.65fr] lg:pt-0">
            <div className="relative h-[60vh] w-full bg-ink/80 lg:h-full">
              <Image
                src={activeItem.image}
                alt={activeItem.title ?? "Keikos Fine Reserve"}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex h-[36vh] flex-col px-6 py-6 pb-4 sm:px-10 lg:h-full lg:py-16">
              {splitQA(activeItem).title ? (
                <h3 className="mt-3 font-display text-3xl text-sand">
                  {splitQA(activeItem).title}
                </h3>
              ) : null}
              <div
                className={
                  splitQA(activeItem).title
                    ? "mt-4 flex-1 overflow-auto pr-2 text-sm text-sand/75"
                    : "flex-1 overflow-auto pr-2 text-sm text-sand/75"
                }
              >
                {splitQA(activeItem).body}
              </div>
              <div className="sticky bottom-0 mt-4 flex gap-3 bg-black/80 py-4 backdrop-blur">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-sand/80"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full bg-copper px-5 py-2 text-xs uppercase tracking-[0.3em] text-ink"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
