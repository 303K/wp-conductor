module.exports = function(grunt) {
	grunt.registerTask( 'wp-update', [
		
		// Shell
		'shell:update',

		// Cleanup
		'shell:cleanup'

	] );
};