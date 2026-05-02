# FIJI Indonesia — Firman Ishikawaryu Ju-Jutsu

Official marketing site for **FIJI** (Firman Ishikawaryu Ju-Jutsu Indonesia): programs, gallery, scheduling context, and contact flows for a Japanese martial arts academy in Indonesia.

## Features

- **Multi-page marketing site** — Home, About, Programs, and Gallery routes with consistent header and FIJI styling.
- **Motion and layout** — Subtle scroll-reveal animations (Framer Motion), responsive grids, sticky navigation.
- **Contact funnel** — Training inquiry form that opens WhatsApp with a prefilled message (update the placeholder number in `src/components/fiji-landing-page.tsx` before production).
- **Error handling** — App Router `error.tsx` / `global-error.tsx`, client-side rejection logging in development-only console paths, and a lightweight `ErrorCatcher` boundary in the root layout.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) icons

## Prerequisites

- **Node.js** 20+ (recommended; matches `@types/node` in this repo)

## Installation

```bash
git clone <your-repo-url>
cd fiji-website
npm install
```

Environment variables are optional for the current build. See `.env.example` if you add integrations later.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `src/app` and `src/components`; the dev server hot-reloads.

```bash
npm run lint
```

## Production build

```bash
npm run build
npm run start
```

Confirm all routes (`/`, `/about`, `/programs`, `/gallery`) and the contact/WhatsApp flow behave as expected before deploying.

## Deployment

Works on any host that supports Node for Next.js (e.g. [Vercel](https://vercel.com/), Docker, or a VPS):

1. Set `NODE_ENV=production` on the platform (typically automatic).
2. Run `npm run build` then `npm run start`, or use the platform’s Next.js preset.
3. Replace the WhatsApp `wa.me` number and any placeholder gallery/media copy before going live.

**Security:** Never commit `.env`, API keys, or private URLs. This repository uses a focused `.gitignore` so `.env.example` documents optional keys while real env files stay local.

## Project layout

```
src/
  app/           # Routes, layouts, global styles, error UI
  components/    # Reusable UI (header, landing sections)
  constants/     # Shared nav / chrome config
  lib/           # Shared utilities (error logger)
```

## License

Specify your license here (for example MIT or “All rights reserved” for a private org repo).
