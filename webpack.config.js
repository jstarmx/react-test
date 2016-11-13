const webpack = require('webpack');
const html = require('html-webpack-plugin');
const path = require('path');

const PATHS = {
  build: path.join(__dirname, 'public'),
  scripts: path.join(__dirname, 'app', 'scripts'),
  views: path.join(__dirname, 'app', 'views'),
};

const config = {
  entry: path.join(PATHS.scripts, 'app.js'),
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new html({
      title: 'Bloop bloop',
      template: path.join(PATHS.views, 'index.ejs'),
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: PATHS.scripts,
        loader: 'babel',
      },
      {
        test: /\.ejs$/,
        include: PATHS.views,
        loader: 'ejs',
      },
    ]
  },
};

module.exports = config;
