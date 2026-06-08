import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { APP_URL, DOCS_URL } from "@/lib/constants";

export function CtaBand() {
  return (
    <section className="relative py-20 md:py-24 bg-bg-1 overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "url(/images/section-dot-bg.png)", backgroundSize: "24px 24px" }}
        aria-hidden="true"
      />
      <Container className="relative text-center max-w-[860px]">
        {/* Dogs header illustration */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/dogs-header.svg"
            alt=""
            width={200}
            height={80}
            className="h-16 w-auto opacity-80"
            aria-hidden="true"
          />
        </div>
        <h2 className="text-h2 text-fg-1 mb-4">
          Stop rebuilding backends from scratch
        </h2>
        <p className="text-lead text-fg-3 mb-4">
          Define a schema. Generate a TypeScript, Python, or Golang backend. Deploy to AWS.
          Own every line and start building for free with the open-source CLI.
        </p>
        <p className="text-sm text-fg-4 mb-8">
          Start without a credit card, keep the code, and use Apache-2.0 licensed templates.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={APP_URL} external size="lg">
            Start Building Free
          </Button>
          <Button href={DOCS_URL} external variant="outline" size="lg">
            Read the Docs
          </Button>
        </div>
      </Container>
    </section>
  );
}
