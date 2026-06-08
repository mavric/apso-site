interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "gray" | "navy" | "brand-soft";
  id?: string;
}

const bgStyles = {
  white: "bg-bg-0",
  gray: "bg-bg-1",
  navy: "bg-navy text-white",
  "brand-soft": "bg-brand-soft",
};

export function Section({ children, className = "", bg = "white", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-24 ${bgStyles[bg]} ${className}`}>
      {children}
    </section>
  );
}
