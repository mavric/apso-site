import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "./breadcrumbs";
import { APP_URL, DOCS_URL } from "@/lib/constants";

interface MdxLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  date?: string;
  author?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function MdxLayout({
  children,
  title,
  description,
  date,
  author,
  breadcrumbs,
}: MdxLayoutProps) {
  return (
    <>
      <Section className="pt-8 md:pt-12">
        <Container className="max-w-[860px]">
          <Breadcrumbs items={breadcrumbs} />
          <header className="mb-10 mt-6">
            <h1 className="text-h1 text-fg-1 mb-4">{title}</h1>
            {description && (
              <p className="text-lead text-fg-3 mb-4">{description}</p>
            )}
            {(date || author) && (
              <div className="flex items-center gap-3 text-sm text-fg-4">
                {date && <time dateTime={date}>{formatDate(date)}</time>}
                {date && author && <span>|</span>}
                {author && <span>{author}</span>}
              </div>
            )}
          </header>
          <article className="prose-custom">{children}</article>
        </Container>
      </Section>

      {/* CTA band at bottom of every content page */}
      <section className="py-16 md:py-20 bg-bg-1 border-t border-line-1">
        <Container className="text-center max-w-[860px]">
          <h2 className="text-h3 text-fg-1 mb-3">
            Ready to try Apso?
          </h2>
          <p className="text-fg-3 mb-6">
            Generate a production backend from a schema, own every line, and start for free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={APP_URL} external>
              Start Building Free
            </Button>
            <Button href={DOCS_URL} external variant="outline">
              Read the Docs
            </Button>
          </div>
        </Container>
      </section>
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
