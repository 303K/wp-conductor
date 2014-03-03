module.exports = function(grunt) {
	grunt.registerTask( 'config', [
		
		// Prompt
		'prompt:project',
		'prompt:wp_config',

		// Shell
		'shell:wp_config',

	] );
};