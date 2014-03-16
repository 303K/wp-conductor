module.exports = function(grunt) {
	grunt.registerTask( 'wp-plugins', [

		// Prompt
		'prompt:plugins', 
		
		// Shell
		'shell:plugins',

	] );
};