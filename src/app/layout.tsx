import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Studio Homotomo — Creative Studio Hong Kong",
  description: "Brand strategy, visual design, and web design for ambitious brands in Hong Kong and beyond.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}