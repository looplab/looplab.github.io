const path = require('path')
const webpack = require('webpack')

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map',

  entry: [
    // Listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // Hot reloader.
    'react-hot-loader/patch',
    // App entry point.
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
        test: /\.tsx?$/,
        loader: 'ts',
      },
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
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  postcss: (webpack) => {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
      }),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8'],
      }),
      require('precss'),
    ]
  },
}
