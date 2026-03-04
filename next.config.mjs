/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      { protocol: "https", hostname: "syracuse.edu", pathname: "/**" },
      { protocol: "https", hostname: "assets.cdn.syr.edu", pathname: "/**" },
      { protocol: "https", hostname: "www.vervali.com", pathname: "/**" },
      { protocol: "https", hostname: "media.licdn.com", pathname: "/**" },
      { protocol: "https", hostname: "logo.clearbit.com", pathname: "/**" },
    ],
  },
  // Reduce file watchers to avoid EMFILE on macOS
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
      };
    }
    return config;
  },
};

export default nextConfig;
