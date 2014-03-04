module.exports = function(grunt) {
	grunt.registerTask( 'settings', [
		
		// Prompt
		'prompt:project',
		'prompt:theme_name',

		// Shell
		'shell:settings',

	] );
};