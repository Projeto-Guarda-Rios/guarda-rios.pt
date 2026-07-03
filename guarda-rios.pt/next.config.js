/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Prefer modern formats and hold optimized variants in cache for a day so
    // repeat visits (and the lightbox) don't re-run the optimizer each time.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24,
  },
};

module.exports = nextConfig;
