module.exports = function(grunt) {
	grunt.registerTask( 'scaffold', [

		// Prompt
		'prompt:scaffold',

		// Copy
		'copy:scaffold',

		// Cleanup
		'shell:cleanup'

	] );
};