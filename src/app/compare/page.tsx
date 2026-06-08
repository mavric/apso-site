import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllContent } from "@/lib/content";
import { APP_URL } from "@/lib/constants";
import type { CompareFrontmatter } from "@/types/content";

export const metadata: Metadata = {
  title: "Compare Apso to Alternatives",
  description:
    "See how Apso compares to Supabase, Firebase, Appwrite, Hasura, Xano, and other backend platforms.",
};

export default function CompareIndex() {
  const comparisons = getAllContent<CompareFrontmatter>("compare");

  return (
    <>
      <Section>
        <Container>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/dogs-header.svg"
                alt=""
                width={160}
                height={64}
                className="h-14 w-auto opacity-80"
                aria-hidden="true"
              />
            </div>
            <p className="text-eyebrow text-brand mb-4">Compare</p>
            <h1 className="text-h1 text-fg-1 mb-4">Apso vs. Alternatives</h1>
            <p className="text-lead text-fg-3 max-w-[640px] mx-auto">
              Practical comparisons for teams choosing between managed platforms,
              visual backend builders, generated APIs, and backend code they own.
            </p>
          </div>

          {comparisons.length === 0 ? (
            <p className="text-center text-fg-4">Comparison pages coming soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisons.map((item) => (
                <Link key={item.slug} href={`/compare/${item.slug}`}>
                  <Card padding="lg" className="h-full hover:border-brand/40 transition-colors group">
                    <div className="h-1.5 w-12 rounded-full bg-accent/30 group-hover:bg-accent/50 transition-colors mb-5" />
                    <h2 className="font-display font-700 text-[22px] text-fg-1 mb-3 leading-tight">
                      {item.frontmatter.title}
                    </h2>
                    <p className="text-[15px] text-fg-3 leading-relaxed">
                      {item.frontmatter.description}
                    </p>
                    <p className="mt-4 text-sm text-brand font-medium group-hover:text-brand-hover transition-colors">
                      Read comparison
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
            See for yourself
          </h2>
          <p className="text-fg-3 mb-6">
            Generate a backend from a schema. Compare the output to what you
            would write by hand.
          </p>
          <Button href={APP_URL} external>
            Start Building Free
          </Button>
        </Container>
      </Section>
    </>
  );
}
