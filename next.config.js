/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "th", "zh", "ru"],
    defaultLocale: "en",
  },
});

module.exports = nextConfig;
