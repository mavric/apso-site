import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllContent } from "@/lib/content";
import { APP_URL } from "@/lib/constants";
import type { BlogFrontmatter } from "@/types/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, product updates, and guides from the Apso team.",
};

export default function BlogIndex() {
  const posts = getAllContent<BlogFrontmatter>("blog");

  return (
    <>
      <Section>
        <Container>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/dog-puppy.svg"
                alt=""
                width={80}
                height={80}
                className="h-16 w-auto opacity-80"
                aria-hidden="true"
              />
            </div>
            <p className="text-eyebrow text-brand mb-4">Blog</p>
            <h1 className="text-h1 text-fg-1 mb-4">From the Apso Team</h1>
            <p className="text-lead text-fg-3 max-w-[640px] mx-auto">
              Technical articles, product updates, and guides on schema-driven
              backend generation.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-fg-4">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card padding="lg" className="h-full hover:border-brand/40 transition-colors group">
                    <div className="h-1.5 w-12 rounded-full bg-brand/20 group-hover:bg-brand/40 transition-colors mb-5" />
                    <p className="text-sm text-fg-5 mb-3">
                      {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h2 className="font-display font-700 text-[22px] text-fg-1 mb-3 leading-tight">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-[15px] text-fg-3 leading-relaxed">
                      {post.frontmatter.description}
                    </p>
                    <p className="mt-4 text-sm text-brand font-medium group-hover:text-brand-hover transition-colors">
                      Read more
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Section bg="gray">
        <Container className="text-center max-w-[720px]">
          <h2 className="text-h3 text-fg-1 mb-3">
            Ready to try Apso?
          </h2>
          <p className="text-fg-3 mb-6">
            Generate a production backend from a schema and own every line.
          </p>
          <Button href={APP_URL} external>
            Start Building Free
          </Button>
        </Container>
      </Section>
    </>
  );
}
