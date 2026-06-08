import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-24">
        <Container className="text-center">
          <p className="text-eyebrow text-brand mb-4">404</p>
          <h1 className="text-h1 text-fg-1 mb-4">Page not found</h1>
          <p className="text-lead text-fg-3 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button href="/">Back to Home</Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
