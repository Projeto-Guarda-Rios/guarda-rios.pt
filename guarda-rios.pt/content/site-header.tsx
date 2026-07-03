"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, LINKS } from "./site-config";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

/** Returns true when `href` is the active route (exact for "/"). */
function useIsActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const isActive = useIsActive();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Flag set while a browser back/forward is in flight, so the next route
  // change can be told apart from a fresh forward navigation.
  const isPopNavRef = useRef(false);
  useEffect(() => {
    const onPopState = () => {
      isPopNavRef.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // On navigation, close the mobile menu. For forward navigation, land at the
  // top of the new page — mobile browsers otherwise keep the previous scroll
  // offset. For back/forward, leave the restored scroll position untouched.
  useEffect(() => {
    setOpen(false);
    if (isPopNavRef.current) {
      isPopNavRef.current = false;
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  // Freeze the page behind the mobile menu so it can't scroll underneath.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label="Guarda-Rios · início">
          <Image
            className="logo-img"
            src="/brand/PGR_Logo.png"
            alt="Projeto Guarda-Rios"
            width={46}
            height={46}
            priority
          />
          <span className="name">
            Guarda-Rios<small>Grupo Ribadouro</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Navegação principal">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "active" : undefined}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <ThemeToggle />
          <Button href={LINKS.portal} className="nav-cta" arrow>
            Portal de Dados
          </Button>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        <div className="wrap">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "active" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={LINKS.portal} arrow>
            Portal de Dados
          </Button>
        </div>
      </div>
    </header>
  );
}
