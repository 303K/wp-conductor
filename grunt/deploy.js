module.exports = function(grunt) {
	grunt.registerTask( 'deploy', [

		// Prompt
		'prompt:project', 
		'prompt:download',
		'prompt:config', 
		'prompt:install', 
		'prompt:scaffold',
		'prompt:plugins', 
		
		// Shell
		'shell:conduct',
		'shell:download',
		'shell:config',
		'shell:install',
		'shell:plugins',

		// Copy
		'copy:config',
		'copy:scaffold',
		'copy:stylesheet',

		// Less
		'less:scaffold',

		// Settings
		'shell:settings',

		// Cleanup
		'shell:cleanup'

	] );
};