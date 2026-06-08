import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { BrandIntro } from "@/components/sections/brand-intro";
import { Comparison } from "@/components/sections/comparison";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SocialProof } from "@/components/sections/social-proof";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, softwareApplicationSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), softwareApplicationSchema()]} />
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <Comparison />
        <FeatureGrid />
        <HowItWorks />
        <SocialProof />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
