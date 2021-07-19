const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'client/dist'),
    port: 80
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ]
  }
};