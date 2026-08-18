import type { Metadata } from "next";
import { Building2, LifeBuoy, MessageSquareText } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { HeroLedger } from "@/components/marketing/hero-ledger";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Apso team about product fit, deployment, enterprise requirements, support, or partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Bring us the backend question"
        description="Tell us what you are building, how your team works, and where you need the backend to run. We will route the conversation to the right person."
        actions={
          <>
            <a href="#contact-form" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-6 font-display text-[14px] font-semibold text-white hover:bg-brand-hover">Send a message</a>
            <a href="/faq" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/20 px-6 font-display text-[14px] font-semibold text-white hover:border-white/45">Browse common answers</a>
          </>
        }
        meta={["Product and technical questions", "Enterprise and Your Cloud", "Partnerships"]}
        visual={
          <HeroLedger
            label="Conversation routing"
            rows={[
              { label: "Product fit", value: "Share the product, team, and backend boundary you have in mind.", icon: MessageSquareText },
              { label: "Deployment", value: "Discuss managed infrastructure, Your Cloud, and governance needs.", icon: Building2 },
              { label: "Support", value: "Include the workspace, language, and exact error when applicable.", icon: LifeBuoy },
            ]}
            footer="never include credentials or API keys"
          />
        }
      />
      <ContactForm />
    </>
  );
}
