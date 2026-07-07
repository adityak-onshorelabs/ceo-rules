/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Prototype only. Real site uses authentic CEO Rules photography (brief: no stock/AI).
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
