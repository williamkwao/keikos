import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  return createOgImage({
    eyebrow: "Keikos Gallery",
    headline: "The visual story of the bottle, ritual, and coastal pour.",
  });
}
