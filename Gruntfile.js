module.exports = function(grunt) {

    // Config
    var config = {  
        pkg: grunt.file.readJSON('package.json')
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