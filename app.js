var express = require('express')
var path = require('path')
var server = require('./server')

var app = express()



app.set('view engine','jade')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res) {
	res.render('index')
})

app.use('/server', server);

app.listen(3333)