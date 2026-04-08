import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Granny's Hideaway`,
    description: post.excerpt,
    alternates: {
      canonical: `https://grannyshideaway.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://grannyshideaway.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

function renderContent(content: string) {
  const paragraphs = content.split("\n\n");
  return paragraphs.map((para, i) => {
    // Replace **text** with <strong>text</strong>
    const html = para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return (
      <p
        key={i}
        className="font-accent"
        style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#2a2a2a", fontSize: "1.05rem" }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main style={{ backgroundColor: "#FAF3E0", minHeight: "100vh" }}>
      {/* Header band */}
      <div style={{ backgroundColor: "#1A1A1A", padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <div
            className="font-accent"
            style={{
              color: "#D4A017",
              fontSize: "0.9rem",
              marginBottom: "1rem",
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/blog"
              style={{ color: "#D4A017", textDecoration: "none", opacity: 0.8 }}
            >
              ← Blog
            </Link>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1
            className="font-display"
            style={{
              color: "#FAF3E0",
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <article
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem 1rem",
        }}
      >
        {renderContent(post.content)}
      </article>

      {/* CTA */}
      <div
        style={{
          maxWidth: "768px",
          margin: "2rem auto 4rem",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#1A1A1A",
            borderRadius: "12px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p
            className="font-accent"
            style={{ color: "#FAF3E0", fontSize: "1.1rem", marginBottom: "1.25rem", lineHeight: 1.6 }}
          >
            Ready to explore Northern Michigan?
          </p>
          <Link
            href="/book"
            className="font-accent"
            style={{
              display: "inline-block",
              backgroundColor: "#D4A017",
              color: "#1A1A1A",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1.05rem",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              border: "2px solid #FAF3E0",
            }}
          >
            Book Your Stay at Granny&apos;s Hideaway →
          </Link>
        </div>
      </div>
    </main>
  );
}
