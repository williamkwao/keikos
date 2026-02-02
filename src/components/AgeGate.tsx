"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "keikos-age-verified";

type GateState = "unknown" | "accepted" | "declined";

export default function AgeGate() {
  const [state, setState] = useState<GateState>("unknown");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted") {
      setState("accepted");
    } else if (stored === "declined") {
      setState("declined");
    } else {
      setState("unknown");
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setState("accepted");
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setState("declined");
  };

  if (state === "accepted") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 px-6 text-white backdrop-blur-sm">
      <div className="max-w-xl rounded-2xl border border-white/15 bg-sand/10 p-8 text-center shadow-2xl">
        <p className="text-xs uppercase tracking-[0.4em] text-sand/80">Keikos Fine Reserve</p>
        <h2 className="mt-4 font-display text-3xl text-sand">Are you 21 or older?</h2>
        <p className="mt-3 text-sm text-sand/80">
          Keikos Fine Reserve is crafted for adults of legal drinking age. Please confirm to enter.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-copperLight"
            onClick={accept}
          >
            Yes, I&apos;m 21+
          </button>
          <button
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white/40"
            onClick={decline}
          >
            No, take me back
          </button>
        </div>
        {state === "declined" ? (
          <p className="mt-4 text-xs text-white/60">We&apos;ll be here when the time is right.</p>
        ) : null}
      </div>
    </div>
  );
}
