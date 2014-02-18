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
            }

        },
        // --

        // Copy
        // ------------------------
        copy: {

            // Config
            wp_config: {
                expand: true,
                flatten: true,
                src: 'wordpress/wp-config.php',
                dest: './'
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

            // Config
            wp_config: {
                command: 'php wp-cli.phar core config --dbname=<%= wp.config.db.name %>  --dbuser=<%= wp.config.db.user %> --dbpass=<%= wp.config.db.password %> --dbhost=<%= wp.config.db.host %> --dbprefix=<%= wp.config.db.prefix %> --dbcharset=<%= wp.config.db.charset %> --locale=<%= wp.config.wp.lang %>'
            },

            // Database
            wp_db_create: {
                command: 'php wp-cli.phar db create'
            },

            // Install
            wp_install: {
                command: 'php wp-cli.phar core install --url=<%= project.url %> --title=<%= project.title %> --admin_user=<%= wp.admin.name %> --admin_password=<%= wp.admin.password %> --admin_email=<%= wp.admin.email %>'
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