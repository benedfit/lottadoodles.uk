const withPlugins = require('next-compose-plugins')
const withSvgr = require('@newhighsco/next-plugin-svgr')
const withVideos = require('next-videos')

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  generateBuildId: () => 'build',
  images: {
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  poweredByHeader: false,
  redirects: () => [
    {
      source: '/college/:slug*',
      destination:
        'https://charlotte8539.wixsite.com/charlotteeanimation/:slug*',
      permanent: true
    }
  ],
  transpilePackages: ['@newhighsco/chipset', '@newhighsco/press-start'],
  webpack: config => {
    config.module.rules.push({
      test: /\.(txt|xml|woff(2)?)$/,
      use: 'file-loader'
    })

    return config
  }
}

module.exports = withPlugins(
  [[withSvgr, { inlineImageLimit: -1 }], [withVideos]],
  nextConfig
)
