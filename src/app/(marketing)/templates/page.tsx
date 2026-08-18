import type { Metadata } from "next";
import { Boxes, Braces, GitBranch, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TemplateLibrary } from "@/components/templates/template-library";
import { PageHero } from "@/components/marketing/page-hero";
import { PageCta } from "@/components/marketing/page-cta";
import { HeroLedger } from "@/components/marketing/hero-ledger";
import { STARTER_BACKENDS } from "@/lib/starter-backends";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Starter Backends",
  description: "Browse starter data models for SaaS, CRM, commerce, internal tools, and industry applications.",
};

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Starter backends"
        title="Start with a backend model your agent can adapt"
        description="Choose a proven product pattern, then let Claude or Codex shape it around your requirements. Apso turns that intent into consistent APIs, migrations, and infrastructure your team owns."
        actions={
          <>
            <a
              href="#library"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-6 font-display text-[14px] font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Explore the library
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/20 px-6 font-display text-[14px] font-semibold text-white transition-colors hover:border-white/45"
            >
              Open service builder
            </a>
          </>
        }
        meta={[`${STARTER_BACKENDS.length} product patterns`, "Agent-ready", "TypeScript, Python, and Go"]}
        visual={
          <HeroLedger
            label="Generation path"
            rows={[
              { label: "Choose a model", value: "Begin with the entities and relationships common to your product.", icon: Boxes },
              { label: "Adapt with your agent", value: "Add your roles, workflows, and business rules through Apso skills.", icon: Sparkles },
              { label: "Own the output", value: "Review normal framework code in your repository and deploy it anywhere.", icon: GitBranch },
            ]}
            footer="idea -> schema -> working backend"
          />
        }
      />

      <Section id="library" bg="gray">
        <Container>
          <div className="mb-10 grid gap-6 border-b border-line-1 pb-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div className="max-w-[720px]">
              <p className="font-mono text-[10px] uppercase text-brand">Product patterns</p>
              <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-fg-1 md:text-[36px]">
                Begin with the data model your product already needs
              </h2>
            </div>
            <div className="flex items-start gap-3 border-l-2 border-accent pl-4">
              <Braces aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <p className="text-[14px] leading-6 text-fg-4">
                Every starter is a beginning. Your agent can rename entities, add relationships, and apply your product rules before Apso generates the service.
              </p>
            </div>
          </div>
          <TemplateLibrary />
        </Container>
      </Section>

      <PageCta
        eyebrow="Bring the product idea"
        title="Move from a proven model to a backend you own"
        description="Pick a starter, describe what makes your product different, and let your agent use Apso to build the foundation consistently."
      />
    </>
  );
}
