import type { NextConfig } from 'next'
import path from 'node:path';

const isDev = process.env.NODE_ENV !== 'production';

const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
  webpack: (config, { isServer }) => {
    // Modify the webpack config here
    return config
  },
  turbopack: {
    root: path.join(__dirname, '..'),
  },
  basePath: isDev ? '' : '/simple-react-gallery',
  images: {
    unoptimized: true,
  },
}

export default nextConfig