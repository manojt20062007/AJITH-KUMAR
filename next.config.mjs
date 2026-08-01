/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/AJITH-KUMAR" : "",
  images: { unoptimized: true },
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // The dev-tools badge would leak into reviewer/validator screenshots.
  devIndicators: false,
};
export default nextConfig;
