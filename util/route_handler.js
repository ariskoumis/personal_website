var settings = require('./settings')
var path = require('path')

//Express.js configurations
var options = {
	root: settings.dist_dir
}

//A map of all endpoint handlers
var handle_map = {}

// BEGIN Handler Functions
/*	
	@function	rootHandler
	@parameter	request - the web request object provided by express.js
	@parameter	response - the web response object provided by express.js
	@returns	n/a
	@details 	This function handles all requests for the server root ("/"). Used on a GET request
*/
handle_map.rootHandler = function(request, response) {
	response.set("Content-Type", "text/html")
	response.sendFile("index.html", options, function(error) {
		if (error) {
			console.log(error)
			response.status(500).end()
		}
		else {
			response.end()
		}
	})
}

module.exports = handle_map