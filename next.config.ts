/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
    minimumCacheTTL: 31536000, // cache images for 1 year
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

module.exports = nextConfig;
