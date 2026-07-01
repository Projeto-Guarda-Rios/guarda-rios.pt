import Image from "next/image";
import type { CSSProperties } from "react";

interface PhotoFrameProps {
  /** When set, a real photo is rendered with next/image (object-fit: cover). */
  src?: string;
  alt: string;
  /** Italic caption pill shown bottom-left (A2 `.ph-cap`). */
  caption?: string;
  /** CSS aspect-ratio, e.g. "4/5", "16/10". Defaults to 4/5. */
  ratio?: string;
  /** Adds the blue→ink duotone wash (A2 `.photo--duo`). */
  duotone?: boolean;
  /** Fit the image with `contain` + padding (useful for logos on a plate). */
  contain?: boolean;
  /** next/image `sizes` hint for responsive loading. */
  sizes?: string;
  className?: string;
}

/**
 * Framed photo slot from the A2 mockup. With a `src` it renders the photo;
 * without one it shows the elegant labelled placeholder so unfinished pages
 * still look intentional.
 */
export function PhotoFrame({
  src,
  alt,
  caption,
  ratio = "4/5",
  duotone = false,
  contain = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  className,
}: PhotoFrameProps) {
  const classes = [
    "photo",
    duotone ? "photo--duo" : "",
    contain ? "photo--contain" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties = { aspectRatio: ratio };

  return (
    <figure className={classes} style={style} role="img" aria-label={alt}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} />
      ) : (
        <span className="ph-center" aria-hidden>
          <svg viewBox="0 0 48 48">
            <path d="M3 34 L16 20 L25 29 L33 20 L45 34" />
            <circle cx="34" cy="13" r="3.5" />
            <rect x="2" y="6" width="44" height="36" rx="2" />
          </svg>
          <span>Fotografia</span>
        </span>
      )}
      {caption ? <figcaption className="ph-cap">{caption}</figcaption> : null}
    </figure>
  );
}
