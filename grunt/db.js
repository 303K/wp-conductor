module.exports = function(grunt) {
	grunt.registerTask( 'db', [

		// Prompt
		'prompt:project', 
		'prompt:wp_config', 
		
		// Exec
		'exec:wp_db_create',

	] );
};