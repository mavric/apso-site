import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const features = [
  {
    label: "Generation",
    title: "Repeatable project structure",
    description: "The schema and CLI version determine the generated entities, controllers, services, and DTOs.",
  },
  {
    label: "Frameworks",
    title: "Familiar framework stacks",
    description: "Generate NestJS with TypeORM, FastAPI with SQLAlchemy, or Gin with GORM.",
  },
  {
    label: "Database",
    title: "PostgreSQL migrations",
    description: "Preview schema changes locally and commit language-native migration files with the service.",
  },
  {
    label: "Access",
    title: "Auth and tenant context",
    description: "Use Better Auth or another JWT provider and carry tenant scope through generated request handling.",
  },
  {
    label: "Clients",
    title: "REST API and TypeScript SDK",
    description: "Connect through standard HTTP or use the SDK for fluent filters, sorting, pagination, and mutations.",
  },
  {
    label: "Ownership",
    title: "No lock-in. You own the code.",
    description: "The generated service lives in your repository. Run, test, extend, and deploy it anywhere. Apso is not required in production.",
  },
];

export function FeatureGrid() {
  return (
    <Section bg="gray">
      <Container>
        <div className="max-w-[720px]">
          <p className="text-eyebrow mb-4 text-brand">Generated foundation</p>
          <h2 className="text-h2 text-fg-1">The backend work every application needs</h2>
          <p className="mt-4 text-fg-3 leading-7">
            Apso creates the repeated service layers from one schema. The result is a coherent backend in your repository with no required Apso runtime.
          </p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line-1 bg-line-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="min-h-[220px] bg-bg-0 p-6 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase text-brand">{feature.label}</span>
                <span className="font-mono text-[10px] text-fg-5">0{index + 1}</span>
              </div>
              <h3 className="mt-8 font-display text-[20px] font-bold text-fg-1">{feature.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-fg-3">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
