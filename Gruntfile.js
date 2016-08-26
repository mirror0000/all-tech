// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
//Code example 01-minify
module.exports = function(grunt) {
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Code example 04-linting
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //Code example 05-coffeescript Load the plugin that provides the "coffee" task.
    grunt.loadNpmTasks('grunt-contrib-coffee');
    // configure grunt
    grunt.initConfig({
        uglify: {
            target: {
                src: 'Grunt/js/foo.js',
                dest: 'Grunt/js/foo.min.js'
            }
        },
        //Code example 03-simple-config
        bar: {
            foo: 42
        },
        //Code example 04-linting
        jshint: {
            options: {
                //ensures that curly braces are always used in if, for, and while statements;
                curly: true,
                //ensures that strict equality === is always used.
                eqeqeq: true
            },
            //from src and subdirectory
            target1: ['Gruntfile.js', 'Grunt/src/**/*.js']
        },
        coffee: {
            target1: {
                expand: true,
                flatten: true,
                cwd: 'Grunt/src/',
                src: ['*.coffee'],
                dest: 'Grunt/build/',
                ext: '.js'
            },
            target2: {
                files: {
                    'Grunt/build/bazz.js': 'Grunt/src/*.coffee'
                }
            }
        }
    });

    // log message
    grunt.log.write('Grunt is running\n');

    //Default task
    grunt.registerTask('default', ['uglify']);

    //Code example 02-simple-task
    grunt.registerTask('foo', function() {
        console.log('Foo task is running....');
    });

    //Code example 03-simple-config
    grunt.registerTask('bar', function() {
        var bar = grunt.config.get('bar');
        var bazz = bar.foo + 7;
        grunt.log.writeln("Bazz is " + bazz);
    });

    //Code example 04-linting
    grunt.registerTask('jshintnoti', ['jshint']);

    //Code example 05-coffeescript
    grunt.registerTask('coffeetask', ['coffee']);
};