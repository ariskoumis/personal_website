var settings = require('./settings')

//Express.js configurations
var options = {
	root: settings.root
}

//A map of all endpoint handlers
var handle_map = {}

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