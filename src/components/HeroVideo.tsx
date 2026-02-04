"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  className?: string;
  src: string;
  poster?: string;
};

export default function HeroVideo({ className, src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const tryPlay = () => {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay can still be blocked on some devices (low power mode, user settings).
        setIsPlaying(false);
      });
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("play", () => setIsPlaying(true));
    video.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("play", () => setIsPlaying(true));
      video.removeEventListener("pause", () => setIsPlaying(false));
    };
  }, []);

  return (
    <div
      className={className}
      style={poster ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      <video
        ref={videoRef}
        className={`h-full w-full object-cover ${isPlaying ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        disablePictureInPicture
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
