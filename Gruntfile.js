module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        prompt: {
            target: {
                options: {
                    questions: [
                        {
                            config: 'conductor.project.name',
                            type: 'input',
                            message: 'PROJECT_NAME:',
                            default: 'conductor'
                        },
                        {
                            config: 'conductor.project.url',
                            type: 'input',
                            message: 'PROJECT_URL:',
                            default: 'http://project.local/'
                        },
                        {
                            config: 'conductor.db.name',
                            type: 'input',
                            message: 'DB_NAME:',
                            default: 'wordpress'
                        },
                        {
                            config: 'conductor.db.user',
                            type: 'input',
                            message: 'DB_USER:',
                            default: 'root'
                        },
                        {
                            config: 'conductor.db.password',
                            type: 'input',
                            message: 'DB_PASSWORD:',
                            default: 'root'
                        },
                        {
                            config: 'conductor.db.host',
                            type: 'input',
                            message: 'DB_HOST:',
                            default: 'localhost'
                        },
                        {
                            config: 'conductor.db.charset',
                            type: 'input',
                            message: 'DB_CHARSET:',
                            default: 'utf8'
                        },
                        {
                            config: 'conductor.db.prefix',
                            type: 'input',
                            message: 'DB_PREFIX:',
                            default: 'wp_'
                        },
                        {
                            config: 'conductor.wp.lang',
                            type: 'input',
                            message: 'WP_LANG:',
                            default: 'nl_NL'
                        },
                        {
                            config: 'conductor.wp.debug',
                            type: 'input',
                            message: 'WP_DEBUG:',
                            default: 'true'
                        }
                    ]
                }
            },
        },
        copy: {
            main: {
                src: 'wp-config.php.dist',
                dest: 'wp-config.php',
                options: {
                    process: function (content) {
                        return content
                            .replace( "{PROJECT_URL}", grunt.config( 'conductor.project.url' ) )
                            .replace( "{DB_NAME}", grunt.config( 'conductor.db.name' ) )
                            .replace( "{DB_USER}", grunt.config( 'conductor.db.user' ) )
                            .replace( "{DB_PASSWORD}", grunt.config( 'conductor.db.password' ) )
                            .replace( "{DB_HOST}", grunt.config( 'conductor.db.host' ) )
                            .replace( "{DB_CHARSET}", grunt.config( 'conductor.db.charset' ) )
                            .replace( "{DB_COLLATE}", '' )
                            .replace( "{DB_PREFIX}", grunt.config( 'conductor.db.prefix' ) )
                            .replace( "{WP_LANG}", grunt.config( 'conductor.wp.lang' ) )
                            .replace( "{WP_DEBUG}", grunt.config( 'conductor.wp.debug' ) )
                            .replace( "{WP_KEYS}", '' );
                    }
                }
            },
        },
        concat: {
           
        },
    });

    // Plugins
    grunt.loadNpmTasks('grunt-prompt');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Taskrunners
    grunt.registerTask( 'setup', ['prompt', 'copy'] );
    grunt.registerTask( 'default', ['concat'] );
};