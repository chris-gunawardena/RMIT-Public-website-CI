/*global module:false*/
module.exports = function(grunt) {


    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-phantomcss');
	// Project configuration.
	grunt.initConfig({
		phantomcss: {
			desktop:{
				options: {
					screenshots: 'test/phantomcss/screenshots/desktop/',
					results: 'test/phantomcss/results/desktop/',
					//viewportSize: [1024, 768],//should be the default
					errorType: 'movement',
					transparency: 0.3,
					errorColor: {
						red: 255,
						green: 255,
						blue: 0
					}					
				},
				src: [  'test/phantomcss/tests.js' ]
			},
			tablet:{
				options: {
					screenshots: 'test/phantomcss/screenshots/tablet/',
					results: 'test/phantomcss/results/tablet/',
					viewportSize: [600, 800]
				},
				src: [  'test/phantomcss/tests.js' ]
			},
			mobile:{
				options: {
					screenshots: 'test/phantomcss/screenshots/mobile/',
					results: 'test/phantomcss/results/mobile/',
					viewportSize: [320, 480]
				},
				src: [  'test/phantomcss/tests.js' ]
			}			
		},

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	//grunt.loadNpmTasks('grunt-contrib-nodeunit');
	//grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['phantomcss']);

};
