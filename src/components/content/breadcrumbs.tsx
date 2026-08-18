import Link from "next/link";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  dark?: boolean;
}

export function Breadcrumbs({ items, dark = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-[12px] ${dark ? "text-white/42" : "text-fg-4"}`}>
      <ol className="flex items-center gap-1.5">
        <li>
          <Link href="/" className={`transition-colors ${dark ? "hover:text-white" : "hover:text-fg-2"}`}>
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className={`transition-colors ${dark ? "hover:text-white" : "hover:text-fg-2"}`}>
                {item.label}
              </Link>
            ) : (
              <span className={dark ? "text-white/68" : "text-fg-3"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
