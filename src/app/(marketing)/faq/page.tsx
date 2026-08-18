import type { Metadata } from "next";
import { Bot, CircleDollarSign, Code2, HelpCircle, KeyRound, ServerCog } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { PageHero } from "@/components/marketing/page-hero";
import { PageCta } from "@/components/marketing/page-cta";
import { HeroLedger } from "@/components/marketing/hero-ledger";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about Apso generation, agent workflows, backend ownership, deployment, languages, authentication, and pricing.",
};

const generalQuestions = [
  {
    question: "What is Apso?",
    answer: "Apso is the backend foundation for AI-built software. Your agent helps define the product and data model. Apso turns that intent into consistent APIs, migrations, infrastructure, and normal TypeScript, Python, or Go code in your repository.",
  },
  {
    question: "How is Apso different from Firebase or Supabase?",
    answer: "Firebase and Supabase provide hosted backend capabilities through their platform model. Apso generates the application service itself as code your team can inspect, modify, test, and operate. The important distinction is where the backend logic lives and what your team can take with it.",
  },
  {
    question: "How is Apso different from asking an agent to write the backend?",
    answer: "An agent is excellent at turning product intent into a proposed system. Apso gives that agent a repeatable generation boundary, so APIs created at different times follow the same service structure and security patterns. The agent shapes what you need, and Apso keeps the resulting foundation consistent.",
  },
  {
    question: "Which programming languages are supported?",
    answer: "Apso generates TypeScript with NestJS, Python with FastAPI, and Go with Gin. The output follows each framework's normal project structure and tooling.",
  },
  {
    question: "Do we own the code?",
    answer: "Yes. The generated backend lives in your repository. Your team can extend it, run it without Apso, and move it to another infrastructure provider. There is no proprietary Apso runtime required by the generated service.",
  },
];

const technicalQuestions = [
  {
    question: "How does an agent work with Apso?",
    answer: "Apso turns Claude, Codex, or another compatible coding agent into an Apso specialist. Rules teach the agent Apso's architecture and guardrails. Task skills teach workflows such as schema design, auth, migrations, and feature development. MCP tools ground that expertise in the current project and let the agent inspect, validate, generate, and test without making you translate the work into CLI commands.",
  },
  {
    question: "Which database does Apso use?",
    answer: "Generated services use PostgreSQL. TypeScript services use TypeORM, Python services use SQLAlchemy, and Go services use GORM. Deployment configuration depends on the infrastructure model you choose.",
  },
  {
    question: "How does authentication work?",
    answer: "Apso supports a bring-your-own-auth approach. The generated service receives a normalized authentication context while your team chooses the identity provider and session model that fit the product.",
  },
  {
    question: "Can we customize generated code?",
    answer: "Yes. The service is normal framework code. Generated areas and extension points are separated so your team can add business logic while continuing to evolve the underlying schema and generated resources.",
  },
  {
    question: "How does multi-tenancy work?",
    answer: "Tenant boundaries are represented in the schema and enforced in the generated application layer. Resources can be scoped to a workspace or tenant so list, read, create, update, and delete behavior applies the same boundary.",
  },
];

const pricingQuestions = [
  {
    question: "How much does Apso cost?",
    answer: "The Free plan is $0. Pro managed services are $25 per service each month. Team is $99 per workspace each month with unlimited members. Your Cloud starts at $40 per service each month plus your cloud costs. Enterprise pricing is based on infrastructure and governance requirements.",
  },
  {
    question: "Does Apso charge per seat?",
    answer: "No. The Team plan includes unlimited members in the workspace. Managed production services are billed separately.",
  },
  {
    question: "Is there vendor lock-in?",
    answer: "The generated service has no required Apso runtime. The code remains in your repository and can continue running if you stop using Apso. Managed infrastructure and automation are separate from your ownership of the backend code.",
  },
  {
    question: "Can we deploy into our own cloud?",
    answer: "Yes. Your Cloud keeps Apso generation and deployment automation while the infrastructure, credentials, and cloud bill stay in your account.",
  },
];

const categories = [
  { id: "product", label: "Product and ownership", count: generalQuestions.length, icon: HelpCircle },
  { id: "technical", label: "Technical workflow", count: technicalQuestions.length, icon: Code2 },
  { id: "pricing", label: "Pricing and deployment", count: pricingQuestions.length, icon: CircleDollarSign },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title="Clear answers about the backend foundation"
        description="Understand what Apso generates, how it works with your coding agent, where the service runs, and what your team owns."
        actions={
          <>
            <a href="#product" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-6 font-display text-[14px] font-semibold text-white hover:bg-brand-hover">Browse answers</a>
            <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/20 px-6 font-display text-[14px] font-semibold text-white hover:border-white/45">Ask a question</a>
          </>
        }
        meta={[`${generalQuestions.length + technicalQuestions.length + pricingQuestions.length} answers`, "Product and technical", "Direct support available"]}
        visual={
          <HeroLedger
            label="Popular topics"
            rows={[
              { label: "Agent workflow", value: "How Claude, Codex, MCP, and Apso work together.", icon: Bot },
              { label: "Code ownership", value: "What is generated and how the service stays portable.", icon: KeyRound },
              { label: "Deployment model", value: "Managed infrastructure or your own cloud account.", icon: ServerCog },
            ]}
            footer="contact the team when the answer depends on your system"
          />
        }
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[250px_minmax(0,820px)] lg:justify-center lg:gap-16">
            <aside>
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[10px] uppercase text-brand">Browse by topic</p>
                <nav className="mt-4 border-t border-line-1" aria-label="FAQ categories">
                  {categories.map(({ id, label, count, icon: Icon }) => (
                    <a key={id} href={`#${id}`} className="flex items-center gap-3 border-b border-line-1 py-4 text-[13px] text-fg-3 hover:text-brand">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                      <span className="flex-1">{label}</span>
                      <span className="font-mono text-[10px] text-fg-5">{count}</span>
                    </a>
                  ))}
                </nav>
                <p className="mt-5 text-[12px] leading-5 text-fg-5">The docs contain setup steps, schema reference material, and end-to-end tutorials.</p>
              </div>
            </aside>

            <div className="space-y-14">
              <FaqGroup id="product" eyebrow="Product" title="Product and ownership" items={generalQuestions} />
              <FaqGroup id="technical" eyebrow="Technical" title="Agents, generation, and services" items={technicalQuestions} />
              <FaqGroup id="pricing" eyebrow="Commercial" title="Pricing and deployment" items={pricingQuestions} />
            </div>
          </div>
        </Container>
      </Section>

      <PageCta
        eyebrow="Need a specific answer"
        title="Bring us the backend decision you are working through"
        description="Share your product, deployment boundary, or current stack and we will help you evaluate whether Apso fits."
        primaryLabel="Contact the team"
        primaryHref="/contact"
      />
    </>
  );
}

function FaqGroup({ id, eyebrow, title, items }: { id: string; eyebrow: string; title: string; items: typeof generalQuestions }) {
  return (
    <section id={id} className="scroll-mt-28">
      <p className="font-mono text-[10px] uppercase text-brand">{eyebrow}</p>
      <h2 className="mb-5 mt-2 font-display text-[27px] font-bold text-fg-1">{title}</h2>
      <Accordion items={items} />
    </section>
  );
}
