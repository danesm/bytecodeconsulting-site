import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-3xl p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-cyan/40",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children }: CardProps) {
  return <h3 className={cn("text-xl font-semibold text-white", className)}>{children}</h3>;
}

export function CardCopy({ className, children }: CardProps) {
  return <p className={cn("mt-3 text-sm leading-6 text-slate-300", className)}>{children}</p>;
}
