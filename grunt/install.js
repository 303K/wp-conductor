module.exports = function(grunt) {
	grunt.registerTask( 'install', [

		// Prompt
		'prompt:project', 
		'prompt:wp_download',
		'prompt:wp_config', 
		'prompt:wp_install', 
		'prompt:wp_theme',
		'prompt:wp_plugins', 
		
		// Shell
		'shell:wp_download',
		'shell:wp_config',
		'shell:wp_install',
		'shell:wp_settings',
		'shell:wp_plugins',

		// Copy
		'copy:wp_theme',
		'copy:wp_theme_stylesheet',

		// Less
		'less:install'

	] );
};