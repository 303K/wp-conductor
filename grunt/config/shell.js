module.exports = {

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
        command: 'php wp-cli.phar core config --dbname=<%= wp.config.db.name %> --dbuser=<%= wp.config.db.user %> --dbpass=<%= wp.config.db.password %> --dbhost=<%= wp.config.db.host %> --dbprefix=<%= wp.config.db.prefix %> --dbcharset=<%= wp.config.db.charset %> --locale=<%= wp.config.wp.lang %> --extra-php <<< "define(\'WP_DEBUG\', <%= wp.config.wp.debug %>);\n\ndefine(\'WP_CONTENT_DIR\', dirname(__FILE__) . \'/../wp-content\');\ndefine(\'WP_CONTENT_URL\', \'<%= project.url %>/wp-content\' );"',
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

    // Update
    update: {
        command: [
            'php wp-cli.phar core update',
            'php wp-cli.phar core update-db',
            'php wp-cli.phar plugin update-all'
        ].join(' && '),
        options: { stdout: true }
    },

    // Cleanup
    cleanup : {
        command: [
            'rm wordpress/wp-config.php',
            'php wp-cli.phar cache flush'
        ].join(' && '),
        options: { stdout: true }
    }    

}