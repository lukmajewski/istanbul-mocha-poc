var path = require('path');

module.exports = {
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/
    }
  ]
};
