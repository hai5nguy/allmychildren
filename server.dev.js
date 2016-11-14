import express         		from 'express'
import path 				from 'path'
import webpack 				from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

var server = function (config) {

	var app = express()
	var compiler = webpack(config)

	var devMiddleware = webpackDevMiddleware(compiler, {
		hot: true,
		publicPath: config.output.publicPath,
		stats: { chunks: false, colors: true }
	})

	app.use(devMiddleware)

	app.use(webpackHotMiddleware(compiler))

	var port = process.env.PORT || 7000
	var env = process.env.NODE_ENV || 'LOCAL'

	app.listen(port, () => {
		console.log('===================================================================================')
		console.log(`Server Online. Port: ${port}. Environment: ${env}`)
		console.log('===================================================================================')
	    console.log('webpack building...')
	})

}

module.exports = server


