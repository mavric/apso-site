interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
