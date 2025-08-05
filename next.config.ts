import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV !== 'production';

const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
  webpack: (config, { isServer }) => {
    // Modify the webpack config here
    return config
  },
  basePath: isDev ? '' : '/simple-react-gallery',
  images: {
    unoptimized: true,
  },
}

export default nextConfig