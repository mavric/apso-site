"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Database, Factory, LayoutGrid, Search, ShieldCheck } from "lucide-react";
import { APP_URL } from "@/lib/constants";
import {
  STARTER_BACKENDS,
  STARTER_CATEGORIES,
  type StarterCategory,
} from "@/lib/starter-backends";

type Filter = "all" | StarterCategory;

const filters: Filter[] = ["all", "essential", "popular", "industry"];
const filterLabels: Record<Filter, string> = {
  all: "All starters",
  ...STARTER_CATEGORIES,
};

const categoryIcons = {
  essential: ShieldCheck,
  popular: LayoutGrid,
  industry: Factory,
};

export function TemplateLibrary() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = normalizeSearch(query);
    return STARTER_BACKENDS.filter((starter) => {
      if (filter !== "all" && starter.category !== filter) return false;
      if (!normalized) return true;
      return normalizeSearch([starter.title, starter.description, ...starter.entities].join(" ")).includes(normalized);
    });
  }, [filter, query]);

  return (
    <>
      <div className="flex flex-col gap-4 border-b border-line-1 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-full gap-1 overflow-x-auto rounded-sm bg-bg-2 p-1" aria-label="Starter categories">
          {filters.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
              className={`shrink-0 rounded-sm px-3 py-2 text-[13px] font-medium transition-colors ${
                filter === value ? "bg-bg-0 text-fg-1 shadow-sm" : "text-fg-4 hover:text-fg-2"
              }`}
            >
              {filterLabels[value]}
            </button>
          ))}
        </div>
        <label className="relative block w-full md:w-[320px]">
          <span className="sr-only">Search starter backends</span>
          <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-fg-5" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by product or entity"
            className="h-11 w-full rounded-sm border border-line-1 bg-bg-0 pl-10 pr-4 text-[14px] text-fg-2 outline-none transition-colors placeholder:text-fg-5 focus:border-brand focus:ring-2 focus:ring-brand/10"
          />
        </label>
      </div>

      <div className="mb-6 mt-7 flex items-center justify-between gap-4">
        <p className="text-sm text-fg-4">
          Showing {filtered.length} of {STARTER_BACKENDS.length}
        </p>
        {(query || filter !== "all") && (
          <button
            type="button"
            className="text-sm font-medium text-brand hover:text-brand-hover"
            onClick={() => {
              setFilter("all");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((starter) => (
            <StarterCard key={starter.id} starter={starter} />
          ))}
        </div>
      ) : (
        <div className="rounded-sm border border-line-1 bg-bg-1 px-6 py-16 text-center">
          <h2 className="font-display text-[22px] font-bold text-fg-1">No starter matches that search</h2>
          <p className="mt-2 text-sm text-fg-4">Try a product name such as CRM, billing, events, or inventory.</p>
        </div>
      )}
    </>
  );
}

function normalizeSearch(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, " ");
}

function StarterCard({ starter }: { starter: (typeof STARTER_BACKENDS)[number] }) {
  const Icon = categoryIcons[starter.category];

  return (
    <article
      id={starter.id}
      className="group flex min-h-[300px] scroll-mt-24 flex-col rounded-sm border border-line-1 bg-bg-0 p-6 transition-colors hover:border-brand/35"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-line-1 bg-bg-1 text-brand">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] uppercase text-fg-5">{STARTER_CATEGORIES[starter.category]}</span>
      </div>
      <h2 className="mt-5 font-display text-[22px] font-bold text-fg-1">{starter.title}</h2>
      <p className="mt-2 text-[14px] leading-6 text-fg-3">{starter.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {starter.entities.map((entity) => (
          <span key={entity} className="rounded-sm bg-bg-2 px-2 py-1 font-mono text-[10px] text-fg-4">
            {entity}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-end justify-between gap-4 border-t border-line-1 pt-5">
        <span className="flex items-center gap-2 text-[12px] text-fg-5">
          <Database aria-hidden="true" className="h-3.5 w-3.5" />
          {starter.entities.length} core entities
        </span>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Build from the ${starter.title} starter`}
          className="flex h-9 w-9 items-center justify-center rounded-sm bg-fg-1 text-white transition-colors group-hover:bg-brand"
        >
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
