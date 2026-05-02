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

Optional variables are documented in `.env.example`.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `src/app` and `src/components`; the dev server hot-reloads.

```bash
npm run lint
```

## Production build (static export)

This project uses **`output: 'export'`** so `next build` produces a static site in **`out/`**. There is **no Node server bundle** (`next start` is not used).

```bash
npm run build
```

Locally, this emits assets for the **site root**. On GitHub Pages (project repo), CI sets **`STATIC_EXPORT_REPO`** so `basePath` / `assetPrefix` match `https://<user>.github.io/<repo>/`. See [`next.config.ts`](next.config.ts).

To reproduce a Pages-style build locally (PowerShell):

```powershell
$env:STATIC_EXPORT_REPO = "FIJI"   # your GitHub repository name, no slash
npm run build
```

## Deploy to GitHub Pages

1. In the repo: **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
2. Push to **`main`**. The workflow [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml) runs `npm ci`, `npm run build` with `STATIC_EXPORT_REPO` set from **`github.event.repository.name`**, and publishes **`./out`** with `deploy-pages`.

If you rename the repository on GitHub, the next workflow run picks up the new subpath automatically (no manual edit for `basePath`).

Replace the WhatsApp placeholder and any dummy gallery copy before announcing the site.

## Deploy elsewhere

Any static host can serve the **`out/`** folder after `npm run build` (respecting **`STATIC_EXPORT_REPO`** when the site lives under a subpath). Platforms that expect a **running Node `next start`** server need different config—this repo is optimized for **static / GitHub Pages** first.

**Security:** Never commit `.env`, API keys, or private URLs.

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
