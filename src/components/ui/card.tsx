interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "default" | "lg";
}

const paddingStyles = {
  default: "p-6",
  lg: "p-8",
};

export function Card({ children, className = "", padding = "default" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-line-1 bg-bg-0 ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
