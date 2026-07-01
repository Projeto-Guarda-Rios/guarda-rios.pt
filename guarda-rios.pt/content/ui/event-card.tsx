import type { ReactNode } from "react";
import { PhotoFrame } from "./photo-frame";

export interface EventPhoto {
  src?: string;
  alt: string;
  caption?: string;
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
  return (
    <article className="event">
      <div className="event-head">
        <h3>{title}</h3>
        {year ? <span className="yr">{year}</span> : null}
      </div>
      <p className="lead">{description}</p>
      {photos.length > 0 ? (
        <div className={["photo-row", wide ? "photo-row--wide" : ""].join(" ")}>
          {photos.map((photo, i) => (
            <PhotoFrame
              key={i}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
