module.exports = function(grunt) {
	grunt.registerTask( 'scaffold', [

		// Prompt
		'prompt:scaffold',

		// Copy
		'copy:scaffold',
		'copy:stylesheet',

		// Less
		'less:scaffold',

		// Cleanup
		'shell:cleanup'

	] );
};