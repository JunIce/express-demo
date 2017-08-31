var express = require('express')
var path = require('path')
var router = require('./router')

var server = express()
server.set('views', path.join(__dirname , 'project'))
server.set('view engine', 'jade')

server.use(express.static('./asset'))

server.get('/',function(req,res) {
	res.render('index', router.index)
})

server.get(/^\/info\/(\w+)$/ ,function(req,res) {
	var page = req.params[0];
	res.render(page)
})

module.exports = server;


