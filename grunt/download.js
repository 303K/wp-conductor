module.exports = function(grunt) {
	grunt.registerTask( 'download', [
		
		// Prompt
		'prompt:wp_download',

		// Shell
		'shell:wp_download',

	] );
};