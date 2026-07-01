# AGENTS.md

Instructions for AI coding agents contributing to the Guarda-Rios website.

## Mission

Help build and maintain the main public website for **Projeto Guarda-Rios**. The site must be professional, visually excellent, factual, maintainable, and scalable. It should explain the project well to both non-technical visitors and technical partners.

The actual app is in:

```text
guarda-rios.pt/
```

## Read First

Before changing content or claims, inspect the knowledge base:

```text
/home/dauwt/Projects/Guarda Rios/knowledge_base/
```

Start with:

- `overview.md`
- `web/websites.md`
- `hardware/station-architecture.md`
- `project/team.md`
- `project/partnerships.md`
- `project/competitions.md`
- `project/open-source-strategy.md`

If a page discusses firmware, backend, sensors, power, radio, deployment, or data, read the matching topic note before editing.

## Non-Negotiable Facts

- Guarda-Rios is a student project from Grupo Ribadouro, Porto, built around citizen science and open-source river monitoring.
- The station is low-cost, low-power, solar-powered, modular, and designed for replication.
- Current confirmed sensors/parameters: temperature and turbidity.
- The architecture has two levels:
  - AquaNode: submerged sensor node, STM32L053R8, RS-485.
  - Main PCB/station box: ESP32-WROOM-32D, NB-IoT, battery/power/security.
- Data flow: station REST API, InfluxDB v2, Grafana, public portal at `data.guarda-rios.pt`.
- Latest sourced status: end-to-end flow has been tested in lab/development; permanent field deployment is not confirmed.
- Open-source policy: MIT for software, CERN-OHL-P v2 for hardware.
- Partners include CEiiA, Aguas e Energia do Porto, and Laboratorio da Paisagem.

Do not publish uncertain claims as facts. In particular, verify before stating:

- A permanent live field station exists.
- pH, dissolved oxygen, conductivity, or TDS are currently measured by deployed hardware.
- The project won a Tunisia/I-Fest Gold Medal or Top 10 award.
- The named FAQtos authors are the complete contributor roster.

## Repository Map

```text
.
├── AGENTS.md
├── CLAUDE.md
├── README.md
└── guarda-rios.pt/
    ├── app/
    │   ├── page.tsx
    │   ├── layout.tsx
    │   ├── globals.css
    │   ├── sobre/page.tsx
    │   ├── ribalab/page.tsx
    │   ├── estacao/page.tsx
    │   ├── divulgacao/page.tsx
    │   ├── concursos/page.tsx
    │   └── parcerias/page.tsx
    ├── content/
    │   ├── site-config.ts
    │   ├── site-header.tsx
    │   ├── site-footer.tsx
    │   └── ui/
    └── public/
```

## Development

Use `npm`, not another package manager.

```bash
cd guarda-rios.pt
npm run dev
npm run lint
npm run build
```

Run `npm run lint` and `npm run build` before finishing meaningful code changes. If you cannot run them, say why in the final response.

## Implementation Standards

- Follow the existing Next.js App Router structure.
- Use TypeScript.
- Prefer server components. Add `"use client"` only when client behavior is required.
- Keep navigation and public links in `content/site-config.ts`.
- Reuse components from `content/ui/` before creating new ones.
- Keep page-specific arrays and copy near the page unless multiple pages reuse them.
- Use `next/link` for internal routes.
- Use `next/image` for local images where practical.
- Keep styling aligned with the existing CSS token system in `app/globals.css`.
- Preserve light and dark theme support.
- Avoid unrelated refactors.

## UI Quality Standards

- The website should feel like a polished scientific/civic project, not a generic startup landing page.
- Prioritize strong editorial hierarchy, clean spacing, credible project imagery, and precise technical storytelling.
- Avoid generic decorative graphics, vague eco-marketing, and unsupported live-data claims.
- Keep cards and panels purposeful. Do not add decorative nested card layouts.
- Use restrained radii, consistent spacing, and the existing blue/orange/ink/paper palette.
- Every page must work well on mobile.
- Check text wrapping in nav items, buttons, stats, cards, and hero sections.
- Preserve accessibility: semantic headings, alt text, keyboard-accessible controls, and sensible link labels.

## Content Standards

Public-facing copy should usually be Portuguese. Use European Portuguese spelling and tone.

Write with this balance:

- Clear enough for students, families, and public visitors.
- Concrete enough for engineers, judges, municipalities, and partners.
- Honest about current status and limitations.

Prefer sourced, specific claims:

- "monitoriza temperatura e turbidez"
- "transmite por NB-IoT"
- "dados publicados no portal publico"
- "testado em ambiente de desenvolvimento/laboratorio"

Avoid overclaims:

- "rede nacional ja instalada"
- "dados em tempo real de todas as ribeiras"
- "mede todos os parametros de qualidade da agua"
- "implantado permanentemente" unless confirmed

## Assets

Use existing assets in `guarda-rios.pt/public/`:

- Brand: `public/brand/`
- Partners: `public/parcerias/`
- Outreach photos: `public/divulgacao/`
- Competition photos/logos: `public/concursos/`

If a needed real image is unavailable, use the existing `PhotoFrame` placeholder pattern rather than introducing random stock imagery.

## Agent Workflow

1. Inspect the current page/component before editing.
2. Read the relevant knowledge-base notes for any factual content.
3. Make a focused change using existing patterns.
4. Run lint/build for meaningful code changes.
5. In the final response, summarize changed files and verification.

Do not revert user changes. If the worktree is dirty, preserve unrelated changes.
