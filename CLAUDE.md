# CLAUDE.md

Guidance for Claude and other coding agents working on the Guarda-Rios institutional website.

## Project Role

This repository contains the public institutional website for **Projeto Guarda-Rios**. The working Next.js app is in `guarda-rios.pt/`.

The website must present the project professionally and clearly: mission, open-source station, Ribalab, outreach, competitions, partnerships, and routes into the public data portal. It is not only a brochure. It is the main public explanation of a student-led, open-source, citizen-science water-quality monitoring project from Grupo Ribadouro in Porto, Portugal.

## Source Of Truth

Use the local knowledge base before changing project claims:

- `/home/dauwt/Projects/Guarda Rios/knowledge_base/README.md`
- `/home/dauwt/Projects/Guarda Rios/knowledge_base/overview.md`
- `/home/dauwt/Projects/Guarda Rios/knowledge_base/web/websites.md`
- Topic notes under `project/`, `hardware/`, `backend/`, `firmware/`, and `communications/`

Important factual guardrails:

- The current confirmed measured parameters are **temperature** and **turbidity**. pH, dissolved oxygen, conductivity, and TDS are modular/planned or inconsistent across sources unless newly verified.
- As of the latest knowledge-base sources, the full sensor-to-cloud flow is implemented and lab-tested, but there is **no confirmed permanent field deployment**. Do not imply live permanent river deployment unless the knowledge base or user confirms it.
- Planned field validation involves Ribeira da Granja with Aguas e Energia do Porto and a watercourse monitored with Laboratorio da Paisagem.
- The I-Fest Tunisia Gold Medal / Top 10 claim is unverified in the analyzed files. Do not publish it as fact without confirmation.
- The project is open-source by intent and policy: software MIT, hardware CERN-OHL-P v2. Distinguish stated scope from artifacts actually published on GitHub if that matters.
- The four FAQtos report names are not the whole team. Keep the project contributor-neutral unless a source attributes a specific role.

## Product And Content Goals

Build a website that is:

- Professional, credible, and visually exceptional.
- Clear for schools, partners, families, municipalities, judges, and technical readers.
- Accurate about project status, measured parameters, partnerships, and recognition.
- Maintainable and scalable as pages, events, partners, and stations grow.
- Portuguese-first. Keep public copy in Portuguese unless a specific i18n task is requested.

Prefer concrete project language over vague sustainability marketing. Explain what the station does, why it matters, what is open, what has been tested, and what is planned.

## Current App Structure

- App root: `guarda-rios.pt/`
- Pages: `guarda-rios.pt/app/**/page.tsx`
- Global styles and design tokens: `guarda-rios.pt/app/globals.css`
- Layout: `guarda-rios.pt/app/layout.tsx`
- Header/footer/config: `guarda-rios.pt/content/site-*.tsx`, `guarda-rios.pt/content/site-config.ts`
- Reusable UI: `guarda-rios.pt/content/ui/`
- Static assets: `guarda-rios.pt/public/`

Navigation currently lives in `content/site-config.ts` and includes:

- `/` Inicio
- `/ribalab`
- `/estacao`
- `/divulgacao`
- `/concursos`
- `/parcerias`
- `/sobre`

External links:

- Data portal: `https://data.guarda-rios.pt`
- GitHub: `https://github.com/Projeto-Guarda-Rios`
- Instagram: `https://www.instagram.com/projeto_guardarios`
- Email: `guardarios@ribadouro.com`

## Design Direction

The existing design system is a refined editorial/scientific identity using:

- Warm paper backgrounds, deep blue-green ink, river blue, and controlled orange accents.
- Serif display headings and sans body text wired through `next/font`.
- Light and dark themes through CSS variables and `next-themes`.
- Reusable primitives such as `Button`, `Card`, `PhotoFrame`, `SectionHeading`, `StatBand`, `Gauge`, `MiniAreaChart`, and partner/event components.

When extending the UI:

- Reuse existing components and CSS tokens before inventing new patterns.
- Keep border radii restrained. Existing cards/buttons use small radii around `var(--r)`.
- Use real project images and brand assets where available.
- Do not make generic stock-like sustainability sections.
- Do not bury the project identity. The first viewport should clearly signal Guarda-Rios.
- Keep dense technical pages readable with strong hierarchy, scannable blocks, and meaningful diagrams/cards.
- Ensure mobile layouts are first-class. Text must not overflow buttons, cards, nav, or stats.
- Maintain light/dark theme compatibility.
- Keep accessibility basics intact: semantic headings, useful alt text, keyboard-friendly controls, and visible focus where relevant.

## Engineering Rules

- Work inside `guarda-rios.pt/` for app code unless editing root-level docs.
- Use TypeScript and the Next App Router conventions already in place.
- Prefer server components by default. Use `"use client"` only for state, effects, browser APIs, or interactive controls.
- Keep site-wide links and nav data in `content/site-config.ts`.
- Keep reusable visual building blocks in `content/ui/`.
- Use `next/link` for internal navigation and `next/image` for project images where practical.
- Avoid broad refactors while adding content or fixing a page.
- Do not introduce a CMS, database, state manager, or design library without a clear project need.
- Keep data/content arrays close to the page when they are page-specific; extract only when reused.

## Commands

Run commands from `guarda-rios.pt/`:

```bash
npm run dev
npm run lint
npm run build
```

Use `npm` because this project has `package-lock.json`. Do not switch package managers without being asked.

## Quality Bar Before Finishing

For meaningful changes, verify at least:

- `npm run lint`
- `npm run build`

For visual/layout changes, also run the app and inspect desktop and mobile widths. Check both light and dark themes when the change touches shared styling.

## Writing Style

- Public copy should be in European Portuguese.
- Be precise with technical claims: AquaNode, STM32L053R8, RS-485, ESP32-WROOM-32D, NB-IoT, InfluxDB, Grafana.
- Use "estacao", "AquaNode", "caixa da estacao", "portal de dados", "ciencia cidada", and "open-source" consistently.
- Do not overclaim deployment, sensor coverage, prizes, or partner commitments.
- Keep the tone confident, grounded, and institutional without becoming academic or lifeless.
