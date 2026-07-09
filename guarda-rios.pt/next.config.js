/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  eslint: { ignoreDuringBuilds: true },
  images: {
    // WebP only. AVIF is ~15% smaller but its first-request encode can take
    // 0.5–2 s per large photo, which is what made images feel slow on first
    // load. WebP encodes in ~0.15 s and is already very small.
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  async headers() {
    // A given optimized-image URL never changes its bytes, so cache it hard in
    // the browser (Next otherwise sends max-age=60, causing constant re-fetches).
    return [
      {
        source: "/_next/image(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
