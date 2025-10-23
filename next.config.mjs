// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* your existing config options */
  reactCompiler: true,
  experimental: {
    turbo: false, // disable Turbopack on Windows
  },
};

export default nextConfig;
