import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return createOgImage({
    eyebrow: "Contact",
    headline: "Reach the Keikos team for hospitality, retail, or private inquiries.",
  });
}
