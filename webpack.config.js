var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8881/',
      './app/App.js'
    ]
  },

  output: {
    filename: 'public/js/main.js',
    sourceMapFilename: 'main.js.map'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    modulesDirectories: ['node_modules']
  },

  module: {
    preloaders: [
      { test: /\.jsx$|\.es6$|\.js$/, loader: 'source-map', query: { presets: ['react', 'es2015'] }, exclude: /(node_modules|bower_components)/ }
    ],
    loaders: [
      { test: /\.jsx$|\.es6$|\.js$/, loader: 'babel', query: { presets: ['react', 'es2015'] }, exclude: /(node_modules|bower_components)/ },
      { test: /\.scss$|\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader') },
      { test: /\.jpe?g$|\.png$|\.gif$|\.svg$/, loader: 'url?limit=8192!img' }
    ]
  },

  devtool: "eval",

  postcss: function() {
    return [autoprefixer, precss];
  },

  plugins: [
    new ExtractTextPlugin( 'public/styles.css', {
      allChunks: true
    } )
  ]
};
