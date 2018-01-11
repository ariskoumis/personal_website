var path = require('path')

module.exports = {
	context: path.join(__dirname, "public"),
	entry: './js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js']
	}
}