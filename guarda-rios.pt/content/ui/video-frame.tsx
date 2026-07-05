import type { CSSProperties } from "react";

interface VideoFrameProps {
  src?: string;
  alt: string;
  caption?: string;
  ratio?: string;
  contain?: boolean;
  focal?: string;
  zoom?: number;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

/**
 * Framed video slot matching the PhotoFrame component.
 */
export function VideoFrame({
  src,
  alt,
  caption,
  ratio = "4/5",
  contain = false,
  focal,
  zoom,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  className,
}: VideoFrameProps) {
  const classes = [
    "photo",
    contain ? "photo--contain" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties = {
    aspectRatio: ratio,
  };

  const scaled = typeof zoom === "number" && zoom > 100;

  const videoStyle: CSSProperties = {
    objectFit: contain ? "contain" : "cover",
    ...(focal ? { objectPosition: focal } : {}),
    ...(scaled
      ? {
          transform: `scale(${zoom / 100})`,
          transformOrigin: focal ?? "center",
        }
      : {}),
  };

  return (
    <figure className={classes} style={style} role="img" aria-label={alt}>
      {src ? (
        <video
          className="absolute inset-0 w-full h-full"
          style={videoStyle}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          controls={controls}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <span className="ph-center" aria-hidden>
          <svg viewBox="0 0 48 48">
            <polygon points="18,14 36,24 18,34" />
            <rect x="2" y="6" width="44" height="36" rx="2" />
          </svg>
          <span>Vídeo</span>
        </span>
      )}

      {caption ? <figcaption className="ph-cap">{caption}</figcaption> : null}
    </figure>
  );
}