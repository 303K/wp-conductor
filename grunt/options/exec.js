module.exports = function(grunt) {
    return {
    	wp_download: {
    		command: 'wp core download --locale=<%= wp.download.locale %>  --version=<%= wp.download.version %>'
    	}
    }
}