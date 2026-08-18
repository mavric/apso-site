import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BookOpenCheck, Braces, PlugZap } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Teach",
    title: "Give your agent backend expertise",
    description: "Apso gives Claude or Codex repeatable rules for schema design, tenancy, auth, migrations, extensions, and deployment. The agent can apply the right backend pattern without waiting for you to name it.",
    example: "Expert rules + task skills",
    icon: BookOpenCheck,
  },
  {
    number: "02",
    label: "Ground",
    title: "Connect it to the real project",
    description: "The Apso MCP server gives the agent access to the current schema and generation tools. It can inspect, design, validate, and build from what your project actually contains.",
    example: "inspect → design → validate",
    icon: PlugZap,
  },
  {
    number: "03",
    label: "Build",
    title: "Ask for the product outcome",
    description: "Describe the workflow in plain language. Your agent chooses the Apso process, proposes the model, generates the service, and verifies the result before you review the code.",
    example: 'You: "Add team invitations."',
    icon: Braces,
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div className="max-w-[760px]">
            <p className="text-eyebrow mb-4 text-brand">How it works</p>
            <h2 className="text-h2 text-fg-1">Turn your coding agent into a backend expert with Apso</h2>
            <p className="mt-4 text-fg-3 leading-7">
              Apso gives Claude, Codex, and other coding agents repeatable backend rules, specialized workflows, and project-aware tools. You describe the outcome. The agent designs, generates, and verifies the foundation.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-5">
            <p className="font-mono text-[10px] uppercase text-brand">Backend expertise in context</p>
            <p className="mt-2 text-[13px] leading-6 text-fg-4">
              Schema design, access boundaries, extensions, migrations, generation, and verification become part of the agent&apos;s working context.
            </p>
          </div>
        </div>

        <div className="mt-12 grid border-y border-line-1 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`py-8 lg:px-8 ${
                index > 0 ? "border-t border-line-1 lg:border-l lg:border-t-0" : "lg:pl-0"
              } ${index === steps.length - 1 ? "lg:pr-0" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-line-1 bg-bg-1 text-brand">
                  <step.icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-semibold uppercase text-fg-5">{step.label}</span>
              </div>
              <p className="mt-6 font-mono text-[10px] text-fg-5">{step.number}</p>
              <h3 className="mt-2 font-display text-[22px] font-bold text-fg-1">{step.title}</h3>
              <p className="mt-3 min-h-[120px] text-[14px] leading-6 text-fg-3">{step.description}</p>
              <div className="mt-6 overflow-x-auto rounded-sm bg-navy px-4 py-3 font-mono text-[11px] text-white/70">
                <span className="mr-2 text-accent">✓</span>{step.example}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
