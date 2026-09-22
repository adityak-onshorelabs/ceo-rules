/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Brief §23: modern formats; Next serves AVIF where supported, else WebP,
    // resized per device so phones never receive the original files.
    formats: ["image/avif", "image/webp"],
    // Client originals on ImageKit (lib/imagekit.ts). Photo resizes them
    // through ImageKit itself; this covers any other next/image use.
    remotePatterns: [{ protocol: "https", hostname: "ik.imagekit.io", pathname: "/adityakamarouthu/**" }],
  },
};

export default nextConfig;
