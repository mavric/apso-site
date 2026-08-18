import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Generate backend code for free, then choose managed hosting, team controls, or deployment into your own cloud.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
