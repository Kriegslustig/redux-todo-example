var path = require('path')

var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

var dev = process.env.NODE_ENV !== 'production'

var plugins = []

if (!dev) {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
  plugins.push(new webpack.optimize.DedupePlugin())
}

var sourcePath = path.resolve(__dirname, 'src')

module.exports = {
  entry: {
    main: './src/index.jsx'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [
      { test: /\.jsx$/, include: [ sourcePath ], loader: 'babel?presets[]=es2015&presets[]=react&cacheDirectory' },
      { test: /\.json/, include: [ sourcePath ], loader: 'json' },
      {
        test: /\.css$/,
        loader: (
          dev
            ? 'style!css?-minimize&-url!postcss'
            : 'style!css?minimize&-url!postcss'
        )
      }
    ]
  },

  devtool: dev
    ? '#source-map'
    : '',

  plugins: plugins,
  postcss: function () { return [ autoprefixer ] }
}

