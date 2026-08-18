import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { APP_URL, DOCS_URL } from "@/lib/constants";

export function CtaBand() {
  return (
    <section id="deploy" className="border-y border-white/10 bg-navy py-16 text-white md:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-[760px]">
            <p className="font-mono text-[11px] uppercase text-accent">Build on a foundation you own</p>
            <h2 className="mt-4 font-display text-[34px] font-bold leading-tight text-white md:text-[40px]">
              Give your product a backend that can grow with it
            </h2>
            <p className="mt-4 max-w-[680px] text-[16px] leading-7 text-white/65">
              Start in the service builder or connect Apso to Claude or Codex. Apso teaches your agent the backend conventions, gives it the project tools, and keeps the generated service consistent as it grows.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={APP_URL} external size="lg" className="min-w-[190px]">
              Start building
            </Button>
            <a
              href={`${DOCS_URL}/develop/tools/ai-assisted-development`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[190px] items-center justify-center rounded-sm border border-white/25 px-6 py-4 font-display text-[15px] font-semibold text-white transition-colors hover:border-white/50"
            >
              Make your agent an expert
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
