import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://grannyshideaway.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://grannyshideaway.com/the-hideaway", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://grannyshideaway.com/book", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://grannyshideaway.com/faq", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://grannyshideaway.com/rules", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://grannyshideaway.com/reviews", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
