module.exports = function(grunt) {
	grunt.registerTask( 'download', [
		
		// Prompt
		'prompt:download',

		// Shell
		'shell:download',

	] );
};