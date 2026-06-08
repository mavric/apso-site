import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Apso pricing plans. CLI generation is free forever. Pay only when you deploy. Full code ownership on every plan.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
