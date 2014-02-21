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
		'exec:wp_config_',
		'exec:wp_config',
		'exec:wp_install',
		'exec:wp_siteurl',
		'exec:wp_config_',

		// // Copy
		'copy:wp_config', 
		'copy:wp_theme', 

	] );
};