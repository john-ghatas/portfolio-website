import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = bundleAnalyzer({
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  assetPrefix: isProd ? "https://johnghatas.com/" : "http://localhost:3000",
  env: {
    NEXT_PUBLIC_BASE_URL: isProd
      ? "https://johnghatas.com"
      : "http://localhost",
  },
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "johnghatas.com" },
      { protocol: "http", hostname: "localhost" },
    ],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };
    return config;
  },
});

export default nextConfig;
