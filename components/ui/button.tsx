"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary via-cyan to-purple text-white shadow-glow hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(6,182,212,0.28)]",
  secondary:
    "border border-white/10 bg-white/5 text-white backdrop-blur hover:border-cyan/60 hover:bg-white/10",
  ghost: "text-slate-200 hover:bg-white/5 hover:text-white",
};

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonLinkProps = SharedProps & {
  href: string;
};

type ButtonActionProps = SharedProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
};

export function Button(props: ButtonLinkProps | ButtonActionProps) {
  const classes = cn(baseStyles, variantStyles[props.variant ?? "primary"], props.className);
  const content = (
    <>
      <span>{props.children}</span>
      <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </>
  );

  if ("href" in props && props.href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link className={cn(classes, "group")} href={props.href}>
          {content}
        </Link>
      </motion.div>
    );
  }

  const buttonProps = props as ButtonActionProps;
  const buttonType = buttonProps.type ?? "button";

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(classes, "group")}
      type={buttonType}
    >
      {content}
    </motion.button>
  );
}
