/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
  disableDevLogs: true,
});
const nextConfig = {
  output: "standalone",
  env: {
    APP_URL: "http://localhost:3000",
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withPWA({
  ...nextConfig,
});
