import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { DOCS_URL } from "@/lib/constants";

const outputGroups = [
  {
    title: "Data layer",
    items: ["ORM models", "relationships", "constraints", "migrations"],
  },
  {
    title: "API layer",
    items: ["REST controllers", "validation DTOs", "filters", "OpenAPI"],
  },
  {
    title: "Application layer",
    items: ["services", "auth guards", "tenant context", "extension hooks"],
  },
  {
    title: "Operations",
    items: ["local database", "tests", "Docker", "deployment config"],
  },
];

export function SocialProof() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <p className="text-eyebrow mb-4 text-brand">Inspect the output</p>
            <h2 className="text-h2 text-fg-1">A backend repository your team can read and change</h2>
            <p className="mt-4 text-fg-3 leading-7">
              The generator writes ordinary framework code and keeps custom application logic in a separate directory.
              Review the files, run the tests, and use the same deployment tools you use for other services.
            </p>
          </div>
          <Button href={`${DOCS_URL}/architecture/generated-code`} external variant="outline">
            Explore generated code
          </Button>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-sm border border-line-1 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="bg-navy p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <span className="font-mono text-[11px] text-white/50">generated service</span>
              <span className="font-mono text-[10px] text-accent">READY</span>
            </div>
            <div className="mt-6 space-y-2 font-mono text-[12px] leading-6 text-white/65">
              <p className="text-white">project-api/</p>
              <p className="pl-4">.apsorc</p>
              <p className="pl-4">src/</p>
              <p className="pl-8 text-[#8fb5ff]">autogen/</p>
              <p className="pl-12">Project/</p>
              <p className="pl-12">Task/</p>
              <p className="pl-8 text-accent">extensions/</p>
              <p className="pl-4">migrations/</p>
              <p className="pl-4">test/</p>
              <p className="pl-4">docker-compose.yml</p>
            </div>
          </div>
          <div className="grid gap-px bg-line-1 sm:grid-cols-2">
            {outputGroups.map((group) => (
              <div key={group.title} className="bg-bg-0 p-6 sm:p-7">
                <h3 className="font-display text-[18px] font-bold text-fg-1">{group.title}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-fg-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
