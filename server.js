var express = require('express')
var path = require('path')
var app = express()

var handles = require(path.resolve(__dirname, "util/route_handler.js"))
var settings = require(path.resolve(__dirname, "util/settings.js"))

//Home Page
app.get('/', handles.rootHandler)

//Serve the files in the dist folder
app.use(express.static(settings.dist_dir))

//Host project on designated local port 
app.listen(settings.port, function() {
	console.log(`Hosting on ${settings.port}`)
})