module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			js: {
				files: ["Gruntfile.js", "public/js/*.js", "public/util/*.js"],
				options : {
					livereload: true
				}
			},
			other: {
				files: ["public/css/*.css", "public/index.html"],
				options : {
					livereload: true
				}
			},
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.registerTask('default', ['watch'])
}