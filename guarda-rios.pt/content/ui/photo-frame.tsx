import Image from "next/image";
import type { CSSProperties } from "react";
import { PhotoZoomTrigger, type LightboxImage } from "./lightbox";

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
  /**
   * Where the crop is anchored inside the frame — a CSS `object-position`
   * value. Because photos are cover-cropped, this shifts which part stays
   * visible: `"center top"` keeps the top, `"center bottom"` the bottom,
   * `"left"`/`"right"` the sides, or fine-tune with percentages like
   * `"50% 20%"` (0% = top/left, 100% = bottom/right). Defaults to centered.
   */
  focal?: string;
  /**
   * Extra zoom into the photo, as a percentage. `100` (default) means no zoom;
   * `130` zooms in to 130%, cropping tighter. The zoom pivots around the
   * `focal` point, so pair the two to frame a subject (e.g. `focal="center top"`
   * + `zoom={140}`). Values below 100 are ignored (they'd expose the frame).
   */
  zoom?: number;
  /** next/image `sizes` hint for responsive loading. */
  sizes?: string;
  /**
   * The gallery this photo belongs to. When provided (alongside `src`), the
   * frame becomes clickable and opens the site-wide lightbox at `galleryIndex`,
   * letting the user browse the whole set at full aspect ratio.
   */
  gallery?: LightboxImage[];
  /** This photo's position within `gallery`. */
  galleryIndex?: number;
  className?: string;
}

/**
 * Framed photo slot from the A2 mockup. With a `src` it renders the photo;
 * without one it shows the elegant labelled placeholder so unfinished pages
 * still look intentional. Pass `gallery`/`galleryIndex` to make it open the
 * lightbox on click.
 */
export function PhotoFrame({
  src,
  alt,
  caption,
  ratio = "4/5",
  duotone = false,
  contain = false,
  focal,
  zoom,
  sizes = "(max-width: 900px) 100vw, 50vw",
  gallery,
  galleryIndex,
  className,
}: PhotoFrameProps) {
  const interactive =
    !!src && !!gallery && gallery.length > 0 && typeof galleryIndex === "number";

  const classes = [
    "photo",
    duotone ? "photo--duo" : "",
    contain ? "photo--contain" : "",
    interactive ? "photo--interactive" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties = { aspectRatio: ratio };

  // Zoom scales the image up around the focal anchor; the frame's
  // `overflow: hidden` clips whatever spills past its edges.
  const scaled = typeof zoom === "number" && zoom > 100;
  const imgStyle: CSSProperties | undefined =
    focal || scaled
      ? {
          ...(focal ? { objectPosition: focal } : null),
          ...(scaled
            ? { transform: `scale(${zoom / 100})`, transformOrigin: focal ?? "center" }
            : null),
        }
      : undefined;

  return (
    <figure className={classes} style={style} role="img" aria-label={alt}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} style={imgStyle} />
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
      {interactive ? (
        <PhotoZoomTrigger
          gallery={gallery}
          index={galleryIndex}
          label={alt}
        />
      ) : null}
    </figure>
  );
}
