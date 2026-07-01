import type { ReactNode } from "react";

/** Small uppercase label with the orange hairline tick (A2 `.eyebrow`). */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}
