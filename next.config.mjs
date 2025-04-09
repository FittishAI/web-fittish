let userConfig = undefined;
try {
  // Try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // Fallback to CJS import
    userConfig = await import('./v0-user-next.config');
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
    // Enable image optimization for SSR
    unoptimized: false,  // Make sure images are optimized for SSR
    domains: ['example.com'], // Add domains of any external images you need
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },

  // No longer need 'target: serverless'
  // Removed static export configuration
  output: 'standalone', // Enable standalone for serverless deployment (Netlify)

  // Ensure server-side routing and SSR rendering work
  basePath: '/web-fittish', // If your app is deployed under this subpath
  assetPrefix: '/web-fittish', // Set asset prefix if necessary

  // Enable trailing slash if needed for routing
  trailingSlash: false, // You might want to set to `false` for SSR URLs

  // Additional config can go here
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
