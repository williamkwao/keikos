import { storyItems } from "@/lib/lookbook";

export default function AboutPage() {
  const highlights = storyItems.slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-sand/60">About Keikos</p>
        <h1 className="font-display text-4xl text-sand">Tradition in every reserve</h1>
        <p className="max-w-2xl text-sm text-sand/70">
          Keikos Fine Reserve is a blend of Caribbean heritage and French distilling
          precision. Every pour begins with organically grown sugarcane, aged in French
          oak barrels and finished with a coastal signature.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((item) => (
          <div key={item.pageIndex} className="glass-panel rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Keikos Detail</p>
            <p className="mt-3 text-sm text-sand/75">
              {item.body || "A Keikos detail, refined and archived."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
