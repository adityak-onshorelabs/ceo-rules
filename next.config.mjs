/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Authentic CEO Rules imagery, served from ImageKit.
    remotePatterns: [
      { protocol: "https", hostname: "ik.imagekit.io" },
    ],
  },
  // Appointments are held at the atelier; the old route lands on its booking block.
  async redirects() {
    return [{ source: "/appointment", destination: "/atelier#book", permanent: false }];
  },
};

export default nextConfig;
