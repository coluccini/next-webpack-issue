/* eslint-disable  import/no-extraneous-dependencies */
const SentryPlugin = require('@sentry/webpack-plugin');

module.exports = {
  // Webpack configuration
  webpack: (config, { dev, buildId }) => {
    if (!dev) {
      config.devtool = 'source-map'; // eslint-disable-line no-param-reassign
      config.plugins.push(new SentryPlugin({
        release: '1',
        include: './.next',
        urlPrefix: `~/_next/${buildId}/`,
      }));
    }

    return config;
  },
};
