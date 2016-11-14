require('babel-register')

var server = require('./server.dev.js')
var config = require('./webpack.config.dev.js')

server(config)