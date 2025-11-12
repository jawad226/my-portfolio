/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    quality: 70,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  experimental: { optimizeCss: true },
  reactStrictMode: true,
  compiler: { removeConsole: true },
};
module.exports = nextConfig;
