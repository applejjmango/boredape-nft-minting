module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}
