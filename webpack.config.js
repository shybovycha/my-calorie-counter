var webpack = require('webpack');

module.exports = {
  entry:  __dirname + '/src/main.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest', 'react', 'stage-2']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
};
