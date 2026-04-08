import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `https://grannyshideaway.com/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: "https://grannyshideaway.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://grannyshideaway.com/the-hideaway", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://grannyshideaway.com/book", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://grannyshideaway.com/faq", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://grannyshideaway.com/rules", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://grannyshideaway.com/reviews", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://grannyshideaway.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogEntries,
  ];
}
