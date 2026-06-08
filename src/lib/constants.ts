export const SITE_NAME = "Apso";
export const SITE_DESCRIPTION =
  "Open-source generation for agent-driven backends. Define a schema, get a production-ready TypeScript, Golang, or Python backend, and own every line.";
export const SITE_URL = "https://apso.ai";
export const APP_URL = "https://app.apso.cloud";
export const DOCS_URL = "https://docs.apso.ai";
export const GITHUB_URL = "https://github.com/apsoai";
export const CONTACT_EMAIL = "sales@mavric.tech";

export const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Compare", href: "/compare" },
  { label: "Docs", href: DOCS_URL, external: true },
  { label: "Blog", href: "/blog" },
  { label: "Company", href: "/company" },
] as const;

export const FOOTER_LINKS = {
  Product: [
    { label: "Pricing", href: "/pricing" },
    { label: "Documentation", href: DOCS_URL, external: true },
    { label: "Changelog", href: "/blog" },
    { label: "Compare", href: "/compare" },
  ],
  Compare: [
    { label: "Supabase", href: "/compare/supabase" },
    { label: "Firebase", href: "/compare/firebase" },
    { label: "Appwrite", href: "/compare/appwrite" },
    { label: "Hasura", href: "/compare/hasura" },
    { label: "Xano", href: "/compare/xano" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Customers", href: "/customers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
} as const;
