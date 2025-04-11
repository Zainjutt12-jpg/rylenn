/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // This disables built-in Image Optimization
  },
  // output: 'export',
};

module.exports = nextConfig;
