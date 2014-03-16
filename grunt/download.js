module.exports = function(grunt) {
	grunt.registerTask( 'wp-download', [
		
		// Prompt
		'prompt:download',

		// Shell
		'shell:download',

	] );
};