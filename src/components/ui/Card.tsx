import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  accent?: boolean;
}

export function Card({ accent = false, className = "", children, ...props }: CardProps) {
  return (
    <div
      className={[
        "border-2 border-ink p-6",
        accent ? "shadow-hard-accent" : "shadow-hard",
        "transition-all duration-100",
        "hover:translate-x-[-2px] hover:translate-y-[-2px]",
        accent
          ? "hover:shadow-[6px_6px_0px_#ff4500]"
          : "hover:shadow-hard-lg",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
