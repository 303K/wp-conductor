module.exports = function(grunt) {
	grunt.registerTask( 'install', [

		// Prompt
		'prompt:project', 
		'prompt:download',
		'prompt:config', 
		'prompt:install', 
		'prompt:theme',
		'prompt:plugins', 
		
		// Shell
		'shell:download',
		'shell:config',
		'shell:install',
		'shell:plugins',

		// Copy
		'copy:config',
		'copy:theme',
		'copy:stylesheet',

		// Less
		'less:install',

		// Cleanup
		'shell:settings',
		'shell:cleanup'

	] );
};