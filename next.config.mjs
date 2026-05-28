/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true
  // Keep the default Node.js server output. Do not use output: "export":
  // this project has an API route and is intended to run with npm run start on a VPS.
};

export default nextConfig;
