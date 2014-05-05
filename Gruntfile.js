'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                curly: true, // require curly braces around single-line code blocks
                eqeqeq: true, // envforce === and !== use
                immed: true, // forbit immediate function w/o parens
                latedef: true, // warn about local vars used before declaration
                noarg: true, // warn about deprecated callee and caller use
                quotmark: true, // enforce consistent double/single quote use in a file
                undef: true, // warn about undefined variables
                unused: true, // warn about unused variables
                trailing: true, // don't allow trailing whitespace
                browser: true, // define browser globals (document, etc.)
                jquery: true, // define jQuery globals
                node: true // define node.js globals
            },
            all: [
                'Gruntfile.js',
                'js/site/**/*.js'
            ]
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'compressed'
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'js/scripts.min.js': [
                        'js/site/*.js'
                    ]
                },
                options: {
                    sourceMap: true
                }
            }
        },
        watch: {
            compass: {
                files: [
                    'sass/**/*.scss'
                ],
                tasks: ['compass']
            },
            js: {
                files: [
                    'js/site/*.js'
                ],
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    '*.html',
                    'css/**/*.css',
                    'js/site/*.js',
                    '*.php'
                ]
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Register tasks
    grunt.registerTask('default', [
        'less',
        'uglify'
    ]);
    grunt.registerTask('dev', [
        'watch'
    ]);

};
