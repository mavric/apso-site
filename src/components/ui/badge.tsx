interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "green" | "amber" | "gray";
  className?: string;
}

const variantStyles = {
  brand: "bg-brand-soft text-brand",
  green: "bg-green-soft text-green-deep",
  amber: "bg-amber/15 text-amber",
  gray: "bg-bg-2 text-fg-3",
};

export function Badge({ children, variant = "brand", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-[13px] font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
