import type { Metadata } from "next";
import Image from "next/image";
import { Braces, GitBranch, ScanSearch } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { PageCta } from "@/components/marketing/page-cta";

export const metadata: Metadata = {
  title: "Company",
  description: "Why the Mavric Technology team built Apso as an owned, consistent backend foundation for AI-built software.",
};

const principles = [
  {
    title: "Make the result inspectable",
    body: "The schema, generated service, migrations, and infrastructure should be visible to the people responsible for the product.",
    icon: ScanSearch,
  },
  {
    title: "Make the pattern repeatable",
    body: "A team should be able to build its next API with the same structure and guardrails, even when the agent or prompt changes.",
    icon: Braces,
  },
  {
    title: "Leave the code with the team",
    body: "The output should remain useful without a proprietary runtime or a forced migration when the operating model changes.",
    icon: GitBranch,
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="We built Apso to get the backend foundation right"
        description="Apso comes from years of building software at Mavric Technology. We kept seeing the same service work repeated by hand, then reproduced inconsistently by coding agents. We built a more dependable path from product intent to owned backend code."
        actions={
          <>
            <a href="#why" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-6 font-display text-[14px] font-semibold text-white hover:bg-brand-hover">Why we built it</a>
            <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/20 px-6 font-display text-[14px] font-semibold text-white hover:border-white/45">Contact the team</a>
          </>
        }
        meta={["Built by Mavric Technology", "Based in the United States", "Backend and product engineers"]}
        visual={
          <div className="flex h-full min-h-[310px] flex-col justify-center py-8 lg:py-10">
            <div className="border-y border-white/10 py-6">
              <Image
                src="/images/dev-team.png"
                alt="The team behind Apso"
                width={480}
                height={376}
                priority
                className="mx-auto h-auto w-full max-w-[430px]"
              />
            </div>
            <p className="mt-4 font-mono text-[10px] text-white/35">product, platform, and delivery experience</p>
          </div>
        }
      />

      <Section id="why">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase text-brand">Why Apso exists</p>
              <h2 className="mt-3 font-display text-[31px] font-bold leading-tight text-fg-1">The repeated work was predictable. The output was not.</h2>
            </div>
            <div className="space-y-5 text-[16px] leading-8 text-fg-3">
              <p>
                Client and product backends repeatedly need entities, relationships, permissions, API contracts, migrations, and deployment configuration. Teams still spend meaningful engineering time rebuilding that foundation for every product.
              </p>
              <p>
                Coding agents make the first draft faster, but a prompt alone does not create a durable engineering standard. Structure and security decisions can change between services because the model, context, and instructions change.
              </p>
              <p>
                Apso puts the repeatable decisions into the generation system. The agent can explore the idea and shape the model. The generator produces the consistent service structure. The team reviews and owns the result.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <div className="mb-9 max-w-[700px]">
            <p className="font-mono text-[10px] uppercase text-brand">Product principles</p>
            <h2 className="mt-3 font-display text-[30px] font-bold text-fg-1">What we protect as Apso grows</h2>
          </div>
          <div className="grid border-l border-t border-line-1 md:grid-cols-3">
            {principles.map(({ title, body, icon: Icon }, index) => (
              <article key={title} className="min-h-[290px] border-b border-r border-line-1 bg-bg-0 p-7">
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" className="h-6 w-6 text-brand" />
                  <span className="font-mono text-[10px] text-fg-5">0{index + 1}</span>
                </div>
                <h3 className="mt-9 font-display text-[22px] font-bold text-fg-1">{title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-fg-4">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 border-y border-line-1 py-9 md:grid-cols-[220px_1fr] md:items-center">
            <p className="font-mono text-[10px] uppercase text-brand">Our working mission</p>
            <p className="max-w-[850px] font-display text-[27px] font-semibold leading-tight text-fg-1 md:text-[32px]">
              Help people build software with AI without weakening the backend foundation or giving away ownership of the result.
            </p>
          </div>
        </Container>
      </Section>

      <PageCta
        eyebrow="Build with us"
        title="Put a real product idea through the Apso workflow"
        description="Use your coding agent to define the service, then review the consistent backend Apso generates for your team."
      />
    </>
  );
}
