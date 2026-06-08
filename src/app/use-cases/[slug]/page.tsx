import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { mdxComponents } from "@/components/content/mdx-components";
import { MdxLayout } from "@/components/content/mdx-layout";
import type { UseCaseFrontmatter } from "@/types/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("use-cases").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug<UseCaseFrontmatter>("use-cases", slug);
  if (!item) return {};
  return {
    title: item.frontmatter.title,
    description: item.frontmatter.description,
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentBySlug<UseCaseFrontmatter>("use-cases", slug);
  if (!item) notFound();

  return (
    <MdxLayout
      title={item.frontmatter.title}
      description={item.frontmatter.description}
      breadcrumbs={[
        { label: "Use Cases", href: "/use-cases" },
        { label: item.frontmatter.title },
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
