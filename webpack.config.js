const path = require('path');
const entry = require('webpack-glob-entry');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
      },
    ],
  },
  plugins: [new WebpackAssetsManifest()],
};
