module.exports = function(grunt) {

    // Config
    var config = {  
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            // Config
            config: {
                src: 'wordpress/wp-config.php',
                dest: 'wp-config.php',
                options: {
                    process: function(content) {
                        return content.replace( "/../wp-content", "/wp-content" );
                    }
                }
            },

            // Theme
            scaffold: {
                expand: true,
                cwd: 'wp-content/themes/scaffold-child/',
                src: ['**/*'],
                dest: 'wp-content/themes/<%= wp.theme.name.toLowerCase() %>/'
            },

            // Theme stylesheet
            stylesheet: {
                src: 'wp-content/themes/<%= wp.theme.name.toLowerCase() %>/style.less',
                dest: 'wp-content/themes/<%= wp.theme.name.toLowerCase() %>/style.less',
                options: {
                    process: function(content) {
                        return content
                            .replace( "{THEME_NAME}",           grunt.config( 'wp.theme.name' ) )
                            .replace( "{THEME_URI}",            grunt.config( 'wp.theme.uri' ) )
                            .replace( "{THEME_DESCRIPTION}",    grunt.config( 'wp.theme.description' ) )
                            .replace( "{THEME_AUTHOR}",         grunt.config( 'wp.theme.author' ) )
                            .replace( "{THEME_AUTHOR_URI}",     grunt.config( 'wp.theme.author.uri' ) )
                            .replace( "{THEME_VERSION}",        grunt.config( 'wp.theme.version' ) );
                    }
                }
            }
        }
    };

    // Extend config
    grunt.util._.extend(config, loadConfig('./grunt/config/'));

    // Set config
    grunt.initConfig(config);

    // Plugins
    require('load-grunt-tasks')(grunt);

    // Load tasks
    grunt.loadTasks('grunt');

    // Default
    grunt.registerTask( 'default', [] );

};

// Helper function to load config from folder
function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', { cwd: path }).forEach(function(option) {
        key = option.replace(/\.js$/,'');
        object[key] = require(path + option);
    });

    return object;
}