import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function BrandIntro() {
  return (
    <Section bg="gray">
      <Container>
        <div className="grid md:grid-cols-[1fr_500px] gap-12 items-center">
          <div>
            <p className="text-eyebrow text-brand mb-4">The Problem</p>
            <h2 className="text-h2 text-fg-1 mb-6">
              Agent-authored backends drift every time the model changes
            </h2>
            <p className="text-lead text-fg-3 mb-6">
              Most AI coding tools let a model write your backend directly. The output varies with
              the model, the prompt, and the day. Two services built a week apart follow different
              patterns. Auditing means reading thousands of lines the agent chose to write. When the
              model upgrades, your guardrails silently change.
            </p>
            <p className="text-lead text-fg-3">
              Apso works differently. The agent translates intent into
              an <code className="font-mono text-brand bg-brand-soft px-1.5 py-0.5 rounded text-[15px]">.apsorc</code> schema.
              The CLI deterministically generates a production-ready backend with auth, multi-tenancy,
              and validation baked in. Guardrails live in the generator, not the prompt. Same schema,
              same output, every time, on any model.
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <Image
              src="/images/dog-puppy.svg"
              alt=""
              width={520}
              height={152}
              className="w-full max-w-[500px] h-auto opacity-95"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
