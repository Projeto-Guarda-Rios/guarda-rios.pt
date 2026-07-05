"use client";

import Image from "next/image";
import { useState } from "react";

type SensAqua = "sensor" | "aquanode";

const SENSOR_IMAGES = [
  {
    key: "temperature",
    image: "/estacao/Sensor_Temperatura.png",
    alt: "Sensor de temperatura",
    sizes: "(max-width: 720px) 100vw, 56vw",
  },
  {
    key: "turbidez",
    image: "/estacao/Sensor_Turbidez.png",
    alt: "Sensor de turbidez",
    sizes: "(max-width: 720px) 100vw, 56vw",
  },
];

const AQUANODE = {
  image: "/estacao/aquanode.png",
  alt: "AquaNode",
  sizes: "(max-width: 720px) 100vw, 56vw",
};


export function SensorShowcase() {
    const [sens, setSens] = useState<SensAqua>("sensor");

    return (
        <div>
            <div className="pcb-side-controls" aria-label="Sensores | AquaNode">
                <button
                type="button"
                aria-pressed={sens === "sensor"}
                onClick={() => setSens("sensor")}
                >
                Sensores
                </button>
                <button
                type="button"
                aria-pressed={sens === "aquanode"}
                onClick={() => setSens("aquanode")}
                >
                AquaNode
                </button>
            </div>
            <div>
                {sens === "sensor" ? (
                <div className="pcb-render-showcase">
                {SENSOR_IMAGES.map((sensor) => (
                        <figure key={sensor.key}>
                        <Image
                            src={sensor.image}
                            alt={sensor.alt}
                            width={200}
                            height={200}
                            sizes={sensor.sizes}
                        />
                        </figure>
                    ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                    <figure>
                        <Image
                        src={AQUANODE.image}
                        alt={AQUANODE.alt}
                        width={750}
                        height={750}
                        sizes={AQUANODE.sizes}
                        unoptimized
                        />
                    </figure>
                    </div>
                )}
            </div>
        </div>
    )
}