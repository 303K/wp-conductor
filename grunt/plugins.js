module.exports = function(grunt) {
	grunt.registerTask( 'plugins', [

		// Prompt
		'prompt:wp_plugins', 
		
		// Shell
		'shell:wp_plugins',

	] );
};