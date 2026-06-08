import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.56 9.21L23 12L20.56 14.79L20.9 18.48L17.29 19.3L15.4 22.49L12 21.03L8.6 22.5L6.71 19.31L3.1 18.49L3.44 14.79L1 12L3.44 9.2L3.1 5.5L6.71 4.69L8.6 1.5L12 2.96L15.4 1.5L17.29 4.7L20.9 5.52L20.56 9.21ZM6.29 12.91L10.09 16.72L17.42 9.37L15.94 7.89L10.09 13.76L7.77 11.43L6.29 12.91Z"
        fill="#01E67A"
      />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "Define Your Schema",
    description:
      "Describe your backend in a single .apsorc file, or let an AI agent generate it from a conversation. Entities, relationships, auth rules, and validation constraints collapse into one reviewable, version-controlled spec.",
    features: [
      "Declare your entire data model in one file",
      "Review a 20-line spec diff instead of a 4,000-line code diff",
      "Any MCP-capable agent can generate and validate the schema",
      "Version-controlled alongside your application code",
    ],
    replaces: [
      "Agent-authored boilerplate that drifts between runs",
      "Hand-maintained entity definitions across files",
      "Prompt-dependent code generation",
    ],
    image: "/images/feature-1.svg",
  },
  {
    number: "02",
    title: "Generate a Production Backend",
    description:
      "Run the CLI or let your agent call it through the MCP server. The deterministic generator produces a complete backend with API endpoints, database migrations, authentication, and validation in the language your team knows.",
    features: [
      "TypeScript, Python, or Golang backend output from the same schema",
      "Generated code lives in autogen/, your logic lives in extensions/",
      "Regenerate at any time without losing custom work",
      "Output is identical regardless of which model drove it",
    ],
    replaces: [
      "Manual TypeScript or Python backend scaffolding",
      "Hand-written migration scripts",
      "Nondeterministic agent-written backends",
    ],
    image: "/images/feature-2.svg",
  },
  {
    number: "03",
    title: "Ship to Production",
    description:
      "Deploy to managed AWS infrastructure in one command. When you outgrow managed hosting, eject to your own cloud without an Apso runtime, a rewrite, or lock-in.",
    features: [
      "One-command deploy to Lambda, RDS, and API Gateway",
      "Eject to your own AWS, GCP, or Azure account anytime",
      "Generated code has no proprietary imports or vendor SDK",
      "Apache-2.0 licensed templates you own and control",
    ],
    replaces: [
      "Manual CDK and Terraform provisioning",
      "Platform lock-in (Firebase, Supabase managed hosting)",
      "Black-box runtimes you cannot inspect or modify",
    ],
    image: "/images/feature-3.svg",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <p className="text-eyebrow text-brand mb-4">How It Works</p>
          <h2 className="text-h2 text-fg-1 mb-3">Schema to deployed API in three steps</h2>
          <p className="text-fg-3 max-w-[640px] mx-auto">
            Run each step yourself or let an AI agent handle it through the MCP server. The result
            is the same either way.
          </p>
        </div>
        <div className="space-y-20">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <span className="font-display font-800 text-[56px] text-brand/15 leading-none block mb-2">
                  {step.number}
                </span>
                <h3 className="text-h2 text-fg-1 mb-3">{step.title}</h3>
                <p className="text-fg-3 leading-relaxed mb-5">{step.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[15px] text-fg-2">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div>
                  <span className="text-[13px] font-display font-600 text-fg-4 uppercase tracking-wide mr-3">
                    Replaces
                  </span>
                  <div className="inline-flex flex-wrap gap-2 mt-1">
                    {step.replaces.map((tag) => (
                      <Badge key={tag} variant="gray">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`hidden md:flex justify-center ${idx % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <div className="relative w-full max-w-[520px]">
                  <div
                    className="absolute -inset-6 opacity-30 pointer-events-none rounded-2xl"
                    style={{ backgroundImage: "url(/images/section-dot-bg.png)", backgroundSize: "20px 20px" }}
                    aria-hidden="true"
                  />
                  <Image
                    src={step.image}
                    alt={`Step ${step.number}: ${step.title}`}
                    width={480}
                    height={360}
                    className="relative w-full max-w-[440px] h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
