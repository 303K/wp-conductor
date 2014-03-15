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
            download: {
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
            config: {
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
            install: {
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
            theme: {
                options: {
                    questions: [
                        {
                            config: 'wp.theme.name',
                            type: 'input',
                            message: 'THEME_NAME:',
                            default: 'Conductor'
                        },
                        {
                            config: 'wp.theme.uri',
                            type: 'input',
                            message: 'THEME_URI:',
                        },
                        {
                            config: 'wp.theme.description',
                            type: 'input',
                            message: 'THEME_DESCRIPTION:',
                        },
                        {
                            config: 'wp.theme.author',
                            type: 'input',
                            message: 'THEME_AUTHOR:',
                        },
                        {
                            config: 'wp.theme.author.uri',
                            type: 'input',
                            message: 'THEME_AUTHOR_URI:',
                        },
                        {
                            config: 'wp.theme.version',
                            type: 'input',
                            message: 'THEME_VERSION:',
                            default: '1.0.0'
                        }
                    ]
                }
            },

            // Theme name
            theme_name : {
                options: {
                    questions: [
                        {
                            config: 'wp.theme.name',
                            type: 'input',
                            message: 'THEME_NAME:',
                            default: 'Conductor'
                        }
                    ]
                }
            },

            // Plugins
            plugins: {
                options: {
                    questions: [
                        {
                            config: 'wp.plugins',
                            type: 'checkbox',
                            message: 'WP_PLUGINS:',
                            choices: [
                                {
                                    value: 'akismet',
                                    name: 'Akismet',
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
                                },
                                {
                                    value: 'jetpack',
                                    name: 'Jetpack',
                                    checked: false
                                },
                                {
                                    value: 'posts-to-posts',
                                    name: 'Posts2posts',
                                    checked: false
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
            theme: {
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
            },

        },
        // --

        // Shell
        // ------------------------
        shell: {

            // Conduct
            conduct: {
                command: [
                    'php composer.phar self-update',
                    'php composer.phar update',
                    'bower install',
                    'bower update'
                ].join(' && '),
                options: { stdout: true }
            },

            // Download
            download: {
                command: 'php wp-cli.phar core download --locale=<%= wp.download.locale %> --version=<%= wp.download.version %> --path=wordpress --force',
                options: { stdout: true }
            },

            // Config
            config: {
                command: 'php wp-cli.phar core config --dbname=<%= wp.config.db.name %> --dbuser=<%= wp.config.db.user %> --dbpass=<%= wp.config.db.password %> --dbhost=<%= wp.config.db.host %> --dbprefix=<%= wp.config.db.prefix %> --dbcharset=<%= wp.config.db.charset %> --locale=<%= wp.config.wp.lang %> --extra-php <<< "define(\'WP_CONTENT_DIR\', dirname(__FILE__) . \'/../wp-content\');\ndefine(\'WP_CONTENT_URL\', \'<%= project.url %>/wp-content\' );"',
                options: { stdout: true }
            },

            // Install
            install: {
                command: 'php wp-cli.phar core install --url=<%= project.url %> --title=<%= project.title %> --admin_user=<%= wp.admin.name %> --admin_password=<%= wp.admin.password %> --admin_email=<%= wp.admin.email %>',
                options: { stdout: true }
            },

            // Settings
            settings: {
                command: [
                    'php wp-cli.phar option update siteurl <%= project.url %>/wordpress',
                    'php wp-cli.phar option update blogdescription ""',
                    'php wp-cli.phar theme activate <%= wp.theme.name %>',
                    'php wp-cli.phar rewrite structure "/%postname%/"',
                    'php wp-cli.phar cache flush'
                ].join(' && '),
                options: { stdout: true }
            },

            // Plugins
            plugins: {
                command: function() {
                    var plugins = this.config('wp.plugins');
                    return 'php wp-cli.phar plugin install ' + plugins.join(' ') + ' --activate --force';
                },
                options: { stdout: true }
            },

            cleanup : {
                command: 'rm wordpress/wp-config.php',
                options: { stdout: true }
            }

        },
        // --

        // Less
        // ------------------------
        less: {
            install: {
                files: {
                    "wp-content/themes/<%= wp.theme.name.toLowerCase() %>/style.css": "wp-content/themes/<%= wp.theme.name.toLowerCase() %>/style.less"
                }
            },
        }
        // --
    });

    // Plugins
    require('load-grunt-tasks')(grunt);

    // Load tasks
    grunt.loadTasks('grunt');

    // Default
    grunt.registerTask( 'default', [
        
    ] );

};