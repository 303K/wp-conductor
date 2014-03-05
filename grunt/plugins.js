module.exports = function(grunt) {
	grunt.registerTask( 'plugins', [

		// Prompt
		'prompt:plugins', 
		
		// Shell
		'shell:plugins',

	] );
};