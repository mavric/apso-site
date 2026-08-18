import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Building2, Database, KeyRound, Layers3, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { PageCta } from "@/components/marketing/page-cta";
import { HeroLedger } from "@/components/marketing/hero-ledger";
import { getAllContent } from "@/lib/content";
import type { UseCaseFrontmatter } from "@/types/content";

export const metadata: Metadata = {
  title: "Backend Use Cases",
  description: "See how agents and teams use Apso to build SaaS products, internal tools, client systems, and stable API foundations.",
};

const patterns = [
  { title: "Multi-tenant SaaS", body: "Workspaces, members, roles, billing boundaries, and tenant-scoped data.", href: "/templates#multi-tenant-workspaces", icon: Users },
  { title: "Customer operations", body: "Contacts, companies, deals, tasks, audit history, and internal workflows.", href: "/templates#crm", icon: Building2 },
  { title: "Commerce systems", body: "Products, variants, inventory, carts, orders, and payment records.", href: "/templates#ecommerce", icon: Layers3 },
  { title: "Agent-facing APIs", body: "Stable resources and permissions that give agents a consistent backend surface.", href: "/templates#webhooks-integrations", icon: Bot },
];

export default function UseCasesIndex() {
  const useCases = getAllContent<UseCaseFrontmatter>("use-cases");
  const featured = useCases[0];

  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title="Build the foundation behind the product"
        description="Use your existing coding agent to move from a product idea to a defined data model, consistent API, migrations, and infrastructure. Start with the pattern closest to what you are building."
        actions={
          <>
            <a href="#patterns" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-6 font-display text-[14px] font-semibold text-white hover:bg-brand-hover">Explore product patterns</a>
            <a href="/templates" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/20 px-6 font-display text-[14px] font-semibold text-white hover:border-white/45">Browse starters</a>
          </>
        }
        meta={["Agent-led workflow", "Guarded generation", "Code your team owns"]}
        visual={
          <HeroLedger
            label="From intent to service"
            rows={[
              { label: "Load Apso expertise", value: "Give Claude or Codex Apso's rules, task skills, and project tools.", icon: Bot },
              { label: "Describe the product", value: "The agent maps actors, workflows, and access rules into an Apso schema.", icon: Database },
              { label: "Generate the foundation", value: "Create a repeatable service with APIs, migrations, and infrastructure.", icon: KeyRound },
            ]}
            footer="your agent knows the Apso way to build it"
          />
        }
      />

      <Section id="patterns">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div>
              <p className="font-mono text-[10px] uppercase text-brand">Featured workflow</p>
              <h2 className="mt-3 font-display text-[32px] font-bold text-fg-1">A SaaS backend with the boundaries already considered</h2>
              <p className="mt-4 max-w-[590px] text-[15px] leading-7 text-fg-3">
                Multi-tenant software needs more than tables. The service must scope records, enforce roles, evolve the database, and stay understandable as the team grows.
              </p>
              {featured && (
                <Link href={`/use-cases/${featured.slug}`} className="mt-7 inline-flex items-center gap-2 font-display text-[14px] font-semibold text-brand hover:text-brand-hover">
                  Read the SaaS backend guide <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              )}
            </div>
            <div className="overflow-hidden rounded-sm border border-line-1 bg-navy text-white">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="font-mono text-[10px] text-white/42">saas-service.apsorc</span>
                <span className="font-mono text-[9px] text-accent">VALID</span>
              </div>
              <div className="grid sm:grid-cols-2">
                {["Workspace owns projects", "Members inherit roles", "Queries scope by tenant", "Migrations track changes"].map((item, index) => (
                  <div key={item} className="border-b border-white/10 p-5 sm:border-r sm:[&:nth-child(even)]:border-r-0">
                    <span className="font-mono text-[9px] text-white/25">0{index + 1}</span>
                    <p className="mt-2 font-display text-[15px] font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
              <p className="px-5 py-4 font-mono text-[10px] text-accent">4 boundaries represented in the generated service</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <div className="mb-8 max-w-[680px]">
            <p className="font-mono text-[10px] uppercase text-brand">Common foundations</p>
            <h2 className="mt-3 font-display text-[30px] font-bold text-fg-1">Start closer to the product you are building</h2>
          </div>
          <div className="grid border-l border-t border-line-1 sm:grid-cols-2 lg:grid-cols-4">
            {patterns.map(({ title, body, href, icon: Icon }) => (
              <Link key={title} href={href} className="group flex min-h-[250px] flex-col border-b border-r border-line-1 bg-bg-0 p-6 transition-colors hover:bg-brand-soft/35">
                <Icon aria-hidden="true" className="h-6 w-6 text-brand" />
                <h3 className="mt-7 font-display text-[20px] font-bold text-fg-1">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-fg-4">{body}</p>
                <ArrowRight aria-hidden="true" className="mt-auto h-4 w-4 text-fg-5 transition-transform group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <PageCta
        eyebrow="Start with your product"
        title="Give your agent a backend pattern it can build on"
        description="Choose the closest foundation, add your business rules, and review consistent service code in your repository."
      />
    </>
  );
}
