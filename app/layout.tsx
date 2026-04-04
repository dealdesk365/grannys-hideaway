import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
  priceRange: "$325/night",
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
