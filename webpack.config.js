var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var config = {
  entry: './index.js',
  output: {
    path: __dirname + "/",
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 9020,
      server: { baseDir: ['.'] }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
module.exports = config;