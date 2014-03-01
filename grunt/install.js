module.exports = function(grunt) {
	grunt.registerTask( 'install', [

		// Prompt
		'prompt:project', 
		'prompt:wp_download',
		'prompt:wp_config', 
		'prompt:wp_install', 
		'prompt:wp_theme',
		'prompt:wp_plugins', 
		
		// Exec
		'exec:wp_download',
		'exec:wp_config',
		'exec:wp_install',
		'exec:wp_siteurl',
		'exec:wp_plugins',

		// Copy
		'copy:wp_theme', 

	] );
};