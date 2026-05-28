import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  icon?: IconName;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-service-blue text-white shadow-soft hover:bg-service-blueHover hover:-translate-y-0.5",
  secondary:
    "border border-service-blue bg-white text-service-blue hover:bg-service-alt hover:-translate-y-0.5",
  ghost: "text-service-blue hover:bg-service-alt"
};

export function ButtonLink({
  className,
  children,
  variant = "primary",
  icon,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold transition duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {icon ? <Icon name={icon} className="h-5 w-5 shrink-0" /> : null}
      <span>{children}</span>
    </a>
  );
}
