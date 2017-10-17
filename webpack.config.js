module.exports = {
    entry: [
      './lib/index.js'
    ],
    module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    }
};