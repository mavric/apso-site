import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Apso is built by Mavric Technology. We believe backends should be generated, owned, and portable.",
};

export default function CompanyPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <p className="text-eyebrow text-brand mb-4">Company</p>
              <h1 className="text-h1 text-fg-1 mb-6">
                Backends should be owned, not rented
              </h1>
              <div className="space-y-5 text-fg-3 text-lead">
                <p>
                  Apso is built by Mavric Technology, a software consultancy and product studio
                  based in the United States. We have spent years building backends for clients
                  across industries and noticed the same repeated work: CRUD endpoints, auth
                  middleware, migration scripts, and deployment configurations were written from
                  scratch for each project.
                </p>
                <p>
                  We built Apso to codify those patterns into a deterministic generator. Define
                  your schema once in a single .apsorc file and get a production-ready backend in
                  TypeScript, Python, or Golang. The output is real backend code in your repository,
                  with no vendor runtime or proprietary SDK. Stop using Apso and the code keeps
                  running.
                </p>
                <p>
                  The agent-forward positioning came from watching AI coding tools produce
                  inconsistent backends. The problem was never the agent. The problem was that
                  guardrails lived in the prompt instead of the generator. Apso fixes this:
                  the agent decides what to build, the CLI decides how, and the generated output
                  is identical regardless of which model drove the process.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/company-grid.svg"
                alt="Apso team illustration with dog mascots"
                width={320}
                height={320}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Team section */}
      <Section bg="gray">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/dev-team.png"
                alt="The team behind Apso"
                width={480}
                height={480}
                className="w-full max-w-[400px] h-auto mx-auto rounded-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-h2 text-fg-1 mb-4">Our Mission</h2>
              <p className="text-lead text-fg-3 mb-8">
                Make backend development a configuration problem instead of a coding problem,
                without sacrificing ownership or portability.
              </p>
              <Button href={APP_URL} external size="lg">
                Start Building Free
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
