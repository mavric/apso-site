import Link from "next/link";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-fg-4">
      <ol className="flex items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-fg-2 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-fg-2 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-fg-3">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
