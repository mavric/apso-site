"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className={`divide-y divide-line-1 ${className}`}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            id={`${baseId}-trigger-${i}`}
            aria-controls={`${baseId}-panel-${i}`}
            className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="pr-4 font-display text-[18px] font-semibold leading-6 text-fg-1">{item.question}</span>
            <ChevronDown
              aria-hidden="true"
              className={`h-5 w-5 shrink-0 text-fg-4 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            id={`${baseId}-panel-${i}`}
            role="region"
            aria-labelledby={`${baseId}-trigger-${i}`}
            aria-hidden={openIndex !== i}
            className={`grid transition-[grid-template-rows] duration-200 ${
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="max-w-[720px] pb-5 pr-10 text-[14px] leading-6 text-fg-3">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
