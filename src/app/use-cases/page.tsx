import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllContent } from "@/lib/content";
import { APP_URL } from "@/lib/constants";
import type { UseCaseFrontmatter } from "@/types/content";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "See how Apso is used to build SaaS backends, internal tools, multi-tenant apps, and more.",
};

export default function UseCasesIndex() {
  const useCases = getAllContent<UseCaseFrontmatter>("use-cases");
  const singleUseCase = useCases.length === 1;

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
            <p className="text-eyebrow text-brand mb-4">Use Cases</p>
            <h1 className="text-h1 text-fg-1 mb-4">What You Can Build with Apso</h1>
            <p className="text-lead text-fg-3 max-w-[640px] mx-auto">
              From SaaS backends to internal tools, Apso generates production-ready APIs you
              own and control.
            </p>
          </div>

          {useCases.length === 0 ? (
            <p className="text-center text-fg-4">Use case pages coming soon.</p>
          ) : (
            <div
              className={
                singleUseCase
                  ? "grid lg:grid-cols-[420px_1fr] gap-6 items-stretch"
                  : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              }
            >
              {useCases.map((item) => (
                <Link key={item.slug} href={`/use-cases/${item.slug}`}>
                  <Card padding="lg" className="h-full hover:border-brand/40 transition-colors group">
                    <div className="h-1.5 w-12 rounded-full bg-brand/20 group-hover:bg-brand/40 transition-colors mb-5" />
                    <h2 className="font-display font-700 text-[22px] text-fg-1 mb-3 leading-tight">
                      {item.frontmatter.title}
                    </h2>
                    <p className="text-[15px] text-fg-3 leading-relaxed">
                      {item.frontmatter.description}
                    </p>
                    <p className="mt-4 text-sm text-brand font-medium group-hover:text-brand-hover transition-colors">
                      Read more
                    </p>
                  </Card>
                </Link>
              ))}
              {singleUseCase && (
                <Card padding="lg" className="bg-bg-1">
                  <p className="text-eyebrow text-brand mb-4">Also Generated</p>
                  <h2 className="font-display font-700 text-[24px] text-fg-1 mb-4 leading-tight">
                    The same schema pattern covers common backend work
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      ["Internal tools", "CRUD APIs, role checks, and audit-friendly data access."],
                      ["Client portals", "Tenant-scoped resources for customers, teams, and admins."],
                      ["Agent backends", "Deterministic services that agents can call through stable APIs."],
                    ].map(([title, description]) => (
                      <div key={title} className="rounded-sm border border-line-1 bg-bg-0 p-4">
                        <h3 className="font-display font-700 text-[17px] text-fg-1 mb-2">
                          {title}
                        </h3>
                        <p className="text-sm text-fg-3 leading-relaxed">{description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          )}
        </Container>
      </Section>

      <Section bg="gray">
        <Container className="text-center max-w-[720px]">
          <h2 className="text-h3 text-fg-1 mb-3">
            Start building your use case
          </h2>
          <p className="text-fg-3 mb-6">
            Define a schema, generate a production backend, and own every line of code.
          </p>
          <Button href={APP_URL} external>
            Start Building Free
          </Button>
        </Container>
      </Section>
    </>
  );
}
