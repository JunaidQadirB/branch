/*global module:false*/
module.exports = function (grunt) {
// These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');

// Project configuration.
    grunt.initConfig({
            // Metadata.
            pkg: grunt.file.readJSON('package.json'),

            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
            // Task configuration.
            copy: {
                fonts: {
                    files: [
                        {
                            expand: true,
                            cwd: 'node_modules/bootstrap/dist/fonts',
                            src: ['**'],
                            dest: 'fonts/',
                            filter: 'isFile'
                        }
                    ]
                }
            },
            concat: {
                options: {
                    banner: '<%= banner %>',
                    stripBanners: true
                },
                js: {
                    src: [
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/bootstrap/dist/js/bootstrap.js',
                        'js/site.js'
                    ],
                    dest: 'js/all.js'
                }
            },
            less: {
                development: {
                    files: {
                        "css/site.css": "less/site.less"
                    }
                }
            },
            uglify: {
                options: {
                    banner: '<%= banner %>'
                },
                js: {
                    src: 'js/all.js',
                    dest: 'js/all.min.js'
                }
            },
            cssmin: {
                options: {
                    banner: '<%= banner %>'
                },
                target: {
                    files: {
                        'css/all.min.css': ['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.css', 'css/site.css']
                    }
                }
            },
            jshint: {
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    unused: true,
                    boss: true,
                    eqnull: true,
                    browser: true,
                    globals: {
                        jQuery: true
                    }
                },
                gruntfile: {
                    src: 'Gruntfile.js'
                }
            },
            watch: {
                gruntfile: {
                    files: '<%= jshint.gruntfile.src %>',
                    tasks: ['jshint:gruntfile']
                },
                scripts: {
                    files: ['js/*.js'],
                    task: 'jshint',
                    options: {
                        spawn: false
                    }
                },
                styles: {
                    files: ['less/site.less'],
                    tasks: ['less', 'cssmin']
                }
                /*lib_test: {
                 files: '<%= jshint.lib_test.src %>',
                 tasks: ['jshint:lib_test']
                 }*/
            },
            // grunt-open will open your browser at the project's URL
            open: {
                all: {
                    // Gets the port from the connect configuration
                    path: 'http://localhost:<%= connect.server.options.port%>'
                }
            }
        }
    );
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-open');
    // Creates the `server` task
    grunt.registerTask('server', [
        // Open before connect because connect uses keepalive at the moment
        // so anything after connect wouldn't run
        'open'
    ]);
// Default task.
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'copy', 'server']);

};
