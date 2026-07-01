import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

type ButtonVariant = "primary" | "ghost" | "orange";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** Show the animated arrow glyph (A2 `.arrow`). */
  arrow?: boolean;
  /** A leading icon (e.g. download). */
  icon?: ReactNode;
  className?: string;
}

/**
 * The A2 button. Internal routes (starting with "/") render a next/link;
 * everything else (http, mailto) renders a plain anchor with the correct rel.
 */
export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  icon,
  className,
}: ButtonProps) {
  const classes = ["btn", `btn-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon}
      {children}
      {arrow ? <ArrowRight className="arrow" /> : null}
    </>
  );

  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const isAnchor = href.startsWith("#");
  return (
    <a
      href={href}
      className={classes}
      {...(isAnchor
        ? {}
        : { target: "_blank", rel: "noreferrer noopener" })}
    >
      {content}
    </a>
  );
}
