import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide } from "@/data/guides";
import { getCluster } from "@/lib/clusters";
import { ArticleShell } from "@/components/ArticleShell";

export async function generateStaticParams() {
  const { ALL_GUIDES } = await import("@/data/guides");
  return ALL_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.date,
      modifiedTime: guide.updated,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const cluster = getCluster(guide.cluster);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.updated ?? guide.date,
    author: { "@type": "Organization", name: "Articulary", url: "https://articulary.com" },
    publisher: { "@type": "Organization", name: "Articulary", url: "https://articulary.com" },
    about: cluster?.label,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleShell
        title={guide.title}
        description={guide.description}
        date={guide.date}
        updated={guide.updated}
        readTime={guide.readTime}
        category={cluster ? { label: cluster.label, href: cluster.path } : undefined}
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          ...(cluster ? [{ label: cluster.label, href: cluster.path }] : []),
          { label: guide.title },
        ]}
        content={guide.content}
        faq={guide.faq}
        showToc={true}
      />
    </>
  );
}
