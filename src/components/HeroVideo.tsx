"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  className?: string;
  src: string;
  poster?: string;
};

export default function HeroVideo({ className, src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay can still be blocked on some devices (low power mode, user settings).
      });
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);

    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
