"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { APP_URL } from "@/lib/constants";

const managedTiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Generate backends locally with the open-source generator. Host one service to test deployment.",
    credits: "~50 onboarding credits, then ~25 / mo",
    features: [
      "CLI generation free forever",
      "1 hosted service (non-commercial)",
      "Scale-to-zero compute",
      "Apso subdomain",
    ],
    cta: "Start Building Free",
    href: APP_URL,
    popular: false,
  },
  {
    name: "Pro",
    price: "~$25",
    period: "/ service / mo",
    description: "Ship production backends with always-on compute, backups, and custom domains.",
    credits: "~100 credits / service / mo",
    features: [
      "Always-on compute (no cold starts)",
      "Automated backups + restore",
      "Custom domain",
      "Monitoring + logs",
      "Commercial use",
      "Compute add-ons (S/M/L)",
    ],
    cta: "Start Building",
    href: APP_URL,
    popular: true,
  },
  {
    name: "Team",
    price: "~$99",
    period: "/ mo flat",
    description: "One flat fee for your whole team. No per-seat billing, no headcount surprises.",
    credits: "Credits included with each paid service",
    features: [
      "Shared workspace",
      "RBAC and roles",
      "Service catalog",
      "Review and approvals",
      "Unlimited team members",
      "Per-service Pro charges apply",
    ],
    cta: "Start a Team",
    href: APP_URL,
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "SSO, audit logs, SLA guarantees, and dedicated infrastructure for regulated industries.",
    credits: "Custom credit pool",
    features: [
      "SSO and audit logs",
      "SOC 2 compliance",
      "SLA guarantee",
      "Dedicated infrastructure",
      "Premium support",
      "Full code ownership",
    ],
    cta: "Talk to Sales",
    href: "/contact",
    popular: false,
  },
];

const faqItems = [
  {
    question: "What does a \"service\" mean for billing?",
    answer:
      "A service is one deployable backend with its own deploy target, scaling, domain, and catalog entry. You are billed per service, and you scale each independently.",
  },
  {
    question: "Do you charge per seat?",
    answer:
      "No. Team is a flat fee with unlimited members. You pay per service, not per person.",
  },
  {
    question: "What are credits?",
    answer:
      "A shared balance for AI actions and deploys. Paid services include ~100 credits per month. Bring your own AI key to make AI actions free.",
  },
  {
    question: "Can I run Apso on my own cloud?",
    answer:
      "Yes. With Your Cloud (BYOC), you pay a per-service automation fee and your cloud provider directly. Apso never marks up your cloud bill.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes. The output is real TypeScript, Golang, or Python backend code in your repo. The generator and templates are open source, and the generated stacks are open source. The generated code does not depend on an Apso package or runtime. You can run it without us.",
  },
  {
    question: "Is generation free?",
    answer:
      "CLI generation is free forever. You pay when you deploy and operate a service.",
  },
];

