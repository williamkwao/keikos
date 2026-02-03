import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return await createOgImage({
    eyebrow: "Keikos Fine Reserve",
    headline: "The Turks & Caicos reserve crafted for slow pours and golden hours.",
  });
}
