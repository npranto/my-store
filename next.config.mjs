/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "pagedone.io", "i.ibb.co"],
  },
};

export default nextConfig;
