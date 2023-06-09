/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["i.imgur.com"],
  },
  env: {
    SERVER: process.env.SERVER,
    WEBSITE: process.env.WEBSITE,
    TWITTER: process.env.TWITTER,
  },
};

module.exports = nextConfig;
