/**
 * Single source of truth for navigation and external links.
 * Both the header and footer read from here.
 */

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation (each item is its own route). */
export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Ribalab", href: "/ribalab" },
  { label: "Estação", href: "/estacao" },
  { label: "Divulgação", href: "/divulgacao" },
  { label: "Concursos", href: "/concursos" },
  { label: "Parcerias", href: "/parcerias" },
];

export const LINKS = {
  portal: "https://data.guarda-rios.pt",
  github: "https://github.com/Projeto-Guarda-Rios",
  instagram: "https://www.instagram.com/projeto_guardarios",
  email: "guardarios@ribadouro.com",
} as const;
