"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

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

  if ("href" in props && props.href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link className={classes} href={props.href}>
          {props.children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      type={props.type ?? "button"}
    >
      {props.children}
    </motion.button>
  );
}
