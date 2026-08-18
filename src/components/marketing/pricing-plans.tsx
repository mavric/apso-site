"use client";

import { useState } from "react";
import { Check, CloudCog, ExternalLink, ShieldCheck, Users } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { APP_URL } from "@/lib/constants";

const managedTiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Define, generate, and inspect a backend before you move into production.",
    features: ["Backend generation", "One hosted service for evaluation", "Scale-to-zero compute", "Apso subdomain"],
    cta: "Start building",
    href: APP_URL,
  },
  {
    name: "Pro",
    price: "$25",
    period: "per service / month",
    description: "Run a production service with the operational basics handled by Apso.",
    features: ["Always-on compute", "Automated backups and restore", "Custom domain", "Monitoring and logs", "Commercial use"],
    cta: "Build a production service",
    href: APP_URL,
    featured: true,
  },
  {
    name: "Team",
    price: "$99",
    period: "per month, flat",
    description: "Give a delivery team one catalog and one generation standard without seat charges.",
    features: ["Shared workspace", "Roles and permissions", "Service catalog", "Review and approvals", "Unlimited members", "Per-service Pro charges apply"],
    cta: "Start a team",
    href: APP_URL,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Add governance, deployment controls, and rollout support for larger organizations.",
    features: ["SSO and audit logs", "Dedicated infrastructure options", "Service agreements", "Rollout support", "Full code ownership"],
    cta: "Talk to sales",
    href: "/contact",
  },
];

const faqItems = [
  {
    question: "What is a service for billing?",
    answer: "A service is one deployable backend with its own deployment target, domain, scaling configuration, and catalog entry. Each service can be operated independently.",
  },
  {
    question: "Does Apso charge per seat?",
    answer: "No. The Team plan is a flat workspace fee with unlimited members. Managed production services are billed separately.",
  },
  {
    question: "Do we own the generated code?",
    answer: "Yes. Apso generates normal TypeScript, Python, or Go backend code in your repository. Your team can inspect it, change it, run it without Apso, and deploy it elsewhere. Export gives you the application code. Infrastructure automation is the paid layer.",
  },
  {
    question: "Can we deploy into our own cloud account?",
    answer: "Yes. Your Cloud keeps Apso generation and deployment automation while the infrastructure runs in your cloud account. You pay your cloud provider directly.",
  },
];

export function PricingPlans() {
  const [mode, setMode] = useState<"managed" | "byoc">("managed");

  return (
    <>
      <div className="mb-8 inline-flex rounded-sm border border-line-1 bg-bg-0 p-1" aria-label="Infrastructure model">
        {(["managed", "byoc"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            onClick={() => setMode(value)}
            className={`rounded-sm px-4 py-2.5 text-[13px] font-semibold transition-colors ${
              mode === value ? "bg-navy text-white" : "text-fg-4 hover:text-fg-1"
            }`}
          >
            {value === "managed" ? "Managed by Apso" : "Your Cloud"}
          </button>
        ))}
      </div>

      {mode === "managed" ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {managedTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex min-h-[520px] flex-col rounded-sm border bg-bg-0 p-6 ${
                tier.featured ? "border-brand shadow-[0_14px_34px_rgba(0,24,255,0.08)]" : "border-line-1"
              }`}
            >
              {tier.featured && (
                <span className="absolute right-4 top-4 rounded-sm bg-brand-soft px-2 py-1 font-mono text-[9px] uppercase text-brand">
                  Production default
                </span>
              )}
              <p className="font-mono text-[10px] uppercase text-fg-5">{tier.name}</p>
              <div className="mt-5 min-h-[76px]">
                <span className="font-display text-[38px] font-extrabold leading-none text-fg-1">{tier.price}</span>
                {tier.period && <span className="mt-2 block text-[12px] text-fg-5">{tier.period}</span>}
              </div>
              <p className="mt-4 min-h-[72px] text-[14px] leading-6 text-fg-3">{tier.description}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-line-1 pt-5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-5 text-fg-3">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                target={tier.href.startsWith("http") ? "_blank" : undefined}
                rel={tier.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 font-display text-[13px] font-semibold transition-colors ${
                  tier.featured ? "bg-brand text-white hover:bg-brand-hover" : "border border-line-1 text-fg-1 hover:border-fg-4"
                }`}
              >
                {tier.cta}
                {tier.href.startsWith("http") && <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />}
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="grid overflow-hidden rounded-sm border border-line-1 bg-bg-0 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="bg-navy p-7 text-white md:p-10">
            <CloudCog aria-hidden="true" className="h-7 w-7 text-accent" />
            <p className="mt-8 font-mono text-[10px] uppercase text-white/42">Your Cloud</p>
            <p className="mt-3 font-display text-[42px] font-extrabold text-white">From $40</p>
            <p className="mt-1 text-[13px] text-white/48">per service / month, plus cloud costs</p>
            <p className="mt-6 text-[14px] leading-6 text-white/65">
              Apso maintains the generation and deployment workflow while the runtime, database, and credentials stay in your cloud account.
            </p>
          </div>
          <div className="p-7 md:p-10">
            <h3 className="font-display text-[26px] font-bold text-fg-1">Control the account boundary</h3>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <CloudDetail icon={ShieldCheck} title="Your infrastructure" body="Use your cloud credits, network controls, credentials, and compliance settings." />
              <CloudDetail icon={Users} title="Apso automation" body="Keep the repeatable build pipeline and receive workflow updates without handing over the account." />
              <CloudDetail icon={CloudCog} title="No cloud markup" body="Pay your provider directly and see the infrastructure cost separately from Apso automation." />
              <CloudDetail icon={Check} title="Portable output" body="The backend code remains in your repository and can run without the Apso platform." />
            </div>
            <a href="/contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-sm bg-brand px-5 font-display text-[13px] font-semibold text-white hover:bg-brand-hover">
              Discuss Your Cloud
            </a>
          </div>
        </div>
      )}

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.65fr_1fr]">
        <div>
          <p className="font-mono text-[10px] uppercase text-brand">Pricing questions</p>
          <h2 className="mt-3 font-display text-[28px] font-bold text-fg-1">The operating details, plainly stated</h2>
          <p className="mt-3 text-[14px] leading-6 text-fg-4">Need a specific infrastructure, governance, or rollout answer? The contact page routes those questions directly.</p>
        </div>
        <Accordion items={faqItems} />
      </div>
    </>
  );
}

function CloudDetail({ icon: Icon, title, body }: { icon: typeof Check; title: string; body: string }) {
  return (
    <div className="border-t border-line-1 pt-4">
      <Icon aria-hidden="true" className="h-5 w-5 text-brand" />
      <h4 className="mt-3 font-display text-[16px] font-semibold text-fg-1">{title}</h4>
      <p className="mt-1.5 text-[13px] leading-5 text-fg-4">{body}</p>
    </div>
  );
}
