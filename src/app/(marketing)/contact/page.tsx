"use client";

import Image from "next/image";
import { useActionState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitContact, type ContactState } from "./action";

const initialState: ContactState = { success: false };

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Form column */}
          <div>
            <p className="text-eyebrow text-brand mb-4">Contact</p>
            <h1 className="text-h1 text-fg-1 mb-4">Get in touch</h1>
            <p className="text-lead text-fg-3 mb-10">
              Questions about Apso, enterprise plans, or partnerships? Send us a message and
              we will get back to you.
            </p>

            {state.success ? (
              <div className="rounded-lg border border-accent/30 bg-green-soft p-6 text-center">
                <p className="text-fg-1 font-medium mb-1">Message sent</p>
                <p className="text-sm text-fg-3">
                  We will get back to you soon. Thank you for reaching out.
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-5">
                {state.error && (
                  <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                    {state.error}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Your name"
                    required
                    error={state.fieldErrors?.name}
                  />
                  <Input
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    error={state.fieldErrors?.email}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    id="company"
                    name="company"
                    label="Company"
                    placeholder="Company name (optional)"
                    error={state.fieldErrors?.company}
                  />
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    label="Job Title"
                    placeholder="Your role (optional)"
                    error={state.fieldErrors?.jobTitle}
                  />
                </div>
                <Textarea
                  id="message"
                  name="message"
                  label="Message"
                  placeholder="How can we help?"
                  required
                  error={state.fieldErrors?.message}
                />
                <Button type="submit" disabled={pending} className="w-full sm:w-auto">
                  {pending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="hidden md:block">
            <div className="rounded-lg bg-bg-1 border border-line-1 p-8">
              <Image
                src="/images/dog-puppy.svg"
                alt=""
                width={120}
                height={120}
                className="h-24 w-auto mb-6 mx-auto"
                aria-hidden="true"
              />
              <h3 className="font-display font-700 text-[18px] text-fg-1 mb-4">
                Quick answers
              </h3>
              <ul className="space-y-4 text-sm text-fg-3">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CLI generation is free forever on all plans
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You own every line of generated code
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  TypeScript, Python, or Golang backend output
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Enterprise plans with SSO and audit logs
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-line-1">
                <p className="text-sm text-fg-4">
                  For general questions, check the{" "}
                  <a href="/faq" className="text-brand hover:text-brand-hover">FAQ</a> first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
