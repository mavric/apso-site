import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Apso, the backend generation platform. Learn about features, pricing, deployment, and code ownership.",
};

const generalQuestions = [
  {
    question: "What is Apso?",
    answer:
      "Apso is a backend generation platform. You define your data model in a .apsorc schema file, and Apso generates a complete production backend with REST API endpoints, authentication, multi-tenancy, database migrations, and AWS deployment infrastructure. The output is real TypeScript, Python, or Golang backend code in your repository. You own every line.",
  },
  {
    question: "How is Apso different from Firebase or Supabase?",
    answer:
      "Firebase and Supabase are managed platforms. You build on top of their proprietary runtime and your backend logic lives inside their system. Apso generates standard backend code that you own and deploy yourself. There is no Apso runtime in the output. Stop using Apso and the code keeps working. Apso also supports Bring Your Own Auth, so you are not locked into a single provider.",
  },
  {
    question: "How is Apso different from Cursor or Copilot writing my backend?",
    answer:
      "When an AI agent writes your backend, the output varies with the model, the prompt, and the day. Two services built a week apart follow different patterns. When the model upgrades, your code changes. Apso puts the guardrails in the generator, not the model. The same schema produces the same output on any model. The agent decides what to build. The CLI decides how.",
  },
  {
    question: "What programming languages does Apso support?",
    answer:
      "TypeScript, Python, and Golang. The generated code follows each language's conventions and includes full type definitions, so your team works with familiar tools.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes. The generated code is standard backend code with no Apso imports, no vendor SDK, and no proprietary runtime. It compiles, runs, and deploys with or without Apso. The templates are Apache-2.0 licensed.",
  },
];

const technicalQuestions = [
  {
    question: "What database does Apso use?",
    answer:
      "PostgreSQL on Amazon RDS. Each service gets its own database instance with automated backups, point-in-time recovery, and encryption at rest. The generated code uses TypeORM for TypeScript, SQLAlchemy for Python, or GORM for Golang.",
  },
  {
    question: "How does authentication work?",
    answer:
      "Apso uses Bring Your Own Auth (BYOA). Configure BetterAuth, Auth0, Clerk, AWS Cognito, API keys, or custom sessions. The generated auth guard produces a normalized AuthContext interface, so your business logic works the same regardless of which provider you choose. Switch providers by regenerating.",
  },
  {
    question: "Can I customize the generated code?",
    answer:
      "Yes. Generated code lives in src/autogen/ and is rewritten on every regeneration. Your custom business logic goes in src/extensions/ and is never touched. Regenerate as many times as you want without losing your work.",
  },
  {
    question: "How does multi-tenancy work?",
    answer:
      "Application-layer data scoping. Add a scopeBy field to your entities and Apso generates guards that automatically filter queries by the authenticated user's workspace. This works at the application layer, not at the database layer, so it is portable across databases and cloud providers.",
  },
  {
    question: "Can any AI agent drive Apso?",
    answer:
      "Yes. The CLI includes a built-in MCP server. Any MCP-capable editor (Claude Code, Cursor, Copilot) can discover and operate Apso without leaving the IDE. The agent calls the CLI, and the CLI enforces the guardrails.",
  },
];

const pricingQuestions = [
  {
    question: "How much does Apso cost?",
    answer:
      "CLI generation is free forever on every plan. The Free tier includes 1 hosted service for testing. Pro is ~$25 per service per month with always-on compute, backups, custom domains, and 100 credits. Team is ~$99/mo flat with unlimited members. Enterprise plans have custom pricing with SSO, audit logs, and SLA guarantees.",
  },
  {
    question: "What are credits?",
    answer:
      "A shared balance for AI actions and deployments. About 1 AI action equals 1 credit, and 1 deploy equals 1-2 credits. Paid services include ~100 credits per month. Bring your own AI key to make AI actions free. No silent billing. Opt-in capped auto-refill only.",
  },
  {
    question: "Is there vendor lock-in?",
    answer:
      "No. The generated code has no Apso runtime dependency. It is standard TypeScript, Python, or Golang backend code that compiles and runs without Apso. Ejection from managed hosting is free and clean. You pay for the automation, not for access to your own code.",
  },
  {
    question: "Can I deploy to my own cloud?",
    answer:
      "Yes. With Your Cloud (BYOC), you pay a per-service automation fee to Apso and your cloud provider directly. Apso never marks up your cloud bill. Available on Pro and above.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Section>
        <Container className="max-w-[860px]">
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
            <p className="text-eyebrow text-brand mb-4">FAQ</p>
            <h1 className="text-h1 text-fg-1 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lead text-fg-3">
              Everything you need to know about Apso. Cannot find the answer you are looking
              for? <a href="/contact" className="text-brand hover:text-brand-hover">Get in touch</a>.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-h3 text-fg-1 mb-4">General</h2>
              <Accordion items={generalQuestions} />
            </div>

            <div>
              <h2 className="text-h3 text-fg-1 mb-4">Technical</h2>
              <Accordion items={technicalQuestions} />
            </div>

            <div>
              <h2 className="text-h3 text-fg-1 mb-4">Pricing</h2>
              <Accordion items={pricingQuestions} />
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container className="text-center max-w-[720px]">
          <h2 className="text-h3 text-fg-1 mb-3">
            Still have questions?
          </h2>
          <p className="text-fg-3 mb-6">
            Reach out to the team or start building for free. CLI generation is free forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={APP_URL} external>
              Start Building Free
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
