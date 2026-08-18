import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Braces, FileText, GitBranch, TerminalSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { PageCta } from "@/components/marketing/page-cta";
import { HeroLedger } from "@/components/marketing/hero-ledger";
import { getAllContent } from "@/lib/content";
import type { BlogFrontmatter } from "@/types/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Product notes and technical guides about agent-driven backend generation, code ownership, and backend architecture.",
};

export default function BlogIndex() {
  const posts = getAllContent<BlogFrontmatter>("blog");
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Writing from Apso"
        title="Notes on building backends with agents"
        description="Product decisions, architecture guides, and practical comparisons for teams that want AI-assisted development with a backend they can inspect and own."
        actions={
          featured ? <a href={`/blog/${featured.slug}`} className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-6 font-display text-[14px] font-semibold text-white hover:bg-brand-hover">Read the latest article</a> : undefined
        }
        meta={[`${posts.length} published articles`, "Product and architecture", "Written by the Apso team"]}
        visual={
          <HeroLedger
            label="Editorial focus"
            rows={[
              { label: "Agent workflows", value: "Where agents help and where repeatable generation matters.", icon: TerminalSquare },
              { label: "Backend architecture", value: "Schemas, access boundaries, migrations, and service design.", icon: Braces },
              { label: "Ownership decisions", value: "Clear tradeoffs between hosted platforms and portable code.", icon: GitBranch },
            ]}
            footer="practical guidance for the backend foundation"
          />
        }
      />

      <Section>
        <Container>
          {featured ? (
            <div className="grid overflow-hidden rounded-sm border border-line-1 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex min-h-[360px] flex-col bg-navy p-7 text-white md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase text-accent">Latest article</span>
                  <BookOpen aria-hidden="true" className="h-5 w-5 text-white/35" />
                </div>
                <div className="my-auto py-10">
                  <p className="font-mono text-[10px] text-white/30">backend.foundation</p>
                  <div className="mt-4 space-y-3 font-mono text-[12px]">
                    <p><span className="text-[#79c0ff]">agent</span><span className="text-white/50">.describe</span><span className="text-white">(idea)</span></p>
                    <p><span className="text-[#d2a8ff]">apso</span><span className="text-white/50">.define</span><span className="text-white">(schema)</span></p>
                    <p><span className="text-accent">service</span><span className="text-white/50">.generate</span><span className="text-white">({`{ owned: true }`})</span></p>
                  </div>
                </div>
                <p className="border-t border-white/10 pt-4 font-mono text-[10px] text-white/35">consistent structure, reviewable output</p>
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <p className="font-mono text-[10px] uppercase text-fg-5">{formatDate(featured.frontmatter.date)}</p>
                <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-fg-1">{featured.frontmatter.title}</h2>
                <p className="mt-4 text-[15px] leading-7 text-fg-3">{featured.frontmatter.description}</p>
                <Link href={`/blog/${featured.slug}`} className="mt-7 inline-flex items-center gap-2 font-display text-[14px] font-semibold text-brand hover:text-brand-hover">
                  Read article <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-fg-4">The first article is being prepared.</p>
          )}

          {rest.length > 0 && (
            <div className="mt-14">
              <div className="mb-7 flex items-end justify-between border-b border-line-1 pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase text-brand">More from Apso</p>
                  <h2 className="mt-2 font-display text-[26px] font-bold text-fg-1">Architecture and product notes</h2>
                </div>
                <FileText aria-hidden="true" className="hidden h-5 w-5 text-fg-5 sm:block" />
              </div>
              <div className="grid gap-x-8 gap-y-0 md:grid-cols-2">
                {rest.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid min-h-[230px] grid-rows-[auto_1fr_auto] border-b border-line-1 py-7">
                    <p className="font-mono text-[10px] uppercase text-fg-5">{formatDate(post.frontmatter.date)}</p>
                    <div>
                      <h3 className="mt-4 font-display text-[23px] font-bold leading-tight text-fg-1 group-hover:text-brand">{post.frontmatter.title}</h3>
                      <p className="mt-3 text-[14px] leading-6 text-fg-4">{post.frontmatter.description}</p>
                    </div>
                    <ArrowRight aria-hidden="true" className="mt-5 h-4 w-4 text-fg-5 transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <PageCta
        eyebrow="Build with the ideas"
        title="Turn the architecture into a backend you can inspect"
        description="Connect your agent to Apso, define the service boundary, and generate the code, APIs, migrations, and infrastructure."
      />
    </>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
