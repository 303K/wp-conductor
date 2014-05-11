module.exports = function(grunt) {
	grunt.registerTask( 'wp-install', [

		// Prompt
		'prompt:install', 
		
		// Shell
		'shell:install',

		// Cleanup
		'shell:cleanup'

	] );
};