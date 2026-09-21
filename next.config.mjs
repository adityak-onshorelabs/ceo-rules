/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Brief §23: modern formats; Next serves AVIF where supported, else WebP,
    // resized per device so phones never receive the original files.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
