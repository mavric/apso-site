import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

function PauseIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <rect width="46" height="46" rx="23" fill="#DFE3E8" />
      <path
        d="M35.5 23C35.5 29.9 29.9 35.5 23 35.5C16.1 35.5 10.5 29.9 10.5 23C10.5 21.5125 10.775 20.1 11.25 18.775L13.6 19.625C13.2125 20.675 13 21.8125 13 23C13 28.5125 17.4875 33 23 33C28.5125 33 33 28.5125 33 23C33 17.4875 28.5125 13 23 13C21.8125 13 20.6875 13.2125 19.6375 13.6L18.7875 11.2375C20.1125 10.775 21.525 10.5 23 10.5C29.9 10.5 35.5 16.1 35.5 23ZM14.875 13C13.8375 13 13 13.8375 13 14.875C13 15.9125 13.8375 16.75 14.875 16.75C15.9125 16.75 16.75 15.9125 16.75 14.875C16.75 13.8375 15.9125 13 14.875 13ZM21.75 28V18H19.25V28H21.75ZM26.75 28V18H24.25V28H26.75Z"
        fill="#919EAB"
      />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <rect width="46" height="46" rx="23" fill="#ACFFD8" />
      <path
        d="M26.3625 10.7625L13.4125 22.3625C12.6125 23.0875 13.0625 24.425 14.1375 24.525L24.25 25.5L18.1875 33.95C17.9125 34.3375 17.95 34.875 18.2875 35.2125C18.6625 35.5875 19.25 35.6 19.6375 35.2375L32.5875 23.6375C33.3875 22.9125 32.9375 21.575 31.8625 21.475L21.75 20.5L27.8125 12.05C28.0875 11.6625 28.05 11.125 27.7125 10.7875C27.3375 10.4125 26.75 10.4 26.3625 10.7625Z"
        fill="#009750"
      />
    </svg>
  );
}

const approaches = [
  {
    label: "Agent-Authored",
    description: "The model writes your backend directly",
    icon: <PauseIcon />,
    points: [
      "Output varies with the model, the prompt, and the day",
      "Two services built a week apart follow different patterns",
      "Guardrails depend on prompt engineering, not code",
      "Model upgrades silently change your backend's behavior",
    ],
    highlight: false,
  },
  {
    label: "Agent-Driven",
    description: "The Apso approach",
    icon: <LightningIcon />,
    points: [
      "Deterministic output from a schema, every time",
      "Every service follows identical, auditable patterns",
      "Guardrails are baked into the generator, not the prompt",
      "Model upgrades do not change your backend's behavior",
    ],
    highlight: true,
  },
];

export function Comparison() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <p className="text-eyebrow text-brand mb-4">Two Approaches</p>
          <h2 className="text-h2 text-fg-1 mb-3">
            One lets the model write your code. The other gives it guardrails.
          </h2>
          <p className="text-fg-3 max-w-[640px] mx-auto">
            Agent-authored code is only as consistent as the model, on that day,
            with that prompt. Agent-driven code is deterministic by construction.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-[840px] mx-auto">
          {approaches.map((approach) => (
            <Card
              key={approach.label}
              padding="lg"
              className={approach.highlight ? "border-brand border-2" : ""}
            >
              <div className="mb-4">{approach.icon}</div>
              {approach.highlight && (
                <span className="inline-block mb-3 rounded-pill bg-brand px-3 py-1 text-[12px] font-medium text-white">
                  Recommended
                </span>
              )}
              <h3 className="text-h3 text-fg-1 mb-1">{approach.label}</h3>
              <p className="text-sm text-fg-4 mb-5">{approach.description}</p>
              <ul className="space-y-3">
                {approach.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] text-fg-3">
                    <svg
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        approach.highlight ? "text-accent" : "text-fg-5"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      {approach.highlight ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" d="M5 12h14" />
                      )}
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
