module.exports = function(grunt) {
	grunt.registerTask( 'wp-settings', [
		
		// Prompt
		'prompt:project',
		'prompt:theme_name',

		// Shell
		'shell:settings',

	] );
};