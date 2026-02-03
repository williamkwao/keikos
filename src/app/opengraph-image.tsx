import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  return createOgImage({
    eyebrow: "Keikos Fine Reserve",
    headline: "The Turks & Caicos reserve crafted for slow pours and golden hours.",
  });
}
