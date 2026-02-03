import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keikosrum.com"),
  title: {
    default: "Keikos Fine Reserve X.O.",
    template: "%s | Keikos Fine Reserve",
  },
  description:
    "Keikos Fine Reserve X.O. is an artisanal rum from the Turks and Caicos Islands, crafted from organic sugarcane and aged in oak for depth and character.",
  openGraph: {
    title: "Keikos Fine Reserve X.O.",
    description:
      "An artisanal Turks and Caicos rum refined by time, defined by character, and aged in oak for a smooth, luxurious finish.",
    type: "website",
    siteName: "Keikos Fine Reserve",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keikos Fine Reserve X.O.",
    description:
      "An artisanal Turks and Caicos rum refined by time, defined by character, and aged in oak for a smooth, luxurious finish.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <AgeGate />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
