const path = require('path');
const entry = require('webpack-glob-entry');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  entry: entry('./assets/**/*.*'),
  output: {
    path: path.resolve('./dist/public/'),
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [new WebpackAssetsManifest()],
};
