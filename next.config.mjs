/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true // Required for <Image> to work in static mode
  }
};

export default nextConfig;
