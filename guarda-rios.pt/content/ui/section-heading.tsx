import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: ReactNode;
  /** The heading itself — may include <em> for the italic accent word. */
  title: ReactNode;
  /** Optional intro paragraph. */
  lead?: ReactNode;
  className?: string;
}

/**
 * The Fraunces display heading block used to open every section
 * (A2 `.sec-head`). Wrap in a `.panel-section` for the dark variant.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: SectionHeadingProps) {
  return (
    <div className={["sec-head", className].filter(Boolean).join(" ")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
