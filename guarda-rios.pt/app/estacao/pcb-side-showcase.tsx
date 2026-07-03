"use client";

import Image from "next/image";
import { useState } from "react";

type PcbSide = "front" | "back";

const PCB_IMAGES = [
  {
    key: "aquanode",
    front: "/estacao/aquanode-pcb-transparent.png",
    back: "/estacao/aquanode-pcb-back-transparent.png",
    frontAlt: "Renderização frontal da placa AquaNode da estação Guarda-Rios",
    backAlt: "Renderização do verso da placa AquaNode da estação Guarda-Rios",
    sizes: "(max-width: 720px) 100vw, 50vw",
  },
  {
    key: "main",
    front: "/estacao/main-pcb-transparent.png",
    back: "/estacao/main-pcb-back-transparent.png",
    frontAlt: "Renderização frontal da PCB Principal da estação Guarda-Rios",
    backAlt: "Renderização do verso da PCB Principal da estação Guarda-Rios",
    sizes: "(max-width: 720px) 100vw, 56vw",
  },
] as const;

export function PcbSideShowcase() {
  const [side, setSide] = useState<PcbSide>("front");

  return (
    <div className="pcb-side-block">
      <div className="pcb-side-controls" aria-label="Lado das placas PCB">
        <button
          type="button"
          aria-pressed={side === "front"}
          onClick={() => setSide("front")}
        >
          Frente
        </button>
        <button
          type="button"
          aria-pressed={side === "back"}
          onClick={() => setSide("back")}
        >
          Verso
        </button>
      </div>

      <div className="pcb-render-showcase" data-side={side}>
        {PCB_IMAGES.map((image) => {
          const isFront = side === "front";

          return (
            <figure key={image.key}>
              <Image
                src={isFront ? image.front : image.back}
                alt={isFront ? image.frontAlt : image.backAlt}
                width={2352}
                height={1320}
                sizes={image.sizes}
                unoptimized
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
}
