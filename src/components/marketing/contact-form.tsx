"use client";

import { useActionState } from "react";
import { ArrowUpRight, Building2, Check, FileQuestion, LifeBuoy, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitContact, type ContactState } from "@/app/(marketing)/contact/action";

const initialState: ContactState = { success: false };

const routes = [
  { icon: Building2, title: "Product and enterprise", body: "Architecture fit, team rollout, pricing, governance, and Your Cloud." },
  { icon: LifeBuoy, title: "Technical support", body: "Generation, deployment, language templates, services, and account issues." },
  { icon: Mail, title: "Partnerships", body: "Technology integrations, delivery partnerships, and shared customer work." },
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <Section id="contact-form">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,760px)_340px] lg:justify-center lg:gap-16">
          <div>
            <div className="mb-8 border-b border-line-1 pb-6">
              <p className="font-mono text-[10px] uppercase text-brand">Message the team</p>
              <h2 className="mt-3 font-display text-[30px] font-bold text-fg-1">Tell us enough to start usefully</h2>
              <p className="mt-3 max-w-[640px] text-[14px] leading-6 text-fg-4">A product summary, current stack, and deployment preference help us route the conversation.</p>
            </div>

            {state.success ? (
              <div className="rounded-sm border border-accent/35 bg-green-soft p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent text-navy">
                  <Check aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-[22px] font-bold text-fg-1">Message received</h3>
                <p className="mt-2 text-[14px] leading-6 text-fg-3">The team will review the details and reply by email.</p>
              </div>
            ) : (
              <form action={formAction} className="space-y-5">
                {state.error && (
                  <div className="rounded-sm border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
                    {state.error}
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input id="name" name="name" label="Name" placeholder="Your name" required error={state.fieldErrors?.name} />
                  <Input id="email" name="email" label="Work email" type="email" placeholder="you@company.com" required error={state.fieldErrors?.email} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input id="company" name="company" label="Company" placeholder="Company name" error={state.fieldErrors?.company} />
                  <Input id="jobTitle" name="jobTitle" label="Role" placeholder="Your role" error={state.fieldErrors?.jobTitle} />
                </div>
                <Textarea id="message" name="message" label="What are you building?" placeholder="Describe the product, team, current stack, or question." required error={state.fieldErrors?.message} />
                <div className="flex flex-col gap-4 border-t border-line-1 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[460px] text-[12px] leading-5 text-fg-5">Do not include API keys, credentials, personal customer data, or other secrets.</p>
                  <Button type="submit" disabled={pending} className="min-w-[150px]">
                    {pending ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <aside>
            <p className="font-mono text-[10px] uppercase text-brand">Where it goes</p>
            <div className="mt-4 border-t border-line-1">
              {routes.map(({ icon: Icon, title, body }) => (
                <div key={title} className="border-b border-line-1 py-5">
                  <Icon aria-hidden="true" className="h-5 w-5 text-brand" />
                  <h3 className="mt-3 font-display text-[15px] font-semibold text-fg-1">{title}</h3>
                  <p className="mt-1 text-[12px] leading-5 text-fg-5">{body}</p>
                </div>
              ))}
            </div>
            <a href="https://docs.apso.dev" target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-between rounded-sm border border-line-1 bg-bg-1 p-4 text-[13px] font-semibold text-fg-1 hover:border-brand">
              <span className="flex items-center gap-2"><FileQuestion aria-hidden="true" className="h-4 w-4 text-brand" /> Open documentation</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-fg-5" />
            </a>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
