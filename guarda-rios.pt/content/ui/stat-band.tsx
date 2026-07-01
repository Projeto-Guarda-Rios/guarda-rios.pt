import type { ReactNode } from "react";

export interface Stat {
  /** Big Fraunces number; may include <em> for the accent glyph. */
  value: ReactNode;
  /** Caption; use <strong> for the lead phrase. */
  caption: ReactNode;
}

/**
 * The deep-ink statistics band (A2 `.stats`). Renders three or more stats
 * separated by hairline rules.
 */
export function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="stats">
      <div className="wrap">
        {stats.map((stat, i) => (
          <div className="stat" key={i}>
            <div className="num tnum">{stat.value}</div>
            <div className="cap">{stat.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
