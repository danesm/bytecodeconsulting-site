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
  return <h3 className={cn("text-[1.375rem] font-bold leading-8 text-white sm:text-xl sm:leading-7", className)}>{children}</h3>;
}

export function CardCopy({ className, children }: CardProps) {
  return <p className={cn("mt-3 text-base leading-7 text-slate-300 sm:text-sm sm:leading-6", className)}>{children}</p>;
}
