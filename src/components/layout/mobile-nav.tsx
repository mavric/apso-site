"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL, NAV_GROUPS, NAV_LINKS } from "@/lib/constants";
import { NavItemIcon } from "./nav-item-icon";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [openGroup, setOpenGroup] = useState<string>(NAV_GROUPS[0].label);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-fg-1/30"
        onClick={onClose}
        aria-label="Close menu"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="absolute right-0 top-0 flex h-full w-full max-w-[390px] flex-col border-l border-line-1 bg-bg-0 shadow-2xl"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-line-1 px-5">
          <Image src="/images/logo.svg" alt="Apso" width={120} height={40} className="h-8 w-auto" />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-sm text-fg-3 hover:bg-bg-1"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X aria-hidden="true" className="h-[22px] w-[22px]" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-5" aria-label="Mobile navigation">
          <div className="divide-y divide-line-1 border-y border-line-1">
            {NAV_GROUPS.map((group) => {
              const isOpen = openGroup === group.label;
              return (
                <div key={group.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left font-display text-[17px] font-semibold text-fg-1"
                    onClick={() => setOpenGroup(isOpen ? "" : group.label)}
                    aria-expanded={isOpen}
                  >
                    <span>
                      {group.label}
                      <span className="mt-1 block font-body text-[12px] font-normal text-fg-4">
                        {group.description}
                      </span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 text-fg-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="space-y-1 pb-5">
                      {group.items.map((item) => {
                        const external = "external" in item && item.external;
                        const content = (
                          <>
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line-1 bg-bg-1 text-fg-3">
                              <NavItemIcon name={item.icon} className="h-[18px] w-[18px]" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex items-center justify-between gap-3 text-[15px] font-medium text-fg-2">
                                {item.label}
                                {external ? (
                                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-fg-5" />
                                ) : (
                                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-fg-5" />
                                )}
                              </span>
                              <span className="mt-0.5 block text-[12px] leading-[18px] text-fg-4">
                                {item.description}
                              </span>
                            </span>
                          </>
                        );
                        const className = "flex gap-3 rounded-sm px-3 py-3 hover:bg-bg-1";

                        return external ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                            onClick={onClose}
                          >
                            {content}
                          </a>
                        ) : (
                          <Link key={item.label} href={item.href} className={className} onClick={onClose}>
                            {content}
                          </Link>
                        );
                      })}

                      {(() => {
                        const featured = group.featured;
                        const external = "external" in featured && featured.external;
                        const content = (
                          <>
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/10 text-accent">
                              <NavItemIcon name={featured.icon} className="h-[18px] w-[18px]" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block font-mono text-[9px] uppercase text-accent">
                                {featured.eyebrow}
                              </span>
                              <span className="mt-1 block font-display text-[15px] font-semibold text-white">
                                {featured.title}
                              </span>
                              <span className="mt-1 flex items-center gap-1.5 text-[12px] font-medium text-white/70">
                                {featured.action}
                                {external ? (
                                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                                ) : (
                                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                                )}
                              </span>
                            </span>
                          </>
                        );
                        const className = "mt-3 flex gap-3 rounded-sm bg-navy p-4";

                        return external ? (
                          <a
                            href={featured.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                            onClick={onClose}
                          >
                            {content}
                          </a>
                        ) : (
                          <Link href={featured.href} className={className} onClick={onClose}>
                            {content}
                          </Link>
                        );
                      })()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-2 pt-5">
            {NAV_LINKS.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-line-1 px-2 py-2.5 text-center text-sm font-medium text-fg-2"
                  onClick={onClose}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-sm border border-line-1 px-2 py-2.5 text-center text-sm font-medium text-fg-2"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </nav>

        <div className="shrink-0 border-t border-line-1 bg-bg-1 p-5">
          <Button href={APP_URL} external className="w-full">
            Start building
          </Button>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-sm font-medium text-fg-3"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
