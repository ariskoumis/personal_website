var settings = require('./settings')

//Express.js configurations
var options = {
	root: settings.root
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
handle_map.rootHandler = function (request, response) {			// GET request on root dir (login page-> index.html)
	response.set("Content-Type", "text/html");
	response.sendFile("index.html", options, function (error) {
		if (error) {
			logger.log(error);
			response.status(500).end();
		} else {
			logger.log(`Sent index.html to ${settings.port}`);
			response.end();
		}
	});
};
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