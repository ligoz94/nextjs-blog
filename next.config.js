const webpack = require('webpack')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['static.ghost.org', 'digitalpress.fra1.cdn.digitaloceanspaces.com'],
  },
  webpack(config, options) {
    if (!options.isServer) {
      if ('sassOptions' in config) {
        config.sassOptions = {
          includePaths: ['./styles'],
          prependData: '@import "styles/mixins.scss";',
        }
      }
      config.resolve.fallback = { fs: false }
      config.plugins.push(
        new webpack.DefinePlugin({
          process: { env: {} },
        }),
      )
      config.optimization = {
        minimize: false,
        splitChunks: {
          chunks: 'all',
          // cacheGroups: {
          //   default: false,
          //   vendors: false,
          //   framework: {
          //     name: 'framework',
          //     chunks: 'all',
          //     test: /[\\/]node_modules[\\/]/,
          //     priority: 20,
          //     minChunks: 2,
          //     reuseExistingChunk: true,
          //   },
          // },
        },
      }
    }
    return config
  },
})
