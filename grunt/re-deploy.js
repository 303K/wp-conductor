module.exports = function(grunt) {
	grunt.registerTask( 're-deploy', [

		// Prompt
		'prompt:project', 
		'prompt:download',
		'prompt:config', 
		'prompt:plugins', 
		
		// Shell
		'shell:conduct',
		'shell:download',
		'shell:config',
		'shell:plugins',

		// Copy
		'copy:config',

		// Cleanup
		'shell:cleanup'

	] );
};