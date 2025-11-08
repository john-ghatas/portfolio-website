const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,

  // Serve assets from domain in prod, relative in dev
  assetPrefix: isProd ? "https://johnghatas.com/" : "http://localhost:3000",

  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_URL: isProd
      ? "https://johnghatas.com"
      : "http://localhost:3000",
  },

  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],

  eslint: {
    dirs: ["src"],
  },

  images: {
    domains: ["flagcdn.com", "johnghatas.com", "localhost"],
    unoptimized: true,
  },

  webpack: (config) => {
    // Enable importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    // Fallbacks for server-side modules in the browser
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

module.exports = nextConfig;
