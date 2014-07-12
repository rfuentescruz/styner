var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        project: {
            testResultDir: 'tests/logs/' + Date.now()
        },
        casper: {
            options: {
                test: true,
                concise: true,
                'no-colors': true
            },
            specificityParser: {
                src: ['tests/lib_tests/test-specificity-parser.js'],
                dest: '<%= project.testResultDir %>/test-specificity-parser.xml'
            },
            styner: {
                src: ['tests/lib_tests/test-styner.js'],
                dest: '<%= project.testResultDir %>/test-styner.xml'
            }
        },
        jison: {
            lexer: {
                options: { moduleType: 'amd' },
                files: { 'lib/css-parser.js': 'src/css.jison' }
            }
        },
        requirejs: {
            options: {
                baseUrl: 'src/',
                name: '../node_modules/almond/almond',
                include: ['styner'],
                paths: {
                    'css-parser': '../lib/css-parser'
                },
                wrap: {
                    startFile: "src/api.start.frag.js",
                    endFile: "src/api.end.frag.js"
                },
            },
            compiled: {
                options: {
                    out: 'lib/styner.js',
                    optimize: 'none'
                }
            },
            optimized: {
                options: {
                    out: 'lib/styner.min.js'
                }
            }
        },
        watch: {
            specificityParser: {
                files: ['src/css.jison'],
                tasks: ['jison:lexer', 'casper:specificityParser']
            },
            stynerCore: {
                files: ['src/*.js'],
                tasks: ['requirejs:optimized', 'casper:styner']
            }
        },
    });

    grunt.loadNpmTasks('grunt-casper');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jison');

    grunt.registerTask('compile', [
        'jison:lexer',
        'requirejs:compiled',
        'requirejs:optimized'
    ]);

    grunt.registerTask('test', ['casper']);
};
