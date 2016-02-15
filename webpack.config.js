var webpack = require('webpack');

module.exports = {
  entry: {
    'vagrant-react-webpack': [
      'webpack-dev-server/client?http://localhost:8881/',
      './app/App.js'
    ]
  },
  output: {
    filename: 'public/main.js',
    sourceMapFilename: 'public/main.js.map'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      { test: /\.jsx$|\.es6$|\.js$/, loader: 'babel', query: { presets: ['react', 'es2015'] }, exclude: /(node_modules|bower_components)/ },
      { test: /\.scss$|\.css$/, loader: 'style-loader!style!css!sass' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devtool: "eval-source-map"
};