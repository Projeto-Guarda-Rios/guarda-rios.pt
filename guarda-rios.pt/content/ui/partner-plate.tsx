import Image from "next/image";
import type { ReactNode } from "react";

interface PartnerPlateProps {
  name: string;
  role: string;
  /** Partner logo path in /public. Falls back to the mono initials box. */
  logo?: string;
  /** Two-letter monogram used when no logo is provided. */
  mono?: string;
  /** Optional longer description — switches to the stacked `plate-lg` layout. */
  description?: ReactNode;
}

/** Partner card with logo (or monogram), name and role (A2 `.plate`). */
export function PartnerPlate({
  name,
  role,
  logo,
  mono,
  description,
}: PartnerPlateProps) {
  const classes = ["plate", description ? "plate-lg" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <span className="mono">
        {logo ? (
          <Image src={logo} alt={`Logótipo ${name}`} width={72} height={72} />
        ) : (
          mono ?? name.slice(0, 2).toUpperCase()
        )}
      </span>
      <div>
        <div className="pname">{name}</div>
        <div className="prole">{role}</div>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}
