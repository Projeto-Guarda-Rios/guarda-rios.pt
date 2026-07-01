import type { ReactNode } from "react";

interface CardProps {
  /** Uppercase label shown top-left of the card header. */
  title?: ReactNode;
  /** Optional element shown top-right (e.g. a live tag). */
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Surface card with an optional hairline header (A2 `.card`). */
export function Card({ title, action, children, className }: CardProps) {
  const classes = ["card", className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      {title || action ? (
        <div className="card-h">
          {title ? <span className="t">{title}</span> : <span />}
          {action}
        </div>
      ) : null}
      {children}
    </div>
  );
}

/** Small "live" pill with the pulsing dot (A2 `.tag-live`). */
export function LiveTag({ children = "Ao vivo" }: { children?: ReactNode }) {
  return (
    <span className="tag-live">
      <span className="dot" />
      {children}
    </span>
  );
}
