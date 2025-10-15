/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media2.dev.to"], // ✅ allow external images from this domain
  },
};

export default nextConfig;
