import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function FeatureIcon({ type }: { type: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    deterministic: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.27 3.48L12 11.15 5.73 7.66 12 4.18zM5 9.34l6 3.33v6.99l-6-3.33V9.34zm8 10.32v-6.99l6-3.33v6.99l-6 3.33z" fill="#0018FF"/>
      </svg>
    ),
    agent: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zm7 5h-5v-2h5v2zm.5-5c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13z" fill="#0018FF"/>
      </svg>
    ),
    language: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="#0018FF"/>
      </svg>
    ),
    auth: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="#0018FF"/>
      </svg>
    ),
    ownership: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="#0018FF"/>
      </svg>
    ),
    regen: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 016 12c0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" fill="#0018FF"/>
      </svg>
    ),
    deploy: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" fill="#0018FF"/>
      </svg>
    ),
    audit: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-6h8v2H8v-2zm0-3h8v2H8v-2zm0 6h5v2H8v-2z" fill="#0018FF"/>
      </svg>
    ),
  };
  return <span className="shrink-0">{iconMap[type] || iconMap.deterministic}</span>;
}

const features = [
  {
    title: "Same Output Every Time",
    description:
      "Same schema produces identical output on every run, regardless of which model or agent drove it. Prompt drift does not decide the backend structure. The output is reproducible today, next month, or two years from now.",
    badge: "Deterministic",
    icon: "deterministic",
  },
  {
    title: "Works With Any Agent",
    description:
      "The built-in MCP server lets Claude Code, Cursor, Copilot, or any MCP-capable editor discover and drive Apso. The agent calls the CLI. The CLI enforces the guardrails.",
    badge: "Agent-Ready",
    icon: "agent",
  },
  {
    title: "Your Language, Your Backend",
    description:
      "Pick TypeScript, Python, or Golang. Get production-grade code in the language your team already knows, without a proprietary runtime or vendor SDK in the output.",
    badge: "Multi-Language",
    icon: "language",
  },
  {
    title: "Auth and Multi-tenancy Built In",
    description:
      "BetterAuth integration with tenant scoping enforced at the repository layer. Row-level isolation by construction, not by convention. No security afterthoughts.",
    badge: "Secure by Default",
    icon: "auth",
  },
  {
    title: "Own Every Line You Ship",
    description:
      "You get real source code in your repo. The generated service has no Apso imports or vendor SDK wrapping your logic. It compiles, runs, and deploys with or without Apso.",
    badge: "No Lock-in",
    icon: "ownership",
  },
  {
    title: "Regenerate Without Breaking Custom Code",
    description:
      "Generated code lives in autogen/ and is rewritten on every run. Your business logic lives in extensions/ and is never touched. Regenerate safely, as many times as you want.",
    badge: "Safe Regen",
    icon: "regen",
  },
  {
    title: "Deploy in One Command, Eject Anytime",
    description:
      "Ship to managed AWS infrastructure with a single command. Eject to your own AWS, GCP, or Azure whenever you outgrow managed hosting. No rewrite required.",
    badge: "Ship Today",
    icon: "deploy",
  },
  {
    title: "Review a Spec Diff, Not a Code Diff",
    description:
      "The .apsorc file is version-controlled, human-readable, and machine-writable. Review a 20-line spec change instead of a 4,000-line generated code diff.",
    badge: "Auditable",
    icon: "audit",
  },
];

export function FeatureGrid() {
  return (
    <Section bg="gray">
      <Container>
        <div className="text-center mb-12">
          <p className="text-eyebrow text-brand mb-4">What You Get</p>
          <h2 className="text-h2 text-fg-1 mb-3">
            Production guardrails that no agent can weaken
          </h2>
          <p className="text-fg-3 max-w-[640px] mx-auto">
            Auth, multi-tenancy, migrations, and deployment infrastructure are baked into the
            generator. They ship correctly every time, regardless of the model.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <Card key={feature.title} padding="lg" className="flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <FeatureIcon type={feature.icon} />
                <h3 className="font-display font-700 text-[18px] text-fg-1 leading-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-fg-3 leading-relaxed mb-4 flex-1">
                {feature.description}
              </p>
              <div>
                <Badge variant="brand">{feature.badge}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
