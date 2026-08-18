import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const reasons = [
  {
    number: "01",
    title: "Backend developers stay in control",
    description: "Inspect predictable NestJS, FastAPI, or Gin code and add product logic without losing it when the schema changes.",
  },
  {
    number: "02",
    title: "Product teams can define the system",
    description: "Turn entities, relationships, and rules into a working API without hand-assembling every backend layer.",
  },
  {
    number: "03",
    title: "Lean teams can operate without a dedicated DevOps team",
    description: "Run locally, deploy through Apso Cloud, or take the generated service to infrastructure your team controls.",
  },
];

export function BrandIntro() {
  return (
    <Section bg="gray">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-eyebrow mb-4 text-brand">Built for the whole product team</p>
            <h2 className="text-h2 text-fg-1">A backend foundation that keeps people and agents aligned</h2>
            <p className="mt-5 text-fg-3 leading-7">
              Backend developers get code they can review and extend. Product teams get a clear model of the
              system. AI agents get Apso&apos;s rules for schemas, access boundaries, extensions, and migrations, plus a repeatable process that produces the same structure across every service.
            </p>
            <div className="mt-8 divide-y divide-line-1 border-y border-line-1">
              {reasons.map((reason) => (
                <div key={reason.number} className="grid grid-cols-[44px_1fr] gap-3 py-5">
                  <span className="font-mono text-[11px] text-brand">{reason.number}</span>
                  <div>
                    <h3 className="font-display text-[17px] font-semibold text-fg-1">{reason.title}</h3>
                    <p className="mt-1 text-[14px] leading-6 text-fg-4">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-line-1 bg-bg-0">
            <div className="flex h-11 items-center justify-between border-b border-line-1 bg-bg-1 px-5">
              <span className="font-mono text-[11px] text-fg-4">regeneration boundary</span>
              <span className="font-mono text-[10px] text-brand">PROJECT TREE</span>
            </div>
            <div className="grid sm:grid-cols-2">
              <div className="border-b border-line-1 p-6 sm:border-b-0 sm:border-r">
                <p className="font-display text-[15px] font-semibold text-fg-1">Generated</p>
                <p className="mt-1 text-[12px] text-fg-5">Rewritten by Apso</p>
                <div className="mt-5 space-y-2 font-mono text-[12px] text-fg-3">
                  <p>src/autogen/</p>
                  <p className="pl-4 text-fg-4">entities/</p>
                  <p className="pl-4 text-fg-4">controllers/</p>
                  <p className="pl-4 text-fg-4">services/</p>
                  <p className="pl-4 text-fg-4">dto/</p>
                  <p className="pl-4 text-fg-4">migrations/</p>
                </div>
              </div>
              <div className="p-6">
                <p className="font-display text-[15px] font-semibold text-fg-1">Owned by your team</p>
                <p className="mt-1 text-[12px] text-fg-5">Preserved across generation</p>
                <div className="mt-5 space-y-2 font-mono text-[12px] text-fg-3">
                  <p>src/extensions/</p>
                  <p className="pl-4 text-fg-4">billing/</p>
                  <p className="pl-4 text-fg-4">workflows/</p>
                  <p className="pl-4 text-fg-4">webhooks/</p>
                  <p className="pl-4 text-fg-4">reports/</p>
                  <p className="mt-4 text-accent">+ your product logic</p>
                </div>
              </div>
            </div>
            <div className="border-t border-line-1 bg-navy px-6 py-5 font-mono text-[12px] text-white/70">
              <span className="text-accent">$</span> apso generate <span className="text-white/35"># custom files preserved</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
