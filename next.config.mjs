/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "future.co",
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      "*"
    ]
  }
};

export default nextConfig;
