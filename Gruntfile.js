module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        prompt: {
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
            wp_config: {
                options: {
                    questions: [
                        {
                            config: 'conductor.config.db.name',
                            type: 'input',
                            message: 'DB_NAME:',
                            default: 'conductor'
                        },
                        {
                            config: 'conductor.config.db.user',
                            type: 'input',
                            message: 'DB_USER:',
                            default: 'root'
                        },
                        {
                            config: 'conductor.config.db.password',
                            type: 'input',
                            message: 'DB_PASSWORD:',
                            default: 'root'
                        },
                        {
                            config: 'conductor.config.db.host',
                            type: 'input',
                            message: 'DB_HOST:',
                            default: 'localhost'
                        },
                        {
                            config: 'conductor.config.db.charset',
                            type: 'input',
                            message: 'DB_CHARSET:',
                            default: 'utf8'
                        },
                        {
                            config: 'conductor.config.db.prefix',
                            type: 'input',
                            message: 'DB_PREFIX:',
                            default: 'wp_'
                        },
                        {
                            config: 'conductor.config.wp.lang',
                            type: 'input',
                            message: 'WP_LANG:',
                            default: 'nl_NL'
                        },
                        {
                            config: 'conductor.config.wp.debug',
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
                            config: 'conductor.admin.name',
                            type: 'input',
                            message: 'ADMIN_NAME:',
                        },
                        {
                            config: 'conductor.admin.password',
                            type: 'password',
                            message: 'ADMIN_PASSWORD:',
                        },
                        {
                            config: 'conductor.admin.email',
                            type: 'input',
                            message: 'ADMIN_EMAIL:',
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
            login: {
                options: {
                    questions: [
                        {
                            config: 'conductor.admin.name',
                            type: 'input',
                            message: 'ADMIN_NAME:',
                        },
                        {
                            config: 'conductor.admin.password',
                            type: 'password',
                            message: 'ADMIN_PASSWORD:',
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
                        },
                        {
                            config: 'conductor.user.email',
                            type: 'input',
                            message: 'USER_EMAIL:',
                        },
                        {
                            config: 'conductor.user.password',
                            type: 'password',
                            message: 'USER_PASSWORD:',
                        },
                        {
                            config: 'conductor.user.role',
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
                            .replace( "{DB_NAME}",      grunt.config( 'conductor.config.db.name' ) )
                            .replace( "{DB_USER}",      grunt.config( 'conductor.config.db.user' ) )
                            .replace( "{DB_PASSWORD}",  grunt.config( 'conductor.config.db.password' ) )
                            .replace( "{DB_HOST}",      grunt.config( 'conductor.config.db.host' ) )
                            .replace( "{DB_CHARSET}",   grunt.config( 'conductor.config.db.charset' ) )
                            .replace( "{DB_COLLATE}",   '' )
                            .replace( "{DB_PREFIX}",    grunt.config( 'conductor.config.db.prefix' ) )
                            .replace( "{WP_LANG}",      grunt.config( 'conductor.config.wp.lang' ) )
                            .replace( "{WP_DEBUG}",     grunt.config( 'conductor.config.wp.debug' ) )
                            .replace( "{WP_KEYS}",      '' );
                    }
                }
            },
            theme: {
                expand: true,
                flatten: true,
                src: 'wp-content/themes/scaffold-child/*',
                dest: 'wp-content/themes/<%= conductor.theme.name %>'
            }
        },
        http: {
            install: {
                options: {
                    url: '<%= conductor.project.url %>/wordpress/wp-admin/install.php?step=2',
                    method: 'POST',
                    form: {
                        weblog_title:       '<%= conductor.project.title %>', 
                        user_name:          '<%= conductor.admin.name %>',
                        admin_password:     '<%= conductor.admin.password %>',
                        admin_password2:    '<%= conductor.admin.password %>',
                        admin_email:        '<%= conductor.admin.email %>'
                    }
                },
            },
            login: {
                options: {
                    url: '<%= conductor.project.url %>/wordpress/wp-login.php',
                    jar: true,
                    method: 'POST',
                    form: {
                        user_login:         '<%= conductor.admin.name %>',
                        user_pass:          '<%= conductor.admin.password %>',
                    }
                },
            },
            create_user: {
                options: {
                    url: '<%= conductor.project.url %>/wordpress/wp-admin/user-new.php',
                    jar: true,
                    method: 'POST',
                    form: {
                        user_login:         '<%= conductor.user.name %>',
                        user_email:         '<%= conductor.user.email %>',
                        pass:               '<%= conductor.user.password %>',
                        pass2:              '<%= conductor.user.password %>',
                        role:               '<%= conductor.user.role %>',
                        send_password:      '<%= conductor.user.password.send %>',
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Taskrunners
    grunt.registerTask( 'install', ['prompt:url', 'prompt:wp_config', 'prompt:install', 'prompt:theme', 'copy:wp_config', 'copy:theme', 'http:install'] );
    grunt.registerTask( 'create-user', ['prompt:url', 'prompt:login', 'prompt:create_user', 'http:login', 'http:create_user'] );
    grunt.registerTask( 'default', ['concat'] );
};