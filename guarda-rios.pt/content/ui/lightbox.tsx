"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

/**
 * A single item that can be shown in the lightbox. Structurally compatible
 * with `EventPhoto` / `ContestPhoto`, so page galleries can be handed straight
 * to the lightbox once their `src` is guaranteed.
 */
export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxController {
  /** Open the overlay with a gallery, focused on `index`. */
  open: (images: LightboxImage[], index: number) => void;
  /** Whether the overlay is currently showing. Lets callers pause background
   *  motion (autoplay, carousels) while a photo is being previewed. */
  isOpen: boolean;
}

const LightboxContext = createContext<LightboxController | null>(null);

/**
 * Access the lightbox from any client component nested under
 * {@link LightboxProvider}. Throws if the provider is missing so wiring
 * mistakes surface immediately.
 */
export function useLightbox(): LightboxController {
  const controller = useContext(LightboxContext);
  if (!controller) {
    throw new Error("useLightbox must be used within a <LightboxProvider>.");
  }
  return controller;
}

// How far a touch must travel (px) before it counts as a swipe.
const SWIPE_THRESHOLD = 48;
// Fallback frame ratio while the real image is still loading, so `fill`
// always has a sized parent and there is no zero-height flash.
const FALLBACK_RATIO = 3 / 2;

interface LightboxState {
  images: LightboxImage[];
  index: number;
}

/**
 * Site-wide image lightbox. Wrap the app once (in the root layout) and any
 * descendant can call {@link useLightbox} to open a gallery. The overlay
 * renders through a portal on `document.body`, above the sticky header.
 */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<LightboxState | null>(null);
  // Natural aspect ratio of the current image, measured on load.
  const [ratio, setRatio] = useState<number | null>(null);

  // Element focused before opening, restored on close for keyboard users.
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  const open = useCallback((images: LightboxImage[], index: number) => {
    if (images.length === 0) return;
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setRatio(null);
    setState({ images, index: Math.max(0, Math.min(index, images.length - 1)) });
  }, []);

  const close = useCallback(() => setState(null), []);

  const step = useCallback((delta: number) => {
    setRatio(null);
    setState((current) => {
      if (!current) return current;
      const count = current.images.length;
      return { ...current, index: (current.index + delta + count) % count };
    });
  }, []);

  const isOpen = state !== null;
  const hasMultiple = (state?.images.length ?? 0) > 1;

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  // Global keyboard controls + focus handling.
  useEffect(() => {
    if (!isOpen) return;

    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          close();
          break;
        case "ArrowRight":
          if (hasMultiple) {
            event.preventDefault();
            step(1);
          }
          break;
        case "ArrowLeft":
          if (hasMultiple) {
            event.preventDefault();
            step(-1);
          }
          break;
        case "Tab": {
          // Minimal focus trap: keep focus among the overlay controls.
          const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
            "button:not([disabled])",
          );
          if (!focusables || focusables.length === 0) break;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          const active = document.activeElement;
          if (event.shiftKey && active === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
          }
          break;
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, hasMultiple, close, step]);

  // Restore focus to the trigger after closing.
  useEffect(() => {
    if (isOpen) return;
    lastFocusedRef.current?.focus?.();
  }, [isOpen]);

  const controller = useMemo<LightboxController>(
    () => ({ open, isOpen }),
    [open, isOpen],
  );

  const current = state?.images[state.index];

  return (
    <LightboxContext.Provider value={controller}>
      {children}
      {mounted && isOpen && current
        ? createPortal(
            <div
              className="lightbox"
              role="presentation"
              onClick={close}
            >
              <div
                ref={dialogRef}
                className="lightbox-dialog"
                role="dialog"
                aria-modal="true"
                aria-label={current.caption ?? current.alt}
                tabIndex={-1}
                onClick={(event) => event.stopPropagation()}
                onTouchStart={(event) => {
                  touchStartX.current = event.touches[0]?.clientX ?? null;
                }}
                onTouchEnd={(event) => {
                  const startX = touchStartX.current;
                  touchStartX.current = null;
                  if (startX === null || !hasMultiple) return;
                  const deltaX = (event.changedTouches[0]?.clientX ?? startX) - startX;
                  if (Math.abs(deltaX) > SWIPE_THRESHOLD) step(deltaX < 0 ? 1 : -1);
                }}
              >
                <div className="lightbox-topbar">
                  <button
                    type="button"
                    className="lightbox-close"
                    onClick={close}
                    aria-label="Fechar"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className="lightbox-stage">
                  {hasMultiple ? (
                    <button
                      type="button"
                      className="lightbox-nav lightbox-nav--prev"
                      onClick={() => step(-1)}
                      aria-label="Fotografia anterior"
                    >
                      <ChevronIcon />
                    </button>
                  ) : null}

                  <figure className="lightbox-figure">
                    <div
                      className="lightbox-frame"
                      style={
                        {
                          "--lb-ar": String(ratio ?? FALLBACK_RATIO),
                        } as CSSProperties
                      }
                    >
                      <Image
                        key={current.src}
                        src={current.src}
                        alt={current.alt}
                        fill
                        sizes="92vw"
                        priority
                        className="lightbox-img"
                        onLoad={(event) => {
                          const img = event.currentTarget;
                          if (img.naturalWidth && img.naturalHeight) {
                            setRatio(img.naturalWidth / img.naturalHeight);
                          }
                        }}
                      />
                    </div>
                  </figure>

                  {hasMultiple ? (
                    <button
                      type="button"
                      className="lightbox-nav lightbox-nav--next"
                      onClick={() => step(1)}
                      aria-label="Fotografia seguinte"
                    >
                      <ChevronIcon />
                    </button>
                  ) : null}
                </div>

                {current.caption || hasMultiple ? (
                  <div className="lightbox-meta">
                    {current.caption ? (
                      <p className="lightbox-caption">{current.caption}</p>
                    ) : null}
                    {hasMultiple ? (
                      <p className="lightbox-counter" aria-live="polite">
                        {state.index + 1} / {state.images.length}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </LightboxContext.Provider>
  );
}

/**
 * Overlay button that turns a framed photo into a lightbox trigger. Rendered
 * by {@link PhotoFrame} (a server component) only when a gallery is supplied,
 * so the client-only lightbox hook stays isolated to this leaf.
 */
export function PhotoZoomTrigger({
  gallery,
  index,
  label,
}: {
  gallery: LightboxImage[];
  index: number;
  label: string;
}) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      className="photo-zoom"
      aria-label={`Ampliar fotografia: ${label}`}
      onClick={() => open(gallery, index)}
    >
      <span className="photo-zoom-badge" aria-hidden>
        <ExpandIcon />
      </span>
    </button>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width="22" height="22">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width="26" height="26">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width="18" height="18">
      <path d="M9 4H4v5M20 9V4h-5M4 15v5h5M15 20h5v-5" />
    </svg>
  );
}
