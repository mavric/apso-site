import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { mdxComponents } from "@/components/content/mdx-components";
import { MdxLayout } from "@/components/content/mdx-layout";
import type { BlogFrontmatter } from "@/types/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug<BlogFrontmatter>("blog", slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getContentBySlug<BlogFrontmatter>("blog", slug);
  if (!post) notFound();

  return (
    <MdxLayout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      date={post.frontmatter.date}
      author={post.frontmatter.author}
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: post.frontmatter.title },
      ]}
    >
      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </MdxLayout>
  );
}
