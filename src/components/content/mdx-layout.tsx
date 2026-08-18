import { BookOpen, Code2, GitBranch } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { PageCta } from "@/components/marketing/page-cta";
import { HeroLedger } from "@/components/marketing/hero-ledger";
import { Breadcrumbs } from "./breadcrumbs";

interface MdxLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  date?: string;
  author?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function MdxLayout({ children, title, description, date, author, breadcrumbs }: MdxLayoutProps) {
  const section = breadcrumbs[0]?.label ?? "Article";
  const meta = [date ? formatDate(date) : null, author ?? null, `${section} guide`].filter(
    (item): item is string => Boolean(item)
  );

  return (
    <>
      <PageHero
        eyebrow={section}
        title={title}
        description={description ?? "A practical guide from the Apso team."}
        top={<Breadcrumbs items={breadcrumbs} dark />}
        meta={meta}
        visual={
          <HeroLedger
            label="Reading path"
            rows={[
              { label: "Understand the model", value: "Start with the product and architecture context.", icon: BookOpen },
              { label: "Evaluate the boundary", value: "See what Apso generates and what your team owns.", icon: GitBranch },
              { label: "Apply it", value: "Use the schema, code, and workflow examples in your project.", icon: Code2 },
            ]}
            footer="generated code stays in your repository"
          />
        }
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[190px_minmax(0,760px)] lg:justify-center lg:gap-14">
            <aside className="hidden lg:block">
              <div className="sticky top-28 border-t border-line-1 pt-5">
                <p className="font-mono text-[10px] uppercase text-brand">Apso principle</p>
                <p className="mt-3 font-display text-[18px] font-semibold leading-6 text-fg-1">
                  Consistent output. Portable code.
                </p>
                <p className="mt-3 text-[13px] leading-5 text-fg-4">
                  Your agent defines the intent. Apso produces the repeatable backend structure.
                </p>
                <a
                  href="https://docs.apso.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex font-display text-[13px] font-semibold text-brand"
                >
                  Open documentation ↗
                </a>
              </div>
            </aside>
            <article className="prose-custom min-w-0">{children}</article>
          </div>
        </Container>
      </Section>

      <PageCta />
    </>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
