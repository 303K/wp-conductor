module.exports = function(grunt) {
	grunt.registerTask( 'config', [
		
		'prompt:wp_config',
		'exec:wp_config',

	] );
};