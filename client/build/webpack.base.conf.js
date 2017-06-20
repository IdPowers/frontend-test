const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const config = require('../config');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const pages = utils.getDirectories(resolve('src/pages'));

const baseConfig = {
  entry: {},
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules', 'src'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      tether: 'tether',
      "window.jQuery": "jquery",
      "Tether": 'tether',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: eslintFriendlyFormatter,
        },
      },
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-loader',
        options: {
          root: resolve('src'),
        },
      },
      {
        test: /\.(handlebars|hbs)$/,
        loader: "handlebars-loader",
        options: {
          root: resolve('src'),
        },
      },
      {
        test: /icons\/.*\.svg?$/,
        loader: 'svg-sprite-loader',
        query: {
          name: 'icon-[name]',
          prefixize: true,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /icons\/.*\.svg?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
};

pages.forEach((page) => {
  baseConfig.entry[page] = path.resolve(__dirname,
    `../src/pages/${page}/${page}.js`);
});

module.exports = baseConfig;
