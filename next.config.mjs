/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // to allow next js use  external images
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
