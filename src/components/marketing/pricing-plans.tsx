"use client";

import { Check, ExternalLink } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { APP_URL } from "@/lib/constants";

type Tier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  badge?: string;
};

const workspacePlans: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Bring the whole team. Everyone in the workspace can build and deploy. Roles are not managed on Free.",
    features: ["Unlimited members", "Everyone can build and deploy", "One free hosted service", "Backend generation"],
    cta: "Start building",
    href: APP_URL,
  },
  {
    name: "Team",
    price: "$99",
    period: "per month, flat",
    description: "Control who can do what once the team grows. No per-seat charge.",
    features: ["Everything in Free", "Roles and permissions"],
    cta: "Start a team",
    href: APP_URL,
  },
  {
    name: "Business",
    price: "Custom",
    period: "talk to sales",
    description: "Apso runs the DevOps for the whole workspace, in Apso's cloud or in your own cloud account.",
    features: ["Everything in Team", "Managed DevOps for every service", "Run in Apso's cloud or yours"],
    cta: "Talk to sales",
    href: "/contact",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "talk to sales",
    description: "Add single sign-on, service agreements, and rollout support for larger organizations.",
    features: ["SSO", "Service agreements", "Rollout support"],
    cta: "Talk to sales",
    href: "/contact",
  },
];

const serviceTiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "one per workspace",
    description: "Deploy a backend to try it out. Not for commercial use.",
    features: ["Scale-to-zero compute", "Apso subdomain"],
    cta: "Deploy for free",
    href: APP_URL,
  },
  {
    name: "Small",
    price: "$25",
    period: "per service / month",
    description: "Run a production service with the operational basics handled by Apso.",
    features: ["Always-on compute", "Automated backups and restore", "Custom domain", "Monitoring and logs", "Commercial use"],
    cta: "Build a production service",
    href: APP_URL,
    badge: "Production default",
  },
  {
    name: "Medium",
    price: "$49",
    period: "per service / month",
    description: "Medium gives a service more resources than Small.",
    features: ["Everything in Small", "More resources"],
    cta: "Build a production service",
    href: APP_URL,
  },
  {
    name: "Large",
    price: "$99",
    period: "per service / month",
    description: "Large gives a service the most resources Apso offers.",
    features: ["Everything in Small", "The most resources"],
    cta: "Build a production service",
    href: APP_URL,
  },
];

const faqItems = [
  {
    question: "How do workspace plans and service tiers fit together?",
    answer: "A workspace plan sets team controls and who runs operations. A service tier sets the compute for one deployed service. You buy them separately. Any workspace plan, including Free, can add Small, Medium, or Large services.",
  },
  {
    question: "What is a service for billing?",
    answer: "A service is one deployable backend with its own deployment target, domain, scaling configuration, and catalog entry. Each service has its own tier and can be operated independently.",
  },
  {
    question: "Does Apso charge per seat?",
    answer: "No. Every workspace plan includes unlimited members. Team is a flat $99 per month for the workspace. Services are billed separately by tier.",
  },
  {
    question: "Do we own the generated code?",
    answer: "Yes. Apso generates normal TypeScript, Python, or Go backend code in your repository. Your team can inspect it, change it, run it without Apso, and deploy it elsewhere. Export gives you the application code. Infrastructure automation is the paid layer.",
  },
  {
    question: "Can we deploy into our own cloud account?",
    answer: "Two ways. You can export the generated code and run it anywhere, free. Or, on Business, Apso runs the DevOps for your workspace inside your own cloud account. You pay your cloud provider directly.",
  },
];

export function PricingPlans() {
  return (
    <>
      <PlanGroup
        eyebrow="Workspace plans"
        title="Team controls and who runs operations"
        note="One plan per workspace. Every plan includes unlimited members."
        tiers={workspacePlans}
      />
      <PlanGroup
        eyebrow="Service tiers"
        title="Compute for each deployed service"
        note="You choose a tier for each service, on any workspace plan."
        tiers={serviceTiers}
        className="mt-14"
      />

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

function PlanGroup({ eyebrow, title, note, tiers, className = "" }: { eyebrow: string; title: string; note: string; tiers: Tier[]; className?: string }) {
  return (
    <div className={className}>
      <p className="font-mono text-[10px] uppercase text-brand">{eyebrow}</p>
      <h3 className="mt-3 font-display text-[24px] font-bold text-fg-1">{title}</h3>
      <p className="mt-2 text-[14px] leading-6 text-fg-4">{note}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`relative flex flex-col rounded-sm border bg-bg-0 p-6 ${
              tier.badge ? "border-brand shadow-[0_14px_34px_rgba(0,24,255,0.08)]" : "border-line-1"
            }`}
          >
            {tier.badge && (
              <span className="absolute right-4 top-4 rounded-sm bg-brand-soft px-2 py-1 font-mono text-[9px] uppercase text-brand">
                {tier.badge}
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
                tier.badge ? "bg-brand text-white hover:bg-brand-hover" : "border border-line-1 text-fg-1 hover:border-fg-4"
              }`}
            >
              {tier.cta}
              {tier.href.startsWith("http") && <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
