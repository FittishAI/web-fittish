let userConfig = undefined
try {
  // Try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    // Fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // Ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Set to true for static export to avoid image optimization during build
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  output: 'export', // Static export configuration for Next.js
  basePath: '/web-fittish', // Set the base path to match your GitHub repository name
  assetPrefix: '/web-fittish/', // Set asset prefix to match the repository path

  // Add these for correct static asset handling
  trailingSlash: true, // Ensures URL paths have trailing slashes for static files
};

if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
