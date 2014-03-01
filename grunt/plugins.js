module.exports = function(grunt) {
	grunt.registerTask( 'plugins', [

		// Prompt
		'prompt:wp_plugins', 
		
		// Exec
		'exec:wp_plugins',

	] );
};