module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        prompt: {
            wp_config: {
                options: {
                    questions: [
                        {
                            config: 'conductor.db.name',
                            type: 'input',
                            message: 'DB_NAME:',
                            default: 'conductor'
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
            install: {
                options: {
                    questions: [
                        {
                            config: 'conductor.website.title',
                            type: 'input',
                            message: 'WEBSITE_TITLE:',
                            default: 'Conductor'
                        },
                        {
                            config: 'conductor.user.name',
                            type: 'input',
                            message: 'USER_NAME:',
                            default: 'user'
                        },
                        {
                            config: 'conductor.user.password',
                            type: 'password',
                            message: 'USER_PASSWORD:',
                            default: 'password'
                        },
                    ]
                }
            },
            theme: {
                options: {
                    questions: [
                        {
                            config: 'conductor.theme.name',
                            type: 'input',
                            message: 'THEME_NAME:',
                            default: 'conductor'
                        }
                    ]
                }
            },
            url: {
                options: {
                    questions: [
                        {
                            config: 'conductor.project.url',
                            type: 'input',
                            message: 'PROJECT_URL:',
                            default: 'http://conductor.local'
                        }
                    ]
                }
            },
            login: {
                options: {
                    questions: [
                        {
                            config: 'conductor.user.name',
                            type: 'input',
                            message: 'USER_NAME:',
                            default: 'user'
                        },
                        {
                            config: 'conductor.user.password',
                            type: 'password',
                            message: 'USER_PASSWORD:',
                            default: 'password'
                        },
                    ]
                }
            },
            create_user: {
                options: {
                    questions: [
                        {
                            config: 'conductor.user.name',
                            type: 'input',
                            message: 'USER_NAME:',
                            default: 'user'
                        },
                        {
                            config: 'conductor.user.email',
                            type: 'input',
                            message: 'USER_EMAIL:',
                            default: 'user@example.com'
                        },
                        {
                            config: 'conductor.user.password',
                            type: 'password',
                            message: 'USER_PASSWORD:',
                            default: 'password'
                        },
                        {
                            config: 'conductor.user.user.role',
                            type: 'list',
                            message: 'USER_ROLE:',
                            choices: [
                                { name: 'Subscriber', value: 'subscriber', checked: true },
                                { name: 'Contributor', value: 'contributor' },
                                { name: 'Author', value: 'author' },
                                { name: 'Editor', value: 'editor' },
                                { name: 'Administrator', value: 'administrator' },
                            ],
                            default: 'subscriber'
                        },
                        {
                            config: 'conductor.user.password.send',
                            type: 'input',
                            message: 'SEND_PASSWORD:',
                            default: 1
                        },
                    ]
                }
            }
        },
        copy: {
            wp_config: {
                src: 'wp-config.php.dist',
                dest: 'wp-config.php',
                options: {
                    process: function(content) {
                        return content
                            .replace( "{PROJECT_URL}",  grunt.config( 'conductor.project.url' ) )
                            .replace( "{DB_NAME}",      grunt.config( 'conductor.db.name' ) )
                            .replace( "{DB_USER}",      grunt.config( 'conductor.db.user' ) )
                            .replace( "{DB_PASSWORD}",  grunt.config( 'conductor.db.password' ) )
                            .replace( "{DB_HOST}",      grunt.config( 'conductor.db.host' ) )
                            .replace( "{DB_CHARSET}",   grunt.config( 'conductor.db.charset' ) )
                            .replace( "{DB_COLLATE}",   '' )
                            .replace( "{DB_PREFIX}",    grunt.config( 'conductor.db.prefix' ) )
                            .replace( "{WP_LANG}",      grunt.config( 'conductor.wp.lang' ) )
                            .replace( "{WP_DEBUG}",     grunt.config( 'conductor.wp.debug' ) )
                            .replace( "{WP_KEYS}",      '' );
                    }
                }
            },
            theme: {
                expand: true,
                flatten: true,
                src: 'wp-content/themes/scaffold-child/*',
                dest: 'wp-content/themes/project' // + grunt.config( 'conductor.project.name' )
            }
        },
        http: {
            install: {
                options: {
                    url: 'http://conductor.local/wordpress/wp-admin/install.php?step=2',
                    method: 'POST',
                    form: {
                        weblog_title:       'Conductor', 
                        user_name:          'user',
                        admin_password:     'password',
                        admin_password2:    'password',
                        admin_email:        'gizburdt@gmail.com'
                    }
                },
            },
            login: {
                options: {
                    url: 'http://conductor.local/wordpress/wp-admin/install.php?step=2',
                    method: 'POST',
                    form: {
                        user_login:         'user',
                        user_pass:          'password',
                    }
                },
            },
            create_user: {
                options: {
                    url: 'http://conductor.local/wordpress/wp-admin/user-new.php',
                    method: 'POST',
                    form: {
                        user_login:         'gijs2',
                        user_email:         'gijs@ginius.nl',
                        pass:               'test',
                        pass2:              'test',
                        role:               'subscriber',
                        send_password:      1,
                    },
                    auth: {
                        user:               'user',
                        pass:               'password'
                    }
                },
            }
        },
        concat: {
           
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-prompt');
    grunt.loadNpmTasks('grunt-http');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Taskrunners
    grunt.registerTask( 'setup', ['prompt:wp_config', 'prompt:install', 'prompt:theme', 'copy:wp_config', 'copy:theme', 'http:install'] );
    grunt.registerTask( 'create-user', ['prompt:url', 'prompt:login', 'prompt:create_user', 'http:create_user'] );
    grunt.registerTask( 'default', ['concat'] );
};