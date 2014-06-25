module.exports = {

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
                    default: '3.9.1'
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
                    config: 'wp.config.db.prefix',
                    type: 'input',
                    message: 'DB_PREFIX:',
                    default: 'wp_'
                },
                {
                    config: 'wp.config.db.charset',
                    type: 'input',
                    message: 'DB_CHARSET:',
                    default: 'utf8'
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
    scaffold: {
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
                            checked: false
                        },
                        {
                            value: 'duplicate-post',
                            name: 'Duplicate post',
                            checked: false
                        },
                        {
                            value: 'wp-smushit',
                            name: 'WP Smush.it',
                            checked: false
                        },
                        {
                            value: 'custom-css-by-dev7studios',
                            name: 'Custom CSS',
                            checked: false
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
                        },
                        {
                            value: 'p3-profiler',
                            name: 'P3 Profiler',
                            checked: false
                        }
                    ]
                }
            ]
        }
    }
    
}