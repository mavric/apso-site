import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { APP_URL, DOCS_URL } from "@/lib/constants";

const HERO_FEATURES = [
  "Ship a production API in minutes, not weeks",
  "Same schema, same output, every run, on any model",
  "TypeScript, Golang, and Python backends",
  "Use an open-source generator and open-source backend stacks",
];

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.56 9.21L23 12L20.56 14.79L20.9 18.48L17.29 19.3L15.4 22.49L12 21.03L8.6 22.5L6.71 19.31L3.1 18.49L3.44 14.79L1 12L3.44 9.2L3.1 5.5L6.71 4.69L8.6 1.5L12 2.96L15.4 1.5L17.29 4.7L20.9 5.52L20.56 9.21ZM6.29 12.91L10.09 16.72L17.42 9.37L15.94 7.89L10.09 13.76L7.77 11.43L6.29 12.91Z"
        fill="#01E67A"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-bg-0">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-display text-fg-1 mb-5">
              Your agent decides what to build. Apso decides how.
            </h1>
            <p className="text-lead text-fg-3 mb-8">
              Turn a schema into a production-ready backend with REST API, auth, migrations,
              and AWS deployment for TypeScript, Golang, and Python backends. Deterministic output every time,
              on any model. The generator is open source, and you own every line.
            </p>

            <ul className="space-y-3 mb-8">
              {HERO_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[15px] text-fg-2">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button href={APP_URL} external size="lg">
                Start Building Free
              </Button>
              <Button href={DOCS_URL} external variant="outline" size="lg">
                Read the Docs
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/images/avatar-group.png"
                alt="Team avatars"
                width={140}
                height={44}
                className="h-9 w-auto"
              />
              <p className="text-sm text-fg-4">
                The generator is open source, templates are Apache-2.0 licensed, and the free tier stays free.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Dot pattern background */}
            <div
              className="absolute -top-8 -right-8 w-[calc(100%+64px)] h-[calc(100%+64px)] opacity-40 pointer-events-none"
              style={{ backgroundImage: "url(/images/section-dot-bg.png)", backgroundSize: "24px 24px" }}
              aria-hidden="true"
            />
            <Image
              src="/images/banner-img.png"
              alt="Apso platform interface showing schema editor and deployment dashboard"
              width={960}
              height={720}
              className="relative w-full h-auto rounded-lg shadow-xl"
              priority
            />
            {/* Floating accent bar */}
            <div className="absolute -bottom-4 -left-4 h-2 w-24 rounded-full bg-accent" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
