/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cap at 1280 so the temporary 1280-wide hero is never requested larger.
    deviceSizes: [640, 750, 828, 1080, 1200, 1280],
    remotePatterns: [
      { protocol: "https", hostname: "ik.imagekit.io" },
    ],
  },
};

export default nextConfig;
