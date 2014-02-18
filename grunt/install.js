module.exports = function(grunt) {
	grunt.registerTask( 'install', [

		// Prompt
		'prompt:project', 
		'prompt:wp_download',
		'prompt:wp_config', 
		'prompt:wp_install', 
		'prompt:wp_theme', 
		
		// Exec
		'exec:wp_download',
		'exec:wp_config',
		'exec:wp_db_create',
		'exec:wp_install',

		// // Copy
		'copy:wp_config', 
		'copy:wp_theme', 

	] );
};