import { type HTMLAttributes } from "react";

type BadgeVariant = "default" | "accent" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-ink text-bg border-2 border-ink",
  accent: "bg-accent text-white border-2 border-ink",
  outline: "bg-transparent text-ink border-2 border-ink",
};

export function Badge({ variant = "default", className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={[
        "inline-block px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-widest",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
