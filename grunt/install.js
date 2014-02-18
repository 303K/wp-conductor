module.exports = function(grunt) {
	grunt.registerTask( 'install', [

		// Prompt
		// 'prompt:project', 
		'prompt:wp_download',
		// 'prompt:wp_config', 
		// 'prompt:wp_install', 
		// 'prompt:wp_theme', 

		// // Copy
		// 'copy:wp_config', 
		// 'copy:theme', 

		// // Http
		// 'http:install'
		
		// Exec
		'exec:wp_download'

	] );
};