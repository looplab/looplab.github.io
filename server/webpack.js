import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDev from 'webpack-dev-middleware'
import webpackHot from 'webpack-hot-middleware'

import config from '../webpack.config.dev'

const app = express()

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config)

  app.use(webpackDev(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {colors: true},
  }))

  app.use(webpackHot(compiler))
}

app.use('/static', express.static('static'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(3000, function(err) {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    return
  }

  // eslint-disable-next-line no-console
  console.log('Listening at http://localhost:3000')
})
