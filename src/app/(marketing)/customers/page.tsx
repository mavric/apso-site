import type { Metadata } from "next";
import { Bot, BriefcaseBusiness, Code2, GitPullRequest, Layers3, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { PageCta } from "@/components/marketing/page-cta";
import { HeroLedger } from "@/components/marketing/hero-ledger";

export const metadata: Metadata = {
  title: "Who Apso Is For",
  description: "See how founders, delivery teams, and platform teams use Apso to generate consistent backend services they own.",
};

const teams = [
  {
    title: "Founder-led product teams",
    body: "Move from product requirements to a credible backend before hiring a full infrastructure function. Keep code that the next engineer can inherit.",
    outcome: "A backend the company can grow into",
    icon: Bot,
  },
  {
    title: "Consultancies and delivery teams",
    body: "Start client services from the same reviewed patterns, then adapt the schema and business logic to each engagement.",
    outcome: "Consistent delivery without generic output",
    icon: BriefcaseBusiness,
  },
  {
    title: "Platform and engineering teams",
    body: "Give product teams an approved path to create services while keeping architecture, permissions, and deployment behavior legible.",
    outcome: "A repeatable service standard",
    icon: Layers3,
  },
];

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Who Apso is for"
        title="For teams that need speed and a backend they can inherit"
        description="Apso gives agents, developers, and delivery teams one way to turn product intent into consistent service code without creating a new platform dependency."
        actions={
          <>
            <a href="#teams" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-6 font-display text-[14px] font-semibold text-white hover:bg-brand-hover">Find your workflow</a>
            <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/20 px-6 font-display text-[14px] font-semibold text-white hover:border-white/45">Discuss your team</a>
          </>
        }
        meta={["Founder-led", "Client delivery", "Internal platform teams"]}
        visual={
          <HeroLedger
            label="Shared operating model"
            rows={[
              { label: "Agent proposes", value: "Turn the product idea into a schema and service boundary.", icon: Bot },
              { label: "Team reviews", value: "Inspect relationships, access rules, migrations, and generated code.", icon: GitPullRequest },
              { label: "Service remains owned", value: "Extend and operate the backend with normal engineering tools.", icon: Code2 },
            ]}
            footer="one foundation across different team shapes"
          />
        }
      />

      <Section id="teams">
        <Container>
          <div className="mb-10 grid gap-5 border-b border-line-1 pb-7 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase text-brand">Team fit</p>
              <h2 className="mt-3 font-display text-[31px] font-bold text-fg-1">A useful boundary between product intent and service code</h2>
            </div>
            <p className="text-[14px] leading-6 text-fg-4">The workflow stays the same. The reason each team uses it changes with its delivery model.</p>
          </div>

          <div className="grid border-l border-t border-line-1 lg:grid-cols-3">
            {teams.map(({ title, body, outcome, icon: Icon }, index) => (
              <article key={title} className="flex min-h-[360px] flex-col border-b border-r border-line-1 p-7">
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" className="h-6 w-6 text-brand" />
                  <span className="font-mono text-[10px] text-fg-5">0{index + 1}</span>
                </div>
                <h3 className="mt-9 font-display text-[24px] font-bold leading-tight text-fg-1">{title}</h3>
                <p className="mt-4 text-[14px] leading-6 text-fg-4">{body}</p>
                <div className="mt-auto border-t border-line-1 pt-5">
                  <p className="font-mono text-[9px] uppercase text-fg-5">Desired outcome</p>
                  <p className="mt-2 font-display text-[14px] font-semibold text-fg-1">{outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
            <div>
              <Users aria-hidden="true" className="h-7 w-7 text-brand" />
              <h2 className="mt-5 font-display text-[30px] font-bold text-fg-1">One handoff the whole team can inspect</h2>
              <p className="mt-4 text-[14px] leading-6 text-fg-4">The schema becomes the reviewable boundary between the product conversation and the generated implementation.</p>
            </div>
            <ol className="border-t border-line-1">
              {[
                ["Describe", "The agent captures actors, resources, access rules, and the important product workflows."],
                ["Review", "The team checks the schema and service boundary before generation expands the change."],
                ["Generate", "Apso produces the APIs, migrations, and infrastructure with the same project structure."],
                ["Extend", "Developers add the business logic that differentiates the product in familiar framework code."],
              ].map(([label, body], index) => (
                <li key={label} className="grid gap-3 border-b border-line-1 py-5 sm:grid-cols-[36px_110px_1fr] sm:items-start">
                  <span className="font-mono text-[10px] text-fg-5">0{index + 1}</span>
                  <span className="font-display text-[15px] font-semibold text-fg-1">{label}</span>
                  <span className="text-[13px] leading-6 text-fg-4">{body}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <PageCta
        eyebrow="See whether the model fits"
        title="Bring your team and a representative backend idea"
        description="We will help you map the service boundary, ownership requirements, and deployment model before you commit."
        primaryLabel="Talk to the team"
        primaryHref="/contact"
        secondaryLabel="Explore use cases"
        secondaryHref="/use-cases"
      />
    </>
  );
}
