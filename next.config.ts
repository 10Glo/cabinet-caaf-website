// next.config.ts
import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // useful if you want to render svg files with next/image
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  webpack: (config) => {
    // keep your existing aliases
    config.resolve.extensionAlias = {
      ...config.resolve.extensionAlias,
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    // Find the existing Next.js file loader rule
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule?.test instanceof RegExp && rule.test.test('.svg'),
    )

    // Exclude svg from the existing file loader
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i
    }

    // Add svg handling:
    // 1. `import logoUrl from "./logo.svg?url"` => url/string for <Image />
    // 2. `import Logo from "./logo.svg"` => React component via SVGR
    config.module.rules.push(
      {
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      },
    )

    return config
  },

  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })