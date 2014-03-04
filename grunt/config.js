module.exports = function(grunt) {
	grunt.registerTask( 'config', [
		
		// Prompt
		'prompt:project',
		'prompt:config',

		// Shell
		'shell:config',

	] );
};