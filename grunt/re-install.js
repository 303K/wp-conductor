module.exports = function(grunt) {
	grunt.registerTask( 're-install', [

		// Prompt
		'prompt:project', 
		'prompt:download',
		'prompt:config', 
		'prompt:plugins', 
		
		// Shell
		'shell:download',
		'shell:config',
		'shell:plugins',

		// Copy
		'copy:config.php'

	] );
};