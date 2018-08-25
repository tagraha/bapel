const path = require('path');
const entry = require('webpack-glob-entry');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
        ]
      },
    ],
  },
  plugins: [
    new WebpackAssetsManifest(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin()
    ]
  }
};