"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Medal, PhotoFrame, SectionHeading, useLightbox } from "@/content/ui";
import type { ContestItem } from "./contest-data";

interface ContestShowcaseProps {
  contests: ContestItem[];
}

// Cadence of the automatic transitions.
const SWITCH_MS = 7000;
const SCROLL_MS = 3600;
// How long the showcase stays under manual control after the last interaction
// before the gentle autoplay is allowed to resume.
const RESUME_AFTER_MS = 12000;

export function ContestShowcase({ contests }: ContestShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const contestRailRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Autoplay is suspended while the pointer hovers the showcase (desktop) or
  // for a grace period after any interaction (works for touch and keyboard).
  const hoveringRef = useRef(false);
  const lastInteractionRef = useRef(0);
  const inViewRef = useRef(false);

  // While a photo is open in the lightbox, all autoplay stays frozen so the
  // contest behind the preview never shifts underneath it.
  const { isOpen: lightboxOpen } = useLightbox();
  const lightboxOpenRef = useRef(false);
  useEffect(() => {
    lightboxOpenRef.current = lightboxOpen;
  }, [lightboxOpen]);

  const selected = contests[selectedIndex];
  const photos = selected.photos;

  const registerInteraction = useCallback(() => {
    lastInteractionRef.current = Date.now();
  }, []);

  const isAutoplayAllowed = useCallback(() => {
    if (lightboxOpenRef.current) return false;
    if (!inViewRef.current) return false;
    if (hoveringRef.current) return false;
    if (Date.now() - lastInteractionRef.current < RESUME_AFTER_MS) return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
    return true;
  }, []);

  // Only animate while the showcase is actually on screen.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  // Advance to the next contest, but never while the user is in control.
  useEffect(() => {
    if (contests.length < 2) return;

    const timer = window.setInterval(() => {
      if (!isAutoplayAllowed()) return;
      setSelectedIndex((current) => (current + 1) % contests.length);
    }, SWITCH_MS);

    return () => window.clearInterval(timer);
  }, [contests.length, isAutoplayAllowed]);

  // Keep the active contest in view when the selection changes.
  useEffect(() => {
    const rail = contestRailRef.current;
    const activeContest = rail?.querySelector<HTMLButtonElement>(
      '[data-active="true"]',
    );

    activeContest?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selectedIndex]);

  // Reset the gallery on contest change and drift through the photos, again
  // only when the user is not actively scrolling them.
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollTo({ left: 0 });

    if (photos.length < 2) return;

    const timer = window.setInterval(() => {
      if (!isAutoplayAllowed()) return;

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
  }, [photos.length, selectedIndex, isAutoplayAllowed]);

  const handleSelect = (index: number) => {
    registerInteraction();
    setSelectedIndex(index);
  };

  return (
    <div
      className="contest-showcase"
      ref={rootRef}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") hoveringRef.current = true;
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          hoveringRef.current = false;
          // Give a grace period after the pointer leaves before resuming.
          registerInteraction();
        }
      }}
      onPointerDownCapture={registerInteraction}
      onWheelCapture={registerInteraction}
      onTouchStartCapture={registerInteraction}
      onKeyDownCapture={registerInteraction}
      onFocusCapture={registerInteraction}
    >
      <div
        className="conc-grid conc-grid--interactive"
        ref={contestRailRef}
        aria-label="Concursos apresentados"
      >
        {contests.map((item, index) => {
          const active = index === selectedIndex;
          const contestKey = `${item.name}-${item.year}-${index}`;

          return (
            <button
              className={["conc", "conc-button", active ? "active" : ""]
                .filter(Boolean)
                .join(" ")}
              key={contestKey}
              type="button"
              aria-pressed={active}
              aria-controls="contest-gallery"
              data-active={active}
              onClick={() => handleSelect(index)}
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
            photos.map((photo, index) => (
              <PhotoFrame
                className="contest-photo"
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                ratio="4/3"
                sizes="(max-width: 720px) 78vw, 31vw"
                gallery={photos}
                galleryIndex={index}
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
