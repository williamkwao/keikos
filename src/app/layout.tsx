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
  title: "Keikos Fine Reserve",
  description: "Keikos Fine Reserve rum, crafted in the Caribbean and aged with patience.",
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
