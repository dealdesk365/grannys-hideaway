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
    { url: "https://grannyshideaway.com/mancelona-vacation-rental", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/northern-michigan-cabin-rental", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/antrim-county-cabin-rental", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/snowmobile-cabin-rental-michigan", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/sxs-utv-cabin-rental-michigan", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/deward-tract-cabin-rental", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/torch-lake-area-cabin", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/bellaire-michigan-cabin-rental", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/fall-colors-cabin-michigan", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/couples-getaway-northern-michigan", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://grannyshideaway.com/vintage-cabin-rental-michigan", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
