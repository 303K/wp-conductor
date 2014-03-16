module.exports = function(grunt) {
	grunt.registerTask( 'wp-config', [
		
		// Prompt
		'prompt:project',
		'prompt:config',

		// Shell
		'shell:config',

		// Copy
		'copy:config',

		// Cleanup
		'shell:cleanup'

	] );
};