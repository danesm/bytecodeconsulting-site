"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";
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
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonLinkProps | ButtonActionProps) {
  const classes = cn(baseStyles, variantStyles[props.variant ?? "primary"], props.className);
  const content = (
    <>
      <span>{props.children}</span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
          <path
            d="M4 10h11M10.5 4.5 16 10l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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

  const { variant: _variant, className: _className, children: _children, href: _href, ...buttonProps } =
    props as ButtonActionProps;
  const buttonType = buttonProps.type ?? "button";

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <button className={cn(classes, "group")} type={buttonType} {...buttonProps}>
        {content}
      </button>
    </motion.div>
  );
}
