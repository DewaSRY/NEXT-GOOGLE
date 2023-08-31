/** @type {import('next').NextConfig} */
const withImages = require("next-images");
module.exports = withImages();
const nextConfig = {
  images: {
    domains: ["th.bing.com"],
  },
};

module.exports = nextConfig;
