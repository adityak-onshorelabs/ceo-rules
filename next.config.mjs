/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Authentic CEO Rules imagery, served from ImageKit.
    remotePatterns: [
      { protocol: "https", hostname: "ik.imagekit.io" },
    ],
  },
};

export default nextConfig;
