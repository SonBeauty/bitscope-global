/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["i.imgur.com"],
  },
  env: {
    SERVER: process.env.SERVER,
    WEBSITE: process.env.WEBSITE,
  },
};

module.exports = nextConfig;
