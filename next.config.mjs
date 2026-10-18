/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // WebP encodes far faster than AVIF, so first visits on a fresh deploy are not left waiting
    formats: ['image/webp'],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 200, 380, 540],
    qualities: [70, 75],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
