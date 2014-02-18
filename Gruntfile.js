module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        // Prompt
        // ------------------------
        prompt: {

            // Project
            project: {
                options: {
                    questions: [
                        {
                            config: 'project.url',
                            type: 'input',
                            message: 'PROJECT_URL:',
                            default: 'http://conductor.local'
                        }
                    ]
                }
            },

            // Download
            wp_download: {
                options: {
                    questions: [
                        {
                            config: 'wp.download.locale',
                            type: 'input',
                            message: 'WP_LOCALE:',
                            default: 'nl_NL'
                        },
                        {
                            config: 'wp.download.version',
                            type: 'input',
                            message: 'WP_VERSION:',
                            default: '3.8.1'
                        }
                    ]
                }
            },

            // Config
            wp_config: {
                options: {
                    questions: [
                        {
                            config: 'wp.config.db.name',
                            type: 'input',
                            message: 'DB_NAME:',
                            default: 'conductor'
                        },
                        {
                            config: 'wp.config.db.user',
                            type: 'input',
                            message: 'DB_USER:',
                            default: 'root'
                        },
                        {
                            config: 'wp.config.db.password',
                            type: 'input',
                            message: 'DB_PASSWORD:',
                            default: 'root'
                        },
                        {
                            config: 'wp.config.db.host',
                            type: 'input',
                            message: 'DB_HOST:',
                            default: 'localhost'
                        },
                        {
                            config: 'wp.config.db.charset',
                            type: 'input',
                            message: 'DB_CHARSET:',
                            default: 'utf8'
                        },
                        {
                            config: 'wp.config.db.prefix',
                            type: 'input',
                            message: 'DB_PREFIX:',
                            default: 'wp_'
                        },
                        {
                            config: 'wp.config.wp.lang',
                            type: 'input',
                            message: 'WP_LANG:',
                            default: 'nl_NL'
                        },
                        {
                            config: 'wp.config.wp.debug',
                            type: 'input',
                            message: 'WP_DEBUG:',
                            default: 'true'
                        }
                    ]
                }
            },

            // Install
            wp_install: {
                options: {
                    questions: [
                        {
                            config: 'project.title',
                            type: 'input',
                            message: 'WEBSITE_TITLE:',
                            default: 'Conductor'
                        },
                        {
                            config: 'wp.admin.name',
                            type: 'input',
                            message: 'ADMIN_NAME:',
                        },
                        {
                            config: 'wp.admin.password',
                            type: 'password',
                            message: 'ADMIN_PASSWORD:',
                        },
                        {
                            config: 'wp.admin.email',
                            type: 'input',
                            message: 'ADMIN_EMAIL:',
                        },
                    ]
                }
            },

            // Theme
            wp_theme: {
                options: {
                    questions: [
                        {
                            config: 'wp.theme.name',
                            type: 'input',
                            message: 'THEME_NAME:',
                            default: 'conductor'
                        }
                    ]
                }
            },

            // Plugins
            wp_plugins: {
                options: {
                    questions: [
                        {
                            config: 'wp.plugins',
                            type: 'checkbox',
                            message: 'WP_PLUGINS:',
                            choices: [
                                {
                                    value: 'jetpack',
                                    name: 'Jetpack',
                                    checked: true
                                },
                                {
                                    value: 'posts-to-posts',
                                    name: 'Posts2posts',
                                    checked: true
                                },
                                {
                                    value: 'wordpress-seo',
                                    name: 'Wordpress SEO',
                                    checked: true
                                },
                                {
                                    value: 'google-analytics-for-wordpress',
                                    name: 'Google Analytics',
                                    checked: true
                                },
                                {
                                    value: 'regenerate-thumbnails',
                                    name: 'Regenerate Thumbnails',
                                    checked: true
                                },
                                {
                                    value: 'woosidebars',
                                    name: 'Woosidebars',
                                    checked: true
                                }
                            ]
                        }
                    ]
                }
            }

        },
        // --

        // Copy
        // ------------------------
        copy: {

            // Config
            wp_config: {
                src: 'wp-config.php.dist',
                dest: 'wp-config.php',
                options: {
                    process: function(content) {
                        return content
                            .replace( "{PROJECT_URL}",  grunt.config( 'project.url' ) )
                            .replace( "{DB_NAME}",      grunt.config( 'wp.config.db.name' ) )
                            .replace( "{DB_USER}",      grunt.config( 'wp.config.db.user' ) )
                            .replace( "{DB_PASSWORD}",  grunt.config( 'wp.config.db.password' ) )
                            .replace( "{DB_HOST}",      grunt.config( 'wp.config.db.host' ) )
                            .replace( "{DB_CHARSET}",   grunt.config( 'wp.config.db.charset' ) )
                            .replace( "{DB_COLLATE}",   '' )
                            .replace( "{DB_PREFIX}",    grunt.config( 'wp.config.db.prefix' ) )
                            .replace( "{WP_LANG}",      grunt.config( 'wp.config.wp.lang' ) )
                            .replace( "{WP_DEBUG}",     grunt.config( 'wp.config.wp.debug' ) )
                            .replace( "{WP_KEYS}",      '' );
                    }
                }
            },

            // Theme
            wp_theme: {
                expand: true,
                flatten: true,
                src: 'wp-content/themes/scaffold-child/*',
                dest: 'wp-content/themes/<%= wp.theme.name %>'
            }

        },
        // --

        exec: {

            // Download
            wp_download: {
                command: 'php wp-cli.phar core download --locale=<%= wp.download.locale %>  --version=<%= wp.download.version %> --path=wordpress --force'
            },

            // Database
            wp_db_create: {
                command: 'php wp-cli.phar db create'
            },

            // Install
            wp_install: {
                command: 'php wp-cli.phar core install --url=<%= project.url %> --title=<%= project.title %> --admin_user=<%= wp.admin.name %> --admin_password=<%= wp.admin.password %> --admin_email=<%= wp.admin.email %>'
            },

            // Plugins
            wp_plugins: {
                cmd: function() {
                    var plugins = this.config('wp.plugins');

                    return 'php wp-cli.phar plugin install ' + plugins.join(' ') + ' --activate --force';
                }
            }

        }
        // --
    });

    // Plugins
    require('load-grunt-tasks')(grunt);

    // Load tasks
    grunt.loadTasks('grunt');

    // Default
    grunt.registerTask( 'default', [
        'concat'
    ] );

};