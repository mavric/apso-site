import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { mdxComponents } from "@/components/content/mdx-components";
import { MdxLayout } from "@/components/content/mdx-layout";
import type { CompareFrontmatter } from "@/types/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("compare").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug<CompareFrontmatter>("compare", slug);
  if (!item) return {};
  return {
    title: item.frontmatter.title,
    description: item.frontmatter.description,
  };
}

export default async function ComparePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentBySlug<CompareFrontmatter>("compare", slug);
  if (!item) notFound();

  return (
    <MdxLayout
      title={item.frontmatter.title}
      description={item.frontmatter.description}
      breadcrumbs={[
        { label: "Compare", href: "/compare" },
        { label: `Apso vs ${item.frontmatter.competitor}` },
      ]}
    >
      <MDXRemote
        source={item.content}
        components={mdxComponents}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </MdxLayout>
  );
}
