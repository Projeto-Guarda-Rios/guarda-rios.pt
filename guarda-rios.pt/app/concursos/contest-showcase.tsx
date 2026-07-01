"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Medal, PhotoFrame, SectionHeading } from "@/content/ui";
import type { ContestItem } from "./contest-data";

interface ContestShowcaseProps {
  contests: ContestItem[];
}

const SWITCH_MS = 6500;
const SCROLL_MS = 3200;

export function ContestShowcase({ contests }: ContestShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const selected = contests[selectedIndex];
  const photos = selected.photos;

  useEffect(() => {
    if (contests.length < 2) return;

    const timer = window.setInterval(() => {
      setSelectedIndex((current) => (current + 1) % contests.length);
    }, SWITCH_MS);

    return () => window.clearInterval(timer);
  }, [contests.length]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollTo({ left: 0 });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || photos.length < 2) return;

    const timer = window.setInterval(() => {
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;

      if (maxScroll <= 8) return;

      if (gallery.scrollLeft >= maxScroll - 12) {
        gallery.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      gallery.scrollBy({
        left: Math.min(gallery.clientWidth * 0.72, 430),
        behavior: "smooth",
      });
    }, SCROLL_MS);

    return () => window.clearInterval(timer);
  }, [photos.length, selectedIndex]);

  return (
    <div className="contest-showcase">
      <div className="conc-grid conc-grid--interactive">
        {contests.map((item, index) => {
          const active = index === selectedIndex;

          return (
            <button
              className={["conc", "conc-button", active ? "active" : ""]
                .filter(Boolean)
                .join(" ")}
              key={item.name}
              type="button"
              aria-pressed={active}
              aria-controls="contest-gallery"
              onClick={() => setSelectedIndex(index)}
            >
              {item.logo ? (
                <Image
                  className="conc-logo"
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={40}
                />
              ) : (
                <Medal className="medal" />
              )}
              <span className="yr">{item.year}</span>
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </button>
          );
        })}
      </div>

      <div className="contest-gallery" id="contest-gallery">
        <SectionHeading
          eyebrow="Em destaque"
          title={
            <>
              {selected.name}, <em>em fotografia</em>
            </>
          }
        />

        <div
          className="contest-photo-scroll"
          ref={galleryRef}
          aria-label={`Fotografias de ${selected.name}`}
        >
          {photos.length > 0 ? (
            photos.map((photo) => (
              <PhotoFrame
                className="contest-photo"
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                ratio="4/3"
                sizes="(max-width: 720px) 78vw, 31vw"
              />
            ))
          ) : (
            <PhotoFrame
              className="contest-photo contest-photo--placeholder"
              alt={`Fotografias de ${selected.name} a publicar`}
              caption="fotografias a caminho"
              ratio="4/3"
              sizes="(max-width: 720px) 78vw, 31vw"
            />
          )}
        </div>
      </div>
    </div>
  );
}
