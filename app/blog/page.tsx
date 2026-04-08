import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Northern Michigan Travel Blog | Granny's Hideaway",
  description:
    "Discover the best of northern Michigan — from Gaylord's world-class golf courses and Torch Lake's turquoise waters to fall color drives, ORV trails, and hidden gems near Granny's Hideaway.",
  openGraph: {
    title: "Northern Michigan Travel Blog | Granny's Hideaway",
    description:
      "Travel tips, guides, and local secrets for your northern Michigan getaway — written from Granny's Hideaway, right in the heart of it all.",
    url: "https://grannyshideaway.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main style={{ backgroundColor: "#FAF3E0", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#1A1A1A",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <h1
          className="font-display"
          style={{ color: "#D4A017", fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}
        >
          Northern Michigan Travel Blog
        </h1>
        <p
          className="font-accent"
          style={{
            color: "#FAF3E0",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Golf, lakes, trails, and fall colors — your guide to the best of northern Michigan, from
          the heart of Granny&apos;s country.
        </p>
      </section>

      {/* Post grid */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "3rem 1.5rem 4rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid #D4A017",
                borderRadius: "12px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {/* Meta */}
              <div
                className="font-accent"
                style={{
                  fontSize: "0.85rem",
                  color: "#888",
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h2
                className="font-display"
                style={{
                  color: "#1A1A1A",
                  fontSize: "1.25rem",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {post.title}
              </h2>

              {/* Excerpt */}
              <p
                className="font-accent"
                style={{
                  color: "#444",
                  fontSize: "0.97rem",
                  lineHeight: 1.65,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {post.excerpt}
              </p>

              {/* Read more */}
              <Link
                href={`/blog/${post.slug}`}
                className="font-accent"
                style={{
                  color: "#2A9D8F",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginTop: "0.25rem",
                }}
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
