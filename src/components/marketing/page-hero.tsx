import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  visual: ReactNode;
  top?: ReactNode;
  actions?: ReactNode;
  meta?: string[];
}

export function PageHero({ eyebrow, title, description, visual, top, actions, meta }: PageHeroProps) {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-navy text-white">
      <Container>
        <div className="grid lg:min-h-[410px] lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="flex flex-col justify-center py-14 lg:py-18 lg:pr-16">
            {top && <div className="mb-7">{top}</div>}
            <p className="font-mono text-[11px] uppercase text-accent">{eyebrow}</p>
            <h1 className="mt-5 max-w-[760px] font-display text-[40px] font-extrabold leading-[1.08] text-white md:text-[48px]">
              {title}
            </h1>
            <p className="mt-5 max-w-[700px] text-[17px] leading-7 text-white/68">{description}</p>
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
            {meta && meta.length > 0 && (
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5">
                {meta.map((item) => (
                  <span key={item} className="flex items-center gap-2 text-[12px] text-white/48">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="border-t border-white/10 py-8 lg:border-l lg:border-t-0 lg:py-0 lg:pl-10">
            <div className="h-full">{visual}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
