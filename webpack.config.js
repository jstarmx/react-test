const webpack = require('webpack');
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
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: PATHS.scripts,
        loader: 'babel',
      },
    ]
  },
};

module.exports = config;
