import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";

export function SocialProof() {
  return (
    <Section bg="gray">
      <Container>
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="text-eyebrow text-brand mb-4">See the Output</p>
            <h2 className="text-h2 text-fg-1 mb-4">
              A complete REST API from 30 lines of schema
            </h2>
            <p className="text-fg-3 leading-relaxed mb-4">
              This is a real Apso-generated backend. The .apsorc schema on the left defines
              entities, relationships, and auth rules. The CLI produces the full API on the right:
              endpoints, database migrations, validation, tenant scoping, and deployment config.
            </p>
            <p className="text-fg-3 leading-relaxed mb-6">
              Every line of the generated code is standard TypeScript backend code that compiles and runs
              independently. It has no Apso SDK or vendor import, and you own it.
            </p>
            <Button href={APP_URL} external>
              Try It Free
            </Button>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 opacity-40 pointer-events-none rounded-lg"
              style={{ backgroundImage: "url(/images/section-dot-bg.png)", backgroundSize: "20px 20px" }}
              aria-hidden="true"
            />
            <Image
              src="/images/how-it-works.png"
              alt="Apso service dashboard generated from a schema"
              width={426}
              height={417}
              className="relative w-full max-w-[560px] h-auto rounded-lg border border-line-1 bg-bg-0 shadow-xl"
            />
            <div className="relative mt-5 grid grid-cols-3 gap-3">
              {["REST routes", "Auth guards", "RDS deploy"].map((item) => (
                <div key={item} className="rounded-sm border border-line-1 bg-bg-0 px-4 py-3">
                  <p className="font-display font-700 text-[15px] text-fg-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
