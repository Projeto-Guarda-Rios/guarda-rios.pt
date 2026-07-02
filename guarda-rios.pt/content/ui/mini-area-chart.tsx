interface MiniAreaChartProps {
  /** Series values; rendered left→right and auto-scaled to the frame. */
  data?: number[];
  /** Line + fill colour token. */
  color?: string;
  /** Unique gradient id — set this when several charts share a page. */
  gradientId?: string;
}

const W = 460;
const H = 172;
const PAD_TOP = 14;
const PAD_BOTTOM = 16;

/** Build a smooth (Catmull-Rom → cubic Bézier) path through the points. */
function smoothPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return "";
  let d = `M${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2.x} ${p2.y}`;
  }
  return d;
}

/**
 * Thin illustrative area chart from the A2 mockup. Scales its series to the
 * frame, draws hairline gridlines, a smooth line, soft area fill and an
 * end marker.
 */
export function MiniAreaChart({
  data = [11.9, 12.3, 13.1, 12.8, 13.6, 14.0, 14.4, 14.8],
  color = "var(--orange)",
  gradientId = "area",
}: MiniAreaChartProps) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;

  const points = data.map((value, i) => ({
    x: (i / (data.length - 1)) * W,
    y:
      PAD_TOP +
      (1 - (value - min) / span) * (H - PAD_TOP - PAD_BOTTOM),
  }));

  const line = smoothPath(points);
  const area = `${line} L${W} ${H} L0 ${H}Z`;
  const last = points[points.length - 1];

  return (
    <svg
      className="chart"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.16" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="34" x2={W} y2="34" stroke="var(--line-2)" strokeWidth="1" />
      <line x1="0" y1="80" x2={W} y2="80" stroke="var(--line-2)" strokeWidth="1" />
      <line x1="0" y1="126" x2={W} y2="126" stroke="var(--line-2)" strokeWidth="1" />
      <path d={area} fill={`url(#${gradientId})`} />
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle
        cx={last.x}
        cy={last.y}
        r="3.6"
        fill={color}
        stroke="var(--surface)"
        strokeWidth="2"
      />
    </svg>
  );
}

/** X-axis tick labels for use directly under <MiniAreaChart />. */
export function ChartAxis({ labels }: { labels: string[] }) {
  return (
    <div className="chart-x">
      {labels.map((l) => (
        <span key={l}>{l}</span>
      ))}
    </div>
  );
}
