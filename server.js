var express = require('express')
var app = express()

var handles = require(__dirname + "/util/route_handler.js") 
var settings = require(__dirname + "/util/settings.js")

app.listen(settings.port, function() {
	console.log(`Hosting on ${settings.port}`)
})

app.get('/', handles.rootHandler)

app.use(express.static(settings.root))
