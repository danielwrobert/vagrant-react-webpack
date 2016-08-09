var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var autoprefixer = require( 'autoprefixer' );
var precss = require( 'precss' );
var svgo = require( 'postcss-svgo' );
var path = require( 'path' );

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8881/',
      './app/App.js'
    ]
  },

  output: {
    path: path.resolve( __dirname, 'public' ),
    publicPath: '/js/',
    filename: 'main.js',
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
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },
      { test: /\.jpe?g$|\.png$|\.gif$|\.svg$/, loader: 'url?limit=8192!img' }
    ]
  },

  devtool: "eval",

  postcss: function() {
    return [
        autoprefixer( { browsers: ['last 2 versions'] } ),
        precss,
        svgo( {
            plugins: [{
                removeDoctype: false
            }, {
                removeComments: false
            }, {
                cleanupNumericValues: {
                    floatPrecision: 2
                }
            }, {
                convertColors: {
                    names2hex: false,
                    rgb2hex: false
                }
            }]
        } )
    ];
  },

  plugins: [
    new ExtractTextPlugin( 'public/styles.css', {
      allChunks: true
    } )
  ]
};
