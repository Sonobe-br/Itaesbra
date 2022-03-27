'use strict';

var modRewrite = require('connect-modrewrite');

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: '_dev/sass/**/*.{scss,sass}',
                tasks: ['sass']
            },  
            js: {
                files: ['_dev/scripts/**/*.js'],
                tasks: ['uglify']      
            },
            html: {
                files: ['_dev/index.html'],
                tasks: ['htmlmin']
            }
        },
        clean: {
            //all_css: ['content/css/*.css'],
            html: ['index.html']
        },
        sass: {
            default: {
                options: {
                    style: 'compressed',
                    sourceMap: true,
                    noCache: true
                },       
                files: {
                    'content/css/main.min.css': '_dev/sass/main.scss',
                    'content/css/main2.min.css': '_dev/sass/main2.scss'                
                }
            }     
        },
        uglify: {
            options: {
                beautify: false,
                mangle: false,
                sourceMap: false,
            },
            js: {
                files: {
                    'scripts/main.min.js': [
                        '_dev/scripts/main.js'
                    ],
                    'scripts/main-itaesbra.min.js': [
                        '_dev/scripts/main-itaesbra.js'
                    ],
                    'scripts/main-fale-conosco.min.js': [
                        '_dev/scripts/main-fale-conosco.js'
                    ],
                    'scripts/main-estrutura.min.js': [
                        '_dev/scripts/main-estrutura.js'
                    ],
                    'scripts/main-premios.min.js': [
                        '_dev/scripts/main-premios.js'
                    ],
                    'scripts/main-clientes.min.js': [
                        '_dev/scripts/main-clientes.js'
                    ],
                    'scripts/main-produtos.min.js': [
                        '_dev/scripts/main-produtos.js'
                    ],
                    'scripts/main-qualidade.min.js': [
                        '_dev/scripts/main-qualidade.js'
                    ],
                    'scripts/main-pecas-3d.min.js': [
                        '_dev/scripts/main-pecas-3d.js'
                    ],
                    'scripts/menuHome.js': [
                        '_dev/scripts/menuHome.js'
                    ],
                    'scripts/menuInternas.js': [
                        '_dev/scripts/menuInternas.js'
                    ]
                },
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'content/css/**/*.css',
                        'scripts/**/*.js',
                        '**/*.html'
                    ]
                },
                options: {
                    port: 80,
                    watchTask: true,
                    server: {
                        https: false,
                        httpModule: 'http2'
                    }
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': '_dev/index.html'                    
                }
            }
        }  
    });    

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-sass');
      
    grunt.registerTask('start', ['clean', 'uglify', 'sass', 'htmlmin', 'browserSync', 'watch']);
}; 