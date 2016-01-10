var webpack = require('webpack')

module.exports = {
  entry: [ './src/main.js' ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /(\.jsx|\.js)$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }],
    loaders: [{
      test: /(\.jsx|\.js)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: [ 'react', 'es2015' ]
      }
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    root: './src',
    extensions: [ '', '.js', '.jsx' ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
