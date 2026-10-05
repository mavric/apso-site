import type { Metadata } from "next";
import { Cloud, Code2, ServerCog } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { PageCta } from "@/components/marketing/page-cta";
import { HeroLedger } from "@/components/marketing/hero-ledger";
import { PricingPlans } from "@/components/marketing/pricing-plans";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Generate backend code for free. Add team controls with a workspace plan, choose a tier for each service, or have Apso run DevOps in your own cloud on Business.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pay for the automation you need. Keep the backend you build."
        description="Generate and inspect your backend before you commit to infrastructure. Bring your whole team for free, add team controls when you need them, or have Apso run operations in your own cloud without changing the ownership model."
        actions={
          <>
            <a
              href="#plans"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-6 font-display text-[14px] font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Compare plans
            </a>
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/20 px-6 font-display text-[14px] font-semibold text-white transition-colors hover:border-white/45"
            >
              Talk to us
            </a>
          </>
        }
        meta={["No per-seat charge", "Full code ownership", "Your cloud on Business"]}
        visual={
          <HeroLedger
            label="Cost boundary"
            rows={[
              { label: "Generate", value: "Start with the schema, APIs, migrations, and service code.", icon: Code2 },
              { label: "Operate", value: "Add managed compute, backups, domains, monitoring, and logs.", icon: ServerCog },
              { label: "Choose your cloud", value: "On Business, Apso runs the DevOps in its cloud or in your cloud account.", icon: Cloud },
            ]}
            footer="the generated backend remains yours"
          />
        }
      />

      <Section id="plans" bg="gray">
        <Container>
          <div className="mb-10 grid gap-5 border-b border-line-1 pb-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-[700px]">
              <p className="font-mono text-[10px] uppercase text-brand">Plans</p>
              <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-fg-1 md:text-[36px]">
                Pick a workspace plan, then size each service
              </h2>
              <p className="mt-3 text-[15px] leading-6 text-fg-4">
                Workspace plans set team controls and who runs operations. Service tiers set the compute for each deployed service. You buy them separately, and generated code stays in your repository on every plan.
              </p>
            </div>
            <p className="font-mono text-[11px] text-fg-5">Prices shown in USD</p>
          </div>
          <PricingPlans />
        </Container>
      </Section>

      <PageCta
        eyebrow="Start with the output"
        title="Review the backend before you choose how to run it"
        description="Build the schema with your agent, inspect the generated service, and select the operating model that fits your team."
        secondaryLabel="Ask a pricing question"
        secondaryHref="/contact"
      />
    </>
  );
}
