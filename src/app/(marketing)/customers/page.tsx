import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "See how teams use Apso to generate and deploy TypeScript, Python, and Golang backends.",
};

const useCases = [
  {
    title: "SaaS Startups",
    description:
      "Ship a multi-tenant backend in minutes. Skip the weeks of boilerplate scaffolding and go straight to building product-specific features.",
  },
  {
    title: "Consultancies",
    description:
      "Standardize backend delivery across client projects. Same patterns, same quality, every engagement. Hand off code the client owns outright.",
  },
  {
    title: "Enterprise Teams",
    description:
      "Enforce consistent API contracts across services. Audit a spec diff instead of a code diff. Deploy to your own cloud with zero vendor lock-in.",
  },
];

export default function CustomersPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-eyebrow text-brand mb-4">Customers</p>
              <h1 className="text-h1 text-fg-1 mb-6">
                Teams building with Apso
              </h1>
              <p className="text-lead text-fg-3">
                Developers and teams use Apso to generate production backends, deploy to AWS,
                and own every line of code. From solo founders to enterprise platform teams.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/demo-pets.png"
                alt="Apso dog mascots representing diverse development teams"
                width={660}
                height={120}
                className="w-full max-w-[560px] h-auto"
              />
            </div>
          </div>

          {/* Use case cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((item) => (
              <Card key={item.title} padding="lg" className="flex flex-col">
                <div className="h-1.5 w-12 rounded-full bg-brand/20 mb-5" />
                <h3 className="font-display font-700 text-[22px] text-fg-1 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] text-fg-3 leading-relaxed flex-1">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <p className="text-eyebrow text-fg-4 mb-8">Early Access</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center rounded-lg border border-line-1 bg-bg-0 p-8">
            <div>
              <Image
                src="/images/avatar-group.png"
                alt="Team avatars"
                width={140}
                height={44}
                className="h-10 w-auto mb-5"
              />
              <h2 className="text-h3 text-fg-1 mb-3">Early teams are building now</h2>
              <p className="text-fg-3 text-sm leading-relaxed">
                The first Apso teams are using the same product surface in different buying
                motions: founder-led builds, client delivery, and platform standardization.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                ["Founder-led", "Ship the first backend without locking the company into a hosted runtime."],
                ["Agency-led", "Start each client project from the same auditable backend pattern."],
                ["Platform-led", "Give teams a standard way to generate services without central bottlenecks."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-sm border border-line-1 bg-bg-1 p-5">
                  <h3 className="font-display font-700 text-[17px] text-fg-1 mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-fg-3 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container className="text-center max-w-[860px]">
          <h2 className="text-h2 text-fg-1 mb-4">
            Ready to join them?
          </h2>
          <p className="text-fg-3 mb-8">
            Start building your backend today. CLI generation is free forever.
          </p>
          <Button href={APP_URL} external size="lg">
            Start Building Free
          </Button>
        </Container>
      </Section>
    </>
  );
}
