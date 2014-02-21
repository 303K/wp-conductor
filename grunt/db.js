module.exports = function(grunt) {
	grunt.registerTask( 'db', [

		// Prompt
		'prompt:project', 
		'prompt:wp_config', 
		
		// Exec
		'exec:wp_config_',
		'exec:wp_config',		
		'exec:wp_db_create',
		'exec:wp_config_'

	] );
};