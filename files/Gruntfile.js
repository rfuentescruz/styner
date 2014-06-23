var path = require('path'),
    spawn = require('child_process').spawn,
    util = require('util'),

    extend = require('extend');

module.exports = function(grunt) {
    var baseConfig = grunt.file.readJSON(
        path.resolve(__dirname + '/Stynerfile-defaults.json')
    );

    var config = extend(
        true,
        baseConfig,
        grunt.file.readJSON('Stynerfile.json')
    );

    grunt.initConfig({
        project: config,
        watch: {
            src: {
                files: ['<%= project.srcDir %>/**', '!<%= project.srcDir %>/less/*.less'],
                tasks: ['flatten']
            },
            less: {
                files: ['<%= project.srcDir %>/less/*.less'],
                tasks: ['less']
            }
        },
        less: {
            development: {
                files: {
                    '<%= project.srcDir %>/css/styles.css': '<%= project.srcDir %>/less/styles.less'
                }
            }
        }
    });

    grunt.loadTasks(__dirname + '/../node_modules/grunt-contrib-watch/tasks/');
    grunt.loadTasks(__dirname + '/../node_modules/grunt-contrib-less/tasks/');

    grunt.registerTask('default', ['watch']);

    grunt.registerTask('flatten', 'Inline styles of an HTML document', function(target) {
        var done = this.async();

        var input = util.format('file://%s/%s/%s',
            process.cwd(),
            grunt.config.get('project.srcDir'),
            grunt.config.get('project.srcFilename')
        );

        var output = util.format('%s/%s/%s',
            process.cwd(),
            grunt.config.get('project.buildDir'),
            target || grunt.config.get('project.buildFilename')
        );

        var inliner = spawn(
            __dirname + '/../node_modules/.bin/phantomjs',
            [
                __dirname + '/../bin/inliner',
                input,
                output,
                grunt.config.get('project.viewport.width') + ':' + grunt.config.get('project.viewport.height')
            ],
            {stdio: 'inherit'}
        );

        inliner.on('end', done);
    });
};
