import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { APP_URL, DOCS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Templates",
  description:
    "The open-source GitHub templates behind every Apso backend. TypeScript, Python, and Go service templates with the framework, database, and local dev environment already wired.",
};

const templates = [
  {
    language: "TypeScript",
    repo: "service-template-ts",
    repoUrl: "https://github.com/apsoai/service-template-ts",
    stack: "NestJS, TypeORM, PostgreSQL",
    detail:
      "Includes Swagger documentation, request validation with class-validator, Docker Compose scripts for a local database, and a PGlite sandbox that tests schema migrations before they touch a real database.",
    command: "apso init --name my-api --language typescript",
  },
  {
    language: "Python",
    repo: "service-template-python",
    repoUrl: "https://github.com/apsoai/service-template-python",
    stack: "FastAPI, SQLAlchemy 2, PostgreSQL",
    detail:
      "Async from the ground up with asyncpg, Alembic migrations, and Pydantic v2 models for request and response validation.",
    command: "apso init --name my-api --language python",
  },
  {
    language: "Go",
    repo: "service-template-go",
    repoUrl: "https://github.com/apsoai/service-template-go",
    stack: "Gin, GORM, PostgreSQL",
    detail:
      "Includes goose migrations, Swagger documentation via swaggo, and idiomatic Go project structure.",
    command: "apso init --name my-api --language go",
  },
];

const steps = [
  {
    title: "Clone",
    body: "apso init clones the template for your language, installs dependencies, and initializes git. One command, no manual setup.",
  },
  {
    title: "Define",
    body: "You describe entities and relationships in a .apsorc schema file. The schema is the source of truth for your whole backend.",
  },
  {
    title: "Generate",
    body: "apso generate writes entities, services, controllers, and migrations into the template's autogen directory. Your own code lives in extensions and is never touched.",
  },
];

export default function TemplatesPage() {
  return (
    <>
      <Section>
        <Container>
          <Badge>Open source, Apache-2.0</Badge>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-700 text-fg-1 max-w-[800px]">
            The GitHub templates behind every Apso backend
          </h1>
          <p className="mt-6 text-lg text-fg-3 max-w-[720px]">
            Every backend Apso generates starts from a service template: a
            working GitHub repository with the framework, database wiring, and
            local development environment already in place. The templates are
            public, Apache-2.0 licensed, and the code they produce runs with or
            without Apso.
          </p>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <h2 className="font-display text-3xl font-700 text-fg-1">
            Three languages, one workflow
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {templates.map((t) => (
              <Card key={t.language} padding="lg">
                <h3 className="font-display text-xl font-700 text-fg-1">
                  {t.language}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-fg-2">
                  {t.stack}
                </p>
                <p className="mt-4 text-[15px] text-fg-3">{t.detail}</p>
                <div className="mt-6">
                  <CodeBlock>{t.command}</CodeBlock>
                </div>
                <a
                  href={t.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[15px] font-medium text-brand hover:underline"
                >
                  apsoai/{t.repo} on GitHub
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-3xl font-700 text-fg-1">
            How a template becomes your backend
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title}>
                <span className="text-mono text-[14px] text-fg-4">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-700 text-fg-1">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] text-fg-3">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <div className="max-w-[720px]">
            <h2 className="font-display text-3xl font-700 text-fg-1">
              A template you keep, not a platform you rent
            </h2>
            <p className="mt-6 text-[16px] text-fg-3">
              The generated code is standard framework code in your repository.
              There is no Apso SDK in the output and no runtime dependency on
              Apso. Regenerate when your schema changes, extend it by hand in
              the extensions directory, or stop using Apso entirely. The
              backend keeps working either way.
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="navy">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-700">
            Build your first backend from a template
          </h2>
          <p className="mt-4 text-white/70 max-w-[560px] mx-auto">
            The quickstart takes a schema to a running API in about ten
            minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={`${DOCS_URL}/get-started/quickstart`} external size="lg">
              Read the quickstart
            </Button>
            <Button href={APP_URL} external variant="outline" size="lg" className="border-white/30 text-white hover:border-white">
              Start building free
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
