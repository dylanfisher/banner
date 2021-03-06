// Based on Chris Coyier's Grunt boilerplate
// https://github.com/chriscoyier/My-Grunt-Boilerplate

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          // cssmin will minify later
          style: 'expanded'
        },
        files: {
          'css/build/application.css': 'css/sass/application.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/build/*.css',
        dest: 'css/build/prefixed/'
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/build/minified/application.css': ['css/build/prefixed/application.css']
        }
      }
    },

    jst: {
      compile: {
        options: {
          processName: function(filename) {
              //Shortens the file path for the template.
              var file = filename.slice(filename.indexOf("template"), filename.length);
              return file.replace('.html', '');
          }
        },
        files: {
          "js/application/templates.js": ["js/templates/**/*.html"]
        }
      }
    },

    jshint: {
      options: {
        ignores: ['js/application/templates.js']
      },
      beforeconcat: ['js/application/*.js']
    },

    concat: {
      dist: {
        src: [
          'js/vendor/*.js',
          'js/application/*.js'
        ],
        dest: 'js/build/application.js'
      }
    },

    uglify: {
      build: {
        src: 'js/build/application.js',
        dest: 'js/build/application.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      php: {
        files: ['*.php'],
        options: {
          spawn: false,
        }
      },
      scripts: {
        files: ['js/application/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      templates: {
        files: ['js/templates/**/*.html'],
        tasks: ['jst', 'jshint', 'concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['css/sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false,
        }
      },
      images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['jst', 'concat', 'uglify', 'sass', 'imagemin']);

  grunt.registerTask('dev', ['connect', 'watch']);

};
