module.exports = function(grunt) {
	grunt.registerTask( 'config', [
		
		// Prompt
		'prompt:wp_config',

		// Exec
		'exec:wp_config',

	] );
};