import type { NextConfig } from "next";

/**
 * GitHub Pages project URLs use a subpath: https://<user>.github.io/<repo>/
 *
 * In CI, set STATIC_EXPORT_REPO to the repository name (see `.github/workflows/nextjs.yml`).
 * Omit it for a local production build that is served from the site root (e.g. previewing `./out`).
 */
function githubPagesBasePath(): string {
  if (process.env.NODE_ENV !== "production") {
    return "";
  }
  const raw = process.env.STATIC_EXPORT_REPO?.trim();
  if (!raw) {
    return "";
  }
  const normalized = raw.replace(/^\/+|\/+$/g, "");
  return `/${normalized}`;
}

const basePath = githubPagesBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
