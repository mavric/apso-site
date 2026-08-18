import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { APP_URL, DOCS_URL } from "@/lib/constants";

const generatedFiles = [
  "src/autogen/Project/Project.entity.ts",
  "src/autogen/Project/Project.controller.ts",
  "src/autogen/Task/Task.entity.ts",
  "src/autogen/Task/Task.controller.ts",
  "src/extensions/",
];

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line-1 bg-bg-0 pt-8 md:pt-10">
      <Container>
        <div className="mx-auto max-w-[920px] text-center">
          <p className="mb-5 font-mono text-[12px] font-medium uppercase text-brand">
            The backend foundation for AI-built software
          </p>
          <h1 className="text-display text-fg-1">Get the foundation right.</h1>
          <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-7 text-fg-3 md:text-[18px]">
            Apso turns your product model into a consistent, scalable backend. You own the generated code,
            APIs, migrations, and infrastructure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 min-[360px]:flex-row">
            <Button href={APP_URL} external size="lg">
              Start building
            </Button>
            <Button href={DOCS_URL} external variant="outline" size="lg">
              Quickstart
            </Button>
          </div>
          <div className="mt-6 hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-fg-4 sm:flex">
            <span>Apso expertise for your agent</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-line-1 sm:block" />
            <span>Consistent APIs by design</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-line-1 sm:block" />
            <span>Source code ownership</span>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[1120px] overflow-hidden rounded-sm border border-line-1 bg-navy shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
          <div className="flex h-11 items-center justify-between border-b border-white/10 px-4 sm:px-5">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
            <span className="font-mono text-[11px] text-white/55">project-api / generated</span>
          </div>

          <div className="grid min-h-0 md:min-h-[280px] md:grid-cols-[0.95fr_1.1fr_1fr]">
            <div className="hidden border-b border-white/10 p-5 md:block md:border-b-0 md:border-r md:p-6">
              <p className="font-mono text-[11px] uppercase text-accent">01 / Intent</p>
              <p className="mt-4 font-display text-[22px] font-semibold leading-7 text-white">
                A multi-tenant project workspace with members and tasks
              </p>
              <div className="mt-6 space-y-3 text-[13px] text-white/65">
                <p className="flex items-center gap-2"><span className="text-accent">✓</span> Workspace-scoped data</p>
                <p className="flex items-center gap-2"><span className="text-accent">✓</span> Member roles</p>
                <p className="flex items-center gap-2"><span className="text-accent">✓</span> Project and task CRUD</p>
                <p className="flex items-center gap-2"><span className="text-accent">✓</span> REST endpoints</p>
              </div>
            </div>

            <div className="h-[210px] overflow-hidden border-b border-white/10 bg-[#071c3d] p-5 md:h-auto md:border-b-0 md:border-r md:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[11px] uppercase text-[#8fb5ff]">02 / .apsorc</p>
                <span className="font-mono text-[10px] text-white/35">source of truth</span>
              </div>
              <pre className="mt-4 overflow-hidden font-mono text-[12px] leading-5 text-white/80" aria-label="Example Apso schema">
                <code>{`{
  "version": 2,
  "language": "typescript",
  "entities": [
    { "name": "Workspace" },
    { "name": "Member" },
    { "name": "Project" },
    { "name": "Task" }
  ]
}`}</code>
              </pre>
            </div>

            <div className="hidden p-5 md:block md:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[11px] uppercase text-[#ffd166]">03 / Output</p>
                <span className="rounded-sm border border-accent/30 bg-accent/10 px-2 py-1 font-mono text-[10px] text-accent">
                  generated
                </span>
              </div>
              <div className="mt-4 space-y-2.5">
                {generatedFiles.map((file, index) => (
                  <div key={file} className="flex min-w-0 items-center gap-2.5 font-mono text-[11px] text-white/65">
                    <span className={index === generatedFiles.length - 1 ? "text-accent" : "text-[#8fb5ff]"}>
                      {index === generatedFiles.length - 1 ? "+" : "↳"}
                    </span>
                    <span className="truncate">{file}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-4 font-mono text-[11px] leading-6 text-white/50">
                <p><span className="text-accent">POST</span> /Projects</p>
                <p><span className="text-[#8fb5ff]">GET</span> /Projects/:id</p>
                <p><span className="text-[#ffd166]">PATCH</span> /Tasks/:id</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="h-8" />
    </section>
  );
}