export default function PricingPage() {
  const [mode, setMode] = useState<"managed" | "byoc">("managed");

  return (
    <>
      {/* Hero */}
      <Section>
        <Container className="text-center max-w-[860px]">
          <p className="text-eyebrow text-brand mb-4">Pricing</p>
          <h1 className="text-h1 text-fg-1 mb-4">
            Generate for free. Pay only when you deploy.
          </h1>
          <p className="text-lead text-fg-3 mb-8">
            CLI generation is free forever on every plan. You pay for hosting and deployment
            automation. The generator is open source, and every plan includes full code ownership.
            Eject anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex rounded-md border border-line-1 p-1">
            <button
              type="button"
              className={`px-5 py-2 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
                mode === "managed"
                  ? "bg-brand text-white"
                  : "text-fg-3 hover:text-fg-1"
              }`}
              onClick={() => setMode("managed")}
            >
              Managed
            </button>
            <button
              type="button"
              className={`px-5 py-2 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
                mode === "byoc"
                  ? "bg-brand text-white"
                  : "text-fg-3 hover:text-fg-1"
              }`}
              onClick={() => setMode("byoc")}
            >
              Your Cloud (BYOC)
            </button>
          </div>
        </Container>
      </Section>

      {/* Tiers */}
      <Section bg="gray" className="pt-0">
        <Container>
          {mode === "managed" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {managedTiers.map((tier) => (
                <Card
                  key={tier.name}
                  padding="lg"
                  className={`flex flex-col ${
                    tier.popular ? "border-brand border-2 relative" : ""
                  }`}
                >
                  {tier.popular && (
                    <Badge variant="brand" className="absolute -top-3 left-6">
                      Most popular
                    </Badge>
                  )}
                  <h3 className="font-display font-700 text-[20px] text-fg-1">
                    {tier.name}
                  </h3>
                  <div className="mt-3 mb-1">
                    <span className="font-display font-800 text-[36px] text-fg-1">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-sm text-fg-4 ml-1">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-fg-3 mb-5">{tier.description}</p>
                  <div className="mb-5 rounded-sm border border-line-1 bg-bg-1 px-4 py-3">
                    <p className="text-[12px] font-display font-600 uppercase tracking-wide text-fg-4 mb-1">
                      Credits
                    </p>
                    <p className="text-sm font-medium text-fg-1">{tier.credits}</p>
                  </div>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-fg-3">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={tier.href}
                    external={tier.href.startsWith("http")}
                    variant={tier.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </Card>
              ))}
            </div>
          ) : (
            <div className="max-w-[720px] mx-auto">
              <Card padding="lg">
                <h3 className="text-h3 text-fg-1 mb-2">Your Cloud (BYOC)</h3>
                <div className="mb-3">
                  <span className="font-display font-800 text-[36px] text-fg-1">
                    ~$40
                  </span>
                  <span className="text-sm text-fg-4 ml-1">/ service / mo</span>
                  <span className="text-sm text-fg-4"> + your cloud costs</span>
                </div>
                <p className="text-fg-3 mb-4">
                  Deploy and maintain into your own AWS, GCP, or Azure. You pay the
                  automation fee to Apso and your cloud provider directly. Apso never marks
                  up your cloud bill.
                </p>
                <p className="text-sm text-fg-4 mb-6">
                  Priced above managed because it replaces platform engineering and CI/CD
                  labor, not because it includes more infrastructure. Ejection is free and
                  clean. You pay to stay current, not to leave.
                </p>
                <div className="mb-6 rounded-sm border border-line-1 bg-bg-1 px-4 py-3">
                  <p className="text-[12px] font-display font-600 uppercase tracking-wide text-fg-4 mb-1">
                    Credits
                  </p>
                  <p className="text-sm font-medium text-fg-1">
                    Uses your credit pool and can connect to your own AI key.
                  </p>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Your cloud, your credits, your compliance",
                    "Same deterministic generation engine",
                    "Ongoing pipeline maintenance and updates",
                    "Better economics at scale",
                    "Available on Pro+ plans",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-fg-3">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="primary" className="w-full">
                  Talk to Sales
                </Button>
              </Card>
            </div>
          )}
        </Container>
      </Section>

      {/* Comparison strip */}
      <Section>
        <Container className="text-center max-w-[860px]">
          <h2 className="text-h2 text-fg-1 mb-4">
            You pay for automation, not access to your own code
          </h2>
          <p className="text-fg-3">
            Supabase and Firebase charge you to use their platform. Apso generates code you
            own. Stop paying and the code keeps running without a migration, rewrite, or exit fee.
          </p>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <p className="text-eyebrow text-brand mb-4">Credits</p>
              <h2 className="text-h2 text-fg-1 mb-4">How credits work</h2>
              <p className="text-fg-3 leading-relaxed">
                Credits cover AI actions and deployment automation. They are separate from
                hosting, so you can see what the platform did and what your service costs to run.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "What counts",
                  body: "An AI action is about 1 credit. A deploy is usually 1-2 credits.",
                },
                {
                  title: "What is included",
                  body: "Free gets ~50 onboarding credits and ~25 monthly credits. Pro includes ~100 credits per service each month.",
                },
                {
                  title: "What happens at zero",
                  body: "Top up, connect your own AI key, or wait for the monthly reset. Auto-refill is opt-in and capped.",
                },
              ].map((item) => (
                <Card key={item.title} padding="lg" className="bg-bg-0">
                  <h3 className="font-display font-700 text-[20px] text-fg-1 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-fg-3 leading-relaxed">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container className="max-w-[860px]">
          <h2 className="text-h2 text-fg-1 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqItems} />
        </Container>
      </Section>
    </>
  );
}
