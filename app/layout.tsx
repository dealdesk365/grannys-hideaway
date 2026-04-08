import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Granny's Hideaway | Retro Chalet Rental in Mancelona, Northern Michigan",
  description:
    "Book Granny's Hideaway — a one-of-a-kind retro chalet in Mancelona, MI. $275/night. Your base camp for Gaylord golf, Torch Lake, Mackinac Bridge, snowmobiling, and ORV trails. Now booking from June 15.",
  keywords: [
    "Lakes of the North cabin rental",
    "LOTN vacation rental",
    "Antrim County STR",
    "Northern Michigan chalet rental",
    "Mancelona Michigan cabin rental",
    "retro cabin rental Michigan",
    "Gaylord golf cabin",
    "Torch Lake cabin rental",
    "Northern Michigan vacation rental",
  ],
  metadataBase: new URL("https://grannyshideaway.com"),
  alternates: {
    canonical: "https://grannyshideaway.com",
  },
  openGraph: {
    title: "Granny's Hideaway | Retro Chalet Rental in Mancelona, Northern Michigan",
    description:
      "A one-of-a-kind retro chalet in Mancelona, MI. $275/night + $125 cleaning fee. Your base camp for Gaylord golf, Torch Lake, Mackinac Bridge, and more. Now booking from June 15.",
    url: "https://grannyshideaway.com",
    siteName: "Granny's Hideaway",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Granny's Hideaway",
  description:
    "A one-of-a-kind retro chalet vacation rental in Mancelona, Northern Michigan. Your base camp for Gaylord golf, Torch Lake, Mackinac Bridge, snowmobiling, and ORV trails.",
  url: "https://grannyshideaway.com",
  telephone: "",
  email: "grannyshideaway@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mancelona",
    addressRegion: "MI",
    addressCountry: "US",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fire Pit", value: true },
    { "@type": "LocationFeatureSpecification", name: "Washer/Dryer", value: true },
    { "@type": "LocationFeatureSpecification", name: "Full Kitchen", value: true },
  ],
  numberOfRooms: 3,
  occupancy: { "@type": "QuantitativeValue", maxValue: 9 },
  priceRange: "$275/night + $125 cleaning fee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
