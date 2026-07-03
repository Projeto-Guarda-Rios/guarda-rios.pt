import type { ReactNode } from "react";
import { PhotoFrame } from "./photo-frame";
import type { LightboxImage } from "./lightbox";

export interface EventPhoto {
  src?: string;
  alt: string;
  caption?: string;
  /** Crop anchor (CSS `object-position`), e.g. `"center top"` or `"50% 20%"`. */
  focal?: string;
  /** Extra zoom as a percentage (`100` = none, `130` = 130%). */
  zoom?: number;
}

interface EventCardProps {
  title: string;
  /** Year / edition label shown to the right of the title. */
  year?: string;
  description: ReactNode;
  /** Gallery photos shown in a responsive row. */
  photos?: EventPhoto[];
  /** Use 3 columns instead of 4 (nicer for 3 photos). */
  wide?: boolean;
}

/**
 * An outreach / competition entry: a titled block with intro copy and a row
 * of framed photos. Consecutive cards are separated by a hairline rule.
 */
export function EventCard({
  title,
  year,
  description,
  photos = [],
  wide = false,
}: EventCardProps) {
  // Only real photos join the lightbox gallery; indices map back to it so the
  // arrows browse exactly the pictures shown here.
  const gallery: LightboxImage[] = photos
    .filter((photo): photo is LightboxImage => !!photo.src)
    .map((photo) => ({
      src: photo.src as string,
      alt: photo.alt,
      caption: photo.caption,
    }));

  return (
    <article className="event">
      <div className="event-head">
        <h3>{title}</h3>
        {year ? <span className="yr">{year}</span> : null}
      </div>
      <p className="lead">{description}</p>
      {photos.length > 0 ? (
        <div className={["photo-row", wide ? "photo-row--wide" : ""].join(" ")}>
          {photos.map((photo, i) => {
            const galleryIndex = photo.src
              ? gallery.findIndex((item) => item.src === photo.src)
              : undefined;
            return (
              <PhotoFrame
                key={i}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                focal={photo.focal}
                zoom={photo.zoom}
                ratio="4/3"
                sizes="(max-width: 720px) 50vw, 25vw"
                gallery={gallery}
                galleryIndex={galleryIndex}
              />
            );
          })}
        </div>
      ) : null}
    </article>
  );
}
