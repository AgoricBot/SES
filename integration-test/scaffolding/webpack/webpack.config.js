const path = require('path');

module.exports = {
  mode: 'development',
  entry: './transform-tests/output/test.esm.js',
  output: {
    path: path.resolve(__dirname, '../../bundles/'),
    filename: 'webpack.js',
  },
  node: {
    fs: 'empty',
  },
  optimization: {
    minimize: false,
    namedModules: true,
  },
};
