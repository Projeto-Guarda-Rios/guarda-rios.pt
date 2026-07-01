interface GaugeProps {
  /** Current reading. */
  value: number;
  /** Full-scale value the arc represents. */
  max: number;
  /** Unit shown after the number (e.g. "ºC", "NTU"). */
  unit?: string;
  /** Sub-label under the reading (e.g. "Fresco · escala 0–40 ºC"). */
  sublabel?: string;
  /** Arc colour token. Defaults to the accent blue. */
  color?: string;
  /** How the number is displayed (keeps pt-PT decimal comma). */
  display?: string;
}

/**
 * Thin SVG arc gauge from the A2 mockup. The coloured arc length is driven
 * by value/max via `stroke-dasharray` against a `pathLength` of 100.
 */
export function Gauge({
  value,
  max,
  unit,
  sublabel,
  color = "var(--blue)",
  display,
}: GaugeProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const reading = display ?? String(value).replace(".", ",");

  return (
    <div className="gauge-wrap">
      <svg className="gauge" viewBox="0 0 210 120" aria-hidden>
        <path
          d="M18 112 A87 87 0 0 1 192 112"
          fill="none"
          stroke="var(--line)"
          strokeWidth="6"
          strokeLinecap="round"
          pathLength={100}
        />
        <path
          d="M18 112 A87 87 0 0 1 192 112"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${pct} 100`}
        />
      </svg>
      <div className="gauge-read tnum">
        {reading}
        {unit ? <span>{unit}</span> : null}
      </div>
      {sublabel ? <div className="gauge-sub">{sublabel}</div> : null}
    </div>
  );
}
