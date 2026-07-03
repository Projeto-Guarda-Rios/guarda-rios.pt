import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";
import { PhotoFrame } from "./photo-frame";

interface CTASectionProps {
  eyebrow?: ReactNode;
  /** Heading — may include <em> for the italic accent. */
  title: ReactNode;
  description: ReactNode;
  /** Buttons / links, typically <Button /> elements. */
  actions?: ReactNode;
  photo?: {
    src?: string;
    alt: string;
    caption?: string;
    focal?: string;
    zoom?: number;
  };
}

/**
 * Closing call-to-action band with a framed photo and copy (A2 `.cta`).
 */
export function CTASection({
  eyebrow,
  title,
  description,
  actions,
  photo,
}: CTASectionProps) {
  return (
    <section className="section cta bg-2">
      <div className="wrap">
        <div className="cta-grid">
          <div className="cta-figure">
            <PhotoFrame
              src={photo?.src}
              alt={photo?.alt ?? "Equipa do Projeto Guarda-Rios"}
              caption={photo?.caption ?? "a equipa no Ribalab"}
              focal={photo?.focal}
              zoom={photo?.zoom}
              ratio="4/3"
              duotone
            />
          </div>
          <div className="cta-copy">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h2 style={{ marginTop: 22 }}>{title}</h2>
            <p>{description}</p>
            {actions ? <div className="cta-actions">{actions}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
