import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { DOCS_URL } from "@/lib/constants";

const frontends = [
  { name: "Next.js", href: `${DOCS_URL}/develop/frontend/nextjs` },
  { name: "React", href: `${DOCS_URL}/develop/frontend/react` },
  { name: "React Native", href: `${DOCS_URL}/develop/frontend/react-native` },
  { name: "Flutter", href: `${DOCS_URL}/develop/frontend/flutter` },
];

const codeLines = [
  <>
    <span className="text-[#c792ea]">import</span>
    <span className="text-white/70"> {"{ "}</span>
    <span className="text-[#82aaff]">ApsoClientFactory</span>
    <span className="text-white/70">{" }"} </span>
    <span className="text-[#c792ea]">from</span>
    <span className="text-[#c3e88d]"> &apos;@apso/sdk&apos;</span>
  </>,
  null,
  <>
    <span className="text-[#c792ea]">const</span>
    <span className="text-white"> apso </span>
    <span className="text-white/55">= </span>
    <span className="text-[#82aaff]">ApsoClientFactory</span>
    <span className="text-white/55">.</span>
    <span className="text-[#ffcb6b]">getClient</span>
    <span className="text-white/55">{"({"}</span>
  </>,
  <>
    <span className="text-[#f78c6c]">  baseURL</span>
    <span className="text-white/55">: </span>
    <span className="text-[#89ddff]">process.env</span>
    <span className="text-white/55">.</span>
    <span className="text-[#c3e88d]">APSO_API_URL</span>
    <span className="text-white/55">!,</span>
  </>,
  <>
    <span className="text-[#f78c6c]">  apiKey</span>
    <span className="text-white/55">: </span>
    <span className="text-[#89ddff]">process.env</span>
    <span className="text-white/55">.</span>
    <span className="text-[#c3e88d]">APSO_API_KEY</span>
    <span className="text-white/55">!</span>
  </>,
  <span key="client-close" className="text-white/55">{"})"}</span>,
  null,
  <>
    <span className="text-[#c792ea]">export default async function</span>
    <span className="text-[#82aaff]"> ProjectsPage</span>
    <span className="text-white/55">{"() {"}</span>
  </>,
  <>
    <span className="text-[#c792ea]">  const</span>
    <span className="text-white"> projects </span>
    <span className="text-white/55">= </span>
    <span className="text-[#c792ea]">await</span>
    <span className="text-white"> apso</span>
    <span className="text-white/55">.</span>
    <span className="text-[#ffcb6b]">entity</span>
    <span className="text-white/55">(</span>
    <span className="text-[#c3e88d]">&apos;Projects&apos;</span>
    <span className="text-white/55">)</span>
  </>,
  <>
    <span className="text-white/55">    .</span>
    <span className="text-[#ffcb6b]">where</span>
    <span className="text-white/55">{"({ status: { $eq: "}</span>
    <span className="text-[#c3e88d]">&apos;Active&apos;</span>
    <span className="text-white/55">{" } })"}</span>
  </>,
  <>
    <span className="text-white/55">    .</span>
    <span className="text-[#ffcb6b]">orderBy</span>
    <span className="text-white/55">{"({ created_at: "}</span>
    <span className="text-[#c3e88d]">&apos;DESC&apos;</span>
    <span className="text-white/55">{" })"}</span>
  </>,
  <>
    <span className="text-white/55">    .</span>
    <span className="text-[#ffcb6b]">findMany</span>
    <span className="text-white/55">()</span>
  </>,
  null,
  <>
    <span className="text-[#c792ea]">  return</span>
    <span className="text-white"> &lt;</span>
    <span className="text-[#82aaff]">ProjectList</span>
    <span className="text-[#f78c6c]"> projects</span>
    <span className="text-white/55">={"{"}</span>
    <span className="text-white">projects</span>
    <span className="text-white/55">{"}"}</span>
    <span className="text-white"> /&gt;</span>
  </>,
  <span key="function-close" className="text-white/55">{"}"}</span>,
];

export function FullStack() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <p className="text-eyebrow mb-4 text-brand">Full-stack workflow</p>
            <h2 className="text-h2 text-fg-1">Use the frontend stack you know</h2>
            <p className="mt-5 text-fg-3 leading-7">
              Use Next.js Server Components and Server Actions as your BFF, or call the generated REST API
              from a web or mobile client. The TypeScript SDK handles queries and mutations without hiding
              the HTTP boundary.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-2">
              {frontends.map((frontend) => (
                <a
                  key={frontend.name}
                  href={frontend.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-sm border border-line-1 px-4 py-3 text-[14px] font-medium text-fg-2 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {frontend.name} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <Link
              href="/templates"
              className="mt-6 inline-flex items-center gap-2 font-display text-[15px] font-semibold text-brand"
            >
              Choose a backend model <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="overflow-hidden rounded-sm border border-line-1 bg-navy shadow-[0_20px_55px_rgba(15,23,42,0.14)]">
            <div className="flex h-11 items-center justify-between border-b border-white/10 px-5">
              <span className="font-mono text-[11px] text-white/50">app/projects/page.tsx</span>
              <span className="font-mono text-[10px] text-accent">SERVER</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 sm:p-7" aria-label="Next.js integration example">
              <code>
                {codeLines.map((line, index) => (
                  <span key={index} className="block min-h-6 whitespace-pre">
                    <span aria-hidden="true" className="mr-5 inline-block w-4 select-none text-right text-white/20">
                      {index + 1}
                    </span>
                    {line ?? " "}
                  </span>
                ))}
              </code>
            </pre>
            <div className="grid border-t border-white/10 sm:grid-cols-3">
              {[
                ["Next.js", "UI + BFF"],
                ["Apso SDK", "Typed queries"],
                ["Generated API", "Owned service"],
              ].map(([title, detail], index) => (
                <div
                  key={title}
                  className={`px-5 py-4 ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}
                >
                  <p className="font-display text-[14px] font-semibold text-white">{title}</p>
                  <p className="mt-1 text-[11px] text-white/45">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
