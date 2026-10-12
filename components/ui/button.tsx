import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-strong focus-visible:ring-accent/40 disabled:bg-slate-300",
  secondary:
    "border border-border-subtle bg-surface text-text-primary hover:bg-slate-100 focus-visible:ring-accent/30 disabled:text-slate-400",
  ghost:
    "text-text-secondary hover:bg-slate-100 hover:text-text-primary focus-visible:ring-accent/30",
};

export function Button({
  asChild = false,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      type={asChild ? undefined : type}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-page disabled:cursor-not-allowed",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
