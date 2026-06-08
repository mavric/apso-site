"use client";

import Link from "next/link";
import { useEffect } from "react";
import { NAV_LINKS, APP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-[280px] bg-bg-0 border-l border-line-1 p-6 flex flex-col">
        {/* Close */}
        <button
          type="button"
          className="self-end p-2 -mr-2 -mt-2 text-fg-3 cursor-pointer"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-1 mt-6">
          {NAV_LINKS.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-[16px] text-fg-2 hover:text-brand transition-colors"
                onClick={onClose}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="py-3 text-[16px] text-fg-2 hover:text-brand transition-colors"
                onClick={onClose}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="mt-auto">
          <Button href={APP_URL} external className="w-full">
            Start Building Free
          </Button>
        </div>
      </div>
    </div>
  );
}
