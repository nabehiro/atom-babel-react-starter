var webpack = require("webpack");
var WebpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config");

var port = 3000
var proxy = {
  '/api/*': 'http://localhost:24273'
}

// config.entry results in [
//   'webpack-dev-server/client?http://localhost:3000',
//   'webpack/hot/dev-server',
//   './src/main.js'
// ]
config.entry.unshift('webpack/hot/dev-server')
config.entry.unshift(`webpack-dev-server/client?http://localhost:${port}`)

config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
  noInfo: true,
  stats: {
    colors: true
  },
  proxy: proxy
}).listen(port);

console.log(`[webpack-dev-server] http://localhost:${port}`)
for(var key in proxy) {
  console.log(`[proxy] http://localhost:${port}${key} => ${proxy[key]}${key}`)
}
