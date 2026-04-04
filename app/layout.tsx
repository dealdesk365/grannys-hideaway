import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Granny's Hideaway | Retro Chalet Rental in Mancelona, Northern Michigan",
  description:
    "Book Granny's Hideaway — a one-of-a-kind retro chalet in Mancelona, MI. Your base camp for Gaylord golf, Torch Lake, Mackinac Bridge, snowmobiling, and ORV trails. Opening Summer 2026.",
  keywords: [
    "Lakes of the North cabin rental",
    "LOTN vacation rental",
    "Antrim County STR",
    "Northern Michigan chalet rental",
    "Mancelona Michigan Airbnb",
    "retro cabin rental Michigan",
  ],
  openGraph: {
    title: "Granny's Hideaway | Retro Chalet Rental in Mancelona, Northern Michigan",
    description:
      "A one-of-a-kind retro chalet in Mancelona, MI. Your base camp for Gaylord golf, Torch Lake, Mackinac Bridge, and more. Opening Summer 2026.",
    url: "https://grannyshideaway.com",
    siteName: "Granny's Hideaway",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
