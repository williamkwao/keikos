import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return createOgImage({
    eyebrow: "About Keikos",
    headline: "Legacy, craft, and island character refined by time.",
  });
}
