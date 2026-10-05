import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Generate backend code for free. Add team controls with a workspace plan, choose a tier for each service, or have Apso run DevOps in your own cloud on Business.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
