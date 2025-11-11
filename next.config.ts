/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',          // usually empty
        pathname: '/**',   // allow all paths
      },
    ],
    qualities: [70, 75], // allowed image qualities
  },
};

module.exports = nextConfig;
