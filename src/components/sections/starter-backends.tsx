/* eslint-disable @next/next/no-img-element -- Company favicons come from the dynamic source used by Create Service. */
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CreditCard,
  FileText,
  FolderKanban,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  FEATURED_STARTER_IDS,
  STARTER_BACKENDS,
} from "@/lib/starter-backends";

interface FeaturedStarterDetails {
  icon: LucideIcon;
  iconStyle: string;
  hoverStyle: string;
  replaces: string[];
  savingsRange: string;
}

const featuredStarterDetails: Record<string, FeaturedStarterDetails> = {
  "multi-tenant-workspaces": {
    icon: Building2,
    iconStyle: "bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600",
    hoverStyle: "hover:border-violet-500/40",
    replaces: ["Custom Multi-tenancy"],
    savingsRange: "Weeks of dev time",
  },
  crm: {
    icon: Users,
    iconStyle: "bg-gradient-to-br from-sky-500/10 to-indigo-500/10 text-sky-600",
    hoverStyle: "hover:border-sky-500/40",
    replaces: ["HubSpot", "Salesforce", "Pipedrive"],
    savingsRange: "$50-500/user",
  },
  ecommerce: {
    icon: ShoppingCart,
    iconStyle: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-600",
    hoverStyle: "hover:border-cyan-500/40",
    replaces: ["Shopify", "BigCommerce", "Saleor"],
    savingsRange: "$29-299/mo + fees",
  },
  "subscription-billing": {
    icon: CreditCard,
    iconStyle: "bg-gradient-to-br from-green-500/10 to-emerald-500/10 text-green-600",
    hoverStyle: "hover:border-green-500/40",
    replaces: ["Stripe Billing", "Chargebee", "Recurly"],
    savingsRange: "$250-2000/mo",
  },
  "project-management": {
    icon: FolderKanban,
    iconStyle: "bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 text-purple-600",
    hoverStyle: "hover:border-purple-500/40",
    replaces: ["Asana", "Monday.com", "ClickUp"],
    savingsRange: "$10-25/user",
  },
  "blog-cms": {
    icon: FileText,
    iconStyle: "bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 text-fuchsia-600",
    hoverStyle: "hover:border-fuchsia-500/40",
    replaces: ["WordPress", "Ghost", "Contentful"],
    savingsRange: "$5-100/mo",
  },
};

const companyDomains: Record<string, string> = {
  HubSpot: "hubspot.com",
  Salesforce: "salesforce.com",
  Pipedrive: "pipedrive.com",
  Shopify: "shopify.com",
  BigCommerce: "bigcommerce.com",
  Saleor: "saleor.io",
  "Stripe Billing": "stripe.com",
  Chargebee: "chargebee.com",
  Recurly: "recurly.com",
  Asana: "asana.com",
  "Monday.com": "monday.com",
  ClickUp: "clickup.com",
  WordPress: "wordpress.com",
  Ghost: "ghost.org",
  Contentful: "contentful.com",
};

function getLogoUrl(companyName: string) {
  const domain = companyDomains[companyName];
  return domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : null;
}

export function StarterBackends() {
  const featured = FEATURED_STARTER_IDS.map((id) =>
    STARTER_BACKENDS.find((starter) => starter.id === id)
  ).filter((starter): starter is (typeof STARTER_BACKENDS)[number] => Boolean(starter));

  return (
    <Section bg="gray" id="starters">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px]">
            <p className="text-eyebrow mb-4 text-brand">Starter backends</p>
            <h2 className="text-h2 text-fg-1">Start with the data model your product already needs</h2>
            <p className="mt-4 max-w-[660px] text-fg-3 leading-7">
              Each starter gives Apso a detailed schema brief for a real application pattern. Choose one,
              adjust the entities and relationships, then generate the backend in your preferred language.
            </p>
          </div>
          <Link
            href="/templates"
            className="inline-flex shrink-0 items-center gap-2 font-display text-[15px] font-semibold text-brand hover:text-brand-hover"
          >
            Browse all {STARTER_BACKENDS.length} starters <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((starter) => {
            const details = featuredStarterDetails[starter.id];
            const StarterIcon = details.icon;

            return (
              <Link
                key={starter.id}
                href={`/templates#${starter.id}`}
                className={`group relative flex min-h-[254px] flex-col overflow-hidden rounded-sm border border-line-1 bg-bg-0 p-5 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] ${details.hoverStyle}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105 ${details.iconStyle}`}
                  >
                    <StarterIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-fg-5 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg-2"
                  />
                </div>

                <h3 className="mt-4 font-display text-[18px] font-bold text-fg-1">{starter.title}</h3>

                <div className="mt-3 flex min-h-8 items-center gap-2">
                  <span className="shrink-0 text-[10px] font-semibold uppercase text-fg-4">Replaces:</span>
                  <div className="flex items-center gap-2">
                    {details.replaces.slice(0, 3).map((company) => {
                      const logoUrl = getLogoUrl(company);

                      return logoUrl ? (
                        <span
                          key={company}
                          className="flex h-8 w-8 items-center justify-center rounded-sm border border-line-1 bg-white p-1 shadow-sm transition-[box-shadow,transform] group-hover:shadow-md"
                          title={company}
                        >
                          <img
                            src={logoUrl}
                            alt={company}
                            width={24}
                            height={24}
                            className="h-6 w-6 object-contain"
                          />
                        </span>
                      ) : (
                        <span
                          key={company}
                          className="rounded-sm bg-bg-2 px-2 py-1 text-[10px] font-medium text-fg-4"
                          title={company}
                        >
                          {company}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <p className="mt-2 text-[12px] font-semibold text-emerald-700">Save {details.savingsRange}</p>
                <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-fg-3">{starter.description}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
