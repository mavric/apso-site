"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { APP_URL, NAV_GROUPS, NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";
import { NavItemIcon } from "./nav-item-icon";

type NavGroupLabel = (typeof NAV_GROUPS)[number]["label"];
type NavGroup = (typeof NAV_GROUPS)[number];
type NavItemData = NavGroup["items"][number];

function NavItem({ item, onNavigate }: { item: NavItemData; onNavigate: () => void }) {
  const external = "external" in item && item.external;
  const className =
    "group/item flex min-h-[86px] items-center gap-3 rounded-sm px-3 py-3 transition-colors hover:bg-bg-1 focus-visible:bg-bg-1 focus-visible:outline-none";
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line-1 bg-bg-1 text-fg-3 transition-colors group-hover/item:border-brand/20 group-hover/item:bg-brand-soft group-hover/item:text-brand">
        <NavItemIcon name={item.icon} className="h-[18px] w-[18px]" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-3 font-display text-[15px] font-semibold text-fg-1">
          {item.label}
          {external ? (
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-fg-5 transition-transform group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5"
            />
          ) : (
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-fg-5 transition-transform group-hover/item:translate-x-0.5"
            />
          )}
        </span>
        <span className="mt-1 block text-[12px] leading-[18px] text-fg-4">{item.description}</span>
      </span>
    </>
  );

  return external ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      role="menuitem"
      className={className}
      onClick={onNavigate}
    >
      {content}
    </a>
  ) : (
    <Link href={item.href} role="menuitem" className={className} onClick={onNavigate}>
      {content}
    </Link>
  );
}

function FeaturedMenuItem({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const featured = group.featured;
  const external = "external" in featured && featured.external;
  const content = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-white/10 text-accent">
        <NavItemIcon name={featured.icon} className="h-5 w-5" />
      </span>
      <span className="mt-8 block font-mono text-[10px] uppercase text-accent">{featured.eyebrow}</span>
      <span className="mt-3 block font-display text-[21px] font-bold leading-7 text-white">{featured.title}</span>
      <span className="mt-3 block text-[13px] leading-5 text-white/60">{featured.description}</span>
      <span className="mt-7 flex items-center gap-2 font-display text-[13px] font-semibold text-white">
        {featured.action}
        {external ? (
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        ) : (
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        )}
      </span>
    </>
  );
  const className =
    "group/featured flex h-full min-h-[280px] flex-col bg-navy p-6 transition-colors hover:bg-[#002354] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent";

  return external ? (
    <a
      href={featured.href}
      target="_blank"
      rel="noopener noreferrer"
      role="menuitem"
      className={className}
      onClick={onNavigate}
    >
      {content}
    </a>
  ) : (
    <Link href={featured.href} role="menuitem" className={className} onClick={onNavigate}>
      {content}
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<NavGroupLabel | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pinnedMenuRef = useRef<NavGroupLabel | null>(null);

  const cancelMenuClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const scheduleMenuClose = () => {
    cancelMenuClose();
    if (pinnedMenuRef.current) return;
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 140);
  };

  const dismissMenu = () => {
    cancelMenuClose();
    pinnedMenuRef.current = null;
    setActiveMenu(null);
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        pinnedMenuRef.current = null;
        setActiveMenu(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        pinnedMenuRef.current = null;
        setActiveMenu(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 border-b border-line-1 bg-bg-0/95 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            <Link href="/" className="flex shrink-0 items-center" aria-label="Apso home">
              <Image
                src="/images/logo.svg"
                alt="Apso"
                width={140}
                height={48}
                className="h-9 w-auto"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
              {NAV_GROUPS.map((group) => {
                const isOpen = activeMenu === group.label;
                return (
                  <div
                    key={group.label}
                    onMouseEnter={() => {
                      cancelMenuClose();
                      if (pinnedMenuRef.current !== group.label) pinnedMenuRef.current = null;
                      setActiveMenu(group.label);
                    }}
                    onMouseLeave={scheduleMenuClose}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) dismissMenu();
                    }}
                  >
                    <button
                      type="button"
                      className={`flex h-10 items-center gap-1.5 rounded-sm px-3 text-[14px] font-medium transition-colors hover:bg-bg-1 hover:text-fg-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                        isOpen ? "bg-bg-1 text-fg-1" : "text-fg-3"
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                      aria-controls={`nav-menu-${group.label.toLowerCase()}`}
                      onClick={() => {
                        cancelMenuClose();
                        if (isOpen && pinnedMenuRef.current === group.label) {
                          dismissMenu();
                          return;
                        }

                        pinnedMenuRef.current = group.label;
                        setActiveMenu(group.label);
                      }}
                    >
                      {group.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        strokeWidth={1.8}
                      />
                    </button>

                    {isOpen && (
                      <div className="fixed left-1/2 top-16 w-[min(880px,calc(100vw-32px))] -translate-x-1/2 pt-2">
                        <div
                          id={`nav-menu-${group.label.toLowerCase()}`}
                          role="menu"
                          aria-label={`${group.label} menu`}
                          className="grid overflow-hidden rounded-sm border border-line-1 bg-bg-0 shadow-[0_24px_70px_rgba(15,23,42,0.18)] lg:grid-cols-[1fr_270px]"
                        >
                          <div className="flex flex-col p-3">
                            <div className="flex items-end justify-between gap-5 border-b border-line-1 px-3 pb-3 pt-1">
                              <div>
                                <p className="font-mono text-[10px] uppercase text-brand">Explore {group.label}</p>
                                <p className="mt-1 text-[12px] text-fg-4">{group.description}</p>
                              </div>
                              <span className="shrink-0 font-mono text-[10px] text-fg-5">
                                0{group.items.length}
                              </span>
                            </div>
                            <div className="mt-1 grid flex-1 auto-rows-fr grid-cols-2 gap-0.5">
                              {group.items.map((item) => (
                                <NavItem
                                  key={item.label}
                                  item={item}
                                  onNavigate={dismissMenu}
                                />
                              ))}
                            </div>
                          </div>
                          <FeaturedMenuItem group={group} onNavigate={dismissMenu} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {NAV_LINKS.map((link) =>
                "external" in link && link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 items-center rounded-sm px-3 text-[14px] font-medium text-fg-3 transition-colors hover:bg-bg-1 hover:text-fg-1"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex h-10 items-center rounded-sm px-3 text-[14px] font-medium text-fg-3 transition-colors hover:bg-bg-1 hover:text-fg-1"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-[14px] font-medium text-fg-3 transition-colors hover:text-fg-1"
              >
                Sign in
              </a>
              <Button href={APP_URL} external size="default">
                Start building
              </Button>
            </div>

            <button
              type="button"
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-sm text-fg-3 hover:bg-bg-1 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu aria-hidden="true" className="h-[22px] w-[22px]" />
            </button>
          </div>
        </Container>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
