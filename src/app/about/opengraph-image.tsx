import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  return createOgImage({
    eyebrow: "About Keikos",
    headline: "Legacy, craft, and island character refined by time.",
  });
}
