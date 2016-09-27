const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index',
  ],

  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
        ],
      },
      {
        test: /\.(svg|png)$/,
        loader: 'url',
      },
      {
        test: /\.woff$/,
        loader: 'url?limit=100000',
      },
      {
        test: /\.json/,
        loader: 'json',
      },
    ],
  },

  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],

  postcss: (webpack) => {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
      }),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8'],
      }),
    ]
  },
}
