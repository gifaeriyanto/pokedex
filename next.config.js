const withCss = require('@zeit/next-css');
const path = require('path');

const aliases = {
  Components: path.resolve(__dirname, 'components/'),
  Containers: path.resolve(__dirname, 'components/containers'),
  Elements: path.resolve(__dirname, 'components/elements/'),
  Utils: path.resolve(__dirname, 'components/utilities/'),
  Layout: path.resolve(__dirname, 'components/pageLayouts/'),
  Hocs: path.resolve(__dirname, 'hocs/'),
  Routes: path.resolve(__dirname, 'config/routes'),
};

module.exports = withCss({
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },

  // Webpack
  webpack: (config) => {
    // Resolve path
    const reconfig = config;
    reconfig.resolve = {
      ...reconfig.resolve,
      extensions: [...reconfig.resolve.extensions, '.scss', '.css', '.mdx'],
      alias: { ...reconfig.resolve.alias, ...aliases },
    };

    reconfig.node = {
      ...reconfig.node,
      fs: 'empty',
    };

    return reconfig;
  },
});
